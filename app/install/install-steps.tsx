'use client';
import { useState } from "react";

const DEVICES = [
  {
    name: "iPhone",
    heading: "Add to your Home Screen.",
    steps: [
      { t: "Open Safari", d: "Go to app.two.so in Safari. This only works in Safari — Chrome and Firefox can't install web apps on iPhone." },
      { t: "Tap the Share button", d: "Tap the Share icon at the bottom of the screen — the box with an arrow pointing up." },
      { t: "Tap \"Add to Home Screen\"", d: "Scroll down in the share sheet, tap Add to Home Screen, confirm the name, and tap Add." },
      { t: "Done — open TWO anytime", d: "TWO lives on your home screen like any native app — full screen, no browser chrome." },
    ],
  },
  {
    name: "iPad",
    heading: "Full screen, on your iPad.",
    steps: [
      { t: "Open Safari", d: "Go to app.two.so in Safari. Must be Safari — other browsers don't support this on iPadOS." },
      { t: "Tap the Share button", d: "Tap the Share icon in the toolbar at the top right of the screen." },
      { t: "Tap \"Add to Home Screen\"", d: "Tap Add to Home Screen from the share menu, confirm the name, and tap Add." },
      { t: "Launch from your home screen", d: "TWO opens full screen on your iPad — optimised for the large display, no browser UI in the way." },
    ],
  },
  {
    name: "Mac",
    heading: "Lives in your Dock.",
    steps: [
      { t: "Open Safari", d: "Go to app.two.so in Safari on your Mac." },
      { t: "File → Add to Dock", d: "In the menu bar at the top of your screen, click File, then Add to Dock." },
      { t: "Click Add", d: "Confirm by clicking Add in the dialog. TWO will appear in your Dock immediately." },
      { t: "Launch from your Dock", d: "Click the TWO icon any time — it opens in its own window, completely separate from your browser." },
    ],
  },
];

const FAQS = [
  { q: "Is it free?", a: "Yes — installing TWO as a web app is completely free. No App Store, no payment required." },
  { q: "Why Safari only?", a: "Apple only allows web apps to be installed through Safari. Chrome and Firefox don't support this feature on iOS or iPadOS." },
  { q: "Will it work offline?", a: "Offline support is on our roadmap. For now, TWO requires an internet connection to load and save your docs." },
  { q: "Native apps coming?", a: "Yes — native Mac and iPad apps are planned. The web app is the best way to get started right now." },
];

export function InstallSteps() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {DEVICES.map((device) => (
        <div key={device.name} className="split" style={{ marginBottom: "80px", alignItems: "center" }}>
          <div>
            <p className="micro">{device.name}</p>
            <h2 className="display" style={{ fontSize: "28px", marginBottom: "24px" }}>{device.heading}</h2>
          </div>
          <div className="steps">
            {device.steps.map((step, i) => (
              <div key={step.t} className={`step${i === 0 ? " active" : ""}`}>
                <p className="t">{step.t}</p>
                <p className="d">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="divider"></div>

      <section className="pricing-faq" style={{ marginBottom: "80px" }}>
        <h2 className="display">Common questions.</h2>
        {FAQS.map((item, i) => (
          <div key={i} className="faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <p className="q">
              <span>{item.q}</span>
              <span className="plus">{openFaq === i ? "−" : "+"}</span>
            </p>
            {openFaq === i && <p className="a">{item.a}</p>}
          </div>
        ))}
      </section>
    </>
  );
}
