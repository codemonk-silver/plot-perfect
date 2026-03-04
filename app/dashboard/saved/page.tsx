// app/dashboard/saved/page.tsx - SIMPLIFIED VERSION
'use client'

import { SavedProperties } from '../../components/dashboard/SavedProperties'

export default function SavedPropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
            Saved Properties
          </h1>
          <p className="text-slate-500 mt-1">
            Manage your favorite properties
          </p>
        </div>
      </div>
      <SavedProperties />
    </div>
  )
}