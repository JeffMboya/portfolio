import Link from 'next/link'
import Image from 'next/image'
import type { NoteMeta } from '@/lib/notes'
import { formatDate } from '@/lib/utils'

export default function NoteCard({ meta, featured }: { meta: NoteMeta; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/blogs/${meta.slug}`}
        className="flex flex-col rounded-xl overflow-hidden transition-all duration-150 group hover:translate-y-[-1px]"
        style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
      >
        {meta.cover && (
          <div className="relative w-full aspect-[5/2] overflow-hidden">
            <Image
              src={meta.cover}
              alt={meta.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="100vw"
            />
          </div>
        )}
        <div className="flex items-start justify-between gap-6 px-6 py-6">
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--muted-dim)' }}>
              {formatDate(meta.date)}
            </div>
            <h2 className="text-[22px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
              {meta.title}
            </h2>
            <p className="text-[14px] leading-relaxed max-w-[640px]" style={{ color: 'var(--muted)' }}>
              {meta.description}
            </p>
          </div>
          <span className="text-sm shrink-0 mt-1 transition-colors duration-150" style={{ color: 'var(--muted-dim)' }}>
            ↗
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blogs/${meta.slug}`}
      className="flex flex-col rounded-xl overflow-hidden transition-all duration-150 group hover:translate-y-[-2px]"
      style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
    >
      {meta.cover && (
        <div className="relative w-full aspect-[5/2] overflow-hidden">
          <Image
            src={meta.cover}
            alt={meta.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col px-5 py-4 flex-1">
        <div className="text-[11px] uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--muted-dim)' }}>
          {formatDate(meta.date)}
        </div>
        <h3 className="text-[15px] font-semibold tracking-tight mb-2 flex-1" style={{ color: 'var(--foreground)' }}>
          {meta.title}
        </h3>
        <p className="text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>
          {meta.description}
        </p>
        <span className="text-sm mt-4 transition-colors duration-150 self-end" style={{ color: 'var(--muted-dim)' }}>
          ↗
        </span>
      </div>
    </Link>
  )
}
