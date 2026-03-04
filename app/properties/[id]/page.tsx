// app/(main)/properties/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BedDouble, 
  Bath, 
  Maximize, 
  Calendar, 
  Share2, 
  Heart, 
  MapPin,
  Check,
  Home
} from 'lucide-react';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';
import { PropertyGallery } from '../../components/property/PropertyGallery';
import { MortgageCalculator } from '../../components/property/MortgageCalculator';
import { MapContainer } from '../../components/map/MapContainer';
import { mockProperties } from '../../lib/mockData';
import { formatPrice } from '../../lib/utils';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = mockProperties.find(p => p.id === id) || mockProperties[0];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Gallery */}
      <PropertyGallery images={property.images} />

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-2 space-y-8"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                    {property.title}
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {property.location.address}, {property.location.city}, {property.location.state}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 py-6 border-y border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                    <BedDouble className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{property.bedrooms}</p>
                    <p className="text-sm text-slate-500">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                    <Bath className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{property.bathrooms}</p>
                    <p className="text-sm text-slate-500">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                    <Maximize className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{property.squareFeet.toLocaleString()}</p>
                    <p className="text-sm text-slate-500">Square Feet</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{property.yearBuilt}</p>
                    <p className="text-sm text-slate-500">Year Built</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">About This Property</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {property.description}
              </p>
            </motion.div>

            {/* Amenities - Fixed Section */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <Check className="w-5 h-5 text-amber-500" />
                    <span className="text-slate-700 dark:text-slate-300">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floor Plans */}
            {property.floorPlans && (
              <motion.div variants={fadeInUp} className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Floor Plans</h2>
                <div className="space-y-4">
                  {property.floorPlans.map((plan, index) => (
                    <GlassCard key={index} className="p-6" intensity="low">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{plan.name}</h3>
                          <p className="text-slate-500">{plan.sqft.toLocaleString()} sq ft</p>
                        </div>
                        <Button variant="outline">View Plan</Button>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Map */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Location</h2>
              <div className="h-[400px] rounded-2xl overflow-hidden">
                <MapContainer 
                  center={property.location.coordinates} 
                  markers={[property]}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <GlassCard intensity="medium" className="p-6 space-y-6">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Price</p>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">
                    {formatPrice(property.price, property.currency)}
                  </p>
                  {property.listingType === 'rent' && (
                    <p className="text-slate-500">/month</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Button className="w-full h-14 text-lg bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/25">
                    Schedule Tour
                  </Button>
                  <Button variant="outline" className="w-full h-12">
                    Contact Agent
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Sarah Johnson</p>
                      <p className="text-sm text-slate-500">Premier Agent</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Mortgage Calculator */}
              <MortgageCalculator price={property.price} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}