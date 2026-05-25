import { Navigation } from "@/components/navigation"

// Mockup-only dark colors — only used INSIDE the device frames
const M = {
  bg: "#0c0c0b",
  fg: "#f0ede6",
  muted: "#1c1c1a",
  mutedFg: "#6b6b63",
  border: "#222220",
  accent: "#e8d9a0",
  accentDim: "#c4b87a",
  surface: "#141412",
  surface2: "#1a1a17",
}

// Step number bubble — matches site's accent on light bg
const stepBubble: React.CSSProperties = {
  width: "28px", height: "28px", borderRadius: "50%",
  background: "rgba(196,184,122,0.15)",
  border: "1px solid rgba(196,184,122,0.35)",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: "12px", fontWeight: 500, color: "#8a7a3a",
  flexShrink: 0, marginTop: "2px",
}

export default function InstallPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="hero" style={{ paddingBottom: "60px" }}>
        <div className="eyebrow">Get the app</div>
        <h1>Install TWO on<br /><em>your device</em></h1>
        <p className="hero-sub">
          TWO works as a web app on iPhone, iPad, and Mac.<br />
          No App Store needed — add it to your home screen in seconds.
        </p>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px 120px" }}>

        {/* ── iPhone ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>iPhone</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1a1a17", marginBottom: "40px" }}>
              Add to your<br />Home Screen.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { n: "1", title: "Open Safari", desc: "Go to app.two.so in Safari. This only works in Safari — Chrome and Firefox can't install web apps on iPhone." },
                { n: "2", title: "Tap the Share button", desc: "Tap the Share icon at the bottom of the screen — the box with an arrow pointing up." },
                { n: "3", title: 'Tap "Add to Home Screen"', desc: "Scroll down in the share sheet, tap Add to Home Screen, confirm the name, and tap Add." },
                { n: "4", title: "Done — open TWO anytime", desc: "TWO lives on your home screen like any native app — full screen, no browser chrome." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={stepBubble}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a17", marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "14px", fontWeight: 300, color: "#6b6b63", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* iPhone mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "260px", background: "#1a1a18", border: "1px solid #2e2e2b", borderRadius: "44px", padding: "10px", boxShadow: "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)" }}>
              <div style={{ background: M.bg, borderRadius: "36px", overflow: "hidden" }}>
                <div style={{ height: "44px", background: M.surface2, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: "11px", color: M.mutedFg }}>
                  <span style={{ color: M.fg, fontWeight: 500 }}>9:41</span>
                  <div style={{ width: "70px", height: "18px", background: M.bg, borderRadius: "20px" }} />
                  <span>●●●</span>
                </div>
                <div style={{ background: M.surface2, padding: "8px 12px", borderBottom: `1px solid ${M.border}` }}>
                  <div style={{ background: M.surface, borderRadius: "8px", padding: "6px 12px", fontSize: "12px", color: M.mutedFg, textAlign: "center" }}>app.two.so</div>
                </div>
                <div style={{ height: "160px", background: M.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <img src="/apple-touch-icon.png" alt="TWO" style={{ width: "56px", height: "56px", borderRadius: "14px", margin: "0 auto 8px", display: "block" }} />
                    <div style={{ fontSize: "13px", fontWeight: 500, color: M.fg }}>TWO</div>
                    <div style={{ fontSize: "11px", color: M.mutedFg }}>Write better.</div>
                  </div>
                </div>
                <div style={{ background: "rgba(22,22,20,0.97)", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}>
                  <div style={{ width: "36px", height: "4px", background: "rgba(255,255,255,0.15)", borderRadius: "2px", margin: "10px auto 12px" }} />
                  <div style={{ display: "flex", gap: "14px", padding: "0 16px 12px", justifyContent: "center" }}>
                    {[{ icon: "📋", label: "Copy" }, { icon: "✉️", label: "Mail" }, { icon: "💬", label: "Message" }, { icon: "📝", label: "Notes" }].map((a, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                        <div style={{ width: "44px", height: "44px", background: M.surface2, borderRadius: "10px", border: `1px solid ${M.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{a.icon}</div>
                        <div style={{ fontSize: "9px", color: M.mutedFg }}>{a.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ height: "1px", background: M.border, margin: "0 16px 4px" }} />
                  {["Add to Reading List", "Add Bookmark to…"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", padding: "9px 16px", fontSize: "12px", color: M.mutedFg, gap: "10px" }}>
                      <div style={{ width: "24px", height: "24px", background: M.surface2, borderRadius: "6px", border: `1px solid ${M.border}`, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", padding: "10px 12px", fontSize: "12px", fontWeight: 500, color: M.accent, gap: "10px", background: "rgba(232,217,160,0.09)", margin: "4px 8px 10px", borderRadius: "10px", border: "1px solid rgba(232,217,160,0.18)" }}>
                    <div style={{ width: "26px", height: "26px", background: "rgba(232,217,160,0.15)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>＋</div>
                    Add to Home Screen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "#e8e6e0", marginBottom: "120px" }} />

        {/* ── iPad ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }}>
          {/* iPad mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "360px", background: "#1a1a18", border: "1px solid #2e2e2b", borderRadius: "20px", padding: "8px", boxShadow: "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)" }}>
              <div style={{ background: M.bg, borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ background: M.surface2, padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px", borderBottom: `1px solid ${M.border}` }}>
                  <div style={{ display: "flex", gap: "5px", marginRight: "4px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  <div style={{ flex: 1, background: M.surface, borderRadius: "6px", padding: "4px 10px", fontSize: "11px", color: M.mutedFg, textAlign: "center" }}>app.two.so</div>
                  <div style={{ width: "26px", height: "26px", background: "rgba(232,217,160,0.15)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: M.accent, flexShrink: 0 }}>⬆</div>
                </div>
                <div style={{ height: "180px", display: "flex" }}>
                  <div style={{ width: "150px", background: M.surface2, borderRight: `1px solid ${M.border}`, padding: "12px 8px" }}>
                    <div style={{ fontSize: "10px", color: M.mutedFg, marginBottom: "8px", paddingLeft: "6px", letterSpacing: "0.08em" }}>MY WORKSPACE</div>
                    {["Meeting notes", "Product brief", "Weekly review"].map((t, i) => (
                      <div key={i} style={{ padding: "5px 8px", fontSize: "11px", color: i === 0 ? M.accent : M.mutedFg, background: i === 0 ? "rgba(232,217,160,0.08)" : "transparent", borderRadius: "5px", marginBottom: "2px" }}>{t}</div>
                    ))}
                  </div>
                  <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: "8px", background: M.surface }}>
                    <div style={{ height: "8px", background: M.surface2, borderRadius: "4px", width: "65%" }} />
                    <div style={{ height: "6px", background: M.surface2, borderRadius: "4px", width: "88%" }} />
                    <div style={{ height: "6px", background: M.surface2, borderRadius: "4px", width: "55%" }} />
                    <div style={{ height: "6px", background: M.surface2, borderRadius: "4px", width: "75%" }} />
                  </div>
                </div>
                <div style={{ background: "rgba(22,22,20,0.97)", padding: "10px 12px", borderTop: `1px solid ${M.border}` }}>
                  <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                    {[
                      { label: "Add to Home Screen", icon: "＋", highlight: true },
                      { label: "Add Bookmark", icon: "⊕", highlight: false },
                      { label: "Reading List", icon: "◎", highlight: false },
                      { label: "Add to Dock", icon: "▣", highlight: false },
                    ].map((item, i) => (
                      <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "8px 4px", background: item.highlight ? "rgba(232,217,160,0.09)" : "transparent", borderRadius: "10px", border: item.highlight ? "1px solid rgba(232,217,160,0.18)" : "1px solid transparent" }}>
                        <div style={{ width: "36px", height: "36px", background: item.highlight ? "rgba(232,217,160,0.15)" : M.surface2, borderRadius: "8px", border: `1px solid ${item.highlight ? "rgba(232,217,160,0.2)" : M.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", color: item.highlight ? M.accent : M.mutedFg }}>{item.icon}</div>
                        <div style={{ fontSize: "9px", color: item.highlight ? M.accent : M.mutedFg, textAlign: "center", lineHeight: 1.3 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>iPad</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1a1a17", marginBottom: "40px" }}>
              Full screen,<br />on your iPad.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { n: "1", title: "Open Safari", desc: "Go to app.two.so in Safari. Must be Safari — other browsers don't support this on iPadOS." },
                { n: "2", title: "Tap the Share button", desc: "Tap the Share icon in the toolbar at the top right of the screen." },
                { n: "3", title: 'Tap "Add to Home Screen"', desc: "Tap Add to Home Screen from the share menu, confirm the name, and tap Add." },
                { n: "4", title: "Launch from your home screen", desc: "TWO opens full screen on your iPad — optimised for the large display, no browser UI in the way." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={stepBubble}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a17", marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "14px", fontWeight: 300, color: "#6b6b63", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "#e8e6e0", marginBottom: "120px" }} />

        {/* ── Mac ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Mac</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1a1a17", marginBottom: "40px" }}>
              Lives in your<br />Dock.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { n: "1", title: "Open Safari", desc: "Go to app.two.so in Safari on your Mac." },
                { n: "2", title: "File → Add to Dock", desc: "In the menu bar at the top of your screen, click File, then Add to Dock." },
                { n: "3", title: "Click Add", desc: "Confirm by clicking Add in the dialog. TWO will appear in your Dock immediately." },
                { n: "4", title: "Launch from your Dock", desc: "Click the TWO icon any time — it opens in its own window, completely separate from your browser." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={stepBubble}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a17", marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "14px", fontWeight: 300, color: "#6b6b63", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mac mockup */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <div style={{ width: "100%", background: M.surface, border: `1px solid ${M.border}`, borderRadius: "12px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)" }}>
              <div style={{ background: M.surface2, padding: "8px 14px", display: "flex", alignItems: "center", gap: "6px", borderBottom: `1px solid ${M.border}` }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                <div style={{ flex: 1, background: M.surface, borderRadius: "6px", padding: "4px 12px", fontSize: "11px", color: M.mutedFg, textAlign: "center", margin: "0 8px" }}>app.two.so</div>
              </div>
              <div style={{ background: "rgba(18,18,16,0.99)", padding: "3px 14px", display: "flex", gap: "16px", alignItems: "center", borderBottom: `1px solid ${M.border}` }}>
                {["Safari", "File", "Edit", "View", "History", "Bookmarks", "Window"].map((m, i) => (
                  <div key={m} style={{ fontSize: "11px", color: i === 1 ? M.fg : M.mutedFg, fontWeight: i === 1 ? 500 : 400, background: i === 1 ? "rgba(255,255,255,0.08)" : "transparent", padding: "3px 7px", borderRadius: "4px" }}>{m}</div>
                ))}
              </div>
              <div style={{ position: "relative", height: "140px", background: M.surface, overflow: "visible" }}>
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ height: "6px", background: M.surface2, borderRadius: "3px", width: "50%" }} />
                  <div style={{ height: "5px", background: M.surface2, borderRadius: "3px", width: "70%" }} />
                </div>
                <div style={{ position: "absolute", top: "0", left: "55px", background: "rgba(28,28,26,0.98)", border: `1px solid ${M.border}`, borderRadius: "8px", minWidth: "190px", padding: "4px 0", boxShadow: "0 16px 40px rgba(0,0,0,0.6)", zIndex: 10 }}>
                  {["New Window", "New Tab", "Open Location…", "Close Tab", "Save As…", "Print…"].map((item) => (
                    <div key={item} style={{ padding: "5px 14px", fontSize: "11px", color: M.mutedFg }}>
                      {item}
                    </div>
                  ))}
                  <div style={{ height: "1px", background: M.border, margin: "3px 0" }} />
                  <div style={{ padding: "6px 14px", fontSize: "11px", fontWeight: 500, color: M.accent, background: "rgba(232,217,160,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "2px 6px", borderRadius: "6px", border: "1px solid rgba(232,217,160,0.18)" }}>
                    <span>Add to Dock…</span>
                    <span style={{ fontSize: "10px", color: M.accentDim }}>⌘D</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Dock */}
            <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "8px 14px", display: "flex", gap: "10px", alignItems: "flex-end", background: "#1a1a18" }}>
              {[
                { label: "Safari", bg: "#1c6ef3", icon: "🧭", isReal: false },
                { label: "Notes", bg: "#2a2a28", icon: "📝", isReal: false },
                { label: "TWO", bg: null, icon: null, isReal: true },
                { label: "Finder", bg: "#1c1c1a", icon: "🗂", isReal: false },
                { label: "Calendar", bg: "#1c1c1a", icon: "📅", isReal: false },
              ].map((app, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  {app.isReal ? (
                    <img src="/apple-touch-icon.png" alt="TWO" style={{ width: "46px", height: "46px", borderRadius: "12px", display: "block", boxShadow: `0 0 0 2px ${M.accent}, 0 6px 20px rgba(232,217,160,0.3)` }} />
                  ) : (
                    <div style={{ width: "36px", height: "36px", background: app.bg ?? M.surface2, borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>{app.icon}</div>
                  )}
                  <div style={{ fontSize: "9px", color: app.isReal ? M.accent : M.mutedFg }}>{app.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "#e8e6e0", marginBottom: "80px" }} />

        {/* FAQ */}
        <div style={{ marginBottom: "100px" }}>
          <div className="eyebrow" style={{ marginBottom: "24px" }}>Common questions</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e8e6e0", border: "1px solid #e8e6e0", borderRadius: "12px", overflow: "hidden" }}>
            {[
              { q: "Is it free?", a: "Yes — installing TWO as a web app is completely free. No App Store, no payment required." },
              { q: "Why Safari only?", a: "Apple only allows web apps to be installed through Safari. Chrome and Firefox don't support this feature on iOS or iPadOS." },
              { q: "Will it work offline?", a: "Offline support is on our roadmap. For now, TWO requires an internet connection to load and save your docs." },
              { q: "Native apps coming?", a: "Yes — native Mac and iPad apps are planned. The web app is the best way to get started right now." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f5f4f0", padding: "32px 36px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a17", marginBottom: "8px" }}>{item.q}</div>
                <div style={{ fontSize: "14px", fontWeight: 300, color: "#6b6b63", lineHeight: 1.65 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1a1a17", marginBottom: "16px" }}>
            Ready to start <em style={{ fontStyle: "italic", color: "#c4b87a" }}>writing?</em>
          </h2>
          <p style={{ fontSize: "17px", fontWeight: 300, color: "#6b6b63", marginBottom: "36px" }}>
            Create a free account and install TWO in under a minute.
          </p>
          <a href="https://app.two.so/signup" className="btn-primary btn-lg">
            Create a free account →
          </a>
        </div>

      </section>

      <footer>
        <div className="fl">TWO — A docs app by Strevius</div>
        <div className="fr">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  )
}
