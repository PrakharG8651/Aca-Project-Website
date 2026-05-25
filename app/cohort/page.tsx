import { students } from "@/data/students";
import { StudentCard } from "@/components/StudentCard";

export default function CohortPage() {
  return (
    <div id="page-cohort" className="animate-fade-in-up">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="font-mono text-xl font-semibold text-[#f9fafb] sm:text-2xl">
          Cohort
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          Students enrolled in the current bootcamp cohort.
        </p>
        {students.length > 0 && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/80 px-2.5 py-1 font-mono text-[11px] text-[#6b7280] backdrop-blur-sm">
            {students.length} student{students.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {students.length > 0 ? (
        <div className="grid gap-3 stagger-children sm:grid-cols-2 lg:grid-cols-3">
          {students.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#1f1f1f]/60 py-20 animate-fade-in">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#111111]">
            <svg
              className="h-5 w-5 text-[#6b7280]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          </div>
          <p className="font-mono text-sm text-[#6b7280]">
            No students enrolled yet
          </p>
          <p className="mt-1 text-xs text-[#4a4a4a]">
            Students will appear here once the cohort is finalized.
          </p>
        </div>
      )}
    </div>
  );
}
