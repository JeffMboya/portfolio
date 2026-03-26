import Link from 'next/link'
import type { ProjectMeta } from '@/lib/projects'

interface ProjectCardProps {
  meta: ProjectMeta
}

export default function ProjectCard({ meta }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${meta.slug}`}
      className="block border border-[rgba(255,255,255,0.08)] rounded-xl p-7 bg-[#161616]
        hover:border-[rgba(255,255,255,0.18)] hover:bg-[#1a1a1a] hover:translate-y-[-2px]
        transition-all duration-150 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-[11px] text-[#22c55e] uppercase tracking-wider mb-2 font-medium">
            {meta.date}
          </div>
          <h3 className="text-[18px] font-semibold tracking-tight mb-2 text-[#f0f0f0]">
            {meta.title}
          </h3>
          <p className="text-[13px] text-[#888] leading-relaxed max-w-[520px]">
            {meta.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {meta.stack.map((s) => (
              <span
                key={s}
                className="bg-[#1f1f1f] text-[#666] text-[11px] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <span className="text-[#444] text-lg mt-1 group-hover:text-[#22c55e] transition-colors duration-150">
          ↗
        </span>
      </div>
    </Link>
  )
}
