import Link from 'next/link'
import Image from 'next/image'
import StackPill from './StackPill'

const stack = [
  'Go', 'Rust', 'TypeScript', 'WebAssembly',
  'Python', 'Siemens PLCs', 'Docker', 'MQTT',
]

export default function Hero() {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="relative w-[64px] h-[64px] rounded-full ring-2 ring-offset-2 overflow-hidden shrink-0"
          style={{ '--tw-ring-color': 'var(--accent)', '--tw-ring-offset-color': 'var(--background)' } as React.CSSProperties}
        >
          <Image
            src="/avatar.jpg"
            alt="Jeff Mboya"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <div className="text-[15px] font-semibold" style={{ color: 'var(--foreground)' }}>Jeff Mboya</div>
          <div className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>
            Software Engineer · Nairobi
          </div>
        </div>
      </div>

      {/* Currently */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded"
          style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent-muted)' }}
        >
          Currently
        </span>
        <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
          Contributing to{' '}
          <a
            href="https://github.com/absmach/propeller"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors duration-150"
            style={{ color: 'var(--accent)' }}
          >
            Propeller
          </a>
          {' '}· Open to backend / systems roles
        </span>
      </div>

      <h1 className="text-[44px] font-bold leading-[1.1] tracking-tight mb-5" style={{ color: 'var(--foreground)' }}>
        From Nairobi&apos;s first DAC machine<br />
        to WebAssembly task orchestrators.
      </h1>
      <p className="text-[16px] leading-relaxed max-w-[560px] mb-7" style={{ color: 'var(--muted)' }}>
        I&apos;ve wired PLCs for a carbon capture startup, co-authored propulsion
        research, and shipped distributed infrastructure in Go and Rust. I build
        systems that work in the real world — hardware or software.
      </p>
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/#work"
          className="text-[13px] font-medium px-5 py-2.5 rounded-md transition-colors duration-150"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
        >
          View my work →
        </Link>
        <Link
          href="/research"
          className="text-[13px] px-5 py-2.5 rounded-md transition-colors duration-150"
          style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
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
