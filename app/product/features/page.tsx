export default function ProductFeaturesPage() {
  return (
    <div className="features-frame">
      <section className="pf-hero">
        <p className="micro">Product Features</p>
        <h1 className="display">Everything you need.<br />Nothing you don&apos;t.</h1>
        <p>TWO is built around how you actually think and write — focused, fast, and always in sync.</p>
      </section>

      <div className="pf-bento">
        <a href="/product/features/split-view" className="pf-card pf-hero-card linked">
          <div className="pf-badge">Flagship</div>
          <div className="pf-eyebrow">Split View</div>
          <div className="pf-title">Two docs. One screen.</div>
          <div className="pf-desc">Open any two documents side by side. Drag to resize. Reference and write at the same time.</div>
          <div className="pf-mini-explode">
            <div className="pf-mini-core">
              <div className="l" style={{ width: "50%" }} />
              <div className="l" style={{ width: "80%" }} />
              <div className="l" style={{ width: "65%" }} />
            </div>
            <div className="pf-mini-line" /><div className="pf-mini-tick" />
            <div className="pf-mini-piece">
              <div className="l" style={{ width: "70%", background: "var(--clay)", height: 3 }} />
              <div className="l" style={{ width: "90%" }} />
              <div className="l" style={{ width: "60%" }} />
            </div>
          </div>
          <div className="pf-cta">Explore Split View →</div>
        </a>

        <a href="/product/features/live-sync" className="pf-card pf-tall-card linked">
          <div className="pf-eyebrow">Live Sync</div>
          <div className="pf-title">Always in sync.</div>
          <div className="pf-desc">Changes appear instantly on every device — Mac, iPad, browser. No manual saves, no conflicts.</div>
          <div className="pf-mini-explode" style={{ height: 130 }}>
            <div className="pf-mini-core" style={{ width: "45%", top: 0 }}>
              <div className="l" style={{ width: "60%" }} />
            </div>
            <div className="pf-mini-line" style={{ left: "48%", top: 16, width: "14%" }} /><div className="pf-mini-tick" style={{ left: "calc(48% - 3px)", top: 13 }} />
            <div className="pf-mini-piece" style={{ width: "40%", top: 0, right: 0 }}>
              <div className="l" style={{ width: "60%" }} />
            </div>
            <div className="pf-mini-core" style={{ width: "70%", top: 70 }}>
              <div className="l" style={{ width: "40%", background: "var(--green)", height: 3 }} />
              <div className="l" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="pf-cta">Explore Live Sync →</div>
        </a>

        <div className="pf-card pf-third-card">
          <div className="pf-eyebrow">Tabs</div>
          <div className="pf-title">Multiple docs, one window.</div>
          <div className="pf-desc">Keep your research, notes, and drafts open at once. Switch without losing your place.</div>
          <div className="pf-mini-explode">
            <div className="pf-mini-core" style={{ width: "65%" }}>
              <div className="l" style={{ width: "60%" }} />
              <div className="l" style={{ width: "80%" }} />
            </div>
            <div className="pf-mini-line" /><div className="pf-mini-tick" />
            <div className="pf-mini-piece">
              <div className="l" style={{ width: "70%", background: "var(--indigo)", height: 3 }} />
            </div>
          </div>
          <div className="pf-cta">Part of every doc</div>
        </div>

        <a href="/product/features/shared-workspaces" className="pf-card pf-wide-card linked">
          <div className="pf-eyebrow">Shared Workspaces</div>
          <div className="pf-title">Your team&apos;s second brain.</div>
          <div className="pf-desc">Invite your team, share docs, and edit together in real time. Everything in one place.</div>
          <div className="pf-mini-explode">
            <div className="pf-mini-core" style={{ width: "70%" }}>
              <div className="l" style={{ width: "40%", background: "var(--indigo)", height: 3 }} />
              <div className="l" style={{ width: "75%" }} />
              <div className="l" style={{ width: "55%" }} />
            </div>
            <div className="pf-mini-line" style={{ left: "70%", width: "14%" }} /><div className="pf-mini-tick" style={{ left: "calc(70% - 3px)" }} />
            <div className="pf-mini-piece" style={{ width: "24%" }}>
              <div className="l" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="pf-cta">Explore Shared Workspaces →</div>
        </a>

        <div className="pf-card pf-third-card">
          <div className="pf-eyebrow">Templates</div>
          <div className="pf-title">Start fast. Every time.</div>
          <div className="pf-desc">Meeting notes, briefs, weekly reviews — one click away and ready to fill in.</div>
          <div className="pf-mini-explode">
            <div className="pf-mini-core" style={{ width: "55%" }}>
              <div className="l" style={{ width: "60%" }} />
            </div>
            <div className="pf-mini-line" /><div className="pf-mini-tick" />
            <div className="pf-mini-piece" style={{ width: "38%" }}>
              <div className="l" style={{ width: "70%", background: "var(--clay)", height: 3 }} />
              <div className="l" style={{ width: "50%" }} />
            </div>
          </div>
          <div className="pf-cta">Part of every doc</div>
        </div>

        <div className="pf-card pf-third-card">
          <div className="pf-eyebrow">Linked Docs &amp; Notes</div>
          <div className="pf-title">Your library, connected.</div>
          <div className="pf-desc">Reference one doc from inside another. Ideas stay connected, not scattered.</div>
          <div className="pf-mini-explode">
            <div className="pf-mini-core" style={{ width: "55%" }}>
              <div className="l" style={{ width: "70%" }} />
              <div className="l" style={{ width: "40%", background: "var(--indigo)", height: 3 }} />
            </div>
            <div className="pf-mini-line" /><div className="pf-mini-tick" />
            <div className="pf-mini-piece" style={{ width: "38%" }}>
              <div className="l" style={{ width: "60%" }} />
            </div>
          </div>
          <div className="pf-cta">Part of every doc</div>
        </div>

        <div className="pf-card pf-third-card">
          <div className="pf-eyebrow">Activity Logbook</div>
          <div className="pf-title">See what changed.</div>
          <div className="pf-desc">A full timeline of edits, creates, and shares — no surprises.</div>
          <div className="pf-mini-explode">
            <div className="pf-mini-core" style={{ width: "55%" }}>
              <div className="l" style={{ width: "50%" }} />
              <div className="l" style={{ width: "70%" }} />
            </div>
            <div className="pf-mini-line" /><div className="pf-mini-tick" />
            <div className="pf-mini-piece" style={{ width: "38%" }}>
              <div className="l" style={{ width: "60%", background: "var(--green)", height: 3 }} />
            </div>
          </div>
          <div className="pf-cta">Part of every doc</div>
        </div>
      </div>
    </div>
  );
}
