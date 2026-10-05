import type { Metadata } from "next";
import { CanvasDemo } from "@/components/creatives-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "TWO for Creatives: Canvas, Ideas and Calm Writing | TWO",
};

const FLOW = [
  { n: "01", t: "Catch it in Ideas", d: "A list of what you might make next, with a type and a status. List or board view." },
  { n: "02", t: "Gather it on a canvas", d: "Images, colors, shapes and the docs it touches, with lines between them." },
  { n: "03", t: "Write the brief", d: "Turn the idea into a doc and keep your notes open beside it in split view." },
];

const USES = [
  { t: "Brand and identity", d: "Collect colors and references on a canvas, then write the brand brief from it." },
  { t: "Shoots and campaigns", d: "Location photos, a shot list and the client's notes, pinned together before the day." },
  { t: "Long writing", d: "Chapters in tabs, research open in split view, and 30 days of version history on Pro." },
  { t: "Client work", d: "Write the proposal in a calm editor and export a clean PDF to send." },
];

const SPECS = [
  { label: "A canvas holds", value: "Images, docs, notes, text, color cards, shapes and the lines between them" },
  { label: "Color cards", value: "Pick a color or type a hex, and copy it in one click" },
  { label: "Organizing", value: "Canvases sort into nested categories" },
  { label: "Ideas", value: "Title, type, status, platform and category. List or board view." },
  { label: "Writing", value: "Docs with tabs, split view, version history and PDF export" },
  { label: "Plan", value: "Studio is on every plan, including Free. It's in beta." },
  { label: "Sharing", value: "Canvases are just for you for now. Docs can be shared on Pro." },
];

export default function ForCreativesPage() {
  return (
    <div className="features-frame">
      <section className="crx-hero">
        <p className="micro">For creatives</p>
        <h1 className="display">
          Moodboard first.
          <br />
          <span>Then the words.</span>
        </h1>
        <p className="crx-intro">
          Collect images, colors and references on a canvas, keep half-ideas in a list, then write the brief with
          your notes open beside it. No AI, no clutter.
        </p>
        <div className="crx-ctas">
          <a className="crx-btn solid" href="https://app.two.so/signup">Start for free</a>
          <a className="crx-btn outline" href="/product/features/studio">See Studio</a>
        </div>
        <div className="crx-kv">
          <div><span className="k">Canvas</span><span className="v">On every plan, in beta</span></div>
          <div><span className="k">Writing</span><span className="v">Tabs and split view</span></div>
          <div><span className="k">AI</span><span className="v">None, on purpose</span></div>
        </div>
      </section>

      <CanvasDemo />

      <section className="crx-section">
        <p className="micro">How it flows</p>
        <div className="crx-steps">
          {FLOW.map((s, i) => (
            <div className="crx-step" key={s.n}>
              <span className={i === 0 ? "crx-node filled" : "crx-node"} />
              <span className="crx-num">{s.n}</span>
              <b>{s.t}</b>
              <span>{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="crx-section crx-two">
        <div>
          <p className="micro">Made for</p>
          <h2 className="display">
            The whole project.
            <br />
            In one place.
          </h2>
        </div>
        <div className="crx-uses">
          {USES.map((u) => (
            <div className="crx-use" key={u.t}>
              <b>{u.t}</b>
              <span>{u.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="crx-section crx-two">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            Made to look at.
            <br />
            Made to write in.
          </h2>
        </div>
        <div className="crx-specs">
          {SPECS.map((s) => (
            <div className="crx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Pin it first."
        subtitle="Write it after."
        primary={{ label: "Start for free", href: "https://app.two.so/signup" }}
        secondary={{ label: "See Studio", href: "/product/features/studio" }}
        note="Studio is on every plan, including Free."
      />
    </div>
  );
}
