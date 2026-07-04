// ---------------------------------------------------------------------------
// Static/mock data layer.
// Every section of the site reads from here (via src/services/portfolioService.js),
// so swapping this file for real API responses later requires zero UI changes.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Abhijith G',
  firstName: 'Abhijith',
  roles: ['Software Engineer', 'AI Engineer', 'Agentic AI Developer', 'Full-Stack Developer'],
  tagline: 'I build intelligent software — from production-grade web platforms to autonomous AI agents.',
  summary:
    'Software Engineer with 3 years of experience designing and shipping full-stack products, now specialising in applied AI engineering. I work at the intersection of robust software architecture and modern LLM systems — building RAG pipelines, multi-agent workflows with LangGraph, and MCP-based tool integrations that turn language models into dependable products.',
  location: 'Kochi, Kerala, India',
  email: 'abhijith.g.dev@gmail.com',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/Abhijitharjun-dev',
    linkedin: 'https://www.linkedin.com/in/abhijith-g-9ab8a322b',
    leetcode: 'https://leetcode.com/abhijith-g'
  },
  heroStats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Shipped', value: '15+' },
    { label: 'LeetCode Solved', value: '600+' },
    { label: 'AI Agents Built', value: '10+' },
  ],
  highlights: [
    'End-to-end ownership: architecture → development → deployment → monitoring',
    'Production LLM systems: RAG, agentic workflows, evaluation & guardrails',
    'Strong CS fundamentals — 600+ LeetCode problems across DSA topics',
    'Clean, testable code with an API-first, Design pattern-driven approach',
  ],
}

export const aiSkills = [
  {
    id: 'langchain',
    name: 'LangChain',
    icon: '🦜',
    level: 90,
    blurb:
      'Building LLM applications end-to-end: chains, structured output, tool calling, memory, and LCEL pipelines integrated with production backends.',
    tags: ['LCEL', 'Tool Calling', 'Structured Output', 'Memory','RAG'],
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    icon: '🕸️',
    level: 85,
    blurb:
      'Designing stateful multi-agent systems as graphs — supervisor/worker patterns, human-in-the-loop interrupts, and checkpoints',
    tags: ['Multi-Agent', 'State Machines', 'Human-in-the-Loop', 'Checkpointing'],
  },
  {
    id: 'mcp',
    name: 'MCP Servers',
    icon: '🔌',
    level: 82,
    blurb:
      'Developed a Model Context Protocol servers that expose internal tools, databases and APIs to LLM clients in a secure and standardised way.',
    tags: ['Protocol Design', 'Tool Servers', 'Resources'],
  },
  {
    id: 'rag',
    name: 'RAG Systems',
    icon: '📚',
    level: 88,
    blurb:
      'Retrieval-Augmented Generation pipelines: chunking strategies, hybrid search, re-ranking, embeddings and evaluation for grounded, cited answers.',
    tags: ['Vector DBs', 'Hybrid Search', 'Re-ranking', 'Evaluation'],
  },
  {
    id: 'agents',
    name: 'AI Agent Development',
    icon: '🤖',
    level: 86,
    blurb:
      'Autonomous and semi-autonomous agents: planning, tool orchestration, self-correction loops, and cost/latency optimisation.',
    tags: ['Planning', 'Tool Orchestration', 'Guardrails'],
  },
  {
    id: 'llmops',
    name: 'LLM Engineering',
    icon: '⚙️',
    level: 80,
    blurb:
      'Prompt engineering, model routing (LiteLLM), token/cost budgeting, caching and observability for LLM-powered features.',
    tags: ['Prompting', 'LiteLLM', 'Memory management'],
  },
]

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: '</>',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '◈',
    skills: ['React', 'Redux Toolkit', 'Next.js'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⛁',
    skills: ['Node.js', 'FastAPI', 'Express', 'Spring Boot', 'REST APIs', 'WebSockets'],
  },
  {
    id: 'data',
    title: 'Databases & Vector Stores',
    icon: '🗄',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'ChromaDB', 'pgvector'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    id: 'practices',
    title: 'Practices',
    icon: '✓',
    skills: ['System Design', 'Microservices', 'TDD', 'Agile / Scrum', 'Code Review', 'CI/CD'],
  },
]

