interface Milestone {
  year: string
  role: string
  org: string
  track: string
  impact: string
  current?: boolean
}

const milestones: Milestone[] = [
  {
    year: '2020–22',
    role: 'Propulsion Engineer',
    org: 'Nakuja Project',
    track: 'Hardware',
    impact: 'Designed solid rocket motors; published at JKUAT-COETEC 2024.',
  },
  {
    year: '2020–23',
    role: 'Software Engineer',
    org: 'Qualislabs',
    track: 'Software',
    impact: 'IBM Call for Code 2021 global winner.',
  },
  {
    year: '2022–23',
    role: 'Electronics & Software',
    org: 'AMT Technologies',
    track: 'Hardware',
    impact: 'AI driver assistance — sensor fusion + embedded C.',
  },
  {
    year: '2023–24',
    role: 'I&C Engineer',
    org: 'Octavia Carbon',
    track: 'Hardware',
    impact: "Built the Global South's first DAC control system.",
  },
  {
    year: '2024–26',
    role: 'Deputy Head, R&D',
    org: 'Octavia Carbon',
    track: 'Research',
    impact: 'TRL 4→6 transition; CFD paper at SRI 2025.',
  },
  {
    year: '2023–',
    role: 'Software Engineer II',
    org: 'Abstract Machines',
    track: 'Software',
    impact: 'Wasm on ESP32-S3; distributed orchestration in Go + Rust.',
    current: true,
  },
]

const trackColor: Record<string, string> = {
  Hardware: 'var(--accent)',
  Research: '#f59e0b',
  Software: '#60a5fa',
}

function Card({ m, position }: { m: Milestone; position: 'above' | 'below' }) {
  const color = trackColor[m.track]
  return (
    <div
      className="rounded-lg px-3 py-2.5 w-full"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        ...(position === 'above'
          ? { borderBottom: `2px solid ${color}` }
          : { borderTop: `2px solid ${color}` }),
      }}
    >
      <div className="text-[10px] mb-1 text-center tabular-nums" style={{ color: 'var(--muted-dim)' }}>
        {m.year}
      </div>
      <div className="text-[12px] font-bold leading-snug mb-0.5 text-center" style={{ color: 'var(--foreground)' }}>
        {m.role}
      </div>
      <div className="text-[11px] mb-2 text-center" style={{ color: 'var(--muted-dim)' }}>
        {m.org}
      </div>
      <div className="text-[11px] leading-snug text-center" style={{ color: 'var(--muted)' }}>
        {m.impact}
      </div>
      {m.current && (
        <div className="flex justify-center mt-2">
          <span
            className="text-[9px] font-medium uppercase tracking-wider"
            style={{ color: 'var(--muted-dim)' }}
          >
            Now
          </span>
        </div>
      )}
    </div>
  )
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

      {/* Desktop: alternating above / below the spine */}
      <div className="hidden md:block">

        {/* Above-spine row: even-indexed items */}
        <div className="grid grid-cols-6">
          {milestones.map((m, i) => (
            <div key={i} className="px-1.5 flex flex-col justify-end" style={{ minHeight: '140px' }}>
              {i % 2 === 0 && (
                <>
                  <Card m={m} position="above" />
                  <div className="flex justify-center">
                    <div className="w-px h-4" style={{ backgroundColor: trackColor[m.track], opacity: 0.4 }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Spine row */}
        <div className="grid grid-cols-6 relative">
          <div
            className="absolute top-1/2 left-[8.33%] right-[8.33%] h-px -translate-y-1/2 z-0"
            style={{ backgroundColor: 'var(--border-hover)' }}
          />
          {milestones.map((m, i) => (
            <div key={i} className="flex items-center justify-center py-3 relative z-10">
              <div
                style={{
                  width: m.current ? '12px' : '10px',
                  height: m.current ? '12px' : '10px',
                  borderRadius: '50%',
                  backgroundColor: trackColor[m.track],
                  boxShadow: m.current
                    ? `0 0 0 4px color-mix(in srgb, ${trackColor[m.track]} 25%, transparent)`
                    : 'none',
                }}
              />
            </div>
          ))}
        </div>

        {/* Below-spine row: odd-indexed items */}
        <div className="grid grid-cols-6">
          {milestones.map((m, i) => (
            <div key={i} className="px-1.5 flex flex-col" style={{ minHeight: '140px' }}>
              {i % 2 === 1 && (
                <>
                  <div className="flex justify-center">
                    <div className="w-px h-4" style={{ backgroundColor: trackColor[m.track], opacity: 0.4 }} />
                  </div>
                  <Card m={m} position="below" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 mt-5">
          {Object.entries(trackColor).map(([track, color]) => (
            <div key={track} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>{track}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical cards with colored left border */}
      <div className="flex flex-col gap-0 md:hidden relative">
        <div
          className="absolute top-2 bottom-2 left-[9px] w-px"
          style={{ backgroundColor: 'var(--border-hover)' }}
        />
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-3 pb-4 relative">
            <div
              className="z-10 mt-3 shrink-0 rounded-full"
              style={{
                width: m.current ? '12px' : '10px',
                height: m.current ? '12px' : '10px',
                backgroundColor: trackColor[m.track],
                marginLeft: m.current ? '-1px' : '0',
                boxShadow: m.current
                  ? `0 0 0 3px color-mix(in srgb, ${trackColor[m.track]} 20%, transparent)`
                  : 'none',
              }}
            />
            <div
              className="flex-1 rounded-lg px-3 py-3"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <div className="text-[13px] font-bold leading-snug" style={{ color: 'var(--foreground)' }}>
                  {m.role}
                </div>
                {m.current && (
                  <span
                    className="text-[9px] font-medium uppercase tracking-wider shrink-0"
                    style={{ color: 'var(--muted-dim)' }}
                  >
                    Now
                  </span>
                )}
              </div>
              <div className="text-[11px] mb-1.5" style={{ color: 'var(--muted-dim)' }}>
                {m.org} · {m.year}
              </div>
              <div className="text-[12px] leading-snug" style={{ color: 'var(--muted)' }}>
                {m.impact}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
