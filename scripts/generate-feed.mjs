/**
 * Generates public/feed.xml from content/notes/*.mdx
 * Run via `npm run build` (prebuild hook in package.json)
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const notesDir = path.join(root, 'content', 'notes')
const outPath = path.join(root, 'public', 'feed.xml')

const SITE_URL = 'https://jeffmboya.com'
const AUTHOR = 'Jeff Mboya'

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const files = fs.existsSync(notesDir)
  ? fs.readdirSync(notesDir).filter((f) => f.endsWith('.mdx'))
  : []

const items = files
  .map((filename) => {
    const raw = fs.readFileSync(path.join(notesDir, filename), 'utf8')
    const { data } = matter(raw)
    return {
      title: data.title ?? '',
      slug: data.slug ?? filename.replace(/\.mdx$/, ''),
      description: data.description ?? '',
      date: data.date ?? '',
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const itemsXml = items
  .map(
    (item) => `
  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${SITE_URL}/blogs/${item.slug}/</link>
    <guid isPermaLink="true">${SITE_URL}/blogs/${item.slug}/</guid>
    <description>${escapeXml(item.description)}</description>
    <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    <author>${escapeXml(AUTHOR)}</author>
  </item>`
  )
  .join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(AUTHOR)}</title>
    <link>${SITE_URL}/</link>
    <description>Systems engineering, software, and research by ${escapeXml(AUTHOR)}.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>
`

fs.writeFileSync(outPath, xml, 'utf8')
console.log(`✓ feed.xml generated (${items.length} item${items.length !== 1 ? 's' : ''})`)
