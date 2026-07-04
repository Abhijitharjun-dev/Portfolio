import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.3 4.3l1.7 1.7M18 18l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.3 19.7L6 18M18 6l1.7-1.7" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'ai-skills', label: 'AI Engineering' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'leetcode', label: 'LeetCode' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="brand mono" onClick={close}>
          <span className="brand-bracket">&lt;</span>abhijith.g<span className="brand-bracket"> /&gt;</span>
        </a>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span key={theme} className="theme-toggle-icon">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-sm btn-primary nav-cta" onClick={close}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
