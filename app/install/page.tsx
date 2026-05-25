import { Navigation } from "@/components/navigation"

export default function InstallPage() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">Get the app</div>
        <h1>Install TWO on your device</h1>
        <p className="hero-sub">
          TWO works as a web app on iPhone, iPad, and Mac — no App Store needed.
          Add it to your home screen in seconds.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="roadmap-inner">

          {/* iPhone */}
          <div className="install-block">
            <div className="install-platform-head">
              <span className="install-platform-icon">iPhone</span>
            </div>
            <ol className="install-steps">
              <li className="install-step">
                <div className="install-step-num">1</div>
                <div className="install-step-body">
                  <div className="install-step-title">Open Safari</div>
                  <div className="install-step-desc">Go to <strong>app.two.so</strong> in Safari. This only works in Safari — Chrome and Firefox can&apos;t install web apps on iPhone.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">2</div>
                <div className="install-step-body">
                  <div className="install-step-title">Tap the Share button</div>
                  <div className="install-step-desc">Tap the <strong>Share icon</strong> at the bottom of the screen — it looks like a box with an arrow pointing up.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">3</div>
                <div className="install-step-body">
                  <div className="install-step-title">Tap &ldquo;Add to Home Screen&rdquo;</div>
                  <div className="install-step-desc">Scroll down in the share sheet and tap <strong>Add to Home Screen</strong>. Confirm the name and tap <strong>Add</strong>.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">4</div>
                <div className="install-step-body">
                  <div className="install-step-title">Open TWO from your home screen</div>
                  <div className="install-step-desc">TWO now lives on your home screen like any native app — full screen, no browser chrome.</div>
                </div>
              </li>
            </ol>
          </div>

          <div className="roadmap-divider"></div>

          {/* iPad */}
          <div className="install-block">
            <div className="install-platform-head">
              <span className="install-platform-icon">iPad</span>
            </div>
            <ol className="install-steps">
              <li className="install-step">
                <div className="install-step-num">1</div>
                <div className="install-step-body">
                  <div className="install-step-title">Open Safari</div>
                  <div className="install-step-desc">Go to <strong>app.two.so</strong> in Safari. Must be Safari — other browsers don&apos;t support this on iPad.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">2</div>
                <div className="install-step-body">
                  <div className="install-step-title">Tap the Share button</div>
                  <div className="install-step-desc">Tap the <strong>Share icon</strong> in the toolbar at the top of the screen.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">3</div>
                <div className="install-step-body">
                  <div className="install-step-title">Tap &ldquo;Add to Home Screen&rdquo;</div>
                  <div className="install-step-desc">Tap <strong>Add to Home Screen</strong> from the share menu, confirm the name, and tap <strong>Add</strong>.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">4</div>
                <div className="install-step-body">
                  <div className="install-step-title">Open TWO from your home screen</div>
                  <div className="install-step-desc">TWO launches full screen from your iPad home screen — optimised for the large display.</div>
                </div>
              </li>
            </ol>
          </div>

          <div className="roadmap-divider"></div>

          {/* Mac */}
          <div className="install-block">
            <div className="install-platform-head">
              <span className="install-platform-icon">Mac</span>
            </div>
            <ol className="install-steps">
              <li className="install-step">
                <div className="install-step-num">1</div>
                <div className="install-step-body">
                  <div className="install-step-title">Open Safari</div>
                  <div className="install-step-desc">Go to <strong>app.two.so</strong> in Safari on your Mac.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">2</div>
                <div className="install-step-body">
                  <div className="install-step-title">Open the File menu</div>
                  <div className="install-step-desc">In the menu bar, click <strong>File</strong> → <strong>Add to Dock</strong>.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">3</div>
                <div className="install-step-body">
                  <div className="install-step-title">Confirm and add</div>
                  <div className="install-step-desc">Click <strong>Add</strong> in the dialog. TWO will appear in your Dock as a standalone app.</div>
                </div>
              </li>
              <li className="install-step">
                <div className="install-step-num">4</div>
                <div className="install-step-body">
                  <div className="install-step-title">Launch from your Dock</div>
                  <div className="install-step-desc">Click the TWO icon in your Dock any time — it opens in its own window, separate from your browser.</div>
                </div>
              </li>
            </ol>
          </div>

          <div className="roadmap-divider"></div>

          {/* FAQ */}
          <div className="install-faq">
            <div className="roadmap-later-title">Common questions</div>
            <div className="roadmap-later-grid">
              <div className="roadmap-later-item">
                <div className="roadmap-later-name">Is it free?</div>
                <div className="roadmap-later-desc">Yes — installing TWO as a web app is completely free. No App Store, no payment required.</div>
              </div>
              <div className="roadmap-later-item">
                <div className="roadmap-later-name">Will my data sync?</div>
                <div className="roadmap-later-desc">Yes. Your docs are stored in the cloud and sync instantly across all your devices.</div>
              </div>
              <div className="roadmap-later-item">
                <div className="roadmap-later-name">Why Safari only?</div>
                <div className="roadmap-later-desc">Apple only allows web apps to be installed on Apple devices through Safari. Chrome and Firefox don&apos;t support this feature on iOS or iPadOS.</div>
              </div>
              <div className="roadmap-later-item">
                <div className="roadmap-later-name">Native apps coming?</div>
                <div className="roadmap-later-desc">Yes — native Mac and iPad apps are on the roadmap. The web app is the best way to get started today.</div>
              </div>
            </div>
          </div>

          <div className="roadmap-cta">
            <p>Ready to start writing?</p>
            <a href="https://app.two.so/signup" className="btn-hero">Create a free account →</a>
          </div>

        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  )
}
