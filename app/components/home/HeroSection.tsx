// components/home/hero-section.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SearchBar } from '../../components/property/SearchBar';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury home exterior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              Premium Real Estate
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Extraordinary Living
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Curated luxury properties in the world's most prestigious locations
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SearchBar variant="hero" />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">2,500+</span>
              <span>Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">150+</span>
              <span>Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">$2B+</span>
              <span>Sales Volume</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}