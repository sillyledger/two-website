import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvas | TWO Help",
};

export default function CanvasArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/studio/canvas" />

      <article className="harticle">
        <p className="harticle-eyebrow">Studio</p>
        <h1 className="display">Canvas</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Canvas is Studio&apos;s infinite pan-and-zoom surface — the same pinning and connecting as Wall, but
          with unlimited space instead of fixed edges.
        </p>

        <h2 className="display">Panning and zooming</h2>
        <p>
          Click and drag anywhere on the empty canvas to pan around. Scroll to zoom in or out — it zooms toward
          wherever your cursor is, so you can zoom into a specific cluster of items without losing your place.
          Zoom ranges from 25% to 250%.
        </p>

        <div className="cv-stage">
          <div className="cv-canvas">
            <div className="cv-item doc" style={{ top: 30, left: 40 }}>Meeting Notes</div>
            <div className="cv-item swatch" style={{ top: 90, left: 160, background: "#8f89e6" }} />
            <div className="cv-item note" style={{ top: 20, left: 220 }}>Note</div>
          </div>
          <div className="cv-controls">
            <span>−</span>
            <span>100%</span>
            <span>+</span>
            <span>⟲</span>
          </div>
        </div>

        <p>Use the zoom controls in the corner to zoom in, zoom out, or reset back to 100% and centered.</p>

        <h2 className="display">Adding and connecting items</h2>
        <p>
          Adding items works exactly like Wall — pin docs, notes, images, text, and color swatches, drag them
          anywhere, and draw connectors between them. The only difference is the space you&apos;re working with.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          Reach for Canvas when you&apos;re mapping something that keeps growing — a big project, a research map,
          anything where you don&apos;t know the final shape yet. Use Wall when you want a contained space that
          stays a fixed size.</p>
        </div>

        <div className="harticle-pn">
          <a href="/resources/help/studio/wall">← Wall</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
