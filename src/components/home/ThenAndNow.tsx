'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, History, Compass } from 'lucide-react';

export default function ThenAndNow() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-24 bg-cream/30 border-y border-sand/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
            Tarix va Zamonaviylik
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal">
            Kecha & Bugun
          </h2>
          <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
            1991 yilning samimiy xotirasi bugungi CAFE 1991 da qanday yuksak darajada qayta jonlanganini taqqoslang.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Kecha (Archival Heritage) */}
          <div className="rounded-3xl p-8 sm:p-12 bg-ivory border border-sand/60 shadow-soft-card flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/30 text-xs font-sans text-charcoal font-medium">
                <History className="w-3.5 h-3.5 text-terracotta" />
                <span>KECHA • 1991</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                Iliq Choynak, Ochiq Qalb va Qadrdon Toshkent
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                Oddiy yog‘och karavotlar, quyuq choy, qizg‘in bahslar va mustaqillik tongining yangi umidlari. Mehmondo‘stlik shior emas, balki har bir xonadonning yuragi edi.
              </p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-sand/40">
              <Image
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
                alt="1991 Choyxona va An’analar"
                fill
                className="object-cover sepia-[0.35] contrast-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
              <span className="absolute bottom-3 left-3 text-[10px] text-milk font-sans tracking-widest bg-charcoal/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
                O‘tmish Nafasi
              </span>
            </div>
          </div>

          {/* Right: Bugun (Modern Refinement) */}
          <div className="rounded-3xl p-8 sm:p-12 bg-ivory border border-terracotta/40 shadow-soft-luxury flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach/30 text-xs font-sans text-charcoal font-medium">
                <Compass className="w-3.5 h-3.5 text-terracotta" />
                <span>BUGUN • CAFE 1991</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                O‘zbek Modern Gastronomiyasi va Nafis Mehmondo‘stlik
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                O‘sha samimiyat endi mualliflik keramikasi, eng sara mahsulotlar, zamonaviy Livan va O‘zbek oshxonalari uyg‘unligi hamda jahon darajasidagi xizmat bilan davom etmoqda.
              </p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-sand/40">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Bugungi CAFE 1991 Zali"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] text-milk font-sans tracking-widest bg-terracotta/90 px-2.5 py-1 rounded-md backdrop-blur-xs">
                Zamonaviy Nafislik
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
