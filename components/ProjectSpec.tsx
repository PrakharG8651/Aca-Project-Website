import type { Project, ProjectDifficulty } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectSpecProps {
  project: Project;
  className?: string;
}

const difficultyConfig: Record<
  ProjectDifficulty,
  { color: string; bg: string; label: string }
> = {
  beginner: { color: "#4ade80", bg: "bg-[#4ade80]/10", label: "Beginner" },
  intermediate: { color: "#fbbf24", bg: "bg-[#fbbf24]/10", label: "Intermediate" },
  advanced: { color: "#f87171", bg: "bg-[#f87171]/10", label: "Advanced" },
};

export function ProjectSpec({ project, className }: ProjectSpecProps) {
  const config = difficultyConfig[project.difficulty];

  return (
    <div
      id={`project-${project.id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[#1f1f1f]/80 bg-[#111111]/80 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-[#2a2a2a] hover:bg-[#131313] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(74,222,128,0.04)]",
        "hover:-translate-y-[1px]",
        className
      )}
    >
      {/* Accent top line */}
      <div
        className="h-[2px] w-full rounded-t-xl"
        style={{
          background: `linear-gradient(90deg, ${config.color}, ${config.color}60, ${config.color}15, transparent)`,
        }}
      />

      <div className="relative p-4 sm:p-6 lg:p-7">
        {/* ── Header: codename + difficulty + due week ─── */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-[#4ade80] sm:text-base">
              {project.codename}
            </span>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider shadow-[inset_0_0_0_1px_currentColor/10]",
                config.bg
              )}
              style={{ color: config.color }}
            >
              {config.label}
            </span>
          </div>
          <span className="rounded-full border border-[#1f1f1f]/60 bg-[#0d0d0d] px-2.5 py-1 font-mono text-xs text-[#6b7280]">
            Due Week {project.dueWeek}
          </span>
        </div>

        {/* ── Title ───────────────────────────────────── */}
        <h3 className="mb-2 font-mono text-xl font-semibold text-[#f9fafb] transition-colors duration-300 group-hover:text-[#4ade80] sm:text-2xl">
          {project.title}
        </h3>

        {/* ── Description ─────────────────────────────── */}
        <p className="mb-5 text-sm leading-[1.8] text-[#9ca3af] sm:text-[15px]">
          {project.description}
        </p>

        {/* ── Twist callout ───────────────────────────── */}
        {project.twist && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-[#a78bfa]/[0.1] bg-[#a78bfa]/[0.03] px-4 py-3.5 transition-colors duration-300 group-hover:bg-[#a78bfa]/[0.05] group-hover:border-[#a78bfa]/[0.15]">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-[#a78bfa] opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a78bfa]/80">
                The Twist
              </span>
              <p className="mt-1 text-sm leading-relaxed text-[#d1d5db] sm:text-[15px]">
                {project.twist}
              </p>
            </div>
          </div>
        )}

        {/* ── Tech stack ──────────────────────────────── */}
        {project.techStack.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#1f1f1f]/60 bg-[#0a0a0a] px-2.5 py-1 font-mono text-[11px] text-[#9ca3af] transition-all duration-300 hover:border-[#2a2a2a] hover:text-[#d1d5db]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* ── Objectives ──────────────────────────────── */}
        {project.objectives.length > 0 && (
          <div className="mb-6 border-t border-[#1f1f1f]/60 pt-5">
            <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#6b7280]">
              Objectives
            </h4>
            <ul className="space-y-2.5">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: `${config.color}80` }}
                  />
                  <span className="text-sm leading-relaxed text-[#9ca3af] sm:text-[15px]">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Learning outcomes ────────────────────────── */}
        {project.learningOutcomes.length > 0 && (
          <div className="border-t border-[#1f1f1f]/60 pt-5">
            <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#6b7280]">
              What You&apos;ll Learn
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.learningOutcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    borderColor: `${config.color}20`,
                    backgroundColor: `${config.color}06`,
                    color: config.color,
                  }}
                >
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: config.color }}
                  />
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
