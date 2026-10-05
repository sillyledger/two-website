import type { Metadata } from "next";
import { InstallDemo, CopyLinkButton } from "@/components/install-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Install TWO as a Web App on Mac and iPad | TWO",
};

const SPECS = [
  { label: "Price", value: "Free to install, on every plan" },
  { label: "Updates", value: "Automatic. You always have the latest version." },
  { label: "Your docs", value: "Same account and docs on every device, synced live" },
  { label: "Saving", value: "As you type" },
  { label: "Connection", value: "Needed for now. Offline mode is on the roadmap." },
  { label: "Native apps", value: "Mac app in progress, iPad app planned" },
  { label: "Removing it", value: "Remove it like any app. Your docs stay in your account." },
];

export default function InstallPage() {
  return (
    <div className="features-frame">
      <section className="inx-hero">
        <p className="micro">Install</p>
        <h1 className="display">
          Install TWO.
          <br />
          <span>No App Store.</span>
        </h1>
        <p className="inx-intro">
          TWO runs in your browser at app.two.so. Add it to your Mac&apos;s Dock or your iPad&apos;s Home Screen and
          it opens in its own window, like any other app.
        </p>
        <div className="inx-kv">
          <div><span className="k">Works on</span><span className="v">Mac, iPad and the web</span></div>
          <div><span className="k">Price</span><span className="v">Free, on every plan</span></div>
          <div><span className="k">Takes</span><span className="v">Under a minute</span></div>
        </div>
      </section>

      <section className="inx-phone">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c98a5e" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M11 18.5h2" />
        </svg>
        <div className="inx-phone-t">
          <b>On an iPhone?</b>
          <span>TWO is made for bigger screens, so there&apos;s no phone app. Copy the link and open it on your Mac or iPad.</span>
        </div>
        <CopyLinkButton />
      </section>

      <InstallDemo />

      <section className="inx-section inx-two">
        <div>
          <p className="micro">Good to know</p>
          <h2 className="display">
            Same TWO.
            <br />
            Its own window.
          </h2>
        </div>
        <div className="inx-specs">
          {SPECS.map((s) => (
            <div className="inx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Try it first."
        subtitle="Install it later."
        primary={{ label: "Sign up free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Log in", href: "https://app.two.so/login" }}
        note="Free plan. No card needed."
      />
    </div>
  );
}
