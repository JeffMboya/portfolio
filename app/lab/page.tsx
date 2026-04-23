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
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--foreground)' }}>Lab</span>
        </nav>
      </div>

      <div className="mb-16">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
          Lab
        </div>
        <h1 className="text-[36px] font-bold tracking-tight mb-4" style={{ color: 'var(--foreground)' }}>
          Side Projects
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[520px]" style={{ color: 'var(--muted)' }}>
          Things built for curiosity, not a job description. Each one started as a problem
          I kept running into and couldn&apos;t find a good solution for.
        </p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div key={project.slug}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 py-14">

              {/* Left — main info */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[11px] font-mono tabular-nums"
                    style={{ color: 'var(--muted-dim)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[18px]" style={{ color: 'var(--accent)' }}>
                    {project.icon}
                  </span>
                </div>

                <h2
                  className="text-[40px] font-bold tracking-tight leading-none mb-4"
                  style={{ color: 'var(--foreground)' }}
                >
                  {project.title}
                </h2>

                <p
                  className="text-[15px] leading-relaxed mb-7 max-w-[480px]"
                  style={{ color: 'var(--muted)' }}
                >
                  {project.description}
                </p>

                <div
                  className="rounded-lg px-4 py-3.5 text-[13px] leading-relaxed max-w-[480px]"
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                  }}
                >
                  <span
                    className="text-[10px] uppercase tracking-widest font-medium block mb-1.5"
                    style={{ color: 'var(--muted-dim)' }}
                  >
                    Key detail
                  </span>
                  {project.insight}
                </div>
              </div>

              {/* Right — meta */}
              <div className="flex flex-col gap-6 lg:pt-10">
                {project.result && (
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-widest font-medium block mb-2"
                      style={{ color: 'var(--muted-dim)' }}
                    >
                      Result
                    </span>
                    <p
                      className="text-[14px] font-medium leading-snug"
                      style={{ color: 'var(--accent)' }}
                    >
                      {project.result}
                    </p>
                  </div>
                )}

                <div>
                  <span
                    className="text-[10px] uppercase tracking-widest font-medium block mb-2.5"
                    style={{ color: 'var(--muted-dim)' }}
                  >
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] px-2.5 py-1 rounded"
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

                <div className="flex flex-col gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium underline underline-offset-2 transition-opacity duration-150 hover:opacity-70"
                      style={{ color: 'var(--accent)' }}
                    >
                      View on GitHub ↗
                    </a>
                  )}
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] transition-opacity duration-150 hover:opacity-70"
                    style={{ color: 'var(--muted)' }}
                  >
                    Full write-up →
                  </Link>
                </div>
              </div>
            </div>

            {i < projects.length - 1 && (
              <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
