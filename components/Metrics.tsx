'use client'

const metrics = [
  { value: '5+', label: 'Projects delivered' },
  { value: '3', label: 'Years experience' },
  { value: 'Power BI', label: 'Primary tool' },
  { value: 'Python', label: 'Core language' },
]

export default function Metrics() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 md:px-10">
      <div
        className="flex flex-col overflow-hidden rounded-xl sm:flex-row"
        style={{
          border: '0.5px solid var(--color-bar-border)',
          background: 'var(--color-bar-bg)',
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="flex-1 px-6 py-4 text-center sm:py-5"
            style={{
              borderRight:
                i < metrics.length - 1
                  ? '0.5px solid var(--color-bar-border)'
                  : 'none',
              borderBottom:
                i < metrics.length - 1
                  ? '0.5px solid var(--color-bar-border)'
                  : 'none',
            }}
          >
            <p
              className="mb-1 font-semibold leading-none"
              style={{
                fontFamily: 'var(--font-sora)',
                fontSize: 22,
                color: '#00C9A7',
              }}
            >
              {m.value}
            </p>
            <p
              className="font-normal uppercase tracking-wide"
              style={{
                fontSize: 10,
                color: 'var(--color-text-muted)',
                letterSpacing: '0.5px',
              }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
