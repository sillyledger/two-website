import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Using Split View | TWO Help",
};

export default function SplitViewArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/docs-editor/split-view" />

      <article className="harticle">
        <p className="harticle-eyebrow">Docs &amp; Editor</p>
        <h1 className="display">Using split view</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Split view puts two docs, or a doc and a note, side by side in one window, so you can reference one
          while you write in the other without switching tabs back and forth.
        </p>

        <h2 className="display">Opening split view</h2>
        <p>
          Click the split-view icon in the doc toolbar to open a second pane. A picker appears. Search your
          docs and notes, or pick one from the list, and it opens on the right while your original doc stays on
          the left.
        </p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win">
              <div className="hil-tabs">
                <span className="hil-tab on">Chapter three</span>
                <span className="hil-tab">Research notes</span>
                <span className="hil-tb-icon on" aria-hidden="true">◫</span>
              </div>
              <div className="hil-split">
                <div className="hil-pane">
                  <b className="hil-dt">Chapter three</b>
                  <p className="hil-tx">By the time the ferry came in, Ana had already decided not to tell anyone about the letter.</p>
                  <div className="hil-ln" style={{ width: "88%" }} />
                  <div className="hil-ln" style={{ width: "72%" }} />
                </div>
                <div className="hil-seam"><span /></div>
                <div className="hil-pane alt">
                  <b className="hil-dt">Research notes</b>
                  <p className="hil-tx">Ferries run twice a day in winter.</p>
                  <div className="hil-ln" style={{ width: "80%" }} />
                  <div className="hil-ln clay" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Left pane</b>your original doc</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Drag the divider</b>give either side room</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Right pane</b>any doc or note</span></div>
          </div>
        </figure>

        <h2 className="display">Resizing panes</h2>
        <p>
          Drag the thin divider between the two panes left or right to give either side more room. There&apos;s
          no fixed split. Resize it however suits what you&apos;re working on.
        </p>

        <h2 className="display">Editing in split view</h2>
        <p>
          Both panes are fully editable and save independently. Typing in one doesn&apos;t affect the other.
          Whichever doc or note you last opened on the right reopens automatically next time you turn split view
          back on, so you don&apos;t have to search for it again.
        </p>
        <div className="harticle-tip">
          <p><b>Tip:</b> The divider position itself resets to an even split each time you open split view. Only
          which doc is on the right is remembered, not how wide you left each pane.</p>
        </div>

        <h2 className="display">Closing split view</h2>
        <p>Click the split-view icon again to close the second pane and return to a single doc.</p>

        <div className="harticle-pn">
          <a href="/resources/help/docs-editor/multiple-tabs">← Multiple tabs</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
