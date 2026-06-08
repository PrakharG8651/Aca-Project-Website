import { announcements } from "@/data/announcements";
import Link from "next/link";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";


export default function FrontPage() {
  return (
    <div id="page-front" className="editorial-front">
      {/* ═══ HERO — GIF with title overlaid on the right ═══ */}
      <section className="hero">
        <div className="hero__media">
          <img
            src="/assets/art4.gif"
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
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Link href="/modules" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-foreground text-background font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/20">
              Start Learning
            </Link>
            <Link href="/roadmap" className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border/50 bg-background/50 backdrop-blur-md font-medium transition-all duration-300 hover:bg-secondary/80 hover:border-border hover:scale-105">
              View Roadmap
            </Link>
          </div>
          
          <div className="hero__mobile-scroll">
            <div className="scroll-indicator-pill">
              <div className="scroll-indicator-dot"></div>
            </div>
          </div>
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

      {/* ═══ FOOTER ═══ */}
      <footer className="front-footer">
        <div className="front-footer__content">
          <div className="front-footer__socials">
            <a href="https://github.com/ujjwalPrakash-spike" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-prakash-036873336/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/ujjwal_prakash_0/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              Instagram
            </a>
            <a href="https://ujjwalprakashdev.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
              Portfolio
            </a>
          </div>
          <div className="front-footer__bottom">
            <p className="front-footer__copy">© 2026 Ujjwal Prakash. All rights reserved.</p>
            <p className="front-footer__disclaimer">Background art © Studio Ghibli. Not my property.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}