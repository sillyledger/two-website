import type { Metadata } from "next";
import { SoloDemo } from "@/components/solo-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "TWO for Solo Work: Freelancers, Founders and Writers | TWO",
};

const USES = [
  { t: "Client proposals", d: "Draft with the call notes open beside it. Export a clean PDF when it's ready to send." },
  { t: "Plans and strategy", d: "A product brief, a quarterly plan, a weekly review. Start from a template or a blank page." },
  { t: "Writing and newsletters", d: "Keep post ideas in Ideas, turn the good ones into docs, and mark them published." },
  { t: "The small stuff", d: "Meeting notes, client details and quick lists live in Notes, sorted into nested categories." },
];

const IN_TWO = [
  "Docs with split view and tabs",
  "Notes in nested categories",
  "Ideas and Canvas in Studio",
  "Tasks linked to your docs",
  "Export to PDF and Markdown",
];

const NOT_IN_TWO = [
  "A CRM or invoicing",
  "Databases and dashboards",
  "AI writing or summaries",
  "Per-seat pricing",
  "A setup project before you write",
];

const SPECS = [
  { label: "Free", value: "Up to 30 docs, no card, no time limit" },
  { label: "Pro", value: "$6 a month, or $5 a month billed yearly" },
  { label: "Pro adds", value: "Unlimited docs, 10 GB, 30 days of version history" },
  { label: "Saving", value: "As you type, synced live across your devices" },
  { label: "Works on", value: "Any browser. Installs on Mac and iPad." },
  { label: "AI", value: "None. Your words are never used to train anything." },
  { label: "Sharing", value: "Optional. Invite 2 people on Pro when you need to." },
];

export default function ForSoloPage() {
  return (
    <div className="features-frame">
      <section className="slx-hero">
        <p className="micro">For solo work</p>
        <h1 className="display">
          One person.
          <br />
          <span>Two docs open.</span>
        </h1>
        <p className="slx-intro">
          Proposals, client notes, plans and drafts in one calm place. Write in one doc with the other open beside
          it. No AI, no team admin, never priced per seat.
        </p>
        <div className="slx-ctas">
          <a className="slx-btn solid" href="https://app.two.so/signup">Start for free</a>
          <a className="slx-btn outline" href="/demo">Try the demo</a>
        </div>
        <div className="slx-kv">
          <div><span className="k">For</span><span className="v">Freelancers, founders, writers</span></div>
          <div><span className="k">Free</span><span className="v">Up to 30 docs</span></div>
          <div><span className="k">AI</span><span className="v">None, on purpose</span></div>
        </div>
      </section>

      <SoloDemo />

      <section className="slx-section slx-two">
        <div>
          <p className="micro">Made for</p>
          <h2 className="display">
            One person.
            <br />
            Many hats.
          </h2>
        </div>
        <div className="slx-uses">
          {USES.map((u) => (
            <div className="slx-use" key={u.t}>
              <b>{u.t}</b>
              <span>{u.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="slx-section slx-two">
        <div>
          <p className="micro">Honest about it</p>
          <h2 className="display">
            It won&apos;t run
            <br />
            your business.
          </h2>
          <p className="slx-sub">TWO is where the thinking and the writing happen. Use the tools built for the rest.</p>
        </div>
        <div className="slx-yn-cols">
          <div>
            <p className="micro">In TWO</p>
            {IN_TWO.map((x) => (
              <div className="slx-yn" key={x}>
                <i aria-hidden="true">✓</i>
                {x}
              </div>
            ))}
          </div>
          <div>
            <p className="micro">Not in TWO</p>
            {NOT_IN_TWO.map((x) => (
              <div className="slx-yn no" key={x}>
                <i aria-hidden="true">×</i>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slx-section slx-two">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            Fair price.
            <br />
            No seat count.
          </h2>
        </div>
        <div className="slx-specs">
          {SPECS.map((s) => (
            <div className="slx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Do the work."
        subtitle="Skip the setup."
        primary={{ label: "Start for free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
        note="Free for 30 docs. No card needed."
      />
    </div>
  );
}
