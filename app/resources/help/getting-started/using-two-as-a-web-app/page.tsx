import { HelpLayout } from "@/components/help-layout"

export default function UsingTwoAsAWebApp() {
  return (
    <HelpLayout activeArticle="using-two-as-a-web-app">
      <div className="help-eyebrow">Getting started</div>
      <h1 className="help-title">Using TWO as a web app</h1>
      <div className="help-meta">3 min read · Last updated May 2026</div>
      <div className="help-body">

        <p>TWO works as a web app on Mac, iPad, and iPhone — no App Store needed. Once installed, it opens in its own window and feels just like a native app.</p>

        <div className="help-tip">
          <p><strong>Note:</strong> Installation only works in Safari. Chrome and Firefox don&apos;t support web app installation on Apple devices.</p>
        </div>

        <h2>Mac — Add to your Dock</h2>
        <p>The Mac web app opens in its own standalone window, completely separate from your browser. You can launch it directly from the Dock like any native app.</p>

        <img
          src="/install-mac.png"
          alt="Adding TWO to the Mac Dock via Safari"
          className="help-image"
        />

        <ol className="help-ol">
          <li><strong>Open Safari</strong> and go to <a href="https://app.two.so">app.two.so</a>.</li>
          <li>In the menu bar, click <strong>File → Add to Dock</strong>.</li>
          <li>Click <strong>Add</strong> in the confirmation dialog.</li>
          <li>TWO will appear in your Dock immediately — click it any time to launch.</li>
        </ol>

        <h2>iPad — Add to your Home Screen</h2>
        <ol className="help-ol">
          <li><strong>Open Safari</strong> and go to <a href="https://app.two.so">app.two.so</a>.</li>
          <li>Tap the <strong>Share</strong> icon in the toolbar.</li>
          <li>Tap <strong>Add to Home Screen</strong>, confirm the name, and tap Add.</li>
          <li>TWO opens full screen on your iPad with no browser UI.</li>
        </ol>

        <h2>iPhone — Add to your Home Screen</h2>
        <ol className="help-ol">
          <li><strong>Open Safari</strong> and go to <a href="https://app.two.so">app.two.so</a>.</li>
          <li>Tap the <strong>Share</strong> icon at the bottom of the screen.</li>
          <li>Scroll down and tap <strong>Add to Home Screen</strong>, then tap Add.</li>
          <li>TWO lives on your home screen like any native app — full screen, no browser chrome.</li>
        </ol>

        <h2>Common questions</h2>

        <p><strong>Is it free?</strong><br />Yes — installing TWO as a web app is completely free. No App Store, no payment required.</p>

        <p><strong>Will it work offline?</strong><br />Offline support is on our roadmap. For now, TWO requires an internet connection to load and save your docs.</p>

        <p><strong>Are native apps coming?</strong><br />Yes — native Mac and iPad apps are planned. The web app is the best way to get started right now.</p>

        <p>For full installation instructions and screenshots for every device, see the <a href="https://www.two.so/install">TWO install page →</a></p>

      </div>
      <div className="help-nav-footer">
        <a href="/resources/help/getting-started/using-templates" className="help-nav-link">← Using templates</a>
        <a href="/resources/help/docs-editor/formatting" className="help-nav-link">Formatting →</a>
      </div>
    </HelpLayout>
  )
}
