// components/home/testimonials.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';

const testimonials = [
  {
    id: '1',
    name: 'Alexandra Chen',
    role: 'Home Buyer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'ClassyTan made our dream of owning a beachfront property a reality. Their attention to detail and personalized service was exceptional throughout the entire process.',
    rating: 5,
    location: 'Purchased in Malibu, CA',
  },
  {
    id: '2',
    name: 'Michael Roberts',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'As an international investor, I needed a team I could trust. ClassyTan provided unparalleled market insights and handled every aspect of my portfolio expansion.',
    rating: 5,
    location: 'Investor from London, UK',
  },
  {
    id: '3',
    name: 'Sarah Mitchell',
    role: 'First-time Buyer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content: 'The virtual tours and detailed property information made it easy to narrow down options before visiting. Saved us so much time and helped us find the perfect home.',
    rating: 5,
    location: 'Purchased in Austin, TX',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 dark:text-amber-400 font-medium text-sm tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mt-2">
            Client Stories
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard intensity="low" className="p-8 md:p-12 text-center">
                <Quote className="w-12 h-12 text-amber-500/20 mx-auto mb-6" />
                
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-light italic">
                  "{testimonials[current].content}"
                </p>

                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-slate-900 dark:text-white text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonials[current].role}
                    </p>
                    <p className="text-amber-600 dark:text-amber-400 text-sm">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-amber-500' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}