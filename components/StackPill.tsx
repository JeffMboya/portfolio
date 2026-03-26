interface StackPillProps {
  label: string
  primary?: boolean
}

export default function StackPill({ label, primary }: StackPillProps) {
  return (
    <span
      className="inline-block text-[11px] px-2.5 py-1 rounded-full font-medium"
      style={primary ? {
        backgroundColor: 'var(--accent)',
        border: '1px solid var(--accent)',
        color: 'var(--accent-text)',
      } : {
        backgroundColor: 'var(--accent-light)',
        border: '1px solid var(--accent-muted)',
        color: 'var(--accent)',
      }}
    >
      {label}
    </span>
  )
}
