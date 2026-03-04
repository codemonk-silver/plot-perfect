// app/(main)/properties/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, List, Map } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SearchBar } from '../components/property/SearchBar';
import { PropertyCard } from '../components/property/PropertyCard';
import { FilterSidebar } from '../components/property/FilterSidebar';
import { CompareDrawer } from '../components/property/CompareDrawer';
import { usePropertyStore } from '../store/propertyStore';
import { mockProperties } from '../lib/mockData';
import { Button } from '../components/ui/Button';
import { staggerContainer, fadeInUp } from '../lib/animations';

export default function PropertiesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { viewMode, setViewMode, compareList } = usePropertyStore();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 lg: pt-36">
      {/* Header */}
      <div className="sticky top-16 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <Container className="py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Properties
                <span className="ml-2 text-sm font-sans font-normal text-slate-500">
                  245 results
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <SearchBar variant="compact" className="w-full md:w-96" />
              
              <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-slate-100 dark:bg-slate-800 text-amber-600' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-slate-100 dark:bg-slate-800 text-amber-600' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex gap-8">
          {/* Sidebar - Always visible on lg, toggleable on mobile */}
          <FilterSidebar 
            isOpen={isFilterOpen} 
            onClose={() => setIsFilterOpen(false)} 
          />

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {mockProperties.map((property, index) => (
                <motion.div key={property.id} variants={fadeInUp}>
                  <PropertyCard 
                    property={property} 
                    variant={viewMode === 'list' ? 'compact' : 'default'}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Load More Properties
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Compare Drawer */}
      {compareList.length > 0 && <CompareDrawer />}
    </div>
  );
}