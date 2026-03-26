interface StackPillProps {
  label: string
  primary?: boolean
}

export default function StackPill({ label, primary }: StackPillProps) {
  return (
    <span
      className="inline-block text-[11px] px-2.5 py-1 rounded-full"
      style={{
        backgroundColor: 'var(--accent-light)',
        border: '1px solid var(--accent-muted)',
        color: 'var(--accent)',
        fontWeight: primary ? 700 : 500,
      }}
    >
      {label}
    </span>
  )
}
