"use client"

import { useState, useEffect } from "react"

const PADDLE_CLIENT_TOKEN = "live_5d79c55970d6730fce490b94bc1"
const PRICE_PRO_MONTHLY   = "pri_01ksjx3b0n6pg6fw44hbq9r03p"
const PRICE_PRO_ANNUAL    = "pri_01ksxjysx4n6ewv4dq2mxn5kjr"
const PRICE_FOUNDING      = "pri_01ksjx6e6xtrmq324ama45zyr0"

export function PricingSection() {
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    if (document.getElementById("paddle-js")) return
    const script = document.createElement("script")
    script.id = "paddle-js"
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js"
    script.async = true
    script.onload = () => {
      ;(window as any).Paddle?.Initialize({ token: PADDLE_CLIENT_TOKEN })
    }
    document.head.appendChild(script)
  }, [])

  function openProCheckout() {
    const priceId = yearly ? PRICE_PRO_ANNUAL : PRICE_PRO_MONTHLY
    ;(window as any).Paddle?.Checkout.open({ items: [{ priceId, quantity: 1 }] })
  }

  function openFoundingCheckout() {
    ;(window as any).Paddle?.Checkout.open({ items: [{ priceId: PRICE_FOUNDING, quantity: 1 }] })
  }

  return (
    <section className="section pricing-wrap" id="pricing">
      <div className="section-eyebrow"><span className="s-dot"></span>Pricing</div>
      <div className="head">
        <h2>Simple pricing, no surprises.</h2>
        <p>Start free. Upgrade when you&apos;re ready — or lock in Pro for life as a Founding Member.</p>
      </div>

      <div className="toggle-wrap">
        <div className="toggle-pill">
          <button
            className={`toggle-opt${!yearly ? " active" : ""}`}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`toggle-opt${yearly ? " active" : ""}`}
            onClick={() => setYearly(true)}
          >
            Yearly
          </button>
        </div>
        <span className="save-badge">Save 20% yearly</span>
      </div>

      <div className="pricing-grid">

        {/* Free */}
        <div className="pricing-card">
          <div className="plan-name"><span className="dot" style={{ background: "var(--muted)" }}></span>Free</div>
          <div className="desc">Everything you need to get started, with a content limit.</div>
          <div><span className="amount">$0</span><span className="period"> / month</span></div>
          <div className="note">No credit card required</div>
          <div className="divider"></div>
          <ul className="feats">
            <li><span className="check">✓</span> 30 docs</li>
            <li><span className="check">✓</span> 1 private workspace</li>
            <li><span className="check">✓</span> Rich text editor</li>
            <li><span className="check">✓</span> Planner &amp; activity</li>
            <li><span className="check">✓</span> 1GB storage</li>
          </ul>
          <a href="https://app.two.so/signup" className="pricing-btn-ghost">Get started free</a>
        </div>

        {/* Pro */}
        <div className="pricing-card dark">
          <div className="plan-name"><span className="dot" style={{ background: "#8890d6" }}></span>Pro <span className="badge">Most popular</span></div>
          <div className="desc">Unlimited everything. Built for people who write seriously.</div>
          <div><span className="amount">{yearly ? "$5" : "$6"}</span><span className="period"> / month</span></div>
          <div className="note">{yearly ? "Billed $60 / year · save $12" : "14-day free trial · no credit card required"}</div>
          <div className="divider"></div>
          <ul className="feats">
            <li><span className="check">✓</span> Unlimited docs &amp; workspaces</li>
            <li><span className="check">✓</span> Shared workspaces &amp; collaboration</li>
            <li><span className="check">✓</span> 10GB storage</li>
            <li><span className="check">✓</span> Export to PDF / Markdown</li>
            <li><span className="check">✓</span> Priority support</li>
          </ul>
          <button onClick={openProCheckout} className="btn-dark-cta">Start free trial</button>
        </div>

        {/* Founding Member */}
        <div className="pricing-card">
          <div className="plan-name"><span className="dot" style={{ background: "var(--clay)" }}></span>Founding member</div>
          <div className="desc">Everything in Pro, forever. For the first 500 people who believe in TWO.</div>
          <div><span className="amount">$49</span><span className="period"> one-time</span></div>
          <div className="note">500 slots only</div>
          <div className="divider"></div>
          <ul className="feats">
            <li><span className="check clay">✓</span> Everything in Pro</li>
            <li><span className="check clay">✓</span> Lifetime access — no subscription</li>
            <li><span className="check clay">✓</span> Founding member status</li>
            <li><span className="check clay">✓</span> All future Pro features</li>
            <li><span className="check clay">✓</span> Priority support</li>
          </ul>
          <button onClick={openFoundingCheckout} className="btn-clay">Get lifetime access</button>
        </div>

      </div>
    </section>
  )
}
