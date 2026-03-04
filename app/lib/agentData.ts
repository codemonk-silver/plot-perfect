// lib/agents-data.ts
export interface AgentData {
  id: string;
  name: string;
  title: string;
  image: string;
  coverImage?: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  yearsOfExperience: number;
  languages: string[];
  specialties: string[];
  certifications: string[];
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  stats: {
    propertiesSold: number;
    totalVolume: number;
    averageRating: number;
    reviewCount: number;
  };
  serviceAreas: string[];
  brokerage: {
    name: string;
    address: string;
    logo?: string;
  };
  isVerified: boolean;
  createdAt: string;
}

export interface ReviewData {
  id: string;
  agentId: string;
  user: string;
  rating: number;
  date: string;
  content: string;
  property: string;
  isVerified?: boolean;
}

export const agents: AgentData[] = [
  {
    id: 'agent-1',
    name: 'Sarah Johnson',
    title: 'Premier Agent',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
    email: 'sarah@classytan.com',
    phone: '+1 (310) 555-0123',
    bio: 'Sarah specializes in ultra-luxury properties and has represented numerous celebrity clients. Her discretion and market knowledge are unmatched in the Los Angeles luxury market. With over $890 million in career sales, she consistently ranks among the top agents nationwide.',
    location: 'Los Angeles, CA',
    yearsOfExperience: 12,
    languages: ['English', 'Spanish'],
    specialties: ['Luxury Homes', 'Waterfront', 'Celebrity Clients'],
    certifications: ['Certified Luxury Home Marketing Specialist', 'Million Dollar Gavel'],
    socialLinks: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
    },
    stats: {
      propertiesSold: 487,
      totalVolume: 890000000,
      averageRating: 4.9,
      reviewCount: 127,
    },
    serviceAreas: ['Beverly Hills', 'Malibu', 'Bel Air', 'Hollywood Hills'],
    brokerage: {
      name: 'ClassyTan Premier',
      address: '9876 Wilshire Blvd, Beverly Hills, CA 90210',
    },
    isVerified: true,
    createdAt: '2012-01-15T00:00:00Z',
  },
  {
    id: 'agent-2',
    name: 'Michael Chen',
    title: 'Top Producer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80',
    email: 'michael@classytan.com',
    phone: '+1 (212) 555-0456',
    bio: 'Michael is a market leader in New York luxury real estate. His expertise in penthouses and new developments has made him the go-to agent for international buyers.',
    location: 'New York, NY',
    yearsOfExperience: 15,
    languages: ['English', 'Mandarin', 'Cantonese'],
    specialties: ['Penthouses', 'New Developments', 'Investment Properties'],
    certifications: ['Certified International Property Specialist', 'Luxury Collection Specialist'],
    socialLinks: {
      linkedin: '#',
      instagram: '#',
    },
    stats: {
      propertiesSold: 623,
      totalVolume: 1200000000,
      averageRating: 4.8,
      reviewCount: 203,
    },
    serviceAreas: ['Manhattan', 'Brooklyn Heights', 'Tribeca', 'Upper East Side'],
    brokerage: {
      name: 'ClassyTan New York',
      address: '432 Park Avenue, New York, NY 10022',
    },
    isVerified: true,
    createdAt: '2009-03-20T00:00:00Z',
  },
  {
    id: 'agent-3',
    name: 'Emily Rodriguez',
    title: 'Luxury Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80',
    email: 'emily@classytan.com',
    phone: '+1 (305) 555-0789',
    bio: 'Emily brings energy and expertise to Miami\'s luxury waterfront market. She specializes in helping international clients navigate the Florida market.',
    location: 'Miami, FL',
    yearsOfExperience: 8,
    languages: ['English', 'Spanish', 'Portuguese'],
    specialties: ['Waterfront', 'Condos', 'International Buyers'],
    certifications: ['Resort & Second-Home Property Specialist', 'Luxury Home Certification'],
    socialLinks: {
      instagram: '#',
      twitter: '#',
    },
    stats: {
      propertiesSold: 312,
      totalVolume: 450000000,
      averageRating: 4.9,
      reviewCount: 89,
    },
    serviceAreas: ['South Beach', 'Brickell', 'Coconut Grove', 'Key Biscayne'],
    brokerage: {
      name: 'ClassyTan Miami',
      address: '1000 Brickell Avenue, Miami, FL 33131',
    },
    isVerified: true,
    createdAt: '2016-06-10T00:00:00Z',
  },
  {
    id: 'agent-4',
    name: 'David Park',
    title: 'Senior Agent',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
    email: 'david@classytan.com',
    phone: '+1 (415) 555-0321',
    bio: 'With two decades of experience, David is San Francisco\'s premier agent for luxury properties. He has represented numerous tech executives and venture capitalists.',
    location: 'San Francisco, CA',
    yearsOfExperience: 20,
    languages: ['English', 'Korean'],
    specialties: ['Tech Executives', 'Pacific Heights', 'Victorian Homes'],
    certifications: ['Senior Real Estate Specialist', 'Certified Negotiation Expert'],
    socialLinks: {
      linkedin: '#',
    },
    stats: {
      propertiesSold: 892,
      totalVolume: 2100000000,
      averageRating: 5.0,
      reviewCount: 312,
    },
    serviceAreas: ['Pacific Heights', 'Presidio Heights', 'Sea Cliff', 'Russian Hill'],
    brokerage: {
      name: 'ClassyTan San Francisco',
      address: '3000 Pacific Avenue, San Francisco, CA 94115',
    },
    isVerified: true,
    createdAt: '2004-09-01T00:00:00Z',
  },
  {
    id: 'agent-5',
    name: 'Jessica Williams',
    title: 'Rising Star',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1534234828563-02511c85638a?w=1200&q=80',
    email: 'jessica@classytan.com',
    phone: '+1 (512) 555-0654',
    bio: 'Jessica has quickly become Austin\'s go-to agent for modern luxury homes. Her design background helps clients envision the potential in every property.',
    location: 'Austin, TX',
    yearsOfExperience: 5,
    languages: ['English'],
    specialties: ['Modern Architecture', 'Lakefront', 'First-Time Luxury Buyers'],
    certifications: ['Accredited Buyer\'s Representative', 'Seller Representative Specialist'],
    socialLinks: {
      instagram: '#',
    },
    stats: {
      propertiesSold: 156,
      totalVolume: 180000000,
      averageRating: 4.8,
      reviewCount: 67,
    },
    serviceAreas: ['Westlake Hills', 'Tarrytown', 'Lake Austin', 'Downtown'],
    brokerage: {
      name: 'ClassyTan Austin',
      address: '500 West 6th Street, Austin, TX 78701',
    },
    isVerified: true,
    createdAt: '2019-01-15T00:00:00Z',
  },
  {
    id: 'agent-6',
    name: 'Robert Taylor',
    title: 'Global Advisor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80',
    email: 'robert@classytan.com',
    phone: '+1 (702) 555-0987',
    bio: 'Robert brings international flair to Las Vegas luxury real estate. His multilingual skills and global network attract buyers from around the world.',
    location: 'Las Vegas, NV',
    yearsOfExperience: 18,
    languages: ['English', 'French', 'Italian'],
    specialties: ['High-Rise', 'Golf Communities', 'International Marketing'],
    certifications: ['Certified Luxury Home Marketing Specialist', 'Global Luxury Specialist'],
    socialLinks: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
    },
    stats: {
      propertiesSold: 534,
      totalVolume: 750000000,
      averageRating: 4.9,
      reviewCount: 178,
    },
    serviceAreas: ['The Strip', 'Summerlin', 'Henderson', 'Lake Las Vegas'],
    brokerage: {
      name: 'ClassyTan Las Vegas',
      address: '2000 Fashion Show Drive, Las Vegas, NV 89109',
    },
    isVerified: true,
    createdAt: '2006-04-12T00:00:00Z',
  },
];

