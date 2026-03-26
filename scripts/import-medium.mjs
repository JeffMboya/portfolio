#!/usr/bin/env node
/**
 * Import posts from Medium RSS feed → content/notes/<slug>.mdx
 *
 * Usage:
 *   node scripts/import-medium.mjs           # skip existing files
 *   node scripts/import-medium.mjs --force   # overwrite all
 */
import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'
import TurndownService from 'turndown'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const FEED_URL = 'https://medium.com/feed/@jangina.mboya'
const NOTES_DIR = path.join(__dirname, '..', 'content', 'notes')
const FORCE = process.argv.includes('--force')

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['"''""]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function isoToYearMonth(dateStr) {
  const d = new Date(dateStr)
  return isNaN(d) ? dateStr : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

async function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        return get(r.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      r.on('data', (c) => chunks.push(c))
      r.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
      r.on('error', reject)
    }).on('error', reject)
  })
}

function cdataOf(xml, tag) {
  const escaped = tag.replace(/:/g, '\\:')
  const m = xml.match(new RegExp(`<${escaped}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${escaped}>`))
  return m ? m[1].trim() : ''
}

function textOf(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([^<]+)<\\/${tag}>`))
  return m ? m[1].trim() : ''
}

function parseItems(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((m) => {
    const raw = m[1]
    return {
      title: cdataOf(raw, 'title') || textOf(raw, 'title') || 'Untitled',
      link: textOf(raw, 'link'),
      pubDate: textOf(raw, 'pubDate'),
      content: cdataOf(raw, 'content:encoded'),
      tags: [...raw.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)].map((c) => c[1]),
    }
  })
}

function cleanHtml(html) {
  return html
    // remove Medium tracking pixel
    .replace(/<img[^>]*medium\.com\/_\/stat[^>]*>/gi, '')
    // remove figure/img blocks (CDN images won't serve cross-origin)
    .replace(/<figure[\s\S]*?<\/figure>/gi, '')
    // remove "Originally published at ..." footer
    .replace(/<hr\s*\/?>\s*<p><em>Originally published[\s\S]*$/i, '')
    // remove cross-publication footer link
    .replace(/<hr\s*\/?>\s*<p><a href="https:\/\/medium\.com[\s\S]*$/i, '')    // normalize bare <pre> (no <code> child) → <pre><code> for turndown
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (match, content) => {
      if (/<code/i.test(content)) return match
      const text = content
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')
      return `<pre><code>${text}</code></pre>`
    })}

/** Escape { and } outside fenced code blocks so MDX doesn't parse them as JSX */
function escapeMdxBraces(md) {
  const parts = md.split(/(```[\s\S]*?```)/g)
  return parts
    .map((part, i) => {
      if (i % 2 === 1) return part // inside code fence — leave untouched
      return part.replace(/\{/g, '\\{').replace(/\}/g, '\\}')
    })
    .join('')
}

function extractDescription(html) {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  const sentences = text.match(/[^.!?]+[.!?]+/g) || []
  return sentences.slice(0, 2).join(' ').trim().slice(0, 200)
}

// --- turndown ---
const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' })
td.remove(['img', 'figure', 'iframe'])

// --- main ---
console.log(`Fetching ${FEED_URL} …`)
const xml = await get(FEED_URL)
const items = parseItems(xml)
console.log(`Found ${items.length} posts\n`)

if (!fs.existsSync(NOTES_DIR)) fs.mkdirSync(NOTES_DIR, { recursive: true })

let created = 0, skipped = 0

for (const item of items) {
  const slug = slugify(item.title)
  const dest = path.join(NOTES_DIR, `${slug}.mdx`)

  if (fs.existsSync(dest) && !FORCE) {
    console.log(`skip   ${slug}.mdx`)
    skipped++
    continue
  }

  const html = cleanHtml(item.content)
  const date = isoToYearMonth(item.pubDate)
  const description = extractDescription(html).replace(/"/g, "'")
  const body = escapeMdxBraces(td.turndown(html))

  const front = [
    '---',
    `title: "${item.title.replace(/"/g, "'")}"`,
    `slug: ${slug}`,
    `description: "${description}"`,
    `date: "${date}"`,
    item.tags.length ? `tags: [${item.tags.map((t) => `"${t}"`).join(', ')}]` : null,
    `source: "${item.link.split('?')[0]}"`,
    '---',
  ]
    .filter(Boolean)
    .join('\n')

  fs.writeFileSync(dest, `${front}\n\n${body}\n`)
  console.log(`write  ${slug}.mdx`)
  created++
}

console.log(`\nDone — ${created} created, ${skipped} skipped`)
