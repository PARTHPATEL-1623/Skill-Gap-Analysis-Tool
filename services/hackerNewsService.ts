import { HackerNewsStory } from '../types';

const HN_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchTopTechStories = async (): Promise<HackerNewsStory[]> => {
  try {
    // 1. Fetch top stories IDs
    const response = await fetch(`${HN_BASE_URL}/topstories.json`);
    if (!response.ok) throw new Error('Failed to fetch HN stories');
    
    const storyIds: number[] = await response.json();
    
    // 2. Take top 5
    const top5Ids = storyIds.slice(0, 5);

    // 3. Fetch details for each
    const storyPromises = top5Ids.map(id => 
      fetch(`${HN_BASE_URL}/item/${id}.json`).then(res => res.json())
    );

    const stories = await Promise.all(storyPromises);
    
    return stories;
  } catch (error) {
    console.error("HackerNews API Error:", error);
    return [];
  }
};
