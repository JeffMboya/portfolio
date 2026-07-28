import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

export interface ProjectMeta {
  title: string
  slug: string
  description: string
  stack: string[]
  date: string
  github: string | null
  demo: string | null
  featured: boolean
  cover: string | null
  result?: string
}

const ProjectMetaSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  date: z.string(),
  github: z.string().nullable().default(null),
  demo: z.string().nullable().default(null),
  featured: z.boolean(),
  cover: z.string().nullable().default(null),
  result: z.string().optional(),
})

const projectsDir = path.join(process.cwd(), 'content', 'projects')

function readProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf8')
      const { data } = matter(raw)
      return ProjectMetaSchema.parse(data)
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllProjects(): ProjectMeta[] {
  return readProjects().filter((p) => p.featured)
}

/** Every project that has a built page, featured or not — used by the sitemap. */
export function getEveryProject(): ProjectMeta[] {
  return readProjects()
}

export function getProjectBySlug(slug: string): { meta: ProjectMeta; content: string } {
  const filePath = path.join(projectsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`)
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: ProjectMetaSchema.parse(data), content }
}

export function getAllProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
