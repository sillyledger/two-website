import type { Metadata } from "next"
import { Infinity, ArrowUpCircle, MessageCircle } from "lucide-react"
import WaitlistForm from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Beta Access | TWO",
  description: "Join the TWO beta. Get lifetime access to every feature, grandfathered through every upgrade.",
}

export default function Invite() {
  return (
    <div className="features-frame ivx">
      {/* ============ HERO ============ */}
      <section className="ivx-hero">
        <div>
          <p className="micro ivx-eyebrow">Founding beta · Invite only</p>
          <h1 className="display">
            Lifetime access.
            <br />
            <span>Before anyone else.</span>
          </h1>
        </div>
        <div className="ivx-hero-r">
          <p>
            Join a small group of beta testers and get every feature of TWO, free, for as long as it exists. You stay
            grandfathered through every future upgrade.
          </p>
          <WaitlistForm />
          <p className="ivx-fine">We invite people in small rounds. No spam, we email you when your spot opens.</p>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="ivx-benefits">
        <div className="ivx-ben">
          <span className="ivx-ic"><Infinity size={17} style={{ color: "var(--green)" }} /></span>
          <b>Lifetime access</b>
          <span>Every feature, free, for good. No trial, no card.</span>
        </div>
        <div className="ivx-ben">
          <span className="ivx-ic"><ArrowUpCircle size={17} style={{ color: "var(--indigo)" }} /></span>
          <b>Grandfathered upgrades</b>
          <span>When new paid tiers arrive, you already have them.</span>
        </div>
        <div className="ivx-ben">
          <span className="ivx-ic"><MessageCircle size={17} style={{ color: "var(--clay)" }} /></span>
          <b>Shape the product</b>
          <span>Tell us what to build next. We read every reply.</span>
        </div>
      </section>

      {/* ============ WHAT YOU GET: SPLIT VIEW ============ */}
      <section className="ivx-section">
        <div className="ivx-head">
          <div>
            <p className="micro">What you get access to</p>
            <h2 className="display">Two docs.<br />One screen.</h2>
          </div>
          <p>
            TWO is a calm writing app for people who think on their own. Write with your research open beside you,
            keep rough ideas in Studio, and turn them into docs. No AI, nothing to set up.
          </p>
        </div>
        <div className="ivx-split" aria-hidden="true">
          <div className="ivx-pane">
            <b>Chapter three</b>
            <p>By the time the ferry came in, Ana had already decided not to tell anyone about the letter.</p>
            <div className="ivx-ln" style={{ width: "88%" }} />
            <div className="ivx-ln" style={{ width: "76%" }} />
            <div className="ivx-ln" style={{ width: "60%" }} />
          </div>
          <div className="ivx-seam"><span /></div>
          <div className="ivx-pane alt">
            <b>Research notes</b>
            <p>Ferries run twice a day in winter. Fish market closes by noon.</p>
            <div className="ivx-ln" style={{ width: "80%" }} />
            <div className="ivx-ln clay" style={{ width: "66%" }} />
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU GET: STUDIO ============ */}
      <section className="ivx-section">
        <div className="ivx-head">
          <div>
            <p className="micro">And Studio</p>
            <h2 className="display">For the thinking<br />that isn&apos;t a doc yet.</h2>
          </div>
          <p>
            Keep a list of ideas, work them out on an open canvas, and turn any idea into a real doc in one click.
          </p>
        </div>
      </section>

      <section className="sd-stage-scroll">
        <div className="sd-stage">
          <div className="sd-board" aria-hidden="true">
            <div className="sd-toolbar">
              <span className="on">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b8ff" strokeWidth="1.8"><path d="M4 4l7 16 2-7 7-2z" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><path d="M15 3H5a2 2 0 00-2 2v14a2 2 0 002 2h9l7-7V5a2 2 0 00-2-2z" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><path d="M5 5h14M12 5v14" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-8 8" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="3" /></svg>
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.8"><circle cx="12" cy="12" r="8" /></svg>
              </span>
            </div>
            <div className="sd-bc">Studio › Canvas › Brand refresh</div>

            <svg className="sd-lines" width="1084" height="580" fill="none" stroke="#8f89e6" strokeWidth="1.4">
              <path d="M314 175 C 380 175, 380 139, 447 139" />
              <path d="M314 175 C 380 175, 380 301, 447 301" />
              <path d="M619 139 C 685 139, 685 234, 750 234" />
              <path d="M619 301 C 685 301, 685 234, 750 234" />
            </svg>

            <div className="sd-cv sd-cv-text">
              <span className="k">TEXT</span>
              What should the rebrand feel like?
            </div>
            <div className="sd-cv sd-cv-doc">
              <span className="k doc">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e0b48c" strokeWidth="2"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /></svg>
                DOC
              </span>
              <b>Client brief</b>
              <span className="m">Edited 2h ago</span>
            </div>
            <div className="sd-cv sd-cv-note">
              <span className="k">NOTE</span>
              &ldquo;Quieter, like a bookshop, not a gallery.&rdquo;
            </div>
            <div className="sd-shape">Direction: Calm</div>
            <div className="sd-swatches">
              <div><i style={{ background: "#8f89e6" }} /><u>#8F89E6</u></div>
              <div><i style={{ background: "#c98a5e" }} /><u>#C98A5E</u></div>
              <div><i style={{ background: "#e8e4da" }} /><u>#E8E4DA</u></div>
            </div>
            <div className="sd-photo">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5a5a64" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-8 8" /></svg>
              Reference photo
            </div>
            <div className="sd-diamond" />
            <div className="sd-zoom"><span>−</span><span>100%</span><span>+</span></div>
          </div>

          <div className="sd-leader sd-l-pin">
            <span className="sd-lbl"><b>Pin</b> docs &amp; notes</span>
            <span className="sd-line" style={{ height: 132 }} />
            <span className="sd-tick" />
          </div>
          <div className="sd-leader sd-l-shape">
            <span className="sd-lbl"><b>Shapes</b> with text inside</span>
            <span className="sd-line" style={{ height: 205 }} />
            <span className="sd-tick" />
          </div>
          <div className="sd-leader sd-l-swatch">
            <span className="sd-tick" />
            <span className="sd-line" style={{ height: 213 }} />
            <span className="sd-lbl"><b>Color</b> cards</span>
          </div>
        </div>
      </section>

      <div className="sd-kv">
        <div><span className="k">Canvas</span><span className="v">Infinite, pan and zoom</span></div>
        <div><span className="k">Connect</span><span className="v">Draw lines between anything</span></div>
        <div><span className="k">Organize</span><span className="v">Nested color categories</span></div>
      </div>

      <p className="ivx-demo">
        <a href="/demo">Try the live demo first →</a>
      </p>

      {/* ============ HOW IT WORKS ============ */}
      <section className="ivx-section">
        <p className="micro">How it works</p>
        <div className="ivx-steps">
          <div className="ivx-step">
            <span className="ivx-node filled" />
            <span className="ivx-num">01</span>
            <b>Join the list</b>
            <span>Leave your email and confirm it from your inbox.</span>
          </div>
          <div className="ivx-step">
            <span className="ivx-node" />
            <span className="ivx-num">02</span>
            <b>Get your invite</b>
            <span>We open spots in small rounds and email you when yours is ready.</span>
          </div>
          <div className="ivx-step">
            <span className="ivx-node" />
            <span className="ivx-num">03</span>
            <b>Write, free for life</b>
            <span>Every feature, every future upgrade. Tell us what you think.</span>
          </div>
        </div>
      </section>

      {/* ============ CLOSING (shared closing layout, with the form) ============ */}
      <section className="ivx-end">
        <h2 className="display">
          Want in?
          <br />
          <span>Save your spot.</span>
        </h2>
        <div className="ivx-end-form">
          <WaitlistForm />
          <p className="ivx-fine">Free for life. No spam.</p>
        </div>
      </section>
    </div>
  )
}
