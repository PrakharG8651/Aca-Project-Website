"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { modules } from "@/data/modules";
import type { WeekStatus } from "@/types";

const statusDot: Record<WeekStatus, string> = {
  done: "bg-[#4ade80]",
  active: "bg-[#4ade80]",
  locked: "bg-[#2a2a2a]",
};

const statusLabel: Record<WeekStatus, string> = {
  done: "completed",
  active: "current",
  locked: "locked",
};

function WeekList() {
  const pathname = usePathname();

  return (
    <div className="space-y-0.5">
      {modules.map((mod) => {
        const isCurrentPage =
          pathname === "/modules" || pathname === `/modules/${mod.week}`;

        return (
          <Link
            key={mod.id}
            href="/modules"
            id={`sidebar-week-${mod.week}`}
            className={cn(
              "group flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300",
              isCurrentPage && mod.status === "active"
                ? "bg-[#4ade80]/[0.06] shadow-[inset_0_0_0_1px_rgba(74,222,128,0.08)]"
                : "hover:bg-[#141414]"
            )}
          >
            <span className="relative">
              <span
                className={cn(
                  "block h-1.5 w-1.5 rounded-full transition-all duration-300",
                  statusDot[mod.status]
                )}
              />
              {mod.status === "active" && (
                <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
              )}
            </span>
            <span
              className={cn(
                "font-mono text-xs transition-all duration-300",
                mod.status === "locked"
                  ? "text-[#3a3a3a]"
                  : mod.status === "active"
                    ? "text-[#f9fafb]"
                    : "text-[#6b7280] group-hover:text-[#9ca3af]"
              )}
            >
              W{mod.week}
            </span>
            <span
              className={cn(
                "ml-auto font-mono text-[10px] transition-all duration-300",
                mod.status === "locked"
                  ? "text-[#2a2a2a]"
                  : mod.status === "active"
                    ? "text-[#4ade80]"
                    : "text-[#4a4a4a] group-hover:text-[#6b7280]"
              )}
            >
              {statusLabel[mod.status]}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function ProgressBar() {
  const doneCount = modules.filter((m) => m.status === "done").length;
  const pct = (doneCount / 10) * 100;

  return (
    <div className="mt-6 border-t border-[#1f1f1f]/60 pt-4">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#6b7280]">
          Completion
        </span>
        <span className="font-mono text-[10px] tabular-nums text-[#6b7280]">
          {doneCount}/10
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1a1a1a]">
        <div
          className="progress-glow h-full rounded-full bg-gradient-to-r from-[#4ade80] to-[#22d3ee] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      {/* Percentage label */}
      <div className="mt-1.5 text-right">
        <span className="font-mono text-[9px] tabular-nums text-[#4a4a4a]">
          {Math.round(pct)}%
        </span>
      </div>
    </div>
  );
}

/** Desktop sidebar: fixed column on the left */
export function DesktopSidebar() {
  return (
    <aside
      id="week-sidebar"
      className="w-[240px] shrink-0 border-r border-[#1f1f1f]/50 pr-6"
    >
      <div className="sticky top-[82px]">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#6b7280]">
          Progress Tracker
        </h2>
        <WeekList />
        <ProgressBar />
      </div>
    </aside>
  );
}

/** Responsive wrapper: renders the right sidebar for the viewport */
export function Sidebar() {
  return (
    <>
      {/* Desktop: visible at lg and up */}
      <div className="hidden lg:block">
        <DesktopSidebar />
      </div>
      {/* Mobile/Tablet: visible below lg */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </>
  );
}

/** Mobile/Tablet: collapsible card above content */
export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const doneCount = modules.filter((m) => m.status === "done").length;

  return (
    <div className="mb-6">
      <button
        id="mobile-sidebar-toggle"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300",
          open
            ? "border-[#2a2a2a] bg-[#131313] shadow-[0_0_20px_rgba(74,222,128,0.03)]"
            : "border-[#1f1f1f] bg-[#111111] hover:border-[#2a2a2a] hover:shadow-[0_0_20px_rgba(74,222,128,0.03)]"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
            Progress
          </span>
          <span className="font-mono text-[10px] text-[#4ade80]">
            {doneCount}/10
          </span>
          {/* Inline mini progress bar */}
          <div className="hidden h-1 w-20 overflow-hidden rounded-full bg-[#1a1a1a] sm:block">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4ade80] to-[#22d3ee] transition-all duration-700"
              style={{ width: `${(doneCount / 10) * 100}%` }}
            />
          </div>
        </div>
        <svg
          className={cn(
            "h-4 w-4 text-[#6b7280] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open && "rotate-180 text-[#9ca3af]"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open
            ? "mt-2 max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="rounded-xl border border-[#1f1f1f]/60 bg-[#111111]/70 px-4 py-4 backdrop-blur-sm">
          <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b7280]">
            Progress Tracker
          </h2>
          <WeekList />
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
