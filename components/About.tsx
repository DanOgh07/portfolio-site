'use client'

const FACTS = [
  { label: 'Role', value: 'Analytics Innovation Manager' },
  { label: 'Company', value: 'DecisionSpaak Technologies' },
  { label: 'Location', value: 'Lagos, Nigeria' },
  { label: 'Degree', value: 'B.Sc. Computer Science (2:1) — University of Ibadan' },
  { label: 'Available', value: 'Open to full-time & contract roles' },
]

const TOOLS = [
  'Python', 'Power BI', 'SQL', 'Pandas', 'NumPy',
  'Scikit-learn', 'PyTorch', 'Excel', 'Matplotlib', 'Seaborn',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-3xl px-6 pb-24 pt-20 md:px-10"
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
          About me
        </span>
        <div
          className="h-px flex-1"
          style={{ background: 'var(--color-card-border)' }}
        />
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">

        {/* ── LEFT: narrative ── */}
        <div className="flex flex-col gap-5">
          <h2
            className="font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-sora)',
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              letterSpacing: '-0.5px',
              color: 'var(--color-text-primary)',
            }}
          >
            I turn messy data into{' '}
            <span style={{ color: '#00C9A7' }}>clear decisions.</span>
          </h2>

          <p
            className="leading-relaxed"
            style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--color-text-sub)' }}
          >
            I&apos;m a Computer Science graduate from the University of Ibadan
            (Second Class Upper), currently working as Analytics Innovation Manager
            at DecisionSpaak Technologies in Lagos. My work sits at the intersection
            of data engineering, machine learning, and business intelligence.
          </p>

          <p
            className="leading-relaxed"
            style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--color-text-sub)' }}
          >
            Day to day, I lead research and advanced analytics for intelligence
            projects — building ML pipelines, maintaining production models, and
            translating messy business problems into structured analytical
            solutions that stakeholders can actually act on.
          </p>

          <p
            className="leading-relaxed"
            style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--color-text-sub)' }}
          >
            Outside of work, I follow football closely through a sports science
            lens, and I&apos;m building a creative fiction project that explores
            Nigerian politics through data and storytelling.
          </p>

          {/* Tool chips */}
          <div className="mt-2 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-md px-3 py-1"
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#00C9A7',
                  background: 'rgba(0,201,167,0.07)',
                  border: '0.5px solid rgba(0,201,167,0.20)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: fact card ── */}
        <div
          className="flex flex-col divide-y self-start rounded-xl"
          style={{
            border: '0.5px solid var(--color-card-border)',
            background: 'var(--color-card-bg)',
            divideColor: 'var(--color-card-border)',
          }}
        >
          {FACTS.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1 px-5 py-4">
              <span
                className="uppercase tracking-wide"
                style={{
                  fontSize: 10,
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.08em',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: 13.5,
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                }}
              >
                {value}
              </span>
            </div>
          ))}

          {/* CTA inside card */}
          <div className="px-5 py-4">
            <a
              href="/Daniel_Oghie_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg font-medium transition-all"
              style={{
                padding: '8px 18px',
                fontSize: 12.5,
                background: '#00C9A7',
                color: '#0A0F1E',
                fontFamily: 'var(--font-dm)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background = '#00ddb8'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background = '#00C9A7'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              }}
            >
              <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
