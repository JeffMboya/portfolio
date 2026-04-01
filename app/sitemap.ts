import type { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'
import { getAllNotes } from '@/lib/notes'

export const dynamic = 'force-static'

const BASE_URL = 'https://jeffmboya.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((p) => ({
    url: `${BASE_URL}/work/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const notes = getAllNotes().map((n) => ({
    url: `${BASE_URL}/blogs/${n.slug}/`,
    lastModified: new Date(n.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/research/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blogs/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...projects,
    ...notes,
  ]
}
