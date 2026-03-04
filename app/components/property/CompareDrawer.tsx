// components/property/compare-drawer.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Check, Minus } from 'lucide-react';
import { usePropertyStore } from '../../store/propertyStore';
import { useUIStore } from '../../store/uiStore';
import { mockProperties } from '../../lib/mockData';
import { formatPrice } from '../../lib/utils';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';

export function CompareDrawer() {
  const { compareList, removeFromCompare, clearCompare } = usePropertyStore();
  const { isCompareOpen, setCompareOpen } = useUIStore();

  const comparedProperties = mockProperties.filter(p => compareList.includes(p.id));

  if (compareList.length === 0) return null;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        onClick={() => setCompareOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-6 py-3 bg-amber-500 text-white rounded-full shadow-xl shadow-amber-500/30 flex items-center gap-2 font-medium hover:bg-amber-600 transition-colors"
      >
        Compare ({compareList.length})
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {isCompareOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCompareOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 rounded-t-3xl shadow-2xl max-h-[80vh] overflow-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                      Compare Properties
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Comparing {comparedProperties.length} properties
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={clearCompare}>
                      Clear All
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => setCompareOpen(false)}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr>
                        <th className="text-left p-4 font-medium text-slate-500">Feature</th>
                        {comparedProperties.map((property) => (
                          <th key={property.id} className="p-4 min-w-[250px]">
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                              <Image
                                src={property.images[0]?.url}
                                alt={property.title}
                                fill
                                className="object-cover"
                              />
                              <button
                                onClick={() => removeFromCompare(property.id)}
                                className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                            <Link href={`/properties/${property.id}`} className="hover:text-amber-600 transition-colors">
                              <h3 className="font-semibold text-slate-900 dark:text-white text-left line-clamp-1">
                                {property.title}
                              </h3>
                            </Link>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Price</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4">
                            <span className="text-xl font-bold text-amber-600 dark:text-amber-400">
                              {formatPrice(p.price)}
                            </span>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Location</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4 text-slate-700 dark:text-slate-300">
                            {p.location.city}, {p.location.state}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Bedrooms</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{p.bedrooms}</span>
                              {comparedProperties[0].bedrooms !== p.bedrooms && (
                                p.bedrooms > comparedProperties[0].bedrooms ? (
                                  <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-400" />
                                )
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Bathrooms</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4 font-semibold">{p.bathrooms}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Square Feet</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4 font-semibold">
                            {p.squareFeet.toLocaleString()}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Property Type</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4 capitalize">{p.propertyType}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-500 font-medium">Year Built</td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4">{p.yearBuilt || 'N/A'}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4"></td>
                        {comparedProperties.map((p) => (
                          <td key={p.id} className="p-4">
                            <Link href={`/properties/${p.id}`}>
                              <Button className="w-full bg-amber-500 hover:bg-amber-600">
                                View Details
                              </Button>
                            </Link>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}