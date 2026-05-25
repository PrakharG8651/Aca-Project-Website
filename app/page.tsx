import { announcements } from "@/data/announcements";
import { AnnouncementCard } from "@/components/AnnouncementCard";

export default function AnnouncementsPage() {
  return (
    <div id="page-announcements" className="animate-fade-in-up">
      <div className="mb-8 sm:mb-10">
        <h1 className="font-mono text-xl font-semibold text-[#f9fafb] sm:text-2xl">
          Announcements
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          Latest updates from instructors and staff.
        </p>
        {announcements.length > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#111111]/80 border border-[#1f1f1f]/60 px-3 py-1.5 font-mono text-xs text-[#9ca3af] backdrop-blur-sm">
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
              <span className="relative block h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            </span>
            {announcements.length} update{announcements.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {announcements.length > 0 ? (
        <div className="space-y-5 stagger-children">
          {announcements.map((a) => (
            <AnnouncementCard key={a.id} announcement={a} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#1f1f1f]/60 py-16 animate-fade-in">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]">
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
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
              />
            </svg>
          </div>
          <p className="font-mono text-sm text-[#6b7280]">
            No announcements yet
          </p>
          <p className="mt-1 text-xs text-[#4a4a4a]">
            Check back after the first session.
          </p>
        </div>
      )}
    </div>
  );
}
