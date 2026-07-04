import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getEducation } from '../services/portfolioService'

export default function Education() {
  const { data } = usePortfolioData(getEducation)
  if (!data) return null
  const { education, journey = [] } = data

  return (
    <Section
      id="education"
      eyebrow="09 · foundations"
      title="Education & Learning Journey"
      subtitle="Formal education, plus the self-driven path into AI engineering."
    >
      <div className="edu-grid">
        <div className="edu-formal reveal-child">
          {education.map((edu) => (
            <article className="edu-card glass" key={edu.id}>
              <span className="edu-icon" aria-hidden="true">🎓</span>
              <h3>{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-period mono">{edu.period}</p>
              <p className="edu-detail">{edu.detail}</p>
            </article>
          ))}
        </div>

        {journey.length > 0 && (
          <ol className="journey reveal-child" aria-label="Learning journey timeline">
            {journey.map((step) => (
              <li className="journey-step" key={step.year}>
                <span className="journey-year mono gradient-text">{step.year}</span>
                <span className="journey-label">{step.label}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Section>
  )
}
