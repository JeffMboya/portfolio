import Link from 'next/link'
import Image from 'next/image'
import StackPill from './StackPill'

const stack = [
  'Go', 'Rust', 'TypeScript', 'WebAssembly',
  'Docker', 'MQTT', 'PostgreSQL', 'Linux',
]

export default function Hero() {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-3 mb-5">
        <div className="relative w-[64px] h-[64px] rounded-full ring-2 ring-[#22c55e] ring-offset-2 ring-offset-[#0c0c0c] overflow-hidden shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Jeff Mboya"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <div className="text-[15px] font-semibold text-[#f0f0f0]">Jeff Mboya</div>
          <div className="text-[11px] text-[#22c55e] uppercase tracking-widest font-medium">Software Engineer</div>
        </div>
      </div>
      <h1 className="text-[48px] font-bold leading-[1.1] tracking-tight mb-5">
        I build systems<br />
        <span className="text-[#22c55e]">that run at the edge.</span>
      </h1>
      <p className="text-[16px] text-[#888] leading-relaxed max-w-[540px] mb-7">
        Backend and systems engineer focused on WebAssembly, distributed task
        execution, and infrastructure. Currently contributing to{' '}
        <a
          href="https://github.com/absmach/propeller"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#22c55e] underline underline-offset-2 hover:text-[#16a34a] transition-colors duration-150"
        >
          Propeller
        </a>{' '}
        — open source WASM task orchestration in Go&nbsp;+&nbsp;Rust.
      </p>
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/#work"
          className="bg-[#22c55e] text-[#0c0c0c] text-[13px] font-medium px-5 py-2.5 rounded-md hover:bg-[#16a34a] transition-colors duration-150"
        >
          View my work →
        </Link>
        <Link
          href="/research"
          className="text-[#888] text-[13px] px-5 py-2.5 rounded-md border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.25)] hover:text-[#f0f0f0] transition-colors duration-150"
        >
          Research
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <StackPill key={s} label={s} />
        ))}
      </div>
    </section>
  )
}
