import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNotes } from '@/lib/notes'

export const metadata: Metadata = {
  title: 'Logs — Jeff Mboya',
  description: 'Observations on hardware, software, and the space between.',
}

function formatDate(raw: string): string {
  const [year, month] = raw.split('-')
  if (!month) return year
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default function LogsPage() {
  const notes = getAllNotes()

  return (
    <div className="pb-20">
      <div className="mb-8">
        <Link href="/" className="text-[13px] transition-colors duration-150" style={{ color: 'var(--accent)' }}>
          ← Back
        </Link>
      </div>

      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
          Logs
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>Logs</h1>
        <p className="text-[15px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Observations on hardware, software, and the space between.
        </p>
      </div>

      {notes.length === 0 ? (
        <p className="text-[14px]" style={{ color: 'var(--muted-dim)' }}>Nothing here yet — check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/logs/${note.slug}`}
              className="block rounded-xl p-6 hover:translate-y-[-2px] transition-all duration-150 group"
              style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--muted-dim)' }}>
                    {formatDate(note.date)}
                  </div>
                  <h2 className="text-[17px] font-semibold tracking-tight mb-2" style={{ color: 'var(--foreground)' }}>
                    {note.title}
                  </h2>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {note.description}
                  </p>
                </div>
                <span className="text-lg mt-1 shrink-0" style={{ color: 'var(--muted-dim)' }}>↗</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
