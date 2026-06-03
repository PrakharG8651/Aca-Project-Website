import { announcements } from "@/data/announcements";
import Link from "next/link";
import { AnnouncementCard } from "@/components/AnnouncementCard";


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
          <h2 className="feed-section__title">Announcements</h2>
          <Link href="/modules" className="feed-section__link">
            View All →
          </Link>
        </div>

        <div className="feed-grid">
          {announcements.map((a) => (
            <AnnouncementCard key={a.id} announcement={a} />
          ))}
        </div>
      </section>
    </div>
  );
}