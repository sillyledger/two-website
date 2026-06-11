"use client"

import { useState } from "react"

const FAQS = [
  {
    tag: "Pricing", tagClass: "faq-tag-pricing",
    q: "Is the free plan actually free? No credit card stuff?",
    a: "Yes — completely free, no credit card required, no trial timer. The free plan is generous enough to use TWO as your main writing tool. You only upgrade when you want more.",
  },
  {
    tag: "Product", tagClass: "faq-tag-product",
    q: "What's the difference between TWO and Notion?",
    a: "Notion is a database tool that happens to have a text editor. TWO is a writing app — fast to open, zero setup, nothing to configure. No blocks, no databases, no templates you need to build before you can start. Just open and write.",
  },
  {
    tag: "Product", tagClass: "faq-tag-product",
    q: "Does split view work on iPad too?",
    a: "Split view is available on web and Mac right now. iPad support is on the roadmap — it's a natural fit and one of our most-requested features.",
  },
  {
    tag: "Pricing", tagClass: "faq-tag-pricing",
    q: "What does the Founding Member plan include?",
    a: "Founding Member is a one-time purchase that locks in lifetime access to every Pro feature — including everything we ship in the future. It's for people who believe in TWO early. Once it's gone, it's gone.",
  },
  {
    tag: "Account", tagClass: "faq-tag-account",
    q: "Can I use TWO across multiple devices?",
    a: "Yes. Your docs sync instantly across every device you're signed into — Mac, web, and iPad. Changes push in real time, so you're never working on a stale version.",
  },
  {
    tag: "General", tagClass: "faq-tag-general",
    q: "Is my data private? Who can see my docs?",
    a: "Only you. Your docs are private by default — we don't read them, train on them, or share them. You can share individual docs if you choose to, but nothing is public unless you make it so.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq-section">
      <div className="faq-inner">

        <div className="faq-left">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="faq-heading">Things people ask.</h2>
          <p className="faq-sub">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="https://www.two.so/resources/help">Browse our Help &amp; Guides →</a>
          </p>
          <div className="faq-bottom">
            <div className="faq-bottom-title">Still have questions?</div>
            <div className="faq-bottom-sub">Everything you need is in our guides.</div>
            <a href="https://www.two.so/resources/help" className="faq-bottom-btn">
              Help &amp; Guides →
            </a>
          </div>
        </div>

        <div className="faq-right">
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className="faq-item"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="faq-item-left">
                  <div className="faq-q-row">
                    <span className={`faq-tag ${item.tagClass}`}>{item.tag}</span>
                    <div className="faq-q">{item.q}</div>
                  </div>
                  {open === i && <div className="faq-a">{item.a}</div>}
                </div>
                <div className={`faq-toggle${open === i ? " faq-toggle-open" : ""}`}>+</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
