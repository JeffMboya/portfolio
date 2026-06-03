'use client'

import { useState } from 'react'

// Sign up at formspree.io, create a form, and replace this with your form ID.
// Your email address is stored only in Formspree's dashboard — never in code or on the page.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqlnyap'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-xl p-6 text-center"
        style={{ border: '1px solid var(--accent-muted)', backgroundColor: 'var(--accent-light)' }}
      >
        <p className="text-[17px] font-medium mb-1" style={{ color: 'var(--accent)' }}>Message sent.</p>
        <p className="text-[15px]" style={{ color: 'var(--muted)' }}>I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] uppercase tracking-wider font-medium" style={{ color: 'var(--muted-dim)' }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-md px-3 py-2 text-[15px] outline-none transition-colors duration-150"
            style={{
              backgroundColor: 'var(--surface-hover)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-muted)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] uppercase tracking-wider font-medium" style={{ color: 'var(--muted-dim)' }}>
            What are you building?
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="One line on the project"
            className="rounded-md px-3 py-2 text-[15px] outline-none transition-colors duration-150"
            style={{
              backgroundColor: 'var(--surface-hover)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-muted)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[13px] uppercase tracking-wider font-medium" style={{ color: 'var(--muted-dim)' }}>
          Tell me about the problem
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you working on, what's hard about it, and where do I fit?"
          className="rounded-md px-3 py-2 text-[15px] outline-none transition-colors duration-150 resize-none"
          style={{
            backgroundColor: 'var(--surface-hover)',
            border: '1px solid var(--border)',
            color: 'var(--foreground)',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-muted)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>
      {status === 'error' && (
        <p className="text-[14px]" style={{ color: '#f87171' }}>
          Something went wrong — try again or reach out on LinkedIn.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="self-start text-[15px] font-medium px-5 py-2.5 rounded-md transition-colors duration-150 disabled:opacity-60"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
