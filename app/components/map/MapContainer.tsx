// components/map/map-container.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Property } from '../../types/property';
import { cn } from '../../lib/utils';

interface MapContainerProps {
  center: { lat: number; lng: number };
  markers?: Property[];
  zoom?: number;
  className?: string;
  onMarkerClick?: (property: Property) => void;
}

// Using Google Maps JavaScript API
export function MapContainer({ 
  center, 
  markers = [], 
  zoom = 13, 
  className,
  onMarkerClick 
}: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Google Maps script
    if (typeof window !== 'undefined' && !window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }]
          }
        ],
        disableDefaultUI: true,
        zoomControl: true,
      });
      setMap(newMap);
    }
  }, [isLoaded, center, zoom, map]);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((property) => {
        const marker = new window.google.maps.Marker({
          position: property.location.coordinates,
          map,
          icon: {
            url: '/images/marker.png', // Custom marker
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <img src="${property.images[0]?.url}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
              <h3 style="font-weight: bold; margin: 0;">$${(property.price / 1000000).toFixed(1)}M</h3>
              <p style="margin: 4px 0; color: #666;">${property.bedrooms} bd | ${property.bathrooms} ba</p>
              <p style="margin: 0; font-size: 12px; color: #999;">${property.location.address}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
          onMarkerClick?.(property);
        });
      });
    }
  }, [map, markers, onMarkerClick]);

  return (
    <div className={cn("relative w-full h-full bg-slate-100 rounded-2xl overflow-hidden", className)}>
      <div ref={mapRef} className="w-full h-full" />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="animate-pulse flex flex-col items-center gap-2 text-slate-400">
            <MapPin className="w-8 h-8" />
            <span className="text-sm">Loading map...</span>
          </div>
        </div>
      )}

      {/* Map Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <div className="pointer-events-auto bg-white dark:bg-slate-900 rounded-lg shadow-lg p-2 flex gap-2">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Fallback/Loading component
export function MapSkeleton() {
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse flex items-center justify-center">
      <MapPin className="w-8 h-8 text-slate-300" />
    </div>
  );
}