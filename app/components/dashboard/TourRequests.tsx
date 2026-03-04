// components/dashboard/tour-requests.tsx
"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, CheckCircle, XCircle, AlertCircle, RotateCcw } from "lucide-react"
import { useState } from "react"
import { GlassCard } from "../../components/ui/GlassCard"
import { Button } from "../../components/ui/Button"
import { fadeInUp, staggerContainer } from "../../lib/animations"
import { formatDate } from "../../lib/utils"

const initialTours = [
  {
    id: "1",
    property: "Modern Waterfront Villa",
    address: "123 Ocean Drive, Miami Beach, FL",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&q=80",
    date: "2024-02-15",
    time: "14:00",
    status: "confirmed",
    agent: "Sarah Johnson",
    agentImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    notes: "Looking forward to seeing the pool area",
  },
  {
    id: "2",
    property: "Penthouse with City Views",
    address: "456 Park Avenue, New York, NY",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=80",
    date: "2024-02-18",
    time: "10:30",
    status: "pending",
    agent: "Michael Chen",
    agentImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    notes: "Please confirm if parking is available",
  },
  {
    id: "3",
    property: "Contemporary Hillside Estate",
    address: "789 Mulholland Drive, Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=200&q=80",
    date: "2024-01-20",
    time: "15:00",
    status: "completed",
    agent: "Emily Davis",
    agentImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    notes: "Great tour, considering making an offer",
  },
]

const statusConfig = {
  confirmed: {
    icon: CheckCircle,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950",
    label: "Confirmed",
  },
  pending: {
    icon: AlertCircle,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950",
    label: "Pending",
  },
  completed: {
    icon: CheckCircle,
    color: "text-slate-500",
    bg: "bg-slate-100 dark:bg-slate-800",
    label: "Completed",
  },
  cancelled: {
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950",
    label: "Cancelled",
  },
}

export function TourRequests() {
  const [tours, setTours] = useState(initialTours)

  const cancelTour = (id: string) => {
    setTours((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "cancelled" } : t))
    )
  }

  const rescheduleTour = (id: string) => {
    // Open reschedule modal
    console.log("Reschedule", id)
  }

  const filteredTours = {
    upcoming: tours.filter((t) => ["confirmed", "pending"].includes(t.status)),
    past: tours.filter((t) => ["completed", "cancelled"].includes(t.status)),
  }

  return (
    <div className="space-y-8">
      {filteredTours.upcoming.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Upcoming Tours
          </h3>
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
            {filteredTours.upcoming.map((tour) => {
              const status = statusConfig[tour.status as keyof typeof statusConfig]
              const StatusIcon = status.icon

              return (
                <motion.div key={tour.id} variants={fadeInUp}>
                  <GlassCard intensity="low" className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={tour.image}
                          alt={tour.property}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                              {tour.property}
                            </h3>
                            <p className="text-slate-500 flex items-center gap-1 text-sm">
                              <MapPin className="w-4 h-4" />
                              {tour.address}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${status.bg} ${status.color}`}
                          >
                            <StatusIcon className="w-3 h-3" />
                            {status.label}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4 text-amber-500" />
                            {formatDate(tour.date)}
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Clock className="w-4 h-4 text-amber-500" />
                            {tour.time}
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <img
                              src={tour.agentImage}
                              alt={tour.agent}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            {tour.agent}
                          </div>
                        </div>

                        {tour.notes && (
                          <p className="text-sm text-slate-500 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                            Note: {tour.notes}
                          </p>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => rescheduleTour(tour.id)}
                          >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reschedule
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => cancelTour(tour.id)}
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      )}

      {filteredTours.past.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Past Tours
          </h3>
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4 opacity-60">
            {filteredTours.past.map((tour) => {
              const status = statusConfig[tour.status as keyof typeof statusConfig]
              const StatusIcon = status.icon

              return (
                <motion.div key={tour.id} variants={fadeInUp}>
                  <GlassCard intensity="low" className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={tour.image}
                          alt={tour.property}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                              {tour.property}
                            </h3>
                            <p className="text-slate-500 text-sm">{tour.address}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${status.bg} ${status.color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {status.label}
                          </span>
                        </div>

                        <p className="text-sm text-slate-400">
                          {formatDate(tour.date)} • {tour.time}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      )}

      {filteredTours.upcoming.length === 0 && filteredTours.past.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
            No tour requests
          </h3>
          <p className="text-slate-500 mb-4">Schedule a tour to see properties in person</p>
          <Button>Browse Properties</Button>
        </div>
      )}
    </div>
  )
}