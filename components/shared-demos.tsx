"use client";

import { useEffect, useRef, useState } from "react";

const ALEX_LINE = "Moodboard by Friday, first logo directions the week after.";
const BASE_TEXT = "Studio Kiko wants the rebrand to feel quieter. Warm neutrals, one accent colour, lots of space.";

export function LiveCoEditDemo() {
  const [alex, setAlex] = useState("");
  const [alexTyping, setAlexTyping] = useState(false);
  const [mine, setMine] = useState("");
  const [meTyping, setMeTyping] = useState(false);
  const meTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (i < ALEX_LINE.length) {
        i += 1;
        setAlex(ALEX_LINE.slice(0, i));
        setAlexTyping(true);
        t = setTimeout(tick, 70 + Math.random() * 60);
      } else {
        setAlexTyping(false);
        t = setTimeout(() => {
          if (cancelled) return;
          i = 0;
          setAlex("");
          t = setTimeout(tick, 900);
        }, 4200);
      }
    };
    t = setTimeout(tick, 1200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (meTimer.current) clearTimeout(meTimer.current);
    };
  }, []);

  function onType(value: string) {
    setMine(value);
    setMeTyping(true);
    if (meTimer.current) clearTimeout(meTimer.current);
    meTimer.current = setTimeout(() => setMeTyping(false), 1500);
  }

  const mineStatus = alexTyping ? "Alex is typing…" : "Start typing. It shows up on Alex's screen.";
  const alexStatus = meTyping ? "You are typing…" : alexTyping ? "Alex is typing…" : "Live · 2 people in this doc";

  return (
    <div className="swx-live">
      <div className="swx-labels" aria-hidden="true">
        <span className="swx-lbl"><i /><b>Type here</b> (it&apos;s live)</span>
        <span className="swx-lbl right"><b>Alex</b> is writing too<i /></span>
      </div>
      <div className="swx-screens">
        <div className="swx-screen mine">
          <div className="swx-bar">
            <span className="swx-av" style={{ background: "#6b5ce7" }}>P</span>
            <span>Your screen</span>
            <span className="swx-doc-name">Brand brief</span>
            <span className="swx-av sm" style={{ background: "#0f8a6a" }}>A</span>
          </div>
          <div className="swx-doc">
            <b>Brand brief</b>
            <p>{BASE_TEXT}</p>
            <p className="swx-alex">{alex}</p>
            <textarea
              value={mine}
              onChange={(e) => onType(e.target.value)}
              aria-label="Type in your copy of the shared doc"
              spellCheck={false}
            />
            <p className="swx-status">{mineStatus}</p>
          </div>
        </div>
        <div className="swx-screen" aria-hidden="true">
          <div className="swx-bar">
            <span className="swx-av" style={{ background: "#0f8a6a" }}>A</span>
            <span>Alex&apos;s screen</span>
            <span className="swx-doc-name">Brand brief</span>
            <span className="swx-av sm" style={{ background: "#6b5ce7" }}>P</span>
          </div>
          <div className="swx-doc">
            <b>Brand brief</b>
            <p>{BASE_TEXT}</p>
            <p className="swx-alex">{alex}</p>
            <p className="swx-mine">{mine}</p>
            <p className="swx-status">{alexStatus}</p>
          </div>
        </div>
      </div>
      <div className="swx-kv">
        <div><span className="k">Editing</span><span className="v">Live, as people type</span></div>
        <div><span className="k">Presence</span><span className="v">See who&apos;s in the doc</span></div>
        <div><span className="k">Plan</span><span className="v">Pro, Team coming soon</span></div>
      </div>
    </div>
  );
}

const ROLES = ["Editor", "Commenter", "Viewer"];
const COLORS = ["#0f8a6a", "#c98a5e"];

export function InviteDemo() {
  const [email, setEmail] = useState("sarah@company.com");
  const [role, setRole] = useState("Editor");
  const [members, setMembers] = useState<{ email: string; role: string }[]>([]);
  const full = members.length >= 2;

  function invite() {
    const em = email.trim();
    if (!em || full) return;
    const next = [...members, { email: em, role }];
    setMembers(next);
    setEmail(next.length === 1 ? "mark@company.com" : "");
  }

  return (
    <div className="swx-card">
      <div className="swx-card-head">
        <b>Studio Kiko</b>
        <span>Shared workspace</span>
      </div>
      <div className="swx-invite-row">
        <input
          className="swx-input"
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email to invite"
        />
        <button type="button" className="swx-go" onClick={invite} disabled={full}>
          Invite
        </button>
      </div>
      <div className="swx-seg" role="radiogroup" aria-label="Role">
        {ROLES.map((r) => (
          <button
            type="button"
            key={r}
            role="radio"
            aria-checked={role === r}
            className={role === r ? "on" : ""}
            onClick={() => setRole(r)}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="swx-members">
        <div className="swx-mem">
          <span className="swx-av lg" style={{ background: "#6b5ce7" }}>P</span>
          <span className="swx-mem-t">You<span>Owner</span></span>
          <span className="swx-role">Owner</span>
        </div>
        {members.map((m, i) => (
          <div className="swx-mem" key={m.email + i}>
            <span className="swx-av lg" style={{ background: COLORS[i] }}>{m.email[0].toUpperCase()}</span>
            <span className="swx-mem-t">{m.email}<span>Invited</span></span>
            <span className="swx-role">{m.role}</span>
          </div>
        ))}
      </div>
      <p className={`swx-limit${full ? " full" : ""}`}>
        {full
          ? "That is the Pro limit: 2 invited people. Team (coming soon) allows up to 10."
          : `${2 - members.length} of 2 invites left on Pro.`}
      </p>
    </div>
  );
}
