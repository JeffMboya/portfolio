import Link from 'next/link'
import Image from 'next/image'
import StackPill from './StackPill'

const primaryStack = ['Go', 'Rust', 'C++']
const secondaryStack = ['TypeScript', 'WebAssembly', 'Python', 'C', 'TensorFlow/PyTorch', 'MATLAB', 'Siemens PLCs', 'PCB Design', 'Docker', 'MQTT']

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
            Systems Engineer · Nairobi
          </div>
        </div>
      </div>

      {/* Currently */}
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
          >
            Now
          </span>
          <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
            Software Engineer II at{' '}
            <a
              href="https://github.com/absmach/propeller"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-150"
              style={{ color: 'var(--accent)' }}
            >
              Abstract Machines
            </a>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: '#dcfce7', border: '1px solid #86efac', color: '#15803d' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0" />
            Open to work
          </span>
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--foreground)' }}
          >
            🏆 IBM Call for Code MEA Winner 2021
          </span>
        </div>
      </div>

      <h1 className="text-[44px] font-bold leading-[1.1] tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
        From the Global South&apos;s first DAC machine to WebAssembly task orchestrators.
      </h1>
      <p className="text-[14px] font-medium mb-5" style={{ color: 'var(--muted-dim)' }}>
        I build systems that bridge physical infrastructure and distributed software.
      </p>
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
        <a
          href="/resume.pdf"
          download="Jeff_Mboya_resume.pdf"
          className="text-[13px] font-medium px-5 py-2.5 rounded-md transition-colors duration-150"
          style={{ color: 'var(--foreground)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
        >
          See resume
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mb-1">
        {primaryStack.map((s) => (
          <StackPill key={s} label={s} primary />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {secondaryStack.map((s) => (
          <StackPill key={s} label={s} />
        ))}
      </div>
    </section>
  )
}
