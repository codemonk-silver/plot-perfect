// types/property.ts
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  yearBuilt?: number;
  propertyType: 'house' | 'apartment' | 'condo' | 'villa' | 'penthouse' | 'commercial';
  listingType: 'sale' | 'rent';
  status: 'active' | 'pending' | 'sold' | 'off-market';
  amenities: string[];
  images: {
    url: string;
    alt: string;
    isPrimary?: boolean;
  }[];
  virtualTourUrl?: string;
  videoUrl?: string;
  floorPlans?: {
    name: string;
    url: string;
    sqft: number;
  }[];
  agentId: string;
  features: {
    parking?: number;
    garage?: boolean;
    pool?: boolean;
    gym?: boolean;
    smartHome?: boolean;
    waterfront?: boolean;
    view?: string;
  };
  nearbySchools?: {
    name: string;
    rating: number;
    distance: number;
    type: 'elementary' | 'middle' | 'high';
  }[];
  marketTrends?: {
    priceHistory: { date: string; price: number }[];
    estimatedValue: number;
    pricePerSqft: number;
  };
  createdAt: string;
  updatedAt: string;
  isFeatured?: boolean;
  isLuxury?: boolean;
  openHouse?: {
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface PropertySearchFilters {
  query?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: Property['propertyType'][];
  listingType?: Property['listingType'];
  amenities?: string[];
  minSqft?: number;
  maxSqft?: number;
  hasVirtualTour?: boolean;
  isOpenHouse?: boolean;
  isNew?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'sqft-desc';
}