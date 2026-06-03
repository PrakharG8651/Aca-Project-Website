import type { Announcement } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AnnouncementCardProps {
  announcement: Announcement;
  className?: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const variants = {
  high: {
    bannerBg: "linear-gradient(180deg, #12103a 0%, #0a0a0a 100%)",
    bannerBorder: "rgba(124, 106, 212, 0.2)",
    tagBorder: "rgba(124, 106, 212, 0.3)",
    tagColor: "#a78bfa",
    tagBg: "rgba(124, 106, 212, 0.1)",
    badgeColor: "#d8b4fe",
    badgeBg: "rgba(124, 106, 212, 0.15)",
    badgeBorder: "rgba(124, 106, 212, 0.3)",
    dotColor: "#d8b4fe",
    titleColor: "#ffffff",
    goalBorderLeft: "#2a245a",
    btnOpenBg: "transparent",
    btnOpenHover: "rgba(124, 106, 212, 0.1)",
    bgTextOpacity: 0.03,
    bgTextColor: "#7c6ad4",
    accent: "#7c6ad4"
  },
  normal: {
    bannerBg: "linear-gradient(180deg, #0a1a1a 0%, #081212 100%)",
    bannerBorder: "#1a3030",
    tagBorder: "#1a3535",
    tagColor: "#5a9e9e",
    tagBg: "rgba(40,120,120,0.12)",
    badgeColor: "#5eead4",
    badgeBg: "rgba(45,212,191,0.1)",
    badgeBorder: "rgba(45,212,191,0.25)",
    dotColor: "#5eead4",
    titleColor: "#e4fafa",
    goalBorderLeft: "#1a3535",
    btnOpenBg: "#2a9090",
    btnOpenHover: "#35aaaa",
    bgTextOpacity: 0.05,
    bgTextColor: "rgb(40,180,180)",
    accent: "#5eead4"
  },
  low: {
    bannerBg: "linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)",
    bannerBorder: "#1a1a1a",
    tagBorder: "#202020",
    tagColor: "#505050",
    tagBg: "rgba(60,60,60,0.1)",
    badgeColor: "#6b7280",
    badgeBg: "rgba(100,100,100,0.1)",
    badgeBorder: "rgba(100,100,100,0.2)",
    dotColor: "#6b7280",
    titleColor: "#d4d4d4",
    goalBorderLeft: "#222222",
    btnOpenBg: "#3a3a3a",
    btnOpenHover: "#4a4a4a",
    bgTextOpacity: 0.03,
    bgTextColor: "rgb(150,150,150)",
    accent: "#6b7280"
  }
};

export function AnnouncementCard({
  announcement,
  className,
}: AnnouncementCardProps) {
  const v = variants[announcement.priority] || variants.low;

  return (
    <article
      id={`announcement-${announcement.id}`}
      style={{
        background: v.bannerBg,
        borderColor: v.bannerBorder,
        '--hover-bg': v.btnOpenHover,
      } as React.CSSProperties}
      className={cn(
        "group relative overflow-hidden rounded-2xl border flex flex-col p-6 sm:p-7 gap-5",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ",
        className
      )}
    >
      {/* Huge background text */}
      <div 
        className="absolute -right-4 -top-8 pointer-events-none select-none font-mono font-bold leading-none tracking-tighter z-0"
        style={{ 
          fontSize: '10rem', 
          color: v.bgTextColor, 
          opacity: v.bgTextOpacity,
        }}>
        {announcement.id.split('-')[1] || announcement.id}
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {/* Tags & Badge */}
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-2">
            {announcement.tags.map(tag => (
              <span 
                key={tag} 
                style={{ backgroundColor: v.tagBg, borderColor: v.tagBorder, color: v.tagColor }} 
                className="border px-3 py-1 rounded-full text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div 
            style={{ backgroundColor: v.badgeBg, borderColor: v.badgeBorder, color: v.badgeColor }} 
            className="border px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider flex items-center gap-2 font-semibold"
          >
            <div style={{ backgroundColor: v.dotColor }} className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" />
            {announcement.priority.toUpperCase()}
          </div>
        </div>

        {/* Title */}
        <h3 style={{ color: v.titleColor }} className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mt-2">
          {announcement.title}
        </h3>

        {/* Author Meta */}
        <div className="flex items-center gap-3 text-[13px] text-[#888] font-mono mt-1">
          <div 
            style={{ backgroundColor: v.badgeBg, color: v.badgeColor }} 
            className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px]"
          >
            {announcement.author.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-[#bbb]">{announcement.author}</span>
          <span className="opacity-40">·</span>
          <span>{announcement.role}</span>
          <span className="opacity-40">·</span>
          <span>{formatDate(announcement.date)}</span>
          <span className="opacity-40">·</span>
          <span>{announcement.time}</span>
        </div>
      </div>

      <div className="w-full h-px bg-white/5 my-2 relative z-10" />

      {/* Objective */}
      <div className="relative z-10">
        <div className="text-[10px] font-mono tracking-[0.2em] text-[#666] mb-3 uppercase font-medium">Objective</div>
        <div style={{ borderLeftColor: v.goalBorderLeft }} className="pl-4 border-l-[3px] text-[#ccc] text-[15px] leading-relaxed">
          {announcement.goal}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-[#999] text-[15px] leading-relaxed mt-2 whitespace-pre-wrap">
        {announcement.content}
      </div>

      <div className="w-full h-px bg-white/5 my-2 relative z-10" />

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-1">
        <div className="font-mono text-sm text-[#555]">
          Update #{announcement.id}
        </div>
        <div className="flex gap-3">
          <Link 
            href="/modules"
            style={{ backgroundColor: v.btnOpenBg }}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-white text-[13px] font-medium transition-colors flex items-center gap-2 group hover:bg-[var(--hover-bg)]"
          >
            Open
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
