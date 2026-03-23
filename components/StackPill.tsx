interface StackPillProps {
  label: string
}

export default function StackPill({ label }: StackPillProps) {
  return (
    <span className="inline-block bg-[#f0f0f0] border border-[#e0e0e0] text-[#555] text-[11px] px-2.5 py-1 rounded-full">
      {label}
    </span>
  )
}
