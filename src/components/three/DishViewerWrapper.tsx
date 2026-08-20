'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const DishViewer3D = dynamic(() => import('./DishViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 rounded-2xl bg-cream/30 flex items-center justify-center animate-pulse">
      <span className="text-xs text-charcoal-muted font-serif italic">3D Ko‘rinish yuklanmoqda...</span>
    </div>
  ),
});

interface DishViewerWrapperProps {
  dishName: string;
  ceramicColor?: string;
  foodColor?: string;
}

export default function DishViewerWrapper({ dishName, ceramicColor, foodColor }: DishViewerWrapperProps) {
  return <DishViewer3D dishName={dishName} ceramicColor={ceramicColor} foodColor={foodColor} />;
}
