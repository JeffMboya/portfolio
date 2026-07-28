import Link from 'next/link'

const links = [
  { href: '/work/', label: 'Work' },
  { href: '/lab/', label: 'Projects' },
  { href: '/blogs/', label: 'Writing' },
  { href: '/talks/', label: 'Talks' },
  { href: '/awards/', label: 'Awards' },
  { href: '/research/', label: 'Research' },
  { href: '/hardware/', label: 'Hardware' },
  { href: '/community/', label: 'Community' },
  { href: '/now/', label: 'Now' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 pb-10">
      <div className="h-px mb-8" style={{ backgroundColor: 'var(--border)' }} />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[14px]" style={{ color: 'var(--muted-dim)' }}>
          © {year} Jeff Mboya. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] transition-colors duration-150 hover:underline underline-offset-2"
              style={{ color: 'var(--muted-dim)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
