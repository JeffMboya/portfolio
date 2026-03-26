import Link from 'next/link'
import type { ProjectMeta } from '@/lib/projects'

interface ProjectCardProps {
  meta: ProjectMeta
}

export default function ProjectCard({ meta }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${meta.slug}`}
      className="flex flex-col border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#161616]
        hover:border-[rgba(255,255,255,0.18)] hover:bg-[#1a1a1a] hover:translate-y-[-2px]
        transition-all duration-150 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-[11px] text-[#555] uppercase tracking-wider font-medium">
          {meta.date}
        </div>
        <span className="text-[#444] group-hover:text-[#22c55e] transition-colors duration-150 text-sm">
          ↗
        </span>
      </div>
      <h3 className="text-[17px] font-semibold tracking-tight mb-2 text-[#f0f0f0]">
        {meta.title}
      </h3>
      <p className="text-[13px] text-[#888] leading-relaxed flex-1">
        {meta.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {meta.stack.map((s) => (
          <span
            key={s}
            className="bg-[#1f1f1f] text-[#666] text-[11px] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]"
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  )
}
