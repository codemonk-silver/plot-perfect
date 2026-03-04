// components/home/featured-listings.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PropertyCard } from '../../components/property/PropertyCard';
import { mockProperties } from '../../lib/mockData';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import { Button } from '../../components/ui/Button';

export function FeaturedListings() {
  const featured = mockProperties.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <span className="text-amber-600 dark:text-amber-400 font-medium text-sm tracking-wide uppercase">
            Featured
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Curated For You
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            Handpicked premium properties that define luxury living
          </p>
        </motion.div>

        <Link href="/properties" className="hidden md:block">
          <Button variant="ghost" className="group">
            View All
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {featured.map((property, index) => (
          <motion.div key={property.id} variants={fadeInUp}>
            <PropertyCard property={property} index={index} />
          </motion.div>
        ))}
      </motion.div>

      <div className="md:hidden text-center">
        <Link href="/properties">
          <Button variant="outline" className="w-full">
            View All Properties
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}