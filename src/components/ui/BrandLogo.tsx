import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'seal' | 'watermark';
  className?: string;
  isLight?: boolean;
}

export default function BrandLogo({ variant = 'full', className = '', isLight = false }: BrandLogoProps) {
  const textColor = isLight ? 'text-milk' : 'text-charcoal';
  const subColor = isLight ? 'text-milk/70' : 'text-charcoal-muted';
  const borderColor = isLight ? 'border-milk/30' : 'border-sand/60';
  const terracottaColor = isLight ? 'text-peach' : 'text-terracotta';

  if (variant === 'seal') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 120 120"
          className="w-24 h-24 animate-spin-slow"
          style={{ animationDuration: '30s' }}
        >
          <path
            id="curve"
            d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
            fill="none"
            stroke="none"
          />
          <text className="text-[9.5px] uppercase font-sans tracking-[0.28em] fill-current">
            <textPath href="#curve" startOffset="0%">
              CAFE 1991 • TASHKENT • GASTRONOMY •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-serif-display text-lg font-bold tracking-widest leading-none">
            1991
          </span>
          <span className="text-[7px] uppercase tracking-widest font-sans opacity-80 mt-0.5">
            EST.
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="CAFE 1991">
        <div className={`w-8 h-8 rounded-full border ${borderColor} flex items-center justify-center bg-cream/40 group-hover:border-terracotta transition-colors`}>
          <span className={`font-serif-display text-xs font-semibold ${terracottaColor}`}>
            91
          </span>
        </div>
        <span className={`font-serif-display text-xl font-medium tracking-ultra-wide ${textColor} group-hover:text-terracotta transition-colors`}>
          CAFE 1991
        </span>
      </Link>
    );
  }

  if (variant === 'watermark') {
    return (
      <div className={`select-none pointer-events-none opacity-10 ${className}`}>
        <span className="font-serif-display text-7xl sm:text-9xl tracking-mega-wide uppercase font-light text-charcoal">
          CAFE 1991
        </span>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <Link href="/" className={`inline-flex flex-col items-start group focus:outline-none ${className}`} aria-label="CAFE 1991 Bosh sahifa">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full bg-terracotta group-hover:scale-125 transition-transform`} />
        <span className={`font-serif-display text-2xl sm:text-3xl font-medium tracking-ultra-wide ${textColor} group-hover:text-terracotta transition-colors duration-300`}>
          CAFE 1991
        </span>
      </div>
      <div className="flex items-center gap-2 pl-4 -mt-0.5">
        <span className={`text-[9px] tracking-mega-wide ${subColor} uppercase font-sans`}>
          Toshkent
        </span>
        <span className={`text-[8px] text-sand`}>•</span>
        <span className={`text-[9px] tracking-mega-wide ${subColor} uppercase font-sans`}>
          Est. 1991
        </span>
      </div>
    </Link>
  );
}
