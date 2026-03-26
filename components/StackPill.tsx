interface StackPillProps {
  label: string
}

export default function StackPill({ label }: StackPillProps) {
  return (
    <span
      className="inline-block text-[11px] px-2.5 py-1 rounded-full font-medium"
      style={{
        backgroundColor: 'var(--accent-light)',
        border: '1px solid var(--accent-muted)',
        color: 'var(--accent)',
      }}
    >
      {label}
    </span>
  )
}
