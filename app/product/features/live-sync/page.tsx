import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Sync: Instant Real-Time Document Sync | TWO",
};

const DEVICE_ICONS: Record<string, React.ReactNode> = {
  Mac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="11" rx="1.5" />
      <path d="M2 18h20" />
    </svg>
  ),
  iPad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="10.5" y1="19" x2="13.5" y2="19" />
    </svg>
  ),
  Browser: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
    </svg>
  ),
};

const DEVICES = [
  { name: "Mac" },
  { name: "iPad" },
  { name: "Browser" },
];

const SYNC_LINES = [
  { width: "82%", hi: true },
  { width: "61%" },
  { width: "74%", hi: true },
  { width: "48%" },
];

const STEPS = [
  {
    t: "Write on any device",
    d: "Mac, iPad, or browser. Start wherever you are.",
  },
  {
    t: "Changes push instantly",
    d: "No save button, no spinner. Your words appear on every other device as you type.",
  },
  {
    t: "Reconnects after offline",
    d: "Lost connection on a flight? TWO queues your changes and syncs the moment you're back.",
  },
];

const SPECS = [
  { label: "Sync speed", value: "Instant, as you type" },
  { label: "Devices", value: "Mac, iPad, and browser" },
  { label: "Offline", value: "Queues, syncs on reconnect" },
  { label: "Conflicts", value: "Resolved automatically" },
  { label: "Availability", value: "Web now, Mac & iPad soon" },
  { label: "Included in", value: "Every plan, including Free" },
];

const USES = [
  {
    title: "iPad to Mac handoff",
    desc: "Draft on your iPad in a meeting, open your Mac at your desk and carry on without thinking about it.",
  },
  {
    title: "Always the latest version",
    desc: 'No more "which version is newest?" TWO has one version, always current, on every device.',
  },
  {
    title: "Work offline, sync later",
    desc: "On a plane or in a dead zone? Keep writing. Everything syncs automatically when you reconnect.",
  },
  {
    title: "No conflict headaches",
    desc: 'TWO handles sync conflicts so you never see a "conflicted copy" in your library ever again.',
  },
];

export default function LiveSyncPage() {
  return (
    <div className="features-frame">
      <div className="bc">
        <a href="/product/features">Features</a>
        <span>/</span>
        <span className="cur">Live Sync</span>
      </div>

      <h1 className="display hero-title">
        Every device.
        <br />
        Always current.
      </h1>

      <p className="hero-sub">
        Write on your iPad, pick up on your Mac. Changes appear the moment you make them, no saving, no waiting, no
        version conflicts.
      </p>

      <div className="ls-stage">
        {DEVICES.map((device, i) => (
          <Fragment key={device.name}>
            <div className="ls-dev">
              <div className="ls-dev-label">
                <span className="ls-dev-icon">{DEVICE_ICONS[device.name]}</span> {device.name}
                <div className="ls-sync-dot"></div>
              </div>
              <div className="ls-dev-bar"></div>
              {SYNC_LINES.map((line, j) => (
                <div key={j} className={`ls-dev-sl${line.hi ? " hi" : ""}`} style={{ width: line.width }}></div>
              ))}
            </div>
            {i < DEVICES.length - 1 && (
              <div className="ls-signal">
                <span className="pulse">&lt; 1s</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="bottom-bar ls-bottom-bar">
        <div>
          <span className="k">Sync speed</span>
          <span className="v">Instant, as you type</span>
        </div>
        <div>
          <span className="k">Availability</span>
          <span className="v">Every plan, including Free</span>
        </div>
      </div>

      <div className="split">
        <div>
          <p className="how-title">How it works</p>
          <div className="steps">
            {STEPS.map((step, i) => (
              <div key={step.t} className={`step${i === 0 ? " active" : ""}`}>
                <p className="t">{step.t}</p>
                <p className="d">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="ls-spec-title">Details</p>
          {SPECS.map((spec) => (
            <div key={spec.label} className="ls-spec-row">
              <span className="label">{spec.label}</span>
              <span className="value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dark-strip">
        <p className="micro">Built for how you move</p>
        <h2 className="display dark-title">One doc. Every device. Always.</h2>
        <div className="uses">
          {USES.map((use) => (
            <div key={use.title} className="use">
              <span className="use-arrow">→</span>
              <div>
                <p className="use-title">{use.title}</p>
                <p className="use-desc">{use.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2 className="display cta-title">Ready to write without borders?</h2>
        <p className="cta-sub">Live Sync is free on every plan. Open TWO on a second device and watch it happen.</p>
        <a href="https://app.two.so/signup" className="btn-dark">
          Start writing for free
        </a>
      </div>
    </div>
  );
}
