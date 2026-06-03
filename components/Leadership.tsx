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

export default function Leadership() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <span
          className="text-[13px] uppercase tracking-widest font-medium"
          style={{ color: 'var(--foreground)' }}
        >
          Leadership &amp; Involvement
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      <div className="flex flex-col gap-5">
        {roles.map((r) => (
          <div
            key={r.org}
            className="rounded-xl p-5"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div>
                <span
                  className="text-[16px] font-semibold"
                  style={{ color: 'var(--foreground)' }}
                >
                  {r.org}
                </span>
                <span
                  className="ml-2 text-[14px]"
                  style={{ color: 'var(--muted)' }}
                >
                  · {r.title}
                </span>
              </div>
              <span
                className="text-[13px] tabular-nums shrink-0"
                style={{ color: 'var(--muted-dim)' }}
              >
                {r.period}
              </span>
            </div>

            <ul className="flex flex-col gap-1.5 pl-3">
              {r.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--accent)' }} className="mt-[3px] shrink-0">›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
