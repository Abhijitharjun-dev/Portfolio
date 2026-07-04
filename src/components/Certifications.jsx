import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getCertifications } from '../services/portfolioService'

export default function Certifications() {
  const { data: certs } = usePortfolioData(getCertifications, [])
  if (!certs?.length) return null

  return (
    <Section
      id="certifications"
      eyebrow="07 · credentials"
      title="Certifications"
      subtitle="Formal validation across cloud, frontend and applied AI."
    >
      <div className="cert-grid">
        {certs.map((cert, i) => (
          <a
            href={cert.url}
            className="cert-card glass reveal-child"
            key={cert.id}
            style={{ '--stagger': `${i * 80}ms` }}
          >
            <span className="cert-icon" aria-hidden="true">{cert.icon}</span>
            <div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
            <span className="cert-year mono">{cert.year}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
