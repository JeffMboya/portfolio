import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Now — Jeff Mboya',
  description: 'What Jeff Mboya is working on right now.',
  alternates: { canonical: '/now/' },
}

export default function NowPage() {
  return (
    <div className="pb-24 max-w-[680px]">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--foreground)' }}>Now</span>
        </nav>
      </div>

      <div className="mb-12">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
          Now
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-4" style={{ color: 'var(--foreground)' }}>
          What I&apos;m doing now
        </h1>
        <div className="flex items-center gap-2">
          <span
            className="text-[11px] font-medium px-2 py-0.5 rounded"
            style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-muted)' }}
          >
            Updated March 2026
          </span>
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] underline underline-offset-2"
            style={{ color: 'var(--muted-dim)' }}
          >
            what is this?
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-12">

        {/* Building */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>Building</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              I&apos;m building{' '}
              <a href="https://github.com/absmach/propeller" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>
                Propeller
              </a>{' '}
              at Abstract Machines — a WebAssembly orchestrator for deploying workloads across the
              cloud-edge continuum, from bare-metal servers to Zephyr RTOS microcontrollers.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              The system is designed around a simple idea: edge infrastructure should be programmable
              with the same reliability as cloud infrastructure. The Go-based manager handles
              orchestration and scheduling, while lightweight Rust &ldquo;proplets&rdquo; execute
              workloads through Wasmtime, pulling OCI images over MQTT and running them close to where
              computation actually matters.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              The most interesting work right now is around trusted execution. I&apos;m building the
              TEE runtime layer so encrypted WASM workloads can be decrypted and executed inside
              Trusted Execution Environments, allowing clients to verify that their code ran exactly
              as intended and that sensitive data never left a protected boundary.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              We also have federated learning built into the platform — training models across
              distributed edge nodes without moving raw data off-device. For me, this is where
              infrastructure becomes meaningful: not just distributed systems for their own sake,
              but systems that make secure, low-cost intelligence deployable in places where cloud
              assumptions fail.
            </p>
          </div>
        </div>

        {/* Learning */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>Learning</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              I&apos;ve been going deep on the WASM component model and how it reshapes the trust
              boundary between host runtimes and guest modules — especially relevant for confidential
              execution and TEE design.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              I&apos;m also studying the Confidential Containers attestation stack: how the
              Attestation Agent, Key Broker Service, and enclave verification pipeline work together
              so secrets are only released to verified runtimes.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              On the Rust side, I&apos;ve been learning to write async MQTT clients that stay under
              1 MB resident on ARM Cortex-M4 targets. Constraints like that force a kind of
              engineering clarity you never get when building for cloud VMs with infinite memory
              and forgiving abstractions.
            </p>
          </div>
        </div>

        {/* Thinking About */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>Thinking About</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              I keep returning to one question:
            </p>
            <div
              className="rounded-lg px-4 py-3.5 text-[14px] font-medium leading-relaxed"
              style={{
                backgroundColor: 'var(--accent-light)',
                border: '1px solid var(--accent-muted)',
                color: 'var(--accent)',
              }}
            >
              Can the computer vision systems that currently need an NVIDIA GPU in a lab run
              reliably on a $10 ARM device in the field?
            </div>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              My first-author research modified YOLOv5s using Transformer encoder blocks and BiFPN
              to improve small pest bird detection in agricultural imagery, achieving a 4.8% mAP
              improvement with only 4ms additional inference time.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              But model accuracy is only half the problem. Deployment is the real bottleneck.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              With Propeller&apos;s WASI-NN integration, a WASM-packaged model can be scheduled
              to constrained edge nodes the same way as any other workload, with broad ARM
              compatibility and no dependency on constant cloud access.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              The use case I care about most is African smallholder agriculture: early pest
              detection, drought stress monitoring, and low-cost field intelligence that works
              offline — using cheap SBCs, local inference, and infrastructure that assumes
              unreliable connectivity instead of pretending it doesn&apos;t exist.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              That feels like the right problem: not building impressive demos for labs, but
              building durable systems people can actually use.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
