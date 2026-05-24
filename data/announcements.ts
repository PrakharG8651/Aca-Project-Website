import type { Announcement } from "@/types";

export const announcements: Announcement[] = [
  {
    id: "ann-001",
    title: "Welcome to RAS.DEVCAMP — Cohort 1 Kickoff",
    goal: "Have a lecture on monday to understand the basics.",
    content:
      "We're officially live. Over the next 10 weeks you'll go from zero to shipping production grade full stack applications. Week 1 focuses on environment setup, Git workflows, and TypeScript fundamentals. Make sure your dev environment is configured before the first live session on Monday. If you hit blockers, drop them in the #setup channel.",
    author: "Ujjwal Prakash",
    role: "Mentor",
    date: "2026-05-23",
    time: "14:00",
    priority: "high",
    tags: ["kickoff", "week-1", "setup"],
  },
  
];