export const projects = [
  {
    id: 'crms-ai',
    title: 'Enterprise CRM with AI Copilot',
    category: 'AI × Full-Stack',
    featured: true,
    description:
      'A customer relationship management platform with an embedded AI copilot. The copilot answers questions over CRM data using a RAG pipeline, drafts client communications, and executes actions (create lead, schedule follow-up) through a tool-calling agent with human approval gates.',
    impact: 'Cut average lead-response time by 40% and automated ~60% of routine data-entry actions.',
    stack: ['React', 'FastAPI', 'LangChain', 'PostgreSQL', 'pgvector', 'Docker'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 'multi-agent-research',
    title: 'Multi-Agent Research Assistant',
    category: 'Agentic AI',
    featured: true,
    description:
      'A LangGraph-powered research system where a supervisor agent decomposes questions and routes them to specialised worker agents (web search, document analysis, code execution). Results are adversarially verified by a critic agent before synthesis into a cited report.',
    impact: 'Produces analyst-grade research reports in minutes with verifiable citations.',
    stack: ['LangGraph', 'LangChain', 'Python', 'Redis', 'Streamlit'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 'mcp-toolkit',
    title: 'MCP Server Toolkit',
    category: 'Developer Tools',
    featured: true,
    description:
      'A collection of production-ready Model Context Protocol servers exposing internal APIs, SQL databases and document stores to Claude and other MCP clients — with auth, rate limiting, and structured audit logging built in.',
    impact: 'Adopted internally to connect 6+ systems to LLM assistants without custom glue code.',
    stack: ['TypeScript', 'MCP SDK', 'Node.js', 'PostgreSQL', 'Zod'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 'docs-rag',
    title: 'DocuMind — Document Intelligence',
    category: 'RAG',
    featured: false,
    description:
      'Chat-with-your-documents platform supporting PDFs, spreadsheets and scanned files. Hybrid retrieval (BM25 + dense embeddings) with cross-encoder re-ranking, source-grounded answers and per-answer confidence scoring.',
    impact: '92% answer-grounding accuracy on internal evaluation set of 500 questions.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'React'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 'trade-analytics',
    title: 'Real-Time Trading Analytics Dashboard',
    category: 'Full-Stack',
    featured: false,
    description:
      'Low-latency dashboard streaming live market data over WebSockets with configurable alerting, portfolio views and historical charting backed by a time-series store.',
    impact: 'Serves 2,000+ concurrent users with sub-200ms update latency.',
    stack: ['React', 'Node.js', 'WebSockets', 'Redis', 'TimescaleDB'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 'code-reviewer',
    title: 'AI Code Review Agent',
    category: 'Agentic AI',
    featured: false,
    description:
      'A GitHub-integrated agent that reviews pull requests: static analysis triage, LLM-based bug detection with adversarial self-verification to suppress false positives, and inline suggested fixes.',
    impact: 'Caught 30+ real defects pre-merge in its first quarter of use.',
    stack: ['Python', 'LangGraph', 'GitHub API', 'Docker'],
    links: { demo: '#', github: '#' },
  },
]

export const leetcode = {
  username: 'abhijith-g',
  profileUrl: 'https://leetcode.com/u/Abhijith_Arjun/',
  totalSolved: 612,
  totalQuestions: 3300,
  ranking: 'Top 5%',
  contestRating: 1742,
  streak: 120,
  badges: ['100 Days Badge', 'Dynamic Programming I', 'SQL 50', 'Knight'],
  difficulty: [
    { label: 'Easy', solved: 218, total: 830, color: 'var(--success)' },
    { label: 'Medium', solved: 322, total: 1740, color: 'var(--warning)' },
    { label: 'Hard', solved: 72, total: 730, color: 'var(--danger)' },
  ],
  topics: [
    { name: 'Arrays & Hashing', solved: 130 },
    { name: 'Dynamic Programming', solved: 85 },
    { name: 'Trees & Graphs', solved: 98 },
    { name: 'Two Pointers / Sliding Window', solved: 74 },
    { name: 'Binary Search', solved: 52 },
    { name: 'Heaps & Greedy', solved: 61 },
  ],
}

export const experience = [
  {
    id: 'geojit',
    role: 'Software Engineer',
    company: 'Geojit Financial Services',
    period: 'Jun 2023 — Present',
    location: 'Kochi, India',
    points: [
      'Built and maintain a CRM platform used by 500+ relationship managers, owning features from React frontend to FastAPI/PostgreSQL backend.',
      'Introduced an AI copilot into the CRM: RAG over client data, LLM-drafted communications and agentic task automation with approval workflows.',
      'Designed MCP servers connecting internal databases and APIs to LLM assistants, standardising tool access across teams.',
      'Improved API p95 latency by 45% through query optimisation, Redis caching and connection pooling.',
    ],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'LangChain', 'LangGraph', 'Docker'],
  },
  {
    id: 'startup',
    role: 'Software Engineer Intern → Junior Developer',
    company: 'TechNova Solutions',
    period: 'Jan 2023 — May 2023',
    location: 'Remote',
    points: [
      'Developed REST APIs and React components for a SaaS analytics product.',
      'Wrote integration tests raising backend coverage from 40% to 75%.',
      'Automated deployment with GitHub Actions and Docker, cutting release time from hours to minutes.',
    ],
    stack: ['Node.js', 'React', 'MongoDB', 'GitHub Actions'],
  },
]

export const certifications = [
  {
    id: 'aws-dev',
    name: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    year: '2025',
    icon: '☁️',
    url: '#',
  },
  {
    id: 'langchain-cert',
    name: 'LangChain & LangGraph: Building AI Agents',
    issuer: 'LangChain Academy',
    year: '2025',
    icon: '🦜',
    url: '#',
  },
  {
    id: 'deeplearning-rag',
    name: 'Building & Evaluating Advanced RAG',
    issuer: 'DeepLearning.AI',
    year: '2024',
    icon: '📚',
    url: '#',
  },
  {
    id: 'meta-react',
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    year: '2023',
    icon: '⚛️',
    url: '#',
  },
]

export const achievements = [
  {
    id: 'hackathon',
    title: 'Winner — Internal AI Hackathon 2025',
    detail: 'Built a multi-agent compliance assistant in 48 hours; now being productionised.',
    icon: '🏆',
  },
  {
    id: 'leetcode-600',
    title: '600+ LeetCode Problems Solved',
    detail: 'Knight badge, 1742 contest rating, 120-day solving streak.',
    icon: '⚔️',
  },
  {
    id: 'spot-award',
    title: 'Spot Award for Engineering Excellence',
    detail: 'Recognised for the CRM AI copilot rollout and its measurable business impact.',
    icon: '🌟',
  },
  {
    id: 'oss',
    title: 'Open Source Contributor',
    detail: 'Contributions to LangChain community integrations and MCP server examples.',
    icon: '🌱',
  },
]

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'APJ Abdul Kalam Technological University',
    period: '2019 — 2023',
    detail: 'CGPA 8.7/10 · Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Machine Learning.',
  },
]

export const learningJourney = [
  { year: '2021', label: 'Started competitive programming & web development' },
  { year: '2023', label: 'Graduated · joined industry as a full-stack engineer' },
  { year: '2024', label: 'Deep-dived into LLMs, embeddings and RAG systems' },
  { year: '2025', label: 'Shipped production agentic systems with LangGraph & MCP' },
  { year: '2026', label: 'Exploring multi-agent orchestration & AI evaluation at scale' },
]
