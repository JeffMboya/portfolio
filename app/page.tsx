import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects()

  return (
    <>
      <Hero />

      <section id="work" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] text-[#888] uppercase tracking-widest">Selected Work</span>
          <div className="flex-1 h-px bg-[#e8e8e8]" />
        </div>
        <div className="flex flex-col gap-4">
          {projects.map((meta) => (
            <ProjectCard key={meta.slug} meta={meta} />
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#f5f5f5] rounded-xl p-8 mb-20 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-[20px] font-semibold tracking-tight mb-3">About me</h2>
          <p className="text-[13px] text-[#555] leading-relaxed">
            Software engineer with a focus on systems programming, edge computing, and open source.
            I care about correctness, performance, and code that other engineers can reason about
            at 3am. When I&apos;m not writing Go or Rust I&apos;m usually reading about distributed
            systems or contributing to the WebAssembly ecosystem.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <a
            href="https://github.com/JeffMboya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[13px] text-[#555] bg-white border border-[#e8e8e8] rounded-md px-3.5 py-2.5 hover:border-[#ccc] transition-colors duration-150"
          >
            <span className="w-4 h-4 bg-[#e0e0e0] rounded-sm inline-block" />
            github.com/JeffMboya
          </a>
          <a
            href="https://linkedin.com/in/jeffmboya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[13px] text-[#555] bg-white border border-[#e8e8e8] rounded-md px-3.5 py-2.5 hover:border-[#ccc] transition-colors duration-150"
          >
            <span className="w-4 h-4 bg-[#e0e0e0] rounded-sm inline-block" />
            linkedin.com/in/jeffmboya
          </a>
          <a
            href="mailto:hello@jeffmboya.dev"
            className="flex items-center gap-2.5 text-[13px] text-[#555] bg-white border border-[#e8e8e8] rounded-md px-3.5 py-2.5 hover:border-[#ccc] transition-colors duration-150"
          >
            <span className="w-4 h-4 bg-[#e0e0e0] rounded-sm inline-block" />
            hello@jeffmboya.dev
          </a>
        </div>
      </section>

      <section id="contact" className="text-center py-12 border-t border-[#e8e8e8] mb-16">
        <h2 className="text-[24px] font-semibold tracking-tight mb-2.5">
          Let&apos;s work together
        </h2>
        <p className="text-[14px] text-[#666] mb-6">
          Open to backend, systems, and infrastructure roles. I&apos;ll reply within a day.
        </p>
        <a
          href="mailto:hello@jeffmboya.dev"
          className="inline-block bg-[#111] text-white text-[13px] px-5 py-2.5 rounded-md hover:bg-[#333] transition-colors duration-150"
        >
          Send me an email
        </a>
      </section>
    </>
  )
}
