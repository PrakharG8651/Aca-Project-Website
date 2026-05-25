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
        "group rounded-xl border border-[#1f1f1f]/80 bg-[#111111]/80 p-4 backdrop-blur-sm",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-[#2a2a2a] hover:bg-[#131313] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-[1px]",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs transition-all duration-300 group-hover:scale-105"
          style={{
            backgroundColor: `${config.color}12`,
            color: config.color,
            boxShadow: `0 0 0 1px ${config.color}15`,
          }}
        >
          {student.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#f9fafb] transition-colors duration-300 group-hover:text-[#d1d5db]">
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
            "rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider transition-colors duration-300",
            config.bg
          )}
          style={{ color: config.color }}
        >
          {config.label}
        </span>
        <div className="flex items-center gap-1.5">
          {/* Mini progress dots */}
          <div className="hidden items-center gap-0.5 sm:flex">
            {Array.from({ length: 10 }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 w-1 rounded-full transition-colors duration-300",
                  i < student.completedWeeks
                    ? "bg-[#4ade80]/70"
                    : "bg-[#1f1f1f]"
                )}
              />
            ))}
          </div>
          <span className="font-mono text-xs tabular-nums text-[#6b7280]">
            {student.completedWeeks}/10
          </span>
        </div>
      </div>
    </div>
  );
}
