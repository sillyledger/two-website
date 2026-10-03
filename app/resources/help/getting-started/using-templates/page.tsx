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

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-pad">
              <div className="hil-toolbar">
                <b className="hil-dt sm hil-tpl-title">Templates</b>
                <div className="hil-search">⌕ Search templates…</div>
              </div>
              <div className="hil-pills">
                <span className="hil-pill on">All</span>
                <span className="hil-pill">Business</span>
                <span className="hil-pill">Creative</span>
                <span className="hil-pill hide-sm">Strategy</span>
              </div>
              <div className="hil-tpls">
                <div className="hil-tpl" style={{ borderTopColor: "#c98a5e" }}>
                  Meeting notes
                  <div className="hil-ln" style={{ width: "90%" }} />
                  <div className="hil-ln" style={{ width: "60%" }} />
                </div>
                <div className="hil-tpl" style={{ borderTopColor: "#8f89e6" }}>
                  Blog post
                  <div className="hil-ln" style={{ width: "85%" }} />
                  <div className="hil-ln" style={{ width: "70%" }} />
                </div>
                <div className="hil-tpl" style={{ borderTopColor: "#6ec39a" }}>
                  Product brief
                  <div className="hil-ln" style={{ width: "80%" }} />
                  <div className="hil-ln" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Templates button</b>top right of your dashboard</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Pick one</b>it opens as a new doc</span></div>
          </div>
        </figure>

        <h2 className="display">Available templates</h2>
        <p>Some of our popular templates are:</p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win">
              <a href="https://app.two.so/new?template=meeting-notes" className="hil-tl">
                <i className="hil-dot" style={{ background: "#c98a5e" }} />
                <span className="n">Meeting notes</span>
                <span className="c">Business</span>
                <span className="d">Agenda, decisions, and action items, all in one structured doc.</span>
                <span className="u">Use →</span>
              </a>
              <a href="https://app.two.so/new?template=blog-post" className="hil-tl">
                <i className="hil-dot" style={{ background: "#8f89e6" }} />
                <span className="n">Blog post</span>
                <span className="c">Creative</span>
                <span className="d">Hook, three sections, CTA, and a pre-publish checklist.</span>
                <span className="u">Use →</span>
              </a>
              <a href="https://app.two.so/new?template=product-brief" className="hil-tl">
                <i className="hil-dot" style={{ background: "#6ec39a" }} />
                <span className="n">Product brief</span>
                <span className="c">Strategy</span>
                <span className="d">Problem, users, goals, scope, and risk, in one tight doc.</span>
                <span className="u">Use →</span>
              </a>
              <a href="https://app.two.so/new?template=weekly-review" className="hil-tl">
                <i className="hil-dot" style={{ background: "#5b9bd6" }} />
                <span className="n">Weekly review</span>
                <span className="c">Personal</span>
                <span className="d">Wins, blockers, priorities, and metrics. Every week, sorted.</span>
                <span className="u">Use →</span>
              </a>
              <a href="https://app.two.so/new?template=okr-tracker" className="hil-tl">
                <i className="hil-dot" style={{ background: "#6ec39a" }} />
                <span className="n">OKR tracker</span>
                <span className="c">Strategy</span>
                <span className="d">Three objectives, key results, and progress targets, all tracked.</span>
                <span className="u">Use →</span>
              </a>
              <a href="https://app.two.so/new?template=competitor-analysis" className="hil-tl">
                <i className="hil-dot" style={{ background: "#e0a44d" }} />
                <span className="n">Competitor analysis</span>
                <span className="c">Research</span>
                <span className="d">Compare competitors side by side: strengths, weaknesses, and pricing.</span>
                <span className="u">Use →</span>
              </a>
            </div>
          </div>
        </figure>

        <a href="/resources/templates" className="btn-dark htpl-cta">See all templates →</a>

        <p>Need a blank doc instead? Just click <b>+ New Doc</b> from your dashboard. No template required.</p>

        <h2 className="display">Using a template</h2>
        <p>
          Click any template to open it instantly as a new doc. The structure is already in place. Just replace
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
