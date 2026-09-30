import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio: Ideas & Canvas for Writers | TWO",
};

const IDEAS = [
  { title: "Why I write without AI", type: "Post", status: "Published", statusClass: "pub", platform: "Blog" },
  { title: "Harbor towns photo essay", type: "Post", status: "Not started", statusClass: "", platform: "Newsletter" },
  { title: "Episode 12: building quietly", type: "Audio", status: "In progress", statusClass: "prog", platform: "Podcast" },
  { title: "Desk setup tour", type: "Video", status: "Not started", statusClass: "", platform: "YouTube" },
];

const STEPS = [
  { n: "01", t: "Jot the idea", d: "Add it to Ideas with a title. Type, platform and category are optional." },
  { n: "02", t: "Work it out on a canvas", d: "Pin the docs and notes it touches, add colors, shapes and images, draw the connections." },
  { n: "03", t: "Write it as a doc", d: "Turn it into a doc, then open your canvas notes beside it in split view." },
];

const COMPARE = [
  { label: "Best for", docs: "Finished, long-form writing", notes: "Quick private thoughts", studio: "Ideas and visual thinking" },
  { label: "Organize with", docs: "Folders and labels", notes: "Nested color categories", studio: "Nested color categories" },
  { label: "Split view", docs: "Yes", notes: "Yes", studio: "Pin into a canvas" },
  { label: "Shareable", docs: "In shared workspaces", notes: "Private only", studio: "Private for now" },
];

const SPECS = [
  { label: "Canvas items", value: "Docs, notes, images, text, color cards, shapes" },
  { label: "Shapes", value: "Rectangle, rounded, circle, diamond. Resizable, with text inside" },
  { label: "Idea fields", value: "Title, type, status, platform, category" },
  { label: "Idea views", value: "List or board" },
  { label: "Included in", value: "Every plan, including Free" },
];

