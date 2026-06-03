'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/lab', label: 'Projects' },
  { href: '/blogs', label: 'Writing' },
  { href: '/talks', label: 'Talks' },
  { href: '/awards', label: 'Awards' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/community', label: 'Community' },
  { href: '/research', label: 'Research' },
  { href: '/now', label: 'Now' },
  { href: 'https://github.com/JeffMboya', label: 'GitHub', external: true },
]

function isActive(href: string, pathname: string) {
  if (href.startsWith('/#')) return pathname === '/'
  if (href === pathname) return true
  return (
    (href === '/work' && pathname.startsWith('/work')) ||
    (href === '/research' && pathname.startsWith('/research')) ||
    (href === '/blogs' && pathname.startsWith('/blogs')) ||
    (href === '/hardware' && pathname.startsWith('/hardware')) ||
    (href === '/now' && pathname.startsWith('/now')) ||
    (href === '/lab' && pathname.startsWith('/lab')) ||
    (href === '/community' && pathname.startsWith('/community')) ||
    (href === '/talks' && pathname.startsWith('/talks')) ||
    (href === '/awards' && pathname.startsWith('/awards'))
  )
}

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="flex items-center justify-between py-6 mb-16"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <Link href="/" className="text-[17px] font-semibold tracking-tight shrink-0 whitespace-nowrap mr-6" style={{ color: 'var(--foreground)' }}>
          Jeff Mboya
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] transition-colors duration-150"
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
                className="text-[15px] transition-colors duration-150"
                style={{
                  color: isActive(link.href, pathname) ? 'var(--foreground)' : 'var(--muted-dim)',
                  fontWeight: isActive(link.href, pathname) ? '500' : undefined,
                }}
              >
                {link.label}
              </Link>
            )
          )}
          <ThemeToggle />
          <a
            href="/#contact"
            className="text-[15px] px-4 py-1.5 rounded-full font-medium transition-colors duration-150"
            style={{ color: 'var(--accent-text)', backgroundColor: 'var(--accent)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-dim)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
          >
            Contact
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span
              className="block h-px w-5 transition-all duration-200 origin-center"
              style={{
                backgroundColor: 'var(--foreground)',
                transform: open ? 'translateY(4px) rotate(45deg)' : undefined,
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                backgroundColor: 'var(--foreground)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200 origin-center"
              style={{
                backgroundColor: 'var(--foreground)',
                transform: open ? 'translateY(-4px) rotate(-45deg)' : undefined,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="sm:hidden -mt-12 mb-10 rounded-xl p-5 flex flex-col gap-1"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-[16px] px-3 py-2.5 rounded-lg transition-colors duration-150"
                style={{ color: 'var(--muted)' }}
              >
                {link.label} ↗
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px] px-3 py-2.5 rounded-lg transition-colors duration-150"
                style={{
                  color: isActive(link.href, pathname) ? 'var(--accent)' : 'var(--muted)',
                  fontWeight: isActive(link.href, pathname) ? '500' : undefined,
                  backgroundColor: isActive(link.href, pathname) ? 'var(--accent-light)' : undefined,
                }}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block text-center text-[16px] px-4 py-2.5 rounded-lg font-medium"
              style={{ color: 'var(--accent-text)', backgroundColor: 'var(--accent)' }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  )
}
