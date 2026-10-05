"use client";

import { useEffect, useRef, useState } from "react";

type Device = "mac" | "pad";
type Step = { t: string; d: string; lead: string };

const STEPS: Record<Device, Step[]> = {
  mac: [
    { t: "Open app.two.so in Safari", d: "Type app.two.so in the address bar and press Return.", lead: "The address bar" },
    { t: "Choose File, then Add to Dock", d: "It's in the menu bar at the top of your screen. You'll also find it under the Share button.", lead: "File menu" },
    { t: "Click Add", d: "Keep the name TWO, or change it. The icon lands in your Dock right away.", lead: "The Add button" },
    { t: "Open TWO from your Dock", d: "It opens in its own window, separate from your browser tabs.", lead: "Your Dock" },
  ],
  pad: [
    { t: "Open app.two.so in Safari", d: "Type app.two.so in the address bar and tap Go.", lead: "The address bar" },
    { t: "Tap the Share button", d: "The square with an arrow, at the top right of Safari.", lead: "Share button" },
    { t: "Tap Add to Home Screen", d: "Scroll the list if you don't see it right away.", lead: "Share menu" },
    { t: "Tap Add", d: "If you see Open as Web App, leave it on. TWO then opens full screen, with no browser bar.", lead: "The Add button" },
  ],
};

function TwoIcon() {
  return (
    <svg viewBox="0 0 108 108" aria-hidden="true">
      <rect width="108" height="108" rx="24" fill="#161618" />
      <rect x="22" y="16" width="40" height="54" rx="10" fill="#e8e8e8" opacity="0.85" />
      <rect x="42" y="34" width="40" height="54" rx="10" fill="#e8e8e8" opacity="0.55" />
    </svg>
  );
}

