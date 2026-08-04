import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings & Appearance | TWO Help",
};

export default function SettingsAppearanceArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/account/settings-appearance" />

      <article className="harticle">
        <p className="harticle-eyebrow">Account</p>
        <h1 className="display">Settings &amp; appearance</h1>
        <p className="harticle-meta">3 min read · Last updated Aug 2026</p>

        <p>
          Everything about how TWO looks and behaves for you lives under <b>Settings</b>{" "}
          — click your avatar, then choose a section on the left.
        </p>

        <h2 className="display">Account</h2>
        <p>Update your display name and profile picture. Your email and password live under Security instead.</p>

        <h2 className="display">Appearance</h2>
        <p>
          Switch between <b>Dark</b>, <b>Light</b>, or <b>System</b>{" "}
          (matches your OS setting). Adjust editor font size from 12px to 22px with the +/- controls — this
          changes the size of the text you write in, not the interface itself.
        </p>

        <h2 className="display">Preferences</h2>
        <p>
          Set your <b>time zone</b> and <b>date format</b>{". "}
          These control how dates and timestamps are displayed throughout the app — Activity, Version history,
          doc creation dates, and more all follow whatever you set here.
        </p>

        <h2 className="display">Editor</h2>
        <p>
          Choose <b>Narrow</b> or <b>Wide</b>{" "}
          as your page width. This is shared with the width toggle inside the editor itself — changing it in
          either place updates the other, since they&apos;re the same setting.
        </p>

        <h2 className="display">Security</h2>
        <p>
          Change your password (you&apos;ll need your current one first) or update your email address from
          here.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          These settings are tied to your account, not your browser — change your theme or font size on your
          laptop and it&apos;ll show up the same way next time you open TWO on your phone or tablet.</p>
        </div>

        <div className="harticle-pn">
          <a href="/resources/help/account">← Account</a>
          <a href="/resources/help/account/billing-plans" className="next">Billing &amp; plans →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
