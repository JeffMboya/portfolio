import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community — Jeff Mboya',
  description: 'Leadership and community involvement: Nakuja Project, Society of Engineering Students, and Thrive Conference.',
  alternates: { canonical: '/community/' },
}

const roles = [
  {
    org: 'Nakuja Project',
    title: 'Publicity Manager',
    period: 'Feb 2021 – Nov 2022',
    bullets: [
      "Established a partnership with the Kenya Space Agency, fostering collaboration and support for the project's objectives.",
      "Expanded the project's reach to the University of Nairobi (UoN) and Kenyatta University (KU).",
      'Grew project membership from 6 to over 100 members.',
      'Instituted two annual 12-week internship programs, absorbing 60+ students in a single year.',
    ],
  },
  {
    org: 'Society of Engineering Students (S.E.S.)',
    title: 'Vice-President',
    period: 'May 2020 – Dec 2021',
    bullets: [
      "Grew club funding from Kshs 5,000 to Kshs 210,000 by securing partnerships with Microsoft, NCA, Moringa School, Africa's Talking, and Elarian.",
      'Co-ordinated a 2-day tech event with 200+ student attendees, 16 speakers, and 5 sponsors — boosting student interest in robotics by 17%.',
      'Led mentorship sessions for 308 high-school students from 7 schools, resulting in 35 scholarship recipients worth $70,000.',
      'Benefited 47 orphaned children in Kahawa West through community donations worth $1,000.',
    ],
  },
  {
    org: 'Thrive Conference',
    title: 'VP, External Relations',
    period: 'Jul – Dec 2021',
    bullets: [
      'Pioneered a 5-day career event attended by 446 students — 33% increase in engagement with career resources.',
      'Sourced 5 speakers from Goldman Sachs London, Deloitte East Africa, Ernst & Young, BAT East Africa, and London Business School.',
    ],
  },
]

export default function CommunityPage() {
  return (
    <div className="pb-24">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--foreground)' }}>Community</span>
        </nav>
      </div>

      <div className="mb-12">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
          Community
        </div>
        <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Leadership &amp; Involvement
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[520px]" style={{ color: 'var(--muted)' }}>
          Roles outside the job description — building communities, running events,
          and creating opportunities for other engineers.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {roles.map((r) => (
          <div
            key={r.org}
            className="rounded-xl p-6"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
              <div>
                <span className="text-[15px] font-semibold" style={{ color: 'var(--foreground)' }}>
                  {r.org}
                </span>
                <span className="ml-2 text-[13px]" style={{ color: 'var(--muted)' }}>
                  · {r.title}
                </span>
              </div>
              <span className="text-[11px] tabular-nums shrink-0" style={{ color: 'var(--muted-dim)' }}>
                {r.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2 pl-3">
              {r.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <span className="mt-[3px] shrink-0" style={{ color: 'var(--accent)' }}>›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
