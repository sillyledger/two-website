"use client";

import { useState } from "react";

type Category = {
  cat: string;
  emoji: string;
  color: "indigo" | "clay" | "green";
  desc: string;
  list: string[];
};

const CATEGORIES: Category[] = [
  {
    cat: "Bug",
    emoji: "🐞",
    color: "indigo",
    desc: "Something isn't working the way it should.",
    list: [
      "Steps to reproduce it",
      "What you expected vs. what happened",
      "Your browser or app version",
      "A screenshot or screen recording, if you have one",
    ],
  },
  {
    cat: "Feature request",
    emoji: "💡",
    color: "clay",
    desc: "Something you wish TWO could do.",
    list: [
      "What you're trying to do",
      "Why your current workaround falls short",
      "How often you'd use it",
    ],
  },
  {
    cat: "Billing",
    emoji: "💳",
    color: "green",
    desc: "Charges, plans, or your subscription.",
    list: [
      "The email your account is under",
      "Your current plan",
      "What looks wrong (charge, invoice, trial dates)",
    ],
  },
  {
    cat: "UX / Design",
    emoji: "🎨",
    color: "indigo",
    desc: "Something that feels confusing or off.",
    list: [
      "Which page or screen",
      "What feels confusing or wrong",
      "A screenshot, if you have one",
    ],
  },
  {
    cat: "Something else",
    emoji: "✳️",
    color: "clay",
    desc: "Anything that doesn't fit the above.",
    list: ["Just tell us what's on your mind", "We'll route it to the right person"],
  },
];

const EMAIL = "bugs@two.so";

export function ReportBugClient() {
  const [selected, setSelected] = useState<number | null>(null);

  const active = selected !== null ? CATEGORIES[selected] : CATEGORIES[0];
  const mailHref =
    selected !== null
      ? `mailto:${EMAIL}?subject=${encodeURIComponent(`[${active.cat}] `)}`
      : `mailto:${EMAIL}`;

  return (
    <div className="features-frame">
      <div className="rb-hero">
        <p className="micro">Report a bug</p>
        <h1 className="display">Help us fix it fast.</h1>
        <p>Pick what this is about. We&apos;ll show you exactly what to include so we can sort it out quicker.</p>
      </div>

      <div className="rb-grid">
        {CATEGORIES.map((c, i) => (
          <button
            key={c.cat}
            type="button"
            className={`rb-card${selected === i ? " active" : ""}`}
            data-color={c.color}
            onClick={() => setSelected(i)}
          >
            <div className="mark">{c.emoji}</div>
            <p className="title">{c.cat}</p>
            <p className="desc">{c.desc}</p>
          </button>
        ))}
      </div>

      <div className={`rb-guidance${selected !== null ? " open" : ""}`}>
        <p className="lbl">
          What to include — <b>{active.cat}</b>
        </p>
        <h3>Here&apos;s what helps us the most</h3>
        <ul>
          {active.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="rb-email-row">
          <span>Send it to</span>
          <a className="rb-email-btn" href={mailHref}>
            {EMAIL} →
          </a>
        </div>
      </div>

      <p className="rb-note">
        Prefer not to pick a category? Just email us at{" "}
        <a href={`mailto:${EMAIL}`} className="rb-note-link">
          {EMAIL}
        </a>{" "}
        and we&apos;ll sort it out.
      </p>
    </div>
  );
}
