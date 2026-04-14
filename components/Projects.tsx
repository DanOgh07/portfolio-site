'use client'

const PROJECTS = [
  {
    title: 'Macroeconomic Dashboard',
    category: 'Data Visualisation',
    stack: ['Power BI', 'DAX', 'Excel'],
    description:
      'Built an interactive multi-indicator dashboard tracking GDP growth, inflation rates, foreign exchange reserves, and oil production trends. Designed DAX measures and dynamic visuals to surface patterns across economic cycles, enabling at-a-glance comparison of macroeconomic performance over time.',
    github: '',
    live: '',
    accent: '#00C9A7',
  },
  {
    title: 'Loan Default Risk Analysis',
    category: 'Exploratory Data Analysis',
    stack: ['Python', 'Pandas', 'Excel'],
    description:
      'Conducted end-to-end exploratory data analysis on a loan dataset to uncover the key demographic and financial factors driving default risk. Cleaned and profiled 9,500+ records across 14 variables, identified high-risk borrower segments, and surfaced actionable patterns to inform credit risk decision-making.',
    github: '',
    live: '',
    accent: '#00C9A7',
  },
  {
    title: 'Income Classification Pipeline',
    category: 'Machine Learning',
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    description:
      'Built a binary classification pipeline on the Adult Census Income dataset to predict whether an individual earns above $50K. Implemented and compared multiple ML models with equal hyperparameter tuning across all candidates to ensure fair model selection, then evaluated performance using accuracy, precision, recall, and F1-score.',
    github: '',
    live: '',
    accent: '#00C9A7',
  },
  {
    title: 'NGX Stock Price Predictor',
    category: 'Machine Learning · Time Series',
    stack: ['Python', 'PyTorch', 'LightGBM', 'Prophet'],
    description:
      'End-to-end ML pipeline predicting stock prices for 10 NGX tickers (MTNN, GTCO, ZENITHB, and others) using LSTM, LightGBM, and Prophet. Engineered macro features including USD/NGN exchange rate, Brent crude, CBN MPR, and CPI with a rebase flag to capture structural breaks in Nigerian market data.',
    github: '',
    live: '',
    accent: '#F4A261',
  },
  {
    title: 'African Cities Intelligence Report',
    category: 'Predictive Analytics',
    stack: ['Python', 'Power BI', 'Web Scraping'],
    description:
      'Predictive intelligence report identifying the next five African cities to watch for investment and growth. Built a full data pipeline covering economic indicators, infrastructure, demographic trends, and governance scores across candidate cities — delivered as a structured DecisionSpaak intelligence product.',
    github: '',
    live: '',
    accent: '#F4A261',
  },
]

export default function Projects() {
  return (
    <section
      id="portfolio"
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
          Projects
        </span>
        <div
          className="h-px flex-1"
          style={{ background: 'var(--color-card-border)' }}
        />
      </div>

      {/* Section heading */}
      <h2
        className="mb-10 font-semibold leading-tight"
        style={{
          fontFamily: 'var(--font-sora)',
          fontSize: 'clamp(22px, 3vw, 30px)',
          letterSpacing: '-0.4px',
          color: 'var(--color-text-primary)',
        }}
      >
        Things I&apos;ve built and{' '}
        <span style={{ color: '#00C9A7' }}>shipped.</span>
      </h2>

      {/* Project cards */}
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col gap-4 rounded-xl p-6 transition-all"
            style={{
              border: '0.5px solid var(--color-card-border)',
              background: 'var(--color-card-bg)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor =
                `${project.accent}33`
              ;(e.currentTarget as HTMLElement).style.background =
                `${project.accent}06`
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor =
                'var(--color-card-border)'
              ;(e.currentTarget as HTMLElement).style.background =
                'var(--color-card-bg)'
            }}
          >
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                {/* Category pill */}
                <span
                  className="mb-1 inline-block rounded-md px-2 py-0.5"
                  style={{
                    fontSize: 10.5,
                    fontWeight: 500,
                    color: project.accent,
                    background: `${project.accent}12`,
                    border: `0.5px solid ${project.accent}30`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-semibold leading-snug"
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontSize: 17,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Links */}
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center rounded-lg transition-colors"
                    style={{
                      width: 32,
                      height: 32,
                      border: '0.5px solid var(--color-card-border)',
                      background: 'var(--color-card-bg)',
                      color: 'var(--color-text-sub)',
                    }}
                  >
                    {/* GitHub icon */}
                    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97.01 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="flex items-center justify-center rounded-lg transition-colors"
                    style={{
                      width: 32,
                      height: 32,
                      border: '0.5px solid var(--color-card-border)',
                      background: 'var(--color-card-bg)',
                      color: 'var(--color-text-sub)',
                    }}
                  >
                    {/* External link icon */}
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="leading-relaxed"
              style={{
                fontSize: 13.5,
                fontWeight: 300,
                color: 'var(--color-text-sub)',
                lineHeight: 1.75,
              }}
            >
              {project.description}
            </p>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md px-2.5 py-0.5"
                  style={{
                    fontSize: 11.5,
                    fontWeight: 400,
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-bar-bg)',
                    border: '0.5px solid var(--color-bar-border)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-10 text-center">
        <a
          href="https://github.com/DanOgh07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg transition-all"
          style={{
            padding: '10px 22px',
            fontSize: 13.5,
            border: '0.5px solid var(--color-ghost-border)',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-dm)',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
              'rgba(0,201,167,0.4)'
            ;(e.currentTarget as HTMLAnchorElement).style.color = '#00C9A7'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
              'var(--color-ghost-border)'
            ;(e.currentTarget as HTMLAnchorElement).style.color =
              'var(--color-text-primary)'
          }}
        >
          <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97.01 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
          </svg>
          See all projects on GitHub
        </a>
      </div>
    </section>
  )
}
