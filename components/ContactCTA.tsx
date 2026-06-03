import Link from 'next/link'

interface Props {
  context?: string
}

export default function ContactCTA({ context }: Props) {
  return (
    <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
      <p className="text-[16px] mb-2" style={{ color: 'var(--muted)' }}>
        {context ?? 'Working on something in this space?'}
      </p>
      <Link
        href="/#contact"
        className="text-[16px] font-medium transition-colors duration-150"
        style={{ color: 'var(--accent)' }}
      >
        Get in touch →
      </Link>
    </div>
  )
}
