import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffmboya.com'),
  title: 'Jeff Mboya — Software Engineer',
  description:
    'Backend and systems engineer focused on WebAssembly, distributed task execution, and infrastructure.',
  openGraph: {
    title: 'Jeff Mboya — Software Engineer',
    description:
      'Backend and systems engineer focused on WebAssembly, distributed task execution, and infrastructure.',
    url: 'https://jeffmboya.com',
    siteName: 'Jeff Mboya',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Mboya — Software Engineer',
    description: 'Backend and systems engineer. Go · Rust · WebAssembly.',
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
