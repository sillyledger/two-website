"use client";

import { useState } from "react";
import { PageCta } from "@/components/page-cta";

type Template = {
  title: string;
  category: string;
  color: string;
  desc: string;
  slug: string;
  sections: [string, string, string];
};

const TEMPLATES: Template[] = [
  {
    title: "Meeting notes",
    category: "Business",
    color: "#c98a5e",
    desc: "Agenda, decisions, and action items, all in one structured doc.",
    slug: "meeting-notes",
    sections: ["Agenda", "Decisions made", "Action items"],
  },
  {
    title: "Blog post",
    category: "Creative",
    color: "#8f89e6",
    desc: "Hook, three sections, CTA, and a pre-publish checklist.",
    slug: "blog-post",
    sections: ["Hook", "The problem", "Your main point"],
  },
  {
    title: "Product brief",
    category: "Strategy",
    color: "#6ec39a",
    desc: "Problem, users, goals, scope, and risk, in one tight doc.",
    slug: "product-brief",
    sections: ["Problem statement", "Target users", "Goals"],
  },
  {
    title: "Weekly review",
    category: "Personal",
    color: "#5b9bd6",
    desc: "Wins, blockers, priorities, and metrics. Every week, sorted.",
    slug: "weekly-review",
    sections: ["Wins this week", "What didn't go well", "Next week priorities"],
  },
  {
    title: "OKR tracker",
    category: "Strategy",
    color: "#6ec39a",
    desc: "Three objectives, key results, and progress targets, all tracked.",
    slug: "okr-tracker",
    sections: ["Objective 1", "Objective 2", "Objective 3"],
  },
  {
    title: "Competitor analysis",
    category: "Research",
    color: "#e0a44d",
    desc: "Compare competitors side by side: strengths, weaknesses, and pricing at a glance.",
    slug: "competitor-analysis",
    sections: ["Overview", "Key takeaways", "Opportunities"],
  },
  {
    title: "Podcast episode",
    category: "Creative",
    color: "#8f89e6",
    desc: "Plan an episode end to end: outline, guest notes, and show notes ready to publish.",
    slug: "podcast-episode",
    sections: ["Episode outline", "Guest bio", "Key questions to ask"],
  },
];

const CATEGORIES = ["All", "Business", "Creative", "Strategy", "Personal", "Research"];

const LINE_WIDTHS = ["86%", "70%", "78%"];

export function TemplatesClient() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === active);

  return (
    <div className="features-frame">
      <section className="tq-hero">
        <div>
          <p className="micro">Templates</p>
          <h1 className="display">
            Start faster.
            <br />
            <span>Write better.</span>
          </h1>
        </div>
        <div className="tq-hero-r">
          <p>Structured docs for the things you write most. Open any template in TWO and make it yours in seconds.</p>
          <p className="tq-fine">{TEMPLATES.length} templates · Free on every plan</p>
        </div>
      </section>

      <div className="tq-filters">
        <div className="tq-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tq-pill${active === cat ? " on" : ""}`}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="tq-count">
          {filtered.length} template{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="tq-grid">
        {filtered.map((t) => (
          <a href={`https://app.two.so/new?template=${t.slug}`} className="tq-card" key={t.slug}>
            <div className="tq-prev" aria-hidden="true">
              <b>{t.title}</b>
              {t.sections.map((s, i) => (
                <div key={s}>
                  <p className="tq-h">{s}</p>
                  <div className="tq-ln" style={{ width: LINE_WIDTHS[i] }} />
                </div>
              ))}
            </div>
            <div className="tq-body">
              <span className="tq-cat">
                <i style={{ background: t.color }} />
                {t.category}
              </span>
              <span className="tq-title">{t.title}</span>
              <span className="tq-desc">{t.desc}</span>
              <span className="tq-use">Use template →</span>
            </div>
          </a>
        ))}

        {active === "All" && (
          <a href="https://app.two.so/new?template=blank" className="tq-card blank">
            <div className="tq-prev plus" aria-hidden="true">+</div>
            <div className="tq-body">
              <span className="tq-cat">
                <i style={{ background: "#5a5a64" }} />
                Blank
              </span>
              <span className="tq-title">Start from scratch</span>
              <span className="tq-desc">An empty doc. Nothing to delete, nothing to set up.</span>
              <span className="tq-use">New doc →</span>
            </div>
          </a>
        )}
      </div>

      <PageCta
        title="Pick a template."
        subtitle="Start writing in seconds."
        primary={{ label: "Start writing free", href: "https://app.two.so/signup" }}
        secondary={{ label: "How templates work", href: "/resources/help/getting-started/using-templates" }}
        note="Every template is free on every plan."
      />
    </div>
  );
}
