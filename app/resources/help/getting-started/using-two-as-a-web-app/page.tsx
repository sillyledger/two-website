import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";

export default function UsingTwoAsAWebAppArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/getting-started/using-two-as-a-web-app" />

      <article className="harticle">
        <p className="harticle-eyebrow">Getting Started</p>
        <h1 className="display">Using TWO as a web app</h1>
        <p className="harticle-meta">3 min read · Last updated May 2026</p>

        <p>
          TWO works as a web app on Mac, iPad, and iPhone — no App Store needed. Once installed, it opens in its
          own window and feels just like a native app.
        </p>

        <div className="harticle-tip">
          <p>
            <b>Note:</b> Installation only works in Safari. Chrome and Firefox don&apos;t support web app
            installation on Apple devices.
          </p>
        </div>

        <h2 className="display">Mac — Add to your Dock</h2>
        <p>
          The Mac web app opens in its own standalone window, completely separate from your browser. You can
          launch it directly from the Dock like any native app.
        </p>
        <ol className="harticle-ol">
          <li><b>Open Safari</b> and go to <a href="https://app.two.so">app.two.so</a>.</li>
          <li>In the menu bar, click <b>File → Add to Dock</b>.</li>
          <li>Click <b>Add</b> in the confirmation dialog.</li>
          <li>TWO will appear in your Dock immediately — click it any time to launch.</li>
        </ol>

        <h2 className="display">iPad — Add to your Home Screen</h2>
        <ol className="harticle-ol">
          <li><b>Open Safari</b> and go to <a href="https://app.two.so">app.two.so</a>.</li>
          <li>Tap the <b>Share</b> icon in the toolbar.</li>
          <li>Tap <b>Add to Home Screen</b>, confirm the name, and tap Add.</li>
          <li>TWO opens full screen on your iPad with no browser UI.</li>
        </ol>

        <h2 className="display">iPhone — Add to your Home Screen</h2>
        <ol className="harticle-ol">
          <li><b>Open Safari</b> and go to <a href="https://app.two.so">app.two.so</a>.</li>
          <li>Tap the <b>Share</b> icon at the bottom of the screen.</li>
          <li>Scroll down and tap <b>Add to Home Screen</b>, then tap Add.</li>
          <li>TWO lives on your home screen like any native app — full screen, no browser chrome.</li>
        </ol>

        <h2 className="display">Common questions</h2>
        <p><b>Is it free?</b><br />Yes — installing TWO as a web app is completely free. No App Store, no payment required.</p>
        <p><b>Will it work offline?</b><br />Offline support is on our roadmap. For now, TWO requires an internet connection to load and save your docs.</p>
        <p><b>Are native apps coming?</b><br />Yes — native Mac and iPad apps are planned. The web app is the best way to get started right now.</p>

        <div className="harticle-pn">
          <a href="/resources/help/getting-started/using-templates">← Using templates</a>
          <a href="/resources/help/docs-editor/formatting" className="next">Formatting →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
