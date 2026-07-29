import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Editor User Manual | TWO Help",
};

const ARTICLES: { title: string; desc: string; href: string }[] = [
  {
    title: "Formatting",
    desc: "Headers, bold, lists, code blocks — everything the editor supports.",
    href: "/resources/help/docs-editor/formatting",
  },
];

export default function DocsEditorCategoryPage() {
  return (
    <div className="features-frame">
      <div className="hcat-back">
        <a href="/resources/help">← Help Center</a>
      </div>

      <section className="hcat-header">
        <div className="hc-cat-mark" style={{ background: "var(--clay)" }} />
        <p className="micro">Docs &amp; Editor</p>
        <h1 className="display">Writing and formatting in TWO.</h1>
        <p>Everything about the editor — headers, links, code blocks, and more.</p>
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
