'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,201,167,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,201,167,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Teal glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 520,
          height: 520,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,201,167,0.10) 0%, transparent 70%)',
          top: -160,
          right: -80,
        }}
      />

      {/* Amber glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 320,
          height: 320,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(244,162,97,0.06) 0%, transparent 70%)',
          bottom: -80,
          left: -60,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-20 md:px-10 md:pt-28">

        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{
            border: '0.5px solid rgba(0,201,167,0.30)',
            background: 'rgba(0,201,167,0.07)',
          }}
        >
          <span
            className="h-[5px] w-[5px] rounded-full"
            style={{
              background: '#00C9A7',
              animation: 'heroPulse 2s ease-in-out infinite',
            }}
          />
          <span
            className="font-medium tracking-widest"
            style={{
              fontSize: 10.5,
              color: '#00C9A7',
              textTransform: 'uppercase',
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-3 font-semibold leading-[1.08] tracking-tight"
          style={{
            fontFamily: 'var(--font-sora)',
            fontSize: 'clamp(34px, 5.5vw, 54px)',
            letterSpacing: '-1.2px',
            color: 'var(--color-text-primary)',
          }}
        >
          Data that{' '}
          <span style={{ color: '#00C9A7' }}>tells</span>
          <br />
          the right story.
        </h1>

        {/* Subheading */}
        <p
          className="mb-10 max-w-lg leading-relaxed"
          style={{
            fontSize: 15,
            fontWeight: 300,
            color: 'var(--color-text-sub)',
          }}
        >
          I&apos;m Daniel Oghie — Analytics Innovation Manager &amp; Data
          Scientist. I build dashboards, ML pipelines, and predictive models
          that turn raw data into decisions.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/Daniel_Oghie_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg font-medium transition-all"
            style={{
              padding: '10px 22px',
              background: '#00C9A7',
              color: '#0A0F1E',
              fontSize: 13.5,
              fontFamily: 'var(--font-dm)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                '#00ddb8'
              ;(e.currentTarget as HTMLAnchorElement).style.transform =
                'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                '#00C9A7'
              ;(e.currentTarget as HTMLAnchorElement).style.transform =
                'translateY(0)'
            }}
          >
            {/* Download icon */}
            <svg
              width={13}
              height={13}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z" />
            </svg>
            Download CV
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg transition-all"
            style={{
              padding: '10px 22px',
              border: '0.5px solid var(--color-ghost-border)',
              background: 'transparent',
              color: 'var(--color-text-primary)',
              fontSize: 13.5,
              fontFamily: 'var(--font-dm)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                'rgba(255,255,255,0.3)'
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                'var(--color-ghost-border)'
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                'transparent'
            }}
          >
            View Projects →
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.75);
          }
        }
      `}</style>
    </section>
  )
}
