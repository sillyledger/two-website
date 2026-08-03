import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizing Your Work | TWO Help",
};

const ARTICLES: { title: string; desc: string; href: string }[] = [
  {
    title: "Folders",
    desc: "Create, pin, and nest folders to keep docs organized.",
    href: "/resources/help/organizing/folders",
  },
  {
    title: "Library",
    desc: "Browse everything you've written in one place.",
    href: "/resources/help/organizing/library",
  },
  {
    title: "Favorites & Quick Jump",
    desc: "Pin what matters and jump to any doc with ⌘K.",
    href: "/resources/help/organizing/favorites-quick-jump",
  },
];

export default function OrganizingCategoryPage() {
  return (
    <div className="features-frame">
      <div className="hcat-back">
        <a href="/resources/help">← Help Center</a>
      </div>

      <section className="hcat-header">
        <div className="hc-cat-mark" style={{ background: "var(--green)" }} />
        <p className="micro">Organizing</p>
        <h1 className="display">Keeping your work in order.</h1>
        <p>Folders, your Library, favorites, and finding things fast.</p>
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
