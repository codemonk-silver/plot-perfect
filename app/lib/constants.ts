// lib/constants.ts
export const APP_NAME = "ClassyTan"
export const APP_DESCRIPTION = "Discover extraordinary living with our curated collection of premium properties worldwide."

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/agents", label: "Agents" },
]

export const PROPERTY_TYPES = [
  { id: "house", label: "House", icon: "Home" },
  { id: "apartment", label: "Apartment", icon: "Building" },
  { id: "condo", label: "Condo", icon: "Building" },
  { id: "villa", label: "Villa", icon: "Castle" },
  { id: "penthouse", label: "Penthouse", icon: "Building" },
  { id: "commercial", label: "Commercial", icon: "Warehouse" },
] as const

export const AMENITIES = [
  "Swimming Pool",
  "Gym",
  "Parking",
  "Garden",
  "Smart Home",
  "Wine Cellar",
  "Home Theater",
  "Elevator",
  "Fireplace",
  "Waterfront",
  "Beach Access",
  "Tennis Court",
  "Guest House",
  "Security System",
  "Solar Panels",
] as const