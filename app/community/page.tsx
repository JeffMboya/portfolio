import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community — Jeff Mboya',
  description: 'Leadership and community involvement: Nakuja Project, JKUAT SES, Thrive Conference, and PACEmaker International.',
  alternates: { canonical: '/community/' },
}

interface Role {
  org: string
  orgUrl?: string
  title: string
  location: string
  bullets: string[]
}

const roles: Role[] = [
  {
    org: 'Nakuja Project',
    orgUrl: 'https://nakujaproject.com',
    title: 'Publicity Manager',
    location: 'Nairobi · Feb 2021 – Nov 2022',
    bullets: [
      "Established a partnership with the Kenya Space Agency, fostering collaboration and support for the project's objectives.",
      "Expanded the project's reach to the University of Nairobi and Kenyatta University.",
      'Grew project membership from 6 to over 100 members.',
      'Instituted two annual 12-week internship programs, absorbing 60+ students in a single year.',
    ],
  },
  {
    org: 'Thrive Con 2021',
    title: 'VP, External Relations',
    location: 'Nairobi · Aug 2021 – Jan 2022',
    bullets: [
      'Established and maintained relationships with external partners, including sponsors, donors, and other stakeholders, to create opportunities for collaboration and support.',
      'Managed a team of 3 to secure 5 high-calibre speakers from Goldman Sachs London, British American Tobacco East Africa, Deloitte East Africa, Ernst & Young, and London Business School for the Career Kickstart Session.',
      'Developed and executed external relations strategies to promote the conference, resulting in increased visibility, engagement, and funding opportunities.',
      'Spearheaded Thrive Conference in partnership with AIESEC in JKUAT and JKUAT Architecture Students Association — a one-week event for 200+ students comprising a Panel Session, 3 Career Kickstart Sessions, a full-day Career Fair, and a networking hangout.',
    ],
  },
  {
    org: 'JKUAT Society of Engineering Students',
    title: 'Vice-President',
    location: 'Nairobi · Jan 2021 – Jan 2022',
    bullets: [
      "Secured partnerships with Microsoft East Africa ADC, National Construction Authority, Moringa School, Africa's Talking, and Elarian — growing club funding from Kshs 5,000 to Kshs 210,000.",
      'Pioneered and coordinated S.E.S. Tech Week, a 2-day event for 150+ engineering students featuring technical talks and demonstrations; one student won a Full Robotics Kenya Sponsorship.',
      "Led a 4-member cross-functional team to build the society's website — increasing traffic by 30%, reducing bounce rate by 15%, and improving session duration by 40% within a month of launch.",
      'Managed an executive board of 16 members and oversaw 28 meetups that gave 100+ engineering students a platform to develop communication, teamwork, design thinking, and problem-solving skills.',
      'Organised a 1-day STEM mentorship session for 308 high-school students from 7 schools; 35 students received Moringa School Software Engineering Scholarships worth $2,000 each.',
    ],
  },
  {
    org: 'PACEmaker International',
    title: 'Teaching Assistant',
    location: 'Kitengela · May 2017 – Aug 2017',
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
        <nav className="flex items-center gap-1.5 text-[14px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>
            Home
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--foreground)' }}>Community</span>
        </nav>
      </div>

      <div className="mb-4">
        <h1 className="text-[34px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>
          Community
        </h1>
        <p className="text-[17px] leading-relaxed max-w-[560px]" style={{ color: 'var(--muted)' }}>
          Roles outside the job description — building communities, running events,
          and creating opportunities for other engineers.
        </p>
      </div>

      <div className="mb-16">
        <p
          className="text-[13px] uppercase tracking-widest font-medium pt-10 pb-5"
          style={{ color: 'var(--muted-dim)' }}
        >
          Leadership &amp; Involvement
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
                  className="text-[18px] font-bold hover:underline underline-offset-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  {role.org} ↗
                </a>
              ) : (
                <p className="text-[18px] font-bold" style={{ color: 'var(--foreground)' }}>
                  {role.org}
                </p>
              )}
              <p className="text-[15px] mt-1.5" style={{ color: 'var(--muted)' }}>
                {role.title}
              </p>
              <p className="text-[13px] uppercase tracking-wider mt-2" style={{ color: 'var(--muted-dim)' }}>
                {role.location}
              </p>
            </div>
            <ul className="flex flex-col gap-4 pt-0.5">
              {role.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[16px] leading-relaxed" style={{ color: 'var(--muted)' }}>
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
    </div>
  )
}
