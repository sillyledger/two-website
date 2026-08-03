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
    links: [
      { title: "Formatting", href: "/resources/help/docs-editor/formatting" },
      { title: "Split view", href: "/resources/help/docs-editor/split-view" },
      { title: "Multiple tabs", href: "/resources/help/docs-editor/multiple-tabs" },
      { title: "Version history", href: "/resources/help/docs-editor/version-history" },
      { title: "Linked docs", href: "/resources/help/docs-editor/linked-docs" },
    ],
  },
  organizing: {
    label: "Organizing",
    links: [
      { title: "Folders", href: "/resources/help/organizing/folders" },
      { title: "Library", href: "/resources/help/organizing/library" },
      { title: "Favorites & Quick Jump", href: "/resources/help/organizing/favorites-quick-jump" },
    ],
  },
  collaboration: {
    label: "Collaboration",
    links: [
      { title: "Shared workspaces", href: "/resources/help/collaboration/shared-workspaces" },
      { title: "Activity", href: "/resources/help/collaboration/activity" },
    ],
  },
  studio: {
    label: "Studio",
    links: [
      { title: "Wall", href: "/resources/help/studio/wall" },
      { title: "Canvas", href: "/resources/help/studio/canvas" },
    ],
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

      <div className="hsb-group organizing">
        <div className="hsb-group-head">
          <span className="hsb-dot" />
          <span className="hsb-group-label">{NAV.organizing.label}</span>
        </div>
        <div className="hsb-links">
          {NAV.organizing.links.map((l) => (
            <a href={l.href} className={`hsb-link${l.href === activeHref ? " active" : ""}`} key={l.href}>
              {l.title}
            </a>
          ))}
        </div>
      </div>

      <div className="hsb-group collaboration">
        <div className="hsb-group-head">
          <span className="hsb-dot" />
          <span className="hsb-group-label">{NAV.collaboration.label}</span>
        </div>
        <div className="hsb-links">
          {NAV.collaboration.links.map((l) => (
            <a href={l.href} className={`hsb-link${l.href === activeHref ? " active" : ""}`} key={l.href}>
              {l.title}
            </a>
          ))}
        </div>
      </div>

      <div className="hsb-group studio">
        <div className="hsb-group-head">
          <span className="hsb-dot" />
          <span className="hsb-group-label">{NAV.studio.label}</span>
        </div>
        <div className="hsb-links">
          {NAV.studio.links.map((l) => (
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
