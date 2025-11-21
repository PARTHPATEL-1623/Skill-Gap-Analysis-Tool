
const { ROLE_SKILL_DATABASE, SKILL_ALIASES, ROADMAP_DATABASE } = require('../utils/roleSkillDatabase');

const normalizeSkill = (skill) => {
  const lower = skill.trim().toLowerCase();
  return SKILL_ALIASES[lower] ? SKILL_ALIASES[lower] : skill.trim();
};

exports.analyzeSkillGap = (req, res) => {
    const { role, skills } = req.body;
    
    if (!role || !skills) {
        return res.status(400).json({ error: "Role and skills are required" });
    }

    let targetKey = Object.keys(ROLE_SKILL_DATABASE).find(r => r.toLowerCase() === role.toLowerCase());
    
    if (!targetKey) {
        targetKey = Object.keys(ROLE_SKILL_DATABASE).find(r => role.toLowerCase().includes(r.toLowerCase()));
    }
    
    // Default to generic list if not found
    const requiredSkills = targetKey ? ROLE_SKILL_DATABASE[targetKey] : ["HTML", "JavaScript", "Git", "Problem Solving"];
    
    const userSkills = skills.map(normalizeSkill).map(s => s.toLowerCase());
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
  
    const recommendations = [];
    if (matchPercentage === 100) {
        recommendations.push("You are fully qualified! Focus on building unique projects.");
    } else if (matchPercentage > 50) {
        recommendations.push(`Focus on ${missingSkills[0]} and ${missingSkills[1] || 'advanced concepts'}.`);
    } else {
        recommendations.push(`Start with foundational topics: ${missingSkills.slice(0, 2).join(', ')}`);
        recommendations.push(`Focus on ${missingSkills.length} missing core skills`);
    }

    res.json({
        matchedSkills,
        missingSkills,
        matchPercentage,
        recommendations,
        suggestedLearningOrder: missingSkills
    });
};

exports.getRoadmap = (req, res) => {
    const { role } = req.body;
    if (!role) return res.status(400).json({ error: "Role is required" });

    const exactKey = Object.keys(ROADMAP_DATABASE).find(r => r.toLowerCase() === role.toLowerCase());
    
    if (exactKey) {
        return res.json({ role: exactKey, phases: ROADMAP_DATABASE[exactKey] });
    }
    
    // Generic fallback
    const genericRoadmap = [
        { phase: `Phase 1: ${role} Basics`, duration: "1-2 months", topics: ["Fundamentals", "Tools"], description: "Start with the basics." },
        { phase: "Phase 2: Intermediate", duration: "2 months", topics: ["Frameworks", "Databases"], description: "Build applications." },
        { phase: "Phase 3: Advanced", duration: "2 months", topics: ["Deployment", "Security"], description: "Professional skills." }
    ];

    res.json({ role, phases: genericRoadmap });
};
