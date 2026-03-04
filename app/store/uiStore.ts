// store/ui-store.ts
import { create } from 'zustand';

interface UIStore {
  // Mobile menu
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  
  // Search overlay
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  
  // Compare drawer
  isCompareOpen: boolean;
  setCompareOpen: (open: boolean) => void;
  
  // Lightbox
  lightboxOpen: boolean;
  currentImageIndex: number;
  lightboxImages: { url: string; alt: string }[];
  openLightbox: (images: { url: string; alt: string }[], startIndex?: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  
  // Dark mode
  darkMode: 'light' | 'dark' | 'system';
  setDarkMode: (mode: 'light' | 'dark' | 'system') => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  
  isSearchOpen: false,
  setSearchOpen: (open) => set({ isSearchOpen: open }),
  
  isCompareOpen: false,
  setCompareOpen: (open) => set({ isCompareOpen: open }),
  
  lightboxOpen: false,
  currentImageIndex: 0,
  lightboxImages: [],
  openLightbox: (images, startIndex = 0) => set({
    lightboxOpen: true,
    lightboxImages: images,
    currentImageIndex: startIndex,
  }),
  closeLightbox: () => set({ lightboxOpen: false }),
  nextImage: () => set((state) => ({
    currentImageIndex: (state.currentImageIndex + 1) % state.lightboxImages.length,
  })),
  prevImage: () => set((state) => ({
    currentImageIndex: state.currentImageIndex === 0 
      ? state.lightboxImages.length - 1 
      : state.currentImageIndex - 1,
  })),
  
  darkMode: 'system',
  setDarkMode: (mode) => set({ darkMode: mode }),
}));