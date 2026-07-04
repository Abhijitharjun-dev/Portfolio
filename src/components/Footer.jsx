import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="mono">
          © {new Date().getFullYear()} {profile.name} · Designed & built with React
        </p>
        <a href="#hero" className="back-to-top mono" aria-label="Back to top">↑ top</a>
      </div>
    </footer>
  )
}
