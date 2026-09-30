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
        <p className="harticle-meta">3 min read · Last updated Sep 2026</p>

        <p>
          Canvas is Studio&apos;s open board: an infinite surface where you can pin docs and notes, add images,
          text, shapes and color cards, and draw connections between them. Use it for anything that doesn&apos;t
          have a final shape yet.
        </p>

        <h2 className="display">Panning and zooming</h2>
        <p>
          Click and drag anywhere on the empty canvas to pan around. Scroll to zoom in or out. It zooms toward
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

        <h2 className="display">Adding items</h2>
        <p>
          Use the toolbar to add something to your canvas: link a doc, link a note, add text, upload an image,
          add a shape, or add a color card. Drag any item to move it around.
        </p>
        <p>
          Shapes come in four forms: rectangle, rounded rectangle, circle and diamond. Drag the corner to resize
          one, choose a fill or no fill, and type inside it to label it.
        </p>
        <p>
          Click the color on a color card to change it. Pick a preset, use the color picker, or type a hex code.
          The Copy button copies the hex value so you can paste it anywhere.
        </p>

        <h2 className="display">Connecting items</h2>
        <p>
          To connect two items, drag from the connector handle on the corner of one item and drop it onto
          another. Connectors stay attached when you move either item.
        </p>

        <h2 className="display">Organizing your canvases</h2>
        <p>
          On the Canvas page in Studio, group your canvases into color-coded categories, nested as deep as you
          like. Use a canvas&apos;s ⋮ menu to rename it, delete it, or move it into a category.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          Reach for Canvas when you&apos;re mapping something that keeps growing and you don&apos;t know its final
          shape yet: a research map, a plot, a moodboard.</p>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
