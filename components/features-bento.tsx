export function FeaturesBento() {
  return (
    <section className="features-section" id="features">
      <div className="features-inner">
        <div className="section-eyebrow">Why TWO</div>
        <h2>Built for how writers, founders, and small teams actually work in docs.</h2>

        <div className="bento-grid">

          {/* ── SPLIT VIEW — hero card, full width ── */}
          <div className="bento-card bento-full">
            <div className="bento-text">
              <div className="bento-label">Split view</div>
              <div className="bento-title">Two docs. One screen.</div>
              <div className="bento-desc">Reference one doc while writing in another. Drag the divider to reshape your workspace however you need it.</div>
            </div>
            <div className="bento-visual bento-split-preview">
              {/* Topbar */}
              <div className="sp-topbar">
                <div className="sp-topbar-left">
                  <div className="sp-folder-icon">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1.5 3.5h5l1.5 2H14.5v7.5h-13V3.5z"/>
                    </svg>
                  </div>
                  <span className="sp-topbar-title">Product Brief — Q3</span>
                </div>
                <div className="sp-topbar-right">
                  <div className="sp-badge">⊞ Split active</div>
                  <div className="sp-dots">···</div>
                </div>
              </div>
              {/* Two panes */}
              <div className="sp-panes">
                <div className="sp-pane">
                  <div className="sp-pane-title">Product Brief — Q3</div>
                  <div className="sp-lines">
                    <div className="sp-line sp-line--dark" style={{ width: '82%' }} />
                    <div className="sp-line" style={{ width: '67%' }} />
                    <div className="sp-line sp-line--dark" style={{ width: '90%' }} />
                    <div className="sp-line" style={{ width: '55%' }} />
                    <div className="sp-line sp-line--dark" style={{ width: '74%' }} />
                    <div className="sp-line" style={{ width: '61%' }} />
                  </div>
                </div>
                <div className="sp-divider">
                  <div className="sp-divider-handle" />
                </div>
                <div className="sp-pane">
                  <div className="sp-pane-title">Weekly Review — June</div>
                  <div className="sp-lines">
                    <div className="sp-line sp-line--dark" style={{ width: '70%' }} />
                    <div className="sp-line" style={{ width: '85%' }} />
                    <div className="sp-line sp-line--dark" style={{ width: '60%' }} />
                    <div className="sp-line" style={{ width: '78%' }} />
                    <div className="sp-line sp-line--dark" style={{ width: '50%' }} />
                    <div className="sp-line" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TABS — left of bottom row ── */}
          <div className="bento-card bento-half">
            <div className="bento-text">
              <div className="bento-label">Tabs</div>
              <div className="bento-title">Multiple docs open at once.</div>
              <div className="bento-desc">Switch context without losing your place.</div>
            </div>
            <div className="bento-visual bento-tabs-preview">
              <div className="tp-tabs">
                <div className="tp-tab tp-tab--active">Weekly Review</div>
                <div className="tp-tab">OKR Tracker</div>
                <div className="tp-tab">Product Brief</div>
              </div>
              <div className="tp-body">
                <div className="tp-heading" />
                <div className="tp-line tp-line--wide" />
                <div className="tp-line" style={{ width: '72%' }} />
                <div className="tp-line tp-line--wide" />
                <div className="tp-line" style={{ width: '55%' }} />
              </div>
            </div>
          </div>

          {/* ── TEMPLATES — right of bottom row ── */}
          <div className="bento-card bento-half">
            <div className="bento-text">
              <div className="bento-label">Templates</div>
              <div className="bento-title">Start fast. Every time.</div>
              <div className="bento-desc">Meeting notes, briefs, OKRs — ready in one click.</div>
            </div>
            <div className="bento-visual bento-templates-preview">
              <div className="tmpl-grid">
                {[
                  { icon: '📅', name: 'Meeting Notes' },
                  { icon: '🎯', name: 'OKR Tracker' },
                  { icon: '📋', name: 'Product Brief' },
                  { icon: '✍️', name: 'Blog Post' },
                ].map((t) => (
                  <div key={t.name} className="tmpl-card">
                    <div className="tmpl-icon">{t.icon}</div>
                    <div className="tmpl-name">{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SYNC + EDITOR — stacked in right column ── */}
          <div className="bento-card bento-side">
            <div className="bento-text">
              <div className="bento-label">Live sync</div>
              <div className="bento-title">Every device, always current.</div>
              <div className="bento-desc">Changes push instantly across Mac, web, and iPad.</div>
            </div>
            <div className="bento-visual bento-sync-preview">
              {[
                { label: 'Mac app', fill: 92 },
                { label: 'Web', fill: 92 },
                { label: 'iPad', fill: 92 },
              ].map((d) => (
                <div key={d.label} className="sync-row">
                  <span className="sync-label">{d.label}</span>
                  <div className="sync-bar">
                    <div className="sync-bar-fill" style={{ width: `${d.fill}%` }} />
                  </div>
                  <div className="sync-dot" />
                </div>
              ))}
              <div className="sync-status">
                <div className="sync-dot" />
                <span>All devices synced</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
