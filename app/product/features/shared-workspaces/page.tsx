import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function SharedWorkspacesPage() {
  return (
    <>
      <Navigation />

      <div className="sv-hero">
        <div className="sv-hero-inner">
          <div className="sv-hero-breadcrumb">
            <a href="/product/features" className="sv-hero-bc-back">Features</a>
            <span className="sv-hero-bc-sep">/</span>
            <span className="sv-hero-bc-cur">Shared Workspaces</span>
          </div>
          <h1 className="sv-hero-title">Your team,<br />one workspace.</h1>
          <div className="sv-hero-cols">
            <p className="sv-hero-col">Invite teammates or guests in seconds. Everyone works from the same space — no emailing files, no version confusion.</p>
            <p className="sv-hero-col">See who&apos;s online, watch edits happen live, and keep your whole team on the same page. Literally.</p>
          </div>
        </div>

        <div className="ws-visual">

          <div className="ws-invite-card">
            <div className="ws-card-bar">
              <div className="ws-card-title">Invite to workspace</div>
            </div>
            <div className="ws-card-body">
              <div class="ws-invite-label">Add people</div>
              <div className="ws-invite-input">
                <div className="ws-invite-input-text">sarah@company.com</div>
                <div className="ws-invite-input-pill">Editor ▾</div>
              </div>
              <div className="ws-invite-input">
                <div className="ws-invite-input-text">mark@company.com</div>
                <div className="ws-invite-input-pill">Viewer ▾</div>
              </div>
              <div className="ws-invite-btn">Send invites</div>

              <div className="ws-members-label">Members · 4</div>

              <div className="ws-member-row">
                <div className="ws-avatar" style={{background:"#3C3489",color:"#CECBF6"}}>P</div>
                <div className="ws-member-info">
                  <div className="ws-member-name">Pieter</div>
                  <div className="ws-member-email">pieter@strevius.co</div>
                </div>
                <div className="ws-member-role">Owner</div>
              </div>
              <div className="ws-member-row">
                <div className="ws-avatar" style={{background:"#085041",color:"#9FE1CB"}}>S</div>
                <div className="ws-member-info">
                  <div className="ws-member-name">Sarah</div>
                  <div className="ws-member-email">sarah@company.com</div>
                </div>
                <div className="ws-member-role">Editor</div>
              </div>
              <div className="ws-member-row">
                <div className="ws-avatar" style={{background:"#633806",color:"#FAC775"}}>M</div>
                <div className="ws-member-info">
                  <div className="ws-member-name">Mark</div>
                  <div className="ws-member-email">mark@company.com</div>
                </div>
                <div className="ws-member-role">Viewer</div>
              </div>
              <div className="ws-member-row">
                <div className="ws-avatar" style={{background:"#3C1D55",color:"#D4AAFF"}}>J</div>
                <div className="ws-member-info">
                  <div className="ws-member-name">Jules</div>
                  <div className="ws-member-email">jules@company.com</div>
                </div>
                <div className="ws-member-role">Editor</div>
              </div>
            </div>
          </div>

          <div className="ws-doc-side">
            <div className="ws-doc-bar">
              <div className="ws-doc-title">Q3 Strategy — Draft</div>
              <div className="ws-presence">
                <div className="ws-presence-avatar" style={{background:"#3C3489",color:"#CECBF6"}}>P</div>
                <div className="ws-presence-avatar" style={{background:"#085041",color:"#9FE1CB"}}>S</div>
                <div className="ws-presence-avatar" style={{background:"#3C1D55",color:"#D4AAFF"}}>J</div>
              </div>
            </div>
            <div className="ws-doc-content">
              <div className="ws-doc-heading"></div>
              <div className="ws-line ws-line-hi" style={{width:"88%"}}></div>
              <div className="ws-line" style={{width:"72%"}}></div>
              <div className="ws-line ws-line-hi" style={{width:"65%"}}></div>
              <div className="ws-line" style={{width:"80%"}}></div>
              <div className="ws-cursor-block">
                <div className="ws-cursor-label" style={{background:"#3C3489",color:"#CECBF6"}}>Pieter</div>
                <div className="ws-line ws-line-hi" style={{width:"52%",flexShrink:0}}></div>
                <div className="ws-inline-cursor" style={{background:"#7F77DD"}}></div>
              </div>
              <div className="ws-line" style={{width:"77%"}}></div>
              <div className="ws-line ws-line-hi" style={{width:"44%"}}></div>
              <div className="ws-cursor-block">
                <div className="ws-cursor-label" style={{background:"#085041",color:"#9FE1CB"}}>Sarah</div>
                <div className="ws-line ws-line-hi" style={{width:"68%",flexShrink:0}}></div>
                <div className="ws-inline-cursor" style={{background:"#1D9E75"}}></div>
              </div>
              <div className="ws-line" style={{width:"59%"}}></div>
              <div className="ws-line ws-line-hi" style={{width:"83%"}}></div>
            </div>
          </div>

        </div>
      </div>

      <div className="sv-body">
        <div className="sv-intro">
          <div className="sv-intro-left">Stop sending files. Start working in the same place.</div>
          <div className="sv-intro-right">
            <p>Every shared workspace in TWO is a single source of truth. Invite your team with one click, set their role, and they&apos;re in — no account setup friction, no confusing permissions.</p>
            <p>Editors can write and change anything. Viewers can read without touching. You stay in control while your team stays in sync.</p>
          </div>
        </div>

        <div className="sv-body-divider"></div>

        <div className="sv-blocks">
          <div className="sv-block">
            <div className="sv-block-num">01</div>
            <div className="sv-block-title">Invite by email</div>
            <p className="sv-block-desc">Add anyone to your workspace in seconds. They get a link, click it, and they&apos;re in — no extra setup needed.</p>
          </div>
          <div className="sv-block">
            <div className="sv-block-num">02</div>
            <div className="sv-block-title">Roles that make sense</div>
            <p className="sv-block-desc">Owner, Editor, or Viewer. Set who can write and who can only read — workspace-wide in one click.</p>
          </div>
          <div className="sv-block">
            <div className="sv-block-num">03</div>
            <div className="sv-block-title">Live presence</div>
            <p className="sv-block-desc">See who&apos;s in the doc right now. Coloured cursors show exactly where each person is writing.</p>
          </div>
        </div>
      </div>

      <div className="sv-dark">
        <div className="sv-dark-inner">
          <div className="sv-dark-label">Built for small teams</div>
          <div className="sv-dark-title">How teams use shared workspaces.</div>
          <div className="sv-uses">
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Team knowledge base</div>
                <p className="sv-use-desc">One place for everything your team needs to know — processes, decisions, references. Always up to date.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Client deliverables</div>
                <p className="sv-use-desc">Invite clients as Viewers to share briefs and reports. Professional, polished, no extra tools needed.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Co-writing in real time</div>
                <p className="sv-use-desc">Two people, one doc, editing simultaneously. No conflicts, no overwriting — just fluid collaboration.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Guest access</div>
                <p className="sv-use-desc">Bring in a freelancer or external collaborator without giving them access to your whole workspace.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand />

      <div className="sv-feature-nav">
        <a href="/product/features/live-sync" className="sv-fn-back">← Live Sync</a>
        <a href="/product/features/editor" className="sv-fn-next">Next: Editor →</a>
      </div>

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
