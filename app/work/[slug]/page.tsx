import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects'
import PhotoGrid from '@/components/PhotoGrid'
import { extractHeadings, formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getProjectBySlug(slug)
    return {
      title: `${meta.title} — Jeff Mboya`,
      description: meta.description,
      openGraph: {
        title: `${meta.title} — Jeff Mboya`,
        description: meta.description,
        type: 'article',
      },
    }
  } catch {
    return { title: 'Not Found' }
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  let meta, content
  try {
    ;({ meta, content } = getProjectBySlug(slug))
  } catch {
    notFound()
  }

  const headings = extractHeadings(content!)

  return (
    <div className="pb-20">
      <div className="mb-8">
        <Link href="/" className="text-[13px] transition-colors duration-150" style={{ color: 'var(--accent)' }}>
          ← Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-10 items-start">

        {/* Left sidebar — Stack */}
        <aside className="hidden lg:block sticky top-8">
          <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>Stack</div>
            <div className="flex flex-col gap-1.5 mb-5">
              {meta!.stack.map((s) => (
                <span key={s} className="text-[13px] pb-1.5" style={{ color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {meta!.github && (
                <a
                  href={meta!.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] underline underline-offset-2 transition-colors duration-150"
                  style={{ color: 'var(--accent)' }}
                >
                  View on GitHub ↗
                </a>
              )}
              {meta!.demo && (
                <a
                  href={meta!.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] underline underline-offset-2 transition-colors duration-150"
                  style={{ color: 'var(--accent)' }}
                >
                  Live demo ↗
                </a>
              )}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div>
          <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
            {formatDate(meta!.date)}
          </div>
          <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--foreground)' }}>{meta!.title}</h1>
          <p className="text-[15px] mb-10 leading-relaxed" style={{ color: 'var(--muted)' }}>{meta!.description}</p>
          <article className="prose">
            <MDXRemote
              source={content!}
              components={{ PhotoGrid }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, [rehypePrettyCode as any, { theme: 'github-dark' }]],
                },
              }}
            />
          </article>
        </div>

        {/* Right sidebar — On this page */}
        <aside className="hidden lg:block sticky top-8">
          {headings.length > 0 && (
            <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
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
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