export default function StudioFeaturePage() {
  return (
    <div className="features-frame">
      {/* ============ HERO ============ */}
      <section className="sd-hero">
        <div className="sd-crumbs">
          <a href="/product/features">Features</a>
          <span>/</span>
          <span className="cur">Studio</span>
        </div>
        <div className="sd-hero-grid">
          <div>
            <p className="sd-eyebrow">
              <span className="micro">Studio</span>
              <span className="sd-tag">Beta</span>
            </p>
            <h1 className="display">For the thinking<br />that isn&apos;t a doc yet.</h1>
          </div>
          <div>
            <p className="sd-lead">
              Docs are for finished thinking. Studio holds everything before that: a list of ideas you might write,
              and open canvases to work them out. When an idea is ready, it becomes a doc in one click.
            </p>
            <div className="sd-btns">
              <a href="https://app.two.so/signup" className="sd-btn solid">Try Studio free</a>
              <a href="/resources/help/studio" className="sd-btn outline">Read the guide</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CANVAS STAGE ============ */}
      <section className="sd-stage-scroll">
        <div className="sd-stage">
          <div className="sd-board" aria-hidden="true">
            <div className="sd-toolbar">
              <span className="on">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b8ff" strokeWidth="1.8"><path d="M4 4l7 16 2-7 7-2z" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><path d="M15 3H5a2 2 0 00-2 2v14a2 2 0 002 2h9l7-7V5a2 2 0 00-2-2z" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><path d="M5 5h14M12 5v14" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-8 8" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="3" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><circle cx="12" cy="12" r="8" /></svg>
              </span>
            </div>
            <div className="sd-bc">Studio › Canvas › Brand refresh</div>

            <svg className="sd-lines" width="1084" height="580" fill="none" stroke="#8f89e6" strokeWidth="1.4">
              <path d="M314 175 C 380 175, 380 139, 447 139" />
              <path d="M314 175 C 380 175, 380 301, 447 301" />
              <path d="M619 139 C 685 139, 685 234, 750 234" />
              <path d="M619 301 C 685 301, 685 234, 750 234" />
            </svg>

            <div className="sd-cv sd-cv-text">
              <span className="k">TEXT</span>
              What should the rebrand feel like?
            </div>
            <div className="sd-cv sd-cv-doc">
              <span className="k doc">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e0b48c" strokeWidth="2"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /></svg>
                DOC
              </span>
              <b>Client brief</b>
              <span className="m">Edited 2h ago</span>
            </div>
            <div className="sd-cv sd-cv-note">
              <span className="k">NOTE</span>
              &ldquo;Quieter, like a bookshop, not a gallery.&rdquo;
            </div>
            <div className="sd-shape">Direction: Calm</div>
            <div className="sd-swatches">
              <div><i style={{ background: "#8f89e6" }} /><u>#8F89E6</u></div>
              <div><i style={{ background: "#c98a5e" }} /><u>#C98A5E</u></div>
              <div><i style={{ background: "#e8e4da" }} /><u>#E8E4DA</u></div>
            </div>
            <div className="sd-photo">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5a5a64" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-8 8" /></svg>
              Reference photo
            </div>
            <div className="sd-diamond" />
            <div className="sd-zoom"><span>−</span><span>100%</span><span>+</span></div>
          </div>

          <div className="sd-leader sd-l-pin">
            <span className="sd-lbl"><b>Pin</b> docs &amp; notes</span>
            <span className="sd-line" style={{ height: 132 }} />
            <span className="sd-tick" />
          </div>
          <div className="sd-leader sd-l-shape">
            <span className="sd-lbl"><b>Shapes</b> with text inside</span>
            <span className="sd-line" style={{ height: 205 }} />
            <span className="sd-tick" />
          </div>
          <div className="sd-leader sd-l-swatch">
            <span className="sd-tick" />
            <span className="sd-line" style={{ height: 213 }} />
            <span className="sd-lbl"><b>Color</b> cards</span>
          </div>
        </div>
      </section>

      <div className="sd-kv">
        <div><span className="k">Canvas</span><span className="v">Infinite, pan and zoom</span></div>
        <div><span className="k">Connect</span><span className="v">Draw lines between anything</span></div>
        <div><span className="k">Organize</span><span className="v">Nested color categories</span></div>
      </div>

      {/* ============ IDEAS ============ */}
      <section className="sd-split">
        <div>
          <p className="micro">Ideas</p>
          <h2 className="display">A list of what you<br />might write next.</h2>
          <p className="sd-body">
            Give each idea a type, a status and the place it will live, like your blog or your newsletter. Sort it as
            a list or group it on a board. It is deliberately simple: a place to keep ideas from getting lost, not a
            content calendar.
          </p>
        </div>
        <div className="sd-panel">
          <div className="sd-panel-head">
            <b>Ideas</b>
            <span className="count">24</span>
            <span className="sd-seg"><span className="on">List</span><span>Board</span></span>
          </div>
          {IDEAS.map((idea) => (
            <div className="sd-irow" key={idea.title}>
              <span>{idea.title}</span>
              <span className="sd-chip">{idea.type}</span>
              <span className={`sd-status ${idea.statusClass}`}>{idea.status}</span>
              <span className="sd-plat">{idea.platform}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TURN INTO DOC ============ */}
      <section className="sd-split rev">
        <div className="sd-panel sd-convert">
          <div className="sd-convert-idea">
            <span className="k">IDEA</span>
            <b>Harbor towns photo essay</b>
            <span className="sd-turn">Turn into Doc</span>
          </div>
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#8f89e6" strokeWidth="1.5" aria-hidden="true"><path d="M2 10h34M28 3l8 7-8 7" /></svg>
          <div className="sd-convert-doc">
            <b>Harbor towns photo essay</b>
            <div className="sd-ln" style={{ width: "92%" }} />
            <div className="sd-ln" style={{ width: "78%" }} />
            <div className="sd-ln" style={{ width: "60%" }} />
            <span className="st">Status set to In progress</span>
          </div>
        </div>
        <div>
          <p className="micro">Turn into Doc</p>
          <h2 className="display">When it&apos;s ready,<br />it becomes a doc.</h2>
          <p className="sd-body">
            One click creates a real doc from any idea and moves it to In progress. The two stay linked: rename the
            doc and the idea updates, rename the idea and the open doc updates too, live.
          </p>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="sd-section">
        <p className="micro">How it works</p>
        <div className="sd-steps">
          {STEPS.map((s) => (
            <div className="sd-step" key={s.n}>
              <span className="n">{s.n}</span>
              <p className="t">{s.t}</p>
              <p className="d">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DOCS / NOTES / STUDIO ============ */}
      <section className="sd-section">
        <p className="micro">Docs, Notes or Studio?</p>
        <h2 className="display">Three places, three jobs.</h2>
        <div className="sd-table-wrap">
          <div className="sd-table">
            <div className="sd-cell"></div>
            <div className="sd-cell head">Docs</div>
            <div className="sd-cell head">Notes</div>
            <div className="sd-cell head">Studio <span className="sd-tag">Beta</span></div>
            {COMPARE.map((row, i) => (
              <div className={`sd-trow${i === COMPARE.length - 1 ? " last" : ""}`} key={row.label}>
                <div className="sd-cell label">{row.label}</div>
                <div className="sd-cell">{row.docs}</div>
                <div className="sd-cell">{row.notes}</div>
                <div className="sd-cell">{row.studio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AT A GLANCE ============ */}
      <section className="sd-section">
        <p className="micro">At a glance</p>
        <div className="sd-specs">
          {SPECS.map((s) => (
            <div className="sd-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="sd-cta">
        <h2 className="display">
          Start with an idea.<br />
          <span>Finish with a doc.</span>
        </h2>
        <div className="sd-btns">
          <a href="https://app.two.so/signup" className="sd-btn solid">Try Studio free</a>
          <a href="/product/features" className="sd-btn outline">All features</a>
        </div>
      </section>
    </div>
  );
}
