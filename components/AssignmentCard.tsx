"use client";

import { useState } from "react";
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

// ─── Part accordion ─────────────────────────────────────────
function Part({ part }: { part: AssignmentPart }) {
  const [open, setOpen] = useState(false);
  const c = diffColors[part.difficulty] ?? "#6b7280";

  return (
    <div className="rounded-lg border border-[#1f1f1f]/60 bg-[#0d0d0d]/50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 px-3.5 py-3 text-left transition-colors hover:bg-[#141414]/50"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[10px] font-bold"
            style={{ backgroundColor: `${c}15`, color: c }}
          >
            {part.id}
          </span>
          <span className="truncate font-mono text-sm text-[#f9fafb]">
            {part.title}
          </span>
          {part.optional && (
            <span className="shrink-0 rounded bg-[#a78bfa]/10 px-1.5 py-0.5 font-mono text-[9px] uppercase text-[#a78bfa]">
              bonus
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <DiffPill d={part.difficulty} />
          <svg
            className={cn(
              "h-3.5 w-3.5 text-[#4a4a4a] transition-transform duration-200",
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

      {open && (
        <div className="border-t border-[#1f1f1f]/40 px-3.5 py-3 space-y-2.5 animate-fade-in">
          {part.description && (
            <p className="text-[13px] leading-relaxed text-[#9ca3af]">
              {part.description}
            </p>
          )}

          {part.subparts?.map((sp) => (
            <div
              key={sp.id}
              className="rounded-md bg-[#111111]/80 border border-[#1a1a1a] px-3 py-2.5"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-mono text-[10px] text-[#4ade80]">
                  {sp.id}
                </span>
                <span className="font-mono text-[13px] font-medium text-[#e5e7eb]">
                  {sp.title}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-[#9ca3af]">
                {sp.description}
              </p>
              {sp.restriction && (
                <p className="mt-1.5 rounded bg-[#f87171]/[0.05] border border-[#f87171]/10 px-2 py-1.5 font-mono text-[11px] text-[#f87171]/80">
                  ⚠ {sp.restriction}
                </p>
              )}
              <div className="mt-2 flex flex-wrap gap-1">
                {sp.concepts_used.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] text-[#6b7280]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {part.concepts_used && (
            <div className="flex flex-wrap gap-1">
              {part.concepts_used.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] text-[#6b7280]"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Card ──────────────────────────────────────────────
export function AssignmentCard({ assignment }: { assignment: Assignment }) {
  const [tab, setTab] = useState<Tab>("Overview");
  const accent = diffColors[assignment.difficulty] ?? "#6b7280";

  return (
    <div
      id={`assignment-${assignment.id}`}
      className="group overflow-hidden rounded-xl border border-[#1f1f1f]/80 bg-[#111111]/80 backdrop-blur-sm"
    >
      {/* Accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${accent}, ${accent}60, transparent)`,
        }}
      />

      {/* ── Header — always visible ─── */}
      <div className="px-4 pt-5 pb-0 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="font-mono text-xs tracking-widest text-[#4ade80]">
                {assignment.id}
              </span>
              <DiffPill d={assignment.difficulty} />
            </div>
            <h3 className="font-mono text-lg font-semibold text-[#f9fafb] sm:text-xl">
              {assignment.title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="rounded-full border border-[#f87171]/20 bg-[#f87171]/[0.06] px-2 py-1 font-mono text-[11px] text-[#f87171]">
              📅 Due {new Date(assignment.deadline + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
            <span className="rounded-full border border-[#1f1f1f]/60 bg-[#0d0d0d] px-2 py-1 font-mono text-[11px] text-[#6b7280]">
              ⏱ {assignment.estimated_time}
            </span>
            <span className="rounded-full border border-[#1f1f1f]/60 bg-[#0d0d0d] px-2 py-1 font-mono text-[11px] text-[#6b7280]">
              {assignment.runtime}
            </span>
          </div>
        </div>
        <p className="text-sm leading-[1.7] text-[#9ca3af] mb-4">
          {assignment.problem_statement}
        </p>

        {/* ── Tab bar ─── */}
        <div className="flex gap-0 border-b border-[#1f1f1f]/60 -mx-4 px-4 sm:-mx-6 sm:px-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "relative px-3 py-2.5 font-mono text-xs tracking-wide transition-colors duration-200",
                tab === t
                  ? "text-[#f9fafb]"
                  : "text-[#6b7280] hover:text-[#d1d5db]"
              )}
            >
              {t}
              {tab === t && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.4)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab content ─── */}
      <div className="px-4 py-5 sm:px-6 animate-fade-in" key={tab}>
        {/* ── OVERVIEW ─── */}
        {tab === "Overview" && (
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280]">
                What you&apos;ll learn
              </h4>
              <ul className="space-y-1.5">
                {assignment.learning_objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#4ade80]/60" />
                    <span className="text-[13px] leading-relaxed text-[#9ca3af]">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick glance at parts */}
            <div>
              <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280]">
                Structure — {assignment.parts.length} parts
              </h4>
              <div className="flex flex-wrap gap-2">
                {assignment.parts.map((p) => {
                  const c = diffColors[p.difficulty] ?? "#6b7280";
                  return (
                    <button
                      key={p.id}
                      onClick={() => setTab("Parts")}
                      className="flex items-center gap-1.5 rounded-lg border border-[#1f1f1f]/50 bg-[#0d0d0d]/60 px-2.5 py-1.5 transition-colors hover:border-[#2a2a2a] hover:bg-[#141414]"
                    >
                      <span
                        className="font-mono text-[10px] font-bold"
                        style={{ color: c }}
                      >
                        {p.id}
                      </span>
                      <span className="font-mono text-[11px] text-[#9ca3af]">
                        {p.title}
                      </span>
                      {p.optional && (
                        <span className="rounded bg-[#a78bfa]/10 px-1 py-px font-mono text-[8px] uppercase text-[#a78bfa]">
                          bonus
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Run command */}
            <div className="overflow-x-auto rounded-md border border-[#1f1f1f]/60 bg-[#0a0a0a] px-3 py-2">
              <code className="font-mono text-xs text-[#fbbf24] whitespace-nowrap">
                $ {assignment.deliverables.run_command}
              </code>
            </div>
          </div>
        )}

        {/* ── APPROACH ─── */}
        {tab === "Approach" && (
          <div>
            <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280]">
              Suggested approach
            </h4>
            <ol className="space-y-2">
              {assignment.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-[#4ade80] bg-[#4ade80]/10 mt-0.5"
                  >
                    {i + 1}
                  </span>
                  <span className="text-[13px] leading-relaxed text-[#9ca3af]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ── PARTS ─── */}
        {tab === "Parts" && (
          <div className="space-y-2.5">
            {assignment.parts.map((p) => (
              <Part key={p.id} part={p} />
            ))}
          </div>
        )}

        {/* ── RESEARCH ─── */}
        {tab === "Research" && (
          <div className="space-y-4">
            <div>
              <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280]">
                Required — look these up before starting
              </h4>
              <div className="space-y-2">
                {assignment.self_research.required.map((t) => (
                  <div
                    key={t.topic}
                    className="rounded-lg border border-[#60a5fa]/10 bg-[#60a5fa]/[0.03] px-3.5 py-3"
                  >
                    <p className="font-mono text-sm font-semibold text-[#60a5fa] mb-0.5">
                      {t.topic}
                    </p>
                    <p className="text-[13px] leading-relaxed text-[#9ca3af] mb-1.5">
                      {t.why}
                    </p>
                    <p className="rounded bg-[#0a0a0a]/60 px-2 py-1.5 font-mono text-[11px] text-[#6b7280]">
                      💡 {t.hint}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {assignment.self_research.bonus &&
              assignment.self_research.bonus.length > 0 && (
                <div>
                  <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280]">
                    Bonus — for the extra-credit part
                  </h4>
                  <div className="space-y-2">
                    {assignment.self_research.bonus.map((t) => (
                      <div
                        key={t.topic}
                        className="rounded-lg border border-[#a78bfa]/10 bg-[#a78bfa]/[0.03] px-3.5 py-3"
                      >
                        <p className="font-mono text-sm font-semibold text-[#a78bfa] mb-0.5">
                          {t.topic}
                        </p>
                        <p className="text-[13px] leading-relaxed text-[#9ca3af] mb-1.5">
                          {t.why}
                        </p>
                        <p className="rounded bg-[#0a0a0a]/60 px-2 py-1.5 font-mono text-[11px] text-[#6b7280]">
                          💡 {t.hint}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        )}

        {/* ── SUBMIT ─── */}
        {tab === "Submit" && (
          <div className="space-y-4">
            <div className="rounded-lg border border-[#1f1f1f]/60 bg-[#0d0d0d]/50 px-3.5 py-3 space-y-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#6b7280]">
                  Required Files
                </span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {assignment.deliverables.required_files.map((f) => (
                    <code
                      key={f}
                      className="rounded bg-[#1a1a1a] px-2 py-0.5 font-mono text-xs text-[#4ade80]"
                    >
                      {f}
                    </code>
                  ))}
                  {assignment.deliverables.bonus_files
                    ?.filter(
                      (f) =>
                        !assignment.deliverables.required_files.includes(f)
                    )
                    .map((f) => (
                      <code
                        key={f}
                        className="rounded bg-[#1a1a1a] px-2 py-0.5 font-mono text-xs text-[#a78bfa]"
                      >
                        {f}{" "}
                        <span className="text-[9px] text-[#a78bfa]/60">
                          (bonus)
                        </span>
                      </code>
                    ))}
                </div>
              </div>

              <p className="text-[13px] text-[#9ca3af]">
                {assignment.submission.format}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#4ade80]/80">
                ✓ Include in submission
              </span>
              <ul className="mt-1.5 space-y-1">
                {assignment.submission.include_in_submission.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4ade80]/50" />
                    <span className="text-[13px] text-[#9ca3af]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#f87171]/80">
                ✗ Do NOT submit
              </span>
              <ul className="mt-1.5 space-y-1">
                {assignment.submission.do_not_submit.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#f87171]/50" />
                    <span className="text-[13px] text-[#9ca3af]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
