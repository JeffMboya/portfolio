import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community — Jeff Mboya',
  description: 'Leadership and community involvement: Nakuja Project, JKUAT SES, Thrive Conference, and PACEmaker International.',
  alternates: { canonical: '/community/' },
}

const roles = [
  {
    org: 'Nakuja Project',
    title: 'Publicity Manager',
    period: 'Feb 2021 – Nov 2022',
    type: 'Volunteer',
    location: 'Kenya · On-site',
    bullets: [
      "Established a partnership with the Kenya Space Agency, fostering collaboration and support for the project's objectives.",
      "Expanded the project's reach to the University of Nairobi (UoN) and Kenyatta University (KU).",
      'Grew project membership from 6 to over 100 members.',
      'Instituted two annual 12-week internship programs, absorbing 60+ students in a single year.',
    ],
  },
  {
    org: 'Thrive Con 2021',
    title: 'VP, External Relations',
    period: 'Aug 2021 – Jan 2022 · 6 mos',
    type: 'Full-time',
    location: 'Nairobi, Kenya · On-site',
    bullets: [
      'Established and maintained relationships with external partners, including sponsors, donors, and other stakeholders, to create opportunities for collaboration and support.',
      'Managed a team of 3 to secure 5 high-calibre speakers from Goldman Sachs London, British American Tobacco East Africa, Deloitte East Africa, Ernst & Young, and London Business School for the Career Kickstart Session.',
      'Developed and executed external relations strategies to promote the conference, resulting in increased visibility, engagement, and funding opportunities.',
      'Spearheaded Thrive Conference in partnership with AIESEC in JKUAT and JKUAT Architecture Students Association — a one-week event for 200+ students comprising a Panel Session, 3 Career Kickstart Sessions, a full-day Career Fair, and a networking hangout.',
    ],
  },
  {
    org: 'JKUAT Society of Engineering Students (S.E.S.)',
    title: 'Vice-President',
    period: 'Jan 2021 – Jan 2022 · 1 yr 1 mo',
    type: 'Full-time',
    location: 'Kenya · On-site',
    bullets: [
      "Secured partnerships with Microsoft East Africa ADC, National Construction Authority, Moringa School, Africa's Talking, and Elarian — growing club funding from Kshs 5,000 to Kshs 210,000.",
      'Pioneered and coordinated S.E.S. Tech Week, a 2-day event for 150+ engineering students featuring technical talks and demonstrations; one student won a Full Robotics Kenya Sponsorship.',
      "Led a 4-member cross-functional team to build the society's website — increasing traffic by 30%, reducing bounce rate by 15%, and improving session duration by 40% within a month of launch.",
      'Managed an executive board of 16 members and oversaw 28 meetups that gave 100+ engineering students a platform to develop communication, teamwork, design thinking, and problem-solving skills.',
      'Organised a 1-day STEM mentorship session for 308 high-school students from 7 schools; 35 students received Moringa School Software Engineering Scholarships worth $2,000 each.',
      'Grew club membership by 150 members through initiatives including a quarterly newsletter, a Discord community, an ESP32-based prototyping board, and a tech podcast.',
    ],
  },
  {
    org: 'PACEmaker International',
    title: 'Teaching Assistant',
    period: 'May 2017 – Aug 2017 · 4 mos',
    type: 'Full-time',
    location: 'Kitengela · On-site',
    bullets: [
      'Collaborated with lead teachers to plan and implement science and math lessons for students in grades K–5, resulting in a 13% increase in student engagement and participation.',
      'Assisted in developing engaging and interactive lesson plans — including hands-on experiments and activities — resulting in an 11% improvement in student test scores.',
      'Provided individualised support to students requiring extra help with science and math concepts, resulting in a 21% increase in understanding of challenging topics.',
      'Accumulated 380 hours of community service.',
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
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
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
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <p className="text-[15px] font-semibold leading-snug" style={{ color: 'var(--foreground)' }}>
                  {r.title}
                </p>
                <p className="text-[13px] mt-0.5" style={{ color: 'var(--muted)' }}>
                  {r.org} · {r.type}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-0.5 shrink-0">
                <span className="text-[11px] tabular-nums" style={{ color: 'var(--muted-dim)' }}>
                  {r.period}
                </span>
                <span className="text-[11px]" style={{ color: 'var(--muted-dim)' }}>
                  {r.location}
                </span>
              </div>
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
