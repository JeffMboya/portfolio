import type { Metadata } from 'next'
import Link from 'next/link'
import { getNotesByCategory } from '@/lib/notes'
import NoteCard from '@/components/NoteCard'

export const metadata: Metadata = {
  title: 'Thoughts — Jeff Mboya',
  description: 'Opinions, observations, and half-formed ideas on AI, authorship, startups, and everything else.',
  alternates: { canonical: '/blogs/thoughts/' },
}

export default function ThoughtsBlogsPage() {
  const notes = getNotesByCategory('thoughts')
  const [featured, ...rest] = notes

  return (
    <div className="pb-20">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Home</Link>
          <span>›</span>
          <Link href="/blogs" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Blogs</Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Thoughts</span>
        </nav>
      </div>

      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
          Category
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>Thoughts</h1>
        <p className="text-[15px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Opinions, observations, and half-formed ideas on AI, authorship, startups, and everything else.
        </p>
      </div>

      {notes.length === 0 ? (
        <p className="text-[14px]" style={{ color: 'var(--muted-dim)' }}>Nothing here yet — check back soon.</p>
      ) : (
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
      )}
    </div>
  )
}
