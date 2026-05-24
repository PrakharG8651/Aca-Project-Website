import type { Module, WeekStatus } from "@/types";
import { cn } from "@/lib/utils";

interface WeekModuleProps {
  module: Module;
  className?: string;
}

const statusConfig: Record<
  WeekStatus,
  { dot: string; label: string; border: string; bg: string }
> = {
  done: {
    dot: "bg-[#4ade80]",
    label: "Completed",
    border: "border-[#4ade80]/20",
    bg: "bg-[#4ade80]/5",
  },
  active: {
    dot: "bg-[#4ade80] animate-pulse",
    label: "In Progress",
    border: "border-[#4ade80]/30",
    bg: "bg-[#4ade80]/5",
  },
  locked: {
    dot: "bg-[#6b7280]/50",
    label: "Locked",
    border: "border-[#1f1f1f]",
    bg: "bg-[#111111]/50",
  },
};

export function WeekModule({ module, className }: WeekModuleProps) {
  const config = statusConfig[module.status];
  const isLocked = module.status === "locked";

  return (
    <div
      id={`module-${module.id}`}
      className={cn(
        "group rounded-lg border p-5 transition-all",
        config.border,
        config.bg,
        isLocked && "opacity-50 cursor-not-allowed",
        !isLocked && "hover:border-[#4ade80]/40",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className={cn("h-2 w-2 rounded-full", config.dot)} />
          <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
            Week {module.week}
          </span>
        </div>
        <span
          className={cn(
            "rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
            module.status === "done" && "bg-[#4ade80]/10 text-[#4ade80]",
            module.status === "active" && "bg-[#4ade80]/10 text-[#4ade80]",
            module.status === "locked" && "bg-[#1f1f1f] text-[#6b7280]"
          )}
        >
          {config.label}
        </span>
      </div>
      <h3
        className={cn(
          "mb-1 font-mono text-sm font-medium",
          isLocked ? "text-[#6b7280]" : "text-[#f9fafb]"
        )}
      >
        {module.title}
      </h3>
      {module.description && (
        <p className="mb-3 text-sm text-[#6b7280]">{module.description}</p>
      )}
      {module.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {module.topics.map((topic) => (
            <span
              key={topic}
              className="rounded bg-[#1f1f1f] px-2 py-0.5 font-mono text-[10px] text-[#6b7280]"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
      {module.assignmentCount > 0 && (
        <div className="mt-3 font-mono text-xs text-[#6b7280]">
          {module.assignmentCount} assignment
          {module.assignmentCount !== 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}
