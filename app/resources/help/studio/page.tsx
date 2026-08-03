import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | TWO Help",
};

const ARTICLES: { title: string; desc: string; href: string }[] = [
  {
    title: "Wall",
    desc: "Pin docs, notes, and images to a bounded board.",
    href: "/resources/help/studio/wall",
  },
  {
    title: "Canvas",
    desc: "An infinite pan-and-zoom surface for freeform thinking.",
    href: "/resources/help/studio/canvas",
  },
];

export default function StudioCategoryPage() {
  return (
    <div className="features-frame">
      <div className="hcat-back">
        <a href="/resources/help">← Help Center</a>
      </div>

      <section className="hcat-header">
        <div className="hc-cat-mark" style={{ background: "var(--clay)" }} />
        <p className="micro">Studio</p>
        <h1 className="display">Freeform thinking in TWO.</h1>
        <p>Wall and Canvas — two ways to pin, sketch, and connect ideas.</p>
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
