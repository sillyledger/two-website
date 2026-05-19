"use client"

import { Plus, Home, Activity, Library, Archive, Settings, LogOut, Search } from "lucide-react"

export function AppMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
        {/* Window Chrome */}
        <div className="bg-zinc-800 h-12 flex items-center px-4 gap-3 border-b border-zinc-700">
          <div className="flex gap-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-zinc-400 ml-auto">john.local</span>
        </div>

        {/* App Content */}
        <div className="flex h-96 sm:h-[500px]">
          {/* Sidebar */}
          <div className="w-48 border-r border-zinc-800 bg-zinc-900 p-4 hidden sm:flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center text-xs font-bold">
                J
              </div>
              <span className="font-semibold text-white text-sm">John</span>
            </div>

            {/* Navigation */}
            <div className="space-y-1 flex-1">
              <div className="h-8 rounded-lg bg-zinc-800 text-white flex items-center px-3 cursor-pointer hover:bg-zinc-700 transition">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-xs font-medium">Home</span>
              </div>
              <div className="h-8 rounded-lg text-zinc-400 flex items-center px-3 cursor-pointer hover:bg-zinc-800 transition">
                <Activity className="w-4 h-4 mr-2" />
                <span className="text-xs">Activity</span>
              </div>
              <div className="h-8 rounded-lg text-zinc-400 flex items-center px-3 cursor-pointer hover:bg-zinc-800 transition">
                <Library className="w-4 h-4 mr-2" />
                <span className="text-xs">Library</span>
              </div>
            </div>

            {/* Folders */}
            <div className="mb-6 pb-6 border-t border-zinc-800 pt-4">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2">Folders</p>
              <div className="space-y-1">
                <div className="h-7 rounded-lg text-zinc-400 flex items-center px-3 cursor-pointer hover:bg-zinc-800 transition text-xs">
                  <span className="inline-block">Work</span>
                </div>
                <div className="h-7 rounded-lg text-zinc-400 flex items-center px-3 cursor-pointer hover:bg-zinc-800 transition text-xs">
                  <span className="inline-block">Personal</span>
                </div>
                <div className="h-7 rounded-lg text-zinc-400 flex items-center px-3 cursor-pointer hover:bg-zinc-800 transition text-xs">
                  <span className="inline-block">Ideas</span>
                </div>
              </div>
            </div>

            {/* Settings & User */}
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <div className="h-8 rounded-lg text-zinc-400 flex items-center px-3 cursor-pointer hover:bg-zinc-800 transition">
                <Settings className="w-4 h-4 mr-2" />
                <span className="text-xs">Settings</span>
              </div>
              <div className="h-12 rounded-lg bg-zinc-800 p-2 flex items-center gap-2 cursor-pointer hover:bg-zinc-700 transition">
                <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
                  J
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">john@email.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6 overflow-hidden flex flex-col bg-zinc-950">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-white font-semibold text-base sm:text-lg">Good morning, John</h2>
                <p className="text-xs sm:text-sm text-zinc-500">Here's what's on your mind today.</p>
              </div>
              <button className="flex items-center gap-2 h-9 px-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-100 transition text-xs sm:text-sm">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Note</span>
              </button>
            </div>

            {/* Recently Edited */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">Recently Edited</h3>
                <a href="#" className="text-xs text-zinc-500 hover:text-zinc-400">View all</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="aspect-square rounded-lg bg-purple-600 p-3 cursor-pointer hover:opacity-90 transition">
                  <p className="text-xs font-medium text-white leading-tight line-clamp-3">Product Roadmap Ideas</p>
                  <p className="text-[10px] text-white/60 mt-auto pt-2">2m ago</p>
                </div>
                <div className="aspect-square rounded-lg bg-cyan-600 p-3 cursor-pointer hover:opacity-90 transition">
                  <p className="text-xs font-medium text-white leading-tight line-clamp-3">Daily Journal – May 17</p>
                  <p className="text-[10px] text-white/60 mt-auto pt-2">1h ago</p>
                </div>
                <div className="aspect-square rounded-lg bg-orange-600 p-3 cursor-pointer hover:opacity-90 transition hidden sm:block">
                  <p className="text-xs font-medium text-white leading-tight line-clamp-3">Design Inspiration</p>
                  <p className="text-[10px] text-white/60 mt-auto pt-2">Yesterday</p>
                </div>
                <div className="aspect-square rounded-lg bg-emerald-600 p-3 cursor-pointer hover:opacity-90 transition hidden sm:block">
                  <p className="text-xs font-medium text-white leading-tight line-clamp-3">Book Notes – Atomic Habits</p>
                  <p className="text-[10px] text-white/60 mt-auto pt-2">2d ago</p>
                </div>
              </div>
            </div>

            {/* All Notes */}
            <div>
              <div className="flex items-center gap-3 mb-3 border-b border-zinc-800 pb-3">
                <h3 className="text-white font-semibold text-sm">All Notes</h3>
                <div className="flex gap-1 text-xs text-zinc-500">
                  <span className="px-2 py-1 rounded hover:bg-zinc-800 cursor-pointer">All</span>
                  <span className="px-2 py-1 rounded hover:bg-zinc-800 cursor-pointer">Notes</span>
                  <span className="px-2 py-1 rounded hover:bg-zinc-800 cursor-pointer">Ideas</span>
                </div>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-40 sm:max-h-48">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 cursor-pointer transition group">
                  <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">📄</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">Marketing Strategy Overview</p>
                    <p className="text-[10px] text-zinc-500 truncate">Outline of our marketing strategy and key channels to focus on.</p>
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400 flex-shrink-0">May 16, 2026</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 cursor-pointer transition group">
                  <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">📊</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">Content Ideas Pipeline</p>
                    <p className="text-[10px] text-zinc-500 truncate">A list of content ideas for the blog and social media.</p>
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400 flex-shrink-0">May 16, 2026</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 cursor-pointer transition group hidden sm:flex">
                  <div className="w-8 h-8 rounded bg-yellow-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">💭</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">Weekly Reflection</p>
                    <p className="text-[10px] text-zinc-500 truncate">What went well this week and what can be improved.</p>
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400 flex-shrink-0">May 15, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
