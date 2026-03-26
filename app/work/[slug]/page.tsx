import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects'

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

  return (
    <div className="pb-20">
      <div className="mb-8">
        <Link
          href="/"
          className="text-[13px] text-[#22c55e] hover:text-[#16a34a] transition-colors duration-150"
        >
          ← Back
        </Link>
      </div>

      <div className="grid grid-cols-[1fr_220px] gap-12 items-start">
        <div>
          <div className="text-[11px] text-[#22c55e] uppercase tracking-widest mb-3 font-medium">
            {meta!.date}
          </div>
          <h1 className="text-[32px] font-bold tracking-tight mb-3 text-[#f0f0f0]">{meta!.title}</h1>
          <p className="text-[15px] text-[#888] mb-10 leading-relaxed">{meta!.description}</p>
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

        <aside className="sticky top-8">
          <div className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-xl p-5">
            <div className="text-[11px] text-[#22c55e] uppercase tracking-widest mb-3 font-medium">Stack</div>
            <div className="flex flex-col gap-1.5 mb-5">
              {meta!.stack.map((s) => (
                <span key={s} className="text-[13px] text-[#888] border-b border-[rgba(255,255,255,0.06)] pb-1.5">
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
                  className="text-[13px] text-[#22c55e] underline underline-offset-2 hover:text-[#16a34a] transition-colors duration-150"
                >
                  View on GitHub ↗
                </a>
              )}
              {meta!.demo && (
                <a
                  href={meta!.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#22c55e] underline underline-offset-2 hover:text-[#16a34a] transition-colors duration-150"
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
