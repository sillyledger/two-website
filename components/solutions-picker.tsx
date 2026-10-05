"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Make = "write" | "visual" | "client";
type Who = "me" | "few";
type Key = "writers" | "creatives" | "solo" | "teams";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#e8e8e8",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PAGES: { k: Key; href: string; title: string; h1: string; h2: string; desc: string; tags: string[]; go: string; icon: ReactNode }[] = [
  {
    k: "writers",
    href: "/solutions/writers",
    title: "For Writers and Bloggers",
    h1: "Write here.",
    h2: "Research there.",
    desc: "A calm editor for posts, essays and newsletters, with your notes open beside the draft.",
    tags: ["Split view", "Ideas pipeline", "Markdown export"],
    go: "See the writing page",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M17 3a2.83 2.83 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    k: "creatives",
    href: "/solutions/creatives",
    title: "For Creatives",
    h1: "Moodboard first.",
    h2: "Then the words.",
    desc: "Collect images, colors and references on a canvas, then write the brief from it.",
    tags: ["Canvas", "Color cards", "Ideas"],
    go: "See the creatives page",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="3" width="8" height="10" rx="1.5" />
        <rect x="13" y="3" width="8" height="6" rx="1.5" />
        <rect x="13" y="11" width="8" height="10" rx="1.5" />
        <rect x="3" y="15" width="8" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    k: "solo",
    href: "/solutions/solo",
    title: "For Solo Operators",
    h1: "One person.",
    h2: "Two docs open.",
    desc: "Proposals, client notes and plans in one calm place, from first idea to the PDF you send.",
    tags: ["Planner", "Templates", "PDF export"],
    go: "See the solo page",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0116 0v1" />
      </svg>
    ),
  },
  {
    k: "teams",
    href: "/solutions/teams",
    title: "For Small Teams",
    h1: "A small team.",
    h2: "No admin needed.",
    desc: "A shared workspace for you plus 2 people on Pro, up to 10 when Team arrives.",
    tags: ["Live editing", "Roles", "Flat price"],
    go: "See the teams page",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M3 20v-1a6 6 0 0112 0v1" />
        <path d="M15 14.5a4.5 4.5 0 014.5 4.5v1" />
      </svg>
    ),
  },
];

const MAKE: { v: Make; label: string }[] = [
  { v: "write", label: "Posts and essays" },
  { v: "visual", label: "Visual projects" },
  { v: "client", label: "Client and business docs" },
];

const WHO: { v: Who; label: string }[] = [
  { v: "me", label: "Just me" },
  { v: "few", label: "A few of us" },
];

const MATCH: Record<Make, Key> = { write: "writers", visual: "creatives", client: "solo" };

export function SolutionsPicker() {
  const [make, setMake] = useState<Make | null>(null);
  const [who, setWho] = useState<Who | null>(null);

  let best: Key | null = null;
  let also: Key | null = null;
  if (who === "few") {
    best = "teams";
    also = make ? MATCH[make] : null;
  } else if (make) {
    best = MATCH[make];
  }

  let note = "Answer one or both, and the best page lights up.";
  let tone = "";
  if (best && who === "few") {
    note = "Sharing needs Pro: you plus 2 people per shared workspace. Up to 10 with Team, coming soon.";
    tone = " warn";
  } else if (best) {
    note = "Good match below. Every page shows the same app, so you can switch any time.";
    tone = " ok";
  } else if (who === "me") {
    note = "Now pick what you mostly make.";
  }

  return (
    <section className="six-pick">
      <div className="six-bar" role="group" aria-label="Help me pick">
        <span className="six-bar-l">Help me pick</span>
        <div className="six-q">
          <span className="six-q-l">You mostly make</span>
          <div className="six-chips">
            {MAKE.map((o) => (
              <button
                type="button"
                key={o.v}
                className={make === o.v ? "six-chip on" : "six-chip"}
                aria-pressed={make === o.v}
                onClick={() => setMake(make === o.v ? null : o.v)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div className="six-q">
          <span className="six-q-l">Who writes it</span>
          <div className="six-chips">
            {WHO.map((o) => (
              <button
                type="button"
                key={o.v}
                className={who === o.v ? "six-chip on" : "six-chip"}
                aria-pressed={who === o.v}
                onClick={() => setWho(who === o.v ? null : o.v)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        {(make || who) && (
          <button
            type="button"
            className="six-clear"
            onClick={() => {
              setMake(null);
              setWho(null);
            }}
          >
            Clear
          </button>
        )}
      </div>
      <p className={`six-note${tone}`} aria-live="polite">{note}</p>

      <div className="six-grid">
        {PAGES.map((p) => {
          const state = best === p.k ? " best" : also === p.k ? " also" : best ? " dim" : "";
          return (
            <a href={p.href} className={`six-card${state}`} key={p.k}>
              {best === p.k && <span className="six-badge best">Best fit</span>}
              {also === p.k && <span className="six-badge also">Also fits</span>}
              <span className="six-ico">{p.icon}</span>
              <span className="six-t">{p.title}</span>
              <span className="six-h">
                {p.h1}
                <br />
                <span>{p.h2}</span>
              </span>
              <span className="six-d">{p.desc}</span>
              <span className="six-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
              <span className="six-go">{p.go} →</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
