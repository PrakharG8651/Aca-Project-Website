"use client";

import { useState, useMemo } from "react";
import { getUniqueCohortMembers } from "@/data/cohort";

const members = getUniqueCohortMembers();

// Generate consistent color from name for avatar
function nameToColor(name: string): string {
  const colors = [
    "#4ade80", "#60a5fa", "#f472b6", "#a78bfa",
    "#fbbf24", "#22d3ee", "#fb923c", "#34d399",
    "#818cf8", "#e879f9", "#38bdf8", "#f87171",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CohortPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"sno" | "name" | "roll">("sno");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let list = members.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.rollNumber.includes(q)
    );

    if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "roll") {
      list = [...list].sort((a, b) => a.rollNumber.localeCompare(b.rollNumber));
    }

    return list;
  }, [search, sortBy]);

  return (
    <div id="page-cohort" className="animate-fade-in-up">
      {/* ── Header ────────────────────────────────── */}
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 24,
            fontWeight: 600,
            color: "#f9fafb",
            marginBottom: 8,
          }}
        >
          Cohort
        </h1>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "#9ca3af",
            maxWidth: 520,
          }}
        >
          All students enrolled in the RAS.DEVCAMP 2026 bootcamp.
        </p>
      </div>

      {/* ── Stats Row ─────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 12,
          marginBottom: 28,
        }}
      >
        {[
          {
            label: "Total Students",
            value: members.length,
            color: "#4ade80",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            ),
          },
          {
            label: "Y24 Batch",
            value: members.filter((m) => m.rollNumber.startsWith("240") || m.rollNumber.startsWith("241")).length,
            color: "#60a5fa",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
            ),
          },
          {
            label: "Y25 Batch",
            value: members.filter((m) => m.rollNumber.startsWith("250") || m.rollNumber.startsWith("251")).length,
            color: "#a78bfa",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
            ),
          },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: 12,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              transition: "all 0.3s ease",
            }}
            className="card-glow"
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `${stat.color}10`,
                border: `1px solid ${stat.color}18`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {stat.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: 2,
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Controls Row ──────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* Search */}
        <div
          style={{
            flex: "1 1 240px",
            position: "relative",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            id="cohort-search"
            type="text"
            placeholder="Search by name or roll number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              height: 40,
              paddingLeft: 36,
              paddingRight: 14,
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: 10,
              color: "#f9fafb",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              outline: "none",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#4ade8040";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(74,222,128,0.06)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Sort buttons */}
        <div
          style={{
            display: "flex",
            gap: 2,
            background: "#111111",
            border: "1px solid #1f1f1f",
            borderRadius: 10,
            padding: 3,
          }}
        >
          {(
            [
              { key: "sno", label: "#" },
              { key: "name", label: "A-Z" },
              { key: "roll", label: "Roll" },
            ] as const
          ).map((btn) => (
            <button
              key={btn.key}
              id={`sort-${btn.key}`}
              onClick={() => setSortBy(btn.key)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                padding: "6px 14px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background:
                  sortBy === btn.key ? "#1f1f1f" : "transparent",
                color:
                  sortBy === btn.key ? "#f9fafb" : "#6b7280",
                boxShadow:
                  sortBy === btn.key
                    ? "0 0 8px rgba(74,222,128,0.05)"
                    : "none",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#4a4a4a",
            marginLeft: "auto",
          }}
        >
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* ── Student Grid ──────────────────────────── */}
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 10,
          }}
          className="stagger-children"
        >
          {filtered.map((m) => {
            const color = nameToColor(m.name);
            return (
              <div
                key={`${m.rollNumber}-${m.sno}`}
                id={`member-${m.rollNumber}`}
                className="card-glow"
                style={{
                  background: "#111111",
                  border: "1px solid #1f1f1f",
                  borderRadius: 14,
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1f1f1f";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: `${color}12`,
                    border: `1px solid ${color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: color,
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {getInitials(m.name)}
                </div>

                {/* Info */}
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#f9fafb",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: 1.3,
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#6b7280",
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span>{m.rollNumber}</span>
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: "#333",
                        display: "inline-block",
                      }}
                    />
                    <span style={{ color: "#4a4a4a" }}>
                      {formatDate(m.registeredAt)}
                    </span>
                  </div>
                </div>

                {/* Serial number badge */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#4a4a4a",
                    background: "#0d0d0d",
                    border: "1px solid #1a1a1a",
                    borderRadius: 8,
                    padding: "3px 8px",
                    flexShrink: 0,
                  }}
                >
                  #{String(m.sno).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ── Empty / No results state ────────────── */
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 20px",
            borderRadius: 16,
            border: "1px dashed #1f1f1f",
          }}
          className="animate-fade-in"
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              color: "#6b7280",
            }}
          >
            No students found
          </p>
          <p style={{ fontSize: 12, color: "#4a4a4a", marginTop: 4 }}>
            Try adjusting your search query.
          </p>
        </div>
      )}
    </div>
  );
}
