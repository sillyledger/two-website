import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create Your First Document | TWO Help",
};

export default function YourFirstDocArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/getting-started/your-first-doc" />

      <article className="harticle">
        <p className="harticle-eyebrow">Getting Started</p>
        <h1 className="display">Your first doc</h1>
        <p className="harticle-meta">2 min read · Last updated May 2026</p>

        <p>
          Creating a doc in TWO takes one click. This article walks you through everything — from creating your
          first doc to understanding how it gets saved.
        </p>

        <h2 className="display">Creating a new doc</h2>
        <p>
          From your dashboard, click the <b>+ New Doc</b> button in the top right corner. A blank doc will open
          instantly, ready for you to start writing.
        </p>
        <p>You can also create a doc from the sidebar by clicking the compose icon next to your workspace name.</p>

        <div className="harticle-tip">
          <p>
            <b>Tip:</b> TWO opens straight to your most recent doc every time you launch the app — so you can pick
            up exactly where you left off.
          </p>
        </div>

        <h2 className="display">Giving your doc a title</h2>
        <p>
          Click at the top of the page and type your title. There&apos;s no separate title field — the first line
          of your doc becomes the title automatically. It will appear in your dashboard and sidebar once
          you&apos;ve typed it.
        </p>

        <div className="harticle-pn">
          <span />
          <a href="/resources/help/getting-started/using-templates" className="next">Using templates →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
