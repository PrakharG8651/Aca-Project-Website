// ─── Announcements ─────────────────────────────────────────
export interface Announcement {
  id: string;
  title: string;
  goal: string;
  content: string;
  author: string;
  role: string; // e.g. "Mentor", "TA", "Admin"
  date: string; // ISO date string e.g. "2026-05-23"
  time: string; // 24h time string e.g. "14:30"
  priority: "low" | "normal" | "high";
  tags: string[];
}

// ─── Modules ───────────────────────────────────────────────
export type WeekStatus = "done" | "active" | "locked";

export type ModuleResourceType =
  | "article"
  | "video"
  | "documentation"
  | "tool"
  | "exercise"
  | "repository";

export interface ModuleResource {
  title: string;
  url: string;
  type: ModuleResourceType;
}

export interface Module {
  id: string;
  week: number;
  title: string;
  description: string;
  status: WeekStatus;
  topics: string[];
  assignmentCount: number;
  goal: string;
  learningOutcomes: string[];
  timeRequired: string; // e.g. "10–12 hours"
  resources: ModuleResource[];
}

// ─── Resources ─────────────────────────────────────────────
export type ResourceTag =
  | "documentation"
  | "video"
  | "article"
  | "tool"
  | "repository"
  | "cheatsheet";

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  tag: ResourceTag;
  tagColor: string; // hex color for the tag pill
  week?: number; // optional: tied to a specific week
}

// ─── Students ──────────────────────────────────────────────
export type SubmissionStatus =
  | "on-track"
  | "behind"
  | "ahead"
  | "inactive";

export interface Student {
  id: string;
  name: string;
  handle: string; // e.g. GitHub username
  avatar?: string;
  submissionStatus: SubmissionStatus;
  completedWeeks: number;
  cohort: number;
}

// ─── Projects ──────────────────────────────────────────────
export type ProjectDifficulty = "beginner" | "intermediate" | "advanced";

export interface Project {
  id: string;
  title: string;
  codename: string;
  description: string;
  twist: string;
  difficulty: ProjectDifficulty;
  techStack: string[];
  dueWeek: number;
  objectives: string[];
  learningOutcomes: string[];
}

// ─── Assignments ───────────────────────────────────────────
export type AssignmentDifficulty =
  | "easy"
  | "medium"
  | "medium-hard"
  | "hard"
  | "challenge";

export interface AssignmentResearchTopic {
  topic: string;
  why: string;
  hint: string;
}

export interface AssignmentSubpart {
  id: string;
  title: string;
  description: string;
  concepts_used: string[];
  restriction?: string;
}

export interface AssignmentPart {
  id: string;
  title: string;
  difficulty: string;
  optional?: boolean;
  description?: string;
  subparts?: AssignmentSubpart[];
  sample_input_format?: unknown;
  concepts_used?: string[];
}

export interface AssignmentDeliverables {
  required_files: string[];
  bonus_files?: string[];
  run_command: string;
  minimum_scores_required?: number;
}

export interface AssignmentSubmission {
  format: string;
  include_in_submission: string[];
  do_not_submit: string[];
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  runtime: string;
  difficulty: AssignmentDifficulty;
  estimated_time: string;
  deadline: string; // ISO date string e.g. "2026-06-01"
  problem_statement: string;
  learning_objectives: string[];
  approach: string[]; // step-by-step strategy
  self_research: {
    required: AssignmentResearchTopic[];
    bonus?: AssignmentResearchTopic[];
  };
  parts: AssignmentPart[];
  deliverables: AssignmentDeliverables;
  submission: AssignmentSubmission;
}
