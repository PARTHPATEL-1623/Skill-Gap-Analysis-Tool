
import React, { useState, KeyboardEvent, useRef } from 'react';
import { Search, X, Plus, Briefcase, Loader2 } from 'lucide-react';

interface Props {
  onSubmit: (role: string, skills: string[]) => void;
  isLoading: boolean;
}

const CareerGoalInput: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [role, setRole] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const skillInputRef = useRef<HTMLInputElement>(null);

  const popularRoles = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer",
    "Data Analyst", "Data Scientist", "DevOps Engineer"
  ];

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput('');
    }
  };

  const handleSkillKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddSkill();
    } else if (e.key === 'Backspace' && !skillInput && skills.length > 0) {
      setSkills(skills.slice(0, -1));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSkills = skillInput.trim() ? [...skills, skillInput.trim()] : skills;
    onSubmit(role, finalSkills);
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-2xl shadow-xl shadow-indigo-500/10 overflow-hidden border border-slate-100">
        
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-8 sm:p-10 text-white">
            <div className="flex items-center gap-3 mb-4 opacity-90">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Briefcase size={24} />
                </div>
                <span className="text-sm font-bold tracking-wider uppercase">Career Pathfinder</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Let's Build Your Future</h2>
            <p className="text-blue-100 text-lg max-w-xl">Enter your career goals and current skills to receive personalized guidance and a step-by-step roadmap.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-8">
          
          {/* Role Section */}
          <div className="space-y-4">
              <label className="block text-base font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                  What's your dream role?
              </label>
              <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                      type="text" 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g., Backend Developer, Data Scientist..."
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-lg"
                  />
              </div>
              
              {/* Popular Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mr-2 pt-1">Popular:</span>
                  {popularRoles.map(r => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${role === r ? 'bg-violet-100 border-violet-200 text-violet-700 font-medium' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {r}
                      </button>
                  ))}
              </div>
          </div>

          <div className="h-px bg-slate-100"></div>

          {/* Skills Section */}
          <div className="space-y-4">
              <label className="block text-base font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs font-bold">2</div>
                  What skills do you have?
              </label>
              
              <div 
                  className="relative min-h-[3.5rem] bg-slate-50 border border-slate-200 rounded-xl p-3 focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-transparent transition-all cursor-text flex flex-wrap gap-2"
                  onClick={() => skillInputRef.current?.focus()}
              >
                  {skills.map(skill => (
                      <span key={skill} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm animate-in zoom-in duration-200">
                          {skill}
                          <button 
                              type="button"
                              onClick={(e) => { e.stopPropagation(); removeSkill(skill); }}
                              className="ml-2 text-slate-400 hover:text-red-500 transition-colors"
                          >
                              <X size={14} />
                          </button>
                      </span>
                  ))}
                  
                  <input 
                      ref={skillInputRef}
                      type="text" 
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={handleSkillKeyDown}
                      onBlur={handleAddSkill}
                      placeholder={skills.length === 0 ? "Type skills and press Enter (e.g., Java, SQL, Git)" : ""}
                      className="flex-1 bg-transparent outline-none min-w-[200px] py-1.5 px-1 text-slate-900 placeholder:text-slate-400"
                  />
                  
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleAddSkill(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-violet-600 hover:border-violet-200 transition-all shadow-sm"
                    title="Add Skill"
                  >
                    <Plus size={18} />
                  </button>
              </div>
          </div>

          <button 
              type="submit" 
              disabled={isLoading || !role || (skills.length === 0 && !skillInput)}
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-500/25 transition-all flex items-center justify-center gap-2 text-lg transform active:scale-[0.99]"
          >
              {isLoading ? (
                  <>
                      <Loader2 className="animate-spin" /> Analyzing Path...
                  </>
              ) : (
                  <>
                      Analyze My Career Path
                  </>
              )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerGoalInput;
