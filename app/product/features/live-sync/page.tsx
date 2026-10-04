import type { Metadata } from "next";
import Link from "next/link";
import { SyncDemo } from "@/components/sync-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Live Sync: Instant Real-Time Document Sync | TWO",
};

const STEPS = [
  { n: "01", t: "Write anywhere", d: "In your browser, on your Mac or on your iPad." },
  { n: "02", t: "It saves as you type", d: "There is no save button. Every change is stored the moment you make it." },
  { n: "03", t: "Shows up everywhere", d: "Any other window or device with the doc open updates live." },
];

const SPECS = [
  { label: "Saving", value: "Automatic, as you type" },
  { label: "What syncs", value: "Docs, notes and Studio ideas" },
  { label: "Devices", value: "Web, Mac and iPad" },
  { label: "Native apps", value: "Mac app in progress, iPad app planned. Both install today as web apps." },
  { label: "Shared workspaces", value: "Collaborators see each other's edits live (Pro)" },
  { label: "Offline", value: "On the roadmap. For now, TWO needs a connection." },
  { label: "Included in", value: "Every plan, including Free" },
];

export default function LiveSyncPage() {
  return (
    <div className="features-frame">
      <section className="lsx-hero">
        <div className="lsx-crumbs">
          <Link href="/product/features">Features</Link>
          <span>/</span>
          <span className="cur">Live sync</span>
        </div>
        <h1 className="display">
          Every device.
          <br />
          <span>Always current.</span>
        </h1>
        <p>
          Write in your browser, pick it up on your iPad. Every edit saves as you type and shows up wherever TWO is
          open. No save button, no waiting.
        </p>
      </section>

      <section className="lsx-demo-wrap">
        <SyncDemo />
      </section>

      <section className="lsx-section">
        <p className="micro">How it works</p>
        <div className="lsx-steps">
          {STEPS.map((s, i) => (
            <div className="lsx-step" key={s.n}>
              <span className={`lsx-node${i === 0 ? " filled" : ""}`} />
              <span className="lsx-num">{s.n}</span>
              <b>{s.t}</b>
              <span>{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lsx-section lsx-glance">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            One version.
            <br />
            Always the latest.
          </h2>
        </div>
        <div className="lsx-specs">
          {SPECS.map((s) => (
            <div className="lsx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Open two screens."
        subtitle="Watch it happen."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "All features", href: "/product/features" }}
      />
    </div>
  );
}
