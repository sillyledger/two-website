import { HelpLayout } from "@/components/help-layout"

export default function YourFirstDoc() {
  return (
    <HelpLayout activeArticle="your-first-doc">
      <div className="help-eyebrow">Getting started</div>
      <h1 className="help-title">Your first doc</h1>
      <div className="help-meta">2 min read · Last updated May 2026</div>

      <div className="help-body">

        <p>Creating a doc in TWO takes one click. This article walks you through everything — from creating your first doc to understanding how it gets saved.</p>

        <h2>Creating a new doc</h2>
        <p>From your dashboard, click the <strong>+ New Doc</strong> button in the top right corner. A blank doc will open instantly, ready for you to start writing.</p>
        <p>You can also create a doc from the sidebar by clicking the compose icon next to your workspace name.</p>

        <div className="help-tip">
          <p><strong>Tip:</strong> TWO opens straight to your most recent doc every time you launch the app — so you can pick up exactly where you left off.</p>
        </div>

        <h2>Giving your doc a title</h2>
        <p>Click at the top of the page and type your title. There&apos;s no separate title field — the first line of your doc becomes the title automatically. It will appear in your dashboard and sidebar once you&apos;ve typed it.</p>

        <h2>Writing and formatting</h2>
        <p>Start typing anywhere below the title. TWO supports rich text formatting — you can use the toolbar at the top of the editor to add:</p>
        <ul>
          <li>Headers (H1, H2, H3)</li>
          <li>Bold and italic text</li>
          <li>Bullet and numbered lists</li>
          <li>Code blocks and inline code</li>
          <li>Blockquotes</li>
        </ul>
        <p>For a full guide to formatting, see the <a href="/resources/help/docs-editor/formatting" className="backstory-cta">Formatting article →</a></p>

        <h2>Autosave</h2>
        <p>You never need to manually save in TWO. Every change you make is saved automatically as you type. You&apos;ll see a small <strong>Saved</strong> indicator in the top bar confirming your work is safe.</p>

        <div className="help-tip">
          <p><strong>Note:</strong> Autosave works as long as you have an internet connection. Offline support is coming soon.</p>
        </div>

        <h2>Finding your doc later</h2>
        <p>All your docs appear on your dashboard under <strong>Recent Docs</strong>. You can also use the search bar at the top of the dashboard to find any doc by title.</p>

      </div>

      <div className="help-nav-footer">
        <span></span>
        <a href="/resources/help/getting-started/using-two-on-ipad" className="help-nav-link">Using TWO on iPad →</a>
      </div>

    </HelpLayout>
  )
}
