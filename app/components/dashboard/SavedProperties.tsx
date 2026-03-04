// components/dashboard/saved-properties.tsx
"use client"

import { motion } from "framer-motion"
import { Heart, Trash2, Pencil, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PropertyCard } from "../../components/property/PropertyCard"
import { usePropertyStore } from "../../store/propertyStore"
import { mockProperties } from "../../lib/mockData"
import { fadeInUp, staggerContainer } from "../../lib/animations"
import { Button } from "../../components/ui/Button"

export function SavedProperties() {
  const { savedProperties, toggleSaved } = usePropertyStore()
  const saved = mockProperties.filter((p) => savedProperties.includes(p.id))

  if (saved.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
        <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
          No saved properties yet
        </h3>
        <p className="text-slate-500 mb-4">Start browsing and save your favorite properties</p>
        <Link href="/properties">
          <Button>Browse Properties</Button>
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {saved.map((property) => (
        <motion.div key={property.id} variants={fadeInUp} className="relative group">
          <PropertyCard property={property} />
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => toggleSaved(property.id)}
              className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <Link
              href={`/properties/${property.id}`}
              className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}