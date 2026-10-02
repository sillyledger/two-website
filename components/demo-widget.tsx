"use client";

import { useEffect, useRef, useState } from "react";

type View = "docs" | "planner" | "studio";
type LeftDoc = "chapter" | "essay";
type RightDoc = "research" | "kickoff";
type TaskKey = "drag" | "link" | "type" | "idea";

const TASKS: { key: TaskKey; label: string }[] = [
  { key: "drag", label: "Drag the divider" },
  { key: "link", label: "Open a linked doc" },
  { key: "type", label: "Type in a doc" },
  { key: "idea", label: "Turn an idea into a doc" },
];

const VIEWS: { key: View; label: string }[] = [
  { key: "docs", label: "Docs" },
  { key: "planner", label: "Planner" },
  { key: "studio", label: "Studio" },
];

const TODOS = [
  { t: "Finish chapter three draft", meta: "High", hi: true },
  { t: "Send moodboard to Studio Kiko", meta: "Fri", hi: false },
  { t: "Outline harbor research", meta: "Mon", hi: false },
];

export function DemoWidget() {
  const [view, setView] = useState<View>("docs");
  const [left, setLeft] = useState<LeftDoc>("chapter");
  const [right, setRight] = useState<RightDoc>("research");
  const [split, setSplit] = useState(52);
  const [ideaDone, setIdeaDone] = useState(false);
  const [todos, setTodos] = useState([false, false, true]);
  const [done, setDone] = useState<Record<TaskKey, boolean>>({ drag: false, link: false, type: false, idea: false });
  const [stacked, setStacked] = useState(false);
  const panesRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const update = () => setStacked(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const mark = (k: TaskKey) => setDone((d) => (d[k] ? d : { ...d, [k]: true }));
  const count = TASKS.filter((t) => done[t.key]).length;

  function onDividerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function onDividerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current || !panesRef.current) return;
    const r = panesRef.current.getBoundingClientRect();
    const pct = stacked ? ((e.clientY - r.top) / r.height) * 100 : ((e.clientX - r.left) / r.width) * 100;
    setSplit(Math.max(25, Math.min(75, pct)));
  }

  function onDividerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    mark("drag");
  }

  function openFromChip(side: "left" | "right") {
    if (side === "right") setRight("kickoff");
    else setLeft("chapter");
    mark("link");
  }

  function turnIdea() {
    setIdeaDone(true);
    setLeft("essay");
    setView("docs");
    mark("idea");
  }

  const hintStyle = stacked ? { top: `calc(${split}% + 16px)`, left: "20px" } : { left: `calc(${split}% + 18px)`, bottom: "26px" };

  return (
    <div className="dv-demo">
      <div className="dv-tasks">
        <span className="dv-tasks-label">Things to try</span>
        <div className="dv-task-list">
          {TASKS.map((t) => (
            <span key={t.key} className={`dv-task${done[t.key] ? " done" : ""}`}>
              <i aria-hidden="true">✓</i>
              {t.label}
            </span>
          ))}
        </div>
        <span className="dv-count">{count} of 4</span>
      </div>

      <div className="dv-switch" aria-label="Demo views">
        {VIEWS.map((v) => (
          <button key={v.key} className={view === v.key ? "on" : ""} onClick={() => setView(v.key)} aria-pressed={view === v.key}>
            {v.label}
          </button>
        ))}
      </div>

      <div className="dv-frame">
        <aside className="dv-side">
          <div className="dv-ws">
            <span className="dv-ws-av">D</span>
            Demo workspace
          </div>
          <button className={`dv-sbi${view === "docs" ? " on" : ""}`} onClick={() => setView("docs")}>Docs</button>
          <div className="dv-sbi dim">Notes</div>
          <button className={`dv-sbi${view === "planner" ? " on" : ""}`} onClick={() => setView("planner")}>Planner</button>
          <button className={`dv-sbi${view === "studio" ? " on" : ""}`} onClick={() => setView("studio")}>
            Studio<span className="dv-beta">Beta</span>
          </button>
          <p className="dv-side-note">Sample workspace. Edits reset when you leave.</p>
        </aside>

        <div className="dv-main">
          {view === "docs" && (
            <div className="dv-panes" ref={panesRef}>
              <div className="dv-pane" style={{ flexBasis: `${split}%` }}>
                <div className="dv-tabs">
                  <button className={`dv-tab${left === "chapter" ? " on" : ""}`} onClick={() => setLeft("chapter")}>Chapter three</button>
                  {ideaDone && (
                    <button className={`dv-tab${left === "essay" ? " on" : ""}`} onClick={() => setLeft("essay")}>Harbor photo essay</button>
                  )}
                </div>
                {left === "chapter" ? (
                  <div key="chapter" className="dv-doc" contentEditable suppressContentEditableWarning onInput={() => mark("type")}>
                    <h3>Chapter three</h3>
                    <p>By the time the ferry came in, Ana had already decided not to tell anyone about the letter.</p>
                    <p>
                      The harbor smelled of diesel and oranges. Somewhere behind the fish market a radio was playing the same song it had
                      played the summer her father left.
                    </p>
                    <p contentEditable={false}>
                      Notes from the interview are in{" "}
                      <button className="dv-chip" onClick={() => openFromChip("right")}>→ Kickoff notes</button>
                    </p>
                  </div>
                ) : (
                  <div key="essay" className="dv-doc" contentEditable suppressContentEditableWarning onInput={() => mark("type")}>
                    <h3>Harbor photo essay</h3>
                    <p className="dv-doc-meta" contentEditable={false}>Created from an idea · In progress</p>
                    <p>Start writing here. This doc stays linked to its idea in Studio.</p>
                  </div>
                )}
              </div>

              <div
                className="dv-divider"
                role="separator"
                aria-orientation={stacked ? "horizontal" : "vertical"}
                aria-label="Resize the two docs"
                onPointerDown={onDividerDown}
                onPointerMove={onDividerMove}
                onPointerUp={onDividerUp}
                onPointerCancel={onDividerUp}
              >
                <span />
              </div>

              <div className="dv-pane alt">
                <div className="dv-tabs">
                  <button className={`dv-tab${right === "research" ? " on" : ""}`} onClick={() => setRight("research")}>Research: harbor towns</button>
                  <button className={`dv-tab${right === "kickoff" ? " on" : ""}`} onClick={() => setRight("kickoff")}>Kickoff notes</button>
                </div>
                {right === "research" ? (
                  <div key="research" className="dv-doc" contentEditable suppressContentEditableWarning onInput={() => mark("type")}>
                    <h3>Research: harbor towns</h3>
                    <p>Ferries run twice a day in winter. Fish market closes by noon. Most boats are painted blue and white.</p>
                    <p>Old men play cards outside the customs house.</p>
                  </div>
                ) : (
                  <div key="kickoff" className="dv-doc" contentEditable suppressContentEditableWarning onInput={() => mark("type")}>
                    <h3>Kickoff notes</h3>
                    <p>Interview with Maya, 32 minutes. She wants her draft and her notes on the same screen.</p>
                    <p contentEditable={false}>
                      Back to <button className="dv-chip" onClick={() => openFromChip("left")}>→ Chapter three</button>
                    </p>
                  </div>
                )}
              </div>

              {!done.drag && (
                <div className="dv-drag-hint" style={hintStyle} aria-hidden="true">
                  <i />
                  <b>Drag</b> the divider
                </div>
              )}
            </div>
          )}

          {view === "planner" && (
            <div className="dv-view">
              <div className="dv-view-head"><b>Planner</b><span>Tap to tick off</span></div>
              {TODOS.map((todo, i) => (
                <button
                  key={todo.t}
                  className={`dv-todo${todos[i] ? " done" : ""}`}
                  onClick={() => setTodos((ts) => ts.map((v, j) => (j === i ? !v : v)))}
                >
                  <span className={`dv-box${todos[i] ? " on" : ""}`} />
                  <span className="t">{todo.t}</span>
                  <span className={todo.hi ? "m hi" : "m"}>{todo.meta}</span>
                </button>
              ))}
            </div>
          )}

          {view === "studio" && (
            <div className="dv-view">
              <div className="dv-view-head"><b>Ideas</b><span>3</span></div>
              <div className="dv-idea">
                <span className="t">Why I write without AI</span>
                <span className="dv-ichip">Post</span>
                <span className="st pub">Published</span>
                <span className="dv-linked">Linked doc</span>
              </div>
              <div className="dv-idea hl">
                <span className="t">Harbor photo essay</span>
                <span className="dv-ichip">Post</span>
                <span className={ideaDone ? "st prog" : "st"}>{ideaDone ? "In progress" : "Not started"}</span>
                {ideaDone ? (
                  <button className="dv-chip" onClick={() => { setLeft("essay"); setView("docs"); }}>Open Doc →</button>
                ) : (
                  <button className="dv-turn" onClick={turnIdea}>Turn into Doc</button>
                )}
              </div>
              <div className="dv-idea">
                <span className="t">Episode 12: building quietly</span>
                <span className="dv-ichip">Audio</span>
                <span className="st prog">In progress</span>
                <span />
              </div>
              <p className="dv-view-note">Click Turn into Doc. It opens as a new tab next to Chapter three.</p>
            </div>
          )}
        </div>
      </div>

      {count === 4 && (
        <div className="dv-done">
          <span>That&apos;s TWO. Now try it with your own docs.</span>
          <a href="https://app.two.so/signup" className="dv-btn solid">Start writing free</a>
        </div>
      )}
    </div>
  );
}
