import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

const projectsDir = path.join(process.cwd(), 'content', 'projects')

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.mdx'))
  const projects = files.map((filename) => {
    const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf8')
    const { data } = matter(raw)
    return data as ProjectMeta
  })
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getProjectBySlug(slug: string): { meta: ProjectMeta; content: string } {
  const filePath = path.join(projectsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`)
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: data as ProjectMeta, content }
}

export function getAllProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
