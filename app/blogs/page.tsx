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
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--foreground)' }}>Blogs</span>
        </nav>
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
      ) : (() => {
        const [featured, ...rest] = notes
        return (
          <div className="flex flex-col gap-4">
            {featured && <NoteCard key={featured.slug} meta={featured} featured />}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rest.map((note) => (
                  <NoteCard key={note.slug} meta={note} />
                ))}
              </div>
            )}
          </div>
        )
      })()}
    </div>
  )
}
