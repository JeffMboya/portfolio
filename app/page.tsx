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
          <span className="text-[11px] text-[#22c55e] uppercase tracking-widest font-medium">Selected Work</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <div className="flex flex-col gap-4">
          {projects.map((meta) => (
            <ProjectCard key={meta.slug} meta={meta} />
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 mb-20 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-[20px] font-semibold tracking-tight mb-3 text-[#f0f0f0]">About me</h2>
          <p className="text-[13px] text-[#888] leading-relaxed">
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
            className="flex items-center gap-2.5 text-[13px] text-[#888] bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] rounded-md px-3.5 py-2.5 hover:border-[rgba(255,255,255,0.2)] hover:text-[#f0f0f0] transition-colors duration-150"
          >
            <span className="w-4 h-4 bg-[rgba(255,255,255,0.1)] rounded-sm inline-block shrink-0" />
            github.com/JeffMboya
          </a>
          <a
            href="https://linkedin.com/in/jeffmboya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[13px] text-[#888] bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] rounded-md px-3.5 py-2.5 hover:border-[rgba(255,255,255,0.2)] hover:text-[#f0f0f0] transition-colors duration-150"
          >
            <span className="w-4 h-4 bg-[rgba(255,255,255,0.1)] rounded-sm inline-block shrink-0" />
            linkedin.com/in/jeffmboya
          </a>
        </div>
      </section>

      <section id="contact" className="text-center py-16 border-t border-[rgba(255,255,255,0.08)] mb-16">
        <h2 className="text-[28px] font-bold tracking-tight mb-3 text-[#f0f0f0]">
          Have a hard problem?
        </h2>
        <p className="text-[14px] text-[#888] mb-7 max-w-[440px] mx-auto leading-relaxed">
          Open to backend, systems, and infrastructure roles. Always happy to hear interesting proposals.
        </p>
        <a
          href="https://linkedin.com/in/jeffmboya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] text-[#888] px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] hover:text-[#f0f0f0] transition-colors duration-150"
        >
          Connect on LinkedIn
        </a>
      </section>
    </>
  )
}
