// lib/neighborhoods-data.ts
export interface NeighborhoodData {
  id: string;
  name: string;
  city: string;
  state: string;
  image: string;
  gallery: string[];
  avgPrice: number;
  priceChange: number;
  listings: number;
  description: string;
  longDescription: string;
  coordinates: { lat: number; lng: number };
  stats: {
    population: string;
    medianAge: string;
    medianIncome: string;
    walkScore: number;
    transitScore: number;
    schoolRating: number;
  };
  amenities: {
    icon: string;
    label: string;
    desc: string;
  }[];
  marketTrends: {
    avgDaysOnMarket: number;
    pricePerSqft: string;
    inventoryChange: string;
    buyerDemand: string;
  };
}

export const neighborhoods: NeighborhoodData[] = [
  {
    id: '1',
    name: 'Beverly Hills',
    city: 'Los Angeles',
    state: 'CA',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    ],
    avgPrice: 4500000,
    priceChange: 12.5,
    listings: 45,
    description: 'Beverly Hills represents the pinnacle of luxury living. Known worldwide for its palm-lined streets, celebrity homes, and the iconic Rodeo Drive shopping district.',
    longDescription: 'From the lush gardens of Beverly Gardens Park to the architectural masterpieces in the Flats and the Trousdale Estates, Beverly Hills offers diverse luxury living options. The city is renowned for its excellent schools, world-class dining, and proximity to Hollywood while maintaining a distinct identity of exclusivity.',
    coordinates: { lat: 34.0736, lng: -118.4004 },
    stats: {
      population: '32,701',
      medianAge: '45',
      medianIncome: '$103,403',
      walkScore: 76,
      transitScore: 55,
      schoolRating: 9.2,
    },
    amenities: [
      { icon: 'ShoppingBag', label: 'Rodeo Drive', desc: 'World-class shopping' },
      { icon: 'Utensils', label: 'Fine Dining', desc: 'Michelin-starred restaurants' },
      { icon: 'School', label: 'Top Schools', desc: 'Beverly Hills Unified' },
      { icon: 'TreePine', label: 'Parks', desc: 'Beverly Gardens Park' },
      { icon: 'Dumbbell', label: 'Fitness', desc: 'Equinox, private clubs' },
      { icon: 'Train', label: 'Transit', desc: 'Easy airport access' },
    ],
    marketTrends: {
      avgDaysOnMarket: 28,
      pricePerSqft: '$1,850',
      inventoryChange: '+15%',
      buyerDemand: 'Very High',
    },
  },
  {
    id: '2',
    name: 'SoHo',
    city: 'New York',
    state: 'NY',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800&q=80',
    ],
    avgPrice: 3200000,
    priceChange: 8.3,
    listings: 32,
    description: 'Artistic charm meets upscale urban living. Cast-iron architecture, cobblestone streets, and world-renowned art galleries define this Manhattan neighborhood.',
    longDescription: 'SoHo has transformed from an industrial district to one of Manhattan\'s most desirable neighborhoods. The iconic cast-iron buildings house luxury lofts, flagship stores, and world-class galleries. The neighborhood offers an unmatched combination of historic character and modern luxury.',
    coordinates: { lat: 40.7233, lng: -74.0030 },
    stats: {
      population: '18,000',
      medianAge: '38',
      medianIncome: '$125,000',
      walkScore: 98,
      transitScore: 100,
      schoolRating: 8.5,
    },
    amenities: [
      { icon: 'Palette', label: 'Art Galleries', desc: 'World-renowned art scene' },
      { icon: 'ShoppingBag', label: 'Boutiques', desc: 'Designer flagship stores' },
      { icon: 'Utensils', label: 'Cafes', desc: 'Trendy restaurants & bars' },
      { icon: 'Train', label: 'Subway', desc: 'Multiple line access' },
      { icon: 'Building', label: 'Lofts', desc: 'Historic cast-iron buildings' },
      { icon: 'Moon', label: 'Nightlife', desc: 'Vibrant evening scene' },
    ],
    marketTrends: {
      avgDaysOnMarket: 45,
      pricePerSqft: '$2,400',
      inventoryChange: '-5%',
      buyerDemand: 'High',
    },
  },
  {
    id: '3',
    name: 'South Beach',
    city: 'Miami',
    state: 'FL',
    image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
      'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80',
    ],
    avgPrice: 2800000,
    priceChange: 15.2,
    listings: 67,
    description: 'Vibrant beachfront lifestyle with Art Deco architecture, world-class nightlife, and pristine beaches.',
    longDescription: 'South Beach offers a unique blend of historic Art Deco architecture and modern luxury. The neighborhood is famous for its colorful lifeguard stands, trendy Ocean Drive, and world-class dining. Residents enjoy beachfront living with easy access to Miami\'s vibrant cultural scene.',
    coordinates: { lat: 25.7907, lng: -80.1300 },
    stats: {
      population: '39,000',
      medianAge: '42',
      medianIncome: '$78,000',
      walkScore: 89,
      transitScore: 65,
      schoolRating: 7.8,
    },
    amenities: [
      { icon: 'Waves', label: 'Beach', desc: 'Pristine sandy beaches' },
      { icon: 'Building', label: 'Art Deco', desc: 'Historic architecture' },
      { icon: 'Utensils', label: 'Dining', desc: 'World-class restaurants' },
      { icon: 'Music', label: 'Nightlife', desc: 'Clubs & entertainment' },
      { icon: 'Dumbbell', label: 'Fitness', desc: 'Beachfront workouts' },
      { icon: 'Palette', label: 'Culture', desc: 'Art Basel, museums' },
    ],
    marketTrends: {
      avgDaysOnMarket: 35,
      pricePerSqft: '$1,200',
      inventoryChange: '+22%',
      buyerDemand: 'Very High',
    },
  },
  {
    id: '4',
    name: 'Pacific Heights',
    city: 'San Francisco',
    state: 'CA',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c9da97f589?w=800&q=80',
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80',
    ],
    avgPrice: 5200000,
    priceChange: 5.8,
    listings: 23,
    description: 'Prestigious hilltop mansions with stunning bay views, Victorian architecture, and proximity to Presidio Park.',
    longDescription: 'Pacific Heights is San Francisco\'s most prestigious neighborhood, home to billionaires and historic mansions. The area offers breathtaking views of the Golden Gate Bridge and Alcatraz, along with access to the Presidio and Fillmore Street shopping.',
    coordinates: { lat: 37.7925, lng: -122.4382 },
    stats: {
      population: '21,000',
      medianAge: '48',
      medianIncome: '$165,000',
      walkScore: 82,
      transitScore: 70,
      schoolRating: 9.5,
    },
    amenities: [
      { icon: 'Mountain', label: 'Views', desc: 'Golden Gate Bridge views' },
      { icon: 'TreePine', label: 'Presidio', desc: '300-acre park access' },
      { icon: 'Home', label: 'Victorians', desc: 'Historic mansions' },
      { icon: 'ShoppingBag', label: 'Fillmore', desc: 'Upscale shopping' },
      { icon: 'School', label: 'Schools', desc: 'Top-rated public schools' },
      { icon: 'Car', label: 'Parking', desc: 'Garage availability' },
    ],
    marketTrends: {
      avgDaysOnMarket: 21,
      pricePerSqft: '$1,650',
      inventoryChange: '+8%',
      buyerDemand: 'Extreme',
    },
  },
  {
    id: '5',
    name: 'Upper East Side',
    city: 'New York',
    state: 'NY',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&q=80',
      'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=800&q=80',
    ],
    avgPrice: 3800000,
    priceChange: 6.5,
    listings: 56,
    description: 'Classic elegance along Museum Mile. Tree-lined streets, pre-war buildings, and Central Park access.',
    longDescription: 'The Upper East Side embodies classic New York sophistication. From the mansions of Fifth Avenue to the charming townhouses of the side streets, this neighborhood offers timeless elegance. Museum Mile provides world-class culture, while Madison Avenue offers luxury shopping.',
    coordinates: { lat: 40.7736, lng: -73.9566 },
    stats: {
      population: '225,000',
      medianAge: '46',
      medianIncome: '$142,000',
      walkScore: 95,
      transitScore: 95,
      schoolRating: 9.0,
    },
    amenities: [
      { icon: 'Building', label: 'Museums', desc: 'Museum Mile' },
      { icon: 'TreePine', label: 'Central Park', desc: '843-acre backyard' },
      { icon: 'ShoppingBag', label: 'Madison Ave', desc: 'Luxury shopping' },
      { icon: 'Utensils', label: 'Dining', desc: 'Classic NY restaurants' },
      { icon: 'GraduationCap', label: 'Private Schools', desc: 'Elite education' },
      { icon: 'Train', label: 'Subway', desc: 'Q, 4,5,6 trains' },
    ],
    marketTrends: {
      avgDaysOnMarket: 38,
      pricePerSqft: '$2,100',
      inventoryChange: '+3%',
      buyerDemand: 'High',
    },
  },
  {
    id: '6',
    name: 'Malibu',
    city: 'Los Angeles',
    state: 'CA',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
      'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    ],
    avgPrice: 6800000,
    priceChange: 18.5,
    listings: 28,
    description: 'Exclusive beachfront estates along 27 miles of coastline. Celebrity enclave with stunning ocean views.',
    longDescription: 'Malibu offers the ultimate California dream: private beachfront living with breathtaking Pacific Ocean views. From Carbon Beach to the Malibu Colony, this 27-mile stretch of coastline is home to celebrities, entertainment executives, and those seeking the ultimate in privacy and luxury.',
    coordinates: { lat: 34.0259, lng: -118.7798 },
    stats: {
      population: '12,000',
      medianAge: '52',
      medianIncome: '$195,000',
      walkScore: 45,
      transitScore: 30,
      schoolRating: 8.8,
    },
    amenities: [
      { icon: 'Waves', label: 'Beach', desc: 'Private beach access' },
      { icon: 'Sun', label: 'Climate', desc: 'Perfect weather year-round' },
      { icon: 'Utensils', label: 'Nobu', desc: 'Celebrity dining' },
      { icon: 'Dumbbell', label: 'Fitness', desc: 'Beach workouts' },
      { icon: 'Car', label: 'PCH', desc: 'Scenic coastal drive' },
      { icon: 'Shield', label: 'Privacy', desc: 'Gated communities' },
    ],
    marketTrends: {
      avgDaysOnMarket: 42,
      pricePerSqft: '$2,800',
      inventoryChange: '+12%',
      buyerDemand: 'Very High',
    },
  },
];

// Helper functions
export function getNeighborhoodById(id: string): NeighborhoodData | undefined {
  return neighborhoods.find(n => n.id === id);
}

export function getNeighborhoodsByCity(city: string): NeighborhoodData[] {
  return neighborhoods.filter(n => n.city.toLowerCase() === city.toLowerCase());
}

export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}K`;
}