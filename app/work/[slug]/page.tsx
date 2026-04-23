import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects'
import PhotoGrid from '@/components/PhotoGrid'
import ContactCTA from '@/components/ContactCTA'
import { formatDate } from '@/lib/utils'


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
      alternates: { canonical: `/work/${slug}/` },
      openGraph: {
        title: `${meta.title} — Jeff Mboya`,
        description: meta.description,
        type: 'article',
        ...(meta.cover ? { images: [{ url: meta.cover }] } : {}),
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

  return (
    <div className="pb-20">
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted-dim)' }}>
          <Link href="/" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Home</Link>
          <span>/</span>
          <Link href="/#work" className="transition-colors duration-150 hover:underline" style={{ color: 'var(--accent)' }}>Work</Link>
          <span>/</span>
          <span className="truncate max-w-[200px]" style={{ color: 'var(--foreground)' }}>{meta!.title}</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 items-start">

        {/* Main content */}
        <div>
          <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>
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
          <ContactCTA />
        </div>

        {/* Right sidebar — Stack */}
        <aside className="hidden lg:block sticky top-8">
          <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--foreground)' }}>Stack</div>
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
      </div>
    </div>
  )
}
