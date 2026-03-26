import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import { getAllNoteSlugs, getNoteBySlug } from '@/lib/notes'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getNoteBySlug(slug)
    return {
      title: `${meta.title} — Jeff Mboya`,
      description: meta.description,
    }
  } catch {
    return { title: 'Not Found' }
  }
}

function extractHeadings(content: string) {
  return content
    .split('\n')
    .map((line) => line.match(/^(#{2,3})\s+(.+)/))
    .filter(Boolean)
    .map((m) => ({
      level: m![1].length,
      text: m![2].trim(),
      id: m![2].trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'),
    }))
}

function formatDate(raw: string): string {
  const [year, month] = raw.split('-')
  if (!month) return year
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default async function LogPage({ params }: Props) {
  const { slug } = await params

  let meta, content
  try {
    ;({ meta, content } = getNoteBySlug(slug))
  } catch {
    notFound()
  }

  const headings = extractHeadings(content!)

  return (
    <div className="pb-20">
      <div className="mb-8">
        <Link href="/blogs" className="text-[13px] transition-colors duration-150" style={{ color: 'var(--accent)' }}>
          ← Blogs
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 items-start">
        <div>
          <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
            {formatDate(meta!.date)}
          </div>
          <h1 className="text-[32px] font-bold tracking-tight mb-3 leading-[1.15]" style={{ color: 'var(--foreground)' }}>
            {meta!.title}
          </h1>
          <p className="text-[15px] mb-10 leading-relaxed" style={{ color: 'var(--muted)' }}>
            {meta!.description}
          </p>
          <article className="prose">
            <MDXRemote
              source={content!}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode as any, { theme: 'github-dark' }]],
                },
              }}
            />
          </article>
        </div>

        {headings.length > 0 && (
          <aside className="hidden lg:block sticky top-8">
            <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
              On this page
            </div>
            <nav className="flex flex-col gap-1">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="text-[12px] leading-snug transition-colors duration-150"
                  style={{
                    color: 'var(--muted)',
                    paddingLeft: h.level === 3 ? '12px' : '0',
                  }}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </aside>
        )}
      </div>
    </div>
  )
}
