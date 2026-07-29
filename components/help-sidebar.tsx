const NAV = {
  gs: {
    label: "Getting Started",
    links: [
      { title: "Your first doc", href: "/resources/help/getting-started/your-first-doc" },
      { title: "Using templates", href: "/resources/help/getting-started/using-templates" },
      { title: "Using TWO as a web app", href: "/resources/help/getting-started/using-two-as-a-web-app" },
    ],
  },
  docs: {
    label: "Docs & Editor",
    links: [{ title: "Formatting", href: "/resources/help/docs-editor/formatting" }],
  },
};

export function HelpSidebar({ activeHref }: { activeHref: string }) {
  return (
    <aside className="hsb">
      <a href="/resources/help" className="hsb-back">
        ← Help Center
      </a>

      <div className="hsb-group gs">
        <div className="hsb-group-head">
          <span className="hsb-dot" />
          <span className="hsb-group-label">{NAV.gs.label}</span>
        </div>
        <div className="hsb-links">
          {NAV.gs.links.map((l) => (
            <a href={l.href} className={`hsb-link${l.href === activeHref ? " active" : ""}`} key={l.href}>
              {l.title}
            </a>
          ))}
        </div>
      </div>

      <div className="hsb-group docs">
        <div className="hsb-group-head">
          <span className="hsb-dot" />
          <span className="hsb-group-label">{NAV.docs.label}</span>
        </div>
        <div className="hsb-links">
          {NAV.docs.links.map((l) => (
            <a href={l.href} className={`hsb-link${l.href === activeHref ? " active" : ""}`} key={l.href}>
              {l.title}
            </a>
          ))}
        </div>
      </div>

      <div className="hsb-group account">
        <div className="hsb-group-head">
          <span className="hsb-dot" />
          <span className="hsb-group-label">Account</span>
          <span className="hsb-soon-tag">Soon</span>
        </div>
        <div className="hsb-links empty">Guides coming soon</div>
      </div>
    </aside>
  );
}
