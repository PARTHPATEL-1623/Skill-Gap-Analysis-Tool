import React from 'react';
import { HackerNewsStory } from '../types';
import { ExternalLink, TrendingUp, Clock, User } from 'lucide-react';

interface Props {
  stories: HackerNewsStory[];
}

const TechNewsWidget: React.FC<Props> = ({ stories }) => {
  
  const formatTime = (unixTime: number) => {
    const diff = Math.floor((Date.now() / 1000) - unixTime);
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };

  return (
    <div className="bg-white rounded-b-2xl shadow-sm border-x border-b border-slate-200 overflow-hidden">
      <div className="divide-y divide-slate-100">
        {stories.length === 0 ? (
            <div className="p-8 text-center text-slate-400 italic">Loading latest news...</div>
        ) : (
            stories.map((story, index) => (
                <div key={story.id} className="p-4 hover:bg-slate-50 transition-colors flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-sm">
                        {index + 1}
                    </div>
                    <div className="flex-1">
                        <a 
                            href={story.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-slate-800 hover:text-orange-600 transition-colors line-clamp-2"
                        >
                            {story.title}
                        </a>
                        <div className="mt-1.5 flex flex-wrap gap-3 text-[11px] text-slate-500 font-medium">
                             <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded">
                                <TrendingUp size={10} /> {story.score} points
                             </span>
                             <span className="flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded">
                                <User size={10} /> {story.by}
                             </span>
                             <span className="flex items-center gap-1 text-slate-400">
                                <Clock size={10} /> {formatTime(story.time)}
                             </span>
                             <span className="bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded border border-purple-100">story</span>
                        </div>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default TechNewsWidget;