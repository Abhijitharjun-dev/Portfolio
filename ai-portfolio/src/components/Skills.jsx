import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getSkillCategories } from '../services/portfolioService'

export default function Skills() {
  const { data: categories } = usePortfolioData(getSkillCategories, [])
  if (!categories?.length) return null

  return (
    <Section
      id="skills"
      eyebrow="03 · tech_stack"
      title="Software Engineering Stack"
      subtitle="The tools I reach for to design, build and run reliable systems."
    >
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <article
            className="skill-card glass reveal-child"
            key={cat.id}
            style={{ '--stagger': `${i * 70}ms` }}
          >
            <h3 className="skill-card-title">
              <span className="skill-icon mono" aria-hidden="true">{cat.icon}</span>
              {cat.title}
            </h3>
            <ul className="chip-row">
              {cat.skills.map((s) => (
                <li className="chip" key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
