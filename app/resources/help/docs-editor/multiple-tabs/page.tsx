import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Working with Multiple Tabs | TWO Help",
};

export default function MultipleTabsArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/docs-editor/multiple-tabs" />

      <article className="harticle">
        <p className="harticle-eyebrow">Docs &amp; Editor</p>
        <h1 className="display">Working with multiple tabs</h1>
        <p className="harticle-meta">3 min read · Last updated Aug 2026</p>

        <p>
          Every doc you open in TWO gets its own tab, so you can jump between several docs without losing your
          place in any of them. Tabs live in a bar just below the top navigation, and stay open until you close
          them, even across page reloads.
        </p>

        <h2 className="display">Opening and switching tabs</h2>
        <p>
          Clicking any doc from Docs, Folders, or Library opens it in a new tab automatically. Click a tab at any
          time to switch to it. Your place in every other open tab is preserved exactly as you left it.
        </p>
        <p>
          Need to jump to a doc that isn&apos;t open yet? Click the <b>+</b>{" "}
          at the end of the tab bar to search your existing docs or start a new one, without leaving the doc
          you&apos;re currently on.
        </p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win">
              <div className="hil-tabs tall">
                <span className="hil-tab on"><i className="hil-dot" style={{ background: "#8f89e6" }} />Product roadmap</span>
                <span className="hil-tab hide-sm"><i className="hil-dot" style={{ background: "#c98a5e" }} />Meeting notes</span>
                <span className="hil-tab hov"><i className="hil-dot" style={{ background: "#6ec39a" }} />Q3 budget<span className="hil-x">×</span></span>
                <span className="hil-tab hide-sm"><i className="hil-dot" style={{ background: "#5b9bd6" }} />Launch</span>
                <span className="hil-tb-icon push" aria-hidden="true">+</span>
                <span className="hil-tb-icon close-all" aria-hidden="true">⊗</span>
              </div>
              <div className="hil-body">
                <div className="hil-ln" style={{ width: "70%" }} />
                <div className="hil-ln" style={{ width: "50%" }} />
              </div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Coloured dot</b>spot a doc at a glance</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Hover a tab</b>to reveal ×</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Close all</b>appears at 2+ tabs</span></div>
          </div>
        </figure>

        <h2 className="display">Closing tabs</h2>
        <p>
          Hover any tab to reveal an × and click it to close just that one. If you&apos;ve got a handful open and
          want a clean slate, the close-all icon at the end of the bar closes every tab at once. TWO will ask you
          to confirm first, so an accidental click won&apos;t cost you your place in every doc.
        </p>
        <div className="harticle-tip">
          <p><b>Tip:</b> Closing a tab never deletes the doc, it just removes it from your bar. You can always
          reopen it from Docs, Folders, or Library.</p>
        </div>

        <h2 className="display">What happens when a tab closes</h2>
        <p>
          If you close the tab you&apos;re currently viewing, TWO automatically switches you to whichever tab you
          had open most recently. If that was your only tab, you&apos;re taken back to Home.
        </p>

        <div className="harticle-pn">
          <a href="/resources/help/docs-editor/formatting">← Formatting</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
