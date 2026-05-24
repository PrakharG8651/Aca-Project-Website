import type { Resource } from "@/types";
import { cn } from "@/lib/utils";

interface ResourceRowProps {
  resource: Resource;
  className?: string;
}

export function ResourceRow({ resource, className }: ResourceRowProps) {
  return (
    <a
      id={`resource-${resource.id}`}
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col gap-2 rounded-lg border border-[#1f1f1f] bg-[#111111] px-3 py-3 transition-all hover:border-[#2a2a2a] hover:bg-[#161616] sm:flex-row sm:items-center sm:justify-between sm:px-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: resource.tagColor }}
        />
        <div>
          <span className="text-sm font-medium text-[#f9fafb] transition-colors group-hover:text-[#4ade80]">
            {resource.title}
          </span>
          {resource.description && (
            <p className="mt-0.5 text-xs text-[#6b7280]">
              {resource.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {resource.week && (
          <span className="rounded bg-[#1f1f1f] px-1.5 py-0.5 font-mono text-[10px] text-[#6b7280]">
            W{resource.week}
          </span>
        )}
        <span
          className="rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
          style={{
            backgroundColor: `${resource.tagColor}15`,
            color: resource.tagColor,
          }}
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
}
