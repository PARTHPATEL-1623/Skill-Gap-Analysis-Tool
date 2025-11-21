
const SKILL_ALIASES = {
  "js": "JavaScript", "ts": "TypeScript", "react.js": "React", "reactjs": "React",
  "node": "Node.js", "nodejs": "Node.js", "py": "Python", "golang": "Go",
  "aws": "AWS", "c#": "C#", "csharp": "C#", "cpp": "C++", "c++": "C++",
  "ux": "User Experience", "ui": "User Interface", "k8s": "Kubernetes"
};

const ROLE_SKILL_DATABASE = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", "Git", "Jest", "Web Performance"],
  "Backend Developer": ["Java", "Spring Boot", "SQL", "APIs", "Git", "Docker", "System Design", "Microservices", "Redis"],
  "Full Stack Developer": ["JavaScript", "React", "Node.js", "SQL", "Git", "Docker", "AWS", "Express", "MongoDB"],
  "Data Analyst": ["Excel", "SQL", "Python", "Tableau", "Statistics", "PowerBI", "Data Cleaning"],
  "Data Scientist": ["Python", "Machine Learning", "SQL", "Pandas", "NumPy", "Statistics", "Deep Learning"],
  "DevOps Engineer": ["Linux", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Bash", "Monitoring"],
  "Mobile Developer": ["React Native", "iOS", "Android", "Swift", "Kotlin", "Firebase", "APIs"],
  "QA Engineer": ["Selenium", "Cypress", "JavaScript", "Python", "Manual Testing", "Automation", "SQL"],
  "Game Developer": ["C++", "C#", "Unity", "Unreal Engine", "Mathematics", "3D Graphics"],
  "Blockchain Developer": ["Solidity", "Ethereum", "Smart Contracts", "Cryptography", "JavaScript", "Web3.js"],
  "UI/UX Designer": ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "CSS", "HTML", "Accessibility", "Information Architecture"],
  "Product Manager": ["Agile", "Scrum", "Jira", "User Stories", "Roadmapping", "A/B Testing", "Data Analysis", "Stakeholder Management", "Communication"],
  "Cloud Engineer": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Linux", "Python", "Networking", "Security"],
  "Cyber Security Analyst": ["Network Security", "Python", "Linux", "Firewalls", "Penetration Testing", "SIEM", "Cryptography", "Risk Assessment"],
  "Site Reliability Engineer": ["Linux", "Python", "Go", "AWS", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Incident Response"]
};

const ROADMAP_DATABASE = {
  "Frontend Developer": [
    { phase: "Phase 1: Foundations", duration: "1-2 months", topics: ["HTML & CSS fundamentals", "JavaScript basics", "DOM manipulation", "Git version control", "Responsive design"], description: "Master the core languages of the web." },
    { phase: "Phase 2: Modern Framework", duration: "2-3 months", topics: ["React fundamentals", "Component architecture", "State management", "React hooks", "API integration"], description: "Build dynamic, interactive applications." },
    { phase: "Phase 3: Advanced & Projects", duration: "2 months", topics: ["Testing with Jest", "Performance optimization", "Build real projects", "Portfolio website", "Deploy applications"], description: "Polish your skills for production environments." }
  ],
  "Backend Developer": [
     { phase: "Phase 1: Core Logic", duration: "2 months", topics: ["Language syntax (Java/Python)", "OOP Principles", "Data Structures", "Git"], description: "Strong programming foundations are key." },
     { phase: "Phase 2: Server & DB", duration: "2-3 months", topics: ["Relational Databases (SQL)", "RESTful APIs", "Authentication", "Web Frameworks"], description: "Learn how to handle data and requests." },
     { phase: "Phase 3: Scale", duration: "2 months", topics: ["Docker & Containers", "System Design basics", "Caching", "Cloud Basics"], description: "Prepare for enterprise-scale applications." }
  ],
  "UI/UX Designer": [
    { phase: "Phase 1: Design Basics", duration: "1-2 months", topics: ["Design Theory", "Typography & Color", "Figma Basics", "User Empathy"], description: "Learn the visual language of design." },
    { phase: "Phase 2: UX Process", duration: "2-3 months", topics: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture"], description: "Understand how to solve user problems." },
    { phase: "Phase 3: Professional Portfolio", duration: "2 months", topics: ["High-fidelity Mockups", "Design Systems", "Case Studies", "Basic HTML/CSS"], description: "Build a portfolio that gets you hired." }
  ],
  "Product Manager": [
    { phase: "Phase 1: Product Fundamentals", duration: "1-2 months", topics: ["Product Lifecycle", "Agile/Scrum", "User Stories", "Market Research"], description: "Understand how products are built." },
    { phase: "Phase 2: Strategy & Data", duration: "2 months", topics: ["Roadmapping", "KPIs & Metrics", "A/B Testing", "Data Analysis"], description: "Learn to make data-driven decisions." },
    { phase: "Phase 3: Leadership", duration: "2 months", topics: ["Stakeholder Management", "Product Vision", "Launch Strategy", "Negotiation"], description: "Lead teams without authority." }
  ],
  "Cloud Engineer": [
    { phase: "Phase 1: Systems Basics", duration: "2 months", topics: ["Linux Command Line", "Networking (DNS, HTTP, TCP/IP)", "Python/Bash Scripting"], description: "Master the underlying operating systems." },
    { phase: "Phase 2: Cloud Provider", duration: "2-3 months", topics: ["AWS/Azure Core Services", "IAM & Security", "Virtual Machines", "Storage S3/Blob"], description: "Get certified in a major cloud provider." },
    { phase: "Phase 3: Infrastructure as Code", duration: "2-3 months", topics: ["Terraform", "Docker", "Kubernetes", "CI/CD Pipelines"], description: "Automate infrastructure deployment." }
  ],
  "Cyber Security Analyst": [
    { phase: "Phase 1: Networking & OS", duration: "2 months", topics: ["Network Protocols", "Linux Administration", "Windows Administration", "Bash"], description: "Understand what you are protecting." },
    { phase: "Phase 2: Security Core", duration: "3 months", topics: ["Vulnerability Assessment", "Firewalls", "SIEM Tools", "Cryptography Basics"], description: "Learn how to detect and prevent attacks." },
    { phase: "Phase 3: Advanced & Compliance", duration: "2 months", topics: ["Penetration Testing", "Incident Response", "Compliance (GDPR/HIPAA)", "Python for Security"], description: "Specialize in offensive or defensive security." }
  ],
  "Site Reliability Engineer": [
    { phase: "Phase 1: Dev & Ops Intersection", duration: "2 months", topics: ["Coding (Python/Go)", "Linux Internals", "Git", "CI/CD"], description: "Bridge the gap between code and infrastructure." },
    { phase: "Phase 2: Containerization", duration: "2 months", topics: ["Docker", "Kubernetes Administration", "Helm", "Container Security"], description: "Master modern deployment orchestration." },
    { phase: "Phase 3: Observability", duration: "2 months", topics: ["Prometheus", "Grafana", "SLOs/SLIs", "Incident Management"], description: "Ensure reliability and rapid recovery." }
  ]
};

module.exports = { SKILL_ALIASES, ROLE_SKILL_DATABASE, ROADMAP_DATABASE };
