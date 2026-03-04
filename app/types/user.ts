// types/user.ts (complete version)
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  preferences: {
    currency: string
    language: string
    notifications: {
      email: boolean
      sms: boolean
      push: boolean
      newListings: boolean
      priceDrops: boolean
      tourReminders: boolean
      marketReports: boolean
      promotionalEmails: boolean
    }
    darkMode: "light" | "dark" | "system"
  }
  savedProperties: string[]
  savedSearches: SavedSearch[]
  tourRequests: TourRequest[]
  createdAt: string
  updatedAt: string
}

export interface SavedSearch {
  id: string
  name: string
  filters: Record<string, any>
  alertFrequency: "instant" | "daily" | "weekly"
  createdAt: string
  lastAlertAt?: string
}

export interface TourRequest {
  id: string
  propertyId: string
  propertyTitle: string
  propertyImage: string
  propertyAddress: string
  agentId: string
  agentName: string
  agentImage?: string
  requestedDate: string
  requestedTime: string
  alternateDate?: string
  status: "pending" | "confirmed" | "completed" | "cancelled" | "rescheduled"
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface Notification {
  id: string
  userId: string
  type: "price_drop" | "new_listing" | "tour_reminder" | "message" | "system"
  title: string
  message: string
  data?: Record<string, any>
  isRead: boolean
  createdAt: string
}