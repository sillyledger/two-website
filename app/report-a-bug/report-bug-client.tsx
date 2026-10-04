"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Bug, Lightbulb, CreditCard, Palette, MessageCircle } from "lucide-react";

type Category = {
  cat: string;
  desc: string;
  color: string;
  icon: ReactNode;
  list: string[];
};

const CATEGORIES: Category[] = [
  {
    cat: "Bug",
    desc: "Something isn't working the way it should.",
    color: "var(--indigo)",
    icon: <Bug size={16} />,
    list: [
      "Steps to reproduce it",
      "What you expected vs. what happened",
      "Your browser or app version",
      "A screenshot or screen recording, if you have one",
    ],
  },
  {
    cat: "Feature request",
    desc: "Something you wish TWO could do.",
    color: "var(--green)",
    icon: <Lightbulb size={16} />,
    list: ["What you're trying to do", "Why your current workaround falls short", "How often you'd use it"],
  },
  {
    cat: "Billing",
    desc: "Charges, plans, or your subscription.",
    color: "#e0a44d",
    icon: <CreditCard size={16} />,
    list: ["The email your account is under", "Your current plan", "What looks wrong (charge, invoice, trial dates)"],
  },
  {
    cat: "UX / Design",
    desc: "Something that feels confusing or off.",
    color: "var(--clay)",
    icon: <Palette size={16} />,
    list: ["Which page or screen", "What feels confusing or wrong", "A screenshot, if you have one"],
  },
  {
    cat: "Something else",
    desc: "Anything that doesn't fit the above.",
    color: "var(--text-muted)",
    icon: <MessageCircle size={16} />,
    list: ["Just tell us what's on your mind", "We'll route it to the right person"],
  },
];

const EMAIL = "bugs@two.so";

export function ReportBugClient() {
  const [selected, setSelected] = useState(0);
  const active = CATEGORIES[selected];
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(`[${active.cat}] `)}`;

  return (
    <div className="features-frame">
      <section className="rbx-hero">
        <div>
          <p className="micro">Report a bug</p>
          <h1 className="display">
            Help us fix it fast.
            <br />
            <span>Tell us what broke.</span>
          </h1>
        </div>
        <p className="rbx-intro">
          Pick what this is about. We&apos;ll show you exactly what to include so we can sort it out quicker.
        </p>
      </section>

      <section className="rbx-grid">
        <div className="rbx-opts" role="radiogroup" aria-label="What is this about?">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.cat}
              type="button"
              role="radio"
              aria-checked={selected === i}
              className={`rbx-opt${selected === i ? " on" : ""}`}
              onClick={() => setSelected(i)}
            >
              <span className="rbx-ic" style={{ color: c.color }}>{c.icon}</span>
              <span className="rbx-txt">
                <b>{c.cat}</b>
                <span>{c.desc}</span>
              </span>
              <span className="rbx-radio" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="rbx-panel" aria-live="polite">
          <p className="micro">
            What to include · <span className="rbx-panel-cat">{active.cat}</span>
          </p>
          <p className="display rbx-panel-h">Here&apos;s what helps us the most</p>
          <ul className="rbx-list">
            {active.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="rbx-send">
            <a className="rbx-btn" href={mailHref}>Write the email</a>
            <span>Goes to {EMAIL}</span>
          </div>
        </div>
      </section>

      <p className="rbx-note">
        Prefer not to pick a category? Just email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}and we&apos;ll sort it out.
      </p>
    </div>
  );
}
