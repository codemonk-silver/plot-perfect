// app/(main)/agents/page.tsx - COMPLETE REPLACEMENT
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Phone, Mail, Award, TrendingUp, Users, Home } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { agents, formatPrice } from '../lib/agentData'; // IMPORT FROM SHARED
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
            alt="Agents"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Meet Our Agents
            </h1>
            <p className="text-lg text-slate-300">
              Connect with the industry's top professionals. Our agents combine local expertise with global reach to deliver exceptional results.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">150+</p>
              <p className="text-sm text-slate-500">Expert Agents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">$12B+</p>
              <p className="text-sm text-slate-500">Sales Volume</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">4.9</p>
              <p className="text-sm text-slate-500">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">50+</p>
              <p className="text-sm text-slate-500">Global Markets</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Agents Grid */}
      <Container className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {agents.map((agent) => (
            <motion.div key={agent.id} variants={fadeInUp}>
              <Link href={`/agents/${agent.id}`}>
                <GlassCard intensity="low" className="h-full overflow-hidden group" hover>
                  {/* Header Image & Avatar */}
                  <div className="relative h-32 bg-gradient-to-br from-amber-500 to-amber-700">
                    <div className="absolute -bottom-12 left-6">
                      <div className="relative w-24 h-24 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden">
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {agent.isVerified && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-medium flex items-center gap-1">
                        <Award className="w-4 h-4 text-amber-500" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-16 px-6 pb-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                        {agent.name}
                      </h3>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">
                        {agent.title}
                      </p>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {agent.location}
                      </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                      {agent.bio}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">{agent.stats.propertiesSold}</p>
                        <p className="text-xs text-slate-500">Sales</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {formatPrice(agent.stats.totalVolume)}
                        </p>
                        <p className="text-xs text-slate-500">Volume</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <p className="text-lg font-bold text-slate-900 dark:text-white">{agent.stats.averageRating}</p>
                        </div>
                        <p className="text-xs text-slate-500">Rating</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.slice(0, 3).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-sm">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" className="flex-1 text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Join CTA */}
      <section className="py-20 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white">
              Join Our Team
            </h2>
            <p className="text-slate-300">
              Are you a top-producing agent looking to take your career to the next level? ClassyTan offers unmatched resources and global exposure.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Apply Now
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}