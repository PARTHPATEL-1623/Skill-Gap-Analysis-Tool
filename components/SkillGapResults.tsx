
import React from 'react';
import { SkillGapResponse } from '../types';
import { Check, Lightbulb, TrendingUp } from 'lucide-react';

interface Props {
  data: SkillGapResponse;
}

const SkillGapResults: React.FC<Props> = ({ data }) => {
  const totalSkills = data.matchedSkills.length + data.missingSkills.length;

  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Main Chart Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex-1 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Skill Gap Analysis</h3>
            <span className="text-2xl font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                {data.matchPercentage}%
            </span>
        </div>

        <p className="text-sm text-slate-500 mb-6">
            Your progress toward your goal
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-slate-600 mb-2">
                <span>Skill Completion</span>
                <span>{data.matchedSkills.length} of {totalSkills} skills</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000"
                    style={{ width: `${data.matchPercentage}%` }}
                ></div>
            </div>
        </div>

        {/* Lists */}
        <div className="space-y-4">
             {/* Matched */}
             <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-green-700 flex items-center gap-2">
                        <div className="p-1 bg-green-200 rounded-full"><Check size={12} className="text-green-700" /></div>
                        Matched Skills
                    </h4>
                    <span className="text-xs font-bold bg-white text-green-700 px-2 py-1 rounded-md shadow-sm">{data.matchedSkills.length}</span>
                </div>
                {data.matchedSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                         <p className="text-sm text-green-600 font-medium w-full">You've got these covered!</p>
                         {data.matchedSkills.map(skill => (
                            <span key={skill} className="text-xs font-bold text-white bg-green-500 px-2 py-1 rounded">{skill}</span>
                         ))}
                    </div>
                ) : (
                    <p className="text-sm text-green-600/80 italic">Add skills to see matches</p>
                )}
             </div>

             {/* Missing */}
             <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                     <h4 className="text-sm font-bold text-orange-700 flex items-center gap-2">
                        <div className="p-1 bg-orange-200 rounded-full"><TrendingUp size={12} className="text-orange-700" /></div>
                        Skills to Learn
                     </h4>
                     <span className="text-xs font-bold bg-white text-orange-700 px-2 py-1 rounded-md shadow-sm">{data.missingSkills.length}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <p className="text-sm text-orange-600 font-medium w-full">Your growth opportunities</p>
                     {data.missingSkills.map(skill => (
                        <span key={skill} className="text-xs font-bold text-white bg-orange-500 px-2 py-1 rounded">{skill}</span>
                     ))}
                </div>
             </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
         <h4 className="text-indigo-900 font-bold flex items-center gap-2 mb-4">
             <div className="bg-indigo-200 p-1.5 rounded-lg"><Lightbulb size={18} className="text-indigo-700" /></div>
             Expert Recommendations
         </h4>
         <ul className="space-y-3">
            {data.recommendations.map((rec, i) => (
                <li key={i} className="flex gap-3 text-sm text-indigo-800 bg-white p-3 rounded-xl border border-indigo-100 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">{i+1}</span>
                    {rec}
                </li>
            ))}
         </ul>
      </div>

    </div>
  );
};

export default SkillGapResults;
