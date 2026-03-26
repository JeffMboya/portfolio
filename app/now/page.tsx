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
            Working on <a href="https://github.com/absmach/propeller" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>Propeller</a> at Abstract Machines — a WebAssembly orchestrator that deploys workloads across the cloud-edge continuum, from bare-metal servers down to Zephyr RTOS microcontrollers. The Go manager schedules tasks and the Rust proplet workers execute them via Wasmtime, pulling images from OCI registries over MQTT. The interesting current work is the TEE runtime: decrypting and running encrypted WASM inside a Trusted Execution Environment, so clients can verify their code ran untampered. We also have federated learning built in — training ML models across distributed edge nodes without the raw data ever leaving the device.
          </p>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted-dim)' }}>
            Learning
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            Going deep on the WASM component model and how it changes the trust boundary between a host runtime and guest modules — relevant directly to the TEE work. I&apos;m also working through the Confidential Containers attestation stack: how a Key Broker Service and Attestation Agent cooperate to release secrets only to verified enclaves. On the Rust side, learning to write async MQTT clients that stay sub-1 MB resident on ARM Cortex-M4. The constraint forces clarity that you don&apos;t get writing services for cloud VMs.
          </p>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted-dim)' }}>
            Thinking about
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            Whether edge-native compute — small, verifiable, offline-capable — is a better match for African infrastructure than cloud-first architectures that assume reliable connectivity. The DAC work at Octavia ran on a Siemens PLC in a field site with intermittent uptime; Propeller&apos;s model of &quot;deploy once, run anywhere, verify remotely&quot; would have been genuinely useful there. I think the next wave of climate and agricultural tech in the Global South gets built on open edge protocols, not SaaS dashboards. The gap is less technical than it is institutional — who funds the integrators.
          </p>
        </div>
      </div>
    </div>
  )
}
