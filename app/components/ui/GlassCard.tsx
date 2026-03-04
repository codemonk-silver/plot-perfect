// components/ui/glass-card.tsx - Updated for Tailwind v4
"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  intensity?: "low" | "medium" | "high";
}

export function GlassCard({ 
  children, 
  className, 
  hover = false,
  intensity = "medium" 
}: GlassCardProps) {
  const intensityClasses = {
    low: "bg-white/5 backdrop-blur-sm border-white/10",
    medium: "bg-white/10 backdrop-blur-md border-white/20",
    high: "bg-white/20 backdrop-blur-xl border-white/30",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl border shadow-xl",
        intensityClasses[intensity],
        "dark:bg-black/20 dark:border-white/10",
        className
      )}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
}