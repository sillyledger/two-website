"use client";

import { useState } from "react";

type Template = {
  key: string;
  title: string;
  category: string;
  catKey: string;
  desc: string;
  slug: string;
};

const TEMPLATES: Template[] = [
  {
    key: "meeting",
    title: "Meeting notes",
    category: "Business",
    catKey: "business",
    desc: "Agenda, decisions, and action items — all in one structured doc.",
    slug: "meeting-notes",
  },
  {
    key: "blog",
    title: "Blog post",
    category: "Creative",
    catKey: "creative",
    desc: "Hook, three sections, CTA, and a pre-publish checklist.",
    slug: "blog-post",
  },
  {
    key: "product",
    title: "Product brief",
    category: "Strategy",
    catKey: "strategy",
    desc: "Problem, users, goals, scope, and risk — in one tight doc.",
    slug: "product-brief",
  },
  {
    key: "weekly",
    title: "Weekly review",
    category: "Personal",
    catKey: "personal",
    desc: "Wins, blockers, priorities, and metrics — every week, sorted.",
    slug: "weekly-review",
  },
  {
    key: "okr",
    title: "OKR tracker",
    category: "Strategy",
    catKey: "strategy",
    desc: "Three objectives, key results, and progress targets — all tracked.",
    slug: "okr-tracker",
  },
];

const CATEGORIES = ["All", "Strategy", "Business", "Creative", "Personal", "Finance", "Research"];

export default function TemplatesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === active);

  return (
    <div className="features-frame">
      <section className="tp-hero">
        <p className="micro">Templates</p>
        <h1 className="display">
          Start faster.
          <br />
          Write better.
        </h1>
        <p>Free, structured docs for every workflow. Open any template in TWO and make it yours in seconds.</p>
      </section>

      <div className="tp-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`tp-filter${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="tp-count">
        {filtered.length} template{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="tp-empty">No templates in this category yet — check back soon.</p>
      ) : (
        <div className="tp-grid">
          {filtered.map((t) => (
            <a href={`https://app.two.so/new?template=${t.slug}`} className={`tp-card ${t.catKey}`} key={t.key}>
              <div className="tp-doc">
                <div className="tp-doc-bar">
                  <i /><i /><i />
                </div>
                <div className="tp-doc-title">{t.title}</div>
                <div className="tp-ln tp-w90" />
                <div className="tp-ln tp-w60" />
                <div className="tp-ln tp-w75" />
              </div>
              <div className="tp-card-body">
                <p className="tp-cat-label">{t.category}</p>
                <p className="tp-card-title">{t.title}</p>
                <p className="tp-card-desc">{t.desc}</p>
                <span className="tp-use">Use template →</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
