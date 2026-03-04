// app/(main)/neighborhoods/[id]/page.tsx - COMPLETE REPLACEMENT
'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  TrendingUp, 
  Home, 
  ArrowLeft,
  School,
  Train,
  TreePine,
  ShoppingBag,
  Utensils,
  Dumbbell
} from 'lucide-react';
import { Container } from '../../components/layout/Container';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';
import { PropertyCard } from '../../components/property/PropertyCard';
import { MapContainer } from '../../components/map/MapContainer';
import { mockProperties } from '../../lib/mockData';
import { neighborhoods, getNeighborhoodById, formatPrice } from '../../lib/neighborhoodData'; // IMPORT FROM SHARED
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { notFound } from 'next/navigation';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  School,
  Train,
  TreePine,
  ShoppingBag,
  Utensils,
  Dumbbell,
  Building: Home,
  Waves: MapPin,
  Sun: MapPin,
  Moon: MapPin,
  Shield: MapPin,
  Car: MapPin,
  Mountain: MapPin,
  Palette: MapPin,
  Music: MapPin,
  GraduationCap: School,
};

export default function NeighborhoodDetailPage() {
  const { id } = useParams();
  const neighborhood = getNeighborhoodById(id as string);

  if (!neighborhood) {
    notFound();
  }
  
  // Filter properties in this area (mock logic)
  const areaProperties = mockProperties.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Hero Gallery */}
      <div className="relative h-[50vh]">
        <Image
          src={neighborhood.image}
          alt={neighborhood.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        
        <Container className="relative z-10 h-full flex flex-col justify-end pb-12">
          <Link 
            href="/neighborhoods" 
            className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Neighborhoods
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">
              {neighborhood.name}
            </h1>
            <p className="text-xl text-white/80 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {neighborhood.city}, {neighborhood.state}
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <GlassCard intensity="low" className="p-4 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {formatPrice(neighborhood.avgPrice)}
                </p>
                <p className="text-sm text-slate-500">Avg Home Price</p>
              </GlassCard>
              <GlassCard intensity="low" className="p-4 text-center">
                <p className={`text-2xl font-bold ${neighborhood.priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {neighborhood.priceChange > 0 ? '+' : ''}{neighborhood.priceChange}%
                </p>
                <p className="text-sm text-slate-500">YoY Price Change</p>
              </GlassCard>
              <GlassCard intensity="low" className="p-4 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{neighborhood.listings}</p>
                <p className="text-sm text-slate-500">Active Listings</p>
              </GlassCard>
              <GlassCard intensity="low" className="p-4 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{neighborhood.stats.walkScore}</p>
                <p className="text-sm text-slate-500">Walk Score</p>
              </GlassCard>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                About {neighborhood.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {neighborhood.description}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {neighborhood.longDescription}
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Lifestyle & Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {neighborhood.amenities.map((amenity) => {
                  const Icon = iconMap[amenity.icon] || MapPin;
                  return (
                    <GlassCard key={amenity.label} intensity="low" className="p-4">
                      <Icon className="w-8 h-8 text-amber-500 mb-3" />
                      <h3 className="font-semibold text-slate-900 dark:text-white">{amenity.label}</h3>
                      <p className="text-sm text-slate-500">{amenity.desc}</p>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>

            {/* Market Trends */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Market Trends
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Days on Market</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {neighborhood.marketTrends.avgDaysOnMarket}
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Price/Sqft</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {neighborhood.marketTrends.pricePerSqft}
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Inventory</p>
                  <p className="text-xl font-bold text-green-500">
                    {neighborhood.marketTrends.inventoryChange}
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Demand</p>
                  <p className="text-xl font-bold text-amber-500">
                    {neighborhood.marketTrends.buyerDemand}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Properties */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  Homes in {neighborhood.name}
                </h2>
                <Link href="/properties">
                  <Button variant="outline">View All</Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {areaProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Location
              </h2>
              <div className="h-[400px] rounded-2xl overflow-hidden">
                <MapContainer 
                  center={neighborhood.coordinates}
                  zoom={14}
                />
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Neighborhood Stats */}
              <GlassCard intensity="medium" className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Neighborhood Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Population</span>
                    <span className="font-medium text-slate-900 dark:text-white">{neighborhood.stats.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Median Age</span>
                    <span className="font-medium text-slate-900 dark:text-white">{neighborhood.stats.medianAge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Median Income</span>
                    <span className="font-medium text-slate-900 dark:text-white">{neighborhood.stats.medianIncome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">School Rating</span>
                    <span className="font-medium text-green-500">{neighborhood.stats.schoolRating}/10</span>
                  </div>
                </div>
              </GlassCard>

              {/* CTA */}
              <GlassCard intensity="low" className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Interested in {neighborhood.name}?
                </h3>
                <p className="text-sm text-slate-500">
                  Connect with a local specialist who can guide you through the market.
                </p>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                  Connect with Agent
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Tour
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}