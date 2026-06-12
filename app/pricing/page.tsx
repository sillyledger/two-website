"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

declare global {
  interface Window {
    Paddle?: {
      Initialize: (opts: { token: string }) => void
      Checkout: {
        open: (opts: { items: { priceId: string; quantity: number }[] }) => void
      }
    }
  }
}

const PADDLE_CLIENT_TOKEN = "live_5d79c55970d6730fce490b94bc1"
const PRICE_PRO_MONTHLY = "pri_01ksjx3b0n6pg6fw44hbq9r03p"
const PRICE_PRO_ANNUAL = "pri_01ksxjysx4n6ewv4dq2mxn5kjr"
const PRICE_FOUNDING = "pri_01ksjx6e6xtrmq324ama45zyr0"

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    if (document.getElementById("paddle-js")) return
    const script = document.createElement("script")
    script.id = "paddle-js"
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js"
    script.async = true
    script.onload = () => {
      window.Paddle?.Initialize({ token: PADDLE_CLIENT_TOKEN })
    }
    document.head.appendChild(script)
  }, [])

  function openProCheckout() {
    const priceId = yearly ? PRICE_PRO_ANNUAL : PRICE_PRO_MONTHLY
    window.Paddle?.Checkout.open({ items: [{ priceId, quantity: 1 }] })
  }

  function openFoundingCheckout() {
    window.Paddle?.Checkout.open({ items: [{ priceId: PRICE_FOUNDING, quantity: 1 }] })
  }

  return (
    <>
      <Navigation />

      <section className="pricing-page-hero">
        <div className="section-eyebrow">Pricing</div>
        <h1 className="pricing-page-h1">Simple, honest pricing.</h1>
        <p className="pricing-page-sub">Start free. Upgrade when you&apos;re ready. No hidden fees.</p>
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
      </section>

      <section className="pricing-section">
        <div className="pricing-inner">
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

      <section className="faq-section">
        <div className="pricing-inner">
          <h2 className="faq-heading">Frequently asked questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-q">Can I switch plans later?</div>
              <div className="faq-a">Yes — upgrade or downgrade at any time. If you upgrade mid-cycle, you&apos;re only charged the difference.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What happens after my free trial?</div>
              <div className="faq-a">You&apos;re moved to the Free plan automatically. No surprise charges, no credit card needed to start.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is the Founding Member deal really lifetime?</div>
              <div className="faq-a">Yes. One payment, full Pro access forever — including every feature added to the Pro tier in the future.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do you offer refunds?</div>
              <div className="faq-a">We offer a 14-day money-back guarantee on all paid plans. Email hey@two.so and we&apos;ll sort it out.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What&apos;s the difference between monthly and yearly?</div>
              <div className="faq-a">Yearly billing works out to $5/month ($60/year) — saving you $12 compared to paying monthly. Same features, same access.</div>
            </div>
          </div>
        </div>
      </section>
      
<CtaBand />

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
