import type { Metadata } from 'next'
import Link from 'next/link'
import { getNotesByCategory } from '@/lib/notes'
import NoteCard from '@/components/NoteCard'

export const metadata: Metadata = {
  title: 'Blogs — Jeff Mboya',
  description: 'Technical writing and personal essays on hardware, software, and the space between.',
  alternates: { canonical: '/blogs/' },
}

export default function BlogsPage() {
  const tech = getNotesByCategory('tech').slice(0, 3)
  const thoughts = getNotesByCategory('thoughts').slice(0, 3)

  return (
    <div className="pb-20">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[14px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Home</Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Blogs</span>
        </nav>
      </div>

      <div className="mb-12">
        <div className="text-[13px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
          Blogs
        </div>
        <h1 className="text-[34px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>Blogs</h1>
        <p className="text-[17px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Technical writing and personal essays on hardware, software, and the space between.
        </p>
      </div>

      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[13px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>Tech</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          <Link href="/blogs/tech/" className="text-[15px] font-medium transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            View all →
          </Link>
        </div>
        {tech.length === 0 ? (
          <p className="text-[16px]" style={{ color: 'var(--muted-dim)' }}>Nothing here yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tech.map((note) => <NoteCard key={note.slug} meta={note} />)}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[13px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>Thoughts</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          <Link href="/blogs/thoughts/" className="text-[15px] font-medium transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            View all →
          </Link>
        </div>
        {thoughts.length === 0 ? (
          <p className="text-[16px]" style={{ color: 'var(--muted-dim)' }}>Nothing here yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {thoughts.map((note) => <NoteCard key={note.slug} meta={note} />)}
          </div>
        )}
      </section>
    </div>
  )
}
