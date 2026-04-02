import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffmboya.com'),
  alternates: { canonical: '/' },
  title: 'Jeff Mboya — Mechatronics Engineer',
  description:
    'Mechatronics engineer focused on WebAssembly, distributed task execution, and infrastructure.',
  openGraph: {
    title: 'Jeff Mboya — Mechatronics Engineer',
    description:
      'Mechatronics engineer focused on WebAssembly, distributed task execution, and infrastructure.',
    url: 'https://jeffmboya.com',
    siteName: 'Jeff Mboya',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Mboya — Mechatronics Engineer',
    description: 'Mechatronics engineer. Go · Rust · WebAssembly.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <ThemeProvider>
          <div className="max-w-[900px] mx-auto px-6">
            <Nav />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
