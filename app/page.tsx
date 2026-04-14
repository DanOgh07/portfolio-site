'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  // Persist preference & apply class to <html>
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setDarkMode(false)
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    if (next) {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />

      {/* ── HERO + METRICS ── */}
      <Hero />
      <Metrics />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
