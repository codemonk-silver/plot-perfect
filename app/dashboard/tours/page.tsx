// app/dashboard/tours/page.tsx - SIMPLIFIED VERSION
'use client'

import { TourRequests } from '../../components/dashboard/TourRequests'

export default function TourRequestsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
          Tour Requests
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your property viewings
        </p>
      </div>
      <TourRequests />
    </div>
  )
}