import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions: TWO for Creatives, Solo Operators & Teams",
};

export default function SolutionsPage() {
  return (
    <div className="features-frame">
      <section className="rs-hero">
        <p className="micro">Solutions</p>
        <h1 className="display">Built for how<br />you actually work.</h1>
        <p>The same fast, minimal docs editor — shaped around three different ways of working.</p>
      </section>

      <div className="rs-grid">
        <a href="/solutions/creatives" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.83 2.83 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </div>
          <div className="rs-title">For Creatives</div>
          <div className="rs-desc">A studio wall, built into your docs. Briefs, references, and drafts kept together the way your work actually happens.</div>
          <div className="rs-cta">See how it works →</div>
        </a>

        <a href="/solutions/solo" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-1a8 8 0 0116 0v1" />
            </svg>
          </div>
          <div className="rs-title">For Solo Operators</div>
          <div className="rs-desc">One document, fully yours. Built for founders, consultants, and freelancers — nothing to manage but the work.</div>
          <div className="rs-cta">See how it works →</div>
        </a>

        <a href="/solutions/teams" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3.2" />
              <circle cx="17" cy="9" r="2.6" />
              <path d="M3 20v-1a6 6 0 0112 0v1" />
              <path d="M15 14.5a4.5 4.5 0 014.5 4.5v1" />
            </svg>
          </div>
          <div className="rs-title">For Small Teams</div>
          <div className="rs-desc">A shared doc your whole team actually opens. Real-time, simple enough that nobody needs a walkthrough.</div>
          <div className="rs-cta">See how it works →</div>
        </a>
      </div>
    </div>
  );
}
