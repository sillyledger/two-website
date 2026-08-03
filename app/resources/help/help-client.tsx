"use client";

import { useState } from "react";

type Article = {
  category: string;
  title: string;
  desc: string;
  href: string;
};

const ARTICLES: Article[] = [
  {
    category: "Getting Started",
    title: "Your first doc",
    desc: "Create and start writing your very first document in TWO.",
    href: "/resources/help/getting-started/your-first-doc",
  },
  {
    category: "Getting Started",
    title: "Using templates",
    desc: "Start from a template instead of a blank page.",
    href: "/resources/help/getting-started/using-templates",
  },
  {
    category: "Getting Started",
    title: "Using TWO as a web app",
    desc: "Install TWO to your home screen for a native-like feel.",
    href: "/resources/help/getting-started/using-two-as-a-web-app",
  },
  {
    category: "Docs & Editor",
    title: "Formatting",
    desc: "Headers, bold, lists, code blocks — everything the editor supports.",
    href: "/resources/help/docs-editor/formatting",
  },
  {
    category: "Docs & Editor",
    title: "Multiple tabs",
    desc: "Open several docs at once and switch between them without losing your place.",
    href: "/resources/help/docs-editor/multiple-tabs",
  },
  {
    category: "Docs & Editor",
    title: "Split view",
    desc: "View two docs side by side and drag to resize.",
    href: "/resources/help/docs-editor/split-view",
  },
  {
    category: "Docs & Editor",
    title: "Version history",
    desc: "View and restore past versions of any doc.",
    href: "/resources/help/docs-editor/version-history",
  },
  {
    category: "Docs & Editor",
    title: "Linked docs",
    desc: "Reference one doc from inside another.",
    href: "/resources/help/docs-editor/linked-docs",
  },
  {
    category: "Organizing",
    title: "Folders",
    desc: "Create, pin, and nest folders to keep docs organized.",
    href: "/resources/help/organizing/folders",
  },
  {
    category: "Organizing",
    title: "Library",
    desc: "Browse everything you've written in one place.",
    href: "/resources/help/organizing/library",
  },
  {
    category: "Organizing",
    title: "Favorites & Quick Jump",
    desc: "Pin what matters and jump to any doc with ⌘K.",
    href: "/resources/help/organizing/favorites-quick-jump",
  },
  {
    category: "Collaboration",
    title: "Shared workspaces",
    desc: "Invite teammates and work in the same space together.",
    href: "/resources/help/collaboration/shared-workspaces",
  },
  {
    category: "Collaboration",
    title: "Activity",
    desc: "See what's changed across your docs and who changed it.",
    href: "/resources/help/collaboration/activity",
  },
  {
    category: "Studio",
    title: "Wall",
    desc: "Pin docs, notes, and images to a bounded board.",
    href: "/resources/help/studio/wall",
  },
  {
    category: "Studio",
    title: "Canvas",
    desc: "An infinite pan-and-zoom surface for freeform thinking.",
    href: "/resources/help/studio/canvas",
  },
];

export function HelpCenterClient() {
  const [query, setQuery] = useState("");

  const filtered = ARTICLES.filter((a) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
  });

  return (
    <div className="features-frame">
      <section className="hc-hero">
        <div className="hc-hero-left">
          <p className="micro">Help Center</p>
          <h1 className="display">How can we help?</h1>
          <p>Guides and answers to get the most out of TWO.</p>
        </div>
        <div className="hc-search-small">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      <div className="hc-cats">
        <a href="/resources/help/getting-started" className="hc-cat linked">
          <div className="hc-cat-mark" />
          <div className="hc-cat-title">Getting Started</div>
          <div className="hc-cat-desc">New to TWO? Start here. Create your first doc, use templates, and set up the web app.</div>
          <div className="hc-cat-meta">3 articles →</div>
        </a>
        <a href="/resources/help/docs-editor" className="hc-cat linked docs">
          <div className="hc-cat-mark" />
          <div className="hc-cat-title">Docs &amp; Editor</div>
          <div className="hc-cat-desc">Everything about writing and formatting in TWO.</div>
          <div className="hc-cat-meta">5 articles →</div>
        </a>
        <a href="/resources/help/organizing" className="hc-cat linked">
          <div className="hc-cat-mark" style={{ background: "var(--green)" }} />
          <div className="hc-cat-title">Organizing</div>
          <div className="hc-cat-desc">Folders, your Library, favorites, and finding things fast.</div>
          <div className="hc-cat-meta">3 articles →</div>
        </a>
        <a href="/resources/help/collaboration" className="hc-cat linked">
          <div className="hc-cat-mark" style={{ background: "var(--indigo)" }} />
          <div className="hc-cat-title">Collaboration</div>
          <div className="hc-cat-desc">Shared workspaces and staying on top of what&apos;s changed.</div>
          <div className="hc-cat-meta">2 articles →</div>
        </a>
        <a href="/resources/help/studio" className="hc-cat linked">
          <div className="hc-cat-mark" style={{ background: "var(--clay)" }} />
          <div className="hc-cat-title">Studio</div>
          <div className="hc-cat-desc">Wall and Canvas — two ways to pin, sketch, and connect ideas.</div>
          <div className="hc-cat-meta">2 articles →</div>
        </a>
        <div className="hc-cat soon">
          <div className="hc-cat-mark" />
          <div className="hc-cat-title">
            Account <span className="hc-soon-tag">Soon</span>
          </div>
          <div className="hc-cat-desc">Settings, appearance, and billing guides — on the way.</div>
          <div className="hc-cat-meta">0 articles</div>
        </div>
      </div>

      <div className="hc-popular">
        <div className="hc-popular-head">
          <h2 className="display">Popular articles</h2>
        </div>
        <div className="hc-article-list">
          {filtered.length === 0 ? (
            <p className="hc-no-results">No articles match &quot;{query}&quot;.</p>
          ) : (
            filtered.map((a) => (
              <a href={a.href} className="hc-article-row" key={a.title}>
                <div className="mark" />
                <div>
                  <span className="hc-article-cat">{a.category}</span>
                  <p className="hc-article-row-title">{a.title}</p>
                  <p className="hc-article-row-desc">{a.desc}</p>
                </div>
              </a>
            ))
          )}
        </div>
      </div>

      <div className="hc-cta">
        <p>Can&apos;t find what you&apos;re looking for?</p>
        <a href="mailto:two@strevius.com">Contact support →</a>
      </div>
    </div>
  );
}
