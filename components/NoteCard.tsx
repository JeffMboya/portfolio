import Link from 'next/link'
import type { NoteMeta } from '@/lib/notes'

function formatDate(raw: string): string {
  const [year, month] = raw.split('-')
  if (!month) return year
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function NoteCard({ meta }: { meta: NoteMeta }) {
  return (
    <Link
      href={`/notes/${meta.slug}`}
      className="flex items-start justify-between gap-4 rounded-xl px-5 py-4 transition-all duration-150 group hover:translate-y-[-1px]"
      style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
    >
      <div className="flex-1 min-w-0">
        <div className="text-[11px] uppercase tracking-wider font-medium mb-1" style={{ color: 'var(--muted-dim)' }}>
          {formatDate(meta.date)}
        </div>
        <h3 className="text-[15px] font-semibold tracking-tight mb-1" style={{ color: 'var(--foreground)' }}>
          {meta.title}
        </h3>
        <p className="text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>
          {meta.description}
        </p>
      </div>
      <span className="text-sm shrink-0 mt-1 transition-colors duration-150" style={{ color: 'var(--muted-dim)' }}>
        ↗
      </span>
    </Link>
  )
}
