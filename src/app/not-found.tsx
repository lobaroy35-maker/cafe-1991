import React from 'react';
import Link from 'next/link';
import { ArrowRight, Utensils } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-ivory px-6 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-cream mx-auto flex items-center justify-center text-terracotta shadow-soft-card">
          <Utensils className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-serif font-bold text-terracotta tracking-mega-wide uppercase">
            404 Xatolik
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl text-charcoal font-medium">
            Sahifa Topilmadi
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed">
            Siz qidirayotgan sahifa ko‘chirilgan yoki mavjud emas. Keling, sizni bizning bosh dasturxonimizga qaytaramiz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 font-sans text-xs">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-terracotta text-milk font-medium hover:bg-terracotta-dark shadow-soft-card transition-all"
          >
            Bosh Sahifaga Qaytish
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream border border-sand text-charcoal font-medium hover:bg-cream-dark transition-all"
          >
            Menyuni Ko‘rish →
          </Link>
        </div>
      </div>
    </div>
  );
}