export const reviews: ReviewData[] = [
  {
    id: '1',
    agentId: 'agent-1',
    user: 'Michael R.',
    rating: 5,
    date: '2024-01-15',
    content: 'Sarah made buying our dream home seamless. Her knowledge of off-market properties is incredible.',
    property: 'Beverly Hills Estate',
    isVerified: true,
  },
  {
    id: '2',
    agentId: 'agent-1',
    user: 'Jennifer L.',
    rating: 5,
    date: '2023-12-20',
    content: 'Professional, discreet, and incredibly effective. Sold our property above asking in 10 days.',
    property: 'Malibu Beachfront',
    isVerified: true,
  },
  {
    id: '3',
    agentId: 'agent-1',
    user: 'David K.',
    rating: 5,
    date: '2023-11-08',
    content: 'The best in the business. Sarah understood exactly what we were looking for and delivered.',
    property: 'Hollywood Hills Modern',
    isVerified: true,
  },
  {
    id: '4',
    agentId: 'agent-2',
    user: 'Alexandra W.',
    rating: 5,
    date: '2024-02-01',
    content: 'Michael found us the perfect penthouse off-market. His network is unmatched.',
    property: 'Park Avenue Penthouse',
    isVerified: true,
  },
  {
    id: '5',
    agentId: 'agent-2',
    user: 'James C.',
    rating: 5,
    date: '2024-01-20',
    content: 'Exceptional service from start to finish. Michael negotiated brilliantly on our behalf.',
    property: 'Tribeca Loft',
    isVerified: true,
  },
];

// Helper functions
export function getAgentById(id: string): AgentData | undefined {
  return agents.find(agent => agent.id === id);
}

export function getAgentReviews(agentId: string): ReviewData[] {
  return reviews.filter(review => review.agentId === agentId);
}

export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}K`;
}