import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getAiSkills } from '../services/portfolioService'

export default function AISkills() {
  const { data: skills } = usePortfolioData(getAiSkills, [])
  if (!skills?.length) return null

  return (
    <Section
      id="ai-skills"
      eyebrow="02 · ai_engineering"
      title="AI Engineering Arsenal"
      subtitle="Production LLM systems — not notebooks. Agents, retrieval and tooling that ship."
    >
      <div className="ai-grid">
        {skills.map((skill, i) => (
          <article
            className="ai-card glass reveal-child"
            key={skill.id}
            style={{ '--stagger': `${i * 80}ms` }}
          >
            <div className="ai-card-head">
              <span className="ai-icon" aria-hidden="true">{skill.icon}</span>
              <h3>{skill.name}</h3>
            </div>
            <p className="ai-blurb">{skill.blurb}</p>
            <div className="meter" role="img" aria-label={`${skill.name} proficiency ${skill.level}%`}>
              <div className="meter-fill" style={{ '--level': `${skill.level}%` }} />
            </div>
            <ul className="tag-row">
              {skill.tags.map((tag) => (
                <li className="tag mono" key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
