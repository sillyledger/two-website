import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimalist Docs Editor & Writing App for iPad, Mac & Web",
};

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <div className="hero-frame">
        <div className="hero">
          <p className="micro">Currently in beta on web</p>
          <h1 className="display headline">
            Two docs.
            <br />
            <span className="accent">One</span> screen.
          </h1>
          <p className="body-copy">Write in one. Reference the other. Never alt-tab to find your place again.</p>
          <div className="cta-row">
            <a href="https://app.two.so/signup" className="btn solid">Start for free</a>
            <a href="/product/features/split-view" className="btn outline">See split view</a>
          </div>
          <a href="/demo" className="dm-hero-link">Or try the demo — no signup required →</a>
        </div>

        <div className="stage">
          <div className="cards">
            <div className="card">
              <div className="folder tl">
                <svg viewBox="0 0 64 56">
                  <path
                    d="M4 14a4 4 0 014-4h14l6 8h28a4 4 0 014 4v26a4 4 0 01-4 4H8a4 4 0 01-4-4z"
                    fill="#8f89e6"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <div className="doc-bar">
                <i></i>
                <i></i>
                <i></i>
                <span className="pill roadmap">ROADMAP</span>
              </div>
              <div className="ln title w46"></div>
              <div className="ln w97"></div>
              <div className="ln w91"></div>
              <div className="ln w88"></div>
              <div className="ln w72"></div>
              <div className="gap"></div>
              <div className="ln w95"></div>
              <div className="ln w83"></div>
              <div className="ln w91"></div>
              <div className="ln w64"></div>
              <div className="gap"></div>
              <div className="ln w55"></div>
              <div className="ln w70"></div>
              <div className="ln w40">
                &nbsp;<span className="cursor"></span>
              </div>
            </div>
            <div className="card">
              <div className="folder br">
                <svg viewBox="0 0 64 56">
                  <path
                    d="M4 14a4 4 0 014-4h14l6 8h28a4 4 0 014 4v26a4 4 0 01-4 4H8a4 4 0 01-4-4z"
                    fill="#c98a5e"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <div className="doc-bar">
                <i></i>
                <i></i>
                <i></i>
                <span className="pill notes">MEETING NOTES</span>
              </div>
              <div className="ln title w46"></div>
              <div className="ln w88"></div>
              <div className="ln w95"></div>
              <div className="ln w72"></div>
              <div className="ln w91"></div>
              <div className="gap"></div>
              <div className="ln w80"></div>
              <div className="ln w97"></div>
              <div className="ln w64"></div>
              <div className="ln w83"></div>
              <div className="gap"></div>
              <div className="ln w70"></div>
              <div className="ln w55"></div>
            </div>
            <div className="seam-wrap">
              <div className="line"></div>
            </div>
            <div className="seam-dot"></div>
          </div>

          <div className="leader la">
            <div className="tick"></div>
            <div className="line"></div>
            <div className="lbl">
              Split view — <b>drag to resize</b>
            </div>
          </div>
          <div className="leader lb">
            <div className="tick"></div>
            <div className="line"></div>
            <div className="lbl">
              <b>Folders</b> — keep things tidy
            </div>
          </div>
          <div className="leader lc">
            <div className="tick"></div>
            <div className="line"></div>
            <div className="lbl">
              Live, <b>as you type</b>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div>
            <span className="k">Platforms</span>
            <span className="v">Web · Mac &amp; iPad soon</span>
          </div>
          <div>
            <span className="k">Price</span>
            <span className="v">Free to start</span>
          </div>
        </div>
      </div>

      {/* ============ FEATURES ============ */}
      <div className="features-frame">
        <div className="section-head">
          <p className="micro">Beyond split view</p>
          <h2 className="display">Two more reasons to switch.</h2>
          <p>Tabs keep every doc one click away. Linking keeps your notes and docs from living apart.</p>
        </div>

        <div className="flagships">
          <div className="flag">
            <div className="flag-leader">
              <div className="tick"></div>
              <div className="line"></div>
              <div className="lbl">
                Tabs — <b>never lose your place</b>
              </div>
            </div>
            <div className="demo">
              <div className="tabbar">
                <span className="active">Weekly Review</span>
                <span>OKR Tracker</span>
                <span>Product Brief</span>
              </div>
              <div className="fakeln w90"></div>
              <div className="fakeln w70"></div>
              <div className="fakeln w80"></div>
              <div className="fakeln w55"></div>
            </div>
          </div>
          <div className="flag">
            <div className="flag-leader">
              <div className="tick"></div>
              <div className="line"></div>
              <div className="lbl">
                Linking — <b>jump straight there</b>
              </div>
            </div>
            <div className="demo">
              <div className="fakeln w90"></div>
              <div className="link-row">
                <div className="fakeln" style={{ width: "44%" }}></div>
                <span className="fakeln linked">the meeting notes</span>
              </div>
              <div className="fakeln w70"></div>
              <div className="fakeln w80"></div>
              <div className="ref-drop">
                <div className="ref-connector"></div>
              </div>
              <div className="ref-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c98a5e" strokeWidth="1.6">
                  <path d="M4 4h13l3 3v13H4z" />
                  <line x1="8" y1="9" x2="14" y2="9" />
                </svg>
                <span>Meeting Notes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="support-head">
          <p className="micro">And the rest of the toolkit</p>
          <h3 className="display">Four smaller things, all worth having.</h3>
        </div>

        <div className="bento2">
          <div className="tile t-tpl">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="8" y1="13" x2="16" y2="13" />
              </svg>
            </div>
            <h4>Start fast, every time</h4>
            <p className="desc">Meeting notes, briefs, roadmaps — one click away.</p>
            <div className="tpl-grid">
              <div className="tpl-cell">
                <div className="dot" style={{ background: "var(--clay)" }}></div>
                <p>Meeting Notes</p>
              </div>
              <div className="tpl-cell">
                <div className="dot" style={{ background: "var(--indigo)" }}></div>
                <p>OKR Tracker</p>
              </div>
              <div className="tpl-cell">
                <div className="dot" style={{ background: "#5b9bd6" }}></div>
                <p>Product Brief</p>
              </div>
              <div className="tpl-cell">
                <div className="dot" style={{ background: "var(--green)" }}></div>
                <p>Blog Post</p>
              </div>
            </div>
          </div>

          <div className="tile t-sync">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4">
                <path d="M3 12a9 9 0 0115-6.7M21 12a9 9 0 01-15 6.7" />
                <path d="M18 3v4h-4M6 21v-4h4" />
              </svg>
            </div>
            <h4>Every device, always current</h4>
            <p className="desc">Changes push instantly across Mac, web, and iPad.</p>
            <div className="sync-row">
              <span className="lbl">Mac</span>
              <div className="track">
                <div className="fill" style={{ width: "96%" }}></div>
              </div>
              <span className="dot"></span>
            </div>
            <div className="sync-row">
              <span className="lbl">Web</span>
              <div className="track">
                <div className="fill" style={{ width: "96%" }}></div>
              </div>
              <span className="dot"></span>
            </div>
            <div className="sync-row">
              <span className="lbl">iPad</span>
              <div className="track">
                <div className="fill" style={{ width: "96%" }}></div>
              </div>
              <span className="dot"></span>
            </div>
          </div>

          <div className="tile t-shared">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h4>Shared, when you want it</h4>
            <p className="desc">Bring one or two people into a doc — not a whole workspace of noise.</p>
            <div className="avatars">
              <div className="av a1">P</div>
              <div className="av a2">R</div>
              <div className="av a3">+2</div>
            </div>
          </div>

          <div className="tile t-log">
            <div className="log-copy">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h4>Know what changed, and when</h4>
              <p className="desc" style={{ marginBottom: 0 }}>
                A running log of every edit, across every workspace.
              </p>
            </div>
            <div className="timeline">
              <div className="tl-node">
                <div className="line2"></div>
                <div className="dot2"></div>
                <span className="cap">Mon</span>
              </div>
              <div className="tl-node active">
                <div className="line2"></div>
                <div className="dot2"></div>
                <span className="cap">Edited</span>
              </div>
              <div className="tl-node">
                <div className="line2"></div>
                <div className="dot2"></div>
                <span className="cap">Sun</span>
              </div>
              <div className="tl-node">
                <div className="dot2"></div>
                <span className="cap">Sat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-teaser">
          <div className="pt-head">
            <p className="micro">Pricing</p>
            <h2 className="display">Free to start. $6/mo when you&apos;re ready.</h2>
            <p>14-day free trial on Pro. No credit card required.</p>
          </div>

          <div className="pt-row">
            <div className="pt-block">
              <div>
                <p className="pt-name">FREE</p>
                <div className="pt-price">
                  <span className="amt display">$0</span>
                  <span className="per">/ month</span>
                </div>
              </div>
              <a href="https://app.two.so/signup" className="pt-btn outline">Start free</a>
            </div>
            <div className="pt-block pro">
              <div>
                <p className="pt-name">PRO</p>
                <div className="pt-price">
                  <span className="amt display">$6</span>
                  <span className="per">/ month</span>
                </div>
              </div>
              <a href="/pricing" className="pt-btn solid">Start free trial</a>
            </div>
            <div className="pt-block">
              <div>
                <p className="pt-name">FOUNDING</p>
                <div className="pt-price">
                  <span className="amt display">$49</span>
                  <span className="per">/ once</span>
                </div>
              </div>
              <a href="/pricing" className="pt-btn outline">Join</a>
            </div>
          </div>

          <div className="pt-compare">
            <a href="/pricing">Compare all plans and features →</a>
          </div>
        </div>
      </div>
    </>
  );
}
