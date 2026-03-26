import Link from 'next/link'
import type { ProjectMeta } from '@/lib/projects'

interface ProjectCardProps {
  meta: ProjectMeta
}

export default function ProjectCard({ meta }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${meta.slug}`}
      className="block border border-[#e8e8e8] rounded-xl p-7 bg-white
        hover:border-[#16a34a] hover:translate-y-[-2px]
        transition-all duration-150 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-[11px] text-[#16a34a] uppercase tracking-wider mb-2 font-medium">
            {meta.date}
          </div>
          <h3 className="text-[18px] font-semibold tracking-tight mb-2 text-[#111]">
            {meta.title}
          </h3>
          <p className="text-[13px] text-[#555] leading-relaxed max-w-[520px]">
            {meta.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {meta.stack.map((s) => (
              <span
                key={s}
                className="bg-[#f0fdf4] text-[#15803d] text-[11px] px-2 py-0.5 rounded border border-[#bbf7d0]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <span className="text-[#bbb] text-lg mt-1 group-hover:text-[#16a34a] transition-colors duration-150">
          ↗
        </span>
      </div>
    </Link>
  )
}
