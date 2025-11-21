import { SkillGapRequest, SkillGapResponse, RoadmapResponse } from '../types';

// --- Simulated Database ---

const SKILL_ALIASES: Record<string, string> = {
  "js": "JavaScript", "ts": "TypeScript", "react.js": "React", "reactjs": "React",
  "node": "Node.js", "nodejs": "Node.js", "py": "Python", "golang": "Go",
  "aws": "AWS", "c#": "C#", "csharp": "C#", "cpp": "C++", "c++": "C++"
};

const ROLE_SKILL_DATABASE: Record<string, string[]> = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", "Git", "Jest", "Web Performance"],
  "Backend Developer": ["Java", "Spring Boot", "SQL", "APIs", "Git", "Docker", "System Design", "Microservices", "Redis"],
  "Full Stack Developer": ["JavaScript", "React", "Node.js", "SQL", "Git", "Docker", "AWS", "Express", "MongoDB"],
  "Data Analyst": ["Excel", "SQL", "Python", "Tableau", "Statistics", "PowerBI", "Data Cleaning"],
  "Data Scientist": ["Python", "Machine Learning", "SQL", "Pandas", "NumPy", "Statistics", "Deep Learning"],
  "DevOps Engineer": ["Linux", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Bash", "Monitoring"],
  "Mobile Developer": ["React Native", "iOS", "Android", "Swift", "Kotlin", "Firebase", "APIs"],
  "QA Engineer": ["Selenium", "Cypress", "JavaScript", "Python", "Manual Testing", "Automation", "SQL"],
  "Game Developer": ["C++", "C#", "Unity", "Unreal Engine", "Mathematics", "3D Graphics"],
  "Blockchain Developer": ["Solidity", "Ethereum", "Smart Contracts", "Cryptography", "JavaScript", "Web3.js"]
};

const ROADMAP_DATABASE: Record<string, any[]> = {
  "Frontend Developer": [
    { phase: "Phase 1: Foundations", duration: "1-2 months", topics: ["HTML & CSS fundamentals", "JavaScript basics", "DOM manipulation", "Git version control", "Responsive design"], description: "Master the core languages of the web." },
    { phase: "Phase 2: Modern Framework", duration: "2-3 months", topics: ["React fundamentals", "Component architecture", "State management", "React hooks", "API integration"], description: "Build dynamic, interactive applications." },
    { phase: "Phase 3: Advanced & Projects", duration: "2 months", topics: ["Testing with Jest", "Performance optimization", "Build real projects", "Portfolio website", "Deploy applications"], description: "Polish your skills for production environments." }
  ],
  "Backend Developer": [
     { phase: "Phase 1: Core Logic", duration: "2 months", topics: ["Language syntax (Java/Python)", "OOP Principles", "Data Structures", "Git"], description: "Strong programming foundations are key." },
     { phase: "Phase 2: Server & DB", duration: "2-3 months", topics: ["Relational Databases (SQL)", "RESTful APIs", "Authentication", "Web Frameworks"], description: "Learn how to handle data and requests." },
     { phase: "Phase 3: Scale", duration: "2 months", topics: ["Docker & Containers", "System Design basics", "Caching", "Cloud Basics"], description: "Prepare for enterprise-scale applications." }
  ]
};

// Generic Roadmap Generator
const getGenericRoadmap = (role: string) => [
    { phase: `Phase 1: ${role} Basics`, duration: "1-2 months", topics: ["Core Language Syntax", "Basic Tools", "Environment Setup", "Version Control"], description: "Start with the absolute fundamentals." },
    { phase: "Phase 2: Intermediate Skills", duration: "2 months", topics: ["Frameworks", "Database Interaction", "API usage", "Debugging"], description: "Start building small, functional applications." },
    { phase: "Phase 3: Advanced Concepts", duration: "2 months", topics: ["Performance", "Security", "Deployment", "Best Practices"], description: "Refine your code for professional standards." }
];

const normalizeSkill = (skill: string): string => {
  const lower = skill.trim().toLowerCase();
  return SKILL_ALIASES[lower] ? SKILL_ALIASES[lower] : skill.trim(); // Keep original case if not alias, but trim
};

// Helper to capitalize
const formatSkill = (skill: string) => {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
}

export const analyzeSkillGap = async (data: SkillGapRequest): Promise<SkillGapResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1200)); // Realistic delay

  // Find Role
  let targetKey = Object.keys(ROLE_SKILL_DATABASE).find(r => r.toLowerCase() === data.role.toLowerCase());
  
  // Fallback if role not found exactly
  if (!targetKey) {
      // Simple fuzzy match
      targetKey = Object.keys(ROLE_SKILL_DATABASE).find(r => data.role.toLowerCase().includes(r.toLowerCase()));
  }

  // If still no role, use a generic set based on commonly requested roles or default to 'Frontend' logic (simulation)
  // In a real app, we'd query an LLM here.
  const requiredSkills = targetKey ? ROLE_SKILL_DATABASE[targetKey] : ["HTML", "JavaScript", "Git", "Communication", "Problem Solving"];
  
  const userSkills = data.skills.map(normalizeSkill).map(s => s.toLowerCase());
  const requiredNormalized = requiredSkills.map(normalizeSkill);

  const matchedSkills = requiredSkills.filter((req, idx) => {
      const reqNorm = requiredNormalized[idx].toLowerCase();
      return userSkills.includes(reqNorm);
  });

  const missingSkills = requiredSkills.filter((req, idx) => {
       const reqNorm = requiredNormalized[idx].toLowerCase();
       return !userSkills.includes(reqNorm);
  });

  const matchPercentage = Math.round((matchedSkills.length / requiredSkills.length) * 100);

  // Recommendations
  const recommendations = [];
  if (matchPercentage === 100) {
      recommendations.push("You are fully qualified! Focus on building unique projects.");
      recommendations.push("Start applying to Senior or Lead positions.");
  } else if (matchPercentage > 50) {
      recommendations.push(`Focus on ${missingSkills[0]} and ${missingSkills[1] || 'advanced concepts'}.`);
      recommendations.push("You are ready for junior roles, but keep learning.");
  } else {
      recommendations.push(`Start with foundational topics: ${missingSkills.slice(0, 2).join(', ')}`);
      recommendations.push("Build small projects to demonstrate what you learn.");
      recommendations.push("Join online communities and participate in code reviews");
      recommendations.push(`Focus on ${missingSkills.length} missing core skills`);
  }

  return {
    matchedSkills,
    missingSkills,
    matchPercentage,
    recommendations,
    suggestedLearningOrder: missingSkills
  };
};

export const generateRoadmap = async (role: string): Promise<RoadmapResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const exactKey = Object.keys(ROADMAP_DATABASE).find(r => r.toLowerCase() === role.toLowerCase());
  
  if (exactKey) {
      return { role: exactKey, phases: ROADMAP_DATABASE[exactKey] };
  }

  // Check if we have a partial match
  const partialKey = Object.keys(ROADMAP_DATABASE).find(r => role.toLowerCase().includes(r.toLowerCase()));
  
  if (partialKey) {
      return { role: partialKey, phases: ROADMAP_DATABASE[partialKey] };
  }

  return { role: role, phases: getGenericRoadmap(role) };
};