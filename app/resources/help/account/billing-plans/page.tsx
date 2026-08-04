import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing & Plans | TWO Help",
};

export default function BillingPlansArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/account/billing-plans" />

      <article className="harticle">
        <p className="harticle-eyebrow">Account</p>
        <h1 className="display">Billing &amp; plans</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Your plan, upgrade options, and storage usage all live under <b>Settings → Billing</b> and{" "}
          <b>Settings → Storage</b>.
        </p>

        <h2 className="display">Upgrading</h2>
        <p>
          From the Billing tab you can start a 14-day free trial of Pro (no credit card required), or get
          lifetime access as a Founding Member for a one-time payment while slots last. Both open a secure Paddle
          checkout.
        </p>

        <h2 className="display">Tracking your storage</h2>
        <p>
          The Storage tab shows how much of your image and file storage you&apos;ve used against your plan&apos;s
          limit — 1GB on Free, 10GB on Pro and Founding.
        </p>

        <div className="harticle-tip">
          <p><b>Note:</b>{" "}
          There&apos;s no self-serve cancel or downgrade option inside TWO yet. If you need to cancel or change
          your plan, reach out and we&apos;ll take care of it directly.</p>
        </div>

        <div className="harticle-pn">
          <a href="/resources/help/account/settings-appearance">← Settings & appearance</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
