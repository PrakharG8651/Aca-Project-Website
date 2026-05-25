import { projects } from "@/data/projects";
import { ProjectSpec } from "@/components/ProjectSpec";

export default function ProjectsPage() {
  return (
    <div id="page-projects" className="animate-fade-in-up">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="font-mono text-xl font-semibold text-[#f9fafb] sm:text-2xl">
          Projects
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          Capstone projects you&apos;ll build during the bootcamp. Read specs early
          — architecture decisions made in early weeks impact these directly.
        </p>
        {projects.length > 0 && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/80 px-2.5 py-1 font-mono text-[11px] text-[#6b7280] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24]" />
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {projects.length > 0 ? (
        <div className="space-y-4 stagger-children">
          {projects.map((p) => (
            <ProjectSpec key={p.id} project={p} />
          ))}
        </div>
      ) : (
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
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <p className="font-mono text-sm text-[#6b7280]">
            No projects released yet
          </p>
          <p className="mt-1 text-xs text-[#4a4a4a]">
            Project specs will be published as the course progresses.
          </p>
        </div>
      )}
    </div>
  );
}
