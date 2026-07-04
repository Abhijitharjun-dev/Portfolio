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
    'Software Engineer with 2.5 years of experience designing and shipping full-stack products, now specialising in applied AI engineering.  building RAG pipelines, multi-agent workflows with LangGraph, and MCP-based tool integrations that turn language models into dependable products.',
  location: 'Kochi, Kerala, India',
  email: 'abhijitharjun882@gmail.com',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/abhijith-g',
    linkedin: 'https://www.linkedin.com/in/abhijith-g-9ab8a322b',
    leetcode: 'https://leetcode.com/u/Abhijith_Arjun/',
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
    'Clean, testable code with an API-first, scalable mindset',
  ],
}

export const aiSkills = [
  {
    id: 'langchain',
    name: 'LangChain',
    icon: '🦜',
    level: 90,
    blurb:
      'Building LLM applications end-to-end: chains, structured output, tool calling, memory, and LCEL pipelines',
    tags: ['LCEL', 'Tool Calling', 'Structured Output'],
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    icon: '🕸️',
    level: 85,
    blurb:
      'Designing stateful multi-agent systems as graphs —human-in-the-loop interrupts and checkpoints',
    tags: ['Multi-Agent', 'Memory', 'Human-in-the-Loop', 'Checkpointing'],
  },
  {
    id: 'mcp',
    name: 'MCP Servers',
    icon: '🔌',
    level: 82,
    blurb:
      'Authoring Model Context Protocol servers that expose internal tools, databases and APIs to LLM clients in a secure, standardised way.',
    tags: ['Protocol Design', 'Tool Servers', 'Resources'],
  },
  {
    id: 'rag',
    name: 'RAG Systems',
    icon: '📚',
    level: 88,
    blurb:
      'Retrieval-Augmented Generation pipelines: chunking strategies, hybrid search, re-ranking, embeddings and cited answers.',
    tags: ['Vector DBs', 'Hybrid Search', 'Re-ranking'],
  },
  {
    id: 'agents',
    name: 'AI Agent Development',
    icon: '🤖',
    level: 86,
    blurb:
      'Autonomous and semi-autonomous agents: planning, tool orchestration, self-correction loops, and cost/latency optimisation.',
    tags: ['Planning', 'Tool Orchestration', 'Guardrails'],
  }
]

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: '</>',
    skills: ['Java', 'Python', 'C++'],
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
    skills: ['Spring Boot', 'FastAPI','Django'],
  },
  {
    id: 'data',
    title: 'Databases & Vector Stores',
    icon: '🗄',
    skills: ['MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions']
  }
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
  totalSolved: 614,
  totalQuestions: 3977,
  rank: '126,983',
  badges: ['2 - 100 Days Badge', '2 - 50 Days Badge', 'Daily Activities Jun Badge','Daily Activities July Badge'],
  difficulty: [
    { label: 'Easy', solved: 216, total: 951, color: 'var(--success)' },
    { label: 'Medium', solved: 306, total: 2077, color: 'var(--warning)' },
    { label: 'Hard', solved: 92, total: 949, color: 'var(--danger)' },
  ],
  topics: [
    { name: 'Arrays', solved: 323 },
     { name: 'String', solved: 129 },
    { name: 'Dynamic Programming', solved: 109 },
    { name: 'Sorting', solved: 72 },
    { name: 'Hash Table', solved: 106 },
    { name: 'Two Pointers', solved: 64 },
    { name: 'Linked List', solved: 42 },
    { name: 'Stack', solved: 37 },
    { name: 'Graph', solved: 74 },
    { name: 'Backtracking', solved: 32 },
    { name: 'Divide and conquer', solved: 23 },
  ],
}

export const experience = [
  {
    id: 'geojit',
    role: 'Software Engineer',
    company: 'Geojit Financial Services',
    period: 'Oct 2024 — Present',
    location: 'Kochi, India',
    points: [
    
      'Devloped MCP servers connecting internal databases and APIs to LLM assistants.',
      'Deployed LLM integrateD application by guiding the First AI project of Geojit alone',
      'Created workflow in temporal for client onboarding and N8N for agent orchestration'
      
    ],
    stack: ['Springboot', 'FastAPI','Temporal','N8N Workflow', 'LangChain', 'LangGraph','MCPServer','Agent 2 Agent Protocol', 'Docker'],
  },
  {
    id: 'startup',
    role: 'Freelancer',
    company: 'Nintriva Technology Solutions',
    period: 'Jun 2024 — Oct 2024',
    location: 'Kochi,India',
    points: [
      'Developed REST APIs and React components for a product.',
      'Wrote integration tests raising backend coverage more than 80%.',
    ],
    stack: ['FastAPI', 'SpringBoot','Redis','MySQL'],
  },
  {
    id: 'startup',
    role: 'Associate Softeare Engineer',
    company: 'Innovature',
    period: 'Sep 2023 — Jun 2024',
    location: 'Kochi,India',
    points: [
      'Developed REST APIs and job Schedulars,Chat Application using websockets ',
      'Wrote integration tests raising for frontend (React) backend (SpringBoot) coverage more than 80%.',
    ],
    stack: ['FastAPI', 'SpringBoot','Django','Redis','MySQL'],
  },
]

export const certifications = [
  {
    id: 'google',
    name: 'Google Digital marketing',
    issuer: 'Digital marketing',
    year: '2023',
    icon: '☁️',
    url: '#',
  },
  {
    id: 'IBM',
    name: 'IBM: Building AI Agents',
    issuer: 'IBM',
    year: '2025',
    icon: '🦜',
    url: '#',
  }
]

export const achievements = [
  {
    id: 'jee',
    title: 'JEE-Main',
    detail: 'Cleared the examination of JEE main in 2018 and acheved class topper at the same time',
    icon: '🏆',
  },
  {
    id: 'best-performer',
    title: 'Best Performer',
    detail: 'Acheived the 5/5 rating in Appraisal meeing in Geojit',
    icon: '🌟',
  }
]

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'APJ Abdul Kalam Technological University',
    period: '2019 — 2023',
    detail: 'CGPA 9.12/10 · Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Web Dev elopment',
  },
]

// export const learningJourney = [
//   { year: '2021', label: 'Started competitive programming & web development' },
//   { year: '2023', label: 'Graduated · joined industry as a full-stack engineer' },
//   { year: '2024', label: 'Deep-dived into LLMs, embeddings and RAG systems' },
//   { year: '2025', label: 'Shipped production agentic systems with LangGraph & MCP' },
//   { year: '2026', label: 'Exploring multi-agent orchestration & AI evaluation at scale' },
// ]
