import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | TWO Help",
};

const ARTICLES: { title: string; desc: string; href: string }[] = [
  {
    title: "Settings & appearance",
    desc: "Your profile, theme, font size, and regional preferences.",
    href: "/resources/help/account/settings-appearance",
  },
  {
    title: "Billing & plans",
    desc: "Plans, upgrading, and tracking your storage.",
    href: "/resources/help/account/billing-plans",
  },
];

export default function AccountCategoryPage() {
  return (
    <div className="features-frame">
      <div className="hcat-back">
        <a href="/resources/help">← Help Center</a>
      </div>

      <section className="hcat-header">
        <div className="hc-cat-mark" style={{ background: "var(--indigo)" }} />
        <p className="micro">Account</p>
        <h1 className="display">Your account, your way.</h1>
        <p>Profile, appearance, regional settings, and billing.</p>
      </section>

      <div className="hcat-list">
        {ARTICLES.map((a) => (
          <a href={a.href} className="hcat-row" key={a.title}>
            <div>
              <p className="hcat-row-title">{a.title}</p>
              <p className="hcat-row-desc">{a.desc}</p>
            </div>
            <span className="hcat-row-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
