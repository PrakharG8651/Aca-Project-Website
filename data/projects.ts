import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-cipher",
    title: "Cipher",
    codename: "CIPHER",
    description:
      "Your personal productivity OS — task management, goal tracking, focus modes, and mood boards, all in one desktop/web app built around how you work.",
    twist:
      "Describe a feature you want, the AI writes the code, and a CI/CD pipeline ships it automatically. Your app, shaped by you, deployed by itself, without clicking a button.",
    difficulty: "intermediate",
    techStack: ["TypeScript", "Next.js", "React", "PostgreSQL", "Docker", "GitHub Actions"],
    dueWeek: 5,
    objectives: [
      "Build core productivity features: tasks, goals, focus modes, mood boards",
      "Integrate an LLM to accept natural-language feature descriptions and generate code",
      "Set up a CI/CD pipeline that auto-deploys on merge without manual intervention",
      "Design and implement a REST API with proper auth",
      "Ship to production with environment and secrets management",
    ],
    learningOutcomes: ["Dev Foundation", "API", "Design", "Deployment", "CI/CD Basics"],
  },
  {
    id: "proj-arena",
    title: "2D Battle Arena",
    codename: "ARENA",
    description:
      "A multiplayer combat game — move, fight, and outlast everyone else in real time.",
    twist:
      "Go backend running the entire game loop, syncing every player's position, health, and action across all connected clients with zero lag.",
    difficulty: "advanced",
    techStack: ["TypeScript", "Canvas API", "Go", "WebSockets", "Redis", "PostgreSQL"],
    dueWeek: 9,
    objectives: [
      "Implement a fixed-timestep authoritative game loop in Go",
      "Sync player position, health, and actions across all clients in real time",
      "Build a Canvas-based renderer with client-side prediction and reconciliation",
      "Handle WebSocket connection lifecycle, drops, and reconnection gracefully",
      "Optimize for low latency — profile and benchmark before shipping",
    ],
    learningOutcomes: ["Backend", "WebSockets", "Latency", "Design"],
  },
];