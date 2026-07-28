import { describe, it, expect } from 'vitest'
import { formatDate, extractHeadings } from './utils'

// Regression tests for ISSUE-001: work page dates must not render raw YYYY-MM format
describe('formatDate', () => {
  it('converts YYYY-MM to "Month YYYY" (not raw)', () => {
    const result = formatDate('2026-03')
    expect(result).not.toMatch(/^\d{4}-\d{2}$/)
    expect(result).toBe('March 2026')
  })

  // Day-precision dates keep the day (see content/notes/care-deeply-stay-unbothered.mdx,
  // which is dated "2026-04-22" and renders as "April 22, 2026").
  it('converts YYYY-MM-DD to "Month D, YYYY" (not raw)', () => {
    const result = formatDate('2023-06-15')
    expect(result).not.toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(result).toBe('June 15, 2023')
  })

  it('handles all work-page date formats used in content', () => {
    const cases: [string, string][] = [
      ['2022-11', 'November 2022'],
      ['2023-06', 'June 2023'],
      ['2024-03', 'March 2024'],
      ['2026-02', 'February 2026'],
      ['2026-03', 'March 2026'],
    ]
    for (const [input, expected] of cases) {
      expect(formatDate(input)).toBe(expected)
    }
  })

  it('returns year-only strings unchanged', () => {
    expect(formatDate('2024')).toBe('2024')
  })
})

// Regression tests for ISSUE-002: GFM table content exists in MDX source
describe('GFM table presence in MDX source', () => {
  it('njia.mdx contains a markdown table', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const content = fs.readFileSync(
      path.join(process.cwd(), 'content/projects/njia.mdx'),
      'utf-8'
    )
    expect(content).toMatch(/\|.*\|.*\|/)
  })

  it('nakuja.mdx contains a markdown table', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const content = fs.readFileSync(
      path.join(process.cwd(), 'content/projects/nakuja.mdx'),
      'utf-8'
    )
    expect(content).toMatch(/\|.*\|.*\|/)
  })
})

describe('extractHeadings', () => {
  it('extracts H2 and H3 headings with slugified IDs', () => {
    const content = `## How It Works\n### Sub Section\n## Another Heading`
    const headings = extractHeadings(content)
    expect(headings).toHaveLength(3)
    expect(headings[0]).toEqual({ level: 2, text: 'How It Works', id: 'how-it-works' })
    expect(headings[1]).toEqual({ level: 3, text: 'Sub Section', id: 'sub-section' })
  })

  it('ignores H1 headings', () => {
    const content = `# Title\n## Section`
    const headings = extractHeadings(content)
    expect(headings).toHaveLength(1)
    expect(headings[0].level).toBe(2)
  })
})
