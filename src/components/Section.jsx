import { useReveal } from '../hooks/useReveal'

// Shared section wrapper: consistent spacing, eyebrow label,
// gradient-accented heading and scroll-reveal behaviour.
export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <div className="container">
        <header className="section-head reveal">
          {eyebrow && <span className="eyebrow mono">{eyebrow}</span>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
