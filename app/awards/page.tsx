import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Awards — Jeff Mboya',
  description: 'Recognition and awards for Jeff Mboya — IBM Call for Code global winner and PCT patent co-inventor.',
  alternates: { canonical: '/awards/' },
}

const awards = [
  {
    year: 2021,
    title: 'IBM Call for Code — Global Winner',
    issuer: 'IBM',
    category: 'AI for Climate',
    description:
      "Built an AI-powered climate solution at Qualislabs that won IBM's Call for Code — one of the world's largest open-source development competitions, drawing 180,000+ developers across 165 nations. Won the Middle East and Africa regional round, then the global title.",
  },
  {
    year: '2024–25',
    title: 'PCT International Patent Co-inventor · ×3',
    issuer: 'World Intellectual Property Organization',
    category: 'Climate Technology',
    description:
      'Co-inventor on three PCT patent applications covering novel Direct Air Capture system methods, developed at Octavia Carbon. Filed during the $3.1M Series A period.',
  },
]

export default function AwardsPage() {
  return (
    <div className="pb-24">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Awards</span>
        </nav>
      </div>

      <div className="mb-12">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
          Recognition
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Awards
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[520px]" style={{ color: 'var(--muted)' }}>
          Notable recognition for technical work and research.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {awards.map((award) => (
          <div
            key={award.title}
            className="rounded-xl p-6"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <p className="text-[16px] font-semibold leading-snug" style={{ color: 'var(--foreground)' }}>
                  {award.title}
                </p>
                <p className="text-[13px] mt-1" style={{ color: 'var(--muted)' }}>
                  {award.issuer} · {award.category}
                </p>
              </div>
              <span className="text-[13px] font-semibold tabular-nums shrink-0" style={{ color: 'var(--accent)' }}>
                {award.year}
              </span>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
