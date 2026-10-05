"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";

const TITLE = "How I price freelance work";
const START =
  "I used to price by the hour. It felt fair, and it was a trap.\n\nThe better the work got, the less I earned. So last spring I switched to fixed prices for every project, and three things changed.";

const RIGHT = ["Outline", "Research", "Last post"];

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function SplitDraftDemo() {
  const [draft, setDraft] = useState(START);
  const [saving, setSaving] = useState(false);
  const [right, setRight] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const onType = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDraft(e.target.value);
    setSaving(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSaving(false), 1000);
  };

  const words = countWords(`${TITLE} ${draft}`);

  return (
    <section className="wrx-demo">
      <div className="wrx-demo-head">
        <div>
          <p className="micro">Try it</p>
          <h2 className="display wrx-h">Write with the notes open.</h2>
        </div>
        <p className="wrx-demo-sub">Type in the draft and switch the doc beside it, the way split view works in the app.</p>
      </div>

      <div className="wrx-win">
        <div className="wrx-bar" aria-hidden="true">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="wrx-crumb">Docs › Split view</span>
        </div>
        <div className="wrx-split">
          <div className="wrx-draft">
            <b className="wrx-doc-t">{TITLE}</b>
            <textarea className="wrx-ta" value={draft} onChange={onType} aria-label="Draft" />
            <div className="wrx-foot">
              <span>{words} words</span>
              <span className={saving ? "wrx-save" : "wrx-save ok"}>{saving ? "Saving…" : "Saved"}</span>
              <span className="wrx-hint">Type / for headings, quotes, tables and images</span>
            </div>
          </div>

          <div className="wrx-side">
            <div className="wrx-tabs">
              {RIGHT.map((name, i) => (
                <button type="button" key={name} className={i === right ? "wrx-tab on" : "wrx-tab"} aria-pressed={i === right} onClick={() => setRight(i)}>
                  {name}
                </button>
              ))}
            </div>
            <div className="wrx-pane">
              {right === 0 && (
                <>
                  <b className="wrx-pane-t">Outline: pricing post</b>
                  <ol>
                    <li>Hook: the hourly trap</li>
                    <li>The switch to fixed prices</li>
                    <li>Three things that changed</li>
                    <li>What I&apos;d tell my old self</li>
                    <li>Ask: join the newsletter</li>
                  </ol>
                </>
              )}
              {right === 1 && (
                <>
                  <b className="wrx-pane-t">Research: pricing</b>
                  <p>• Ask Mia how her day rate went</p>
                  <p>• Dig up last year&apos;s invoice sheet</p>
                  <p className="x">• Quote from the client call in March</p>
                  <div className="wrx-quote">“We&apos;d rather know the number up front.”</div>
                </>
              )}
              {right === 2 && (
                <>
                  <b className="wrx-pane-t">Saying no to a dream client</b>
                  <p>The email sat in my drafts for two days. On paper it was the project I had wanted for years.</p>
                  <p>But the timeline was impossible, and I knew it before I opened the brief.</p>
                  <i className="wrx-ln" style={{ width: "88%" }} />
                  <i className="wrx-ln" style={{ width: "72%" }} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="wrx-hint-m">In the app, type / for headings, quotes, tables and images.</p>
    </section>
  );
}

type Idea = { title: string; platform: string; s: 0 | 1 | 2 };

const START_IDEAS: Idea[] = [
  { title: "My writing setup, 2026", platform: "Blog", s: 0 },
  { title: "Newsletter: the slow months", platform: "Newsletter", s: 0 },
  { title: "How I price freelance work", platform: "Blog", s: 1 },
  { title: "Saying no to a dream client", platform: "Blog", s: 2 },
  { title: "Why I left the agency", platform: "Newsletter", s: 2 },
];

const COLS: { name: string; dot: string }[] = [
  { name: "Not started", dot: "#6a6a74" },
  { name: "In progress", dot: "#e0a44d" },
  { name: "Published", dot: "#6ec39a" },
];

export function IdeasBoardDemo() {
  const [ideas, setIdeas] = useState<Idea[]>(START_IDEAS);

  const move = (i: number) => {
    setIdeas((prev) => prev.map((x, j) => (j === i ? { ...x, s: Math.min(2, x.s + 1) as 0 | 1 | 2 } : x)));
  };

  return (
    <div className="wrx-board">
      {COLS.map((c, ci) => {
        const cards = ideas.map((x, i) => ({ x, i })).filter((o) => o.x.s === ci);
        return (
          <div className="wrx-col" key={c.name}>
            <p className="wrx-col-h">
              <i style={{ background: c.dot }} aria-hidden="true" />
              {c.name}
              <span>{cards.length}</span>
            </p>
            {cards.map(({ x, i }) => (
              <div className="wrx-card" key={x.title}>
                <b>{x.title}</b>
                <div className="wrx-meta">
                  <span className="wrx-chip">{x.platform}</span>
                  {ci < 2 ? (
                    <button type="button" className="wrx-act" onClick={() => move(i)}>
                      {ci === 0 ? "Turn into Doc" : "Mark published"}
                    </button>
                  ) : (
                    <span className="wrx-done">✓ Out</span>
                  )}
                </div>
              </div>
            ))}
            {cards.length === 0 && <p className="wrx-empty">Nothing here</p>}
          </div>
        );
      })}
    </div>
  );
}
