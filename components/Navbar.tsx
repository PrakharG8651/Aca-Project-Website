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
  { href: "/assignments", label: "Assignments" },
  { href: "/modules", label: "Modules" },
  { href: "/resources", label: "Resources" },
  { href: "/cohort", label: "Cohort" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Track scroll for navbar glass intensification
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all",
        mobileOpen ? "duration-200" : "duration-500",
        (scrolled || mobileOpen)
          ? "border-[#1f1f1f]/80 bg-[#0a0a0a]/85 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="group flex shrink-0 items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-[#f9fafb] transition-all duration-300 hover:text-[#4ade80]"
        >
          <span className="relative h-2 w-2 rounded-full bg-[#4ade80]">
            <span className="absolute inset-0 rounded-full bg-[#4ade80] opacity-40 transition-transform duration-500 group-hover:scale-[2.5] group-hover:opacity-0" />
          </span>
          <span className="hidden xs:inline">RAS.DEVCAMP</span>
          <span className="xs:hidden">RAS</span>
        </Link>

        {/* Center nav links — desktop */}
        <nav
          id="nav-links"
          className="hidden items-center gap-0.5 rounded-full border border-[#1f1f1f]/50 bg-[#0d0d0d]/50 px-1 py-1 md:flex"
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
                  "relative rounded-full px-3.5 py-1.5 font-mono text-xs tracking-wide transition-all duration-300",
                  isActive
                    ? "bg-[#161616] text-[#f9fafb] shadow-[0_0_12px_rgba(74,222,128,0.08)]"
                    : "text-[#6b7280] hover:bg-[#111111]/80 hover:text-[#d1d5db]"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: week badge + mobile toggle */}
        <div className="flex items-center gap-2.5">
          <div
            id="nav-week-badge"
            className="hidden items-center gap-2 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/50 px-3 py-1.5 font-mono text-[11px] text-[#6b7280] backdrop-blur-sm sm:flex"
          >
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
              <span className="relative block h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            </span>
            Week {getCurrentWeek()} / {TOTAL_WEEKS}
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300 md:hidden",
              mobileOpen
                ? "border-[#2a2a2a] bg-[#161616] text-[#f9fafb] shadow-[0_0_12px_rgba(74,222,128,0.05)]"
                : "border-[#1f1f1f] text-[#6b7280] hover:border-[#2a2a2a] hover:text-[#f9fafb]"
            )}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative h-4 w-4">
              {/* Top bar */}
              <span
                className={cn(
                  "absolute left-0.5 right-0.5 h-px bg-current transition-all duration-300",
                  mobileOpen
                    ? "top-[7.5px] rotate-45"
                    : "top-1"
                )}
              />
              {/* Middle bar */}
              <span
                className={cn(
                  "absolute left-0.5 right-0.5 top-[7.5px] h-px bg-current transition-all duration-200",
                  mobileOpen ? "scale-x-0 opacity-0" : "opacity-100"
                )}
              />
              {/* Bottom bar */}
              <span
                className={cn(
                  "absolute left-0.5 right-0.5 h-px bg-current transition-all duration-300",
                  mobileOpen
                    ? "top-[7.5px] -rotate-45"
                    : "top-3"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "overflow-hidden border-t bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          mobileOpen ? "max-h-[400px] border-[#1f1f1f]/60 opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <nav className="flex flex-col px-4 py-3 space-y-0.5">
          {navLinks.map(({ href, label }, index) => {
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
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm transition-all duration-300",
                  isActive
                    ? "bg-[#141414] text-[#f9fafb] shadow-[inset_0_0_0_1px_rgba(74,222,128,0.08)]"
                    : "text-[#6b7280] hover:bg-[#111111] hover:text-[#f9fafb]"
                )}
                style={{
                  animationDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile week badge */}
        <div className="border-t border-[#1f1f1f]/40 px-4 py-3 sm:hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/60 bg-[#111111]/50 px-3 py-1.5 font-mono text-[11px] text-[#6b7280]">
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-30" />
              <span className="relative block h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            </span>
            Week {getCurrentWeek()} / {TOTAL_WEEKS}
          </div>
        </div>
      </div>
    </header>
  );
}
