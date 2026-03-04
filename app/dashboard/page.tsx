// app/dashboard/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Search, Calendar, TrendingUp, Eye } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { mockProperties } from '../lib/mockData';
import { PropertyCard } from '../components/property/PropertyCard';
import { fadeInUp, staggerContainer } from '../lib/animations';

const stats = [
  { label: 'Saved Properties', value: '12', icon: Heart, change: '+3 this week' },
  { label: 'Saved Searches', value: '5', icon: Search, change: 'Active alerts' },
  { label: 'Tour Requests', value: '3', icon: Calendar, change: '2 pending' },
  { label: 'Profile Views', value: '48', icon: Eye, change: '+12% this month' },
];

export default function DashboardPage() {
  const recentProperties = mockProperties.slice(0, 2);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          Welcome back, John
        </h1>
        <p className="text-slate-500 mt-1">Here's what's happening with your property search</p>
      </div>

      {/* Stats */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div key={stat.label} variants={fadeInUp}>
            <GlassCard intensity="low" className="p-6" hover>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Recently Viewed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} variant="compact" />
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Recommended For You</h2>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-2xl p-6">
          <p className="text-slate-700 dark:text-slate-300">
            Based on your saved searches, we found 8 new properties in Miami Beach that match your criteria.
          </p>
          <button className="mt-4 text-amber-600 dark:text-amber-400 font-medium hover:underline">
            View Recommendations →
          </button>
        </div>
      </div>
    </div>
  );
}