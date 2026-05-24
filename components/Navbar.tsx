"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { modules } from "@/data/modules";

const TOTAL_WEEKS = 10;

function getCurrentWeek(): number {
  const activeModule = modules
    .filter((m) => m.status === "active")
    .sort((a, b) => b.week - a.week)[0];
  if (activeModule) return activeModule.week;

  const doneModule = modules
    .filter((m) => m.status === "done")
    .sort((a, b) => b.week - a.week)[0];
  return doneModule ? doneModule.week : 1;
}

const navLinks = [
  { href: "/", label: "Announcements" },
  { href: "/modules", label: "Modules" },
  { href: "/resources", label: "Resources" },
  { href: "/cohort", label: "Cohort" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="main-navbar"
      className="fixed top-0 right-0 left-0 z-50 border-b border-[#1f1f1f] bg-[#0a0a0a]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="flex shrink-0 items-center gap-2 font-mono text-sm font-semibold tracking-tight text-[#f9fafb] transition-colors hover:text-[#4ade80]"
        >
          <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
          <span className="hidden xs:inline">RAS.DEVCAMP</span>
          <span className="xs:hidden">RAS</span>
        </Link>

        {/* Center nav links — desktop */}
        <nav
          id="nav-links"
          className="hidden items-center gap-0.5 md:flex"
        >
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                id={`nav-link-${label.toLowerCase()}`}
                className={cn(
                  "relative rounded-md px-3 py-1.5 font-mono text-xs tracking-wide transition-colors",
                  isActive
                    ? "text-[#f9fafb]"
                    : "text-[#6b7280] hover:bg-[#111111] hover:text-[#f9fafb]"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-[#4ade80]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: week badge + mobile toggle */}
        <div className="flex items-center gap-2">
          <div
            id="nav-week-badge"
            className="hidden items-center gap-1.5 rounded border border-[#1f1f1f] bg-[#111111] px-2.5 py-1 font-mono text-[11px] text-[#6b7280] sm:flex"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
            Week {getCurrentWeek()} / {TOTAL_WEEKS}
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded border border-[#1f1f1f] transition-colors md:hidden",
              mobileOpen
                ? "bg-[#111111] text-[#f9fafb]"
                : "text-[#6b7280] hover:text-[#f9fafb]"
            )}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-[#1f1f1f] bg-[#0a0a0a] transition-all duration-200 ease-in-out md:hidden",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <nav className="flex flex-col px-4 py-3 space-y-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                id={`mobile-link-${label.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 font-mono text-sm transition-colors",
                  isActive
                    ? "bg-[#111111] text-[#f9fafb]"
                    : "text-[#6b7280] hover:bg-[#111111] hover:text-[#f9fafb]"
                )}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile week badge */}
        <div className="border-t border-[#1f1f1f] px-4 py-3 sm:hidden">
          <div className="inline-flex items-center gap-1.5 rounded border border-[#1f1f1f] bg-[#111111] px-2.5 py-1 font-mono text-[11px] text-[#6b7280]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
            Week {getCurrentWeek()} / {TOTAL_WEEKS}
          </div>
        </div>
      </div>
    </header>
  );
}
