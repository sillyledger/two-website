import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wall | TWO Help",
};

export default function WallArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/studio/wall" />

      <article className="harticle">
        <p className="harticle-eyebrow">Studio</p>
        <h1 className="display">Wall</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Wall is a bounded board inside Studio for pinning docs, notes, images, and quick text — a place to lay
          things out visually instead of scrolling through a list.
        </p>

        <h2 className="display">Adding items</h2>
        <p>You can pin five kinds of things to a Wall:</p>
        <ul>
          <li><b>Doc</b> — search and pin an existing doc.</li>
          <li><b>Note</b> — search and pin an existing note.</li>
          <li><b>Image</b> — upload an image directly onto the board.</li>
          <li><b>Text</b> — a quick freeform text block, typed right on the board.</li>
          <li><b>Swatch</b> — a solid color card, useful for grouping or just visual structure.</li>
        </ul>

        <div className="wl-stage">
          <div className="wl-toolbar">
            <span className="wl-tool">Doc</span>
            <span className="wl-tool">Note</span>
            <span className="wl-tool">Image</span>
            <span className="wl-tool">Text</span>
            <span className="wl-tool">Swatch</span>
          </div>
          <div className="wl-board">
            <div className="wl-item doc" style={{ top: 20, left: 20 }}>Product Brief</div>
            <div className="wl-item note" style={{ top: 70, left: 140 }}>Note</div>
            <div className="wl-item swatch" style={{ top: 20, left: 220, background: "#c98a5e" }} />
            <svg className="wl-connector"><line x1="90" y1="35" x2="140" y2="85" /></svg>
          </div>
        </div>

        <h2 className="display">Moving items around</h2>
        <p>
          Drag any item anywhere on the board. There&apos;s no grid or snapping — arrange things exactly how you
          think about them.
        </p>

        <h2 className="display">Connecting items</h2>
        <p>
          Draw a line between two items to show they&apos;re related. Click an existing connector to delete it,
          or use <b>Straighten</b>{" "}
          from an item&apos;s menu to tidy up a connector that&apos;s gone crooked after moving things around.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          Wall is bounded — it has fixed edges rather than scrolling forever. If you need unlimited space to
          spread out, Canvas is Studio&apos;s infinite pan-and-zoom alternative.</p>
        </div>

        <div className="harticle-pn">
          <a href="/resources/help/studio">← Studio</a>
          <a href="/resources/help/studio/canvas" className="next">Canvas →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
