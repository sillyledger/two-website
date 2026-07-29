import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TWO for Creatives: Distraction-Free Writing & Notes",
};

const GALLERY: { key: string; title: string; desc: string }[] = [
  { key: "ipad", title: "iPad-first writing", desc: "Native-feeling on the couch, in a café, or on a flight — not an afterthought bolted onto a desktop app." },
  { key: "tabs", title: "Tabs, not tab-switching", desc: "Every doc for a project open at once, inside the app — not across five browser tabs." },
  { key: "sync", title: "Mac and iPad in sync", desc: "Start on one, finish on the other. No exporting, no re-pasting, no version to reconcile." },
  { key: "rich", title: "Rich text that stays clean", desc: "Every formatting tool you reach for. None of the toolbar clutter you don't." },
  { key: "dark", title: "Dark mode, done right", desc: "Late-night sessions look as considered as morning ones, across every device." },
  { key: "clean", title: "Nothing you don't need", desc: "No kanban, no databases, no feature you have to work around. Just a doc app, done exceptionally well." },
];

const FILMSTRIP = [
  { title: "Creative briefs", desc: "Write and share project briefs clients actually open." },
  { title: "Idea capture", desc: "Grab it the moment it hits — iPad, Mac, or web." },
  { title: "Client proposals", desc: "Draft polished proposals without five apps open." },
  { title: "Personal journaling", desc: "A private place to think, write, and stay undistracted." },
];

function GalleryVisual({ visualKey }: { visualKey: string }) {
  switch (visualKey) {
    case "ipad":
      return <div className="cw-mv-ipad" />;
    case "tabs":
      return (
        <div className="cw-mv-tabs">
          <div className="row"><span className="on">Brief</span><span>Refs</span><span>Notes</span></div>
        </div>
      );
    case "sync":
      return (
        <div className="cw-mv-sync">
          <div className="dev" /><div className="pulse" /><div className="dev" />
        </div>
      );
    case "rich":
      return (
        <div className="cw-mv-rich">
          <span>B</span><span>H1</span><span>•</span><span>{"</>"}</span>
        </div>
      );
    case "dark":
      return (
        <div className="cw-mv-dark">
          <div className="d1" /><div className="d2" />
        </div>
      );
    case "clean":
    default:
      return (
        <div className="cw-mv-doc">
          <div className="l" /><div className="l" /><div className="l" />
        </div>
      );
  }
}

export default function ForCreativesPage() {
  return (
    <div className="features-frame">
      <section className="cw-hero">
        <span className="cw-tag">For Creatives</span>
        <h1 className="display">
          A studio wall,
          <br />
          <span className="ac">built into your docs.</span>
        </h1>
        <p className="sub">
          Briefs, references, and drafts — kept together the way your work actually happens, not filed away in
          folders you&apos;ll never reopen.
        </p>
        <div className="cta-row">
          <a className="btn solid" href="https://app.two.so/signup">Start for free</a>
          <a className="btn outline" href="/product/features/split-view">See how it works</a>
        </div>

        <div className="cw-board">
          <div className="cw-tape cw-t1" />
          <div className="cw-tape cw-t2" />

          <div className="cw-atmo cw-photo"><span className="cap">Location, 4:40PM</span></div>
          <div className="cw-atmo cw-swatch-strip">
            <div className="chip" style={{ background: "var(--indigo)" }} />
            <div className="chip" style={{ background: "var(--clay)" }} />
            <div className="chip" style={{ background: "#6fb587" }} />
            <div className="chip" style={{ background: "#2a2a1c" }} />
          </div>
          <div className="cw-atmo cw-sticky">
            <p>Push the intro paragraph — too flat. Revisit after coffee.</p>
          </div>

          <div className="cw-app cw-doc">
            <div className="cw-doc-bar"><i /><i /><i /><span className="cw-pill">SHOOT BRIEF</span></div>
            <div className="cw-ln cw-w95" style={{ height: 2, background: "var(--text-muted)" }} />
            <div className="cw-ln cw-w95" style={{ marginTop: 14 }} />
            <div className="cw-ln cw-w80" />
            <div className="cw-ln cw-w70" />
            <div className="cw-ln cw-w50" />
          </div>

          <div className="cw-app cw-tabs">
            <div className="cw-tabs-row"><span className="active">Brief</span><span>References</span><span>Notes</span></div>
            <div className="cw-ln cw-w95" />
            <div className="cw-ln cw-w80" />
            <div className="cw-ln cw-w70" />
          </div>

          <div className="cw-app cw-ipad">
            <div className="cw-ipad-notch" />
            <div className="cw-ln cw-w70" style={{ height: 2, background: "var(--text-muted)" }} />
            <div className="cw-ln cw-w95" style={{ marginTop: 12 }} />
            <div className="cw-ln cw-w80" />
            <div className="cw-ln cw-w95" />
            <div className="cw-ln cw-w50" />
          </div>

          <div className="cw-app cw-shared">
            <div className="k">SHARED WITH</div>
            <div className="cw-avatars">
              <div className="av cw-av1">JL</div><div className="av cw-av2">MK</div><div className="av cw-av3">+2</div>
            </div>
          </div>

          <div className="cw-app cw-sync">
            <div className="cw-sync-row"><div className="cw-sync-dot" /><span style={{ fontSize: 11, fontWeight: 600 }}>Live sync</span></div>
            <p>Changes saved as you type.</p>
          </div>

          <div className="cw-leader cw-l1"><div className="tick" /><div className="line" /><div className="lbl">Shared — <b>same doc, real-time</b></div></div>
          <div className="cw-leader cw-l2"><div className="tick" /><div className="line" /><div className="lbl">Reference — <b>kept beside the doc</b></div></div>
        </div>
        <div className="cw-board-cap">
          <p>A real working spread — brief, tabs, and sync are TWO. The photo, swatches, and note are your desk.</p>
        </div>
      </section>

      <section className="cw-intro">
        <div className="cw-intro-inner">
          <p>
            Most doc apps ask you to file things away. TWO lets your work stay{" "}
            <span className="ac">exactly as connected as it is in your head.</span>
          </p>
        </div>
      </section>

      <section>
        <div className="cw-gallery-head">
          <p className="micro" style={{ marginBottom: 12 }}>BUILT FOR HOW CREATIVES ACTUALLY WORK</p>
          <h2 className="display">Six things that make it feel right.</h2>
        </div>
        <div className="cw-grid">
          {GALLERY.map((g) => (
            <div className="cw-tile" key={g.key}>
              <div className="cw-tile-visual"><GalleryVisual visualKey={g.key} /></div>
              <div className="cw-tile-body"><h3>{g.title}</h3><p>{g.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="cw-fs-head">
          <p className="micro" style={{ marginBottom: 12 }}>WHAT CREATIVES USE TWO FOR</p>
          <h2 className="display">Four documents, every week.</h2>
        </div>
        <div className="cw-filmstrip">
          {FILMSTRIP.map((f) => (
            <div className="cw-frame" key={f.title}>
              <div className="mini"><div className="l hi" /><div className="l" style={{ width: "80%" }} /><div className="l" style={{ width: "60%" }} /></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cw-closing">
        <p>Your workspace shouldn&apos;t fight your process. It should <span className="ac">disappear into it.</span></p>
      </section>

      <section className="cta-section">
        <h2 className="cta-title display">Start your first brief.</h2>
        <p className="cta-sub">Free to start. No credit card. Ready in a minute.</p>
        <a className="btn-dark" href="https://app.two.so/signup">Start for free</a>
      </section>
    </div>
  );
}
