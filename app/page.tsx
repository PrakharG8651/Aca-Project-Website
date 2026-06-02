import { announcements } from "@/data/announcements";
import Link from "next/link";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function FrontPage() {
  return (
    <div id="page-front" className="editorial-front">
      {/* ═══ HERO — GIF with title overlaid on the right ═══ */}
      <section className="hero">
        <div className="hero__media">
          <img
            src="/assets/art.gif"
            alt="Course visual"
            className="hero__img"
            draggable={false}
          />
          <div className="hero__fade" />
          <div className="hero__fade-right" />
        </div>

        <div className="hero__content">
          <span className="hero__tag">RAS.DEVCAMP — 2026</span>
          <h1 className="hero__title">
            Build,<br />
            Ship,<br />
            Run&nbsp;Systems
          </h1>
          <p className="hero__sub">
            10-week full-stack engineering bootcamp.
          </p>
        </div>
      </section>

      {/* ═══ FEED — Airbnb-style cards ═══ */}
      <section className="feed-section">
        <div className="feed-section__header">
          <h2 className="feed-section__title">Latest Dispatches</h2>
          <Link href="/modules" className="feed-section__link">
            View All →
          </Link>
        </div>

        <div className="feed-grid">
          {announcements.map((a) => (
            <article key={a.id} className="elegant-card">
              {/* Fake image block for aesthetic balance */}
              <div className={`elegant-card__top ${a.priority === "high" ? "elegant-card__top--urgent" : ""}`}>
                <div className="elegant-card__top-tags">
                  {a.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="elegant-card__pill">{tag}</span>
                  ))}
                </div>
                {a.priority === "high" && (
                  <div className="elegant-card__star">★ Urgent</div>
                )}
              </div>
              
              <div className="elegant-card__body">
                <div className="elegant-card__title-row">
                  <h3 className="elegant-card__title">{a.title}</h3>
                  <span className="elegant-card__outline-pill">Read</span>
                </div>
                
                <p className="elegant-card__meta">
                  {formatDate(a.date)} • {a.author}
                </p>
                
                <p className="elegant-card__desc">
                  {a.goal}
                </p>
                
                <div className="elegant-card__footer">
                  <span className="elegant-card__id-label">Update #{a.id}</span>
                  <button className="elegant-card__action">
                    Open <span className="elegant-card__action-icon">↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}