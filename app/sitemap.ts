import type { MetadataRoute } from 'next'
import { getEveryProject } from '@/lib/projects'
import { getAllNotes } from '@/lib/notes'

export const dynamic = 'force-static'

const BASE_URL = 'https://jeffmboya.com'

/** Most recent of a set of frontmatter dates, ignoring unparseable ones. */
function newest(dates: string[]): Date {
  const times = dates.map((d) => new Date(d).getTime()).filter((t) => !Number.isNaN(t))
  return times.length ? new Date(Math.max(...times)) : new Date()
}

// Every URL below carries a trailing slash to match `trailingSlash: true` in
// next.config.ts — a slashless entry here is a 301 in Google's crawl.
export default function sitemap(): MetadataRoute.Sitemap {
  const allProjects = getEveryProject()
  const allNotes = getAllNotes()

  const projectsUpdated = newest(allProjects.map((p) => p.date))
  const notesUpdated = newest(allNotes.map((n) => n.date))
  const siteUpdated = newest([projectsUpdated.toISOString(), notesUpdated.toISOString()])

  const projects = allProjects.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const notes = allNotes.map((n) => ({
    url: `${BASE_URL}/blogs/${n.slug}/`,
    lastModified: new Date(n.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: siteUpdated, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/work/`, lastModified: projectsUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/lab/`, lastModified: projectsUpdated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blogs/`, lastModified: notesUpdated, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blogs/tech/`, lastModified: notesUpdated, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/blogs/thoughts/`, lastModified: notesUpdated, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/hardware/`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/research/`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/talks/`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/awards/`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/community/`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/now/`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.5 },
  ]

  return [...staticPages, ...projects, ...notes]
}
