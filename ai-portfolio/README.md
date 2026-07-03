# AI Portfolio — Abhijith G

A premium single-page portfolio for a Software Engineer × AI Engineer. Built with **React + Vite**, zero runtime dependencies beyond React, fully static data, API-ready architecture.

## Run it

```bash
npm install
npm run dev      # http://localhost:3100
npm run build    # production bundle in dist/
```

## Page structure & section hierarchy

| # | Section | Anchor | Purpose |
|---|---------|--------|---------|
| — | Navbar | — | Fixed glass nav, scroll-spy active link, mobile overlay menu |
| 0 | Hero | `#hero` | Animated neural-network canvas, typewriter roles, CTA + key stats |
| 1 | About | `#about` | Professional summary, highlights, `profile.json` terminal card |
| 2 | AI Engineering | `#ai-skills` | LangChain, LangGraph, MCP, RAG, Agents, LLM Engineering — cards with proficiency meters |
| 3 | Tech Stack | `#skills` | Software engineering skills grouped by category |
| 4 | Projects | `#projects` | Filterable project cards with impact statements |
| 5 | LeetCode | `#leetcode` | Progress ring (600+ solved), difficulty bars, badges, topic strengths |
| 6 | Experience | `#experience` | Glowing vertical timeline |
| 7 | Certifications | `#certifications` | Credential cards |
| 8 | Achievements | `#achievements` | Milestone cards |
| 9 | Education | `#education` | Degree + year-by-year learning journey |
| 10 | Contact | `#contact` | Email CTA + social links |
| — | Footer | — | Copyright, back-to-top |

## Component architecture

```
src/
├── App.jsx                  # Section composition
├── components/
│   ├── Navbar.jsx           # Scroll-spy, mobile hamburger
│   ├── Hero.jsx             # Typewriter + stats
│   ├── NeuralCanvas.jsx     # Canvas particle "neural net" (no libs)
│   ├── Section.jsx          # Shared wrapper: eyebrow/title/reveal
│   └── ...one component per section
├── data/
│   └── portfolioData.js     # ALL mock content lives here
├── services/
│   └── portfolioService.js  # Async data-access layer (swap for real APIs)
└── hooks/
    ├── usePortfolioData.js  # Generic {data, loading, error} fetch hook
    ├── useReveal.js         # IntersectionObserver scroll-reveal
    └── useTypewriter.js     # Hero role cycling
```

**Future API integration:** components call `portfolioService` getters through `usePortfolioData` and never import mock data directly. To go live, replace each getter body with a `fetch()` call returning the same shape — no component changes needed. A real LeetCode integration can hit `https://leetcode-stats-api.herokuapp.com/<user>` or the GraphQL API and map into the `leetcode` shape.

## Design system

- **Palette:** deep-space background `#050810`, cyan primary `#22d3ee`, violet secondary `#8b5cf6`, teal accent `#5eead4`; success/warning/danger for LeetCode difficulty colors. Signature cyan→violet gradient for emphasis.
- **Typography:** Space Grotesk (display), Inter (body), JetBrains Mono (code/labels).
- **Motion:** canvas particle field with mouse-linking, typewriter hero, IntersectionObserver reveals with per-card stagger, animated meters/rings/bars, glass-card hover lifts. All motion respects `prefers-reduced-motion`.
- **Responsive:** CSS grid collapses 3 → 2 → 1 columns at 1024px / 768px / 560px; mobile gets a full-screen nav overlay; fluid type via `clamp()`.

## Customising

Everything personal (name, links, projects, stats) is in `src/data/portfolioData.js` — edit that single file.
