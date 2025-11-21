
import React from 'react';
import Dashboard from './components/Dashboard';
import { BrainCircuit } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Global Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
            <BrainCircuit size={24} className="text-violet-600" />
            <span className="font-semibold text-lg text-slate-800">Skill Gap Analysis Tool</span>
          </div>
          <div>
            <a href="https://github.com/HackerNews/API" target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-500 hover:text-violet-600">
              API Integration Demo
            </a>
          </div>
        </div>
      </header>

      {/* Main Application Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;
