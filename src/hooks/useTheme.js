import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

// Owns the data-theme attribute on <html>. index.html sets it pre-paint
// (to avoid a flash of wrong theme); this hook keeps it in sync and persists
// the user's explicit choice.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // Follow OS changes only while the user hasn't made an explicit choice
  // in this session (i.e. nothing stored before we mounted).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) setTheme(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
