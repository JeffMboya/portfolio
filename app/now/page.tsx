import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Now — Jeff Mboya',
  description: 'What Jeff Mboya is working on right now.',
}

export default function NowPage() {
  return (
    <div className="pb-20 max-w-[640px]">
      <nav className="flex items-center gap-1.5 text-[12px] mb-10" style={{ color: 'var(--muted-dim)' }}>
        <a href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Home</a>
        <span>/</span>
        <span style={{ color: 'var(--foreground)' }}>Now</span>
      </nav>
      <div className="flex items-center gap-3 mb-6">
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
            Whether the computer vision pipelines that currently require an NVIDIA GPU in a lab can be made to run on a $10 ARM device in a field. My first-author work modified YOLOv5s with Transformer encoder blocks and BiFPN to detect small pest birds in agricultural imagery — a 4.8% mAP gain at only 4ms extra inference. The harder follow-on question is deployment: Propeller&apos;s WASI-NN integration means a WASM-packaged model can be dispatched to a constrained edge node the same way you&apos;d schedule any other workload, with 95% device compatibility across ARM hardware. The use case I keep returning to is African smallholder agriculture — early pest and drought stress detection that doesn&apos;t require cloud connectivity or expensive hardware, just a cheap SBC and an open orchestration layer.
          </p>
        </div>
      </div>
    </div>
  )
}
