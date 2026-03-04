// app/dashboard/searches/page.tsx - SIMPLIFIED VERSION
'use client'

import { SavedSearches } from '../../components/dashboard/SavedSearches'

export default function SavedSearchesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
            Saved Searches
          </h1>
          <p className="text-slate-500 mt-1">
            Manage your search alerts
          </p>
        </div>
      </div>
      <SavedSearches />
    </div>
  )
}