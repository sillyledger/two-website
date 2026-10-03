"use client";

import { useState } from "react";
import Link from "next/link";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  seo_description: string | null;
  published_at: string | null;
};

function formatMonthYear(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category).filter((c): c is string => !!c)))];
  const featured = posts[0];
  const rows = active === "All" ? posts.slice(1) : posts.filter((p) => p.category === active);
  const count = active === "All" ? posts.length : rows.length;

  return (
    <>
      {active === "All" && featured && (
        <Link href={`/blog/${featured.slug}`} className="bx-featured">
          <div className="bx-featured-l">
            <div className="bx-featured-meta">
              {featured.category && <span className="bx-cat">{featured.category}</span>}
              <span className="bx-latest">
                Latest{featured.published_at ? ` · ${formatMonthYear(featured.published_at)}` : ""}
              </span>
            </div>
            <span className="display bx-featured-t">{featured.title}</span>
          </div>
          <div className="bx-featured-r">
            {featured.seo_description && <span className="bx-featured-d">{featured.seo_description}</span>}
            <span className="bx-read">Read the post →</span>
          </div>
        </Link>
      )}

      {categories.length > 2 && (
        <div className="bx-filters">
          <div className="bx-pills">
            {categories.map((c) => (
              <button
                key={c}
                className={`bx-pill${active === c ? " on" : ""}`}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>
          <span className="bx-count">
            {count} post{count !== 1 ? "s" : ""}
          </span>
        </div>
      )}

      {rows.length > 0 && (
        <div className="bx-list">
          {rows.map((p) => (
            <Link href={`/blog/${p.slug}`} className="bx-row" key={p.id}>
              <span className="bx-date">{p.published_at ? formatMonthYear(p.published_at) : ""}</span>
              <span className="bx-main">
                <span className="bx-row-meta">
                  {p.published_at ? formatMonthYear(p.published_at) : ""}
                  {p.published_at && p.category ? " · " : ""}
                  {p.category ?? ""}
                </span>
                <b className="bx-row-t">{p.title}</b>
                {p.seo_description && <span className="bx-row-d">{p.seo_description}</span>}
              </span>
              <span className="bx-row-c">{p.category ?? ""}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
