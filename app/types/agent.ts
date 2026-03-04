// types/agent.ts
export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
  bio: string;
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
    logo?: string;
    address: string;
  };
  isVerified: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  agentId: string;
  userId: string;
  userName: string;
  userImage?: string;
  rating: number;
  comment: string;
  propertyId?: string;
  isVerified: boolean;
  createdAt: string;
}

// types/agent.ts (update with complete fields)
export interface Agent {
  id: string
  name: string
  title: string
  image: string
  coverImage?: string
  email: string
  phone: string
  bio: string
  location: string
  yearsOfExperience: number
  languages: string[]
  specialties: string[]
  certifications: string[]
  socialLinks?: {
    linkedin?: string
    instagram?: string
    twitter?: string
  }
  stats: {
    propertiesSold: number
    totalVolume: number
    averageRating: number
    reviewCount: number
  }
  serviceAreas: string[]
  brokerage: {
    name: string
    address: string
    logo?: string
  }
  isVerified: boolean
  createdAt: string
}

export interface Review {
  id: string
  agentId: string
  userId: string
  userName: string
  userImage?: string
  rating: number
  comment: string
  propertyId?: string
  propertyTitle?: string
  isVerified: boolean
  createdAt: string
}