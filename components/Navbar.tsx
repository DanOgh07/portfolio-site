'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'About', 'Portfolio', 'Skills', 'Experience', 'Contact']

export default function Navbar({
  darkMode,
  toggleDark,
}: {
  darkMode: boolean
  toggleDark: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all"
        style={{
          height: 60,
          borderBottom: '0.5px solid var(--color-nav-border)',
          background: scrolled
            ? 'var(--color-nav-bg-scrolled)'
            : 'var(--color-nav-bg)',
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Logo */}
        <span
          className="font-semibold"
          style={{
            fontFamily: 'var(--font-sora)',
            fontSize: 17,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.3px',
          }}
        >
          D.<em className="not-italic" style={{ color: '#00C9A7' }}>Oghie</em>
        </span>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition-colors"
                style={{ fontSize: 13, color: 'var(--color-nav-link)' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = '#00C9A7')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    'var(--color-nav-link)')
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="flex items-center justify-center rounded-lg transition-colors"
            style={{
              width: 32,
              height: 32,
              border: '0.5px solid rgba(0,201,167,0.25)',
              background: 'rgba(0,201,167,0.07)',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                'rgba(0,201,167,0.16)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                'rgba(0,201,167,0.07)')
            }
          >
            {darkMode ? (
              /* Moon icon */
              <svg width={14} height={14} viewBox="0 0 24 24" fill="#00C9A7">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              /* Sun icon */
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F6E56"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-[5px] md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block rounded"
                style={{
                  width: 20,
                  height: 1.5,
                  background: 'var(--color-nav-link)',
                  transition: 'background 0.2s',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 top-[60px] z-40 flex flex-col gap-5 px-6 py-6 md:hidden"
          style={{
            background: 'var(--color-drawer-bg)',
            borderBottom: '0.5px solid var(--color-nav-border)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={handleLink}
              className="transition-colors"
              style={{ fontSize: 15, color: 'var(--color-nav-link)' }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
