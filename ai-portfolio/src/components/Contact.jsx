import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getProfile } from '../services/portfolioService'

export default function Contact() {
  const { data: profile } = usePortfolioData(getProfile)
  if (!profile) return null

  const socials = [
    { key: 'github', label: 'GitHub', icon: '⌥', url: profile.social.github },
    { key: 'linkedin', label: 'LinkedIn', icon: 'in', url: profile.social.linkedin },
    { key: 'leetcode', label: 'LeetCode', icon: '⚡', url: profile.social.leetcode }
  ]

  return (
    <Section
      id="contact"
      eyebrow="10 · handshake"
      title="Let's Build Something Intelligent"
      subtitle="Open to Software & AI Engineering roles, collaborations and interesting problems."
    >
      <div className="contact-wrap glass reveal">
        <a href={`mailto:${profile.email}`} className="contact-email gradient-text mono">
          {profile.email}
        </a>
        <p className="contact-note">
          Usually responds within a day. Prefer async? Any of these work too:
        </p>
        <div className="social-row">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.url}
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              <span className="social-icon mono" aria-hidden="true">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
