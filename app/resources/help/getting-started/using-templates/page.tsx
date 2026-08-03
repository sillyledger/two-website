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
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

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
        <p>Some of our popular templates are:</p>

        <div className="tp-grid htpl-grid">
          <a href="https://app.two.so/new?template=meeting-notes" className="tp-card business">
            <div className="tp-doc">
              <div className="tp-doc-bar"><i /><i /><i /></div>
              <div className="tp-doc-title">Meeting notes</div>
              <div className="tp-ln tp-w90" />
              <div className="tp-ln tp-w60" />
              <div className="tp-ln tp-w75" />
            </div>
            <div className="tp-card-body">
              <p className="tp-cat-label">Business</p>
              <p className="tp-card-title">Meeting notes</p>
              <p className="tp-card-desc">Agenda, decisions, and action items — all in one structured doc.</p>
              <span className="tp-use">Use template →</span>
            </div>
          </a>
          <a href="https://app.two.so/new?template=blog-post" className="tp-card creative">
            <div className="tp-doc">
              <div className="tp-doc-bar"><i /><i /><i /></div>
              <div className="tp-doc-title">Blog post</div>
              <div className="tp-ln tp-w90" />
              <div className="tp-ln tp-w60" />
              <div className="tp-ln tp-w75" />
            </div>
            <div className="tp-card-body">
              <p className="tp-cat-label">Creative</p>
              <p className="tp-card-title">Blog post</p>
              <p className="tp-card-desc">Hook, three sections, CTA, and a pre-publish checklist.</p>
              <span className="tp-use">Use template →</span>
            </div>
          </a>
          <a href="https://app.two.so/new?template=product-brief" className="tp-card strategy">
            <div className="tp-doc">
              <div className="tp-doc-bar"><i /><i /><i /></div>
              <div className="tp-doc-title">Product brief</div>
              <div className="tp-ln tp-w90" />
              <div className="tp-ln tp-w60" />
              <div className="tp-ln tp-w75" />
            </div>
            <div className="tp-card-body">
              <p className="tp-cat-label">Strategy</p>
              <p className="tp-card-title">Product brief</p>
              <p className="tp-card-desc">Problem, users, goals, scope, and risk — in one tight doc.</p>
              <span className="tp-use">Use template →</span>
            </div>
          </a>
          <a href="https://app.two.so/new?template=weekly-review" className="tp-card personal">
            <div className="tp-doc">
              <div className="tp-doc-bar"><i /><i /><i /></div>
              <div className="tp-doc-title">Weekly review</div>
              <div className="tp-ln tp-w90" />
              <div className="tp-ln tp-w60" />
              <div className="tp-ln tp-w75" />
            </div>
            <div className="tp-card-body">
              <p className="tp-cat-label">Personal</p>
              <p className="tp-card-title">Weekly review</p>
              <p className="tp-card-desc">Wins, blockers, priorities, and metrics — every week, sorted.</p>
              <span className="tp-use">Use template →</span>
            </div>
          </a>
          <a href="https://app.two.so/new?template=okr-tracker" className="tp-card strategy">
            <div className="tp-doc">
              <div className="tp-doc-bar"><i /><i /><i /></div>
              <div className="tp-doc-title">OKR tracker</div>
              <div className="tp-ln tp-w90" />
              <div className="tp-ln tp-w60" />
              <div className="tp-ln tp-w75" />
            </div>
            <div className="tp-card-body">
              <p className="tp-cat-label">Strategy</p>
              <p className="tp-card-title">OKR tracker</p>
              <p className="tp-card-desc">Three objectives, key results, and progress targets — all tracked.</p>
              <span className="tp-use">Use template →</span>
            </div>
          </a>
          <a href="https://app.two.so/new?template=competitor-analysis" className="tp-card research">
            <div className="tp-doc">
              <div className="tp-doc-bar"><i /><i /><i /></div>
              <div className="tp-doc-title">Competitor analysis</div>
              <div className="tp-ln tp-w90" />
              <div className="tp-ln tp-w60" />
              <div className="tp-ln tp-w75" />
            </div>
            <div className="tp-card-body">
              <p className="tp-cat-label">Research</p>
              <p className="tp-card-title">Competitor analysis</p>
              <p className="tp-card-desc">Compare competitors side by side — strengths, weaknesses, and pricing.</p>
              <span className="tp-use">Use template →</span>
            </div>
          </a>
        </div>

        <a href="/resources/templates" className="btn-dark htpl-cta">See all templates →</a>

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
