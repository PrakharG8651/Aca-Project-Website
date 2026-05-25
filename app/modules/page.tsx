import { modules } from "@/data/modules";
import type { WeekStatus, ModuleResourceType } from "@/types";
import { cn } from "@/lib/utils";

/* ── Status visuals ──────────────────────────────────────── */
const statusStyles: Record<
  WeekStatus,
  { dot: string; badge: string; badgeText: string; label: string }
> = {
  done: {
    dot: "bg-[#4ade80]",
    badge: "bg-[#4ade80]/10",
    badgeText: "text-[#4ade80]",
    label: "Completed",
  },
  active: {
    dot: "bg-[#4ade80]",
    badge: "bg-[#4ade80]/10",
    badgeText: "text-[#4ade80]",
    label: "In Progress",
  },
  locked: {
    dot: "bg-[#6b7280]/40",
    badge: "bg-[#1f1f1f]",
    badgeText: "text-[#6b7280]",
    label: "Locked",
  },
};

/* ── Resource‑type icons (small SVGs) ────────────────────── */
const resourceIcon: Record<ModuleResourceType, string> = {
  article:
    "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6V7.5Z",
  video:
    "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
  documentation:
    "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  tool: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  exercise:
    "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
  repository:
    "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
};

const resourceLabel: Record<ModuleResourceType, string> = {
  article: "Article",
  video: "Video",
  documentation: "Docs",
  tool: "Tool",
  exercise: "Exercise",
  repository: "Repo",
};

