import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getAchievements } from '../services/portfolioService'

export default function Achievements() {
  const { data: items } = usePortfolioData(getAchievements, [])
  if (!items?.length) return null

  return (
    <Section
      id="achievements"
      eyebrow="08 · milestones"
      title="Achievements"
      subtitle="Moments that marked the journey."
    >
      <div className="achieve-grid">
        {items.map((item, i) => (
          <article
            className="achieve-card glass reveal-child"
            key={item.id}
            style={{ '--stagger': `${i * 80}ms` }}
          >
            <span className="achieve-icon" aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
