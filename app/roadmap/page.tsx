export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
            Public Roadmap
          </p>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            What we&apos;re building
          </h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
            A live look at what&apos;s deployed, what&apos;s in progress, and
            what&apos;s coming next. No fluff — just the work.
          </p>
        </div>

        {/* Three-column grid: Deployed / In Progress / Coming Soon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          {/* Deployed */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              <h2 className="font-semibold text-gray-800">Deployed</h2>
            </div>
            <div className="flex flex-col gap-3">

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">Favorites</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Pin your most-used docs to the top for instant access.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                  ✓ Done
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">Image upload</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Drop images and galleries directly into any doc.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                  ✓ Done
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Restore deleted files
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Recover any doc you&apos;ve deleted within the last 30 days.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                  ✓ Done
                </span>
              </div>

            </div>
          </div>

          {/* In Progress */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
              <h2 className="font-semibold text-gray-800">In progress</h2>
            </div>
            <div className="flex flex-col gap-3">

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">Templates</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Starter docs for meeting notes, product briefs, and more.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  In progress
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Onboarding flow
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  A guided first-run experience so new users hit the ground running.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  In progress
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Public knowledge base
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Publish a workspace as a public-facing knowledge base anyone can browse.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  In progress
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">Doc sharing</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Share a link to any doc — no account required to view.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  In progress
                </span>
              </div>

            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
              <h2 className="font-semibold text-gray-800">Coming soon</h2>
            </div>
            <div className="flex flex-col gap-3">

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">Export to PDF</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Download any doc as a clean, print-ready PDF.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  Up next
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Export to Markdown
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Take your docs anywhere — export as plain Markdown in one click.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  Planned
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Team workspaces
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Invite your team to a shared workspace and collaborate in real time.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  Planned
                </span>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Inline comments
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Highlight any text and leave a comment — Google Docs-style.
                </p>
                <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  Planned
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-12" />

        {/* Previously Deployed */}
        <div className="mb-16">
          <h2 className="font-semibold text-gray-700 mb-6">
            Previously deployed
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
            {[
              "Auth & accounts",
              "Rich text editor",
              "PWA & home screen",
              "Collections",
              "Notes scoped per user",
              "Autosave & save indicator",
              "Settings & appearance",
              "Dark & light mode",
              "Activity feed",
              "Planner",
              "Internal doc links",
              "Library",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-green-500">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-12" />

        {/* On the Horizon */}
        <div className="mb-20">
          <h2 className="font-semibold text-gray-700 mb-6">On the horizon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-[#eeecea] rounded-xl p-6">
              <h3 className="font-semibold text-gray-700 mb-1">Offline-first</h3>
              <p className="text-sm text-gray-500">
                Full functionality without an internet connection — always.
              </p>
            </div>

            <div className="bg-[#eeecea] rounded-xl p-6">
              <h3 className="font-semibold text-gray-700 mb-1">
                Billing &amp; Pro tier
              </h3>
              <p className="text-sm text-gray-500">
                Stripe-powered Pro plan with advanced features for power users.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#eeecea] rounded-2xl p-10 text-center">
          <p className="text-gray-600 mb-4">
            Have a feature request? We&apos;d love to hear it.
          </p>
          <a
            href="mailto:two@strevius.com"
            className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            Suggest a feature →
          </a>
        </div>

      </div>
    </main>
  );
}
