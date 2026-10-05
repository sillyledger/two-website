import type { Metadata } from "next";
import { SplitDraftDemo, IdeasBoardDemo } from "@/components/writers-demo";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "TWO for Writers and Bloggers: A Calm Editor, No AI | TWO",
};

const FEATURES = [
  { t: "Slash commands", d: "Type / for headings, quotes, callouts, tables, code and images." },
  { t: "Word count", d: "Always in view at the bottom of the doc while you write." },
  { t: "Smart punctuation", d: "Straight quotes turn into proper curly ones as you type." },
  { t: "Tabs", d: "Keep a series, or a book's chapters, open in tabs." },
  { t: "Version history", d: "Go back to an earlier draft. 3 versions on Free, 30 days on Pro." },
  { t: "Export", d: "Markdown for your blog or newsletter tool, PDF to share." },
];

const NOT_HERE = [
  "Publishing straight to your blog. Export Markdown instead.",
  "SEO scores and keyword tools",
  "Sending your newsletter",
];

const SPECS = [
  { label: "Free", value: "Up to 30 docs, no card, no time limit" },
  { label: "Pro", value: "$6 a month, or $5 a month billed yearly. Unlimited docs." },
  { label: "Editor", value: "Headings, lists, quotes, callouts, code, tables and images" },
  { label: "Organizing", value: "Folders, labels and tabs, plus Ideas for what's next" },
  { label: "Export", value: "Markdown and PDF" },
  { label: "Saving", value: "As you type, synced live across your devices" },
  { label: "Works on", value: "Any browser. Installs on Mac and iPad." },
];

export default function ForWritersPage() {
  return (
    <div className="features-frame">
      <section className="wrx-hero">
        <p className="micro">For writers and bloggers</p>
        <h1 className="display">
          Write here.
          <br />
          <span>Research there.</span>
        </h1>
        <p className="wrx-intro">
          A calm editor for posts, essays and newsletters, with your outline or research open beside the draft. Keep
          your ideas in one list, export to Markdown, and never see an AI suggestion.
        </p>
        <div className="wrx-ctas">
          <a className="wrx-btn solid" href="https://app.two.so/signup">Start for free</a>
          <a className="wrx-btn outline" href="/demo">Try the demo</a>
        </div>
        <div className="wrx-kv">
          <div><span className="k">Words</span><span className="v">Counted as you write</span></div>
          <div><span className="k">Export</span><span className="v">Markdown and PDF</span></div>
          <div><span className="k">AI</span><span className="v">None, on purpose</span></div>
        </div>
      </section>

      <SplitDraftDemo />

      <section className="wrx-section wrx-pipe">
        <div>
          <p className="micro">Your pipeline</p>
          <h2 className="display">
            From idea
            <br />
            to published.
          </h2>
          <p className="wrx-sub">
            Ideas keeps every post you might write, with a status and where it goes. Turn one into a doc when
            you&apos;re ready, mark it published when it&apos;s out. Try moving the cards.
          </p>
        </div>
        <IdeasBoardDemo />
      </section>

      <section className="wrx-section wrx-two">
        <div>
          <p className="micro">The editor</p>
          <h2 className="display">
            Quiet tools.
            <br />
            Real ones.
          </h2>
        </div>
        <div className="wrx-feats">
          {FEATURES.map((f) => (
            <div className="wrx-feat" key={f.t}>
              <b>{f.t}</b>
              <span>{f.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrx-section wrx-two">
        <div>
          <p className="micro">Your voice</p>
          <h2 className="display">
            No AI.
            <br />
            On purpose.
          </h2>
        </div>
        <div>
          <p className="wrx-lead">
            No autocomplete, no rewrite button, no summaries. Your drafts stay yours and are never used to train
            anything. It&apos;s just you and the page.
          </p>
          <p className="micro wrx-also">Also not here</p>
          {NOT_HERE.map((x) => (
            <div className="wrx-no" key={x}>
              <i aria-hidden="true">×</i>
              {x}
            </div>
          ))}
        </div>
      </section>

      <section className="wrx-section wrx-two">
        <div>
          <p className="micro">At a glance</p>
          <h2 className="display">
            For the draft.
            <br />
            Not a dashboard.
          </h2>
        </div>
        <div className="wrx-specs">
          {SPECS.map((s) => (
            <div className="wrx-spec" key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Start the draft."
        subtitle="Keep your voice."
        primary={{ label: "Start for free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
        note="Free for 30 docs. No card needed."
      />
    </div>
  );
}
