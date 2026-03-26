import Image from 'next/image'

interface Props {
  srcs: string   // comma-separated list of image paths
  captions?: string  // comma-separated list of captions (optional)
}

export default function PhotoGrid({ srcs, captions }: Props) {
  if (!srcs) return null
  const srcList = srcs.split(',').map((s) => s.trim()).filter(Boolean)
  const captionList = captions ? captions.split('|').map((c) => c.trim()) : []

  return (
    <div className="grid grid-cols-3 gap-3 my-8 not-prose">
      {srcList.map((src, i) => (
        <div key={src} className="flex flex-col gap-1.5">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.08)]">
            <Image
              src={src}
              alt={captionList[i] ?? ''}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          {captionList[i] && (
            <p className="text-[11px] text-[#555] text-center">{captionList[i]}</p>
          )}
        </div>
      ))}
    </div>
  )
}
