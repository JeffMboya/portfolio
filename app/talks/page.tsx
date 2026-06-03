import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Talks — Jeff Mboya',
  description: 'Conference papers and appearances by Jeff Mboya.',
  alternates: { canonical: '/talks/' },
}

const presentations = [
  {
    year: 2025,
    event: 'Sustainable Research and Innovation (SRI) Conference',
    paper:
      'Simulation and Airflow Experimentation of a Multi-Layer Adsorbent Chamber for Enhanced Direct Air Capture Efficiency',
    topic: 'Climate technology · Direct Air Capture',
  },
  {
    year: 2024,
    event: 'Sustainable Research and Innovation (SRI) Conference',
    paper: 'Improving Small Pest Bird Detection in YOLOv5s for Autonomous Bird Deterrent Systems',
    topic: 'Computer vision · Precision agriculture',
  },
  {
    year: 2024,
    event: 'Sustainable Research and Innovation (SRI) Conference',
    paper: 'Development of Solid Propellant Motor for Low Altitude Model Rockets',
    topic: 'Propulsion · Rocketry',
  },
  {
    year: 2024,
    event: 'Sustainable Research and Innovation (SRI) Conference',
    paper: 'Development of a Solid Propellant Motor for High-Powered Model Rockets',
    topic: 'Propulsion · Rocketry',
  },
]

const appearances = [
  {
    year: 2023,
    name: 'Sustainable Research & Innovation (SRI) Conference',
    theme: 'Linking Industry with Academia through Research and Innovation for Sustainable Development',
  },
  {
    year: 2022,
    name: 'Sustainable Research & Innovation (SRI) Conference',
    theme: 'Sustainable Research in Science Technology and Innovation During and Post COVID-19',
  },
  {
    year: 2021,
    name: 'Sustainable Research & Innovation (SRI) Conference',
    theme: 'Sustainable Development through Innovation, Technology & Industry Linkage',
  },
  {
    year: 2020,
    name: '29th Institution of Engineers of Kenya (IEK) International Convention',
    theme: 'Sustainable Engineering in the Era of Climate Change',
  },
]

export default function TalksPage() {
  return (
    <div className="pb-24">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[14px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Talks</span>
        </nav>
      </div>

      <div className="mb-4">
        <h1 className="text-[34px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Talks
        </h1>
        <p className="text-[17px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Conference papers and appearances spanning rocketry, computer vision, and climate tech.
        </p>
      </div>

      <div className="mb-16">
        <p
          className="text-[13px] uppercase tracking-widest font-medium pt-10 pb-5"
          style={{ color: 'var(--muted-dim)' }}
        >
          Conference Papers
        </p>
        <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
        {presentations.map((p, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-12 py-10"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div>
              <p className="text-[18px] font-bold leading-snug" style={{ color: 'var(--foreground)' }}>
                {p.event}
              </p>
              <p className="text-[15px] mt-1.5" style={{ color: 'var(--muted)' }}>
                {p.topic}
              </p>
              <p className="text-[13px] uppercase tracking-wider mt-2" style={{ color: 'var(--muted-dim)' }}>
                {p.year}
              </p>
            </div>
            <p className="text-[16px] leading-relaxed pt-0.5" style={{ color: 'var(--muted)' }}>
              {p.paper}
            </p>
          </div>
        ))}
        <p className="text-[15px] mt-6" style={{ color: 'var(--muted-dim)' }}>
          Full abstracts and Google Scholar links on the{' '}
          <Link href="/research" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>
            Research
          </Link>{' '}
          page.
        </p>
      </div>

      <div>
        <p
          className="text-[13px] uppercase tracking-widest font-medium pt-10 pb-5"
          style={{ color: 'var(--muted-dim)' }}
        >
          Conference Appearances
        </p>
        <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
        {appearances.map((c) => (
          <div
            key={`${c.year}-${c.name}`}
            className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-12 py-10"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div>
              <p className="text-[18px] font-bold leading-snug" style={{ color: 'var(--foreground)' }}>
                {c.name}
              </p>
              <p className="text-[13px] uppercase tracking-wider mt-2" style={{ color: 'var(--muted-dim)' }}>
                {c.year}
              </p>
            </div>
            <p className="text-[16px] leading-relaxed italic pt-0.5" style={{ color: 'var(--muted)' }}>
              {c.theme}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
