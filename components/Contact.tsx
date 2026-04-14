'use client'

import { useState } from 'react'

const LINKS = [
  {
    label: 'Email',
    value: 'danieloghie07@gmail.com',
    href: 'mailto:danieloghie07@gmail.com',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/danieloghie',
    href: 'https://www.linkedin.com/in/danieloghie',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/DanOgh07',
    href: 'https://github.com/DanOgh07',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97.01 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: null,
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    Formspree: https://formspree.io
    
    try {
      const res = await fetch('https://formspree.io/f/xeepbboq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '0.5px solid var(--color-card-border)',
    background: 'var(--color-card-bg)',
    color: 'var(--color-text-primary)',
    fontSize: 13.5,
    fontFamily: 'var(--font-dm)',
    outline: 'none',
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-3xl px-6 pb-32 pt-20 md:px-10"
    >
      {/* Section label */}
      <div className="mb-12 flex items-center gap-4">
        <span
          className="font-semibold uppercase tracking-widest"
          style={{
            fontFamily: 'var(--font-sora)',
            fontSize: 11,
            color: '#00C9A7',
            letterSpacing: '0.12em',
          }}
        >
          Contact
        </span>
        <div
          className="h-px flex-1"
          style={{ background: 'var(--color-card-border)' }}
        />
      </div>

      {/* Section heading */}
      <h2
        className="mb-3 font-semibold leading-tight"
        style={{
          fontFamily: 'var(--font-sora)',
          fontSize: 'clamp(22px, 3vw, 30px)',
          letterSpacing: '-0.4px',
          color: 'var(--color-text-primary)',
        }}
      >
        Let&apos;s work{' '}
        <span style={{ color: '#00C9A7' }}>together.</span>
      </h2>
      <p
        className="mb-12"
        style={{
          fontSize: 14.5,
          fontWeight: 300,
          color: 'var(--color-text-sub)',
          lineHeight: 1.75,
          maxWidth: 460,
        }}
      >
        Open to full-time roles, contract work, and interesting data problems.
        Drop me a message and I&apos;ll get back to you promptly.
      </p>

      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">

        {/* ── LEFT: contact links ── */}
        <div className="flex flex-col gap-3">
          {LINKS.map((link) => {
            const inner = (
              <div
                className="flex items-center gap-3 rounded-xl p-4 transition-all"
                style={{
                  border: '0.5px solid var(--color-card-border)',
                  background: 'var(--color-card-bg)',
                }}
              >
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: 'rgba(0,201,167,0.08)',
                    color: '#00C9A7',
                    border: '0.5px solid rgba(0,201,167,0.18)',
                  }}
                >
                  {link.icon}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span
                    style={{
                      fontSize: 10.5,
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="truncate"
                    style={{
                      fontSize: 13,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {link.value}
                  </span>
                </div>
                {link.href && (
                  <svg
                    className="ml-auto flex-shrink-0"
                    width={12}
                    height={12}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00C9A7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.5 }}
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                )}
              </div>
            )

            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block no-underline"
                onMouseEnter={(e) => {
                  const card = e.currentTarget.firstChild as HTMLElement
                  card.style.borderColor = 'rgba(0,201,167,0.30)'
                  card.style.background = 'rgba(0,201,167,0.05)'
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.firstChild as HTMLElement
                  card.style.borderColor = 'var(--color-card-border)'
                  card.style.background = 'var(--color-card-bg)'
                }}
              >
                {inner}
              </a>
            ) : (
              <div key={link.label}>{inner}</div>
            )
          })}
        </div>

        {/* ── RIGHT: contact form ── */}
        <div
          className="flex flex-col gap-4 rounded-xl p-5"
          style={{
            border: '0.5px solid var(--color-card-border)',
            background: 'var(--color-card-bg)',
          }}
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              style={{
                fontSize: 11.5,
                color: 'var(--color-text-muted)',
                fontWeight: 400,
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style.borderColor = 'rgba(0,201,167,0.50)')
              }
              onBlur={(e) =>
                (e.target.style.borderColor = 'var(--color-card-border)')
              }
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              style={{
                fontSize: 11.5,
                color: 'var(--color-text-muted)',
                fontWeight: 400,
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style.borderColor = 'rgba(0,201,167,0.50)')
              }
              onBlur={(e) =>
                (e.target.style.borderColor = 'var(--color-card-border)')
              }
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              style={{
                fontSize: 11.5,
                color: 'var(--color-text-muted)',
                fontWeight: 400,
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell me what you're working on..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
              onFocus={(e) =>
                (e.target.style.borderColor = 'rgba(0,201,167,0.50)')
              }
              onBlur={(e) =>
                (e.target.style.borderColor = 'var(--color-card-border)')
              }
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'sending' || status === 'sent'}
            className="flex w-full items-center justify-center gap-2 rounded-lg font-medium transition-all"
            style={{
              padding: '10px 22px',
              background:
                status === 'sent' ? 'rgba(0,201,167,0.15)' : '#00C9A7',
              color: status === 'sent' ? '#00C9A7' : '#0A0F1E',
              fontSize: 13.5,
              fontFamily: 'var(--font-dm)',
              border:
                status === 'sent'
                  ? '0.5px solid rgba(0,201,167,0.30)'
                  : 'none',
              cursor:
                status === 'sending' || status === 'sent'
                  ? 'default'
                  : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
            }}
          >
            {status === 'idle' && (
              <>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                Send message
              </>
            )}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && (
              <>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent
              </>
            )}
            {status === 'error' && 'Something went wrong — try again'}
          </button>

          {status === 'error' && (
            <p style={{ fontSize: 12, color: '#E24B4A', textAlign: 'center' }}>
              Could not send. Email me directly at danieloghie07@gmail.com
            </p>
          )}
        </div>
      </div>

      {/* Footer note */}
      <p
        className="mt-16 text-center"
        style={{ fontSize: 12, color: 'var(--color-text-muted)' }}
      >
        Built with Next.js · Deployed on Vercel · Designed by Daniel Oghie
      </p>
    </section>
  )
}
