import type { Metadata } from "next";
import Link from "next/link";
import { LiveCoEditDemo, InviteDemo } from "@/components/shared-demos";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Shared Workspaces: Real-Time Team Collaboration | TWO",
};

const USES = [
  { t: "Client work", d: "Share briefs and drafts with a client as a Viewer or Commenter. They see exactly what you choose." },
  { t: "Co-writing", d: "Two people in one doc, editing at the same time, changes showing up live." },
  { t: "Feedback rounds", d: "Invite a reviewer as a Commenter. They can respond without changing your words." },
  { t: "A side project with a friend", d: "One shared space for the plan, the notes and the drafts. Your private work stays separate." },
];

const STEPS = [
  { n: "01", t: "Create a shared workspace", d: "Separate from your private one. Name it after the project." },
  { n: "02", t: "Invite by email", d: "Give each person a role: Editor, Commenter or Viewer." },
  { n: "03", t: "Write together, live", d: "See who else is in a doc and watch their edits appear as they type." },
];

const SPECS = [
  { label: "Roles", value: "Editor, Commenter, Viewer" },
  { label: "Invites", value: "By email, sent by the workspace owner" },
  { label: "Presence", value: "See who else is viewing a doc" },
  { label: "Editing", value: "Live, changes appear as people type" },
  { label: "Members on Pro", value: "2 invited people per shared workspace" },
  { label: "Members on Team", value: "Up to 10 (coming soon)" },
  { label: "Your private workspace", value: "Always stays private" },
  { label: "Price", value: "Flat. Inviting someone never changes your bill." },
];

export default function SharedWorkspacesPage() {
  return (
    <div className="features-frame">
      <section className="swx-hero">
        <div className="swx-crumbs">
          <Link href="/product/features">Features</Link>
          <span>/</span>
          <span className="cur">Shared workspaces</span>
          <span className="swx-tag">Pro</span>
        </div>
        <h1 className="display">
          Write together.
          <br />
          <span>Only if you want.</span>
        </h1>
        <p>
          Open a shared workspace for a project, invite someone by email, and write in the same doc at the same time.
          Every change shows up on their screen as you type. Your own workspace stays private.
        </p>
      </section>

      <section className="swx-live-wrap">
        <LiveCoEditDemo />
      </section>

      <section className="swx-section swx-invite">
        <div>
          <p className="micro">Invite</p>
          <h2 className="display">
            Pick who joins.
            <br />
            Pick what they do.
          </h2>
          <p className="swx-sub">
            Invite by email and give each person a role. Only the workspace owner can invite, and your private
            workspace is never part of it.
          </p>
        </div>
        <InviteDemo />
      </section>

      <section className="swx-section swx-two">
        <div>
          <p className="micro">Made for</p>
          <h2 className="display">
            A few people.
            <br />
            One project.
          </h2>
        </div>
        <div className="swx-uses">
          {USES.map((u) => (
            <div className="swx-use" key={u.t}>
              <b>{u.t}</b>
              <span>{u.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="swx-section">
        <p className="micro">How it works</p>
        <div className="swx-steps">
          {STEPS.map((s, i) => (
            <div className="swx-step" key={s.n}>
              <span className={`swx-node${i === 0 ? " filled" : ""}`} />
              <span className="swx-num">{s.n}</span>
              <b>{s.t}</b>
              <span>{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="swx-section swx-two">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            Private first.
            <br />
            Shared on purpose.
          </h2>
        </div>
        <div className="swx-specs">
          {SPECS.map((s) => (
            <div className="swx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Bring someone in."
        subtitle="Share on purpose."
        primary={{ label: "Try Pro free", href: "/pricing" }}
        secondary={{ label: "How sharing works", href: "/resources/help/collaboration/shared-workspaces" }}
        note="14 days free, no card needed."
      />
    </div>
  );
}
