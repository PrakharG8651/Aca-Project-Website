import type { Student, SubmissionStatus } from "@/types";
import { cn } from "@/lib/utils";

interface StudentCardProps {
  student: Student;
  className?: string;
}

const statusConfig: Record<
  SubmissionStatus,
  { color: string; label: string; bg: string }
> = {
  "on-track": { color: "#4ade80", label: "On Track", bg: "bg-[#4ade80]/10" },
  ahead: { color: "#60a5fa", label: "Ahead", bg: "bg-[#60a5fa]/10" },
  behind: { color: "#fbbf24", label: "Behind", bg: "bg-[#fbbf24]/10" },
  inactive: { color: "#6b7280", label: "Inactive", bg: "bg-[#6b7280]/10" },
};

export function StudentCard({ student, className }: StudentCardProps) {
  const config = statusConfig[student.submissionStatus];

  return (
    <div
      id={`student-${student.id}`}
      className={cn(
        "group rounded-lg border border-[#1f1f1f] bg-[#111111] p-4 transition-colors hover:border-[#2a2a2a]",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f1f1f] font-mono text-xs text-[#6b7280]">
          {student.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#f9fafb]">
            {student.name}
          </h4>
          <span className="font-mono text-xs text-[#6b7280]">
            @{student.handle}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
            config.bg
          )}
          style={{ color: config.color }}
        >
          {config.label}
        </span>
        <span className="font-mono text-xs text-[#6b7280]">
          {student.completedWeeks}/10 weeks
        </span>
      </div>
    </div>
  );
}
