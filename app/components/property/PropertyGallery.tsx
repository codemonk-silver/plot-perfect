// components/property/property-gallery.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Expand, 
  Play,
  Grid3X3
} from 'lucide-react';
import { useUIStore } from '../../store/uiStore';
import { cn } from '../../lib/utils';

interface PropertyGalleryProps {
  images: { url: string; alt: string }[];
  videoUrl?: string;
  virtualTourUrl?: string;
}

export function PropertyGallery({ images, videoUrl, virtualTourUrl }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openLightbox } = useUIStore();

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[60vh] min-h-[500px] bg-slate-900">
      {/* Main Image */}
      <div className="relative h-full">
        <Image
          src={images[activeIndex]?.url}
          alt={images[activeIndex]?.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevImage}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Top Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          {virtualTourUrl && (
            <button className="px-4 py-2 bg-amber-500 text-white rounded-full flex items-center gap-2 text-sm font-medium hover:bg-amber-600 transition-colors shadow-lg">
              <Play className="w-4 h-4" />
              3D Tour
            </button>
          )}
          <button
            onClick={() => openLightbox(images, activeIndex)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <Expand className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all',
                  index === activeIndex ? 'ring-2 ring-amber-500 ring-offset-2' : 'opacity-60 hover:opacity-100'
                )}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
            <button
              onClick={() => openLightbox(images, 0)}
              className="w-20 h-14 rounded-lg bg-slate-800 flex items-center justify-center text-white text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              <Grid3X3 className="w-4 h-4 mr-1" />
              +{images.length}
            </button>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-sm">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}