import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Now — Jeff Mboya',
  description: 'What Jeff Mboya is working on right now.',
}

export default function NowPage() {
  return (
    <div className="pb-20 max-w-[640px]">
      <div className="flex items-center gap-3 mb-10">
        <h1 className="text-[28px] font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
          Now
        </h1>
        <span className="text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          Updated March 2026 · <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">what is this?</a>
        </span>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted-dim)' }}>
            Building
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            {/* TODO: Replace with what you're actually building */}
            Working on Propeller at Abstract Machines — a WebAssembly task orchestration runtime in Go and Rust. The interesting problem is scheduling compute tasks onto heterogeneous edge nodes while keeping the control plane lightweight enough to run on a Raspberry Pi.
          </p>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted-dim)' }}>
            Learning
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            {/* TODO: Replace with what you're actually learning */}
            Going deeper on the WASM component model and how it changes the boundary between host runtimes and guest modules. Also re-reading Dijkstra's semaphore papers — concurrent systems problems don't change, only the vocabulary does.
          </p>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted-dim)' }}>
            Thinking about
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            {/* TODO: Replace with what's on your mind */}
            Whether the next decade of climate infrastructure in Africa gets built on imported SaaS tooling or on open protocols engineered locally. The DAC work at Octavia convinced me the latter is possible — the gap is mostly institutional, not technical.
          </p>
        </div>
      </div>
    </div>
  )
}
