import { PageCta } from "@/components/page-cta";
import { CHECKED, COMPETITORS, type Competitor, type Mark } from "@/components/compare-data";

function Dot({ mark }: { mark: Mark }) {
  return <i className={`cpx-dot ${mark}`} aria-hidden="true" />;
}

export function ComparePage({ c }: { c: Competitor }) {
  return (
    <div className="features-frame">
      <section className="cpx-hero">
        <p className="micro">Compare</p>
        <h1 className="display">
          TWO vs
          <br />
          <span>{c.name}.</span>
        </h1>
        <p className="cpx-intro">{c.intro}</p>
        <nav className="cpx-tabs" aria-label="Comparisons">
          {COMPETITORS.map((x) =>
            x.slug === c.slug ? (
              <span key={x.slug} className="on" aria-current="page">vs {x.name}</span>
            ) : (
              <a key={x.slug} href={`/compare/${x.slug}`}>vs {x.name}</a>
            )
          )}
        </nav>
      </section>

      <section className="cpx-short">
        <p className="micro">The short version</p>
        <div className="cpx-picks">
          <div className="cpx-pick">
            <h2>Pick {c.name} if</h2>
            <ul>
              {c.them.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="cpx-pick two">
            <h2>Pick TWO if</h2>
            <ul>
              {c.us.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cpx-section cpx-table-wrap">
        <div>
          <p className="micro">Side by side</p>
          <h2 className="display">
            Where they
            <br />
            differ.
          </h2>
          <p className="cpx-sub">
            Checked against both apps in {CHECKED}. Apps change, so <a href="/contact">tell us</a>{" "}
            if something&apos;s out of date.
          </p>
        </div>
        <div className="cpx-table" role="table" aria-label={`TWO compared with ${c.name}`}>
          <div className="cpx-row head" role="row">
            <span className="l" role="columnheader">Feature</span>
            <span className="h two" role="columnheader">TWO</span>
            <span className="h" role="columnheader">{c.name}</span>
          </div>
          {c.rows.map((r) => (
            <div className="cpx-row" role="row" key={r.label}>
              <span className="l" role="rowheader">{r.label}</span>
              <span className="cpx-cell" role="cell">
                <Dot mark={r.twoMark} />
                <span>
                  {r.two}
                  {r.twoNote && <small>{r.twoNote}</small>}
                </span>
              </span>
              <span className="cpx-cell" role="cell">
                <Dot mark={r.otherMark} />
                <span>
                  {r.other}
                  {r.otherNote && <small>{r.otherNote}</small>}
                </span>
              </span>
            </div>
          ))}
          <div className="cpx-legend">
            <span><i className="cpx-dot yes" aria-hidden="true" />Yes</span>
            <span><i className="cpx-dot part" aria-hidden="true" />Partly or paid</span>
            <span><i className="cpx-dot no" aria-hidden="true" />No</span>
          </div>
        </div>
      </section>

      <PageCta
        title="Try both."
        subtitle="Keep what fits."
        primary={{ label: "Start for free", href: "https://app.two.so/signup" }}
        secondary={{ label: "Try the demo", href: "/demo" }}
        note="Free for 30 docs. No card needed."
      />
    </div>
  );
}
