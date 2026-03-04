// app/(main)/neighborhoods/page.tsx - COMPLETE REPLACEMENT
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { neighborhoods, formatPrice } from '../lib/neighborhoodData'; // IMPORT FROM SHARED
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function NeighborhoodsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
            alt="Neighborhoods"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Explore Neighborhoods
            </h1>
            <p className="text-lg text-slate-300">
              Discover the perfect community for your lifestyle. From vibrant urban districts to serene coastal enclaves.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Grid */}
      <Container className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {neighborhoods.map((neighborhood) => (
            <motion.div key={neighborhood.id} variants={fadeInUp}>
              <Link href={`/neighborhoods/${neighborhood.id}`}>
                <GlassCard intensity="low" className="h-full overflow-hidden group" hover>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      4.8
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {neighborhood.name}
                      </h3>
                      <p className="text-white/80 flex items-center gap-1 text-sm">
                        <MapPin className="w-4 h-4" />
                        {neighborhood.city}, {neighborhood.state}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                      {neighborhood.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {neighborhood.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity.label}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full"
                        >
                          {amenity.label}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {formatPrice(neighborhood.avgPrice)}
                        </p>
                        <p className="text-xs text-slate-500">Avg Price</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${neighborhood.priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {neighborhood.priceChange > 0 ? '+' : ''}{neighborhood.priceChange}%
                        </p>
                        <p className="text-xs text-slate-500">YoY Growth</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {neighborhood.listings}
                        </p>
                        <p className="text-xs text-slate-500">Listings</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white">
              Can't Find Your Perfect Neighborhood?
            </h2>
            <p className="text-slate-300">
              Our local experts can help you discover hidden gems and up-and-coming areas that match your lifestyle.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
              Connect with an Expert
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}