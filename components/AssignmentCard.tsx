"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { Assignment, AssignmentPart } from "@/types";
import { cn } from "@/lib/utils";

// ─── Difficulty colors ──────────────────────────────────────
const diffColors: Record<string, string> = {
  easy: "#4ade80",
  medium: "#60a5fa",
  "medium-hard": "#fbbf24",
  hard: "#f87171",
  challenge: "#a78bfa",
  "slightly tough": "#fb923c",
};

function DiffPill({ d }: { d: string }) {
  const c = diffColors[d] ?? "#6b7280";
  return (
    <span
      className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
      style={{ color: c, backgroundColor: `${c}15` }}
    >
      {d}
    </span>
  );
}

// ─── Tabs ───────────────────────────────────────────────────
const TABS = ["Overview", "Approach", "Parts", "Research", "Submit"] as const;
type Tab = (typeof TABS)[number];

// ─── Smooth collapse wrapper ────────────────────────────────
function Collapse({ open, children }: { open: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(open ? ref.current.scrollHeight : 0);
    }
  }, [open]);

  // Recalculate on content changes
  useEffect(() => {
    if (!open || !ref.current) return;
    const ro = new ResizeObserver(() => {
      if (ref.current) setHeight(ref.current.scrollHeight);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [open]);

  return (
    <div
      style={{ height, opacity: open ? 1 : 0 }}
      className="overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

// ─── Part accordion ─────────────────────────────────────────
function Part({ part }: { part: AssignmentPart }) {
  const [open, setOpen] = useState(false);
  const c = diffColors[part.difficulty] ?? "#6b7280";

  return (
    <div className="rounded-lg border border-[#1f1f1f]/60 bg-[#0d0d0d]/50 transition-colors duration-300 hover:border-[#2a2a2a]/50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left transition-colors duration-200 hover:bg-[#141414]/50 sm:px-3.5 sm:py-3"
      >
        <div className="flex items-center gap-2 min-w-0 sm:gap-2.5">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded font-mono text-[9px] font-bold sm:h-6 sm:w-6 sm:text-[10px]"
            style={{ backgroundColor: `${c}15`, color: c }}
          >
            {part.id}
          </span>
          <span className="truncate font-mono text-[13px] text-[#f9fafb] sm:text-sm">
            {part.title}
          </span>
          {part.optional && (
            <span className="shrink-0 rounded bg-[#a78bfa]/10 px-1.5 py-0.5 font-mono text-[8px] uppercase text-[#a78bfa] sm:text-[9px]">
              bonus
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 shrink-0 sm:gap-2">
          <span className="hidden sm:inline-flex"><DiffPill d={part.difficulty} /></span>
          <svg
            className={cn(
              "h-3.5 w-3.5 text-[#4a4a4a] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </button>

      <Collapse open={open}>
        <div className="border-t border-[#1f1f1f]/40 px-3 py-2.5 space-y-2 sm:px-3.5 sm:py-3 sm:space-y-2.5">
          {part.description && (
            <p className="text-[13px] leading-relaxed text-[#9ca3af]">{part.description}</p>
          )}

          {part.subparts?.map((sp) => (
            <div key={sp.id} className="rounded-md bg-[#111111]/80 border border-[#1a1a1a] px-2.5 py-2 sm:px-3 sm:py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-mono text-[10px] text-[#4ade80]">{sp.id}</span>
                <span className="font-mono text-[12px] font-medium text-[#e5e7eb] sm:text-[13px]">{sp.title}</span>
              </div>
              <p className="text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">{sp.description}</p>
              {sp.restriction && (
                <p className="mt-1.5 rounded bg-[#f87171]/[0.05] border border-[#f87171]/10 px-2 py-1 font-mono text-[10px] text-[#f87171]/80 sm:text-[11px] sm:py-1.5">
                  ⚠ {sp.restriction}
                </p>
              )}
              <div className="mt-1.5 flex flex-wrap gap-1">
                {sp.concepts_used.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#1a1a1a] px-1.5 py-0.5 font-mono text-[9px] text-[#6b7280] sm:px-2 sm:text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {part.concepts_used && (
            <div className="flex flex-wrap gap-1">
              {part.concepts_used.map((tag) => (
                <span key={tag} className="rounded-full bg-[#1a1a1a] px-1.5 py-0.5 font-mono text-[9px] text-[#6b7280] sm:px-2 sm:text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Collapse>
    </div>
  );
}

// ─── Tab content with crossfade ─────────────────────────────
function TabPanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        active
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-2 invisible absolute inset-x-0"
      )}
      aria-hidden={!active}
    >
      {children}
    </div>
  );
}

// ─── Main Card ──────────────────────────────────────────────
export function AssignmentCard({ assignment }: { assignment: Assignment }) {
  const [tab, setTab] = useState<Tab>("Overview");
  const accent = diffColors[assignment.difficulty] ?? "#6b7280";
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view on mobile
  const scrollTabIntoView = useCallback((t: Tab) => {
    setTab(t);
    if (!tabBarRef.current) return;
    const btn = tabBarRef.current.querySelector(`[data-tab="${t}"]`) as HTMLElement;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  return (
    <div
      id={`assignment-${assignment.id}`}
      className="group overflow-hidden rounded-xl border border-[#1f1f1f]/80 bg-[#111111]/80 backdrop-blur-sm"
    >
      {/* Accent line */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}60, transparent)` }}
      />

      {/* ── Header ─── */}
      <div className="px-3.5 pt-4 pb-0 sm:px-6 sm:pt-5">
        {/* Top row */}
        <div className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 sm:gap-2.5">
              <span className="font-mono text-[11px] tracking-widest text-[#4ade80] sm:text-xs">{assignment.id}</span>
              <DiffPill d={assignment.difficulty} />
            </div>
            <h3 className="font-mono text-base font-semibold text-[#f9fafb] sm:text-xl">{assignment.title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="rounded-full border border-[#f87171]/20 bg-[#f87171]/[0.06] px-2 py-0.5 font-mono text-[10px] text-[#f87171] sm:py-1 sm:text-[11px]">
               Due {new Date(assignment.deadline + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
            <span className="rounded-full border border-[#1f1f1f]/60 bg-[#0d0d0d] px-2 py-0.5 font-mono text-[10px] text-[#6b7280] sm:py-1 sm:text-[11px]">
              ⏱ {assignment.estimated_time}
            </span>
            <span className="rounded-full border border-[#1f1f1f]/60 bg-[#0d0d0d] px-2 py-0.5 font-mono text-[10px] text-[#6b7280] sm:py-1 sm:text-[11px]">
              {assignment.runtime}
            </span>
          </div>
        </div>

        <p className="text-[13px] leading-[1.7] text-[#9ca3af] mb-3 sm:text-sm sm:mb-4">{assignment.problem_statement}</p>

        {/* ── Tab bar — horizontally scrollable on mobile ─── */}
        <div
          ref={tabBarRef}
          className="flex gap-0 overflow-x-auto border-b border-[#1f1f1f]/60 -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 scrollbar-none"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              data-tab={t}
              onClick={() => scrollTabIntoView(t)}
              className={cn(
                "relative shrink-0 px-2.5 py-2 font-mono text-[11px] tracking-wide transition-all duration-300 sm:px-3 sm:py-2.5 sm:text-xs",
                tab === t ? "text-[#f9fafb]" : "text-[#6b7280] hover:text-[#d1d5db]"
              )}
            >
              {t}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.4)] transition-all duration-300",
                  tab === t ? "w-5 opacity-100 sm:w-6" : "w-0 opacity-0"
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab content — crossfade ─── */}
      <div className="relative px-3.5 py-4 sm:px-6 sm:py-5">
        {/* OVERVIEW */}
        <TabPanel active={tab === "Overview"}>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b7280] sm:text-[11px]">What you&apos;ll learn</h4>
              <ul className="space-y-1.5">
                {assignment.learning_objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#4ade80]/60" />
                    <span className="text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b7280] sm:text-[11px]">Structure — {assignment.parts.length} parts</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {assignment.parts.map((p) => {
                  const c = diffColors[p.difficulty] ?? "#6b7280";
                  return (
                    <button
                      key={p.id}
                      onClick={() => scrollTabIntoView("Parts")}
                      className="flex items-center gap-1 rounded-lg border border-[#1f1f1f]/50 bg-[#0d0d0d]/60 px-2 py-1 transition-all duration-200 hover:border-[#2a2a2a] hover:bg-[#141414] active:scale-95 sm:gap-1.5 sm:px-2.5 sm:py-1.5"
                    >
                      <span className="font-mono text-[9px] font-bold sm:text-[10px]" style={{ color: c }}>{p.id}</span>
                      <span className="font-mono text-[10px] text-[#9ca3af] sm:text-[11px]">{p.title}</span>
                      {p.optional && (
                        <span className="rounded bg-[#a78bfa]/10 px-1 py-px font-mono text-[7px] uppercase text-[#a78bfa] sm:text-[8px]">bonus</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="overflow-x-auto rounded-md border border-[#1f1f1f]/60 bg-[#0a0a0a] px-2.5 py-1.5 sm:px-3 sm:py-2">
              <code className="font-mono text-[11px] text-[#fbbf24] whitespace-nowrap sm:text-xs">$ {assignment.deliverables.run_command}</code>
            </div>
          </div>
        </TabPanel>

        {/* APPROACH */}
        <TabPanel active={tab === "Approach"}>
          <div>
            <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b7280] sm:text-[11px]">Suggested approach</h4>
            <ol className="space-y-2">
              {assignment.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-bold text-[#4ade80] bg-[#4ade80]/10 mt-0.5 sm:text-[10px]">{i + 1}</span>
                  <span className="text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </TabPanel>

        {/* PARTS */}
        <TabPanel active={tab === "Parts"}>
          <div className="space-y-2 sm:space-y-2.5">
            {assignment.parts.map((p) => (
              <Part key={p.id} part={p} />
            ))}
          </div>
        </TabPanel>

        {/* RESEARCH */}
        <TabPanel active={tab === "Research"}>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b7280] sm:mb-2.5 sm:text-[11px]">Required — look these up first</h4>
              <div className="space-y-2">
                {assignment.self_research.required.map((t) => (
                  <div key={t.topic} className="rounded-lg border border-[#60a5fa]/10 bg-[#60a5fa]/[0.03] px-3 py-2.5 sm:px-3.5 sm:py-3">
                    <p className="font-mono text-[13px] font-semibold text-[#60a5fa] mb-0.5 sm:text-sm">{t.topic}</p>
                    <p className="text-[12px] leading-relaxed text-[#9ca3af] mb-1.5 sm:text-[13px]">{t.why}</p>
                    <p className="rounded bg-[#0a0a0a]/60 px-2 py-1 font-mono text-[10px] text-[#6b7280] sm:py-1.5 sm:text-[11px]"> {t.hint}</p>
                  </div>
                ))}
              </div>
            </div>
            {assignment.self_research.bonus && assignment.self_research.bonus.length > 0 && (
              <div>
                <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b7280] sm:mb-2.5 sm:text-[11px]">Bonus — extra credit</h4>
                <div className="space-y-2">
                  {assignment.self_research.bonus.map((t) => (
                    <div key={t.topic} className="rounded-lg border border-[#a78bfa]/10 bg-[#a78bfa]/[0.03] px-3 py-2.5 sm:px-3.5 sm:py-3">
                      <p className="font-mono text-[13px] font-semibold text-[#a78bfa] mb-0.5 sm:text-sm">{t.topic}</p>
                      <p className="text-[12px] leading-relaxed text-[#9ca3af] mb-1.5 sm:text-[13px]">{t.why}</p>
                      <p className="rounded bg-[#0a0a0a]/60 px-2 py-1 font-mono text-[10px] text-[#6b7280] sm:py-1.5 sm:text-[11px]"> {t.hint}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabPanel>

        {/* SUBMIT */}
        <TabPanel active={tab === "Submit"}>
          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-lg border border-[#1f1f1f]/60 bg-[#0d0d0d]/50 px-3 py-2.5 space-y-2.5 sm:px-3.5 sm:py-3 sm:space-y-3">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#6b7280] sm:text-[10px]">Required Files</span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {assignment.deliverables.required_files.map((f) => (
                    <code key={f} className="rounded bg-[#1a1a1a] px-2 py-0.5 font-mono text-[11px] text-[#4ade80] sm:text-xs">{f}</code>
                  ))}
                  {assignment.deliverables.bonus_files
                    ?.filter((f) => !assignment.deliverables.required_files.includes(f))
                    .map((f) => (
                      <code key={f} className="rounded bg-[#1a1a1a] px-2 py-0.5 font-mono text-[11px] text-[#a78bfa] sm:text-xs">
                        {f} <span className="text-[8px] text-[#a78bfa]/60 sm:text-[9px]">(bonus)</span>
                      </code>
                    ))}
                </div>
              </div>
              <p className="text-[12px] text-[#9ca3af] sm:text-[13px]">{assignment.submission.format}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#4ade80]/80 sm:text-[10px]">✓ Include</span>
              <ul className="mt-1 space-y-1 sm:mt-1.5">
                {assignment.submission.include_in_submission.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4ade80]/50" />
                    <span className="text-[12px] text-[#9ca3af] sm:text-[13px]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#f87171]/80 sm:text-[10px]">✗ Do NOT submit</span>
              <ul className="mt-1 space-y-1 sm:mt-1.5">
                {assignment.submission.do_not_submit.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#f87171]/50" />
                    <span className="text-[12px] text-[#9ca3af] sm:text-[13px]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
