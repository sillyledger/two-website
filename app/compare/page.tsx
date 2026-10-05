import type { Metadata } from "next";
import { PageCta } from "@/components/page-cta";
import { CHECKED, COMPETITORS } from "@/components/compare-data";

export const metadata: Metadata = {
  title: "Compare TWO with Notion, Apple Notes, Bear and Obsidian | TWO",
};

export default function CompareIndexPage() {
  return (
    <div className="features-frame">
      <section className="cpx-hero">
        <p className="micro">Compare</p>
        <h1 className="display">
          TWO, compared.
          <br />
          <span>Honestly.</span>
        </h1>
        <p className="cpx-intro">
          Each comparison says when the other app is the better pick, and when TWO is. Checked against every app in{" "}
          {CHECKED}.
        </p>
      </section>

      <section className="cpx-index">
        {COMPETITORS.map((c) => (
          <a href={`/compare/${c.slug}`} className="cpx-card" key={c.slug}>
            <span className="cpx-card-t">TWO vs {c.name}</span>
            <span className="cpx-card-d">{c.intro}</span>
            <span className="cpx-card-k">Pick {c.name} if</span>
            <span className="cpx-card-v">{c.them[0]}</span>
            <span className="cpx-card-go">See the comparison →</span>
          </a>
        ))}
      </section>

      <PageCta
        title="Try it yourself."
        subtitle="It's free to start."
        primary={{ label: "Start for free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
        note="Free for 30 docs. No card needed."
      />
    </div>
  );
}
