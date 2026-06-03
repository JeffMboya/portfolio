import type { Metadata } from 'next'
import Link from 'next/link'
import { getProjectBySlug } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Lab — Jeff Mboya',
  description: 'Side projects: Swarm, Njia, and Radar.',
  alternates: { canonical: '/lab/' },
}

const SIDE_PROJECTS = ['swarm', 'njia', 'radar']

const DETAILS: Record<string, { insight: string; icon: string }> = {
  swarm: {
    icon: '◈',
    insight:
      'Round 1 is independent — every agent forms a view without knowing what anyone else thinks. Round 2 is the debate. The emergent consensus is what no single prompt could produce.',
  },
  njia: {
    icon: '◉',
    insight:
      'Safety scoring is time-aware: a darkness alert filed at 21:00 carries full weight at night but zero weight at noon. Hazard expiry is per-category — flooding clears in 3 days, missing pavement in 180.',
  },
  radar: {
    icon: '◎',
    insight:
      '`radar build <N>` takes any paper from your last run and generates a full project brief: name, tagline, problem, stack, MVP features, task list, and time estimate.',
  },
}

export default function LabPage() {
  const projects = SIDE_PROJECTS.map((slug) => {
    const { meta } = getProjectBySlug(slug)
    return { ...meta, ...DETAILS[slug] }
  })

  return (
    <div className="pb-24">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[14px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Lab</span>
        </nav>
      </div>

      <div className="mb-4">
        <h1 className="text-[34px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Lab
        </h1>
        <p className="text-[17px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Things built for curiosity, not a job description. Each one started as a problem
          I kept running into and couldn&apos;t find a good solution for.
        </p>
      </div>

      <div className="mb-16">
        <p
          className="text-[13px] uppercase tracking-widest font-medium pt-10 pb-5"
          style={{ color: 'var(--muted-dim)' }}
        >
          Side Projects
        </p>
        <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
        {projects.map((project) => (
          <div
            key={project.slug}
            className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-12 py-10"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div>
              <Link
                href={`/work/${project.slug}/`}
                className="text-[18px] font-bold hover:underline underline-offset-2"
                style={{ color: 'var(--foreground)' }}
              >
                {project.title}
              </Link>
              {project.result && (
                <p className="text-[15px] mt-1.5 font-medium" style={{ color: 'var(--accent)' }}>
                  {project.result}
                </p>
              )}
              <div className="flex flex-col gap-2 mt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] hover:underline underline-offset-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    GitHub ↗
                  </a>
                )}
                <Link
                  href={`/work/${project.slug}/`}
                  className="text-[13px] hover:underline underline-offset-2"
                  style={{ color: 'var(--muted-dim)' }}
                >
                  Full write-up →
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-0.5">
              <p className="text-[16px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
              <div
                className="rounded-lg px-4 py-3.5 text-[15px] leading-relaxed"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                <span
                  className="text-[12px] uppercase tracking-widest font-medium block mb-1.5"
                  style={{ color: 'var(--muted-dim)' }}
                >
                  Key detail
                </span>
                {project.insight}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[14px] px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--surface)',
                      color: 'var(--muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
