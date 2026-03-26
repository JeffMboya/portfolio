export function formatDate(raw: string): string {
  const [year, month] = raw.split('-')
  if (!month) return year
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export function extractHeadings(content: string): { level: number; text: string; id: string }[] {
  return content
    .split('\n')
    .map((line) => line.match(/^(#{2,3})\s+(.+)/))
    .filter(Boolean)
    .map((m) => ({
      level: m![1].length,
      text: m![2].trim(),
      id: m![2].trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'),
    }))
}
