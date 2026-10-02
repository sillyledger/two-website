"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { PageCta } from "@/components/page-cta";

declare global {
  interface Window {
    Paddle?: {
      Initialize: (opts: { token: string }) => void;
      Checkout: {
        open: (opts: { items: { priceId: string; quantity: number }[] }) => void;
      };
    };
  }
}

const PADDLE_CLIENT_TOKEN = "live_5d79c55970d6730fce490b94bc1";
const PRICE_PRO_MONTHLY = "pri_01ksjx3b0n6pg6fw44hbq9r03p";
const PRICE_PRO_ANNUAL = "pri_01ksxjysx4n6ewv4dq2mxn5kjr";

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f89e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type Cell = string | boolean;
type Row = { label: string; badge?: string; cells: [Cell, Cell, Cell] };

const TABLE: { cat: string; rows: Row[] }[] = [
  {
    cat: "Writing",
    rows: [
      { label: "Docs", cells: ["30", "Unlimited", "Unlimited"] },
      { label: "Split view and tabs", cells: [true, true, true] },
      { label: "Notes with nested categories", cells: [true, true, true] },
      { label: "Templates", cells: [true, true, true] },
      { label: "Export to PDF and Markdown", cells: [true, true, true] },
    ],
  },
  {
    cat: "Thinking and planning",
    rows: [
      { label: "Studio: Ideas and Canvas", badge: "Beta", cells: [true, true, true] },
      { label: "Turn an idea into a doc", cells: ["Counts toward 30", true, true] },
      { label: "Planner with tasks linked to docs", cells: [true, true, true] },
      { label: "Library and Activity", cells: [true, true, true] },
    ],
  },
  {
    cat: "Storage and history",
    rows: [
      { label: "Storage", cells: ["1 GB", "10 GB", "50 GB"] },
      { label: "Version history", cells: ["Last 3 versions", "30 days", "30 days"] },
      { label: "Workspaces", cells: ["1", "Unlimited", "Unlimited"] },
    ],
  },
  {
    cat: "Sharing",
    rows: [
      { label: "Shared workspaces", cells: [false, true, true] },
      { label: "Members per shared workspace", cells: [false, "2 invited", "Up to 10"] },
      { label: "Priority support", cells: [false, true, true] },
    ],
  },
];

const FAQS = [
  {
    q: "Is the free plan really free?",
    a: "Yes. No card, no timer. Thirty docs is enough to make TWO your main writing app and decide for yourself.",
  },
  {
    q: "Does TWO use AI?",
    a: "No. There is no AI writing, summarizing or suggesting anywhere in the app, and your words are never used to train anything.",
  },
  {
    q: "Can I use it on my Mac or iPad?",
    a: "TWO runs in any browser and installs to your Dock or home screen like an app. Native Mac and iPad apps are on the roadmap.",
  },
  {
    q: "What happens when my trial ends?",
    a: "You move to the Free plan automatically. Nothing is deleted. You can upgrade again at any time.",
  },
  {
    q: "What will Team include?",
    a: "Everything in Pro, room for up to 10 members and 50 GB of storage. It is launching soon.",
  },
  {
    q: "Do you charge per person?",
    a: "No. Pro and Team are flat monthly prices. Inviting someone into a shared workspace never changes your bill.",
  },
];

function renderCell(c: Cell) {
  if (c === true) return <span className="pp-yes" aria-label="Included">✓</span>;
  if (c === false) return <span className="pp-no" aria-label="Not included">–</span>;
  return c;
}

