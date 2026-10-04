"use client";

import { useState } from "react";

export function SyncDemo() {
  const [text, setText] = useState("Ferry leaves at 7:40. Pack the blue notebook.");

  return (
    <div className="lsx-demo">
      <div className="lsx-labels" aria-hidden="true">
        <span className="lsx-lbl"><i /><b>Type here</b> (it&apos;s live)</span>
        <span className="lsx-lbl right"><b>Updates</b> as you type<i /></span>
      </div>
      <div className="lsx-devices">
        <div className="lsx-dev web">
          <div className="lsx-bar">
            <span>Web · app.two.so</span>
            <span className="lsx-st"><i />Saved</span>
          </div>
          <div className="lsx-doc">
            <b>Trip notes</b>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="Type in the web version of the doc"
              spellCheck={false}
            />
          </div>
        </div>
        <div className="lsx-dev mac" aria-hidden="true">
          <div className="lsx-bar">
            <span className="lsx-lights"><i /><i /><i /></span>
            <span>Mac app</span>
            <span className="lsx-st"><i />Live</span>
          </div>
          <div className="lsx-doc">
            <b>Trip notes</b>
            <p>{text}<span className="lsx-caret" /></p>
          </div>
        </div>
        <div className="lsx-dev ipad" aria-hidden="true">
          <div className="lsx-bar">
            <span>iPad</span>
            <span className="lsx-st"><i />Live</span>
          </div>
          <div className="lsx-doc">
            <b>Trip notes</b>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="lsx-kv">
        <div><span className="k">Saving</span><span className="v">Automatic, as you type</span></div>
        <div><span className="k">Works on</span><span className="v">Web, Mac and iPad</span></div>
        <div><span className="k">Plan</span><span className="v">Every plan, including Free</span></div>
      </div>
    </div>
  );
}
