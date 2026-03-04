// components/home/luxury-spotlight.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';
import { mockProperties } from '../../lib/mockData';
import { formatPrice } from '../../lib/utils';

export function LuxurySpotlight() {
  const luxury = mockProperties.find(p => p.isLuxury) || mockProperties[0];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={luxury.images[0]?.url}
          alt="Luxury background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium border border-amber-500/30">
                Luxury Collection
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Exceptional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Living Redefined
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                Experience the pinnacle of luxury with our exclusive collection of world-class estates, penthouses, and waterfront villas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href={`/properties/${luxury.id}`}>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25">
                  Explore Property
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="mr-2 w-5 h-5" />
                Watch Film
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">$2.5B+</p>
                <p className="text-sm text-slate-400">Luxury Sales</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-sm text-slate-400">Global Markets</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-sm text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Property Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <GlassCard intensity="high" className="p-4" hover>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={luxury.images[0]?.url}
                  alt={luxury.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">
                    {formatPrice(luxury.price)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {luxury.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                {luxury.location.city}, {luxury.location.state}
              </p>
              <div className="flex gap-4 text-sm text-slate-400">
                <span>{luxury.bedrooms} Beds</span>
                <span>{luxury.bathrooms} Baths</span>
                <span>{luxury.squareFeet.toLocaleString()} Sqft</span>
              </div>
            </GlassCard>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/30"
            >
              <div className="text-center text-white">
                <p className="text-2xl font-bold">New</p>
                <p className="text-xs">Listing</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}