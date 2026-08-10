'use client';
import { useState } from "react";
import Link from "next/link";

const MOBILE_STEPS = [
  { t: "Open Safari", d: "Go to app.two.so in Safari. Only Safari can install web apps on iOS and iPadOS, Chrome and Firefox can't." },
  { t: "Tap the Share button", d: "On iPhone it's at the bottom of the screen. On iPad it's in the top toolbar. Same icon either way, a box with an arrow pointing up." },
  { t: "Tap \"Add to Home Screen\"", d: "Scroll down in the share sheet, tap Add to Home Screen, confirm the name, and tap Add." },
  { t: "Done, open TWO anytime", d: "TWO lives on your home screen like any native app, full screen, no browser chrome, on both iPhone and iPad." },
];

const MAC_STEPS = [
  { t: "Open Safari", d: "Go to app.two.so in Safari on your Mac." },
  { t: "File → Add to Dock", d: "In the menu bar at the top of your screen, click File, then Add to Dock." },
  { t: "Click Add", d: "Confirm by clicking Add in the dialog. TWO will appear in your Dock immediately." },
  { t: "Launch from your Dock", d: "Click the TWO icon any time, it opens in its own window, completely separate from your browser." },
];

const FAQS = [
  { tag: "Cost", q: "Is it free?", a: "Yes, installing TWO as a web app is completely free. No App Store, no payment required." },
  { tag: "Browser", q: "Why Safari only?", a: "Apple only allows web apps to be installed through Safari. Chrome and Firefox don't support this feature on iOS or iPadOS." },
  { tag: "Offline", q: "Will it work offline?", a: "Offline support is on our roadmap. For now, TWO requires an internet connection to load and save your docs." },
  { tag: "Roadmap", q: "Native apps coming?", a: "Yes, native Mac and iPad apps are planned. The web app is the best way to get started right now." },
];

export function InstallSteps() {
  const [device, setDevice] = useState<"mobile" | "mac">("mobile");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const steps = device === "mobile" ? MOBILE_STEPS : MAC_STEPS;
  const heading = device === "mobile" ? "Add to your Home Screen." : "Lives in your Dock.";

  return (
    <>
      <div className="pricing-toggle-pill" style={{ marginBottom: 48 }}>
        <button className={device === "mobile" ? "active" : ""} onClick={() => setDevice("mobile")}>iPhone &amp; iPad</button>
        <button className={device === "mac" ? "active" : ""} onClick={() => setDevice("mac")}>Mac</button>
      </div>

      <h2 className="display" style={{ fontSize: 24, marginBottom: 24 }}>{heading}</h2>
      <div className="in-steps">
        {steps.map((step, i) => (
          <div key={step.t} className="in-step">
            <p className="t"><span className="n">{i + 1}</span>{step.t}</p>
            <p className="d">{step.d}</p>
          </div>
        ))}
      </div>

      <div style={{ height: 90 }} />

      <section className="pricing-faq" style={{ marginBottom: 0 }}>
        <h2 className="display">Common questions.</h2>
        {FAQS.map((item, i) => (
          <div key={i} className="faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <p className="q">
              <span>
                <span className="q-tag">{item.tag}</span>
                {item.q}
              </span>
              <span className="plus">{openFaq === i ? "−" : "+"}</span>
            </p>
            {openFaq === i && <p className="a">{item.a}</p>}
          </div>
        ))}
        <div className="faq-cta">
          <p className="t">Still have questions?</p>
          <p className="s">Browse guides and answers in the Help Center.</p>
          <Link href="/resources/help" className="btn">Visit Help Center</Link>
        </div>
      </section>
    </>
  );
}
