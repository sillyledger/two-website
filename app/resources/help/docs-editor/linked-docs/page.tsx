import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linking Between Docs | TWO Help",
};

export default function LinkedDocsArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/docs-editor/linked-docs" />

      <article className="harticle">
        <p className="harticle-eyebrow">Docs &amp; Editor</p>
        <h1 className="display">Linking between docs</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Reference one doc from inside another by turning any text into a clickable link. Useful for pointing
          from a project brief to its meeting notes, or from an OKR tracker to the doc it came from.
        </p>

        <h2 className="display">Creating a link to another doc</h2>
        <p>
          Select the text you want to turn into a link, then click the link icon in the toolbar (or the bubble
          menu that appears when you select text). A search box opens. Type to search your docs by title, or
          paste a regular URL if you&apos;re linking outside TWO.
        </p>

        <div className="ld-stage">
          <div className="ld-modal">
            <p className="ld-modal-label">Insert link</p>
            <div className="ld-input">Product Roa...</div>
            <div className="ld-results">
              <div className="ld-result active">
                <span className="ld-file-icon" />
                Product Roadmap Visual
              </div>
              <div className="ld-result">
                <span className="ld-file-icon" />
                Product Brief
              </div>
            </div>
          </div>
          <div className="ld-arrow">→</div>
          <div className="ld-doc">
            <div className="ld-ln" style={{ width: "80%" }} />
            <div className="ld-ln-link">Product Roadmap Visual</div>
            <div className="ld-ln" style={{ width: "60%" }} />
          </div>
        </div>

        <h2 className="display">Following a link</h2>
        <p>
          Click any doc link and TWO takes you straight to that doc. If you want to keep your current doc open
          too, open the link in split view instead. Right-click it and choose to open in the second pane, or
          copy the link and add it manually from the split-view picker.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b> Linking is one-directional right now. Opening the doc you linked <i>to</i>{" "}
          won&apos;t show you a list of everything that links back to it. Keep that in mind if you&apos;re
          building out a web of connected docs.</p>
        </div>

        <h2 className="display">Removing a link</h2>
        <p>
          Select the linked text, open the link tool again, and clear the field before applying. This turns it
          back into plain text without deleting the words themselves.
        </p>

        <div className="harticle-pn">
          <a href="/resources/help/docs-editor/version-history">← Version history</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
