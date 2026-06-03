import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Awards — Jeff Mboya',
  description: 'Recognition and awards for Jeff Mboya — IBM Call for Code global winner and PCT patent co-inventor.',
  alternates: { canonical: '/awards/' },
}

interface Award {
  year: number | string
  title: string
  issuer: string
  description: string
}

const awards: Award[] = [
  {
    year: '2024–25',
    title: 'PCT International Patent Co-inventor · ×3',
    issuer: 'World Intellectual Property Organization',
    description:
      'Co-inventor on three PCT patent applications covering novel Direct Air Capture system methods, developed at Octavia Carbon. Filed during the $3.1M Series A period.',
  },
  {
    year: 2022,
    title: 'SRI Conference Best Student Paper Award',
    issuer: 'Sustainable Research and Innovation Conference',
    description:
      'Awarded to 1 student paper out of 13 submissions. Received the award for the paper titled "Improving Small Pest Bird Detection in YOLOv5s for Autonomous Bird Deterrent Systems."',
  },
  {
    year: 2021,
    title: 'IBM Call for Code — Global Winner',
    issuer: 'IBM',
    description:
      "Built an AI-powered climate solution at Qualislabs that won IBM's Call for Code — one of the world's largest open-source development competitions, drawing 180,000+ developers across 165 nations. Won the Middle East and Africa regional round, then the global title.",
  },
  {
    year: 2021,
    title: '2nd Runners-up, Huawei Seeds for the Future',
    issuer: 'Huawei Kenya',
    description:
      'Awarded to 1 team in Kenya for creativity and innovativeness in using gamified artificial intelligence for early detection and diagnosis of eye cataracts in children.',
  },
]

export default function AwardsPage() {
  return (
    <div className="pb-24">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[14px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Awards</span>
        </nav>
      </div>

      <div className="mb-4">
        <h1 className="text-[34px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Awards
        </h1>
        <p className="text-[17px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Notable recognition for technical work and research.
        </p>
      </div>

      <div className="mb-16">
        <p
          className="text-[13px] uppercase tracking-widest font-medium pt-10 pb-5"
          style={{ color: 'var(--muted-dim)' }}
        >
          Recognition
        </p>
        <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
        {awards.map((award) => (
          <div
            key={award.title}
            className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-12 py-10"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div>
              <p className="text-[18px] font-bold leading-snug" style={{ color: 'var(--foreground)' }}>
                {award.title}
              </p>
              <p className="text-[15px] mt-1.5" style={{ color: 'var(--muted)' }}>
                {award.issuer}
              </p>
              <p className="text-[13px] uppercase tracking-wider mt-2" style={{ color: 'var(--muted-dim)' }}>
                {award.year}
              </p>
            </div>
            <p className="text-[16px] leading-relaxed pt-0.5" style={{ color: 'var(--muted)' }}>
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
