import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources: Templates, Help & Guides, Blog | TWO",
};

export default function ResourcesPage() {
  return (
    <div className="features-frame">
      <section className="rs-hero">
        <p className="micro">Resources</p>
        <h1 className="display">Everything to get<br />the most from TWO.</h1>
        <p>Templates to start faster, guides when you&apos;re stuck, and thoughts on writing along the way.</p>
      </section>

      <div className="rs-grid">
        <a href="/resources/templates" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="8" y1="13" x2="16" y2="13" />
            </svg>
          </div>
          <div className="rs-title">Templates</div>
          <div className="rs-desc">Start fast, every time. Meeting notes, briefs, weekly reviews — ready to fill in.</div>
          <div className="rs-cta">Browse templates →</div>
        </a>

        <a href="/resources/help" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.1 9a2.9 2.9 0 015.7 1c0 1.9-2.8 1.8-2.8 3.7" />
              <line x1="12" y1="17.5" x2="12" y2="17.5" />
            </svg>
          </div>
          <div className="rs-title">Help &amp; Guides</div>
          <div className="rs-desc">Docs on getting the most from TWO — from your first doc to advanced split-view moves.</div>
          <div className="rs-cta">Browse guides →</div>
        </a>

        <a href="/blog" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5V5a2 2 0 012-2h9l5 5v11.5a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
              <path d="M15 3v5h5" />
              <line x1="8" y1="12.5" x2="16" y2="12.5" />
              <line x1="8" y1="16" x2="13" y2="16" />
            </svg>
          </div>
          <div className="rs-title">Blog</div>
          <div className="rs-desc">Thoughts on writing, focus, and the tools we use to think — and what we&apos;re building.</div>
          <div className="rs-cta">Read the blog →</div>
        </a>
      </div>
    </div>
  );
}
