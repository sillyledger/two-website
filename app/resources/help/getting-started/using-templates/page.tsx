import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Document Templates | TWO Help",
};

export default function UsingTemplatesArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/getting-started/using-templates" />

      <article className="harticle">
        <p className="harticle-eyebrow">Getting Started</p>
        <h1 className="display">Using templates</h1>
        <p className="harticle-meta">2 min read · Last updated May 2026</p>

        <p>
          Templates give you a head start on any doc. Instead of starting from a blank page, you can open a
          pre-structured document and fill in your content straight away.
        </p>

        <h2 className="display">Opening the template picker</h2>
        <p>
          From your dashboard, click the <b>Templates</b> button in the top right corner. The template picker will
          appear, showing all available templates.
        </p>

        <div className="htpl-picker">
          <div className="htpl-tile"><div className="l" /><div className="l" /><div className="l" style={{ width: "60%" }} /><p>Meeting Notes</p></div>
          <div className="htpl-tile"><div className="l" /><div className="l" /><div className="l" style={{ width: "70%" }} /><p>Blog Post</p></div>
          <div className="htpl-tile"><div className="l" /><div className="l" /><div className="l" style={{ width: "50%" }} /><p>Product Brief</p></div>
        </div>

        <h2 className="display">Available templates</h2>
        <p>TWO currently includes five templates:</p>
        <ul>
          <li><b>Meeting Notes</b> — Capture agenda, decisions, and action items.</li>
          <li><b>Blog Post</b> — Structure your ideas into a compelling article.</li>
          <li><b>Product Brief</b> — Define the problem, solution, and scope.</li>
          <li><b>Weekly Review</b> — Reflect on the week and plan what&apos;s next.</li>
          <li><b>OKR Tracker</b> — Set objectives, track key results, measure progress.</li>
        </ul>
        <p>Need a blank doc instead? Just click <b>+ New Doc</b> from your dashboard — no template required.</p>

        <h2 className="display">Using a template</h2>
        <p>
          Click any template to open it instantly as a new doc. The structure is already in place — just replace
          the placeholder content with your own and start writing.
        </p>

        <div className="harticle-tip">
          <p>
            <b>Tip:</b> Templates are just a starting point. You can delete sections you don&apos;t need or add new
            ones at any time.
          </p>
        </div>

        <p>
          You can also browse templates on the web at <a href="/resources/templates">two.so/templates</a> to
          preview them before opening.
        </p>

        <div className="harticle-pn">
          <a href="/resources/help/getting-started/your-first-doc">← Your first doc</a>
          <a href="/resources/help/getting-started/using-two-as-a-web-app" className="next">Using TWO as a web app →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