export function PricingClient() {
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    if (document.getElementById("paddle-js")) return;
    const script = document.createElement("script");
    script.id = "paddle-js";
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => {
      window.Paddle?.Initialize({ token: PADDLE_CLIENT_TOKEN });
    };
    document.head.appendChild(script);
  }, []);

  function openProCheckout() {
    const priceId = yearly ? PRICE_PRO_ANNUAL : PRICE_PRO_MONTHLY;
    window.Paddle?.Checkout.open({ items: [{ priceId, quantity: 1 }] });
  }

  return (
    <div className="hero-frame">
      <section className="pp-hero">
        <p className="micro">Pricing</p>
        <h1 className="display">One price. Never per seat.</h1>
        <p className="pp-sub">
          Start free and stay free as long as you like. Upgrade when you need more room. Bring people into a workspace without your bill changing.
        </p>
        <div className="pp-toggle">
          <button className={!yearly ? "on" : ""} onClick={() => setYearly(false)}>Monthly</button>
          <button className={yearly ? "on" : ""} onClick={() => setYearly(true)}>Yearly</button>
          <span className="pp-save">Save $12</span>
        </div>
      </section>

      <section className="pp-cards">
        <div className="pp-card">
          <div>
            <div className="pp-card-head">
              <p className="pp-name">Free</p>
            </div>
            <p className="pp-tagline">For trying TWO properly.</p>
          </div>
          <p className="pp-price">
            <span className="display">$0</span>
            <span className="pp-per">forever</span>
          </p>
          <a href="https://app.two.so/signup" className="pp-btn outline">Start free</a>
          <ul className="pp-list">
            <li>{CHECK}30 docs, plus Notes</li>
            <li>{CHECK}Split view and tabs</li>
            <li>{CHECK}Studio, Planner and templates</li>
            <li>{CHECK}1 GB storage, last 3 versions</li>
          </ul>
        </div>

        <div className="pp-card pro">
          <div>
            <div className="pp-card-head">
              <p className="pp-name">Pro</p>
              <span className="pp-badge pro">14 days free</span>
            </div>
            <p className="pp-tagline">For writing every day.</p>
          </div>
          <p className="pp-price">
            <span className="display">{yearly ? "$5" : "$6"}</span>
            <span className="pp-per">{yearly ? "a month, billed $60 yearly" : "a month"}</span>
          </p>
          <button className="pp-btn solid" onClick={openProCheckout}>Start free trial</button>
          <ul className="pp-list">
            <li>{CHECK}Everything in Free</li>
            <li>{CHECK}Unlimited docs and workspaces</li>
            <li>{CHECK}Share a workspace, no seat fees</li>
            <li>{CHECK}10 GB storage, 30-day history</li>
          </ul>
        </div>

        <div className="pp-card">
          <div>
            <div className="pp-card-head">
              <p className="pp-name">Team</p>
              <span className="pp-badge soon">Coming soon</span>
            </div>
            <p className="pp-tagline">For small teams writing together.</p>
          </div>
          <p className="pp-price">
            <span className="display">$10</span>
            <span className="pp-per">a month</span>
          </p>
          <button className="pp-btn soon" disabled>Coming soon</button>
          <ul className="pp-list">
            <li>{CHECK}Everything in Pro</li>
            <li>{CHECK}Up to 10 members</li>
            <li>{CHECK}50 GB storage</li>
          </ul>
        </div>
      </section>

      <p className="pp-fineprint">No credit card for the trial. When it ends, you move to Free and keep everything you wrote.</p>

      <section className="pp-section">
        <h2 className="display">Compare every plan.</h2>
        <div className="pp-table-wrap">
          <div className="pp-table">
            <div className="pp-tr head">
              <span></span>
              <span>Free</span>
              <span className="pro">Pro</span>
              <span>Team <span className="pp-inline-badge">Soon</span></span>
            </div>
            {TABLE.map((group) => (
              <Fragment key={group.cat}>
                <div className="pp-cat">{group.cat}</div>
                {group.rows.map((row) => (
                  <div className="pp-tr" key={row.label}>
                    <span>
                      {row.label}
                      {row.badge && <span className="pp-inline-badge">{row.badge}</span>}
                    </span>
                    <span>{renderCell(row.cells[0])}</span>
                    <span>{renderCell(row.cells[1])}</span>
                    <span>{renderCell(row.cells[2])}</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section">
        <h2 className="display">Things people ask.</h2>
        <div className="pp-faq">
          {FAQS.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
        <p className="pp-help">
          <Link href="/resources/help">More answers in the Help Center →</Link>
        </p>
      </section>

      <PageCta
        title="Two docs. One screen."
        subtitle="Free to start."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        note="Takes ten seconds. No card needed."
      />
    </div>
  );
}
