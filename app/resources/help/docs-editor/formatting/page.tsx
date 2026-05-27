import { HelpLayout } from "@/components/help-layout"

export default function Formatting() {
  return (
    <HelpLayout activeArticle="formatting">
      <div className="help-eyebrow">Docs &amp; editor</div>
      <h1 className="help-title">Formatting</h1>
      <div className="help-meta">4 min read · Last updated May 2026</div>
      <div className="help-body">
        <p>TWO&apos;s editor supports rich text formatting that keeps your docs clean and readable. Everything is accessible from the toolbar at the top of the editor — no markdown required, though shortcuts are supported too.</p>

        <h2>Headings</h2>
        <p>Use headings to structure longer documents. TWO supports three levels:</p>
        <ul>
          <li><strong>H1</strong> — Large section heading. Best used once per doc as the main title of a section.</li>
          <li><strong>H2</strong> — Medium heading. Great for breaking a doc into clear parts.</li>
          <li><strong>H3</strong> — Small heading. Useful for sub-sections within a larger section.</li>
        </ul>
        <p>Click the H1, H2, or H3 button in the toolbar, or select your text first then apply the style.</p>

        <h2>Bold and italic</h2>
        <p>Highlight any text and click <strong>B</strong> for bold or <strong>I</strong> for italic in the toolbar. Keyboard shortcuts:</p>
        <ul>
          <li><strong>Bold:</strong> ⌘B on Mac</li>
          <li><strong>Italic:</strong> ⌘I on Mac</li>
        </ul>

        <h2>Strikethrough</h2>
        <p>Cross out text without deleting it — useful for showing something is done or no longer relevant. Select your text and click the strikethrough button in the toolbar.</p>

        <h2>Lists</h2>
        <p>TWO supports three types of lists:</p>
        <ul>
          <li><strong>Bullet list</strong> — for unordered items. Click the bullet list icon in the toolbar.</li>
          <li><strong>Numbered list</strong> — for ordered steps or rankings. Click the numbered list icon.</li>
          <li><strong>Task list</strong> — for to-dos with checkboxes. Click the task list icon to insert a checklist. Click any checkbox to mark it done.</li>
        </ul>
        <p>Press <strong>Enter</strong> to add a new list item, <strong>Tab</strong> to indent, and <strong>Enter</strong> twice to exit the list.</p>

        <h2>Tables</h2>
        <p>Insert a table from the toolbar to organise information into rows and columns. Once inserted:</p>
        <ul>
          <li>Click any cell to start typing</li>
          <li>Press <strong>Tab</strong> to move to the next cell</li>
          <li>Right-click a cell to add or delete rows and columns</li>
        </ul>

        <h2>Callouts</h2>
        <p>Use callouts to highlight important information — tips, warnings, or key takeaways. Click the callout icon in the toolbar to insert a callout block, then type your message inside it.</p>
        <div className="help-tip">
          <p><strong>Tip:</strong> Callouts stand out visually from the rest of your doc, making them ideal for anything you want readers to notice at a glance.</p>
        </div>

        <h2>Images</h2>
        <p>Upload images directly into your doc from the toolbar. Click the image icon and select a file from your device. Images are embedded inline and can be placed anywhere in your document.</p>

        <h2>Code</h2>
        <p>TWO supports two types of code formatting:</p>
        <ul>
          <li><strong>Inline code</strong> — for short snippets within a sentence. Highlight text and click the inline code icon.</li>
          <li><strong>Code block</strong> — for multi-line code. Click the code block icon in the toolbar to insert a full block.</li>
        </ul>

        <h2>Blockquote</h2>
        <p>Use blockquotes to highlight a key idea, a client quote, or an important note. Click the blockquote icon in the toolbar to wrap your selected text in a quote style.</p>

      </div>
      <div className="help-nav-footer">
        <a href="/resources/help/getting-started/using-two-as-a-web-app" className="help-nav-link">← TWO as a web app</a>
        <a href="/resources/help/docs-editor/linking-docs" className="help-nav-link">Linking docs →</a>
      </div>
    </HelpLayout>
  )
}
