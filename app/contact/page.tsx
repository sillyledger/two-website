import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | TWO",
  description: "Get in touch with the TWO team.",
};

export default function ContactPage() {
  return (
    <div className="features-frame">
      <div className="ct-hero">
        <p className="micro">Contact</p>
        <h1 className="display">Let&apos;s talk.</h1>
        <p className="ct-sub">Questions, feedback, or something broken? We read everything.</p>
      </div>

      <div className="ct-card">
        <p className="lbl">Email us directly</p>
        <p className="email">
          <a href="mailto:hey@two.so">hey@two.so</a>
        </p>
        <p className="note">We typically reply within 1 business day.</p>
      </div>

      <p className="ct-crosslink">
        Looking for guides instead? <Link href="/resources/help">Visit the Help Center →</Link>
      </p>
    </div>
  );
}
