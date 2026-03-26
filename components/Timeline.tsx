const milestones = [
  {
    year: '2021',
    role: 'I&C Engineer',
    org: 'Octavia Carbon',
    track: 'Hardware',
    detail: 'Wired the first PLC on Africa\'s leading DAC machine.',
  },
  {
    year: '2022',
    role: 'Team Lead, I&C',
    org: 'Octavia Carbon',
    track: 'Hardware',
    detail: 'Led instrumentation scale-up and DCS architecture.',
  },
  {
    year: '2022–23',
    role: 'Deputy Head of R&D',
    org: 'Octavia Carbon',
    track: 'Hardware',
    detail: 'Pilot plant operations, optimisation, and co-led R&D.',
  },
  {
    year: '2023–25',
    role: 'Published Researcher',
    org: 'JKUAT · Octavia',
    track: 'Research',
    detail: '4 papers: rocketry propulsion, computer vision, CFD airflow.',
  },
  {
    year: '2023–',
    role: 'Software Engineer',
    org: 'Propeller · Magistrala',
    track: 'Software',
    detail: 'Distributed WASM execution in Go + Rust. IoT at scale.',
  },
]

const trackColor: Record<string, string> = {
  Hardware: 'var(--accent)',
  Research: '#f59e0b',
  Software: '#60a5fa',
}

export default function Timeline() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>
          Career Arc
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start gap-0 relative">
        {/* Connecting line */}
        <div
          className="absolute top-[20px] left-4 right-4 h-px"
          style={{ backgroundColor: 'var(--border-hover)' }}
        />
        {milestones.map((m, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative px-2">
            {/* Dot */}
            <div
              className="w-[10px] h-[10px] rounded-full z-10 mb-3 shrink-0"
              style={{ backgroundColor: trackColor[m.track] }}
            />
            {/* Track pill */}
            <span
              className="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded mb-2"
              style={{
                color: trackColor[m.track],
                backgroundColor: `color-mix(in srgb, ${trackColor[m.track]} 12%, transparent)`,
              }}
            >
              {m.track}
            </span>
            <div className="text-[11px] font-semibold mb-1 text-center" style={{ color: 'var(--muted-dim)' }}>
              {m.year}
            </div>
            <div className="text-[12px] font-semibold text-center leading-snug mb-1" style={{ color: 'var(--foreground)' }}>
              {m.role}
            </div>
            <div className="text-[11px] text-center mb-2" style={{ color: 'var(--muted-dim)' }}>
              {m.org}
            </div>
            <div className="text-[11px] text-center leading-relaxed" style={{ color: 'var(--muted)' }}>
              {m.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 md:hidden relative">
        <div
          className="absolute top-2 bottom-2 left-[9px] w-px"
          style={{ backgroundColor: 'var(--border-hover)' }}
        />
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-4 pb-6 relative">
            <div
              className="w-[10px] h-[10px] rounded-full z-10 mt-1 shrink-0"
              style={{ backgroundColor: trackColor[m.track] }}
            />
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span
                  className="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style={{
                    color: trackColor[m.track],
                    backgroundColor: `color-mix(in srgb, ${trackColor[m.track]} 12%, transparent)`,
                  }}
                >
                  {m.track}
                </span>
                <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>{m.year}</span>
              </div>
              <div className="text-[13px] font-semibold leading-snug mb-0.5" style={{ color: 'var(--foreground)' }}>
                {m.role}
              </div>
              <div className="text-[12px] mb-1" style={{ color: 'var(--muted-dim)' }}>{m.org}</div>
              <div className="text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>{m.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
