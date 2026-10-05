export type Mark = "yes" | "part" | "no" | "none";

export type CompareRow = {
  label: string;
  two: string;
  twoNote?: string;
  twoMark: Mark;
  other: string;
  otherNote?: string;
  otherMark: Mark;
};

export type CompareSlug = "notion" | "apple-notes" | "bear" | "obsidian";

export type Competitor = {
  slug: CompareSlug;
  name: string;
  intro: string;
  them: string[];
  us: string[];
  rows: CompareRow[];
};

export const CHECKED = "October 2026";

export const COMPETITORS: Competitor[] = [
  {
    slug: "notion",
    name: "Notion",
    intro: "Notion is an all-in-one workspace with databases, wikis and AI. TWO is only the writing part, done calmly.",
    them: [
      "You need databases, wikis and project tracking in one place",
      "A large team shares one workspace",
      "You want AI built into your docs",
    ],
    us: [
      "You mostly write, and want nothing else in the way",
      "You want two docs side by side in one window",
      "You want a flat price that never counts seats",
    ],
    rows: [
      { label: "Focus", two: "Writing", twoNote: "docs, notes, ideas", twoMark: "yes", other: "Everything", otherNote: "docs, databases, wikis", otherMark: "yes" },
      { label: "Two docs side by side", two: "Split view", twoMark: "yes", other: "Side peek", otherNote: "opens a page in a side panel", otherMark: "part" },
      { label: "Databases", two: "No", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "AI", two: "None, on purpose", twoMark: "none", other: "Built in", otherMark: "none" },
      { label: "Works offline", two: "Not yet", twoNote: "on the roadmap", twoMark: "no", other: "Yes, in its apps", otherNote: "pages you mark for offline", otherMark: "yes" },
      { label: "Apps", two: "Any browser", twoNote: "installs on Mac and iPad", twoMark: "part", other: "Mac, Windows, iPhone, Android, web", otherMark: "yes" },
      { label: "Team size", two: "You plus 2 on Pro", twoNote: "up to 10 with Team, soon", twoMark: "part", other: "Any size", otherMark: "yes" },
      { label: "Export", two: "PDF and Markdown", twoMark: "yes", other: "PDF, Markdown, HTML", otherMark: "yes" },
      { label: "Price", two: "Free for 30 docs", twoNote: "Pro $6 a month, flat", twoMark: "yes", other: "Free plan", otherNote: "paid plans priced per member", otherMark: "part" },
    ],
  },
  {
    slug: "apple-notes",
    name: "Apple Notes",
    intro: "Apple Notes is free, fast and already on your iPhone. TWO is for when a note turns into a document.",
    them: [
      "You want quick notes on your iPhone, free with your Apple ID",
      "You need handwriting, scanning or audio notes",
      "You need it to work offline",
    ],
    us: [
      "Your notes keep turning into longer docs",
      "You want two docs side by side in one window",
      "You want ideas, a canvas and tasks next to your writing",
    ],
    rows: [
      { label: "Formatting", two: "Headings, tables, callouts, code", twoMark: "yes", other: "Headings, tables, checklists", otherMark: "yes" },
      { label: "Two docs side by side", two: "Split view", twoMark: "yes", other: "Separate windows", otherNote: "on Mac and iPad", otherMark: "part" },
      { label: "Ideas, canvas, tasks", two: "Yes", twoNote: "Studio and Planner", twoMark: "yes", other: "No", otherMark: "no" },
      { label: "iPhone app", two: "No", twoNote: "made for bigger screens", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "In a browser", two: "Yes, any browser", twoMark: "yes", other: "Yes, at iCloud.com", otherMark: "yes" },
      { label: "Handwriting and scanning", two: "No", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "AI", two: "None, on purpose", twoMark: "none", other: "Apple Intelligence", otherNote: "on supported devices", otherMark: "none" },
      { label: "Works offline", two: "Not yet", twoNote: "on the roadmap", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "Export", two: "PDF and Markdown", twoMark: "yes", other: "PDF and Markdown", otherNote: "Markdown since iOS 26", otherMark: "yes" },
      { label: "Price", two: "Free for 30 docs", twoNote: "Pro $6 a month, flat", twoMark: "yes", other: "Free", otherNote: "uses your iCloud storage", otherMark: "yes" },
    ],
  },
  {
    slug: "bear",
    name: "Bear",
    intro: "Bear is a lovely Markdown note app for Apple devices. TWO is a visual editor for docs that runs in any browser.",
    them: [
      "You love Markdown and organizing with tags",
      "You live on iPhone, iPad and Mac and want native apps",
      "You want handwriting, sketches or encrypted notes",
    ],
    us: [
      "You would rather format with buttons and / than type syntax",
      "You want two docs side by side in one window",
      "You want to share a workspace and edit live",
    ],
    rows: [
      { label: "Editor", two: "Visual", twoNote: "type / for blocks", twoMark: "yes", other: "Markdown", otherNote: "styled as you type", otherMark: "yes" },
      { label: "Two docs side by side", two: "Split view", twoMark: "yes", other: "Separate windows", otherNote: "on Mac and iPad", otherMark: "part" },
      { label: "Organizing", two: "Folders and labels", twoMark: "yes", other: "Nested tags", otherMark: "yes" },
      { label: "iPhone app", two: "No", twoNote: "made for bigger screens", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "In a browser", two: "Yes, any browser", twoMark: "yes", other: "Web version in beta", otherMark: "part" },
      { label: "Edit together, live", two: "Yes, on Pro", twoNote: "you plus 2 people", twoMark: "part", other: "No", otherMark: "no" },
      { label: "Sync", two: "Included", twoMark: "yes", other: "With Pro", otherNote: "via iCloud", otherMark: "part" },
      { label: "AI", two: "None, on purpose", twoMark: "none", other: "None built in", otherMark: "none" },
      { label: "Export", two: "PDF and Markdown", twoMark: "yes", other: "PDF, Markdown and more", otherNote: "with Pro", otherMark: "part" },
      { label: "Price", two: "Free for 30 docs", twoNote: "Pro $6 a month", twoMark: "yes", other: "Free on one device", otherNote: "Pro $2.99 a month", otherMark: "yes" },
    ],
  },
  {
    slug: "obsidian",
    name: "Obsidian",
    intro: "Obsidian is a local-first Markdown knowledge base you shape with plugins. TWO is a ready-made writing app that syncs on its own.",
    them: [
      "You want your notes as files on your own disk",
      "You link notes together and like the graph view",
      "You enjoy customizing your tools with plugins",
    ],
    us: [
      "You want to open it and write, with no vault to set up",
      "You want sync included, not a paid add-on",
      "You want to share a workspace and edit live",
    ],
    rows: [
      { label: "Where notes live", two: "In your account", twoNote: "synced for you", twoMark: "yes", other: "Files on your device", otherNote: "Markdown in a vault", otherMark: "yes" },
      { label: "Editor", two: "Visual", twoNote: "type / for blocks", twoMark: "yes", other: "Markdown", otherNote: "with live preview", otherMark: "yes" },
      { label: "Two docs side by side", two: "Split view", twoMark: "yes", other: "Split panes", otherMark: "yes" },
      { label: "Linked notes and graph", two: "No", twoNote: "Canvas connects ideas", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "Plugins", two: "No", twoMark: "no", other: "Thousands", otherNote: "community made", otherMark: "yes" },
      { label: "Sync", two: "Included", twoMark: "yes", other: "Paid add-on", otherNote: "or set it up yourself", otherMark: "part" },
      { label: "Works offline", two: "Not yet", twoNote: "on the roadmap", twoMark: "no", other: "Yes", otherMark: "yes" },
      { label: "Edit together, live", two: "Yes, on Pro", twoNote: "you plus 2 people", twoMark: "part", other: "No", otherMark: "no" },
      { label: "Apps", two: "Any browser", twoNote: "installs on Mac and iPad", twoMark: "part", other: "Mac, Windows, Linux, iPhone, iPad, Android", otherMark: "yes" },
      { label: "Price", two: "Free for 30 docs", twoNote: "Pro $6 a month", twoMark: "yes", other: "Free app", otherNote: "Sync from $4 a month", otherMark: "yes" },
    ],
  },
];

export function getCompetitor(slug: CompareSlug): Competitor {
  const c = COMPETITORS.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown compare slug: ${slug}`);
  return c;
}
