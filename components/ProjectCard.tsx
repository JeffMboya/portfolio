import Link from 'next/link'
import Image from 'next/image'
import type { ProjectMeta } from '@/lib/projects'

interface ProjectCardProps {
  meta: ProjectMeta
}

export default function ProjectCard({ meta }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${meta.slug}`}
      className="flex flex-col rounded-xl overflow-hidden transition-all duration-150 group hover:translate-y-[-2px]"
      style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
    >
      {meta.cover ? (
        <div className="relative w-full h-[160px] overflow-hidden">
          <Image
            src={meta.cover}
            alt={meta.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, var(--surface), transparent)' }}
          />
        </div>
      ) : (
        <div
          className="w-full h-[160px] flex items-center justify-center"
          style={{ backgroundColor: 'var(--surface-hover)', borderBottom: '1px solid var(--border)' }}
        >
          <span className="text-[48px] font-bold tracking-tighter select-none" style={{ color: 'var(--border-hover)' }}>
            {meta.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="flex flex-col p-5 flex-1">
        <div className="flex items-start justify-between mb-2">
          <div className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'var(--muted-dim)' }}>
            {meta.date}
          </div>
          <span
            className="transition-colors duration-150 text-sm"
            style={{ color: 'var(--muted-dim)' }}
          >
            ↗
          </span>
        </div>
        <h3 className="text-[17px] font-semibold tracking-tight mb-2" style={{ color: 'var(--foreground)' }}>
          {meta.title}
        </h3>
        <p className="text-[13px] leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
          {meta.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {meta.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] px-2 py-0.5 rounded"
              style={{
                backgroundColor: 'var(--surface-hover)',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
