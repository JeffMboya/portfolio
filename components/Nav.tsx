'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: 'https://github.com/JeffMboya', label: 'GitHub', external: true },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between py-6 mb-16 border-b border-[#e8e8e8]">
      <Link href="/" className="text-[15px] font-semibold tracking-tight text-[#111]">
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
              className="text-[13px] text-[#555] hover:text-[#16a34a] transition-colors duration-150"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors duration-150 ${
                pathname === link.href ? 'text-[#16a34a] font-medium' : 'text-[#555] hover:text-[#16a34a]'
              }`}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
