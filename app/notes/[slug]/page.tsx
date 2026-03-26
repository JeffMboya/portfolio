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

export default async function NotePage({ params }: Props) {
  const { slug } = await params

  let meta, content
  try {
    ;({ meta, content } = getNoteBySlug(slug))
  } catch {
    notFound()
  }

  return (
    <div className="pb-20">
      <div className="mb-8">
        <Link
          href="/notes"
          className="text-[13px] transition-colors duration-150"
          style={{ color: 'var(--accent)' }}
        >
          ← Notes
        </Link>
      </div>

      <div className="max-w-[680px]">
        <div className="text-[11px] uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--muted-dim)' }}>
          {meta!.date}
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
    </div>
  )
}
