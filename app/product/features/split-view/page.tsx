import type { Metadata } from "next";
import Link from "next/link";
import { SplitDemo } from "@/components/split-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Split View Docs: Multi-Task & Compare Documents | TWO",
};

const USES = [
  { t: "Research + draft", d: "Notes on one side, the article on the other. Stop losing your thread mid-sentence." },
  { t: "Strategy + brief", d: "Keep your OKRs open while you write the product brief." },
  { t: "Last week + this week", d: "Your past review beside today's. See patterns, set sharper goals." },
  { t: "Template + your version", d: "The template on one side, your draft on the other." },
];

const STEPS = [
  { n: "01", t: "Turn on split view", d: "Click the split view button in the doc toolbar." },
  { n: "02", t: "Pick a doc or note", d: "Search or scroll, and it opens on the right." },
  { n: "03", t: "Drag to resize", d: "Give more room to whichever side needs it." },
];

const SPECS = [
  { label: "Panes", value: "Two, both fully editable" },
  { label: "Resize", value: "Drag the divider, from 25% to 75%" },
  { label: "Content", value: "Any doc or note, in any combination" },
  { label: "Remembers", value: "Your second doc, on each device" },
  { label: "Sync", value: "Live, across devices" },
  { label: "Works on", value: "Web, Mac and iPad" },
  { label: "Included in", value: "Every plan, including Free" },
];

export default function SplitViewPage() {
  return (
    <div className="features-frame">
      <section className="svx-hero">
        <div className="svx-crumbs">
          <Link href="/product/features">Features</Link>
          <span>/</span>
          <span className="cur">Split view</span>
        </div>
        <h1 className="display">
          Two docs.
          <br />
          <span>One screen.</span>
        </h1>
        <p>
          Open any doc or note beside the one you&apos;re writing. Drag the divider to give either side more room.
          Both sides stay fully editable.
        </p>
      </section>

      <section className="svx-demo-wrap">
        <SplitDemo />
      </section>

      <section className="svx-section svx-two">
        <div>
          <p className="micro">Made for</p>
          <h2 className="display">
            Reading and writing
            <br />
            at the same time.
          </h2>
        </div>
        <div className="svx-uses">
          {USES.map((u) => (
            <div className="svx-use" key={u.t}>
              <b>{u.t}</b>
              <span>{u.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="svx-section">
        <p className="micro">How it works</p>
        <div className="svx-steps">
          {STEPS.map((s, i) => (
            <div className="svx-step" key={s.n}>
              <span className={`svx-node${i === 0 ? " filled" : ""}`} />
              <span className="svx-num">{s.n}</span>
              <b>{s.t}</b>
              <span>{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="svx-section svx-two">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            Two panes.
            <br />
            No rules.
          </h2>
        </div>
        <div className="svx-specs">
          {SPECS.map((s) => (
            <div className="svx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="One to write."
        subtitle="One to think."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
      />
    </div>
  );
}
