interface StackPillProps {
  label: string
}

export default function StackPill({ label }: StackPillProps) {
  return (
    <span className="inline-block bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] text-[11px] px-2.5 py-1 rounded-full font-medium">
      {label}
    </span>
  )
}
