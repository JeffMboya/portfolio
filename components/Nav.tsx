'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/research', label: 'Research' },
  { href: 'https://github.com/JeffMboya', label: 'GitHub', external: true },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="flex items-center justify-between py-6 mb-16"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <Link href="/" className="text-[15px] font-semibold tracking-tight" style={{ color: 'var(--foreground)' }}>
        Jeff Mboya
      </Link>
      <div className="flex items-center gap-6">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] transition-colors duration-150"
              style={{ color: 'var(--muted-dim)' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--foreground)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--muted-dim)')}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] transition-colors duration-150"
              style={{
                color:
                  (link.href.startsWith('/#') && pathname === '/') ||
                  pathname === link.href ||
                  (link.href === '/research' && pathname.startsWith('/research')) ||
                  (link.href === '/blogs' && pathname.startsWith('/blogs'))
                    ? 'var(--foreground)'
                    : 'var(--muted-dim)',
                fontWeight:
                  (link.href.startsWith('/#') && pathname === '/') ||
                  pathname === link.href ||
                  (link.href === '/research' && pathname.startsWith('/research')) ||
                  (link.href === '/blogs' && pathname.startsWith('/blogs'))
                    ? '500'
                    : undefined,
              }}
            >
              {link.label}
            </Link>
          )
        )}
        <ThemeToggle />
        <a
          href="/#contact"
          className="text-[13px] px-4 py-1.5 rounded-full font-medium transition-colors duration-150"
          style={{
            color: 'var(--accent-text)',
            backgroundColor: 'var(--accent)',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-dim)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
