import { HelpLayout } from "@/components/help-layout"

export default function Formatting() {
  return (
    <HelpLayout activeArticle="formatting">
      <div className="help-eyebrow">Docs &amp; editor</div>
      <h1 className="help-title">Formatting</h1>
      <div className="help-meta">3 min read · Last updated May 2026</div>

      <div className="help-body">

        <p>TWO&apos;s editor supports rich text formatting that keeps your docs clean and readable. Everything is accessible from the toolbar at the top of the editor — no markdown required, though shortcuts are supported too.</p>

        <h2>Headings</h2>
        <p>Use headings to structure longer documents. TWO supports three levels:</p>
        <ul>
          <li><strong>H1</strong> — Large section heading. Best used once per doc as the main title of a section.</li>
          <li><strong>H2</strong> — Medium heading. Great for breaking a doc into clear parts.</li>
          <li><strong>H3</strong> — Small heading. Useful for sub-sections within a larger section.</li>
        </ul>
        <p>Click the H1, H2, or H3 button in the toolbar, or type your heading text and select it first then apply the style.</p>

        <h2>Bold and italic</h2>
        <p>Highlight any text and click <strong>B</strong> for bold or <strong>I</strong> for italic in the toolbar. You can also use keyboard shortcuts:</p>
        <ul>
          <li><strong>Bold:</strong> ⌘B on Mac</li>
          <li><strong>Italic:</strong> ⌘I on Mac</li>
        </ul>

        <div className="help-tip">
          <p><strong>Tip:</strong> On iPad, select text and the formatting toolbar appears automatically above the keyboard — no need to scroll up to the editor toolbar.</p>
        </div>

        <h2>Lists</h2>
        <p>TWO supports two types of lists:</p>
        <ul>
          <li><strong>Bullet lists</strong> — for unordered items. Click the bullet list icon in the toolbar.</li>
          <li><strong>Numbered lists</strong> — for ordered steps or rankings. Click the numbered list icon.</li>
        </ul>
        <p>Press <strong>Enter</strong> to add a new list item and <strong>Tab</strong> to indent. Press <strong>Enter</strong> twice to exit the list.</p>

        <h2>Code</h2>
        <p>TWO supports two types of code formatting:</p>
        <ul>
          <li><strong>Inline code</strong> — for short snippets within a sentence. Highlight text and click the code icon.</li>
          <li><strong>Code block</strong> — for multi-line code. Click the code block icon in the toolbar to insert a full block.</li>
        </ul>

        <h2>Blockquote</h2>
        <p>Use blockquotes to highlight a key idea, a client quote, or an important note. Click the blockquote icon in the toolbar to wrap your selected text in a quote style.</p>

        <h2>Strikethrough</h2>
        <p>Cross out text without deleting it — useful for showing something is done or no longer relevant. Select your text and click the strikethrough button in the toolbar.</p>

        <div className="help-tip">
          <p><strong>Note:</strong> More formatting options — including tables, dividers, and image embeds — are coming in a future update. Check the <a href="/roadmap" className="backstory-cta">roadmap →</a> for what&apos;s next.</p>
        </div>

      </div>

      <div className="help-nav-footer">
        <a href="/resources/help/getting-started/syncing-across-devices" className="help-nav-link">← Syncing across devices</a>
        <a href="/resources/help/docs-editor/linking-docs" className="help-nav-link">Linking docs →</a>
      </div>

    </HelpLayout>
  )
}
