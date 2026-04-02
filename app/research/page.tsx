import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Research — Jeff Mboya',
  description: 'Academic publications and research by Jeff Mboya.',
  alternates: { canonical: '/research/' },
}

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=KmGiUgcAAAAJ&hl=en'

interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  citations: number
  abstract: string
  url: string
}

const publications: Publication[] = [
  {
    title: 'Simulation and Airflow Experimentation of a Multi-Layer Adsorbent Chamber for Enhanced Direct Air Capture Efficiency',
    authors: ['Earl S Mogire', 'Angina J Mboya', 'Emmanuel E Bakit', 'Patrick M Musembi', 'Mike Bwondera', 'Duncan K Githinji', 'Victoria V Barasa'],
    venue: 'Proceedings of the Sustainable Research and Innovation Conference',
    year: 2025,
    citations: 0,
    abstract: 'CFD simulation and experimental analysis of a multi-layer adsorbent chamber design for Direct Air Capture, reducing airflow resistance and fan energy requirements compared to conventional axial flow designs.',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KmGiUgcAAAAJ&citation_for_view=KmGiUgcAAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'Improving Small Pest Bird Detection in YOLOv5s for Autonomous Bird Deterrent Systems',
    authors: ['Jeff Mboya', 'Steve Nyaga', 'Jackson Njiri', 'Shohei Aoki'],
    venue: 'JKUAT-COETEC',
    year: 2024,
    citations: 1,
    abstract: 'Enhanced YOLOv5s with a DenseNet backbone, Transformer encoder blocks, and BiFPN neck to improve detection of small granivorous pest birds in agricultural settings. Achieved a 4.8% mAP gain with only 4 ms additional inference time.',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KmGiUgcAAAAJ&citation_for_view=KmGiUgcAAAAJ:u-x6o8ySG0sC',
  },
  {
    title: 'Development of Solid Propellant Motor for Low Altitude Model Rockets',
    authors: ['Felix W Gateru', 'Sammy K Oina', 'Jeff Mboya', 'Ian Kibandi', 'Bernard Owiti', 'Shohei Aoki'],
    venue: 'JKUAT-COETEC',
    year: 2024,
    citations: 1,
    abstract: 'Design, simulation, and static test of a compact solid propellant motor using locally sourced sucrose/dextrose fuel and potassium nitrate oxidiser. Motor produced 35 N average thrust (48 N peak) and propelled a test rocket to approximately 34 m apogee.',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KmGiUgcAAAAJ&citation_for_view=KmGiUgcAAAAJ:d1gkVwhDpl0C',
  },
  {
    title: 'Development of a Solid Propellant Motor for High-Powered Model Rockets',
    authors: ['Washington K Kigani', 'Felix W Gateru', 'Maureen W Gichia', 'Valerian K Nyerere', 'Jeff Mboya', 'Bernard Owiti', 'Shohei Aoki'],
    venue: 'JKUAT-COETEC',
    year: 2024,
    citations: 1,
    abstract: 'Propulsion system design for the Nakuja-2 rocket targeting a 500 m apogee. The motor achieved 151.7 N average thrust and lifted the rocket to 280 m, with remote telemetry via a custom data acquisition system.',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KmGiUgcAAAAJ&citation_for_view=KmGiUgcAAAAJ:u5HHmVD_uO8C',
  },
]

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-[12px] mb-1" style={{ color: 'var(--muted-dim)' }}>
      {authors.map((author, i) => (
        <span key={author}>
          {author === 'Jeff Mboya' || author === 'Angina J Mboya' ? (
            <strong style={{ color: 'var(--foreground)', fontWeight: 600 }}>{author}</strong>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  )
}

export default function ResearchPage() {
  return (
    <div className="pb-20">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5" style={{ color: 'var(--muted-dim)' }}>
          <Link
            href="/"
            className="text-[12px] transition-colors duration-150 hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            Home
          </Link>
          <span className="text-[12px]">/</span>
          <span className="text-[12px]" style={{ color: 'var(--foreground)' }}>Research</span>
        </nav>
      </div>

      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
          Academic Work
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>Research</h1>
        <p className="text-[15px] leading-relaxed max-w-[560px] mb-5" style={{ color: 'var(--muted)' }}>
          Published work spanning computer vision, rocketry, and climate tech.
        </p>
        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] px-4 py-2 rounded-md transition-colors duration-150"
          style={{
            color: 'var(--accent)',
            backgroundColor: 'var(--accent-light)',
            border: '1px solid var(--accent-muted)',
          }}
        >
          View Google Scholar profile ↗
        </a>
      </div>

      {/* Undergraduate Thesis */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>
          Undergraduate Thesis
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>2023</span>
      </div>

      <div className="rounded-xl p-6 mb-12" style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--muted-dim)' }}>2023</span>
          <span
            className="text-[11px] px-1.5 py-0.5 rounded"
            style={{
              color: 'var(--muted-dim)',
              backgroundColor: 'var(--surface-hover)',
              border: '1px solid var(--border)',
            }}
          >
            Mechatronics Engineering
          </span>
        </div>
        <h3 className="text-[18px] font-semibold tracking-tight mb-1.5 leading-snug" style={{ color: 'var(--foreground)' }}>
          Design and Fabrication of an Autonomous Bird Deterrent Robot Prototype
        </h3>
        <p className="text-[12px] mb-1" style={{ color: 'var(--muted-dim)' }}>
          <strong style={{ color: 'var(--foreground)', fontWeight: 600 }}>Jeff Mboya</strong>, Steve Nyaga
        </p>
        <p className="text-[11px] italic mb-4" style={{ color: 'var(--muted-dim)' }}>
          JKUAT — Department of Mechatronics Engineering · Supervised by Dr.-Ing. Jackson G. Njiri
        </p>
        <p className="text-[13px] leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
          Designed and built a rover-type robot that autonomously detects and deters granivorous pest
          birds in agricultural fields. The system combines a YOLOv5s computer-vision pipeline for
          real-time bird detection with an onboard deterrent mechanism, enabling deployment without
          continuous human supervision.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { name: 'IMG_20221220_182226_2', caption: 'Field deployment' },
            { name: 'IMG_20221220_182158_7', caption: 'Row navigation' },
            { name: 'IMG_20221220_182316_6', caption: 'Hardware detail' },
          ].map(({ name, caption }) => (
            <div key={name} className="flex flex-col gap-1.5">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <Image
                  src={`/thesis-photos/${name}.jpg`}
                  alt={caption}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-[11px] text-center" style={{ color: 'var(--muted-dim)' }}>{caption}</p>
            </div>
          ))}
        </div>

        <a
          href="/thesis/report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] px-4 py-2 rounded-md transition-colors duration-150"
          style={{
            color: 'var(--accent)',
            backgroundColor: 'var(--accent-light)',
            border: '1px solid var(--accent-muted)',
          }}
        >
          Download full report (PDF) ↗
        </a>
      </div>

      {/* Publications */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>
          Publications
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>{publications.length} papers</span>
      </div>

      <div className="flex flex-col gap-5">
        {publications.map((pub) => (
          <a
            key={pub.url}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl p-6 hover:translate-y-[-2px] transition-all duration-150 group"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--muted-dim)' }}>
                    {pub.year}
                  </span>
                  {pub.citations > 0 && (
                    <span
                      className="text-[11px] px-1.5 py-0.5 rounded"
                      style={{
                        color: 'var(--muted-dim)',
                        backgroundColor: 'var(--surface-hover)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      Cited by {pub.citations}
                    </span>
                  )}
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight mb-1.5 leading-snug" style={{ color: 'var(--foreground)' }}>
                  {pub.title}
                </h3>
                <AuthorList authors={pub.authors} />
                <p className="text-[11px] italic mb-3" style={{ color: 'var(--muted-dim)' }}>{pub.venue}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>{pub.abstract}</p>
              </div>
              <span className="text-lg mt-1 shrink-0 transition-colors duration-150" style={{ color: 'var(--muted-dim)' }}>
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Conferences */}
      <div className="flex items-center gap-3 mt-16 mb-8">
        <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--muted-dim)' }}>
          Invited Conferences
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>4 events</span>
      </div>

      <div className="flex flex-col gap-3">
        {[
          {
            year: 2023,
            name: '2023 Sustainable Research & Innovation (SRI) Conference',
            theme: 'Linking Industry with Academia through Research and Innovation for Sustainable Development',
          },
          {
            year: 2022,
            name: '2022 Sustainable Research & Innovation (SRI) Conference',
            theme: 'Sustainable Research in Science Technology and Innovation During and Post COVID-19',
          },
          {
            year: 2021,
            name: '2021 Sustainable Research & Innovation (SRI) Conference',
            theme: 'Sustainable Development through Innovation, Technology & Industry Linkage',
          },
          {
            year: 2020,
            name: '29th Institution of Engineers of Kenya (IEK) International Convention',
            theme: 'Sustainable Engineering in the Era of Climate Change',
          },
        ].map((c) => (
          <div
            key={c.year}
            className="flex items-start gap-5 rounded-xl px-5 py-4"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <div
              className="text-[13px] font-semibold tabular-nums shrink-0 pt-0.5"
              style={{ color: 'var(--accent)' }}
            >
              {c.year}
            </div>
            <div>
              <div className="text-[14px] font-semibold leading-snug mb-1" style={{ color: 'var(--foreground)' }}>
                {c.name}
              </div>
              <div className="text-[12px] italic leading-relaxed" style={{ color: 'var(--muted)' }}>
                {c.theme}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
