// components/dashboard/saved-searches.tsx
"use client"

import { motion } from "framer-motion"
import { Search, Bell, Trash2, Edit3, MapPin, Play, Pause } from "lucide-react"
import { useState } from "react"
import { GlassCard } from "../../components/ui/GlassCard"
import { Button } from "../../components/ui/Button"
import { fadeInUp, staggerContainer } from "../../lib/animations"

const initialSearches = [
  {
    id: "1",
    name: "Miami Beach Condos",
    location: "Miami Beach, FL",
    filters: { type: "condo", priceMax: 2000000, beds: 2 },
    alerts: true,
    results: 24,
    lastUpdated: "2 hours ago",
    frequency: "daily",
  },
  {
    id: "2",
    name: "LA Luxury Homes",
    location: "Los Angeles, CA",
    filters: { type: "house", priceMin: 5000000 },
    alerts: true,
    results: 12,
    lastUpdated: "1 day ago",
    frequency: "instant",
  },
  {
    id: "3",
    name: "NYC Penthouses",
    location: "New York, NY",
    filters: { type: "penthouse" },
    alerts: false,
    results: 8,
    lastUpdated: "3 days ago",
    frequency: "weekly",
  },
]

export function SavedSearches() {
  const [searches, setSearches] = useState(initialSearches)

  const toggleAlerts = (id: string) => {
    setSearches((prev) =>
      prev.map((s) => (s.id === id ? { ...s, alerts: !s.alerts } : s))
    )
  }

  const deleteSearch = (id: string) => {
    setSearches((prev) => prev.filter((s) => s.id !== id))
  }

  if (searches.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
        <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
          No saved searches
        </h3>
        <p className="text-slate-500 mb-4">Save your search criteria to get alerts</p>
        <Button>Create Search</Button>
      </div>
    )
  }

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
      {searches.map((search) => (
        <motion.div key={search.id} variants={fadeInUp}>
          <GlassCard intensity="low" className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {search.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                      search.alerts
                        ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    <Bell className="w-3 h-3" />
                    {search.alerts ? "Alerts On" : "Paused"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  {search.location}
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  {Object.entries(search.filters).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
                    >
                      {key}: {value}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-400 mt-3">
                  {search.results} results • Updated {search.lastUpdated} •{" "}
                  {search.frequency} alerts
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleAlerts(search.id)}
                >
                  {search.alerts ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button variant="outline" size="sm">
                  <Edit3 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => deleteSearch(search.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}