// components/home/neighborhood-explorer.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin, TrendingUp, Home, ArrowRight } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';

const neighborhoods = [
  {
    id: '1',
    name: 'Beverly Hills',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    avgPrice: 4500000,
    priceChange: 12.5,
    listings: 45,
    description: 'Iconic luxury living with world-class shopping and dining',
  },
  {
    id: '2',
    name: 'SoHo',
    city: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    avgPrice: 3200000,
    priceChange: 8.3,
    listings: 32,
    description: 'Artistic charm meets upscale urban living',
  },
  {
    id: '3',
    name: 'South Beach',
    city: 'Miami',
    image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
    avgPrice: 2800000,
    priceChange: 15.2,
    listings: 67,
    description: 'Vibrant beachfront lifestyle with Art Deco architecture',
  },
  {
    id: '4',
    name: 'Pacific Heights',
    city: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    avgPrice: 5200000,
    priceChange: 5.8,
    listings: 23,
    description: 'Prestigious hilltop mansions with bay views',
  },
];

export function NeighborhoodExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = neighborhoods[activeIndex];

  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <span className="text-amber-600 dark:text-amber-400 font-medium text-sm tracking-wide uppercase">
          Explore
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
          Trending Neighborhoods
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Discover the most sought-after locations with rising property values and exceptional lifestyle amenities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* List */}
        <div className="space-y-4">
          {neighborhoods.map((hood, index) => (
            <motion.button
              key={hood.id}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-white shadow-xl'
                  : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
              whileHover={{ x: activeIndex === index ? 0 : 8 }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-accent">{hood.name}</h3>
                  <p className={`text-sm ${activeIndex === index ? 'text-white dark:text-white' : 'text-white'}`}>
                    {hood.city}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-accent">
                    ${(hood.avgPrice / 1000000).toFixed(1)}M
                  </p>
                  <p className={`text-sm flex items-center justify-end gap-1 ${
                    hood.priceChange > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    {hood.priceChange > 0 ? '+' : ''}{hood.priceChange}%
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard intensity="medium" className="h-full overflow-hidden" hover>
              <div className="relative h-64">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    {active.name}
                  </h3>
                  <p className="text-white/80 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {active.city}
                  </p>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <p className="text-slate-600 dark:text-slate-800 leading-relaxed">
                  {active.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <Home className="w-5 h-5 text-amber-500 mb-2" />
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{active.listings}</p>
                    <p className="text-sm text-slate-500">Active Listings</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-green-500 mb-2" />
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">+{active.priceChange}%</p>
                    <p className="text-sm text-slate-500">YoY Growth</p>
                  </div>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                  Explore {active.name}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}