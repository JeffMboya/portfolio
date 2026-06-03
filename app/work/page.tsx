import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work — Jeff Mboya',
  description: 'Engineering and leadership experience — Jeff Mboya.',
  alternates: { canonical: '/work/' },
}

interface Role {
  org: string
  orgUrl?: string
  title: string
  location: string
  bullets: string[]
}

const engineering: Role[] = [
  {
    org: 'Abstract Machines',
    orgUrl: 'https://github.com/absmach',
    title: 'Software Engineer II',
    location: 'Remote · 2023 –',
    bullets: [
      'Core contributor to Propeller, an open-source WebAssembly orchestrator for Cloud–Edge–IoT workload execution in Go and Rust; ran 24 concurrent Wasm instances on a $4 ESP32-S3 running Zephyr RTOS, validating cloud-to-microcontroller execution parity.',
      'Extended the Rust Proplet runtime with WAVE-encoded component invocations, ELASTIC HAL interfaces, and attestation/TEE validation paths — moving the platform from executing Wasm modules to running portable components across hardware boundaries.',
      'Contributed to Magistrala (400+ deployments, 2,500+ GitHub stars) across authorization, access control, and deployment infrastructure — improving rollout velocity 5× and CI/CD 3× while maintaining zero production downtime across 30+ services.',
    ],
  },
  {
    org: 'Octavia Carbon',
    orgUrl: 'https://octaviacarbon.com',
    title: 'Deputy Head, R&D / I&C Engineer',
    location: 'Nairobi · 2023 – 2026',
    bullets: [
      'Joined as employee #24 — the company\'s first electrical, instrumentation, and controls engineer — at a pre-revenue climate startup with no local blueprint for what it was building.',
      'Broke a two-year purity deadlock through RTD instrumentation, control redesign, and vacuum path improvements, achieving 99.9% CO₂ purity and the Global South\'s first deployed commercial Direct Air Capture system.',
      'Led transition from off-the-shelf PLCs to an in-house PCB-based control stack, reducing CAPEX by 63% and removing the core commercialisation barrier.',
      'Redesigned the regeneration cycle, increasing daily CO₂ throughput 3.6× and cutting cycle time 83%; validated scale-up from a 2 ton/year TRL6 pilot to a 60 ton/year commercial field unit.',
      'Grew engineering team to 9 full-time contributors through structured onboarding and cross-functional mentorship; 3 PCT patents filed; supported $3.1M Series A.',
    ],
  },
  {
    org: 'AMT Technologies',
    title: 'Electronics & Software Engineer',
    location: 'Nairobi · 2022 – 2023',
    bullets: [
      'Built an AI driver-assistance system using sensor fusion and embedded C for real-time driver monitoring and alert generation.',
    ],
  },
  {
    org: 'Qualislabs',
    title: 'Software Engineer',
    location: 'Remote · 2020 – 2023',
    bullets: [
      'Won IBM\'s Call for Code global competition out of 180,000+ developers across 165 nations — MEA regional winner, then global title — with an AI-powered climate solution built end-to-end.',
    ],
  },
  {
    org: 'Nakuja Project',
    orgUrl: 'https://nakujaproject.com',
    title: 'Propulsion Engineer',
    location: 'Nairobi · 2020 – 2022',
    bullets: [
      'Designed and static-tested solid rocket motors across the N-2 and N-3 programmes; improved motor efficiency 5% and thrust output 15% through propellant composition and grain geometry optimisation.',
      'Built a Python data-acquisition pipeline for static-fire test data, cutting post-test analysis time by 50% and enabling faster design iteration cycles.',
      'Co-authored two peer-reviewed papers presented at the SRI Conference; both received Best Presentation awards — the first student-led work to earn that recognition in over a decade.',
    ],
  },
]

