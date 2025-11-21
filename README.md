# 🚀 SkillSync - Career Gap Analyzer

**SkillSync** is an intelligent career development tool designed to help developers bridge the gap between their current skills and their dream roles. By analyzing your current skillset against industry standards, SkillSync provides actionable insights, personalized learning roadmaps, and keeps you updated with the latest tech news.

---

## 🌟 Project Overview

This project was built to solve a common problem for developers: **"What do I need to learn next?"**

It features a seamless Full Stack architecture (React Frontend + Node.js Backend) to deliver:
1.  **Skill Gap Analysis**: Instantly identifies missing skills for specific tech roles.
2.  **Career Roadmaps**: Generates structured, time-bound learning paths (Phase 1 to Phase 3).
3.  **Market Intelligence**: Integrates live data from the HackerNews API to keep users informed.

---

## ✨ Key Features

### 1. 🎯 Smart Career Goal Input
*   **Role Autocomplete**: Select from popular industry roles (Frontend, Backend, Data Science, etc.).
*   **Tag-Based Skill Entry**: An interactive input system that allows users to easily add and remove skills.
*   **Smart Defaults**: Robust handling for custom roles not explicitly in the database.

### 2. 📊 Visual Skill Analysis
*   **Match Percentage Gauge**: Visualizes how close you are to the target role.
*   **Categorized Insights**: Clearly distinguishes between "Matched Skills" (Green) and "Skills to Learn" (Orange).
*   **Expert Recommendations**: AI-simulated tips based on your specific gap (e.g., "Focus on projects" vs "Learn basics").

### 3. 🗺️ Personalized Roadmaps
*   **3-Phase Learning Path**: Breaks down the journey into manageable chunks (Foundations, Intermediate, Advanced).
*   **Timeline Estimates**: Provides realistic duration estimates for each phase.
*   **Curated Topics**: Lists specific technologies and concepts to master in each phase.

### 4. 📰 Live Tech News Hub
*   **Public API Integration**: Fetches top stories continuously from the [HackerNews API](https://github.com/HackerNews/API).
*   **Real-Time Stats**: Displays upvotes, author, and time elapsed for trending stories.

---

## 🛠️ Technology Stack

### Frontend
*   **Framework**: [React](https://react.dev/) (v18+)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Visualization**: [Recharts](https://recharts.org/)
*   **Icons**: [Lucide React](https://lucide.dev/)

### Backend
*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express.js](https://expressjs.com/)
*   **Architecture**: REST API with modular Controller/Route structure.
*   **Database**: JSON-based in-memory storage (extensible to MongoDB/PostgreSQL).

---

## 📂 Project Structure

The project is organized into a monorepo-style structure containing both frontend and backend logic.

```text
/Skill-Gap-Analysis-Tool
│
├── /frontend                   # React Client Application
│   ├── src/
│   │   ├── components/         # UI Components
│   │   │   ├── CareerGoalInput.tsx     # Interactive form
│   │   │   ├── SkillGapResults.tsx     # Analysis visualization
│   │   │   ├── CareerRoadmap.tsx       # Timeline view
│   │   │   ├── Dashboard.tsx           # Main state manager
│   │   │   └── TechNews.tsx            # API widget
│   │   ├── services/           # External API services (HackerNews)
│   │   ├── utils/              # Helpers & Mock Data
│   │   └── App.tsx             # Root Layout
│   ├── package.json
│   └── vite.config.ts
│
└── /backend                    # Node.js API Server
    ├── controllers/            # Logic for processing requests
    │   └── skillGapController.js
    ├── routes/                 # API Endpoint definitions
    │   └── skillGapRoutes.js
    ├── utils/                  # Data source & Helper functions
    │   └── roleSkillDatabase.js
    └── server.js               # Server entry point
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   Node.js (v14 or higher)
*   npm (Node Package Manager)

### 1️⃣ Setup the Frontend

The frontend is configured to run immediately with **mock data** for demonstration purposes.

```bash
cd frontend
npm install
npm run dev
```
*   Access the app at `http://localhost:5173` (or similar port provided by Vite).

### 2️⃣ Setup the Backend (Optional)

To enable the full backend experience:

1.  Navigate to the backend directory:
    ```bash
    cd backend
    npm install
    ```
2.  Start the server:
    ```bash
    npm start
    ```
    *   The server will start at `http://localhost:5000`.

3.  **Connect Frontend to Backend**:
    *   Open `frontend/src/components/Dashboard.tsx`.
    *   Replace the imports from `../utils/mockApi` with real `fetch` calls to `http://localhost:5000/api/...`.

---

## 📡 API Documentation

If running the Node.js backend, the following endpoints are available:

### 1. Analyze Skill Gap
**POST** `/api/skill-gap`

Analyzes the user's provided skills against the target role requirements.

**Request Body:**
```json
{
  "role": "Backend Developer",
  "skills": ["Java", "Git", "SQL"]
}
```

**Response:**
```json
{
  "matchedSkills": ["Java", "Git", "SQL"],
  "missingSkills": ["Spring Boot", "APIs", "Docker", "System Design"],
  "matchPercentage": 43,
  "recommendations": ["Focus on Spring Boot", "Learn Docker basics"],
  "suggestedLearningOrder": ["Spring Boot", "APIs", "Docker"]
}
```

### 2. Generate Roadmap
**POST** `/api/roadmap`

Retrieves a structured learning path for a specific role.

**Request Body:**
```json
{
  "role": "Backend Developer"
}
```

---

## 🎨 UX/UI Design Philosophy

*   **Minimal & Clean**: The interface focuses on content without clutter.
*   **Feedback-Driven**: Interactive elements (hover states, loading spinners) provide constant feedback.
*   **Accessible**: High contrast colors and clear typography (Inter font) ensure readability.
*   **Mobile Responsive**: The dashboard grid adapts seamlessly from desktop to mobile screens.

---

## 🔮 Future Improvements

*   **User Authentication**: Save user progress and historical analysis.
*   **Course Integration**: Link "missing skills" directly to Udemy/Coursera courses.
*   **PDF Export**: Allow users to download their roadmap as a PDF.
