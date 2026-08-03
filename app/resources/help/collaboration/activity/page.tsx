import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity | TWO Help",
};

export default function ActivityArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/collaboration/activity" />

      <article className="harticle">
        <p className="harticle-eyebrow">Collaboration</p>
        <h1 className="display">Activity</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Activity shows everything you&apos;ve touched in the last 30 days — and in shared workspaces, everything
          your teammates have touched too — as a single timeline, grouped by day.
        </p>

        <h2 className="display">Filtering by type</h2>
        <p>
          Three pills at the top narrow the timeline: <b>All</b> shows everything, <b>Created</b>{" "}
          shows only new docs, and <b>Edited</b>{" "}
          shows only changes to existing docs.
        </p>

        <h2 className="display">Filtering by space</h2>
        <p>
          A second set of pills filters by where the activity happened: <b>All spaces</b>, <b>My workspace</b>
          {" "}
          (your private docs only), or <b>Shared</b>{" "}
          (activity from your shared workspaces).
        </p>

        <div className="act-stage">
          <div className="act-pills">
            <span className="act-pill active">All</span>
            <span className="act-pill">Created</span>
            <span className="act-pill">Edited</span>
          </div>
          <div className="act-entry">
            <span className="act-avatar" style={{ background: "#52e0b8" }}>P</span>
            <div>
              <p className="act-entry-title">You edited <b>Product Roadmap</b></p>
              <p className="act-entry-meta">Development · 1h ago</p>
            </div>
          </div>
          <div className="act-entry">
            <span className="act-avatar" style={{ background: "#e05252" }}>A</span>
            <div>
              <p className="act-entry-title">Alex edited <b>Meeting Notes</b></p>
              <p className="act-entry-meta">Shared Workspace · 3h ago</p>
            </div>
          </div>
        </div>

        <h2 className="display">What Activity does and doesn&apos;t show</h2>
        <p>
          Each entry tells you who touched a doc and when — it doesn&apos;t show you what changed inside it. To
          see the actual content of a past state, use version history on that specific doc instead.
        </p>

        <div className="harticle-pn">
          <a href="/resources/help/collaboration/shared-workspaces">← Shared workspaces</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
