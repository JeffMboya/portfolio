interface StackPillProps {
  label: string
}

export default function StackPill({ label }: StackPillProps) {
  return (
    <span className="inline-block bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] text-[#22c55e] text-[11px] px-2.5 py-1 rounded-full font-medium">
      {label}
    </span>
  )
}
