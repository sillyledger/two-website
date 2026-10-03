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
          Activity shows everything you&apos;ve touched in the last 30 days, and in shared workspaces, everything
          your teammates have touched too, as a single timeline, grouped by day.
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

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-pad">
              <div className="hil-pills">
                <span className="hil-pill on">All</span>
                <span className="hil-pill">Created</span>
                <span className="hil-pill">Edited</span>
              </div>
              <p className="hil-lb gap">Today</p>
              <div className="hil-ar"><i className="hil-av">P</i><span><b>You</b> edited Product roadmap</span><span className="m">Development · 1h ago</span></div>
              <div className="hil-ar"><i className="hil-av clay">A</i><span><b>Alex</b> edited Meeting notes</span><span className="m">Shared · 3h ago</span></div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Filter</b>created or edited</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Grouped by day</b>the last 30 days</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Who and when</b>not what changed</span></div>
          </div>
        </figure>

        <h2 className="display">What Activity does and doesn&apos;t show</h2>
        <p>
          Each entry tells you who touched a doc and when. It doesn&apos;t show you what changed inside it. To
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
