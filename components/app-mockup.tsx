import { Home, Activity, BookOpen, Settings } from "lucide-react"

export function AppMockup() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xl shadow-stone-100">

        {/* Window Chrome */}
        <div className="bg-stone-100 h-10 flex items-center px-4 gap-2 border-b border-stone-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-xs text-stone-400 bg-white border border-stone-200 rounded-md px-3 py-0.5">
              app.two.so
            </span>
          </div>
        </div>

        {/* App Interior */}
        <div className="flex h-[420px] bg-stone-50">

          {/* Sidebar */}
          <div className="w-48 bg-stone-50 border-r border-stone-200 flex flex-col p-3 flex-shrink-0">

            {/* Logo */}
            <div className="flex items-center gap-2 px-2 mb-5">
              <div className="w-6 h-6 bg-stone-950 rounded-md flex items-center justify-center text-white font-serif text-xs">
                T
              </div>
              <span className="text-sm font-semibold text-stone-900">TWO</span>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col gap-0.5 flex-1">
              <div className="flex items-center gap-2 h-8 px-2.5 rounded-lg bg-white border border-stone-200 shadow-sm text-stone-900">
                <Home className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Home</span>
              </div>
              <div className="flex items-center gap-2 h-8 px-2.5 rounded-lg text-stone-400 hover:bg-white transition">
                <Activity className="w-3.5 h-3.5" />
                <span className="text-xs">Activity</span>
              </div>
              <div className="flex items-center gap-2 h-8 px-2.5 rounded-lg text-stone-400 hover:bg-white transition">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-xs">Library</span>
              </div>

              {/* Folders */}
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest px-2.5 pt-4 pb-1">Folders</p>
              <div className="flex items-center gap-2 h-7 px-2.5 rounded-lg text-stone-400 text-xs">📁 Work</div>
              <div className="flex items-center gap-2 h-7 px-2.5 rounded-lg text-stone-400 text-xs">📁 Personal</div>
              <div className="flex items-center gap-2 h-7 px-2.5 rounded-lg text-stone-400 text-xs">📁 Ideas</div>
            </div>

            {/* User */}
            <div className="mt-2 p-2 bg-white border border-stone-200 rounded-lg flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-semibold flex-shrink-0">
                J
              </div>
              <span className="text-[11px] text-stone-500 truncate">john@email.com</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-6 overflow-hidden bg-white">

            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-stone-900">Good morning, John</p>
                <p className="text-xs text-stone-400 mt-0.5">Here's what's on your mind today.</p>
              </div>
              <button className="flex items-center gap-1.5 h-8 px-3 bg-stone-950 text-white rounded-lg text-xs font-medium">
                <span>+</span> New Note
              </button>
            </div>

            {/* Recently Edited */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-semibold text-stone-900">Recently Edited</span>
                <span className="text-[11px] text-stone-400">View all</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { title: "Product Roadmap Ideas", time: "2m ago" },
                  { title: "Daily Journal – May 17", time: "1h ago" },
                  { title: "Design Inspiration", time: "Yesterday" },
                  { title: "Book Notes", time: "2d ago" },
                ].map((card, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-stone-100 border border-stone-200 p-3 flex flex-col justify-between">
                    <p className="text-[11px] font-medium text-stone-700 leading-snug">{card.title}</p>
                    <p className="text-[10px] text-stone-400">{card.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* All Notes */}
            <div>
              <span className="text-xs font-semibold text-stone-900 block mb-2.5">All Notes</span>
              <div className="flex flex-col gap-0.5">
                {[
                  { icon: "📄", bg: "bg-blue-50", title: "Marketing Strategy Overview", preview: "Outline of our marketing strategy and key channels.", date: "May 16" },
                  { icon: "📊", bg: "bg-green-50", title: "Content Ideas Pipeline", preview: "Blog and social media content ideas list.", date: "May 16" },
                  { icon: "💭", bg: "bg-yellow-50", title: "Weekly Reflection", preview: "What went well this week.", date: "May 15" },
                ].map((note, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-stone-50 transition group">
                    <div className={`w-7 h-7 rounded-lg ${note.bg} flex items-center justify-center text-xs flex-shrink-0`}>
                      {note.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-stone-800 truncate">{note.title}</p>
                      <p className="text-[10px] text-stone-400 truncate">{note.preview}</p>
                    </div>
                    <span className="text-[11px] text-stone-400 flex-shrink-0">{note.date}</span>
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
