
import React, { useState, useEffect } from 'react';
import CareerGoalInput from './CareerGoalInput';
import SkillGapResults from './SkillGapResults';
import CareerRoadmap from './CareerRoadmap';
import TechNews from './TechNews';
import { analyzeSkillGap, generateRoadmap } from '../utils/mockApi';
import { fetchTopTechStories } from '../services/hackerNewsService';
import { AppState, SkillGapResponse, RoadmapResponse, HackerNewsStory } from '../types';
import { Flame, RotateCcw } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INPUT);
  const [skillData, setSkillData] = useState<SkillGapResponse | null>(null);
  const [roadmapData, setRoadmapData] = useState<RoadmapResponse | null>(null);
  const [news, setNews] = useState<HackerNewsStory[]>([]);

  // Fetch News on Mount
  useEffect(() => {
    const getNews = async () => {
      const stories = await fetchTopTechStories();
      setNews(stories);
    };
    getNews();
  }, []);

  const handleAnalysisRequest = async (role: string, skills: string[]) => {
    setAppState(AppState.LOADING);
    try {
      // Simulating API calls to the backend
      const [skillResult, roadmapResult] = await Promise.all([
        analyzeSkillGap({ role, skills }),
        generateRoadmap(role)
      ]);
      setSkillData(skillResult);
      setRoadmapData(roadmapResult);
      setAppState(AppState.RESULTS);
    } catch (e) {
      console.error(e);
      setAppState(AppState.ERROR);
    }
  };

  const handleReset = () => {
    setAppState(AppState.INPUT);
    setSkillData(null);
    setRoadmapData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-24">
      
      {/* State: Input */}
      {appState === AppState.INPUT && (
        <div className="flex flex-col items-center">
           <CareerGoalInput onSubmit={handleAnalysisRequest} isLoading={false} />
           
           {/* Footer News Preview */}
           <div className="mt-16 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
               <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl p-4 text-white flex items-center gap-2">
                   <div className="bg-white/20 p-1.5 rounded-lg"><Flame size={18} /></div>
                   <div>
                       <h3 className="font-bold text-sm">Trending Tech News</h3>
                       <p className="text-xs opacity-90">Top stories from HackerNews community</p>
                   </div>
                   <span className="ml-auto text-[10px] font-bold bg-red-600 px-2 py-0.5 rounded shadow-sm">Live</span>
               </div>
               <TechNews stories={news} />
           </div>
        </div>
      )}

      {/* State: Loading */}
      {appState === AppState.LOADING && (
         <div className="flex flex-col items-center justify-center py-32 animate-in fade-in">
            <div className="w-16 h-16 border-4 border-slate-200 border-t-violet-600 rounded-full animate-spin mb-6"></div>
            <h3 className="text-xl font-bold text-slate-800">Analyzing Career Path...</h3>
            <p className="text-slate-500 mt-2">Comparing your profile with industry standards</p>
         </div>
      )}

      {/* State: Results */}
      {appState === AppState.RESULTS && skillData && roadmapData && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
           
           {/* Action Bar */}
           <div className="flex justify-end mb-4">
                <button 
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 shadow-sm shadow-violet-200 transition-colors"
                >
                    <RotateCcw size={16} /> New Analysis
                </button>
           </div>

           {/* Summary Stats Row */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-green-500 rounded-xl p-6 text-white shadow-lg shadow-green-500/20 flex items-center justify-between">
                  <div>
                      <p className="text-green-100 font-medium text-sm mb-1">Matched Skills</p>
                      <h3 className="text-3xl font-bold">{skillData.matchedSkills.length}</h3>
                      <p className="text-xs text-green-100 mt-1">Skills you already have</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-xl">1</span>
                  </div>
              </div>

              <div className="bg-orange-600 rounded-xl p-6 text-white shadow-lg shadow-orange-500/20 flex items-center justify-between">
                  <div>
                      <p className="text-orange-100 font-medium text-sm mb-1">Skills to Learn</p>
                      <h3 className="text-3xl font-bold">{skillData.missingSkills.length}</h3>
                      <p className="text-xs text-orange-100 mt-1">Focus areas for growth</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-xl">4</span>
                  </div>
              </div>

              <div className="bg-violet-600 rounded-xl p-6 text-white shadow-lg shadow-violet-500/20 flex items-center justify-between">
                  <div>
                      <p className="text-violet-100 font-medium text-sm mb-1">Roadmap Phases</p>
                      <h3 className="text-3xl font-bold">{roadmapData.phases.length}</h3>
                      <p className="text-xs text-violet-100 mt-1">Step-by-step learning path</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-xl">3</span>
                  </div>
              </div>
           </div>

           {/* Main Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Skill Analysis */}
              <div className="lg:col-span-5 h-full">
                  <SkillGapResults data={skillData} />
              </div>

              {/* Right: Career Roadmap */}
              <div className="lg:col-span-7 h-full">
                  <CareerRoadmap data={roadmapData} />
              </div>
           </div>

           {/* Bottom: News Feed */}
           <div className="mt-8">
               <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-t-xl p-4 text-white flex items-center justify-between">
                   <div>
                       <h3 className="font-bold flex items-center gap-2">
                           <Flame size={20} /> Trending Tech News
                       </h3>
                       <p className="text-xs text-orange-100">Top stories from HackerNews community</p>
                   </div>
                   <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Live API</div>
               </div>
               <TechNews stories={news} />
           </div>
        </div>
      )}

    </main>
  );
};

export default Dashboard;
