import type { Announcement } from "@/types";
import { cn } from "@/lib/utils";

interface AnnouncementCardProps {
  announcement: Announcement;
  className?: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

export function AnnouncementCard({
  announcement,
  className,
}: AnnouncementCardProps) {
  const accentColor =
    announcement.priority === "high"
      ? "#f87171"
      : announcement.priority === "normal"
        ? "#4ade80"
        : "#6b7280";

  return (
    <article
      id={`announcement-${announcement.id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#111111] transition-all duration-300 hover:border-[#2a2a2a] hover:shadow-[0_0_30px_rgba(74,222,128,0.03)]",
        className
      )}
    >
      {/* Accent top line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, ${accentColor}40, transparent)`,
        }}
      />

      <div className="p-4 sm:p-6 lg:p-7">
        {/* Header row: priority + timestamp */}
        <div className="mb-4 flex flex-wrap items-center gap-2.5 sm:mb-5">
          {announcement.priority === "high" && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-red-400">
              <span className="h-1 w-1 animate-pulse rounded-full bg-red-400" />
              urgent
            </span>
          )}
          <div className="flex items-center gap-2 font-mono text-xs text-[#6b7280]">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span>{formatDate(announcement.date)}</span>
            <span className="text-[#2a2a2a]">·</span>
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>{formatTime(announcement.time)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-mono text-lg font-semibold leading-snug text-[#f9fafb] transition-colors group-hover:text-[#4ade80] sm:text-xl">
          {announcement.title}
        </h3>

        {/* Goal callout */}
        <div className="mb-5 flex items-start gap-3 rounded-lg bg-[#4ade80]/[0.04] px-4 py-3.5 border border-[#4ade80]/10">
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-[#4ade80]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#4ade80]/80">
              Goal
            </span>
            <p className="mt-1 text-sm leading-relaxed text-[#d1d5db] sm:text-[15px]">
              {announcement.goal}
            </p>
          </div>
        </div>

        {/* Description body */}
        <p className="mb-5 text-sm leading-[1.8] text-[#9ca3af] sm:text-[15px] sm:mb-6">
          {announcement.content}
        </p>

        {/* Footer: author + tags */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1f1f1f] pt-4">
          <div className="flex items-center gap-2.5">
            {/* Author avatar */}
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold"
              style={{
                backgroundColor: `${accentColor}15`,
                color: accentColor,
              }}
            >
              UP
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-[#f9fafb]">
                {announcement.author}
              </span>
              <span className="font-mono text-[10px] text-[#4a4a4a]">
                {announcement.role}
              </span>
            </div>
          </div>

          {announcement.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {announcement.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] text-[#4a4a4a] transition-colors group-hover:text-[#6b7280]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
