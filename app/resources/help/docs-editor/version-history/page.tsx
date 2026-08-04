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

        <div className="vh-stage">
          <div className="vh-menu">
            <p className="vh-menu-label">History</p>
            <div className="vh-menu-item"><span className="vh-menu-dot" />Version history</div>
          </div>
          <div className="vh-arrow">→</div>
          <div className="vh-modal">
            <div className="vh-modal-head">Version history</div>
            <div className="vh-modal-body">
              <div className="vh-list">
                <p className="vh-day">Today</p>
                <div className="vh-row active">
                  <span className="vh-avatar" style={{ background: "#52e0b8" }}>P</span>
                  1:42 PM
                </div>
                <div className="vh-row">
                  <span className="vh-avatar" style={{ background: "#e05252" }}>P</span>
                  11:05 AM
                </div>
              </div>
              <div className="vh-preview">
                <div className="vh-ln" style={{ width: "70%" }} />
                <div className="vh-ln" style={{ width: "90%" }} />
                <div className="vh-ln" style={{ width: "55%" }} />
                <div className="vh-restore">Restore this version</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display">Restoring a version</h2>
        <p>
          Select any version from the list to preview it on the right. If it&apos;s the one you want back, click
          <b> Restore this version</b>. Your doc updates immediately — and the version you restored from is kept
          too, so restoring is never a one-way trip.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          Restoring doesn&apos;t just undo your last change — it replaces the doc with the exact title and
          content from that saved version, no matter how long ago it was.</p>
        </div>

        <h2 className="display">How often versions are saved</h2>
        <p>
          TWO saves a new version automatically as you write — roughly every 10 minutes of active editing, or
          immediately whenever you rename the doc. You don&apos;t need to save versions manually; it happens in
          the background alongside autosave.
        </p>

        <h2 className="display">How much history is kept</h2>
        <table className="hversion-table">
          <tbody>
            <tr><th>Plan</th><th>History kept</th></tr>
            <tr><td>Free</td><td>Last 3 versions per doc</td></tr>
            <tr><td>Pro</td><td>Last 30 days per doc</td></tr>
            <tr><td>Founding</td><td>Last 30 days per doc</td></tr>
          </tbody>
        </table>
        <p>
          On the free plan, once a doc has more than 3 saved versions, the oldest one is quietly dropped as a new
          one is saved — there&apos;s no warning or interruption, older versions just roll off. On Pro and
          Founding, every version from the last 30 days stays available.
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
