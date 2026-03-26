import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Jeff Mboya — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          backgroundColor: '#0a0a0a',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            backgroundColor: '#22c55e',
          }}
        />

        {/* Location pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#22c55e',
              backgroundColor: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: '4px',
              padding: '4px 10px',
            }}
          >
            Nairobi, Kenya
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#f5f5f5',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}
        >
          Jeff Mboya
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: '#888',
            lineHeight: 1.4,
            maxWidth: '700px',
          }}
        >
          From Nairobi&apos;s first DAC machine to WebAssembly task orchestrators.
        </div>

        {/* Stack pills */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '32px' }}>
          {['Go', 'Rust', 'TypeScript', 'WebAssembly', 'PLCs'].map((s) => (
            <div
              key={s}
              style={{
                fontSize: '12px',
                color: '#666',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '4px',
                padding: '4px 10px',
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
