import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Version History | TWO Help",
};

export default function VersionHistoryArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/docs-editor/version-history" />

      <article className="harticle">
        <p className="harticle-eyebrow">Docs &amp; Editor</p>
        <h1 className="display">Version history</h1>
        <p className="harticle-meta">3 min read · Last updated Aug 2026</p>

        <p>
          Every doc quietly keeps a history of past versions as you write, so a bad edit or an accidental
          overwrite is never permanent. You can look back at any past version and restore it in a click.
        </p>

        <h2 className="display">Opening version history</h2>
        <p>
          Click the <b>···</b> menu at the top of any doc and choose <b>Version history</b> under the History
          section. A panel opens showing every saved version of that doc, grouped by day, newest first.
        </p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-row">
              <div className="hil-list">
                <p className="hil-lb">Today</p>
                <div className="hil-vr on"><i className="hil-av">P</i>1:42 PM</div>
                <div className="hil-vr"><i className="hil-av">P</i>11:05 AM</div>
                <p className="hil-lb gap">Yesterday</p>
                <div className="hil-vr"><i className="hil-av">P</i>4:18 PM</div>
              </div>
              <div className="hil-body grow col">
                <b className="hil-dt">Launch plan</b>
                <div className="hil-ln" style={{ width: "90%" }} />
                <div className="hil-ln" style={{ width: "76%" }} />
                <div className="hil-ln" style={{ width: "84%" }} />
                <span className="hil-btn">Restore this version</span>
              </div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Pick a version</b>preview it on the right</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Restore</b>the current one is kept too</span></div>
          </div>
        </figure>

        <h2 className="display">Restoring a version</h2>
        <p>
          Select any version from the list to preview it on the right. If it&apos;s the one you want back, click
          <b> Restore this version</b>. Your doc updates immediately, and the version you restored from is kept
          too, so restoring is never a one-way trip.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          Restoring doesn&apos;t just undo your last change. It replaces the doc with the exact title and
          content from that saved version, no matter how long ago it was.</p>
        </div>

        <h2 className="display">How often versions are saved</h2>
        <p>
          TWO saves a new version automatically as you write, roughly every 10 minutes of active editing, or
          immediately whenever you rename the doc. You don&apos;t need to save versions manually; it happens in
          the background alongside autosave.
        </p>

        <h2 className="display">How much history is kept</h2>
        <table className="hversion-table">
          <tbody>
            <tr><th>Plan</th><th>History kept</th></tr>
            <tr><td>Free</td><td>Last 3 versions per doc</td></tr>
            <tr><td>Pro</td><td>Last 30 days per doc</td></tr>
            <tr><td>Team</td><td>Last 30 days per doc</td></tr>
          </tbody>
        </table>
        <p>
          On the free plan, once a doc has more than 3 saved versions, the oldest one is quietly dropped as a new
          one is saved. There&apos;s no warning or interruption, older versions just roll off. On Pro and Team,
          every version from the last 30 days stays available.
        </p>

        <div className="harticle-pn">
          <a href="/resources/help/docs-editor/split-view">← Split view</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
