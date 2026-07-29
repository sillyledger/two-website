const ARTICLES: { title: string; desc: string; href: string }[] = [
  {
    title: "Your first doc",
    desc: "How to create, name, and organize your first document in TWO.",
    href: "/resources/help/getting-started/your-first-doc",
  },
  {
    title: "Using templates",
    desc: "Start faster with pre-built docs for meetings, briefs, and more.",
    href: "/resources/help/getting-started/using-templates",
  },
  {
    title: "Using TWO as a web app",
    desc: "Add TWO to your home screen and use it like a native app right in your browser — no App Store required.",
    href: "/resources/help/getting-started/using-two-as-a-web-app",
  },
];

export default function GettingStartedCategoryPage() {
  return (
    <div className="features-frame">
      <div className="hcat-back">
        <a href="/resources/help">← Help Center</a>
      </div>

      <section className="hcat-header">
        <div className="hc-cat-mark" />
        <p className="micro">Getting Started</p>
        <h1 className="display">New to TWO? Start here.</h1>
        <p>Create your first doc, use templates, and set up the web app.</p>
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
