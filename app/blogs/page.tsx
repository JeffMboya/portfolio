import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNotes } from '@/lib/notes'
import NoteCard from '@/components/NoteCard'

export const metadata: Metadata = {
  title: 'Blogs — Jeff Mboya',
  description: 'Observations on hardware, software, and the space between.',
}

export default function BlogsPage() {
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
          Blogs
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>Blogs</h1>
        <p className="text-[15px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Observations on hardware, software, and the space between.
        </p>
      </div>

      {notes.length === 0 ? (
        <p className="text-[14px]" style={{ color: 'var(--muted-dim)' }}>Nothing here yet — check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <NoteCard key={note.slug} meta={note} />
          ))}
        </div>
      )}
    </div>
  )
}
