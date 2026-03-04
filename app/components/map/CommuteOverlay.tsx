// components/map/commute-overlay.tsx
'use client';

import { useState } from 'react';
import { Car, Train, Footprints, Clock } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';
import { cn } from '../../lib/utils';

interface CommuteOverlayProps {
  destination: string;
  onModeChange?: (mode: 'driving' | 'transit' | 'walking') => void;
}

export function CommuteOverlay({ destination, onModeChange }: CommuteOverlayProps) {
  const [activeMode, setActiveMode] = useState<'driving' | 'transit' | 'walking'>('driving');
  const [isExpanded, setIsExpanded] = useState(false);

  const modes = [
    { id: 'driving', icon: Car, label: 'Driving', time: '12 min' },
    { id: 'transit', icon: Train, label: 'Transit', time: '25 min' },
    { id: 'walking', icon: Footprints, label: 'Walking', time: '45 min' },
  ] as const;

  const handleModeChange = (mode: typeof activeMode) => {
    setActiveMode(mode);
    onModeChange?.(mode);
  };

  return (
    <GlassCard intensity="high" className="absolute top-4 right-4 z-10 w-64">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Commute Time</h3>
          <span className="text-xs text-slate-500">to {destination}</span>
        </div>

        <div className="space-y-2">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => handleModeChange(mode.id)}
              className={cn(
                'w-full flex items-center justify-between p-3 rounded-xl transition-all',
                activeMode === mode.id
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              <div className="flex items-center gap-3">
                <mode.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{mode.label}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className="text-sm font-bold">{mode.time}</span>
              </div>
            </button>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
            <p className="text-xs text-slate-300">Traffic: Moderate</p>
            <p className="text-xs text-slate-300">Distance: 4.2 miles</p>
          </div>
        )}
      </div>
    </GlassCard>
  );
}