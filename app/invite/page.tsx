import type { Metadata } from "next"
import { PageCta } from "@/components/page-cta"

export const metadata: Metadata = {
  title: "The founding beta is full | TWO",
  description:
    "The free TWO founding beta is closed to new people. You can still start free, or become a Founding Member: $99 once, Pro for life.",
}

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f89e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function Invite() {
  return (
    <div className="features-frame">
      <section className="ifx-hero">
        <span className="ifx-status">
          <i aria-hidden="true" />
          Founding beta · Closed
        </span>
        <h1 className="display">
          The beta is full.
          <br />
          <span>Thank you.</span>
        </h1>
        <p className="ifx-intro">
          Every free founding-beta spot is taken, so we&apos;re not adding anyone new. If you already joined, nothing
          changes for you. You can still use TWO today, free or for life.
        </p>
      </section>

      <section className="ifx-ways">
        <p className="micro">Two ways in</p>
        <div className="ifx-cards">
          <div className="ifx-card ft">
            <div className="ifx-top">
              <p className="ifx-name">Founding Member</p>
              <span className="ifx-badge">Pay once</span>
            </div>
            <p className="ifx-price">
              <span className="display">$99</span>
              <span>once, Pro for life</span>
            </p>
            <ul>
              <li>{CHECK}Everything in Pro, for life</li>
              <li>{CHECK}One payment, no subscription</li>
              <li>{CHECK}Limited to 500 founding members</li>
            </ul>
            <a href="https://app.two.so/signup?plan=founding" className="ifx-btn solid">Get lifetime Pro</a>
          </div>
          <div className="ifx-card">
            <div className="ifx-top">
              <p className="ifx-name">Free</p>
            </div>
            <p className="ifx-price">
              <span className="display">$0</span>
              <span>forever</span>
            </p>
            <ul>
              <li>{CHECK}30 docs, plus Notes</li>
              <li>{CHECK}Split view, Studio, Planner</li>
              <li>{CHECK}No card, no timer</li>
            </ul>
            <a href="https://app.two.so/signup" className="ifx-btn outline">Start writing free</a>
          </div>
        </div>
        <p className="ifx-links">
          <span>
            Want to see it first? <a href="/demo">Try the live demo →</a>
          </span>
          <span>
            Prefer monthly? <a href="/pricing">See all plans →</a>
          </span>
        </p>
      </section>

      <PageCta
        title="Two docs."
        subtitle="One screen."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
        note="Free to start. No card needed."
      />
    </div>
  )
}
