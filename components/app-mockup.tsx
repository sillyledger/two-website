"use client"

export function AppMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
        {/* Window Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-96">
          {/* Sidebar */}
          <div className="w-64 border-r border-zinc-800 bg-zinc-900/50 p-6 hidden lg:block">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-black">J</span>
              </div>
              <span className="font-semibold text-white">John</span>
            </div>

            {/* Navigation */}
            <div className="space-y-2 mb-8">
              <div className="h-10 px-3 rounded-lg bg-zinc-700 flex items-center">
                <span className="text-sm text-white">Home</span>
              </div>
              <div className="h-10 px-3 rounded-lg flex items-center text-zinc-400">
                <span className="text-sm">Activity</span>
              </div>
              <div className="h-10 px-3 rounded-lg flex items-center text-zinc-400">
                <span className="text-sm">Library</span>
              </div>
            </div>

            {/* Folders */}
            <div className="mb-8">
              <div className="text-xs uppercase text-zinc-500 font-semibold mb-3 px-3">Folders</div>
              <div className="space-y-1">
                <div className="h-8 px-3 rounded flex items-center text-zinc-300 text-sm">Work</div>
                <div className="h-8 px-3 rounded flex items-center text-zinc-400 text-sm">Personal</div>
                <div className="h-8 px-3 rounded flex items-center text-zinc-400 text-sm">Ideas</div>
                <div className="h-8 px-3 rounded flex items-center text-zinc-400 text-sm">Journal</div>
                <div className="h-8 px-3 rounded flex items-center text-zinc-400 text-sm">Archive</div>
              </div>
            </div>

            {/* Settings & Profile */}
            <div className="border-t border-zinc-800 pt-6 space-y-3">
              <div className="h-8 px-3 rounded flex items-center text-zinc-400 text-sm">Settings</div>
              <div className="flex items-center gap-2 px-3">
                <div className="w-8 h-8 rounded-full bg-purple-600" />
                <div>
                  <div className="text-xs font-medium text-white">John</div>
                  <div className="text-xs text-zinc-500">john@email.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Good morning, John</h2>
                <p className="text-zinc-400">Here's what's on your mind today.</p>
              </div>
              <button className="h-10 px-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-100 transition text-sm">
                + New Note
              </button>
            </div>

            {/* Recently Edited Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Recently Edited</h3>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition">View all</a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { color: 'bg-purple-600', title: 'Product Roadmap Ideas', desc: 'Some ideas for the next quarter roadmap that could bring more value to users...', date: '2m ago' },
                  { color: 'bg-cyan-600', title: 'Daily Journal – May 17', desc: 'Today was a productive day. Focused on deep work in the morning and...', date: '1h ago' },
                  { color: 'bg-orange-600', title: 'Design Inspiration', desc: 'Beatiful layouts and interaction patterns from my favorite apps.', date: 'Yesterday' },
                  { color: 'bg-emerald-600', title: 'Book Notes – Atomic Habits', desc: 'Key takeaways from Chapter 3. Small changes compound over time...', date: '2d ago' }
                ].map((item, i) => (
                  <div key={i} className={`${item.color} rounded-lg p-4 flex flex-col justify-between min-h-40`}>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-white/70 line-clamp-2">{item.desc}</p>
                    </div>
                    <p className="text-xs text-white/50 mt-4">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* All Notes Section */}
            <div>
              <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
                <button className="text-white font-semibold border-b-2 border-white pb-4 -mb-4">All</button>
                <button className="text-zinc-400 hover:text-white transition pb-4 -mb-4">Notes</button>
                <button className="text-zinc-400 hover:text-white transition pb-4 -mb-4">Ideas</button>
                <button className="text-zinc-400 hover:text-white transition pb-4 -mb-4">Journal</button>
              </div>

              <div className="space-y-3">
                {[
                  { icon: '📋', title: 'Marketing Strategy Overview', desc: 'Outline of our Q2 marketing strategy and key channels to focus on.', date: 'May 16, 2026' },
                  { icon: '💡', title: 'Content Ideas Pipeline', desc: 'A list of content ideas for the blog and social media.', date: 'May 16, 2026' },
                  { icon: '📝', title: 'Weekly Reflection', desc: 'What went well this week and what can be improved.', date: 'May 15, 2026' },
                  { icon: '📌', title: 'Meeting Notes – May 15', desc: 'Notes from the product team sync. Discussed onboarding flow and user feedback.', date: 'May 15, 2026' }
                ].map((note, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-zinc-800/50 rounded-lg transition cursor-pointer group">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-xl">{note.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-white font-medium group-hover:text-white transition">{note.title}</h4>
                        <p className="text-sm text-zinc-400">{note.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">{note.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
