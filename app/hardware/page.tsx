import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PhotoGrid from '@/components/PhotoGrid'

export const metadata: Metadata = {
  title: 'Hardware — Jeff Mboya',
  description: 'Physical work: PCB design, rocketry, and robotics.',
}

export default function HardwarePage() {
  return (
    <div className="pb-20">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--foreground)' }}>Hardware</span>
        </nav>
      </div>

      <div className="mb-12">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
          Hardware
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>Physical Work</h1>
        <p className="text-[15px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          PCBs, rockets, and robots. Everything that had to work in the real world.
        </p>
      </div>

      {/* PCB Boards */}
      <section className="mb-16">
        <h2 className="text-[18px] font-semibold mb-1" style={{ color: 'var(--foreground)' }}>PCB Design</h2>
        <p className="text-[14px] mb-6" style={{ color: 'var(--muted)' }}>
          Boards designed and fabricated for sensing, control, and IoT infrastructure.
          The S0 and S1 are open-source — schematics and layouts are public.
        </p>
        <PhotoGrid
          srcs="/hardware/s0.webp, /hardware/baseboard.webp, /hardware/esp32-control.jpg, /hardware/co2-sensor-2.jpg, /bird-deterrent/control-pcb.jpg"
          captions="S0 IoT module — ESP32-C6, SIM7080G NB-IoT, and RC-S2LP-868 Wireless M-Bus on a single edge-connector board|S0 baseboard — HanRun Ethernet jack, SD card slot, power regulation, and S0 edge connector|ESP32 control module — screw terminals, power regulation, and relay outputs for industrial control|CO2 sensor module — ESP32-S3, electrochemical gas sensor, and field I/O terminals|Main control PCB — ESP32-based controller with actuator I/O and sensor terminals"
        />

        {/* RTD module — standalone with blog post link */}
        <div className="mt-4 flex flex-col sm:flex-row gap-5 items-start p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <div className="relative w-full sm:w-64 shrink-0 aspect-[4/3] rounded-md overflow-hidden">
            <Image
              src="/hardware/rtd-thermocycle.jpg"
              alt="32-channel RTD module after 450+ thermocycles"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 256px"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-medium" style={{ color: 'var(--foreground)' }}>
              32-channel RTD module
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              Per-channel signal conditioning, multiplexed ADC, and dense terminal block layout.
              Photographed after 450+ thermocyclic tests — ambient to 100°C+ — validating the
              design for long-duration deployment inside a direct air capture plant.
            </p>
            <Link
              href="/blogs/32-channel-rtd-thermocyclic-testing"
              className="text-[12px] font-medium underline underline-offset-2"
              style={{ color: 'var(--accent)' }}
            >
              What 450 thermocycles did to my PCB →
            </Link>
          </div>
        </div>
      </section>

      {/* Nakuja */}
      <section className="mb-16">
        <h2 className="text-[18px] font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Nakuja Project</h2>
        <p className="text-[14px] mb-6" style={{ color: 'var(--muted)' }}>
          Kenya's first student-led sounding rocket program. I worked on avionics, ground support systems,
          and engine testing at Broglio Space Center, Malindi.
        </p>

        {/* Launch composite — full width */}
        <div className="mb-4">
          <div className="relative w-full rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <Image
              src="/nakuja/launches-composite.jpg"
              alt="Nakuja launches — Tana, Perkerra, and Galana"
              width={1200}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <p className="text-[11px] text-center mt-1.5" style={{ color: 'var(--muted-dim)' }}>
            Three launches: Tana (reaction wheel stabilisation), Perkerra (active canard fins), Galana (parachute ejection)
          </p>
        </div>

        <PhotoGrid
          srcs="/nakuja/IMG_20210422_140013_1.jpg, /nakuja/IMG_20210430_174709.jpg, /nakuja/IMG-20220621-WA0015.jpg, /nakuja/IMG-20220627-WA0003.jpg, /nakuja/IMG_20221111_144738_5.jpg, /nakuja/1L9A3187.JPG, /nakuja/FQNR1ftXMAQkyab.jpeg, /nakuja/IMG_20220413_111411_2.jpg, /nakuja/IMG_20220413_111919_5.jpg"
          captions="N-1 and N-2 rocket models|N-1 launch prep in the field|Post-fire solid motor casing|Machined convergent-divergent nozzles|JKUAT Innovation Exhibits|Team design session|At Broglio Space Center, Malindi|Broglio ground station dishes|Broglio satellite tracking array"
        />
      </section>

      {/* Thesis */}
      <section className="mb-16">
        <h2 className="text-[18px] font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Undergraduate Thesis</h2>
        <p className="text-[14px] mb-6" style={{ color: 'var(--muted)' }}>
          Autonomous agricultural robot for maize field scouting. Tracked chassis,
          stereo depth camera on an elevated mast, onboard compute for row navigation
          and crop monitoring. JKUAT Mechatronics Engineering, 2022.
        </p>
        <PhotoGrid
          srcs="/bird-deterrent/cad-side.jpg, /bird-deterrent/cad-front.jpg, /bird-deterrent/cad-top.jpg, /thesis-photos/IMG_20221220_181636_8.jpg, /thesis-photos/IMG_20221220_181647_3.jpg, /thesis-photos/IMG_20221220_182158_7.jpg, /thesis-photos/IMG_20221220_182210_6.jpg, /thesis-photos/IMG_20221220_182226_2.jpg, /thesis-photos/IMG_20221220_182254_0.jpg, /thesis-photos/IMG_20221220_182306_0.jpg, /thesis-photos/IMG_20221220_182316_6.jpg, /thesis-photos/IMG_20221220_182318_5.jpg, /thesis-photos/IMG_20221220_182319_5.jpg"
          captions="Side view CAD — tracked chassis with camera mast and audio deterrent module|Front view CAD — display panel, sensor tower, and rubber track drivetrain|Top-down CAD — chassis layout with mast mount and dual track assembly|Robot navigating dense maize canopy, stereo camera scanning at row height|Front approach through maize rows, sensor mast rising above canopy|Platform at row edge, full maize test site in background|Row boundary positioning, wide-angle field overview|Autonomous traverse along open maize row, overcast field conditions|Navigating between young maize plants, sensor payload active|Full platform: tracked chassis, battery modules, sensor stack deployed in row|Drive detail: chain-driven rubber tracks, dual battery boxes with LCD readouts|Sensor tower close-up — stereo depth camera on adjustable mast mount|Final field trial frame, robot alongside mature maize plant"
        />
      </section>
    </div>
  )
}
