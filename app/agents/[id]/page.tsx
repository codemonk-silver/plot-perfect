// app/(main)/agents/[id]/page.tsx - COMPLETE REPLACEMENT
'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Calendar,
  MessageSquare,
  Share2,
  ArrowLeft
} from 'lucide-react';
import { Container } from '../../components/layout/Container';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';
import { PropertyCard } from '../../components/property/PropertyCard';
import { mockProperties } from '../../lib/mockData';
import { agents, reviews, getAgentById, getAgentReviews, formatPrice } from '../../lib/agentData'; // IMPORT FROM SHARED
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { notFound } from 'next/navigation';

export default function AgentProfilePage() {
  const { id } = useParams();
  const agent = getAgentById(id as string);

  if (!agent) {
    notFound();
  }
  
  const agentReviews = getAgentReviews(agent.id);
  
  // Get agent's listings (mock logic)
  const agentListings = mockProperties.filter(p => p.agentId === agent.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <Image
          src={agent.coverImage || agent.image}
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        
        <Container className="relative z-10 h-full flex items-end pb-8">
          <Link 
            href="/agents" 
            className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Agents
          </Link>
        </Container>
      </div>

      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative -mt-20 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-end">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-950 overflow-hidden shadow-xl">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
                      {agent.name}
                    </h1>
                    {agent.isVerified && (
                      <Award className="w-6 h-6 text-amber-500" />
                    )}
                  </div>
                  <p className="text-amber-600 dark:text-amber-400 font-medium text-lg">
                    {agent.title}
                  </p>
                  <p className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {agent.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <GlassCard intensity="low" className="p-4 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{agent.stats.propertiesSold}</p>
                <p className="text-sm text-slate-500">Properties Sold</p>
              </GlassCard>
              <GlassCard intensity="low" className="p-4 text-center">
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {formatPrice(agent.stats.totalVolume)}
                </p>
                <p className="text-sm text-slate-500">Total Volume</p>
              </GlassCard>
              <GlassCard intensity="low" className="p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{agent.stats.averageRating}</p>
                </div>
                <p className="text-sm text-slate-500">{agent.stats.reviewCount} Reviews</p>
              </GlassCard>
              <GlassCard intensity="low" className="p-4 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{agent.yearsOfExperience}</p>
                <p className="text-sm text-slate-500">Years Experience</p>
              </GlassCard>
            </motion.div>

            {/* About */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">About</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {agent.bio}
              </p>
            </motion.div>

            {/* Specialties */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {agent.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-4 py-2 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Service Areas</h2>
              <div className="flex flex-wrap gap-2">
                {agent.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Active Listings */}
            {agentListings.length > 0 && (
              <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Active Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agentListings.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Reviews */}
            {agentReviews.length > 0 && (
              <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Client Reviews</h2>
                <div className="space-y-4">
                  {agentReviews.map((review) => (
                    <GlassCard key={review.id} intensity="low" className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white">{review.user}</p>
                              <p className="text-sm text-slate-500">{review.property}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400">{review.content}</p>
                          <p className="text-sm text-slate-400 mt-2">{review.date}</p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <GlassCard intensity="medium" className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Contact {agent.name.split(' ')[0]}
                </h3>
                
                <div className="space-y-3">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 h-12">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full h-12">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full h-12">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Tour
                  </Button>
                  <Button variant="outline" className="w-full h-12">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <p className="text-sm text-slate-500">Brokerage</p>
                  <p className="font-medium text-slate-900 dark:text-white">{agent.brokerage.name}</p>
                  <p className="text-sm text-slate-500">{agent.brokerage.address}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-500 mb-2">Languages</p>
                  <p className="text-slate-700 dark:text-slate-300">{agent.languages.join(', ')}</p>
                </div>

                <Button variant="ghost" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Profile
                </Button>
              </GlassCard>

              {/* Certifications */}
              <GlassCard intensity="low" className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  {agent.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Award className="w-4 h-4 text-amber-500" />
                      {cert}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}