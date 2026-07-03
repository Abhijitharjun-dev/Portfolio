import { useMemo, useState } from 'react'
import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getProjects } from '../services/portfolioService'

export default function Projects() {
  const { data: projects } = usePortfolioData(getProjects, [])
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set((projects || []).map((p) => p.category))],
    [projects]
  )
  const visible = useMemo(
    () => (projects || []).filter((p) => filter === 'All' || p.category === filter),
    [projects, filter]
  )

  if (!projects?.length) return null

  return (
    <Section
      id="projects"
      eyebrow="04 · deployments"
      title="Featured Projects"
      subtitle="Selected work spanning agentic AI, retrieval systems and full-stack platforms."
    >
      <div className="filter-row reveal" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            className={`filter-btn mono ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project, i) => (
          <article
            className={`project-card glass reveal-child ${project.featured ? 'project-card--featured' : ''}`}
            key={project.id}
            style={{ '--stagger': `${i * 80}ms` }}
          >
            <div className="project-top">
              <span className="project-category mono">{project.category}</span>
              {project.featured && <span className="badge-featured mono">★ Featured</span>}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-impact">
              <span className="impact-label mono">IMPACT</span> {project.impact}
            </p>
            <ul className="tag-row">
              {project.stack.map((tech) => (
                <li className="tag mono" key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.links.demo} className="project-link mono">Live Demo ↗</a>
              <a href={project.links.github} className="project-link mono">GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
