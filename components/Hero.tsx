import Link from 'next/link'
import Image from 'next/image'

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
          <div className="text-[14px] font-medium" style={{ color: 'var(--muted)' }}>
            Mechatronics Engineer · Nairobi
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="text-[12px]" style={{ color: 'var(--muted-dim)' }}>Open to work</span>
          </div>
        </div>
      </div>

      {/* Current role + credential */}
      <div className="flex flex-col gap-1 mb-5">
        <div className="text-[13px]" style={{ color: 'var(--muted)' }}>
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
        </div>
        <div className="text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          IBM Call for Code MEA Winner 2021
        </div>
      </div>

      <h1 className="text-[44px] font-bold leading-[1.1] tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
        I debug PCB traces, PLC ladder logic, and Go goroutines in the same week.
      </h1>
      <p className="text-[14px] font-medium mb-5" style={{ color: 'var(--muted-dim)' }}>
        Most hardware engineers can&apos;t read a goroutine trace. Most software engineers can&apos;t read a schematic. I do both — and I&apos;ve shipped proof of each.
      </p>
      <p className="text-[16px] leading-relaxed max-w-[560px] mb-7" style={{ color: 'var(--muted)' }}>
        I&apos;ve designed PCBs for industrial sensing, built autonomous robots,
        wired PLCs for a carbon capture startup, co-authored propulsion research,
        and shipped distributed infrastructure in Go and Rust. Hardware or
        software — I build systems that work in the real world.
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
    </section>
  )
}
