import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Using Your Library | TWO Help",
};

export default function LibraryArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/organizing/library" />

      <article className="harticle">
        <p className="harticle-eyebrow">Organizing</p>
        <h1 className="display">Using your Library</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Library is the one place that shows everything you&apos;ve written — across every folder and every
          workspace, personal and shared — so you never have to remember exactly where a doc lives.
        </p>

        <h2 className="display">Grouping and filtering</h2>
        <p>
          Toggle between grouping by <b>Folders</b> or by <b>Labels</b>{" "}
          at the top of Library. Three filter pills sit alongside it:{" "}
          <b>All</b>{" "}
          shows everything, the middle pill shows whatever doesn&apos;t have a folder or label yet (
          <b>Unfiled</b> or <b>Unlabeled</b>{", "}
          depending on which grouping you&apos;re on), and <b>Shared</b>{" "}
          narrows down to docs in your shared workspaces.
        </p>

        <div className="lib-stage">
          <div className="lib-search">Search library...</div>
          <div className="lib-toggle">
            <span className="active">Folders</span>
            <span>Labels</span>
          </div>
          <div className="lib-pills">
            <span className="lib-pill active">All</span>
            <span className="lib-pill">Unfiled</span>
            <span className="lib-pill">Shared</span>
          </div>
          <div className="lib-grid">
            <div className="lib-tile" style={{ borderColor: "#EF9F27" }}>
              <div className="lib-tile-ln" />
              <div className="lib-tile-ln" style={{ width: "60%" }} />
              <p>Roadmap</p>
            </div>
            <div className="lib-tile" style={{ borderColor: "#85B7EB" }}>
              <div className="lib-tile-ln" />
              <div className="lib-tile-ln" style={{ width: "70%" }} />
              <p>Development</p>
            </div>
          </div>
        </div>

        <h2 className="display">Searching your Library</h2>
        <p>
          The search bar at the top filters by title as you type, across whatever grouping and pill you currently
          have selected — so a search under <b>Shared</b>{" "}
          only searches your shared docs, not everything.
        </p>

        <h2 className="display">Starting from a template</h2>
        <p>
          Library also has quick access to templates, so you can start a new structured doc without leaving the
          page you&apos;re browsing from.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          If a doc feels hard to find, it&apos;s usually sitting in whichever grouping mode you aren&apos;t
          currently viewing — try switching between Folders and Labels before assuming it&apos;s missing.</p>
        </div>

        <div className="harticle-pn">
          <a href="/resources/help/organizing/folders">← Folders</a>
          <a href="/resources/help/organizing/favorites-quick-jump" className="next">Favorites &amp; Quick Jump →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
