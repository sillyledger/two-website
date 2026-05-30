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
    <section className="pricing-section" id="pricing">
      <div className="pricing-inner">
        <h2 className="pricing-heading">Pricing plans</h2>
        <p className="pricing-sub">Start free. Upgrade when you&apos;re ready.</p>

        {/* Toggle */}
        <div className="pricing-toggle-wrap">
          <div className="pricing-toggle-pill">
            <button
              className={`pricing-toggle-opt${!yearly ? " pricing-toggle-active" : ""}`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`pricing-toggle-opt${yearly ? " pricing-toggle-active" : ""}`}
              onClick={() => setYearly(true)}
            >
              Yearly
            </button>
          </div>
          <span className="pricing-save-badge">Save 20%</span>
        </div>

        <div className="plan-grid-new">

          {/* Free */}
          <div className="plan-card-new">
            <div className="plan-card-bar" style={{ background: "#888780" }} />
            <div className="plan-card-body">
              <div className="plan-name-new">Free</div>
              <div className="plan-desc-new">Everything you need to get started — with a content limit.</div>
              <div className="plan-price-new">$0<span className="plan-period"> / month</span></div>
              <div className="plan-divider-new" />
              <ul className="plan-features-new">
                <li><span className="pf-check">✓</span> 30 docs</li>
                <li><span className="pf-check">✓</span> 1 private workspace</li>
                <li><span className="pf-check">✓</span> Rich text editor</li>
                <li><span className="pf-check">✓</span> Planner &amp; activity</li>
                <li><span className="pf-check">✓</span> 1GB storage</li>
                <li><span className="pf-cross">✕</span> Shared workspaces</li>
                <li><span className="pf-cross">✕</span> Collaboration</li>
              </ul>
              <a href="https://app.two.so/signup" className="plan-btn-new plan-btn-ghost-new">Get started free</a>
            </div>
          </div>

          {/* Pro */}
          <div className="plan-card-new plan-card-featured-new">
            <div className="plan-card-bar" style={{ background: "#534AB7" }} />
            <div className="plan-card-body">
              <div className="plan-name-new">
                Pro
                <span className="plan-popular-badge">Most popular</span>
              </div>
              <div className="plan-desc-new">Unlimited everything. Built for people who write seriously.</div>
              <div className="plan-price-new">
                {yearly ? "$5" : "$6"}<span className="plan-period"> / month</span>
              </div>
              <div className="plan-note-new">
                {yearly ? "Billed $60 / year · save $12" : "14-day free trial · no credit card required"}
              </div>
              <div className="plan-divider-new" />
              <ul className="plan-features-new">
                <li><span className="pf-check">✓</span> Unlimited docs</li>
                <li><span className="pf-check">✓</span> Unlimited workspaces</li>
                <li><span className="pf-check">✓</span> Shared workspaces</li>
                <li><span className="pf-check">✓</span> Collaboration</li>
                <li><span className="pf-check">✓</span> 10GB storage</li>
                <li><span className="pf-check">✓</span> Priority support</li>
                <li><span className="pf-soon">◷</span> Version history <span className="pf-soon-tag">soon</span></li>
                <li><span className="pf-soon">◷</span> Export PDF / MD <span className="pf-soon-tag">soon</span></li>
              </ul>
              <button onClick={openProCheckout} className="plan-btn-new plan-btn-primary-new">
                {yearly ? "Start free trial — $60/yr" : "Start free trial"}
              </button>
            </div>
          </div>

          {/* Founding Member */}
          <div className="plan-card-new">
            <div className="plan-card-bar" style={{ background: "#BA7517" }} />
            <div className="plan-card-body">
              <div className="plan-name-new">Founding member</div>
              <div className="plan-desc-new">Everything in Pro, forever. For the first 500 people who believe in TWO.</div>
              <div className="plan-price-new">$49<span className="plan-period"> one-time</span></div>
              <div className="plan-note-new">500 slots only</div>
              <div className="plan-divider-new" />
              <ul className="plan-features-new">
                <li><span className="pf-check">✓</span> Everything in Pro</li>
                <li><span className="pf-check">✓</span> Lifetime access — no subscription</li>
                <li><span className="pf-check">✓</span> Founding member status</li>
                <li><span className="pf-check">✓</span> All future Pro features</li>
                <li><span className="pf-check">✓</span> Priority support</li>
              </ul>
              <button onClick={openFoundingCheckout} className="plan-btn-new plan-btn-gold-new">
                Get lifetime access — $49
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
