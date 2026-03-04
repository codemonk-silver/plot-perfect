// components/property/virtual-tour.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause, RotateCcw, Expand, Minimize, Info } from "lucide-react"
import { GlassCard } from "../../components/ui/GlassCard"
import { Button } from "../../components/ui/Button"

interface VirtualTourProps {
  tourUrl?: string
  images: { url: string; alt: string }[]
}

export function VirtualTour({ tourUrl, images }: VirtualTourProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (!tourUrl && images.length === 0) return null

  return (
    <>
      {/* Preview Card */}
      <GlassCard intensity="medium" className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Virtual Tour
            </h3>
            <p className="text-sm text-slate-500">Experience this property in 3D</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
          <img
            src={images[0]?.url}
            alt="Tour preview"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30"
              onClick={() => setIsOpen(true)}
            >
              <Play className="w-5 h-5 mr-2" />
              Start 3D Tour
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <RotateCcw className="w-4 h-4" />
            360° View
          </span>
          <span className="flex items-center gap-1">
            <Info className="w-4 h-4" />
            {images.length} scenes
          </span>
        </div>
      </GlassCard>

      {/* Full Tour Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 bg-black ${isFullscreen ? "" : "p-4 md:p-8"}`}
          >
            {/* Controls */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
                <span className="text-white font-medium">Virtual Tour</span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Expand className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Main View */}
            <div className="relative w-full h-full">
              <img
                src={images[currentScene]?.url}
                alt={`Scene ${currentScene + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation hotspots (mock) */}
              <button
                className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center hover:scale-110 transition-transform"
                onClick={() => setCurrentScene((prev) => (prev + 1) % images.length)}
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </button>

              {/* Scene thumbnails */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 py-2 bg-black/50 backdrop-blur-md rounded-full">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentScene(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      idx === currentScene ? "border-amber-500" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Play/Pause */}
              <button
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Info panel */}
            <div className="absolute top-20 right-4 w-64 bg-black/50 backdrop-blur-md rounded-xl p-4 text-white">
              <h4 className="font-semibold mb-2">Living Room</h4>
              <p className="text-sm text-white/80">
                Spacious open-concept living area with floor-to-ceiling windows and panoramic ocean views.
              </p>
              <div className="mt-3 pt-3 border-t border-white/20 text-xs text-white/60">
                Use mouse to navigate • Click hotspots to move
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}