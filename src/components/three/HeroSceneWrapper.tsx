'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center bg-cream/30 rounded-3xl animate-pulse">
      <span className="font-serif italic text-charcoal-muted text-sm">
        CAFE 1991 • 3D Tajriba yuklanmoqda...
      </span>
    </div>
  ),
});

export default function HeroSceneWrapper() {
  return <HeroScene />;
}
