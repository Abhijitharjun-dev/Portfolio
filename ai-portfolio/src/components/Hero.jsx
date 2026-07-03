import { profile } from '../data/portfolioData'
import { useTypewriter } from '../hooks/useTypewriter'
import NeuralCanvas from './NeuralCanvas'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="hero" className="hero">
      <NeuralCanvas />
      <div className="hero-glow hero-glow--cyan" aria-hidden="true" />
      <div className="hero-glow hero-glow--violet" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-hello mono">
          <span className="pulse-dot" /> Hello, world. I&apos;m
        </p>
        <h1 className="hero-name">
          {profile.firstName} <span className="gradient-text">G</span>
        </h1>
        <div className="hero-role mono" aria-label={profile.roles.join(', ')}>
          <span className="hero-role-prefix">&gt;</span> {typed}
          <span className="cursor" aria-hidden="true">▊</span>
        </div>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          <a href={profile.resumeUrl} className="btn btn-ghost btn-icon" title="Download resume">
            ↓ Resume
          </a>
        </div>

        <dl className="hero-stats">
          {profile.heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <dt className="hero-stat-value gradient-text">{stat.value}</dt>
              <dd className="hero-stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <span className="scroll-hint-wheel" />
      </a>
    </section>
  )
}
