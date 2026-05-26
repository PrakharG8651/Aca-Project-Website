import { assignments } from "@/data/assignments";
import { AssignmentCard } from "@/components/AssignmentCard";

export default function AssignmentsPage() {
  return (
    <div id="page-assignments" className="animate-fade-in-up">
      <div className="mb-8 sm:mb-10">
        <h1 className="font-mono text-xl font-semibold text-[#f9fafb] sm:text-2xl">
          Assignments
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          Hands-on coding tasks to build real skills. Read carefully, research independently, ship working code.
        </p>
        {assignments.length > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#111111]/80 border border-[#1f1f1f]/60 px-3 py-1.5 font-mono text-xs text-[#9ca3af] backdrop-blur-sm">
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#fbbf24] opacity-30" />
              <span className="relative block h-1.5 w-1.5 rounded-full bg-[#fbbf24]" />
            </span>
            {assignments.length} assignment{assignments.length !== 1 ? "s" : ""} posted
          </div>
        )}
      </div>

      {assignments.length > 0 ? (
        <div className="space-y-6 stagger-children">
          {assignments.map((a) => (
            <AssignmentCard key={a.id} assignment={a} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#1f1f1f]/60 py-16 animate-fade-in">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]">
            <svg className="h-5 w-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <p className="font-mono text-sm text-[#6b7280]">No assignments yet</p>
          <p className="mt-1 text-xs text-[#4a4a4a]">They&apos;ll appear here when posted.</p>
        </div>
      )}
    </div>
  );
}
