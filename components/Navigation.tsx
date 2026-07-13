'use client'

import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-8 py-12 px-6">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`relative flex items-center gap-3 text-sm font-medium transition-all duration-300 group ${
              activeSection === id
                ? 'text-cyan-400'
                : 'text-slate-400 hover:text-cyan-400/70'
            }`}
          >
            {/* Indicator dot */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                  : 'bg-slate-600 group-hover:bg-cyan-400/30'
              }`}
            />

            {/* Label with chevron */}
            <span className="relative flex items-center gap-2">
              {label}
              <ChevronRight
                size={16}
                className={`transition-all duration-300 ${
                  activeSection === id ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'
                }`}
              />
            </span>

            {/* Glow effect for active */}
            {activeSection === id && (
              <div className="absolute inset-0 -left-3 rounded-lg bg-cyan-400/10 blur-xl" />
            )}
          </button>
        ))}
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-3 top-20 bottom-20 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0" />
    </nav>
  )
}
