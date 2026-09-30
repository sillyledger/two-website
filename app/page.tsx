import type { Metadata } from "next";
import { createClient } from "../lib/supabase";
import { HomeAppDemo } from "@/components/home-app-demo";

export const metadata: Metadata = {
  title: "Minimalist Docs Editor & Writing App for iPad, Mac & Web",
};

export const revalidate = 60;

const CHECK = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8f89e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function formatMonthYear(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function Home() {
  const supabase = createClient();
  const { data: latestPosts } = await supabase
    .from("posts")
    .select("id, title, slug, category, seo_description, published_at")
    .eq("target_site", "two.so")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(4);

  return (
    <div className="hm">
      {/* ============ HERO ============ */}
      <section className="hm-wrap hm-hero">
        <a href="/product/features/studio" className="hm-news">
          <span className="hm-new">New</span>
          Studio is here: capture ideas, then turn them into docs
          <span className="arrow">→</span>
        </a>
        <h1 className="display">
          Two docs. One screen.
          <br />
          <span>One to write. One to think.</span>
        </h1>
        <div className="hm-hero-cta">
          <div className="hm-btns">
            <a href="https://app.two.so/signup" className="hm-btn solid">Start writing free</a>
            <a href="/pricing" className="hm-btn outline">See pricing</a>
          </div>
          <p className="hm-fine">Free for 30 docs. No AI, nothing to set up.</p>
        </div>
      </section>

      {/* ============ CLICKABLE APP ============ */}
      <section className="hm-wrap hm-demo-wrap">
        <HomeAppDemo />
      </section>

      <div className="hm-wrap hm-facts">
        <div><span className="k">Platforms</span><span className="v">Web, installable on Mac &amp; iPad</span></div>
        <div><span className="k">AI</span><span className="v">None, on purpose</span></div>
        <div><span className="k">Pricing</span><span className="v">Flat, never per seat</span></div>
      </div>

      {/* ============ JOURNEY ============ */}
      <section className="hm-wrap hm-section">
        <div className="hm-head">
          <div>
            <span className="hm-num">How work moves through TWO</span>
            <h2 className="display">From rough idea<br />to finished doc.</h2>
          </div>
          <p>
            Docs are for finished thinking. Studio is for the unfinished kind. An idea can travel all the way from a
            one-line note to a doc you write with your research open beside it.
          </p>
        </div>

        <div className="hm-steps">
          <div className="hm-step">
            <div className="hm-vis hm-vis-ideas">
              <div className="hm-mini-head"><b>Ideas</b><span>24</span></div>
              <div className="hm-mini-row"><i style={{ background: "#6ec39a" }} />Why I write without AI</div>
              <div className="hm-mini-row"><i style={{ background: "#5a5a64" }} /><span className="t">Harbor photo essay</span><span className="hm-turn sm">Turn into Doc</span></div>
              <div className="hm-mini-row"><i style={{ background: "#e0a44d" }} />Episode 12</div>
            </div>
            <span className="hm-num sm">01</span>
            <b>Capture in Ideas</b>
            <span>A simple list of what you might write next, with a status and a place it will live.</span>
          </div>
          <div className="hm-step">
            <div className="hm-vis hm-vis-canvas" aria-hidden="true">
              <span className="c-text">Hook ideas</span>
              <span className="c-shape">Calm</span>
              <span className="c-swatch" />
              <span className="c-diamond" />
            </div>
            <span className="hm-num sm">02</span>
            <b>Work it out on a Canvas</b>
            <span>Pin docs and notes, add colors and shapes, draw the connections.</span>
          </div>
          <div className="hm-step">
            <div className="hm-vis hm-vis-doc">
              <b className="title">Harbor photo essay</b>
              <span className="from">From Ideas</span>
              <div className="hm-ln" style={{ width: "94%" }} />
              <div className="hm-ln" style={{ width: "84%" }} />
              <div className="hm-ln" style={{ width: "70%" }} />
              <div className="hm-ln" style={{ width: "88%" }} />
            </div>
            <span className="hm-num sm">03</span>
            <b>Turn it into a Doc</b>
            <span>One click. The doc stays linked to its idea, both ways.</span>
          </div>
          <div className="hm-step">
            <div className="hm-vis hm-vis-split" aria-hidden="true">
              <div className="p"><b>Harbor essay</b><div className="hm-ln" style={{ width: "90%" }} /><div className="hm-ln" style={{ width: "76%" }} /><div className="hm-ln" style={{ width: "84%" }} /></div>
              <div className="s"><span /></div>
              <div className="p alt"><b>Canvas notes</b><div className="hm-ln clay" style={{ width: "80%" }} /><div className="hm-ln" style={{ width: "66%" }} /></div>
            </div>
            <span className="hm-num sm">04</span>
            <b>Write it side by side</b>
            <span>Open your canvas notes next to the draft in split view.</span>
          </div>
        </div>
        <a href="/product/features/studio" className="hm-link">Explore Studio →</a>
      </section>

      {/* ============ TOOLKIT COLLAGE ============ */}
      <section className="hm-wrap hm-section">
        <div className="hm-head">
          <div>
            <span className="hm-num">The rest of the toolkit</span>
            <h2 className="display">Quietly there<br />when you need it.</h2>
          </div>
          <div className="hm-head-r">
            <p>Small tools that stay out of the way until you reach for them. Every one of them is on the Free plan.</p>
            <a href="/product/features" className="hm-link">See all features →</a>
          </div>
        </div>

        <div className="hm-collage">
          <div className="hm-frag f-notes">
            <span className="hm-flbl"><i /><b>Notes</b> sorted by color</span>
            <div className="hm-fcard hm-fpills">
              <span className="on">All</span>
              <span><i style={{ background: "#8f89e6" }} />Journal</span>
              <span><i style={{ background: "#c98a5e" }} />Clients</span>
              <span><i style={{ background: "#6ec39a" }} />Reading</span>
            </div>
          </div>
          <div className="hm-frag f-planner">
            <span className="hm-flbl"><i /><b>Planner</b> tied to docs</span>
            <div className="hm-fcard hm-ftasks">
              <div><span className="hm-check" /><span className="t">Finish chapter three</span><span className="hi">High</span></div>
              <div><span className="hm-check" /><span className="t">Send moodboard</span><span>Fri</span></div>
              <div className="done"><span className="hm-check on" /><span className="t">Outline research</span></div>
            </div>
          </div>
          <div className="hm-frag f-history">
            <span className="hm-flbl"><i /><b>Version history</b></span>
            <div className="hm-fcard hm-fhist">
              <div className="line"><span /><em /><span /><em /><span className="on" /><em /><span /></div>
              <div className="labels"><span>Mon</span><span>Tue</span><span className="on">Restore</span><span>Now</span></div>
            </div>
          </div>
          <div className="hm-frag f-jump">
            <span className="hm-flbl"><i /><b>Quick Jump</b> ⌘K</span>
            <div className="hm-fcard hm-fjump">
              <div className="q">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
                harb<span className="caret" /><span className="k">⌘K</span>
              </div>
              <div className="r on">Harbor photo essay</div>
              <div className="r">Research: harbor towns</div>
            </div>
          </div>
          <div className="hm-frag f-sync">
            <span className="hm-flbl"><i /><b>Live sync</b></span>
            <div className="hm-fcard hm-fsync">
              <div><i />Laptop<span>Up to date</span></div>
              <div><i />Tablet<span>Up to date</span></div>
            </div>
          </div>
          <div className="hm-frag f-export">
            <span className="hm-flbl"><i /><b>Export</b> anytime</span>
            <div className="hm-fcard hm-fexport">
              <span>Export PDF</span>
              <span>Export Markdown</span>
              <span>Copy</span>
            </div>
          </div>
          <div className="hm-frag f-templates">
            <span className="hm-flbl"><i /><b>Templates</b> to start fast</span>
            <div className="hm-ftpl">
              <div className="hm-fcard" style={{ borderTopColor: "#c98a5e" }}>Meeting notes</div>
              <div className="hm-fcard" style={{ borderTopColor: "#8f89e6" }}>Weekly review</div>
              <div className="hm-fcard" style={{ borderTopColor: "#6ec39a" }}>Podcast episode</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT TWO LEAVES OUT ============ */}
      <section className="hm-wrap hm-section">
        <div className="hm-leaves-head">
          <h2 className="display">What TWO leaves out.</h2>
          <p>Every other docs app keeps adding. We decided what not to build.</p>
        </div>
        <div className="hm-leaves">
          <div>
            <p className="display">No AI writing for you.</p>
            <p>No suggestions, no summaries, no chatbot in the margin. The thinking stays yours.</p>
          </div>
          <div>
            <p className="display">No blocks or databases.</p>
            <p>Open it and write. There is no system to build before the first sentence.</p>
          </div>
          <div>
            <p className="display">No per-seat pricing.</p>
            <p>One flat price. Bring someone into a workspace and your bill stays the same.</p>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="hm-wrap hm-section">
        <div className="hm-center">
          <p className="micro">Pricing</p>
          <h2 className="display">Free to start. $6 when you&apos;re ready.</h2>
          <p>14-day Pro trial, no credit card. Never per seat.</p>
        </div>
        <div className="hm-plans">
          <div className="hm-plan">
            <p className="hm-plan-name">Free</p>
            <p className="hm-plan-price"><span className="display">$0</span><span>forever</span></p>
            <ul>
              <li>{CHECK}30 docs, plus Notes</li>
              <li>{CHECK}Split view, Studio, Planner</li>
              <li>{CHECK}1 GB storage</li>
            </ul>
            <a href="https://app.two.so/signup" className="hm-btn outline">Start free</a>
          </div>
          <div className="hm-plan pro">
            <div className="hm-plan-top">
              <p className="hm-plan-name">Pro</p>
              <span className="hm-badge pro">14 days free</span>
            </div>
            <p className="hm-plan-price"><span className="display">$6</span><span>a month, or $5 yearly</span></p>
            <ul>
              <li>{CHECK}Unlimited docs and workspaces</li>
              <li>{CHECK}Share a workspace, no seat fees</li>
              <li>{CHECK}10 GB storage, 30-day history</li>
            </ul>
            <a href="/pricing" className="hm-btn solid">Start free trial</a>
          </div>
          <div className="hm-plan">
            <div className="hm-plan-top">
              <p className="hm-plan-name">Team</p>
              <span className="hm-badge soon">Coming soon</span>
            </div>
            <p className="hm-plan-price"><span className="display">$10</span><span>a month</span></p>
            <ul>
              <li>{CHECK}Everything in Pro</li>
              <li>{CHECK}Up to 10 members</li>
              <li>{CHECK}50 GB storage</li>
            </ul>
            <span className="hm-btn soon">Coming soon</span>
          </div>
        </div>
        <div className="hm-center-link">
          <a href="/pricing" className="hm-link">Compare all plans →</a>
        </div>
      </section>

      {/* ============ BLOG ============ */}
      <section className="hm-wrap hm-section">
        <div className="hm-blog-head">
          <div>
            <p className="micro">From the blog</p>
            <h2 className="display">Notes on writing, and building TWO.</h2>
          </div>
          <a href="/blog" className="hm-link">Read all posts →</a>
        </div>
        {latestPosts && latestPosts.length > 0 ? (
          <div className="hm-blog2">
            <a href={`/blog/${latestPosts[0].slug}`} className="hm-feat">
              <div className="hm-feat-meta">
                {latestPosts[0].category && <span className="cat">{latestPosts[0].category}</span>}
                <span className="m">
                  Latest{latestPosts[0].published_at ? ` · ${formatMonthYear(latestPosts[0].published_at)}` : ""}
                </span>
              </div>
              <span className="display hm-feat-t">{latestPosts[0].title}</span>
              {latestPosts[0].seo_description && <span className="d">{latestPosts[0].seo_description}</span>}
              <span className="go">Read the post →</span>
            </a>
            {latestPosts.length > 1 && (
              <div className="hm-blist">
                {latestPosts.slice(1).map((post) => (
                  <a key={post.id} href={`/blog/${post.slug}`} className="hm-brow">
                    <span className="l">
                      {post.category && <span className="cat">{post.category}</span>}
                      <b>{post.title}</b>
                    </span>
                    {post.published_at && <em>{formatMonthYear(post.published_at)}</em>}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="hm-blog-empty">
            New posts are on the way. <a href="/blog">Visit the blog →</a>
          </p>
        )}
      </section>

      {/* ============ CTA ============ */}
      <section className="hm-wrap hm-cta">
        <h2 className="display">
          Start with one doc.
          <br />
          <span>Open a second one later.</span>
        </h2>
        <div className="hm-btns">
          <a href="/pricing" className="hm-btn outline lg">See pricing</a>
          <a href="https://app.two.so/signup" className="hm-btn solid lg">Start writing free</a>
        </div>
      </section>
    </div>
  );
}