function Skeleton() {
  return (
    <div className="inx-skel">
      <div className="inx-side"><i /><i /><i /><i /></div>
      <div className="inx-main"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

function MacDrawing({ step }: { step: number }) {
  return (
    <div className="inx-draw inx-mac" aria-hidden="true">
      <div className="inx-menubar">
        <b>Safari</b>
        <span className={step === 1 ? "inx-file inx-hl" : "inx-file"}>File</span>
        <span>Edit</span>
        <span>View</span>
        <span className="inx-wide">History</span>
        <span className="inx-wide">Bookmarks</span>
        <span className="inx-wide">Window</span>
      </div>
      <div className="inx-win">
        <div className="inx-titlebar">
          <span className="inx-light r" />
          <span className="inx-light y" />
          <span className="inx-light g" />
          <span className={step === 0 ? "inx-url inx-hl" : "inx-url"}>app.two.so</span>
          <span className="inx-spacer" />
        </div>
        <Skeleton />
        {step === 2 && (
          <div className="inx-scrim">
            <div className="inx-dialog">
              <b className="inx-dialog-t">Add to Dock</b>
              <div className="inx-dialog-row">
                <TwoIcon />
                <div className="inx-field">
                  <span>TWO</span>
                  <span>app.two.so</span>
                </div>
              </div>
              <div className="inx-dialog-btns">
                <span className="inx-pill">Cancel</span>
                <span className="inx-pill add inx-hl">Add</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {step === 1 && (
        <div className="inx-menu">
          <span className="inx-mi">New Window</span>
          <span className="inx-mi">New Private Window</span>
          <span className="inx-mi">New Tab</span>
          <span className="inx-sep" />
          <span className="inx-mi">Open File…</span>
          <span className="inx-mi">Close Window</span>
          <span className="inx-sep" />
          <span className="inx-mi">Share</span>
          <span className="inx-mi on">Add to Dock…</span>
          <span className="inx-sep" />
          <span className="inx-mi">Print…</span>
        </div>
      )}
      <div className="inx-dock">
        <span />
        <span />
        <span />
        <span />
        {step === 3 && (
          <span className="inx-dock-two inx-hl">
            <TwoIcon />
          </span>
        )}
      </div>
    </div>
  );
}

function PadDrawing({ step }: { step: number }) {
  return (
    <div className="inx-draw inx-pad" aria-hidden="true">
      <div className="inx-screen">
        <div className="inx-padbar">
          <svg viewBox="0 0 24 24" fill="none" stroke="#8a8a92" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <path d="M9 4v16" />
          </svg>
          <span className={step === 0 ? "inx-url inx-hl" : "inx-url"}>app.two.so</span>
          <span className={step === 1 || step === 2 ? "inx-share inx-hl" : "inx-share"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#c4b8ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="M8 7l4-4 4 4" />
              <path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1" />
            </svg>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="#8a8a92" strokeWidth="1.8">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <Skeleton />
        {step === 2 && (
          <div className="inx-pop">
            <span className="inx-mi">Copy</span>
            <span className="inx-mi">Add to Reading List</span>
            <span className="inx-mi">Add Bookmark</span>
            <span className="inx-mi">Add to Favorites</span>
            <span className="inx-mi on">Add to Home Screen</span>
            <span className="inx-mi">Find on Page</span>
          </div>
        )}
        {step === 3 && (
          <div className="inx-scrim">
            <div className="inx-sheet">
              <div className="inx-sheet-head">
                <span className="cancel">Cancel</span>
                <b>Add to Home Screen</b>
                <span className="add inx-hl">Add</span>
              </div>
              <div className="inx-sheet-row">
                <TwoIcon />
                <div className="inx-sheet-name">
                  <span>TWO</span>
                  <span>app.two.so</span>
                </div>
              </div>
              <div className="inx-toggle-row">
                <span>Open as Web App</span>
                <span className="inx-toggle" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function InstallDemo() {
  const [dev, setDev] = useState<Device>("mac");
  const [step, setStep] = useState(0);

  // Touch screens (iPad, phones) start on the iPad tab
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) setDev("pad");
  }, []);

  const steps = STEPS[dev];
  const isMac = dev === "mac";
  const pick = (d: Device) => {
    setDev(d);
    setStep(0);
  };

  return (
    <div className="inx-demo">
      <div className="inx-seg" role="group" aria-label="Choose your device">
        <button type="button" className={isMac ? "on" : ""} aria-pressed={isMac} onClick={() => pick("mac")}>
          Mac
        </button>
        <button type="button" className={!isMac ? "on" : ""} aria-pressed={!isMac} onClick={() => pick("pad")}>
          iPad
        </button>
      </div>

      <div className="inx-grid">
        <h2 className="display inx-h">{isMac ? "Add it to your Dock." : "Add it to your Home Screen."}</h2>

        <div className="inx-stage">
          <p className="inx-lead">
            <i className="dot" />
            <i className="line" />
            Step {step + 1} of 4 · {steps[step].lead}
          </p>
          {isMac ? <MacDrawing step={step} /> : <PadDrawing step={step} />}
        </div>

        <div className="inx-list">
          {steps.map((s, i) => (
            <button
              type="button"
              key={s.t}
              className={i === step ? "inx-step on" : "inx-step"}
              aria-current={i === step ? "step" : undefined}
              onClick={() => setStep(i)}
            >
              <span className="n">{i + 1}</span>
              <span>
                <b>{s.t}</b>
                <span className="d">{s.d}</span>
              </span>
            </button>
          ))}
          <div className="inx-nav">
            <button type="button" className="inx-btn" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              Back
            </button>
            <button type="button" className="inx-btn solid" onClick={() => setStep(step === 3 ? 0 : step + 1)}>
              {step === 3 ? "Start over" : "Next step"}
            </button>
          </div>
          {isMac && (
            <p className="inx-chrome">
              Using Chrome on a Mac? Open the ⋮ menu, then Cast, save and share, then Install page as app.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("https://app.two.so");
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable: keep the label as it is
    }
  };

  return (
    <button type="button" className="inx-btn inx-copy" onClick={copy}>
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
