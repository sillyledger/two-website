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

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-board">
              <svg className="hil-links" viewBox="0 0 600 200" preserveAspectRatio="none" fill="none" stroke="#8f89e6" strokeWidth="1.2" aria-hidden="true">
                <path d="M170 64 C 215 64, 215 112, 260 112" vectorEffect="non-scaling-stroke" />
                <path d="M410 112 C 440 112, 440 72, 470 72" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="hil-ci c-doc"><span className="k doc">DOC</span>Client brief</div>
              <div className="hil-ci c-note"><span className="k">NOTE</span>Quieter, like a bookshop</div>
              <div className="hil-shape">Calm</div>
              <div className="hil-swatch"><i /><u /></div>
              <div className="hil-zoom">− 100% + ⟲</div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Pin docs and notes</b>plus text, images and shapes</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Connect</b>drag from a corner handle</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Zoom</b>25% to 250%</span></div>
          </div>
        </figure>

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
