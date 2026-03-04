// components/property/search-bar.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Home, 
  DollarSign, 
  BedDouble, 
  ChevronDown,
  Building,
  Warehouse,
  Castle
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';
import { cn } from '../../lib/utils';

const listingTypes = [
  { id: 'buy', label: 'Buy', icon: Home },
  { id: 'rent', label: 'Rent', icon: Building },
  { id: 'commercial', label: 'Commercial', icon: Warehouse },
  { id: 'luxury', label: 'Luxury', icon: Castle },
];

interface SearchBarProps {
  variant?: 'hero' | 'compact';
  className?: string;
}

export function SearchBar({ variant = 'compact', className }: SearchBarProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (activeTab !== 'buy') params.set('type', activeTab);
    router.push(`/properties?${params.toString()}`);
  };

  if (variant === 'hero') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
            {listingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={cn(
                  'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2',
                  activeTab === type.id
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <type.icon className="w-4 h-4" />
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <GlassCard intensity="high" className="p-2">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter location, neighborhood, or address..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-transparent text-white placeholder:text-white/50 focus:outline-none text-lg"
              />
            </div>
            
            <div className="hidden md:flex items-center gap-2 px-4 border-l border-white/20">
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <DollarSign className="w-4 h-4" />
                <span>Price</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 px-4 border-l border-white/20">
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <BedDouble className="w-4 h-4" />
                <span>Beds</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <Button 
              size="xl" 
              className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25"
              onClick={handleSearch}
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </GlassCard>

        <motion.button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="mt-4 text-white/60 hover:text-white text-sm flex items-center gap-1 mx-auto transition-colors"
        >
          Advanced Filters
          <ChevronDown className={cn('w-4 h-4 transition-transform', showAdvanced && 'rotate-180')} />
        </motion.button>

        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <GlassCard intensity="medium" className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Property Type', 'Min Price', 'Max Price', 'Square Feet'].map((label) => (
                    <div key={label} className="space-y-2">
                      <label className="text-white/60 text-sm">{label}</label>
                      <select className="w-full h-10 bg-white/10 border border-white/20 rounded-lg text-white px-3 focus:outline-none focus:border-amber-500">
                        <option>Any</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Compact variant for listing pages
  return (
    <div className={cn('w-full', className)}>
      <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full h-12 pl-10 pr-4 bg-slate-100 dark:bg-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-12 px-6">
            Filters
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <Button className="h-12 px-8 bg-amber-500 hover:bg-amber-600">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}