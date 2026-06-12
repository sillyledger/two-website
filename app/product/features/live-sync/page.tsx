import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function LiveSyncPage() {
  return (
    <>
      <Navigation />

      <div className="sv-hero">
        <div className="sv-hero-inner">
          <div className="sv-hero-breadcrumb">
            <a href="/product/features" className="sv-hero-bc-back">Features</a>
            <span className="sv-hero-bc-sep">/</span>
            <span className="sv-hero-bc-cur">Live Sync</span>
          </div>
          <h1 className="sv-hero-title">Every device.<br />Always current.</h1>
          <div className="sv-hero-cols">
            <p className="sv-hero-col">Write on your iPad, pick up on your Mac. Changes appear the moment you make them — no saving, no waiting, no version conflicts.</p>
            <p className="sv-hero-col">Live Sync works silently in the background. You&apos;ll never think about it. That&apos;s the point.</p>
          </div>
        </div>

        <div className="ls-app-bleed">
          <div className="sv-frame-bar">
            <div className="sv-dots">
              <div className="sv-dot sv-dot-r"></div>
              <div className="sv-dot sv-dot-y"></div>
              <div className="sv-dot sv-dot-g"></div>
            </div>
            <div className="sv-frame-url">app.two.so</div>
            <div className="ls-frame-badge">● All devices synced</div>
          </div>
          <div className="ls-devices">

            <div className="ls-device-panel">
              <div className="ls-device-label">
                <span>💻</span> Mac
                <div className="ls-sync-dot"></div>
              </div>
              <div className="ls-doc-content">
                <div className="ls-colorbar" style={{background:"rgba(80,140,255,0.6)"}}></div>
                <div className="ls-title-line" style={{width:"55%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"82%"}}></div>
                <div className="ls-sl" style={{width:"61%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"74%"}}></div>
                <div className="ls-sl" style={{width:"48%"}}></div>
                <div className="ls-cursor-row">
                  <div className="ls-sl ls-sl-hi" style={{width:"38%",flexShrink:0}}></div>
                  <div className="ls-cursor"></div>
                </div>
                <div className="ls-sl" style={{width:"66%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"53%"}}></div>
                <div className="ls-sl" style={{width:"79%"}}></div>
              </div>
            </div>

            <div className="ls-device-panel">
              <div className="ls-device-label">
                <span>📱</span> iPad
                <div className="ls-sync-dot"></div>
              </div>
              <div className="ls-doc-content">
                <div className="ls-colorbar" style={{background:"rgba(80,140,255,0.6)"}}></div>
                <div className="ls-title-line" style={{width:"55%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"82%"}}></div>
                <div className="ls-sl" style={{width:"61%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"74%"}}></div>
                <div className="ls-sl" style={{width:"48%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"38%"}}></div>
                <div className="ls-sl" style={{width:"66%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"53%"}}></div>
                <div className="ls-sl" style={{width:"79%"}}></div>
              </div>
            </div>

            <div className="ls-device-panel">
              <div className="ls-device-label">
                <span>🌐</span> Browser
                <div className="ls-sync-dot"></div>
              </div>
              <div className="ls-doc-content">
                <div className="ls-colorbar" style={{background:"rgba(80,140,255,0.6)"}}></div>
                <div className="ls-title-line" style={{width:"55%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"82%"}}></div>
                <div className="ls-sl" style={{width:"61%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"74%"}}></div>
                <div className="ls-sl" style={{width:"48%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"38%"}}></div>
                <div className="ls-sl" style={{width:"66%"}}></div>
                <div className="ls-sl ls-sl-hi" style={{width:"53%"}}></div>
                <div className="ls-sl" style={{width:"79%"}}></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="sv-body">
        <div className="sv-intro">
          <div className="sv-intro-left">Your work follows you. Not the other way around.</div>
          <div className="sv-intro-right">
            <p>Most sync solutions make you wait — a spinner, a prompt, a moment of uncertainty. TWO syncs as you type. By the time you reach for your other device, the words are already there.</p>
            <p>It works over Wi-Fi, LTE, and reconnects seamlessly after you go offline. Your docs are always the version you expect them to be.</p>
          </div>
        </div>

        <div className="sv-body-divider"></div>

        <div className="sv-blocks">
          <div className="sv-block">
            <div className="sv-block-num">01</div>
            <div className="sv-block-title">Instant, not eventual</div>
            <p className="sv-block-desc">Changes push the moment you make them. No manual save, no sync button, no delay.</p>
          </div>
          <div className="sv-block">
            <div className="sv-block-num">02</div>
            <div className="sv-block-title">Works across all your devices</div>
            <p className="sv-block-desc">Mac, iPad, and browser — all staying in lockstep. Switch devices mid-sentence without missing a word.</p>
          </div>
          <div className="sv-block">
            <div className="sv-block-num">03</div>
            <div className="sv-block-title">Reconnects after offline</div>
            <p className="sv-block-desc">Lost connection on a flight? TWO queues your changes and syncs the moment you&apos;re back online.</p>
          </div>
        </div>
      </div>

      <div className="sv-dark">
        <div className="sv-dark-inner">
          <div className="sv-dark-label">Built for how you move</div>
          <div className="sv-dark-title">One doc. Every device. Always.</div>
          <div className="sv-uses">
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">iPad to Mac handoff</div>
                <p className="sv-use-desc">Draft on your iPad in a meeting, open your Mac at your desk and carry on without thinking about it.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Always the latest version</div>
                <p className="sv-use-desc">No more "which version is newest?" — TWO has one version, always current, on every device.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Work offline, sync later</div>
                <p className="sv-use-desc">On a plane or in a dead zone? Keep writing. Everything syncs automatically when you reconnect.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">No conflict headaches</div>
                <p className="sv-use-desc">TWO handles sync conflicts so you never see a &quot;conflicted copy&quot; in your library ever again.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand />

      <div className="sv-feature-nav">
        <a href="/product/features/split-view" className="sv-fn-back">← Split View</a>
        <a href="/product/features/shared-workspaces" className="sv-fn-next">Next: Shared Workspaces →</a>
      </div>

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
