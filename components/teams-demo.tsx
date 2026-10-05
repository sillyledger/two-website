"use client";

import { useState } from "react";

type Person = { name: string; init: string; role: string; col: string };

const PRO_LIMIT = 3;
const TEAM_LIMIT = 10;

const PEOPLE: Person[] = [
  { name: "You", init: "P", role: "Owner", col: "#6b5ce7" },
  { name: "Sarah", init: "S", role: "Editor", col: "#0f8a6a" },
  { name: "Mark", init: "M", role: "Viewer", col: "#c98a5e" },
  { name: "Lena", init: "L", role: "Editor", col: "#3a6ea5" },
  { name: "Tom", init: "T", role: "Editor", col: "#8a5a9e" },
  { name: "Ava", init: "A", role: "Commenter", col: "#a5573a" },
  { name: "Noor", init: "N", role: "Editor", col: "#2f7d6b" },
  { name: "Ben", init: "B", role: "Viewer", col: "#6a6a3a" },
  { name: "Iris", init: "I", role: "Editor", col: "#7a4a6a" },
  { name: "Kai", init: "K", role: "Editor", col: "#4a5a8a" },
];

export function SeatsDemo() {
  const [n, setN] = useState(2);
  const pro = n <= PRO_LIMIT;
  const shown = PEOPLE.slice(0, n).slice(-4).reverse();
  const atLimit = n === PRO_LIMIT || n === TEAM_LIMIT;

  let note: string;
  if (n === 1) note = "Just you. Sharing starts on Pro, with room for 2 more.";
  else if (pro) note = n === PRO_LIMIT ? "That is the Pro limit: you plus 2 invited people." : `${PRO_LIMIT - n} more invite left on Pro.`;
  else note = n === TEAM_LIMIT ? "That is the Team limit: 10 people." : "More than 3 people needs Team, which is coming soon.";

  return (
    <div className="tmx-card">
      <div className="tmx-card-head">
        <b>Studio Kiko</b>
        <span>Shared workspace</span>
      </div>

      <div className="tmx-slots" aria-hidden="true">
        {Array.from({ length: TEAM_LIMIT }, (_, i) => (
          <span key={i} className={`tmx-slot${i >= PRO_LIMIT ? " team" : ""}${i < n ? " on" : ""}`} />
        ))}
      </div>
      <div className="tmx-slot-labels" aria-hidden="true">
        <span className="pro">Pro</span>
        <span className="team">Team, soon</span>
      </div>

      <div className="tmx-members">
        {shown.map((m) => (
          <div className="tmx-mem" key={m.name}>
            <span className="tmx-av" style={{ background: m.col }}>{m.init}</span>
            <span className="tmx-mem-n">{m.name}</span>
            <span className="tmx-role">{m.role}</span>
          </div>
        ))}
      </div>
      <p className="tmx-more">{n > 4 ? `+ ${n - 4} more` : ""}</p>

      <div className="tmx-btns">
        <button type="button" className="tmx-nb solid" onClick={() => setN(Math.min(TEAM_LIMIT, n + 1))} disabled={n >= TEAM_LIMIT}>
          Add a teammate
        </button>
        <button type="button" className="tmx-nb" onClick={() => setN(Math.max(1, n - 1))} disabled={n <= 1}>
          Remove
        </button>
      </div>

      <div className="tmx-plan" aria-live="polite">
        <span className="tmx-count">{n === 1 ? "1 person" : `${n} people`}</span>
        <span className={pro ? "tmx-tag now" : "tmx-tag soon"}>{pro ? "Available now" : "Coming soon"}</span>
        <b className="tmx-plan-name">{pro ? "Pro" : "Team"}</b>
        <span className="tmx-price">
          {pro ? "$6" : "$10"}
          <span> /mo flat</span>
        </span>
        <span className={atLimit ? "tmx-note limit" : "tmx-note"}>{note}</span>
      </div>
    </div>
  );
}
