import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getExperience } from '../services/portfolioService'

export default function Experience() {
  const { data: jobs } = usePortfolioData(getExperience, [])
  if (!jobs?.length) return null

  return (
    <Section
      id="experience"
      eyebrow="06 · career_log"
      title="Work Experience"
      subtitle="Where I've built, shipped and learned."
    >
      <ol className="timeline">
        {jobs.map((job, i) => (
          <li className="timeline-item reveal-child" key={job.id} style={{ '--stagger': `${i * 120}ms` }}>
            <div className="timeline-marker" aria-hidden="true" />
            <article className="timeline-card glass">
              <header className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company} · {job.location}</p>
                </div>
                <span className="timeline-period mono">{job.period}</span>
              </header>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}><span className="tick">▸</span> {point}</li>
                ))}
              </ul>
              <ul className="tag-row">
                {job.stack.map((tech) => (
                  <li className="tag mono" key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
