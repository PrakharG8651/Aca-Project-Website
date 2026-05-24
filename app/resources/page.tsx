import { resources } from "@/data/resources";
import { cn } from "@/lib/utils";
import type { ResourceTag } from "@/types";

const tagConfig: Record<ResourceTag, { color: string; bg: string }> = {
  documentation: { color: "#60a5fa", bg: "bg-[#60a5fa]/10" },
  video: { color: "#f87171", bg: "bg-[#f87171]/10" },
  article: { color: "#4ade80", bg: "bg-[#4ade80]/10" },
  tool: { color: "#fbbf24", bg: "bg-[#fbbf24]/10" },
  repository: { color: "#a78bfa", bg: "bg-[#a78bfa]/10" },
  cheatsheet: { color: "#a78bfa", bg: "bg-[#a78bfa]/10" },
};

export default function ResourcesPage() {
  // Group resources by week
  const weekGroups: Record<string, typeof resources> = {};
  const general: typeof resources = [];

  resources.forEach((r) => {
    if (r.week) {
      const key = `Week ${r.week}`;
      if (!weekGroups[key]) weekGroups[key] = [];
      weekGroups[key].push(r);
    } else {
      general.push(r);
    }
  });

  const sortedWeeks = Object.keys(weekGroups).sort(
    (a, b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1])
  );

  return (
    <div id="page-resources">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="font-mono text-xl font-semibold text-[#f9fafb] sm:text-2xl">
          Resources
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          Curated learning materials organized by week. Documentation, articles,
          videos, and tools.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#111111] px-3 py-1.5 font-mono text-xs text-[#9ca3af]">
          {resources.length} resources
        </div>
      </div>

      {/* Legend */}
      <div className="mb-8 flex flex-wrap gap-4">
        {(Object.entries(tagConfig) as [ResourceTag, { color: string; bg: string }][]).map(
          ([tag, config]) => (
            <div
              key={tag}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#9ca3af]"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: config.color }}
              />
              {tag}
            </div>
          )
        )}
      </div>

      {/* Week-grouped resources */}
      <div className="space-y-10">
        {sortedWeeks.map((weekLabel) => (
          <section key={weekLabel}>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#4ade80]">
                {weekLabel}
              </span>
              <div className="h-px flex-1 bg-[#1f1f1f]" />
            </div>
            <div className="space-y-2.5">
              {weekGroups[weekLabel].map((resource) => {
                const tc = tagConfig[resource.tag];
                return (
                  <a
                    key={resource.id}
                    id={`resource-${resource.id}`}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2.5 rounded-lg border border-[#1f1f1f] bg-[#111111] px-4 py-3.5 transition-all hover:border-[#2a2a2a] hover:bg-[#161616] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: tc.color }}
                      />
                      <div className="min-w-0">
                        <span className="block truncate text-sm font-medium text-[#f9fafb] transition-colors group-hover:text-[#4ade80]">
                          {resource.title}
                        </span>
                        {resource.description && (
                          <p className="mt-1 truncate text-[13px] text-[#6b7280]">
                            {resource.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span
                        className={cn(
                          "rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                          tc.bg
                        )}
                        style={{ color: tc.color }}
                      >
                        {resource.tag}
                      </span>
                      <svg
                        className="h-3.5 w-3.5 text-[#6b7280] transition-transform group-hover:translate-x-0.5 group-hover:text-[#4ade80]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        ))}

        {/* General / unscoped resources */}
        {general.length > 0 && (
          <section>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#6b7280]">
                General Tools
              </span>
              <div className="h-px flex-1 bg-[#1f1f1f]" />
            </div>
            <div className="space-y-2.5">
              {general.map((resource) => {
                const tc = tagConfig[resource.tag];
                return (
                  <a
                    key={resource.id}
                    id={`resource-${resource.id}`}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 rounded-lg border border-[#1f1f1f] bg-[#111111] px-4 py-3 transition-all hover:border-[#2a2a2a] hover:bg-[#161616] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: tc.color }}
                      />
                      <div className="min-w-0">
                        <span className="block truncate text-sm font-medium text-[#f9fafb] transition-colors group-hover:text-[#4ade80]">
                          {resource.title}
                        </span>
                        {resource.description && (
                          <p className="mt-1 truncate text-[13px] text-[#6b7280]">
                            {resource.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span
                        className={cn(
                          "rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                          tc.bg
                        )}
                        style={{ color: tc.color }}
                      >
                        {resource.tag}
                      </span>
                      <svg
                        className="h-3.5 w-3.5 text-[#6b7280] transition-transform group-hover:translate-x-0.5 group-hover:text-[#4ade80]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
