"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

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

      <section className="pricing-page-section">
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
              <a href="https://app.two.so/signup?plan=pro" className="plan-btn-new plan-btn-primary-new">Start free trial</a>
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
              <a href="https://app.two.so/signup?plan=founding" className="plan-btn-new plan-btn-gold-new">Get lifetime access — $49</a>
            </div>
          </div>

        </div>
      </section>

      <section className="faq-section">
        <div className="faq-inner">
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

      <section className="pricing-cta-section">
        <div className="pricing-cta-inner">
          <h2>Start writing today.</h2>
          <p>Free to start. No credit card required.</p>
          <a href="https://app.two.so/signup" className="btn-hero">Get started free →</a>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "48px 40px 40px", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
            <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--foreground)" }}>TWO</span>
            <span style={{ fontSize: 13, color: "var(--muted-foreground)", maxWidth: 200, lineHeight: 1.5 }}>A better place to think and write.</span>
          </div>
          <div style={{ display: "flex", gap: 60 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: 4 }}>Product</span>
              <a href="https://two.so/#features" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Features</a>
              <a href="/pricing" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Pricing</a>
              <a href="/roadmap" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Roadmap</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: 4 }}>Account</span>
              <a href="https://app.two.so/login" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Log in</a>
              <a href="https://app.two.so/signup" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Sign up</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: 4 }}>Legal</span>
              <a href="/privacy-policy" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/terms-of-service" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Terms of Service</a>
              <a href="/terms-of-service#refunds" style={{ fontSize: 13, color: "var(--muted-foreground)", textDecoration: "none" }}>Refund Policy</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", padding: "16px 40px", fontSize: 12, color: "var(--muted-foreground)" }}>
          © 2026 TWO. All rights reserved.
        </div>
      </footer>
    </>
  )
}
