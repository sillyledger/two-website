"use client";

import { useEffect, useState } from "react";

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
  <svg viewBox="0 0 24 24" fill="none" stroke="#8f89e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FAQS = [
  {
    tag: "Pricing",
    q: "Is the free plan actually free? No credit card stuff?",
    a: "Yes — completely free, no credit card required, no trial timer. The free plan is generous enough to use TWO as your main writing tool. You only upgrade when you want more.",
  },
  {
    tag: "Product",
    q: "What's the difference between TWO and Notion?",
    a: "Notion is a database tool that happens to have a text editor. TWO is a writing app — fast to open, zero setup, nothing to configure. No blocks, no databases, no templates you need to build before you can start. Just open and write.",
  },
  {
    tag: "Product",
    q: "Does split view work on iPad too?",
    a: "Split view is available on web and Mac right now. iPad support is on the roadmap — it's a natural fit and one of our most-requested features.",
  },
  {
    tag: "Pricing",
    q: "What's included in the Team plan?",
    a: "Team includes everything in Pro, plus room for up to 10 members and 50GB of storage. It's launching soon.",
  },
  {
    tag: "Account",
    q: "Can I use TWO across multiple devices?",
    a: "Yes. Your docs sync instantly across every device you're signed into — Mac, web, and iPad. Changes push in real time, so you're never working on a stale version.",
  },
  {
    tag: "General",
    q: "Is my data private? Who can see my docs?",
    a: "Only you. Your docs are private by default — we don't read them, train on them, or share them. You can share individual docs if you choose to, but nothing is public unless you make it so.",
  },
];

export function PricingClient() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <section className="pricing-hero">
        <h1 className="display">Simple, honest pricing.</h1>
        <p>Start free. Upgrade when you&apos;re ready. No hidden fees.</p>

        <div className="pricing-toggle">
          <div className="pricing-toggle-pill">
            <button className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button className={yearly ? "active" : ""} onClick={() => setYearly(true)}>
              Yearly
            </button>
          </div>
          <span className="pricing-save-badge">Save 20%</span>
        </div>
      </section>

      <div className="pricing-sheet">
        <div className="plan-row">
          <div className="spacer"></div>
          <div className="plan-col">
            <p className="name">FREE</p>
            <p className="price display">$0</p>
            <span className="per">/ month</span>
            <span className="note"></span>
            <a href="https://app.two.so/signup" className="btn">
              Get started free
            </a>
          </div>
          <div className="plan-col pro">
            <p className="name">PRO</p>
            <p className="price display">{yearly ? "$5" : "$6"}</p>
            <span className="per">/ month</span>
            <span className="note">
              {yearly ? "Billed $60/year · save $12" : "14-day free trial · no credit card required"}
            </span>
            <button className="btn" onClick={openProCheckout}>
              Start free trial
            </button>
          </div>
          <div className="plan-col team">
            <p className="name">TEAM</p>
            <p className="price display">$10</p>
            <span className="per">/ month</span>
            <span className="note">Coming soon</span>
            <button className="btn" disabled>
              Coming soon
            </button>
          </div>
        </div>

        <div className="spec-row cat">
          <div className="label">Content &amp; storage</div>
          <div className="spec-cell"></div>
          <div className="spec-cell"></div>
          <div className="spec-cell"></div>
        </div>
        <div className="spec-row">
          <div className="label">Documents</div>
          <div className="spec-cell">
            <span className="val">30</span>
          </div>
          <div className="spec-cell">
            <span className="val">Unlimited</span>
          </div>
          <div className="spec-cell">
            <span className="val">Unlimited</span>
          </div>
        </div>
        <div className="spec-row">
          <div className="label">Private workspaces</div>
          <div className="spec-cell">
            <span className="val">1</span>
          </div>
          <div className="spec-cell">
            <span className="val">Unlimited</span>
          </div>
          <div className="spec-cell">
            <span className="val">Unlimited</span>
          </div>
        </div>
        <div className="spec-row">
          <div className="label">Storage</div>
          <div className="spec-cell">
            <span className="val">1GB</span>
          </div>
          <div className="spec-cell">
            <span className="val">10GB</span>
          </div>
          <div className="spec-cell">
            <span className="val">50GB</span>
          </div>
        </div>

        <div className="spec-row cat">
          <div className="label">Editor</div>
          <div className="spec-cell"></div>
          <div className="spec-cell"></div>
          <div className="spec-cell"></div>
        </div>
        <div className="spec-row">
          <div className="label">Rich text editor</div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
        </div>
        <div className="spec-row">
          <div className="label">Planner &amp; activity</div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
        </div>
        <div className="spec-row">
          <div className="label">Version history</div>
          <div className="spec-cell">
            <span className="val">3 versions</span>
          </div>
          <div className="spec-cell">
            <span className="val">30 days</span>
          </div>
          <div className="spec-cell">
            <span className="val">30 days</span>
          </div>
        </div>

        <div className="spec-row cat">
          <div className="label">Collaboration &amp; support</div>
          <div className="spec-cell"></div>
          <div className="spec-cell"></div>
          <div className="spec-cell"></div>
        </div>
        <div className="spec-row">
          <div className="label">Shared workspaces</div>
          <div className="spec-cell">
            <span className="dash">—</span>
          </div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
        </div>
        <div className="spec-row">
          <div className="label">Collaboration</div>
          <div className="spec-cell">
            <span className="dash">—</span>
          </div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
        </div>
        <div className="spec-row">
          <div className="label">Priority support</div>
          <div className="spec-cell">
            <span className="dash">—</span>
          </div>
          <div className="spec-cell">{CHECK}</div>
          <div className="spec-cell">{CHECK}</div>
        </div>
        <div className="spec-row">
          <div className="label">Members</div>
          <div className="spec-cell"><span className="val">1</span></div>
          <div className="spec-cell"><span className="val">1</span></div>
          <div className="spec-cell"><span className="val">Up to 10</span></div>
        </div>
      </div>

      <section className="pricing-faq">
        <h2 className="display">Things people ask.</h2>
        {FAQS.map((item, i) => (
          <div key={i} className="faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <p className="q">
              <span>
                <span className="q-tag">{item.tag}</span>
                {item.q}
              </span>
              <span className="plus">{openFaq === i ? "−" : "+"}</span>
            </p>
            {openFaq === i && <p className="a">{item.a}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}
