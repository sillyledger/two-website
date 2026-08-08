import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product: Split View, Live Sync & Shared Workspaces | TWO",
};

export default function ProductPage() {
  return (
    <div className="features-frame">
      <section className="rs-hero">
        <p className="micro">Product</p>
        <h1 className="display">Everything you need.<br />Nothing you don&apos;t.</h1>
        <p>TWO is built around how you actually think and write — focused, fast, and always in sync.</p>
      </section>

      <div className="rs-grid">
        <a href="/product/features/split-view" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="rs-title">Split View</div>
          <div className="rs-desc">Two docs, one screen. Drag to resize, reference and write at the same time.</div>
          <div className="rs-cta">See how it works →</div>
        </a>

        <a href="/product/features/live-sync" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0115-6.7M21 12a9 9 0 01-15 6.7" />
              <path d="M18 3v4h-4M6 21v-4h4" />
            </svg>
          </div>
          <div className="rs-title">Live Sync</div>
          <div className="rs-desc">Every device, always current. Changes appear instantly — no manual saves, no conflicts.</div>
          <div className="rs-cta">See how it works →</div>
        </a>

        <a href="/product/features/shared-workspaces" className="rs-card">
          <div className="rs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <div className="rs-title">Shared Workspaces</div>
          <div className="rs-desc">Bring people in, when you want it. Invite your team and edit together in real time.</div>
          <div className="rs-cta">See how it works →</div>
        </a>
      </div>

      <p style={{ textAlign: "center", marginTop: "-70px", marginBottom: "100px" }}>
        <a href="/product/features" style={{ color: "var(--indigo)", fontSize: "13px", fontWeight: 500 }}>
          See all features →
        </a>
      </p>
    </div>
  );
}
