import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Timeline from '@/components/Timeline'
import ContactForm from '@/components/ContactForm'
import { getAllProjects, getProjectBySlug } from '@/lib/projects'
import { getAllNotes } from '@/lib/notes'

export default function Home() {
  const projects = getAllProjects()
  const latestNotes = getAllNotes().slice(0, 1)
  const labProjects = ['swarm', 'njia', 'radar'].slice(0, 1).map((slug) => getProjectBySlug(slug).meta)

  return (
    <>
      <Hero />

      <Timeline />

      <section id="work" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>Selected Work</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((meta) => (
            <ProjectCard key={meta.slug} meta={meta} />
          ))}
        </div>
      </section>

      <section id="about" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>About</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div
          className="rounded-xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              I build high-reliability infrastructure where there is no safety net. My work has always
              lived at &ldquo;Day 0&rdquo; — the stage where systems are still fragile, constraints are
              real, and success depends on engineering judgment rather than excess capital. From designing
              solid rocket motors at Nakuja Project to helping build the Global South&apos;s first Direct
              Air Capture control system at Octavia Carbon, I focus on turning first-principles engineering
              into durable industrial systems.
            </p>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              Whether I&apos;m writing Go and Rust orchestration systems for distributed WebAssembly
              execution at Abstract Machines, refining DAC plant controls, or designing embedded systems
              for industrial deployment — the goal is always the same: build systems that work reliably
              in the real world. That mindset has led to 3 PCT patents, 100+ propulsion tests, and
              systems that moved from prototype to industrial deployment.
            </p>
            <div
              className="rounded-lg px-4 py-3.5 text-[12px] leading-relaxed"
              style={{
                backgroundColor: 'var(--accent-light)',
                border: '1px solid var(--accent-muted)',
                color: 'var(--accent)',
              }}
            >
              I am most valuable where the blueprint does not yet exist — where the job is not to
              optimise an existing machine, but to build the machine the industry will depend on next.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <Image
                src="/about-me.png"
                alt="Jeff Mboya"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/JeffMboya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
                style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                github.com/JeffMboya
              </a>
              <a
                href="https://linkedin.com/in/jeffmboya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
                style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/jeffmboya
              </a>
              <a
                href="https://x.com/mboya_angina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
                style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                x.com/mboya_angina
              </a>
              <a
                href="https://scholar.google.com/citations?user=KmGiUgcAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
                style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5 12 0z" />
                </svg>
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>Research</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div
          className="rounded-xl p-6 mb-3"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-start gap-3">
              <span className="text-[11px] font-medium shrink-0 mt-0.5 px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-muted)' }}>2025</span>
              <div>
                <p className="text-[13px] font-medium leading-snug mb-0.5" style={{ color: 'var(--foreground)' }}>
                  Simulation and Airflow Experimentation of a Multi-Layer Adsorbent Chamber for Enhanced Direct Air Capture Efficiency
                </p>
                <p className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>Sustainable Research and Innovation Conference</p>
              </div>
            </div>
        </div>
        <a href="/research" className="text-[13px] font-medium transition-colors duration-150" style={{ color: 'var(--accent)' }}>
          View all 4 publications →
        </a>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>From the lab</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div className="flex flex-col gap-4">
          {labProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="hover-card block rounded-xl p-6 transition-all duration-150 group hover:translate-y-[-2px]"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <h3 className="text-[18px] font-semibold tracking-tight mb-2 group-hover:underline underline-offset-2" style={{ color: 'var(--foreground)' }}>
                {project.title}
              </h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
              <span className="text-[13px] font-medium" style={{ color: 'var(--accent)' }}>
                Explore →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/lab" className="text-[13px] font-medium transition-colors duration-150" style={{ color: 'var(--accent)' }}>
            View all projects →
          </Link>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>From the blog</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div className="flex flex-col gap-4">
          {latestNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/blogs/${note.slug}`}
              className="hover-card block rounded-xl p-6 transition-all duration-150 group hover:translate-y-[-2px]"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <h3 className="text-[18px] font-semibold tracking-tight mb-2 group-hover:underline underline-offset-2" style={{ color: 'var(--foreground)' }}>
                {note.title}
              </h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                {note.description}
              </p>
              <span className="text-[13px] font-medium" style={{ color: 'var(--accent)' }}>
                Read the post →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/blogs" className="text-[13px] font-medium transition-colors duration-150" style={{ color: 'var(--accent)' }}>
            View all posts →
          </Link>
        </div>
      </section>

      <section id="contact" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>Contact</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[22px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
              Working on something hard?
            </h2>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              If you&apos;re building difficult systems — especially where software meets the physical
              world — we should talk.
            </p>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              I work across backend, infrastructure, controls, and distributed systems, with enough
              hardware intuition to debug what most software teams can&apos;t see.
            </p>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              I&apos;ve shipped production systems in factories, pilot plants, and cloud infrastructure
              — from PLCs and control loops to Go services and distributed orchestration.
            </p>
            <p className="text-[13px]" style={{ color: 'var(--muted-dim)' }}>
              Open to backend, systems, and infrastructure roles, consulting, and unusual technical problems.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
