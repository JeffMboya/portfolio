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
    event: 'JKUAT-COETEC',
    paper: 'Improving Small Pest Bird Detection in YOLOv5s for Autonomous Bird Deterrent Systems',
    topic: 'Computer vision · Precision agriculture',
  },
  {
    year: 2024,
    event: 'JKUAT-COETEC',
    paper: 'Development of Solid Propellant Motor for Low Altitude Model Rockets',
    topic: 'Propulsion · Rocketry',
  },
  {
    year: 2024,
    event: 'JKUAT-COETEC',
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
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Talks</span>
        </nav>
      </div>

      <div className="mb-12">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
          Public Work
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Talks
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[520px]" style={{ color: 'var(--muted)' }}>
          Conference papers and appearances spanning rocketry, computer vision, and climate tech.
        </p>
      </div>

      {/* Conference Papers */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>
          Conference Papers
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>{presentations.length} papers</span>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        {presentations.map((p, i) => (
          <div
            key={i}
            className="rounded-xl px-5 py-4"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <p className="text-[14px] font-semibold leading-snug" style={{ color: 'var(--foreground)' }}>
                {p.paper}
              </p>
              <span className="text-[13px] font-semibold tabular-nums shrink-0" style={{ color: 'var(--accent)' }}>
                {p.year}
              </span>
            </div>
            <p className="text-[12px] mb-1" style={{ color: 'var(--muted)' }}>{p.event}</p>
            <p className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>{p.topic}</p>
          </div>
        ))}
      </div>

      <p className="text-[13px] mb-12" style={{ color: 'var(--muted-dim)' }}>
        Full paper details, abstracts, and Google Scholar links on the{' '}
        <Link href="/research" className="underline underline-offset-2 transition-colors" style={{ color: 'var(--accent)' }}>
          Research
        </Link>{' '}
        page.
      </p>

      {/* Conference Appearances */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--foreground)' }}>
          Conference Appearances
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>{appearances.length} events</span>
      </div>

      <div className="flex flex-col gap-3">
        {appearances.map((c) => (
          <div
            key={c.year}
            className="flex items-start gap-5 rounded-xl px-5 py-4"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <div className="text-[13px] font-semibold tabular-nums shrink-0 pt-0.5" style={{ color: 'var(--accent)' }}>
              {c.year}
            </div>
            <div>
              <div className="text-[14px] font-semibold leading-snug mb-1" style={{ color: 'var(--foreground)' }}>
                {c.name}
              </div>
              <div className="text-[12px] italic leading-relaxed" style={{ color: 'var(--muted)' }}>
                {c.theme}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
