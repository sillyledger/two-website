import { HelpLayout } from "@/components/help-layout"

export default function UsingTemplates() {
  return (
    <HelpLayout activeArticle="using-templates">
      <div className="help-eyebrow">Getting started</div>
      <h1 className="help-title">Using templates</h1>
      <div className="help-meta">2 min read · Last updated May 2026</div>
      <div className="help-body">
        <p>Templates give you a head start on any doc. Instead of starting from a blank page, you can open a pre-structured document and fill in your content straight away.</p>

        <h2>Opening the template picker</h2>
        <p>From your dashboard, click the <strong>Templates</strong> button in the top right corner. The template picker will appear, showing all available templates.</p>

        <img
          src="/templates-window.png"
          alt="TWO template picker showing available templates"
          className="help-image"
        />

        <h2>Available templates</h2>
        <p>TWO currently includes six templates:</p>
        <ul>
          <li><strong>Blank</strong> — Start from scratch with an empty doc.</li>
          <li><strong>Meeting Notes</strong> — Capture agenda, decisions, and action items.</li>
          <li><strong>Blog Post</strong> — Structure your ideas into a compelling article.</li>
          <li><strong>Product Brief</strong> — Define the problem, solution, and scope.</li>
          <li><strong>Weekly Review</strong> — Reflect on the week and plan what's next.</li>
          <li><strong>OKR Tracker</strong> — Set objectives, track key results, measure progress.</li>
        </ul>

        <h2>Using a template</h2>
        <p>Click any template to open it instantly as a new doc. The structure is already in place — just replace the placeholder content with your own and start writing.</p>

        <div className="help-tip">
          <p><strong>Tip:</strong> Templates are just a starting point. You can delete sections you don&apos;t need or add new ones at any time.</p>
        </div>

        <p>You can also browse templates on the web at <a href="https://www.two.so/templates">two.so/templates</a> to preview them before opening.</p>

      </div>
      <div className="help-nav-footer">
        <a href="/resources/help/getting-started/your-first-doc" className="help-nav-link">← Your first doc</a>
        <a href="/resources/help/getting-started/using-two-as-a-web-app" className="help-nav-link">TWO as a web app →</a>
      </div>
    </HelpLayout>
  )
}
