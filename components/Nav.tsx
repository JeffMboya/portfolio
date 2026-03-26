'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: 'https://github.com/JeffMboya', label: 'GitHub', external: true },
  { href: 'https://scholar.google.com/citations?user=KmGiUgcAAAAJ&hl=en', label: 'Scholar', external: true },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between py-6 mb-16 border-b border-[rgba(255,255,255,0.08)]">
      <Link href="/" className="text-[15px] font-semibold tracking-tight text-[#f0f0f0]">
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
              className="text-[13px] text-[#666] hover:text-[#f0f0f0] transition-colors duration-150"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors duration-150 ${
                pathname === link.href || (link.href === '/research' && pathname.startsWith('/research'))
                  ? 'text-[#f0f0f0] font-medium'
                  : 'text-[#666] hover:text-[#f0f0f0]'
              }`}
            >
              {link.label}
            </Link>
          )
        )}
        <a
          href="/#contact"
          className="text-[13px] text-[#0c0c0c] bg-[#22c55e] px-4 py-1.5 rounded-full font-medium hover:bg-[#16a34a] transition-colors duration-150"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
