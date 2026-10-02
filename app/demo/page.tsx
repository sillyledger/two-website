import type { Metadata } from "next";
import { DemoWidget } from "@/components/demo-widget";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Try TWO: Live Demo, No Signup Required",
  description:
    "Try split view, tabs, linked docs and Studio right in your browser. No account needed, and nothing you do is saved.",
};

export default function DemoPage() {
  return (
    <div className="features-frame">
      <section className="dv-hero">
        <div>
          <p className="micro">Live demo · No signup</p>
          <h1 className="display">
            Try TWO
            <br />
            <span>right here.</span>
          </h1>
        </div>
        <div className="dv-hero-r">
          <p>
            It works like the real app, with sample docs. Drag the divider, open linked docs, type anywhere, and turn an idea
            into a doc. Nothing you do here is saved.
          </p>
          <div className="dv-hero-btns">
            <a href="https://app.two.so/signup" className="dv-btn solid">Start writing free</a>
            <a href="/pricing" className="dv-btn outline">See pricing</a>
          </div>
        </div>
      </section>

      <section className="dv-demo-wrap">
        <DemoWidget />
      </section>

      <PageCta
        title="Like how it feels?"
        subtitle="It's better with your own docs."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
        note="Free for 30 docs. No AI, nothing to set up."
      />
    </div>
  );
}
