export interface SkillGapRequest {
  role: string;
  skills: string[];
}

export interface SkillGapResponse {
  matchedSkills: string[];
  missingSkills: string[];
  matchPercentage: number;
  recommendations: string[];
  suggestedLearningOrder: string[];
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  topics: string[];
  description: string;
}

export interface RoadmapResponse {
  role: string;
  phases: RoadmapPhase[];
}

export interface HackerNewsStory {
  id: number;
  title: string;
  url: string;
  score: number;
  time: number;
  type: string;
  by: string;
}

export enum AppState {
  INPUT = 'INPUT',
  LOADING = 'LOADING',
  RESULTS = 'RESULTS',
  ERROR = 'ERROR'
}
