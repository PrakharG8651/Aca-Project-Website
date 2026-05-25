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
    border: "border-[#4ade80]/15",
    bg: "bg-[#4ade80]/[0.03]",
  },
  active: {
    dot: "bg-[#4ade80]",
    label: "In Progress",
    border: "border-[#4ade80]/20",
    bg: "bg-[#4ade80]/[0.04]",
  },
  locked: {
    dot: "bg-[#6b7280]/50",
    label: "Locked",
    border: "border-[#1f1f1f]/60",
    bg: "bg-[#0f0f0f]/50",
  },
};

export function WeekModule({ module, className }: WeekModuleProps) {
  const config = statusConfig[module.status];
  const isLocked = module.status === "locked";

  return (
    <div
      id={`module-${module.id}`}
      className={cn(
        "group rounded-xl border p-5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        config.border,
        config.bg,
        isLocked && "opacity-50 cursor-not-allowed",
        !isLocked && "hover:border-[#4ade80]/30 hover:shadow-[0_4px_30px_rgba(74,222,128,0.04)] hover:-translate-y-[1px]",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative">
            <span className={cn("block h-2 w-2 rounded-full", config.dot)} />
            {module.status === "active" && (
              <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
            )}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
            Week {module.week}
          </span>
        </div>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider transition-colors duration-300",
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
          "mb-1 font-mono text-sm font-medium transition-colors duration-300",
          isLocked ? "text-[#6b7280]" : "text-[#f9fafb] group-hover:text-[#4ade80]"
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
              className="rounded-full bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] text-[#6b7280] transition-colors duration-300 group-hover:bg-[#1f1f1f] group-hover:text-[#9ca3af]"
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
