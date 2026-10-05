import type { Metadata } from "next";
import { SolutionsPicker } from "@/components/solutions-picker";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Solutions: TWO for Writers, Creatives, Solo Operators & Teams",
};

const SPECS = [
  { label: "AI", value: "None. Your words are never used to train anything." },
  { label: "Split view", value: "Two docs side by side, on every plan" },
  { label: "Saving", value: "As you type, synced live across your devices" },
  { label: "Studio", value: "Ideas and Canvas, on every plan (beta)" },
  { label: "Works on", value: "Any browser. Installs on Mac and iPad." },
  { label: "Price", value: "Free for 30 docs. Pro is $6 a month, never per seat." },
];

export default function SolutionsPage() {
  return (
    <div className="features-frame">
      <section className="six-hero">
        <p className="micro">Solutions</p>
        <h1 className="display">
          One editor.
          <br />
          <span>Four ways in.</span>
        </h1>
        <p className="six-intro">
          TWO is the same calm, AI-free editor for everyone. Each page below shows it from one angle. Pick the one
          closest to how you work, or let us pick.
        </p>
      </section>

      <SolutionsPicker />

      <section className="six-section six-two">
        <div>
          <p className="micro">In every version</p>
          <h2 className="display">
            Pick any one.
            <br />
            Same calm editor.
          </h2>
        </div>
        <div className="six-specs">
          {SPECS.map((s) => (
            <div className="six-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Still not sure?"
        subtitle="Try it free."
        primary={{ label: "Start for free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
        note="Free for 30 docs. No card needed."
      />
    </div>
  );
}
