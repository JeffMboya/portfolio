import Image from 'next/image'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Timeline from '@/components/Timeline'
import ContactForm from '@/components/ContactForm'
import { getAllProjects } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects()

  return (
    <>
      <Hero />

      <Timeline />

      <section id="work" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>Selected Work</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((meta) => (
            <ProjectCard key={meta.slug} meta={meta} />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="rounded-xl p-8 mb-20 grid grid-cols-1 sm:grid-cols-2 gap-8"
        style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <div>
          <h2 className="text-[20px] font-semibold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>About me</h2>
          <p className="text-[13px] leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
            Engineer who has worked across the full stack — from wiring PLCs and running pilot plant
            operations at a climate tech startup, to publishing computer vision research, to building
            distributed infrastructure in Go and Rust. I care about systems that work in the real
            world, whether that&apos;s a DAC machine in Nairobi or a WebAssembly task orchestrator
            running at the edge.
          </p>
          <div
            className="rounded-lg px-4 py-3.5 text-[12px] leading-relaxed"
            style={{
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent-muted)',
              color: 'var(--accent)',
            }}
          >
            The unusual part: I&apos;ve debugged PLC ladder logic and Go goroutines in the same
            week — and the mental models are more similar than they look.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <Image
              src="/about-photo.jpg"
              alt="Jeff Mboya"
              fill
              className="object-cover"
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
              <span className="w-4 h-4 rounded-sm inline-block shrink-0" style={{ backgroundColor: 'var(--border-hover)' }} />
              github.com/JeffMboya
            </a>
            <a
              href="https://linkedin.com/in/jeffmboya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
              style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
            >
              <span className="w-4 h-4 rounded-sm inline-block shrink-0" style={{ backgroundColor: 'var(--border-hover)' }} />
              linkedin.com/in/jeffmboya
            </a>
            <a
              href="https://x.com/mboya_angina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
              style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
            >
              <span className="w-4 h-4 rounded-sm inline-block shrink-0" style={{ backgroundColor: 'var(--border-hover)' }} />
              x.com/mboya_angina
            </a>
            <a
              href="https://scholar.google.com/citations?user=KmGiUgcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] rounded-md px-3.5 py-2.5 transition-colors duration-150"
              style={{ color: 'var(--muted)', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)' }}
            >
              <span className="w-4 h-4 rounded-sm inline-block shrink-0" style={{ backgroundColor: 'var(--border-hover)' }} />
              Google Scholar
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>Contact</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[22px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
              Working on something hard?
            </h2>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              Working on something hard at the intersection of physical systems and software? I might
              be the unusual fit you&apos;ve been looking for. Open to backend, systems, and
              infrastructure roles — and always happy to hear interesting proposals.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
