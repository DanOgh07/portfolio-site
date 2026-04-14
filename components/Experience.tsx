'use client'

const EXPERIENCES = [
  {
    role: 'Analytics Innovation Manager',
    company: 'DecisionSpaak Technologies',
    type: 'Full-time · Remote',
    period: 'June 2025 — Present',
    current: true,
    bullets: [
      'Lead research and advanced analytics for the intelligence team and external client projects, performing data gathering, cleansing, and exploratory data analysis.',
      'Develop and deploy machine-learning models, documenting algorithms and experiment results to support reproducibility and knowledge sharing.',
      'Optimise and maintain production ML models, improving performance and reliability for data-driven products.',
      'Collaborate with internal teams and external stakeholders to translate business problems into analytical solutions and present actionable insights.',
    ],
    stack: ['Python', 'PyTorch', 'Power BI', 'LightGBM', 'Prophet'],
  },
  {
    role: 'Analytics & Innovation Intern',
    company: 'DecisionSpaak Technologies',
    type: 'Internship · Remote',
    period: 'March 2025 — June 2025',
    current: false,
    bullets: [
      'Collected, organised, and validated survey and operational data in Excel, ensuring accuracy for inclusion in the corporate data warehouse.',
      'Supported data preparation and exploratory analysis activities, enhancing data quality and accelerating reporting timelines.',
      'Strengthened attention to detail by verifying data integrity across multiple sources, contributing to reliable decision-making.',
    ],
    stack: ['Python', 'Excel', 'Power BI'],
  },
  {
    role: 'IT Operations Intern',
    company: 'Eko Electricity Distribution Company',
    type: 'Internship · Lagos State',
    period: 'January 2024 — June 2024',
    current: false,
    bullets: [
      'Provided tier-1 technical support, resolving hardware and software tickets and improving employee productivity.',
      'Collaborated with Network and Administration teams to troubleshoot network issues and manage laptop configuration logistics.',
      'Documented recurring issues and solutions, reducing resolution time for future incidents.',
    ],
    stack: ['Windows Server', 'Networking', 'Technical Support'],
  },
  {
    role: 'Treasury Intern',
    company: 'Etsako West Local Government Secretariat',
    type: 'Internship · Edo State',
    period: 'January 2022 — February 2022',
    current: false,
    bullets: [
      'Assisted in budget preparation and financial reporting, ensuring data consistency across treasury documents.',
      'Prepared and updated payroll data in Microsoft Excel and addressed employee payroll inquiries.',
    ],
    stack: ['Excel', 'Financial Reporting'],
  },
]

const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  grade: 'Second Class Upper (2:1)',
  school: 'University of Ibadan',
  location: 'Oyo State, Nigeria',
  period: 'June 2019 — February 2025',
}

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </span>
        <div
          className="h-px flex-1"
          style={{ background: 'var(--color-card-border)' }}
        />
      </div>

      {/* Section heading */}
      <h2
        className="mb-12 font-semibold leading-tight"
        style={{
          fontFamily: 'var(--font-sora)',
          fontSize: 'clamp(22px, 3vw, 30px)',
          letterSpacing: '-0.4px',
          color: 'var(--color-text-primary)',
        }}
      >
        Where I&apos;ve{' '}
        <span style={{ color: '#00C9A7' }}>worked.</span>
      </h2>

      {/* Timeline */}
      <div className="relative flex flex-col gap-0">

        {/* Vertical line desktop only */}
        <div
          className="absolute left-[7px] top-2 hidden w-px sm:block"
          style={{
            bottom: 80,
            background: 'linear-gradient(to bottom, #00C9A7 0%, rgba(0,201,167,0.08) 100%)',
          }}
        />

        {EXPERIENCES.map((exp) => (
          <div key={exp.role + exp.company} className="relative flex gap-6 pb-10">

            {/* Timeline dot */}
            <div className="relative hidden flex-shrink-0 sm:block" style={{ width: 16 }}>
              <div
                className="absolute top-1.5 flex items-center justify-center rounded-full"
                style={{
                  width: 15,
                  height: 15,
                  background: exp.current ? '#00C9A7' : 'var(--color-bg)',
                  border: '1.5px solid ' + (exp.current ? '#00C9A7' : 'rgba(0,201,167,0.35)'),
                  left: 0,
                  zIndex: 1,
                }}
              >
                {exp.current && (
                  <div
                    className="rounded-full"
                    style={{ width: 5, height: 5, background: '#0A0F1E' }}
                  />
                )}
              </div>
            </div>

            {/* Card */}
            <div
              className="flex flex-1 flex-col gap-4 rounded-xl p-5"
              style={{
                border: '0.5px solid ' + (exp.current ? 'rgba(0,201,167,0.25)' : 'var(--color-card-border)'),
                background: exp.current ? 'rgba(0,201,167,0.04)' : 'var(--color-card-bg)',
              }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3
                      className="font-semibold"
                      style={{
                        fontFamily: 'var(--font-sora)',
                        fontSize: 16,
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span
                        className="rounded-full px-2 py-0.5"
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          color: '#00C9A7',
                          background: 'rgba(0,201,167,0.10)',
                          border: '0.5px solid rgba(0,201,167,0.25)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: 13.5, color: '#00C9A7', fontWeight: 400 }}>
                    {exp.company}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                    {exp.type}
                  </span>
                </div>

                <span
                  className="rounded-md px-2.5 py-1"
                  style={{
                    fontSize: 11.5,
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-bar-bg)',
                    border: '0.5px solid var(--color-bar-border)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5"
                    style={{
                      fontSize: 13.5,
                      fontWeight: 300,
                      color: 'var(--color-text-sub)',
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      className="mt-[9px] flex-shrink-0 rounded-full"
                      style={{ width: 4, height: 4, background: '#00C9A7', opacity: 0.6 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md px-2.5 py-0.5"
                    style={{
                      fontSize: 11.5,
                      color: 'var(--color-text-muted)',
                      background: 'var(--color-bar-bg)',
                      border: '0.5px solid var(--color-bar-border)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education sub-section */}
      <div className="mt-4">
        <div className="mb-6 flex items-center gap-4">
          <span
            className="font-semibold uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-sora)',
              fontSize: 11,
              color: '#00C9A7',
              letterSpacing: '0.12em',
            }}
          >
            Education
          </span>
          <div className="h-px flex-1" style={{ background: 'var(--color-card-border)' }} />
        </div>

        <div
          className="flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-start sm:justify-between"
          style={{
            border: '0.5px solid var(--color-card-border)',
            background: 'var(--color-card-bg)',
          }}
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className="font-semibold"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: 15,
                  color: 'var(--color-text-primary)',
                }}
              >
                {EDUCATION.degree}
              </h3>
              <span
                className="rounded-full px-2 py-0.5"
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: '#F4A261',
                  background: 'rgba(244,162,97,0.10)',
                  border: '0.5px solid rgba(244,162,97,0.25)',
                }}
              >
                {EDUCATION.grade}
              </span>
            </div>
            <span style={{ fontSize: 13.5, color: '#00C9A7', fontWeight: 400 }}>
              {EDUCATION.school}
            </span>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              {EDUCATION.location}
            </span>
          </div>

          <span
            className="rounded-md px-2.5 py-1"
            style={{
              fontSize: 11.5,
              color: 'var(--color-text-muted)',
              background: 'var(--color-bar-bg)',
              border: '0.5px solid var(--color-bar-border)',
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
            }}
          >
            {EDUCATION.period}
          </span>
        </div>
      </div>
    </section>
  )
}
