import Link from 'next/link'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/lab', label: 'Lab' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/research', label: 'Research' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/community', label: 'Community' },
  { href: '/now', label: 'Now' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 pb-10">
      <div className="h-px mb-8" style={{ backgroundColor: 'var(--border)' }} />
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[12px] transition-colors duration-150 hover:underline underline-offset-2"
            style={{ color: 'var(--muted-dim)' }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="text-[12px]" style={{ color: 'var(--muted-dim)' }}>
        © {year} Jeff Mboya. All rights reserved.
      </p>
    </footer>
  )
}