const community: Role[] = [
  {
    org: 'JKUAT Society of Engineering Students',
    title: 'Vice-President',
    location: 'Nairobi · Jan 2021 – Jan 2022',
    bullets: [
      'Grew club funding from Kshs 5,000 to Kshs 210,000 through partnerships with Microsoft East Africa ADC, Moringa School, Africa\'s Talking, and others.',
      'Organised a STEM day for 308 high-school students from 7 schools — 35 received Moringa School scholarships worth $2,000 each.',
      'Managed an executive board of 16 members across 28 meetups, giving 100+ engineering students a regular platform.',
    ],
  },
  {
    org: 'Nakuja Project',
    orgUrl: 'https://nakujaproject.com',
    title: 'Publicity Manager',
    location: 'Nairobi · Feb 2021 – Nov 2022',
    bullets: [
      'Grew membership from 6 to 100+; established the Kenya Space Agency partnership; expanded the programme to the University of Nairobi and Kenyatta University.',
      'Launched two annual 12-week internship programmes absorbing 60+ students per cohort.',
    ],
  },
  {
    org: 'Thrive Con 2021',
    title: 'VP, External Relations',
    location: 'Nairobi · Aug 2021 – Jan 2022',
    bullets: [
      'Secured 5 senior speakers from Goldman Sachs London, BAT East Africa, Deloitte East Africa, EY, and London Business School for the Career Kickstart Session.',
      'Spearheaded a week-long conference for 200+ students in partnership with AIESEC in JKUAT.',
    ],
  },
]

function Section({ label, roles }: { label: string; roles: Role[] }) {
  return (
    <div className="mb-16">
      <p
        className="text-[11px] uppercase tracking-widest font-medium pt-10 pb-5"
        style={{ color: 'var(--muted-dim)' }}
      >
        {label}
      </p>
      <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
      {roles.map((role) => (
        <div
          key={`${role.org}-${role.title}`}
          className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-12 py-10"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            {role.orgUrl ? (
              <a
                href={role.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] font-bold hover:underline underline-offset-2"
                style={{ color: 'var(--foreground)' }}
              >
                {role.org} ↗
              </a>
            ) : (
              <p className="text-[16px] font-bold" style={{ color: 'var(--foreground)' }}>
                {role.org}
              </p>
            )}
            <p className="text-[13px] mt-1.5" style={{ color: 'var(--muted)' }}>
              {role.title}
            </p>
            <p className="text-[11px] uppercase tracking-wider mt-2" style={{ color: 'var(--muted-dim)' }}>
              {role.location}
            </p>
          </div>
          <ul className="flex flex-col gap-4 pt-0.5">
            {role.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                <span
                  className="mt-[9px] shrink-0 rounded-full"
                  style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent)', opacity: 0.8, flexShrink: 0 }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function WorkPage() {
  return (
    <div className="pb-24">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Work</span>
        </nav>
      </div>

      <div className="mb-4">
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Work
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          I build high-reliability systems at the intersection of hardware and software — from DAC plant controls to distributed Wasm orchestration.
        </p>
      </div>

      <Section label="Engineering" roles={engineering} />
      <Section label="Community &amp; Leadership" roles={community} />

      <div>
        <p
          className="text-[11px] uppercase tracking-widest font-medium pt-10 pb-5"
          style={{ color: 'var(--muted-dim)' }}
        >
          Education
        </p>
        <div className="h-px mb-0" style={{ backgroundColor: 'var(--border)' }} />
        <div
          className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-12 py-10"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-[16px] font-bold" style={{ color: 'var(--foreground)' }}>
              Jomo Kenyatta University of Agriculture and Technology
            </p>
            <p className="text-[13px] mt-1.5" style={{ color: 'var(--muted)' }}>
              BSc, Mechatronics Engineering
            </p>
            <p className="text-[11px] uppercase tracking-wider mt-2" style={{ color: 'var(--muted-dim)' }}>
              Nairobi · Graduated 2023
            </p>
          </div>
          <ul className="flex flex-col gap-4 pt-0.5">
            <li className="flex gap-3 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              <span
                className="mt-[9px] shrink-0 rounded-full"
                style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent)', opacity: 0.8, flexShrink: 0 }}
              />
              Five-year programme spanning embedded systems, control theory, and robotics.
            </li>
            <li className="flex gap-3 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              <span
                className="mt-[9px] shrink-0 rounded-full"
                style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent)', opacity: 0.8, flexShrink: 0 }}
              />
              Thesis: Design and Fabrication of an Autonomous Bird Deterrent Robot — YOLOv5s computer vision pipeline on a custom rover for field deployment.
            </li>
          </ul>
        </div>
        <p className="text-[13px] mt-6" style={{ color: 'var(--muted-dim)' }}>
          For awards and recognition, see{' '}
          <Link href="/awards" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>awards</Link>.{' '}
          For talks and papers, see{' '}
          <Link href="/research" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>research</Link>{' '}
          and{' '}
          <Link href="/talks" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>talks</Link>.
        </p>
      </div>
    </div>
  )
}
