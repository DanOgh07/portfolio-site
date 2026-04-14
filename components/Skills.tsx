'use client'

const SKILL_GROUPS = [
  {
    category: 'Languages & Libraries',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 78 },
      { name: 'Pandas & NumPy', level: 88 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'PyTorch', level: 68 },
      { name: 'Matplotlib & Seaborn', level: 84 },
    ],
  },
  {
    category: 'BI & Visualisation',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'DAX', level: 80 },
      { name: 'Excel (Advanced)', level: 85 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Seaborn', level: 80 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    skills: [
      { name: 'Supervised Learning', level: 82 },
      { name: 'Feature Engineering', level: 85 },
      { name: 'Model Evaluation', level: 84 },
      { name: 'Time Series (LSTM, Prophet)', level: 72 },
      { name: 'LightGBM / XGBoost', level: 74 },
    ],
  },
  {
    category: 'Tools & Environment',
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: 'Google Colab / Kaggle', level: 88 },
      { name: 'PyCharm', level: 82 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Notion', level: 85 },
      { name: 'Meta-Llama / Ollama', level: 68 },
    ],
  },
]

const SOFT_SKILLS = [
  'Analytical thinking',
  'Stakeholder communication',
  'Cross-functional collaboration',
  'Research & documentation',
  'Critical thinking',
  'People management',
]

const CERTS = [
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', year: '2026' },
  { name: 'Prompt Engineering for Beginners', issuer: 'Verticul', year: '2025' },
  { name: 'Preparing Data for Analysis with Excel', issuer: 'Microsoft & Coursera', year: '2025' },
  { name: 'Career Essentials in System Administration', issuer: 'Microsoft & LinkedIn', year: '2024' },
  { name: 'Intro to AI, ML and Data Science', issuer: 'Udemy', year: '2024' },
  { name: 'NumPy, Pandas, Seaborn Masterclass', issuer: 'Udemy', year: '2023' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'OpenClassrooms', year: '2023' },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: 'var(--color-text-primary)',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: 11,
            color: 'var(--color-text-muted)',
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-[3px] w-full overflow-hidden rounded-full"
        style={{ background: 'var(--color-bar-border)' }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, #00C9A7, #00ddb8)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
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
        What I bring to{' '}
        <span style={{ color: '#00C9A7' }}>the table.</span>
      </h2>

      {/* Skill groups grid */}
      <div className="mb-10 grid gap-5 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-5 rounded-xl p-5"
            style={{
              border: '0.5px solid var(--color-card-border)',
              background: 'var(--color-card-bg)',
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-2">
              <span style={{ color: '#00C9A7' }}>{group.icon}</span>
              <span
                className="font-medium"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: 13,
                  color: 'var(--color-text-primary)',
                }}
              >
                {group.category}
              </span>
            </div>

            {/* Skill bars */}
            <div className="flex flex-col gap-3.5">
              {group.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills + Certs row */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* Soft skills */}
        <div
          className="flex flex-col gap-4 rounded-xl p-5"
          style={{
            border: '0.5px solid var(--color-card-border)',
            background: 'var(--color-card-bg)',
          }}
        >
          <div className="flex items-center gap-2">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <span
              className="font-medium"
              style={{
                fontFamily: 'var(--font-sora)',
                fontSize: 13,
                color: 'var(--color-text-primary)',
              }}
            >
              Soft skills
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-md px-3 py-1"
                style={{
                  fontSize: 12,
                  color: '#00C9A7',
                  background: 'rgba(0,201,167,0.07)',
                  border: '0.5px solid rgba(0,201,167,0.20)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          className="flex flex-col gap-4 rounded-xl p-5"
          style={{
            border: '0.5px solid var(--color-card-border)',
            background: 'var(--color-card-bg)',
          }}
        >
          <div className="flex items-center gap-2">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <span
              className="font-medium"
              style={{
                fontFamily: 'var(--font-sora)',
                fontSize: 13,
                color: 'var(--color-text-primary)',
              }}
            >
              Certifications
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {CERTS.map((c) => (
              <div key={c.name} className="flex flex-col gap-0.5">
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 400,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.4,
                  }}
                >
                  {c.name}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {c.issuer} · {c.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
