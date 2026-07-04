import { useEffect, useRef } from 'react'

// Adds .revealed to the element when it scrolls into view.
// Pair with the .reveal / .reveal-* CSS classes for entrance animations.
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )
    // Observe the container itself plus any staggered children.
    observer.observe(el)
    el.querySelectorAll('.reveal-child').forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])

  return ref
}
