import Section from './Section'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { getLeetcodeStats } from '../services/portfolioService'

// SVG progress ring for the total-solved figure.
function SolvedRing({ solved, total }) {
  const R = 84
  const C = 2 * Math.PI * R
  const pct = Math.min(solved / 800, 1) // scale against an 800-problem goalpost
  return (
    <div className="lc-ring-wrap">
      <svg viewBox="0 0 200 200" className="lc-ring" role="img" aria-label={`${solved} problems solved`}>
        <circle cx="100" cy="100" r={R} className="lc-ring-track" />
        <circle
          cx="100" cy="100" r={R}
          className="lc-ring-progress"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - pct)}
        />
      </svg>
      <div className="lc-ring-center">
        <span className="lc-ring-number gradient-text">{solved}</span>
        <span className="lc-ring-caption mono">solved / {total}+</span>
      </div>
    </div>
  )
}

export default function LeetCode() {
  const { data: lc } = usePortfolioData(getLeetcodeStats)
  if (!lc) return null

  return (
    <Section
      id="leetcode"
      eyebrow="05 · problem_solving"
      title="LeetCode & Algorithms"
      subtitle="600+ problems of deliberate practice in data structures and algorithms."
    >
      <div className="lc-grid">
        <div className="lc-main glass reveal-child">
          <SolvedRing solved={lc.totalSolved} total={lc.totalQuestions} />
          <div className="lc-meta">
            <a href={lc.profileUrl} className="lc-handle mono" target="_blank" rel="noreferrer">
              @{lc.username} ↗
            </a>
            <div className="lc-quickstats">
              <div><span className="lc-qs-value">{lc.contestRating}</span><span className="lc-qs-label">Contest Rating</span></div>
              <div><span className="lc-qs-value">{lc.ranking}</span><span className="lc-qs-label">Global Ranking</span></div>
              <div><span className="lc-qs-value">{lc.streak}🔥</span><span className="lc-qs-label">Day Streak</span></div>
            </div>
          </div>
        </div>

        <div className="lc-side">
          <div className="lc-difficulty glass reveal-child">
            <h3 className="lc-block-title mono">// difficulty breakdown</h3>
            {lc.difficulty.map((d) => (
              <div className="lc-diff-row" key={d.label}>
                <span className="lc-diff-label">{d.label}</span>
                <div className="lc-diff-bar">
                  <div
                    className="lc-diff-fill"
                    style={{ '--w': `${(d.solved / d.total) * 100}%`, background: d.color }}
                  />
                </div>
                <span className="lc-diff-count mono">{d.solved}<span className="dim">/{d.total}</span></span>
              </div>
            ))}
            <div className="lc-badges">
              {lc.badges.map((b) => (
                <span className="chip chip--gold" key={b}>🏅 {b}</span>
              ))}
            </div>
          </div>

          <div className="lc-topics glass reveal-child">
            <h3 className="lc-block-title mono">// strongest topics</h3>
            <ul className="lc-topic-list">
              {lc.topics.map((t) => (
                <li key={t.name}>
                  <span>{t.name}</span>
                  <span className="mono lc-topic-count">{t.solved}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
