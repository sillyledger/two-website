import { Navigation } from "@/components/navigation"

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

      {/* ── iPhone ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px 120px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>iPhone</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: "40px" }}>
              Add to your<br />Home Screen.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { n: "1", title: "Open Safari", desc: "Go to app.two.so in Safari. This only works in Safari — Chrome and Firefox can't install web apps on iPhone." },
                { n: "2", title: "Tap the Share button", desc: "Tap the Share icon at the bottom of the screen — the box with an arrow pointing up." },
                { n: "3", title: "Tap \"Add to Home Screen\"", desc: "Scroll down in the share sheet, tap Add to Home Screen, confirm the name, and tap Add." },
                { n: "4", title: "Done — open TWO anytime", desc: "TWO lives on your home screen like any native app — full screen, no browser chrome." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(232,217,160,0.12)", border: "1px solid rgba(232,217,160,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 500, color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--foreground)", marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "14px", fontWeight: 300, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* iPhone mockup — Share sheet */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "280px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "40px", padding: "12px", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
              {/* phone screen */}
              <div style={{ background: "var(--background)", borderRadius: "30px", overflow: "hidden" }}>
                {/* status bar */}
                <div style={{ height: "44px", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: "11px", color: "var(--muted-foreground)" }}>
                  <span>9:41</span>
                  <div style={{ width: "80px", height: "20px", background: "var(--background)", borderRadius: "20px" }} />
                  <span>●●●</span>
                </div>
                {/* safari url bar */}
                <div style={{ background: "var(--surface-2)", padding: "8px 12px", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ background: "var(--surface)", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", color: "var(--muted-foreground)", textAlign: "center" }}>app.two.so</div>
                </div>
                {/* app preview */}
                <div style={{ height: "180px", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, #e8d9a0, #c4b87a)", borderRadius: "12px", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>✦</div>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--foreground)" }}>TWO</div>
                    <div style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>Write better.</div>
                  </div>
                </div>
                {/* share sheet */}
                <div style={{ background: "rgba(28,28,30,0.95)", backdropFilter: "blur(20px)", borderTopLeftRadius: "16px", borderTopRightRadius: "16px", padding: "8px 0" }}>
                  {/* handle */}
                  <div style={{ width: "36px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "2px", margin: "0 auto 12px" }} />
                  {/* app row */}
                  <div style={{ display: "flex", gap: "16px", padding: "0 16px 12px", overflowX: "hidden" }}>
                    {["📋","📩","💬","📝"].map((icon, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                        <div style={{ width: "44px", height: "44px", background: "var(--surface-2)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{icon}</div>
                        <div style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Share</div>
                      </div>
                    ))}
                  </div>
                  {/* divider */}
                  <div style={{ height: "1px", background: "var(--border)", margin: "0 16px 4px" }} />
                  {/* menu items */}
                  {["Add to Reading List", "Add Bookmark to…"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", padding: "10px 16px", fontSize: "13px", color: "var(--muted-foreground)", gap: "12px" }}>
                      <div style={{ width: "26px", height: "26px", background: "var(--surface-2)", borderRadius: "6px" }} />
                      {item}
                    </div>
                  ))}
                  {/* highlighted item */}
                  <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", fontSize: "13px", fontWeight: 500, color: "var(--accent)", gap: "12px", background: "rgba(232,217,160,0.08)", margin: "0 8px", borderRadius: "8px" }}>
                    <div style={{ width: "26px", height: "26px", background: "rgba(232,217,160,0.15)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>＋</div>
                    Add to Home Screen
                  </div>
                  <div style={{ height: "20px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" style={{ margin: "0 0 120px" }} />

        {/* ── iPad ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }}>

          {/* iPad mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "340px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "24px", padding: "10px", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
              <div style={{ background: "var(--background)", borderRadius: "16px", overflow: "hidden" }}>
                {/* iPad toolbar */}
                <div style={{ background: "var(--surface-2)", padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  <div style={{ flex: 1, background: "var(--surface)", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", color: "var(--muted-foreground)", textAlign: "center" }}>app.two.so</div>
                  {/* share icon */}
                  <div style={{ width: "26px", height: "26px", background: "rgba(232,217,160,0.15)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "var(--accent)" }}>⬆</div>
                </div>
                {/* app area */}
                <div style={{ height: "200px", display: "flex" }}>
                  <div style={{ width: "160px", background: "var(--surface-2)", borderRight: "1px solid var(--border)", padding: "12px 8px" }}>
                    <div style={{ fontSize: "10px", color: "var(--muted-foreground)", marginBottom: "8px", paddingLeft: "6px" }}>MY WORKSPACE</div>
                    {["Meeting notes","Product brief","Weekly review"].map((t, i) => (
                      <div key={i} style={{ padding: "5px 8px", fontSize: "11px", color: i === 0 ? "var(--accent)" : "var(--muted-foreground)", background: i === 0 ? "rgba(232,217,160,0.08)" : "transparent", borderRadius: "5px", marginBottom: "2px" }}>{t}</div>
                    ))}
                  </div>
                  <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ height: "8px", background: "var(--surface-2)", borderRadius: "4px", width: "70%" }} />
                    <div style={{ height: "6px", background: "var(--surface-2)", borderRadius: "4px", width: "90%" }} />
                    <div style={{ height: "6px", background: "var(--surface-2)", borderRadius: "4px", width: "60%" }} />
                  </div>
                </div>
                {/* share dropdown overlay */}
                <div style={{ background: "rgba(28,28,30,0.96)", backdropFilter: "blur(20px)", padding: "12px 0" }}>
                  <div style={{ display: "flex", gap: "0" }}>
                    {[
                      { label: "Add to Home Screen", icon: "＋", highlight: true },
                      { label: "Add Bookmark", icon: "⊕", highlight: false },
                      { label: "Reading List", icon: "◎", highlight: false },
                    ].map((item, i) => (
                      <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "8px 4px", background: item.highlight ? "rgba(232,217,160,0.08)" : "transparent", borderRadius: item.highlight ? "8px" : "0", margin: item.highlight ? "0 4px" : "0" }}>
                        <div style={{ width: "36px", height: "36px", background: item.highlight ? "rgba(232,217,160,0.15)" : "var(--surface-2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: item.highlight ? "var(--accent)" : "var(--muted-foreground)" }}>{item.icon}</div>
                        <div style={{ fontSize: "9px", color: item.highlight ? "var(--accent)" : "var(--muted-foreground)", textAlign: "center", lineHeight: 1.3 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>iPad</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: "40px" }}>
              Full screen,<br />on your iPad.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { n: "1", title: "Open Safari", desc: "Go to app.two.so in Safari. Must be Safari — other browsers don't support this on iPadOS." },
                { n: "2", title: "Tap the Share button", desc: "Tap the Share icon in the toolbar at the top right of the screen." },
                { n: "3", title: "Tap \"Add to Home Screen\"", desc: "Tap Add to Home Screen from the share menu, confirm the name, and tap Add." },
                { n: "4", title: "Launch from your home screen", desc: "TWO opens full screen on your iPad — optimised for the large display, no browser UI in the way." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(232,217,160,0.12)", border: "1px solid rgba(232,217,160,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 500, color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--foreground)", marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "14px", fontWeight: 300, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" style={{ margin: "0 0 120px" }} />

        {/* ── Mac ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Mac</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: "40px" }}>
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
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(232,217,160,0.12)", border: "1px solid rgba(232,217,160,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 500, color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--foreground)", marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "14px", fontWeight: 300, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mac mockup — File menu + Dock */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            {/* browser window */}
            <div style={{ width: "100%", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
              {/* menu bar */}
              <div style={{ background: "rgba(30,30,28,0.98)", padding: "4px 12px", display: "flex", gap: "20px", alignItems: "center", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "5px", marginRight: "8px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                </div>
                {["Safari","File","Edit","View","History","Bookmarks","Window","Help"].map((m, i) => (
                  <div key={m} style={{ fontSize: "11px", color: i === 1 ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: i === 1 ? 500 : 400, background: i === 1 ? "rgba(255,255,255,0.1)" : "transparent", padding: "2px 6px", borderRadius: "4px" }}>{m}</div>
                ))}
              </div>
              {/* url bar */}
              <div style={{ background: "var(--surface-2)", padding: "6px 12px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid var(--border)" }}>
                <div style={{ flex: 1, background: "var(--surface)", borderRadius: "6px", padding: "5px 12px", fontSize: "11px", color: "var(--muted-foreground)", textAlign: "center" }}>app.two.so</div>
              </div>
              {/* File dropdown */}
              <div style={{ position: "relative", height: "160px", background: "var(--surface)" }}>
                <div style={{ position: "absolute", top: "0", left: "60px", background: "rgba(38,38,36,0.98)", backdropFilter: "blur(20px)", border: "1px solid var(--border)", borderRadius: "8px", minWidth: "200px", padding: "4px 0", boxShadow: "0 12px 40px rgba(0,0,0,0.5)", zIndex: 10 }}>
                  {["New Window","New Tab","Open Location…","Close Tab","—","Save As…","Print…","—"].map((item, i) => (
                    <div key={i} style={{ padding: "5px 16px", fontSize: "12px", color: item === "—" ? "var(--border)" : "var(--muted-foreground)", borderTop: item === "—" ? "1px solid var(--border)" : "none", margin: item === "—" ? "2px 0" : "0", display: item === "—" ? "none" : "flex", justifyContent: "space-between" }}>{item}</div>
                  ))}
                  <div style={{ padding: "5px 16px", fontSize: "12px", fontWeight: 500, color: "var(--accent)", background: "rgba(232,217,160,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    Add to Dock…
                    <span style={{ fontSize: "10px", color: "var(--accent-dim)", opacity: 0.7 }}>⌘D</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dock */}
            <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "8px 12px", display: "flex", gap: "8px", alignItems: "flex-end" }}>
              {[
                { bg: "#1c6ef3", label: "Safari", icon: "🧭" },
                { bg: "#2d2d2d", label: "Notes", icon: "📝" },
                { bg: "linear-gradient(135deg,#e8d9a0,#c4b87a)", label: "TWO", icon: "✦", highlight: true },
                { bg: "#1c1c1e", label: "Finder", icon: "🗂" },
              ].map((app, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: app.highlight ? "44px" : "36px", height: app.highlight ? "44px" : "36px", background: app.bg, borderRadius: app.highlight ? "11px" : "9px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: app.highlight ? "20px" : "16px", color: app.highlight ? "#0c0c0b" : "white", boxShadow: app.highlight ? "0 0 0 2px var(--accent), 0 4px 20px rgba(232,217,160,0.3)" : "none", transition: "all 0.2s" }}>{app.icon}</div>
                  <div style={{ fontSize: "9px", color: app.highlight ? "var(--accent)" : "var(--muted-foreground)" }}>{app.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" style={{ margin: "0 0 80px" }} />

        {/* FAQ */}
        <div style={{ marginBottom: "100px" }}>
          <div className="eyebrow" style={{ marginBottom: "24px" }}>Common questions</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
            {[
              { q: "Is it free?", a: "Yes — installing TWO as a web app is completely free. No App Store, no payment required." },
              { q: "Why Safari only?", a: "Apple only allows web apps to be installed through Safari. Chrome and Firefox don't support this feature on iOS or iPadOS." },
              { q: "Will it work offline?", a: "Offline support is on the roadmap. For now, TWO requires an internet connection to load and save your docs." },
              { q: "Native apps coming?", a: "Yes — native Mac and iPad apps are planned. The web app is the best way to get started right now." },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--surface)", padding: "32px 36px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--foreground)", marginBottom: "8px" }}>{item.q}</div>
                <div style={{ fontSize: "14px", fontWeight: 300, color: "var(--muted-foreground)", lineHeight: 1.65 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: "16px" }}>
            Ready to start <em style={{ fontStyle: "italic", color: "var(--accent)" }}>writing?</em>
          </h2>
          <p style={{ fontSize: "17px", fontWeight: 300, color: "var(--muted-foreground)", marginBottom: "36px" }}>
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
