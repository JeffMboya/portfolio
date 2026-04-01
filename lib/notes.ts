import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

export interface NoteMeta {
  title: string
  slug: string
  description: string
  date: string
  cover?: string | null
}

const NoteMetaSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  date: z.string(),
  cover: z.string().nullable().optional(),
})

const notesDir = path.join(process.cwd(), 'content', 'notes')

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(notesDir)) return []
  const files = fs.readdirSync(notesDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(notesDir, filename), 'utf8')
      const { data } = matter(raw)
      return NoteMetaSchema.parse(data)
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getNoteBySlug(slug: string): { meta: NoteMeta; content: string } {
  const filePath = path.join(notesDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Note not found: ${slug}`)
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: NoteMetaSchema.parse(data), content }
}

export function getAllNoteSlugs(): string[] {
  if (!fs.existsSync(notesDir)) return []
  return fs
    .readdirSync(notesDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
