import type { Metadata } from "next";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Product Features: Minimal Docs App, Sync & More | TWO",
};

export default function ProductFeaturesPage() {
  return (
    <div className="features-frame">
      {/* ============ HERO ============ */}
      <section className="fh-hero">
        <p className="micro">Features</p>
        <h1 className="display">Write. Think. Organize.</h1>
        <p className="fh-sub">
          Everything in TWO, grouped by what you are trying to get done. No AI, no databases, nothing to set up.
        </p>
        <div className="fh-toc">
          <a href="#write"><i>01</i>Write</a>
          <a href="#think"><i>02</i>Think</a>
          <a href="#organize"><i>03</i>Organize</a>
          <a href="#track"><i>04</i>Keep track</a>
          <a href="#share"><i>05</i>Share</a>
        </div>
      </section>

      {/* ============ 01 WRITE ============ */}
      <section id="write" className="fh-section">
        <div className="fh-head">
          <div>
            <span className="fh-num">01 · Write</span>
            <h2 className="display">Where finished<br />thinking lives.</h2>
          </div>
          <div className="fh-head-r">
            <p>A calm editor, and a second doc right beside it when you need one. Split view is the reason TWO exists.</p>
            <a href="/product/features/split-view">Explore split view →</a>
          </div>
        </div>

        <div className="fh-stage">
          <div className="fh-window">
            <div className="fh-tabs">
              <span className="on">Chapter three</span>
              <span>Research notes</span>
              <span>Outline</span>
            </div>
            <div className="fh-panes">
              <div className="fh-pane fh-pane-l">
                <p className="fh-doc-title">Chapter three</p>
                <p className="fh-doc-p">
                  By the time the ferry came in, Ana had already decided not to tell anyone about the letter. See{" "}
                  <span className="fh-chip">Research notes</span>
                </p>
                <p className="fh-doc-p fh-slash">/ta<span className="fh-caret" /></p>
                <div className="fh-slash-menu">
                  <div className="on">Table</div>
                  <div>Task List</div>
                  <div>Callout</div>
                </div>
              </div>
              <div className="fh-seam"><span /></div>
              <div className="fh-pane fh-pane-r">
                <p className="fh-doc-title sm">Research notes</p>
                <p className="fh-doc-p">Ferries run twice a day in winter. Fish market closes by noon.</p>
                <div className="fh-ln" style={{ width: "86%" }} />
                <div className="fh-ln" style={{ width: "72%" }} />
                <div className="fh-ln" style={{ width: "58%" }} />
              </div>
            </div>
          </div>

          <div className="fh-leader left fh-l-tabs">
            <span className="fh-lbl"><b>Tabs</b> keep<br />your place</span>
            <span className="fh-line" style={{ width: 22 }} />
            <span className="fh-tick" />
          </div>
          <div className="fh-leader left fh-l-slash">
            <span className="fh-lbl"><b>Type /</b> for<br />anything</span>
            <span className="fh-line" style={{ width: 50 }} />
            <span className="fh-tick" />
          </div>
          <div className="fh-leader fh-l-drag">
            <span className="fh-lbl"><b>Drag</b> to resize</span>
            <span className="fh-line" style={{ width: 1, height: 200 }} />
            <span className="fh-tick" />
          </div>
          <div className="fh-leader fh-l-scroll">
            <span className="fh-tick" />
            <span className="fh-line" style={{ width: 22 }} />
            <span className="fh-lbl right">Each side<br /><b>scrolls alone</b></span>
          </div>
        </div>

        <div className="fh-cols">
          <div className="fh-col">
            <b>Templates</b>
            <span>Meeting notes, briefs, weekly reviews and podcast episodes, ready to fill in.</span>
            <a href="/resources/templates">Browse templates →</a>
          </div>
          <div className="fh-col">
            <b>Export</b>
            <span>Any doc as PDF or Markdown, or copy it as Markdown in one click.</span>
            <em>Every plan</em>
          </div>
          <div className="fh-col">
            <b>Linked docs</b>
            <span>Link one doc from inside another and jump straight there. Type / for everything else.</span>
            <a href="/resources/help/docs-editor/linked-docs">Help article →</a>
          </div>
        </div>
      </section>

      {/* ============ 02 THINK (full-width band) ============ */}
      <section id="think" className="fh-band">
        <div className="fh-head">
          <div>
            <span className="fh-num">02 · Think <span className="fh-tag new">New · Beta</span></span>
            <h2 className="display">For the thinking<br />that isn&apos;t a doc yet.</h2>
          </div>
          <div className="fh-head-r">
            <p>Studio holds everything before a doc: a list of ideas and an open canvas to work them out. When one is ready, it becomes a doc.</p>
            <a href="/product/features/studio">Explore Studio →</a>
          </div>
        </div>

        <div className="fh-flow">
          <svg className="fh-flow-lines" width="1084" height="330" fill="none" stroke="#8f89e6" strokeWidth="1.3" aria-hidden="true">
            <path d="M290 120 C 345 120, 345 90, 400 90" />
            <path d="M290 120 C 350 120, 360 230, 420 230" />
            <path d="M695 150 C 740 150, 740 130, 780 130" />
          </svg>

          <div className="fh-ideas">
            <div className="fh-ideas-head"><b>Ideas</b><span>24</span></div>
            <div className="fh-idea"><span className="fh-dot" style={{ background: "#6ec39a" }} /><span className="t">Why I write without AI</span></div>
            <div className="fh-idea"><span className="fh-dot" style={{ background: "#5a5a64" }} /><span className="t">Harbor photo essay</span><span className="fh-turn">Turn into Doc</span></div>
            <div className="fh-idea"><span className="fh-dot" style={{ background: "#e0a44d" }} /><span className="t">Episode 12</span></div>
          </div>

          <div className="fh-cv fh-cv-note"><span>NOTE</span>Quieter, like a bookshop.</div>
          <div className="fh-cv fh-cv-swatches">
            <div><i style={{ background: "#8f89e6" }} /><u /></div>
            <div><i style={{ background: "#c98a5e" }} /><u /></div>
          </div>
          <div className="fh-cv fh-cv-shape">The hook</div>
          <div className="fh-cv fh-cv-diamond" />

          <div className="fh-docsheet">
            <p className="fh-doc-title sm">Harbor photo essay</p>
            <span className="fh-docsheet-status">In progress · linked to its idea</span>
            <div className="fh-ln" style={{ width: "94%" }} />
            <div className="fh-ln" style={{ width: "86%" }} />
            <div className="fh-ln" style={{ width: "72%" }} />
            <div className="fh-ln" style={{ width: "90%" }} />
            <div className="fh-ln" style={{ width: "48%" }} />
          </div>
        </div>

        <div className="fh-captions">
          <div className="fh-col">
            <span className="fh-num sm">01</span>
            <b>Ideas</b>
            <span>What you might write next, with a type, status and platform. List or board.</span>
          </div>
          <div className="fh-col">
            <span className="fh-num sm">02</span>
            <b>Canvas</b>
            <span>Pin docs and notes, add images, shapes and color cards, and connect them.</span>
            <a href="/resources/help/studio/canvas">Canvas guide →</a>
          </div>
          <div className="fh-col">
            <span className="fh-num sm">03</span>
            <b>Turn into Doc</b>
            <span>One click makes an idea a real doc. Rename either one and the other follows.</span>
          </div>
        </div>
      </section>

      {/* ============ 03 ORGANIZE (annotated sidebar) ============ */}
      <section id="organize" className="fh-section">
        <div className="fh-head">
          <div>
            <span className="fh-num">03 · Organize</span>
            <h2 className="display">Find anything<br />without a system.</h2>
          </div>
          <div className="fh-head-r">
            <p>Everything lives in one sidebar. No setup, no hierarchy you have to design before you can start.</p>
          </div>
        </div>

        <div className="fh-map">
          <div className="fh-sidebar" aria-hidden="true">
            <div className="fh-sbi hi search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              Search<span className="kbd">⌘K</span>
            </div>
            <div className="fh-sbi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z" /></svg>
              Home
            </div>
            <div className="fh-sbi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /></svg>
              Docs
            </div>
            <div className="fh-sbi hi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
              Folders
            </div>
            <div className="fh-sbi hi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 3H5a2 2 0 00-2 2v14a2 2 0 002 2h9l7-7V5a2 2 0 00-2-2z" /></svg>
              Notes
            </div>
            <div className="fh-sbi hi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
              Planner
            </div>
            <div className="fh-sbi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>
              Activity
            </div>
            <div className="fh-sbi hi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4v16M9 4v16M14 5l5 15" /></svg>
              Library
            </div>
            <div className="fh-sbi">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l9 5-9 5-9-5z" /></svg>
              Studio
            </div>
          </div>

          <svg className="fh-map-lines" width="500" height="420" fill="none" stroke="rgba(143,137,230,0.55)" strokeWidth="1" aria-hidden="true">
            <path d="M258 36 C 375 36, 375 14, 490 14" />
            <path d="M258 165 C 375 165, 375 96, 490 96" />
            <path d="M258 203 C 375 203, 375 178, 490 178" />
            <path d="M258 241 C 375 241, 375 260, 490 260" />
            <path d="M258 317 C 375 317, 375 342, 490 342" />
          </svg>
          <span className="fh-tick fh-map-tick" style={{ top: 9 }} />
          <span className="fh-tick fh-map-tick" style={{ top: 91 }} />
          <span className="fh-tick fh-map-tick" style={{ top: 173 }} />
          <span className="fh-tick fh-map-tick" style={{ top: 255 }} />
          <span className="fh-tick fh-map-tick" style={{ top: 337 }} />

          <div className="fh-ann" style={{ top: 2 }}>
            <b>Quick Jump <small>⌘K</small></b>
            <span>Type a few letters to open any doc or note. <a href="/resources/help/organizing/favorites-quick-jump">Help →</a></span>
          </div>
          <div className="fh-ann" style={{ top: 84 }}>
            <b>Folders</b>
            <span>Folders inside folders, with breadcrumbs back up. Pin the ones you use most. <a href="/resources/help/organizing/folders">Help →</a></span>
          </div>
          <div className="fh-ann" style={{ top: 166 }}>
            <b>Notes</b>
            <span>Quick private notes with color categories, nested as deep as you like.</span>
          </div>
          <div className="fh-ann" style={{ top: 248 }}>
            <b>Planner</b>
            <span>Tasks with due dates and priority, attached to the doc they belong to.</span>
          </div>
          <div className="fh-ann" style={{ top: 330 }}>
            <b>Library</b>
            <span>Everything you have written in one place, grouped by folder or label. <a href="/resources/help/organizing/library">Help →</a></span>
          </div>
        </div>
      </section>

      {/* ============ 04 KEEP TRACK (timeline) ============ */}
      <section id="track" className="fh-section">
        <div className="fh-head">
          <div>
            <span className="fh-num">04 · Keep track</span>
            <h2 className="display">Nothing gets lost.</h2>
          </div>
          <div className="fh-head-r">
            <p>There is no save button. Every change is kept, and you can always go back.</p>
          </div>
        </div>

        <div className="fh-timeline">
          <div className="fh-col">
            <span className="fh-node filled" />
            <b>Live sync</b>
            <span>Every edit shows up wherever TWO is open. No conflicts to sort out.</span>
            <a href="/product/features/live-sync">Explore live sync →</a>
          </div>
          <div className="fh-col">
            <span className="fh-node" />
            <b>Version history</b>
            <span>Look back at earlier versions of a doc and restore one.</span>
            <a href="/resources/help/docs-editor/version-history">Help →</a>
          </div>
          <div className="fh-col">
            <span className="fh-node" />
            <b>Activity</b>
            <span>A running log of what changed across docs, notes and folders.</span>
            <a href="/resources/help/collaboration/activity">Help →</a>
          </div>
          <div className="fh-col">
            <span className="fh-node" />
            <b>Trash</b>
            <span>Deleted docs wait in Trash until you restore them or clear them out.</span>
            <em>Every plan</em>
          </div>
        </div>
      </section>

      {/* ============ 05 SHARE (one line) ============ */}
      <section id="share" className="fh-share">
        <span className="fh-num">05 · Share <span className="fh-tag pro">Pro</span></span>
        <p className="display">
          Private first. Open a shared workspace for a client or collaborator when you need one.{" "}
          <span>Flat price, no seats.</span>
        </p>
        <a href="/product/features/shared-workspaces">Shared workspaces →</a>
      </section>

      {/* ============ CTA ============ */}
      <PageCta
        title="Everything but sharing"
        subtitle="is on the Free plan."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
        note="Try Pro for 14 days, no card."
      />
    </div>
  );
}
