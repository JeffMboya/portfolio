import type { Metadata } from 'next'
import Link from 'next/link'

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
    <p className="text-[12px] text-[#666] mb-1">
      {authors.map((author, i) => (
        <span key={author}>
          {author === 'Jeff Mboya' || author === 'Angina J Mboya' ? (
            <strong className="text-[#111] font-semibold">{author}</strong>
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
          className="text-[13px] text-[#16a34a] hover:text-[#15803d] transition-colors duration-150"
        >
          ← Back
        </Link>
      </div>

      <div className="mb-10">
        <div className="text-[11px] text-[#16a34a] uppercase tracking-widest mb-3 font-medium">
          Academic Work
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3">Research</h1>
        <p className="text-[15px] text-[#555] leading-relaxed max-w-[560px] mb-5">
          Published work spanning computer vision, rocketry, and climate tech.
        </p>
        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] text-[#15803d] bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-2 rounded-md hover:border-[#16a34a] transition-colors duration-150"
        >
          View Google Scholar profile ↗
        </a>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] text-[#16a34a] uppercase tracking-widest font-medium">
          Publications
        </span>
        <div className="flex-1 h-px bg-[#e8e8e8]" />
        <span className="text-[11px] text-[#888]">{publications.length} papers</span>
      </div>

      <div className="flex flex-col gap-5">
        {publications.map((pub) => (
          <a
            key={pub.url}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#e8e8e8] rounded-xl p-6 bg-white hover:border-[#16a34a] hover:translate-y-[-2px] transition-all duration-150 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] text-[#16a34a] font-medium uppercase tracking-wider">
                    {pub.year}
                  </span>
                  {pub.citations > 0 && (
                    <span className="text-[11px] text-[#888] bg-[#f5f5f5] px-1.5 py-0.5 rounded">
                      Cited by {pub.citations}
                    </span>
                  )}
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight mb-1.5 text-[#111] leading-snug">
                  {pub.title}
                </h3>
                <AuthorList authors={pub.authors} />
                <p className="text-[11px] text-[#888] italic mb-3">{pub.venue}</p>
                <p className="text-[13px] text-[#555] leading-relaxed">{pub.abstract}</p>
              </div>
              <span className="text-[#bbb] text-lg mt-1 group-hover:text-[#16a34a] transition-colors duration-150 shrink-0">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
