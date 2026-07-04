import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getProfile } from '../services/portfolioService'

export default function About() {
  const { data: profile } = usePortfolioData(getProfile)
  if (!profile) return null

  return (
    <Section
      id="about"
      eyebrow="01 · whoami"
      title="Professional Summary"
      subtitle="Software engineering rigour, applied to the AI frontier."
    >
      <div className="about-grid">
        <div className="about-text reveal">
          <p>{profile.summary}</p>
          <ul className="about-highlights">
            {profile.highlights.map((item) => (
              <li key={item}>
                <span className="tick">▸</span> {item}
              </li>
            ))}
          </ul>
          <p className="about-location mono">📍 {profile.location}</p>
        </div>

        <aside className="about-card glass reveal" aria-label="Engineer profile snapshot">
          <div className="terminal-bar">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="terminal-title mono">profile.json</span>
          </div>
          <pre className="terminal-body mono">{`{
  "name": "${profile.name}",
  "roles": [
    "Software Engineer",
    "AI Engineer"
  ],
  "experience": "3+ years",
  "focus": [
    "Agentic AI", "RAG",
    "Full-Stack Systems"
  ],
  "status": "open_to_opportunities"
}`}</pre>
        </aside>
      </div>
    </Section>
  )
}
