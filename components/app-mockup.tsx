export function AppMockup() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{
        width: "100%",
        maxWidth: "960px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#161618",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      }}>

        {/* Browser bar */}
        <div style={{
          background: "#1c1c1e",
          padding: "11px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div style={{
            flex: 1,
            textAlign: "center",
            background: "#161618",
            borderRadius: "6px",
            padding: "4px 12px",
            fontSize: "11px",
            color: "#555",
            fontFamily: "ui-monospace, monospace",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            app.two.so
          </div>
        </div>

        {/* App layout */}
        <div style={{ display: "flex", height: "580px" }}>

          {/* Sidebar */}
          <div style={{
            width: "46px",
            background: "#1c1c1e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0",
            gap: "2px",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}>
            {/* Avatar */}
            <div style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#4f8ef7,#f7a24f)",
              marginBottom: "6px",
              flexShrink: 0,
            }} />

            {/* Collapse toggle */}
            <SidebarIcon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" strokeWidth="2"/>
              </svg>
            </SidebarIcon>

            {/* Home — active */}
            <SidebarIcon active>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1H5a1 1 0 01-1-1z"/>
              </svg>
            </SidebarIcon>

            {/* Tasks */}
            <SidebarIcon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
              </svg>
            </SidebarIcon>

            {/* Activity */}
            <SidebarIcon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </SidebarIcon>

            {/* Workspaces / layers */}
            <SidebarIcon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </SidebarIcon>

            {/* Bottom icons */}
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
              <SidebarIcon>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </SidebarIcon>
              <SidebarIcon>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </SidebarIcon>
            </div>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, background: "#161618", display: "flex", flexDirection: "column", overflow: "hidden" }}>

            {/* Topbar */}
            <div style={{ padding: "14px 22px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#e8e8e8", letterSpacing: "-0.3px" }}>
                Recent Docs
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: "#242426", color: "#c4c4c4",
                  borderRadius: "9px", padding: "6px 12px",
                  fontSize: "11px", fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                  Templates
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: "#e8e8e8", color: "#161618",
                  borderRadius: "9px", padding: "6px 12px",
                  fontSize: "11px", fontWeight: 600,
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#161618" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  New Doc
                </div>
              </div>
            </div>

            {/* Pills */}
            <div style={{ display: "flex", gap: "6px", padding: "0 22px 12px", flexShrink: 0 }}>
              {["Recent", "Favorites", "Deleted"].map((p) => (
                <div key={p} style={{
                  padding: "4px 13px",
                  borderRadius: "99px",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: p === "Recent" ? "#161618" : "#a0a0a0",
                  background: p === "Recent" ? "#e8e8e8" : "transparent",
                  border: p === "Recent" ? "1px solid #e8e8e8" : "1px solid rgba(255,255,255,0.08)",
                }}>
                  {p}
                </div>
              ))}
            </div>

            {/* Doc grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              padding: "0 22px 22px",
              overflow: "hidden",
            }}>
              {DOCS.map((doc) => (
                <div key={doc.title} style={{
                  background: "#242426",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}>
                  <div style={{ height: "3px", borderRadius: "2px", background: doc.color, marginBottom: "4px" }} />
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#e8e8e8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {doc.title}
                  </div>
                  <div style={{
                    fontSize: "10px", color: "#a0a0a0", lineHeight: 1.55,
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1,
                  }}>
                    {doc.preview}
                  </div>
                  <div style={{
                    fontSize: "10px", color: "rgba(255,255,255,0.2)",
                    marginTop: "8px", paddingTop: "8px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    {doc.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarIcon({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div style={{
      width: 30, height: 30,
      borderRadius: "7px",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: active ? "#e8e8e8" : "rgba(255,255,255,0.3)",
      background: active ? "#2e2e30" : "transparent",
    }}>
      {children}
    </div>
  )
}

const DOCS = [
  { title: "Q3 Investor Update",    color: "#e8c06e", preview: "Quarterly update covering revenue, growth metrics and product milestones for the board.", date: "May 24" },
  { title: "2026 GTM Strategy",     color: "#4a8fd4", preview: "Go-to-market plan for the new year. Channels, ICP, and launch sequencing.", date: "May 24" },
  { title: "Series A Deck — Draft 3", color: "#4aad6e", preview: "Latest pitch deck revision with updated traction slides and market sizing.", date: "May 23" },
  { title: "Competitive Analysis",  color: "#c96b8c", preview: "Deep dive into Notion, Apple Notes, and Bear. Where TWO wins.", date: "May 23" },
  { title: "Product Roadmap 2026",  color: "#7a6fd4", preview: "Feature priorities, team assignments, and shipping milestones for H1.", date: "May 22" },
  { title: "Brand Guidelines",      color: "#d4943a", preview: "Typography, color system, tone of voice, and logo usage guidelines.", date: "May 22" },
  { title: "Hiring Plan Q2",        color: "#4aadad", preview: "Open roles, interview process, and headcount targets for the quarter.", date: "May 21" },
  { title: "Onboarding Docs",       color: "#ad4a4a", preview: "New hire checklist, tools setup, and first week expectations.", date: "May 21" },
  { title: "Meeting Notes — May",   color: "#8aad4a", preview: "Weekly sync summaries, decisions made, and action items this month.", date: "May 20" },
]
