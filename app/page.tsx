// app/(main)/page.tsx
import { HeroSection } from './components/home/HeroSection';
import { FeaturedListings } from './components/home/FeaturedListings';
import { LuxurySpotlight } from './components/home/LuxurySpotlight';
import { NeighborhoodExplorer } from './components/home/NeighborHoodExplorer';
import { Testimonials } from './components/home/Testimonials';
import { Container } from './components/layout/Container';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <Container className="py-20">
        <FeaturedListings />
      </Container>

      <LuxurySpotlight />
      
      <Container className="py-20">
        <NeighborhoodExplorer />
      </Container>

      <Testimonials />
    </main>
  );
}