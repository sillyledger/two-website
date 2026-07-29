import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TWO for Solo Founders & Builders | Minimalist Docs Editor",
};

const TOOLKIT = [
  { title: "Always with you", desc: "iPad on the go, Mac at your desk. Live Sync means your work follows you, not the other way around." },
  { title: "Fast to open, fast to write", desc: "No loading screens, no setup. Open TWO and you're writing within a second, every time." },
  { title: "Every document, one place", desc: "Proposals, notes, drafts, and plans live in a single library — searchable, not scattered across five apps." },
  { title: "Autosave, always", desc: "Every keystroke is saved as you type. Close the laptop mid-sentence — it's exactly as you left it." },
  { title: "Clean enough to think in", desc: "No sidebars of unrelated features, no notification noise. Just you and the page." },
  { title: "Priced for one person", desc: "No per-seat pricing, no enterprise tiers you'll never use. One fair price, built for individuals." },
];

export default function ForSoloPage() {
  return (
    <div className="features-frame">
      <section className="sl-hero">
        <span className="sl-tag">For Solo Operators</span>
        <h1 className="display">
          One document, <span className="ac">fully yours.</span>
          <br />
          Nothing to manage but the work.
        </h1>
        <p className="sub">
          TWO is built for indie founders, consultants, and freelancers who need to write fast and think clearly —
          without babysitting a workspace built for a team of fifty.
        </p>
        <div className="cta-row">
          <a className="btn solid" href="https://app.two.so/signup">Start for free</a>
          <a className="btn outline" href="/product/features/split-view">See how it works</a>
        </div>
      </section>

      <section className="sl-doc-wrap">
        <div className="sl-doc-outer">
          <div className="sl-doc">
            <div className="sl-doc-bar">
              <i /><i /><i />
              <span className="saved"><span className="dot" />Saved</span>
            </div>
            <div className="sl-title-ln">Q3 Retainer Proposal — Draft 2</div>
            <div className="sl-ln sl-w97" />
            <div className="sl-ln sl-w88" />
            <div className="sl-ln sl-w80" />
            <div className="sl-ln sl-w70" />
            <div className="sl-ln sl-w55" style={{ marginBottom: 22 }} />
            <div className="sl-ln sl-w97" />
            <div className="sl-ln sl-w80" />
            <div className="sl-ln sl-w40" />
          </div>
          <div className="sl-leader sl-l1"><div className="tick" /><div className="line" /><div className="lbl">Open — <b>in under a second</b></div></div>
          <div className="sl-leader sl-l2"><div className="tick" /><div className="line" /><div className="lbl">Autosaved — <b>never lose a line</b></div></div>
          <div className="sl-leader sl-l3"><div className="tick" /><div className="line" /><div className="lbl"><b>iPad to Mac</b> — same doc, instantly</div></div>
        </div>
      </section>
      <div className="sl-doc-cap">
        <p>This is the whole product: a document, and nothing standing between you and it.</p>
      </div>

      <section className="sl-honest">
        <div className="sl-honest-grid">
          <div className="sl-honest-left display">
            TWO won&apos;t run your operation. It&apos;s not trying to.
          </div>
          <div className="sl-honest-right">
            <p>
              You don&apos;t need another dashboard, another database, another tool promising to replace your entire
              stack. You need somewhere to write a proposal that actually sounds like you, capture a strategy before
              it slips, and keep client notes straight — without turning &quot;write a document&quot; into a project
              of its own.
            </p>
            <p>
              TWO does one thing: it&apos;s the fastest, cleanest place to write. No project boards, no CRM, no
              invoicing bolted on. If your operation needs those, use the tools built for them — and let TWO be
              where the thinking and the writing actually happen.
            </p>
          </div>
        </div>
      </section>

      <section className="sl-list-wrap">
        <div className="sl-list-head">
          <p className="micro" style={{ marginBottom: 14 }}>BUILT FOR HOW SOLO OPERATORS ACTUALLY WORK</p>
          <h2 className="display">Six reasons it stays out of your way.</h2>
        </div>
        <div className="sl-tk-list">
          {TOOLKIT.map((item) => (
            <div className="sl-tk-item" key={item.title}>
              <div className="mark" />
              <div className="body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sl-price">
        <div className="sl-price-inner">
          <div className="sl-price-left">
            <h3 className="display">No team pricing. No per-seat tax.</h3>
            <p>Just a workspace, priced for the person actually using it.</p>
          </div>
          <div className="sl-price-right">
            <div className="sl-price-fact"><div className="num">$0</div><div className="lbl">Free to start</div></div>
            <div className="sl-price-fact"><div className="num">$6/mo</div><div className="lbl">Pro, monthly</div></div>
            <div className="sl-price-fact"><div className="num">1</div><div className="lbl">Person, not a seat count</div></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title display">Write the next proposal in TWO.</h2>
        <p className="cta-sub">Free to start. No credit card. Ready in a minute.</p>
        <a className="btn-dark" href="https://app.two.so/signup">Start for free</a>
      </section>
    </div>
  );
}
