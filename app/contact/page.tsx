import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Bug, Lightbulb, CreditCard, BookOpen } from "lucide-react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Contact | TWO",
  description: "Get in touch with TWO. Questions, bugs, feature ideas and billing.",
};

const EMAIL = "hey@two.so";

export default function ContactPage() {
  return (
    <div className="features-frame">
      <section className="cx-hero">
        <p className="micro">Contact</p>
        <h1 className="display">
          Let&apos;s talk.
          <br />
          <span>We read everything.</span>
        </h1>
      </section>

      <section className="cx-grid">
        <div className="cx-card">
          <p className="micro">Email us directly</p>
          <a href={`mailto:${EMAIL}`} className="display cx-email">{EMAIL}</a>
          <p className="cx-note">We typically reply within 1 business day.</p>
          <div className="cx-btns">
            <a href={`mailto:${EMAIL}`} className="cx-btn solid">Write an email</a>
            <CopyEmailButton email={EMAIL} />
          </div>
        </div>

        <div className="cx-routes">
          <p className="micro cx-routes-label">What&apos;s it about?</p>
          <a href={`mailto:${EMAIL}`} className="cx-route">
            <span className="cx-ic" style={{ color: "var(--indigo)" }}><HelpCircle size={16} /></span>
            <span className="cx-txt"><b>A question</b><span>Anything about TWO, your account or your docs.</span></span>
            <span className="cx-go">Email us →</span>
          </a>
          <Link href="/report-a-bug" className="cx-route">
            <span className="cx-ic" style={{ color: "#e57373" }}><Bug size={16} /></span>
            <span className="cx-txt"><b>Something&apos;s broken</b><span>Tell us what happened and we&apos;ll fix it.</span></span>
            <span className="cx-go">Report a bug →</span>
          </Link>
          <a href={`mailto:${EMAIL}?subject=Feature%20idea`} className="cx-route">
            <span className="cx-ic" style={{ color: "var(--green)" }}><Lightbulb size={16} /></span>
            <span className="cx-txt"><b>A feature idea</b><span>What should we build next? Check the roadmap first.</span></span>
            <span className="cx-go">Suggest it →</span>
          </a>
          <a href={`mailto:${EMAIL}?subject=Billing`} className="cx-route">
            <span className="cx-ic" style={{ color: "#e0a44d" }}><CreditCard size={16} /></span>
            <span className="cx-txt"><b>Billing or your plan</b><span>Changes, cancellations and receipts.</span></span>
            <span className="cx-go">Email billing →</span>
          </a>
          <Link href="/resources/help" className="cx-route">
            <span className="cx-ic" style={{ color: "var(--clay)" }}><BookOpen size={16} /></span>
            <span className="cx-txt"><b>How do I…?</b><span>Guides for every part of TWO.</span></span>
            <span className="cx-go">Help Center →</span>
          </Link>
          <p className="cx-roadmap">
            Curious what&apos;s already planned? <Link href="/roadmap">See the roadmap →</Link>
          </p>
        </div>
      </section>

      <PageCta
        title="New here?"
        subtitle="Try TWO first."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
        note="Free for 30 docs. No AI, nothing to set up."
      />
    </div>
  );
}
