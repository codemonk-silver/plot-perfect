// components/property/property-card.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, BedDouble, Bath, Maximize, MapPin } from 'lucide-react';
import { Property } from '../../types/property';
import { formatPrice } from '../../lib/utils';
import { usePropertyStore } from '../../store/propertyStore';
import { imageZoom, cardHover } from '../../lib/animations';
import { Badge } from '../../components/ui/Badge';
import { cn } from '../../lib/utils';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured' | 'compact';
  index?: number;
}

export function PropertyCard({ property, variant = 'default', index = 0 }: PropertyCardProps) {
  const { savedProperties, toggleSaved, addToCompare, compareList } = usePropertyStore();
  const isSaved = savedProperties.includes(property.id);
  const isInCompare = compareList.includes(property.id);

  const cardContent = (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn(
        'group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300',
        variant === 'featured' ? 'h-[500px]' : 'h-full',
        variant === 'compact' && 'flex flex-row h-32'
      )}
    >
      {/* Image Container */}
      <div className={cn(
        'relative overflow-hidden',
        variant === 'compact' ? 'w-32 h-full shrink-0' : 'aspect-[4/3]'
      )}>
        <motion.div variants={imageZoom} className="w-full h-full">
          <Image
            src={property.images[0]?.url || '/images/placeholder.jpg'}
            alt={property.title}
            fill
            className="object-cover"
            sizes={variant === 'compact' ? '128px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.isFeatured && (
            <Badge className="bg-amber-500 text-white border-0">Featured</Badge>
          )}
          {property.isLuxury && (
            <Badge className="bg-purple-600 text-white border-0">Luxury</Badge>
          )}
          {property.openHouse && (
            <Badge variant="secondary" className="bg-white/90 text-slate-900">Open House</Badge>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleSaved(property.id);
            }}
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-lg',
              isSaved 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-slate-600 hover:bg-white'
            )}
          >
            <Heart className={cn('w-4 h-4', isSaved && 'fill-current')} />
          </button>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-2xl font-bold text-white">
            {formatPrice(property.price, property.currency)}
          </span>
          {property.listingType === 'rent' && (
            <span className="text-white/80 text-sm">/month</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        'p-4 flex flex-col',
        variant === 'compact' && 'flex-1 justify-center'
      )}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={cn(
            'font-serif font-semibold text-slate-900 dark:text-white line-clamp-1',
            variant === 'featured' ? 'text-xl' : 'text-lg'
          )}>
            {property.title}
          </h3>
          {variant !== 'compact' && (
            <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
              {formatPrice(property.price, property.currency)}
            </span>
          )}
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1 mb-3">
          <MapPin className="w-4 h-4" />
          {property.location.city}, {property.location.state}
        </p>

        {variant !== 'compact' && (
          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1">
              <BedDouble className="w-4 h-4" />
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-1">
              <Maximize className="w-4 h-4" />
              {property.squareFeet.toLocaleString()} sqft
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <Link href={`/properties/${property.id}`} className="block">
      {cardContent}
    </Link>
  );
}