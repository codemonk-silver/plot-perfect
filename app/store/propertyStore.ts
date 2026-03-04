// store/property-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Property, PropertySearchFilters } from '../types/property';

interface PropertyStore {
  // Search state
  filters: PropertySearchFilters;
  setFilters: (filters: Partial<PropertySearchFilters>) => void;
  resetFilters: () => void;
  
  // Compare state
  compareList: string[];
  addToCompare: (propertyId: string) => void;
  removeFromCompare: (propertyId: string) => void;
  clearCompare: () => void;
  
  // Saved properties (sync with user store in real app)
  savedProperties: string[];
  toggleSaved: (propertyId: string) => void;
  
  // UI state
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export const usePropertyStore = create<PropertyStore>()(
  persist(
    (set, get) => ({
      filters: {
        listingType: 'sale',
        sortBy: 'newest',
      },
      setFilters: (newFilters) => set((state) => ({
        filters: { ...state.filters, ...newFilters },
      })),
      resetFilters: () => set({
        filters: { listingType: 'sale', sortBy: 'newest' },
      }),
      
      compareList: [],
      addToCompare: (propertyId) => set((state) => ({
        compareList: state.compareList.length < 3 
          ? [...state.compareList, propertyId]
          : state.compareList,
      })),
      removeFromCompare: (propertyId) => set((state) => ({
        compareList: state.compareList.filter(id => id !== propertyId),
      })),
      clearCompare: () => set({ compareList: [] }),
      
      savedProperties: [],
      toggleSaved: (propertyId) => set((state) => ({
        savedProperties: state.savedProperties.includes(propertyId)
          ? state.savedProperties.filter(id => id !== propertyId)
          : [...state.savedProperties, propertyId],
      })),
      
      viewMode: 'grid',
      setViewMode: (mode) => set({ viewMode: mode }),
    }),
    {
      name: 'property-storage',
    }
  )
);