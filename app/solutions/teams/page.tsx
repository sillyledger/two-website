import type { Metadata } from "next";
import { SeatsDemo } from "@/components/teams-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "TWO for Small Teams: Shared Workspaces, Flat Price | TWO",
};

const FEATURES = [
  { t: "Write together, live", d: "Two people in one doc, edits showing up as they type." },
  { t: "See who's there", d: "See who else has a doc open before you start rewriting it." },
  { t: "Roles that fit", d: "Editor, Commenter or Viewer. Only the owner sends invites." },
  { t: "Know what changed", d: "Activity shows which docs changed and who edited them last." },
  { t: "Go back in time", d: "Version history keeps 30 days on Pro, so nothing is lost for good." },
  { t: "Send it out", d: "Export any doc as a clean PDF or Markdown for people outside the team." },
];

const PRIVATE_DOCS = ["Q4 plan", "Journal", "Pricing ideas", "Reading list"];

const SHARED_DOCS = [
  { t: "Brand brief", who: "Sarah" },
  { t: "Meeting notes, Oct 2", who: "You" },
  { t: "Moodboard plan", who: "Mark" },
  { t: "Launch checklist", who: "You" },
];

const SPECS = [
  { label: "Today", value: "Pro: $6 a month, or $5 a month billed yearly" },
  { label: "People on Pro", value: "You plus 2 invited people per shared workspace" },
  { label: "Team plan", value: "Up to 10 people, 50 GB, $10 a month flat (coming soon)" },
  { label: "Roles", value: "Editor, Commenter, Viewer. Only the owner invites." },
  { label: "Editing", value: "Live, and you see who's in a doc" },
  { label: "Not included", value: "Share links for single docs, per-person cursors" },
  { label: "Free plan", value: "Up to 30 docs for one person. Sharing needs Pro." },
];

function DocIcon() {
  return <i className="tmx-doc-i" aria-hidden="true" />;
}

export default function ForTeamsPage() {
  return (
    <div className="features-frame">
      <section className="tmx-hero">
        <p className="micro">For small teams</p>
        <h1 className="display">
          A small team.
          <br />
          <span>No admin needed.</span>
        </h1>
        <p className="tmx-intro">
          Open a shared workspace for a project, invite the people you write with, and edit the same doc live.
          Your own docs stay private. One flat price, never per seat.
        </p>
        <div className="tmx-ctas">
          <a className="tmx-btn solid" href="/pricing">Try Pro free</a>
          <a className="tmx-btn outline" href="/product/features/shared-workspaces">How sharing works</a>
        </div>
        <div className="tmx-kv">
          <div><span className="k">Pro</span><span className="v">You plus 2 people</span></div>
          <div><span className="k">Team</span><span className="v">Up to 10, coming soon</span></div>
          <div><span className="k">Price</span><span className="v">Flat, never per seat</span></div>
        </div>
      </section>

      <section className="tmx-seats">
        <div>
          <p className="micro">Who&apos;s in?</p>
          <h2 className="display">
            Add people.
            <br />
            The price stays.
          </h2>
          <p className="tmx-sub">
            Try it: add teammates and see which plan fits. Within a plan, one more person never changes the bill.
          </p>
        </div>
        <SeatsDemo />
      </section>

      <section className="tmx-section tmx-two">
        <div>
          <p className="micro">In a shared workspace</p>
          <h2 className="display">
            Everything you
            <br />
            need. No more.
          </h2>
        </div>
        <div className="tmx-feats">
          {FEATURES.map((f) => (
            <div className="tmx-feat" key={f.t}>
              <b>{f.t}</b>
              <span>{f.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tmx-section tmx-two">
        <div>
          <p className="micro">Private first</p>
          <h2 className="display">
            Your desk.
            <br />
            The team table.
          </h2>
          <p className="tmx-sub">
            Shared workspaces sit next to your private one. Nothing moves across unless you put it there.
          </p>
        </div>
        <div className="tmx-wss">
          <div className="tmx-ws">
            <div className="tmx-ws-head">
              <b>My Workspace</b>
              <span className="tmx-tag plain">Only you</span>
            </div>
            {PRIVATE_DOCS.map((d, i) => (
              <div className={i === 3 ? "tmx-ws-doc x" : "tmx-ws-doc"} key={d}>
                <DocIcon />
                {d}
              </div>
            ))}
          </div>
          <div className="tmx-ws shared">
            <div className="tmx-ws-head">
              <b>Studio Kiko</b>
              <span className="tmx-tag indigo">You + 2</span>
            </div>
            {SHARED_DOCS.map((d, i) => (
              <div className={i === 3 ? "tmx-ws-doc x" : "tmx-ws-doc"} key={d.t}>
                <DocIcon />
                {d.t}
                <span className="who">{d.who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tmx-section tmx-two">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            Flat price.
            <br />
            Clear limits.
          </h2>
        </div>
        <div className="tmx-specs">
          {SPECS.map((s) => (
            <div className="tmx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Start with three."
        subtitle="Grow to ten."
        primary={{ label: "Try Pro free", href: "/pricing" }}
        secondary={{ label: "How sharing works", href: "/product/features/shared-workspaces" }}
        note="14 days free, no card needed."
      />
    </div>
  );
}
