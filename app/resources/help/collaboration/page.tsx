import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaboration | TWO Help",
};

const ARTICLES: { title: string; desc: string; href: string }[] = [
  {
    title: "Shared workspaces",
    desc: "Invite teammates and work in the same space together.",
    href: "/resources/help/collaboration/shared-workspaces",
  },
  {
    title: "Activity",
    desc: "See what's changed across your docs and who changed it.",
    href: "/resources/help/collaboration/activity",
  },
];

export default function CollaborationCategoryPage() {
  return (
    <div className="features-frame">
      <div className="hcat-back">
        <a href="/resources/help">← Help Center</a>
      </div>

      <section className="hcat-header">
        <div className="hc-cat-mark" style={{ background: "var(--indigo)" }} />
        <p className="micro">Collaboration</p>
        <h1 className="display">Working together in TWO.</h1>
        <p>Shared workspaces and staying on top of what&apos;s changed.</p>
      </section>

      <div className="hcat-list">
        {ARTICLES.map((a) => (
          <a href={a.href} className="hcat-row" key={a.title}>
            <div>
              <p className="hcat-row-title">{a.title}</p>
              <p className="hcat-row-desc">{a.desc}</p>
            </div>
            <span className="hcat-row-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
