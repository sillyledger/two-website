import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";

export default function FormattingArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/docs-editor/formatting" />

      <article className="harticle">
        <p className="harticle-eyebrow">Docs &amp; Editor</p>
        <h1 className="display">Formatting</h1>
        <p className="harticle-meta">4 min read · Last updated May 2026</p>

        <p>
          TWO&apos;s editor supports rich text formatting that keeps your docs clean and readable. Everything is
          accessible from the toolbar at the top of the editor — no markdown required, though shortcuts are
          supported too.
        </p>

        <h2 className="display">Headings</h2>
        <p>Use headings to structure longer documents. TWO supports three levels:</p>
        <ul>
          <li><b>H1</b> — Large section heading. Best used once per doc as the main title of a section.</li>
          <li><b>H2</b> — Medium heading. Great for breaking a doc into clear parts.</li>
          <li><b>H3</b> — Small heading. Useful for sub-sections within a larger section.</li>
        </ul>
        <p>Click the H1, H2, or H3 button in the toolbar, or select your text first then apply the style.</p>

        <h2 className="display">Bold and italic</h2>
        <p>Highlight any text and click <b>B</b> for bold or <b>I</b> for italic in the toolbar. Keyboard shortcuts:</p>
        <ul>
          <li><b>Bold:</b> ⌘B on Mac</li>
          <li><b>Italic:</b> ⌘I on Mac</li>
        </ul>

        <h2 className="display">Strikethrough</h2>
        <p>Cross out text without deleting it — useful for showing something is done or no longer relevant. Select your text and click the strikethrough button in the toolbar.</p>

        <h2 className="display">Lists</h2>
        <p>TWO supports three types of lists:</p>
        <ul>
          <li><b>Bullet list</b> — for unordered items. Click the bullet list icon in the toolbar.</li>
          <li><b>Numbered list</b> — for ordered steps or rankings. Click the numbered list icon.</li>
          <li><b>Task list</b> — for to-dos with checkboxes. Click the task list icon to insert a checklist. Click any checkbox to mark it done.</li>
        </ul>
        <p>Press <b>Enter</b> to add a new list item, <b>Tab</b> to indent, and <b>Enter</b> twice to exit the list.</p>

        <h2 className="display">Tables</h2>
        <p>Insert a table from the toolbar to organize information into rows and columns. Once inserted:</p>
        <ul>
          <li>Click any cell to start typing</li>
          <li>Press <b>Tab</b> to move to the next cell</li>
          <li>Right-click a cell to add or delete rows and columns</li>
        </ul>

        <h2 className="display">Callouts</h2>
        <p>Use callouts to highlight important information — tips, warnings, or key takeaways. Click the callout icon in the toolbar to insert a callout block, then type your message inside it.</p>
        <div className="harticle-tip">
          <p><b>Tip:</b> Callouts stand out visually from the rest of your doc, making them ideal for anything you want readers to notice at a glance.</p>
        </div>

        <h2 className="display">Images</h2>
        <p>Upload images directly into your doc from the toolbar. Click the image icon and select a file from your device. Images are embedded inline and can be placed anywhere in your document.</p>

        <h2 className="display">Code</h2>
        <p>TWO supports two types of code formatting:</p>
        <ul>
          <li><b>Inline code</b> — for short snippets within a sentence. Highlight text and click the inline code icon.</li>
          <li><b>Code block</b> — for multi-line code. Click the code block icon in the toolbar to insert a full block.</li>
        </ul>

        <h2 className="display">Blockquote</h2>
        <p>Use blockquotes to highlight a key idea, a client quote, or an important note. Click the blockquote icon in the toolbar to wrap your selected text in a quote style.</p>

        <div className="harticle-pn">
          <a href="/resources/help/getting-started/using-two-as-a-web-app">← Using TWO as a web app</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
