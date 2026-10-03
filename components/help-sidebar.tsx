"use client";

import { useState } from "react";

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
      { title: "Canvas", href: "/resources/help/studio/canvas" },
    ],
  },
  account: {
    label: "Account",
    links: [
      { title: "Settings & appearance", href: "/resources/help/account/settings-appearance" },
      { title: "Billing & plans", href: "/resources/help/account/billing-plans" },
    ],
  },
};

export function HelpSidebar({ activeHref }: { activeHref: string }) {
  const [open, setOpen] = useState(false);

  const GROUPS = [
    { cls: "gs", group: NAV.gs },
    { cls: "docs", group: NAV.docs },
    { cls: "organizing", group: NAV.organizing },
    { cls: "collaboration", group: NAV.collaboration },
    { cls: "studio", group: NAV.studio },
    { cls: "account", group: NAV.account },
  ];

  let currentLabel = "Browse articles";
  for (const g of GROUPS) {
    const hit = g.group.links.find((l) => l.href === activeHref);
    if (hit) currentLabel = `${g.group.label} · ${hit.title}`;
  }

  return (
    <aside className="hsb">
      <a href="/resources/help" className="hsb-back">
        ← Help Center
      </a>

      <button
        type="button"
        className="hsb-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{currentLabel}</span>
        <span className="hsb-caret" aria-hidden="true">{open ? "▴" : "▾"}</span>
      </button>

      <div className={`hsb-groups${open ? " open" : ""}`}>
        {GROUPS.map((g) => (
          <div className={`hsb-group ${g.cls}`} key={g.cls}>
            <div className="hsb-group-head">
              <span className="hsb-dot" />
              <span className="hsb-group-label">{g.group.label}</span>
            </div>
            <div className="hsb-links">
              {g.group.links.map((l) => (
                <a href={l.href} className={`hsb-link${l.href === activeHref ? " active" : ""}`} key={l.href}>
                  {l.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
