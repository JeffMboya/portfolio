import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Research — Jeff Mboya',
  description: 'Academic publications and research by Jeff Mboya.',
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
    <p className="text-[12px] text-[#555] mb-1">
      {authors.map((author, i) => (
        <span key={author}>
          {author === 'Jeff Mboya' || author === 'Angina J Mboya' ? (
            <strong className="text-[#f0f0f0] font-semibold">{author}</strong>
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
        <Link
          href="/"
          className="text-[13px] text-[#22c55e] hover:text-[#16a34a] transition-colors duration-150"
        >
          ← Back
        </Link>
      </div>

      <div className="mb-10">
        <div className="text-[11px] text-[#555] uppercase tracking-widest mb-3 font-medium">
          Academic Work
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3 text-[#f0f0f0]">Research</h1>
        <p className="text-[15px] text-[#888] leading-relaxed max-w-[560px] mb-5">
          Published work spanning computer vision, rocketry, and climate tech.
        </p>
        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] text-[#22c55e] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] px-4 py-2 rounded-md hover:border-[rgba(34,197,94,0.4)] transition-colors duration-150"
        >
          View Google Scholar profile ↗
        </a>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] text-[#555] uppercase tracking-widest font-medium">
          Undergraduate Thesis
        </span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        <span className="text-[11px] text-[#555]">2023</span>
      </div>

      <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#161616] mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] text-[#555] font-medium uppercase tracking-wider">2023</span>
          <span className="text-[11px] text-[#555] bg-[#1f1f1f] border border-[rgba(255,255,255,0.06)] px-1.5 py-0.5 rounded">
            Mechatronics Engineering
          </span>
        </div>
        <h3 className="text-[18px] font-semibold tracking-tight mb-1.5 text-[#f0f0f0] leading-snug">
          Design and Fabrication of an Autonomous Bird Deterrent Robot Prototype
        </h3>
        <p className="text-[12px] text-[#555] mb-1">
          <strong className="text-[#f0f0f0] font-semibold">Jeff Mboya</strong>, Steve Nyaga
        </p>
        <p className="text-[11px] text-[#555] italic mb-4">
          JKUAT — Department of Mechatronics Engineering · Supervised by Dr.-Ing. Jackson G. Njiri
        </p>
        <p className="text-[13px] text-[#888] leading-relaxed mb-6">
          Designed and built a rover-type robot that autonomously detects and deters granivorous pest
          birds in agricultural fields. The system combines a YOLOv5s computer-vision pipeline for
          real-time bird detection with an onboard deterrent mechanism, enabling deployment without
          continuous human supervision.
        </p>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            'IMG_20221220_181636_8',
            'IMG_20221220_181647_3',
            'IMG_20221220_182158_7',
            'IMG_20221220_182210_6',
            'IMG_20221220_182226_2',
            'IMG_20221220_182254_0',
            'IMG_20221220_182306_0',
            'IMG_20221220_182316_6',
            'IMG_20221220_182318_5',
            'IMG_20221220_182319_5',
          ].map((name) => (
            <div key={name} className="relative aspect-square rounded-lg overflow-hidden border border-[rgba(255,255,255,0.08)]">
              <Image
                src={`/thesis-photos/${name}.jpg`}
                alt="Prototype photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <a
          href="/thesis/report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] text-[#22c55e] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] px-4 py-2 rounded-md hover:border-[rgba(34,197,94,0.4)] transition-colors duration-150"
        >
          Download full report (PDF) ↗
        </a>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] text-[#555] uppercase tracking-widest font-medium">
          Publications
        </span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        <span className="text-[11px] text-[#555]">{publications.length} papers</span>
      </div>

      <div className="flex flex-col gap-5">
        {publications.map((pub) => (
          <a
            key={pub.url}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#161616] hover:border-[rgba(255,255,255,0.18)] hover:bg-[#1a1a1a] hover:translate-y-[-2px] transition-all duration-150 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] text-[#555] font-medium uppercase tracking-wider">
                    {pub.year}
                  </span>
                  {pub.citations > 0 && (
                    <span className="text-[11px] text-[#555] bg-[#1f1f1f] border border-[rgba(255,255,255,0.06)] px-1.5 py-0.5 rounded">
                      Cited by {pub.citations}
                    </span>
                  )}
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight mb-1.5 text-[#f0f0f0] leading-snug">
                  {pub.title}
                </h3>
                <AuthorList authors={pub.authors} />
                <p className="text-[11px] text-[#555] italic mb-3">{pub.venue}</p>
                <p className="text-[13px] text-[#888] leading-relaxed">{pub.abstract}</p>
              </div>
              <span className="text-[#444] text-lg mt-1 group-hover:text-[#22c55e] transition-colors duration-150 shrink-0">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
