import Link from 'next/link'
import StackPill from './StackPill'

const stack = [
  'Go', 'Rust', 'TypeScript', 'WebAssembly',
  'Docker', 'MQTT', 'PostgreSQL', 'Linux',
]

export default function Hero() {
  return (
    <section className="mb-24">
      <div className="text-[11px] text-[#16a34a] uppercase tracking-widest mb-4 font-medium">
        Software Engineer
      </div>
      <h1 className="text-[42px] font-bold leading-[1.15] tracking-tight mb-5">
        I build systems<br />
        <span className="text-[#16a34a]">that run at the edge.</span>
      </h1>
      <p className="text-[16px] text-[#444] leading-relaxed max-w-[540px] mb-7">
        Backend and systems engineer focused on WebAssembly, distributed task
        execution, and infrastructure. Currently contributing to{' '}
        <a
          href="https://github.com/absmach/propeller"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#16a34a] underline underline-offset-2 hover:text-[#15803d] transition-colors duration-150"
        >
          Propeller
        </a>{' '}
        — open source WASM task orchestration in Go&nbsp;+&nbsp;Rust.
      </p>
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/#work"
          className="bg-[#16a34a] text-white text-[13px] px-5 py-2.5 rounded-md hover:bg-[#15803d] transition-colors duration-150"
        >
          View my work →
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
