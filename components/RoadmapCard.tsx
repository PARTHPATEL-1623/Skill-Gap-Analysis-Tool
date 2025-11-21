import React from 'react';
import { RoadmapResponse } from '../types';
import { Calendar, CheckCircle2, Rocket } from 'lucide-react';

interface Props {
  data: RoadmapResponse;
}

const RoadmapCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-full flex flex-col gap-6">
      
      {/* Header Card */}
      <div className="bg-white border border-green-100 rounded-2xl p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Launch Your Career!</h3>
        <p className="text-green-800 text-sm font-medium max-w-lg mx-auto">
            Follow this roadmap consistently, build projects, and you'll achieve your goal as a <span className="font-bold">{data.role}</span>
        </p>
      </div>

      {/* Phases List */}
      <div className="space-y-4">
        {data.phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-2xl border border-violet-100 p-6 shadow-sm flex gap-5 hover:border-violet-300 transition-all group">
                <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                        {index + 1}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="font-bold text-slate-900 text-lg">{phase.phase}</h4>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                            <Calendar size={12} /> {phase.duration}
                        </span>
                    </div>
                    
                    {/* Topics List */}
                    <div className="space-y-3">
                        {phase.topics.map((topic) => (
                            <div key={topic} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="min-w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-transparent">
                                    <CheckCircle2 size={12} />
                                </div>
                                <span className="text-sm text-slate-700 font-medium">{topic}</span>
                                <span className="ml-auto text-slate-300"><CheckCircle2 size={16} /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;