export default function ModulesPage() {
  const activeWeek = modules.find((m) => m.status === "active")?.week ?? 1;
  const doneCount = modules.filter((m) => m.status === "done").length;

  return (
    <div id="page-modules" className="animate-fade-in-up">
      {/* ── Page header ────────────────────────────────────── */}
      <div className="mb-8 sm:mb-12">
        <h1 className="font-mono text-xl font-semibold text-[#f9fafb] sm:text-2xl">
          Course Timeline
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          10-week full-stack engineering curriculum. Build, ship, run.
        </p>

        {/* Stats row */}
        <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/80 px-3 py-1.5 font-mono text-xs text-[#9ca3af] backdrop-blur-sm">
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
              <span className="relative block h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            </span>
            Week {activeWeek} active
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/80 px-3 py-1.5 font-mono text-xs text-[#9ca3af] backdrop-blur-sm">
            {doneCount}/10 completed
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/80 px-3 py-1.5 font-mono text-xs text-[#9ca3af] backdrop-blur-sm">
            ~130 hours total
          </div>
        </div>
      </div>

      {/* ── Week cards timeline ────────────────────────────── */}
      <div className="relative space-y-5 stagger-children sm:space-y-6">
        {modules.map((mod) => {
          const s = statusStyles[mod.status];
          const isLocked = mod.status === "locked";

          return (
            <div
              key={mod.id}
              id={`module-card-${mod.week}`}
              className={cn(
                "group relative overflow-hidden rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isLocked
                  ? "border-[#1a1a1a]/60 bg-[#0d0d0d] opacity-55"
                  : "border-[#1f1f1f]/80 bg-[#111111]/80 backdrop-blur-sm hover:border-[#2a2a2a] hover:bg-[#131313] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(74,222,128,0.04)] hover:-translate-y-[1px]"
              )}
            >
              {/* Accent top line for active/done */}
              {!isLocked && (
                <div
                  className={cn(
                    "h-[2px] w-full",
                    mod.status === "active"
                      ? "bg-gradient-to-r from-[#4ade80] via-[#4ade80]/40 to-transparent"
                      : "bg-gradient-to-r from-[#4ade80]/50 via-[#4ade80]/10 to-transparent"
                  )}
                />
              )}

              <div className="relative p-4 sm:p-6 lg:p-7">
                {/* ── Header: week label + status ──────────── */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="relative">
                      <span
                        className={cn(
                          "block h-2.5 w-2.5 rounded-full",
                          s.dot
                        )}
                      />
                      {mod.status === "active" && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
                      )}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#9ca3af] sm:text-sm">
                      Week {mod.week}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-300",
                        s.badge,
                        s.badgeText
                      )}
                    >
                      {s.label}
                    </span>
                  </div>
                  <span className="rounded-full border border-[#1f1f1f]/60 bg-[#0d0d0d] px-2.5 py-1 font-mono text-xs text-[#6b7280]">
                    {mod.timeRequired}
                  </span>
                </div>

                {/* ── Title & description ──────────────────── */}
                <h2
                  className={cn(
                    "mb-2 font-mono text-lg font-semibold leading-snug sm:text-xl",
                    isLocked
                      ? "text-[#6b7280]"
                      : "text-[#f9fafb] transition-colors duration-300 group-hover:text-[#4ade80]"
                  )}
                >
                  {mod.title}
                </h2>
                <p className="mb-5 text-sm leading-[1.7] text-[#9ca3af] sm:text-[15px] sm:mb-6">
                  {mod.description}
                </p>

                {/* ── Primary goal callout ─────────────────── */}
                <div className="mb-5 flex items-start gap-3 rounded-lg border border-[#4ade80]/[0.08] bg-[#4ade80]/[0.03] px-4 py-3.5 transition-colors duration-300 group-hover:bg-[#4ade80]/[0.05] group-hover:border-[#4ade80]/[0.12] sm:mb-6">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#4ade80] opacity-80 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#4ade80]/80">
                      Goal
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-[#d1d5db] sm:text-[15px]">
                      {mod.goal}
                    </p>
                  </div>
                </div>

                {/* ── Learning outcomes ─────────────────────── */}
                {mod.learningOutcomes.length > 0 && (
                  <div className="mb-5 sm:mb-6">
                    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280] sm:text-xs">
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {mod.learningOutcomes.map((outcome, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5"
                        >
                          <span
                            className={cn(
                              "mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300",
                              isLocked
                                ? "bg-[#2a2a2a]"
                                : mod.status === "done"
                                  ? "bg-[#4ade80]"
                                  : "bg-[#4ade80]/50"
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm leading-relaxed sm:text-[15px]",
                              isLocked ? "text-[#4a4a4a]" : "text-[#9ca3af]"
                            )}
                          >
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ── Topics ───────────────────────────────── */}
                {mod.topics.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
                    {mod.topics.map((topic) => (
                      <span
                        key={topic}
                        className={cn(
                          "rounded-full px-2.5 py-1 font-mono text-[11px] transition-colors duration-300",
                          isLocked
                            ? "bg-[#141414] text-[#3a3a3a]"
                            : "bg-[#1a1a1a] text-[#9ca3af] group-hover:bg-[#1f1f1f] group-hover:text-[#d1d5db]"
                        )}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* ── Resources ────────────────────────────── */}
                {mod.resources.length > 0 && !isLocked && (
                  <div className="border-t border-[#1f1f1f]/60 pt-5">
                    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280] sm:text-xs">
                      Resources
                    </h3>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {mod.resources.map((res, i) => (
                        <a
                          key={i}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/res flex items-center gap-3 rounded-lg border border-[#1a1a1a]/80 bg-[#0d0d0d] px-3.5 py-3 transition-all duration-300 hover:border-[#2a2a2a] hover:bg-[#141414] hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
                        >
                          <svg
                            className="h-4 w-4 shrink-0 text-[#6b7280] transition-colors duration-300 group-hover/res:text-[#9ca3af]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={resourceIcon[res.type]}
                            />
                          </svg>
                          <div className="min-w-0 flex-1">
                            <span className="block truncate text-[13px] font-medium text-[#d1d5db] transition-colors duration-300 group-hover/res:text-[#4ade80]">
                              {res.title}
                            </span>
                          </div>
                          <span className="shrink-0 rounded-full bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#6b7280]">
                            {resourceLabel[res.type]}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Footer: assignments count ────────────── */}
                {mod.assignmentCount > 0 && (
                  <div
                    className={cn(
                      "mt-5 flex items-center gap-2 font-mono text-xs",
                      isLocked ? "text-[#2a2a2a]" : "text-[#6b7280]"
                    )}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                    {mod.assignmentCount} assignment
                    {mod.assignmentCount !== 1 ? "s" : ""}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
