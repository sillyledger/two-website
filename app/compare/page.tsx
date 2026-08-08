import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare TWO vs Notion, Apple Notes, Bear & Obsidian",
};

export default function ComparePage() {
  return (
    <div className="features-frame">
      <section className="rs-hero">
        <p className="micro">Comparisons</p>
        <h1 className="display">See how TWO stacks up.</h1>
        <p>A closer look at how TWO compares to the tools you might be using today.</p>
      </section>

      <div className="rs-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <a href="/compare/notion" className="rs-card">
          <div className="rs-title">TWO vs Notion</div>
          <div className="rs-desc">One is a writing app. The other is a database that also lets you write. They&apos;re not the same thing.</div>
          <div className="rs-cta">Compare →</div>
        </a>

        <a href="/compare/apple-notes" className="rs-card">
          <div className="rs-title">TWO vs Apple Notes</div>
          <div className="rs-desc">Apple Notes is fast and free. But it&apos;s built for quick captures, not serious writing. TWO is.</div>
          <div className="rs-cta">Compare →</div>
        </a>

        <a href="/compare/bear" className="rs-card">
          <div className="rs-title">TWO vs Bear</div>
          <div className="rs-desc">Bear is a beautiful Markdown editor for Apple devices. TWO works everywhere — no Markdown required.</div>
          <div className="rs-cta">Compare →</div>
        </a>

        <a href="/compare/obsidian" className="rs-card">
          <div className="rs-title">TWO vs Obsidian</div>
          <div className="rs-desc">Obsidian is a powerful knowledge base for power users. TWO is for people who want to write, not configure a system.</div>
          <div className="rs-cta">Compare →</div>
        </a>
      </div>
    </div>
  );
}
