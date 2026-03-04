// components/property/filter-sidebar.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SlidersHorizontal, 
  X,
  ChevronDown,
  Home,
  Building,
  Warehouse,
  Castle,
  TreePine,
  Waves,
  Dumbbell,
  Car,
  Wifi
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { usePropertyStore } from '../../store/propertyStore';
import { cn } from '../../lib/utils';

const propertyTypes = [
  { id: 'house', label: 'House', icon: Home },
  { id: 'apartment', label: 'Apartment', icon: Building },
  { id: 'condo', label: 'Condo', icon: Building },
  { id: 'villa', label: 'Villa', icon: Castle },
  { id: 'penthouse', label: 'Penthouse', icon: Building },
  { id: 'commercial', label: 'Commercial', icon: Warehouse },
];

const amenities = [
  { id: 'pool', label: 'Swimming Pool', icon: Waves },
  { id: 'gym', label: 'Gym', icon: Dumbbell },
  { id: 'parking', label: 'Parking', icon: Car },
  { id: 'garden', label: 'Garden', icon: TreePine },
  { id: 'smart', label: 'Smart Home', icon: Wifi },
];

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const { filters, setFilters, resetFilters } = usePropertyStore();
  const [expandedSections, setExpandedSections] = useState<string[]>(['price', 'type']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const FilterSection = ({ 
    title, 
    id, 
    children 
  }: { 
    title: string; 
    id: string; 
    children: React.ReactNode 
  }) => (
    <div className="border-b border-slate-200 dark:border-slate-800 py-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center justify-between w-full text-left font-medium text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        {title}
        <ChevronDown className={cn(
          'w-4 h-4 transition-transform duration-200',
          expandedSections.includes(id) && 'rotate-180'
        )} />
      </button>
      <AnimatePresence>
        {expandedSections.includes(id) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - FIXED VERSION */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 lg:top-20 left-0 h-screen lg:h-[calc(100vh-80px)] w-80',
          'bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800',
          'z-0 overflow-y-auto transition-transform duration-300 ease-in-out',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={resetFilters}
                className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 font-medium"
              >
                Reset
              </button>
              <button 
                onClick={onClose} 
                className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <FilterSection title="Price Range" id="price">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs text-slate-500 mb-1.5 block font-medium">Min Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full h-10 pl-7 pr-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 border border-transparent focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-slate-500 mb-1.5 block font-medium">Max Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input
                      type="number"
                      placeholder="Any"
                      className="w-full h-10 pl-7 pr-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 border border-transparent focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>
              </div>
              <input 
                type="range" 
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                min="0"
                max="10000000"
                step="100000"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>$0</span>
                <span>$10M+</span>
              </div>
            </div>
          </FilterSection>

          {/* Property Type */}
          <FilterSection title="Property Type" id="type">
            <div className="grid grid-cols-2 gap-2">
              {propertyTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = filters.propertyType?.includes(type.id as any);
                
                return (
                  <button
                    key={type.id}
                    onClick={() => setFilters({ 
                      propertyType: isSelected
                        ? filters.propertyType?.filter(t => t !== type.id)
                        : [...(filters.propertyType || []), type.id as any]
                    })}
                    className={cn(
                      'flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200',
                      isSelected
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400'
                        : 'border-slate-200 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-900 hover:bg-slate-50 dark:hover:bg-slate-900'
                    )}
                  >
                    <Icon className={cn(
                      'w-6 h-6 transition-colors',
                      isSelected ? 'text-amber-500' : 'text-slate-400'
                    )} />
                    <span className="text-xs font-medium">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </FilterSection>

          {/* Bedrooms & Bathrooms */}
          <FilterSection title="Bedrooms & Bathrooms" id="rooms">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-600 dark:text-slate-400 mb-3 block font-medium">Bedrooms</label>
                <div className="flex gap-2">
                  {['Any', '1+', '2+', '3+', '4+', '5+'].map((num) => (
                    <button
                      key={num}
                      className="flex-1 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all font-medium"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-600 dark:text-slate-400 mb-3 block font-medium">Bathrooms</label>
                <div className="flex gap-2">
                  {['Any', '1+', '2+', '3+', '4+'].map((num) => (
                    <button
                      key={num}
                      className="flex-1 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all font-medium"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FilterSection>

          {/* Amenities */}
          <FilterSection title="Amenities" id="amenities">
            <div className="space-y-2">
              {amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <label 
                    key={amenity.id} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors group"
                  >
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-slate-300 text-amber-500 focus:ring-amber-500 focus:ring-2 cursor-pointer"
                    />
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-950 transition-colors">
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{amenity.label}</span>
                  </label>
                );
              })}
            </div>
          </FilterSection>

          {/* Apply Button - Mobile Only */}
          <div className="lg:hidden pt-6 sticky bottom-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 -mx-6 px-6 pb-6 mt-6">
            <Button 
              className="w-full bg-amber-500 hover:bg-amber-600 h-12 text-lg"
              onClick={onClose}
            >
              Show 245 Results
            </Button>
          </div>

          {/* Desktop Apply Button */}
          <div className="hidden lg:block pt-6">
            <Button className="w-full bg-amber-500 hover:bg-amber-600">
              Show 245 Results
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}