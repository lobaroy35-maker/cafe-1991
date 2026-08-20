'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorNodeRef = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Generate warm, gentle ambient harmonic resonance (mimicking warm acoustic teahouse atmosphere)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(144, ctx.currentTime); // Low F# grounding acoustic frequency
        
        // Gentle LFO for organic breath
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.15, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);

        gain.gain.setValueAtTime(0.025, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        lfo.start();

        oscillatorNodeRef.current = osc;
        gainNodeRef.current = gain;
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleSound}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-cream/90 hover:bg-cream border border-sand shadow-soft-card text-charcoal text-xs transition-all duration-300 backdrop-blur-md group"
        aria-label={isPlaying ? 'Atmosfera tovushini o‘chirish' : 'Atmosfera tovushini yoqish'}
        title={isPlaying ? 'Atmosfera tovushi yoqilgan' : 'Atmosfera tovushini yoqish'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-terracotta animate-pulse" />
            <span className="hidden sm:inline text-[11px] font-sans tracking-wide text-charcoal">
              Atmosfera: Yoqilgan
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-charcoal-muted group-hover:text-charcoal transition-colors" />
            <span className="hidden sm:inline text-[11px] font-sans tracking-wide text-charcoal-muted">
              Atmosfera tovushi
            </span>
          </>
        )}
      </button>
    </div>
  );
}
