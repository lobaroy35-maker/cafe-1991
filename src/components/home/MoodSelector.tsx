'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Utensils } from 'lucide-react';
import { diningMoods } from '@/data/restaurant';

export default function MoodSelector() {
  const [selectedMoodId, setSelectedMoodId] = useState(diningMoods[0].id);

  const selectedMood = diningMoods.find((m) => m.id === selectedMoodId) || diningMoods[0];

  return (
    <section className="py-24 bg-ivory relative overflow-hidden" id="mood-selector">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
            Shaxsiy Gastronomik Tajriba
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal">
            Bugungi Kayfiyatingiz Qanday?
          </h2>
          <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
            Restorandagi muhit, yorug‘lik va taomlar sizning ruhiyatingizga moslashadi. O‘zingizga mos oqshom kayfiyatini tanlang.
          </p>
        </div>

        {/* Mood Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {diningMoods.map((mood) => {
            const isSelected = mood.id === selectedMoodId;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMoodId(mood.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-charcoal text-milk shadow-soft-luxury scale-105'
                    : 'bg-cream text-charcoal hover:bg-cream-dark border border-sand/40'
                }`}
              >
                {mood.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Mood Card Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMood.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl p-8 sm:p-14 border border-sand/60 shadow-soft-luxury ${selectedMood.bgClass} backdrop-blur-sm transition-colors duration-500`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/80 border border-sand/60 text-[11px] font-sans text-charcoal-muted tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>{selectedMood.vibeText}</span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
                  {selectedMood.title}
                </h3>

                <p className="font-serif italic text-lg sm:text-xl text-charcoal-muted">
                  “{selectedMood.subtitle}”
                </p>

                <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans max-w-xl">
                  {selectedMood.description}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/reservation?mood=${selectedMood.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-milk text-xs font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-card transition-all"
                  >
                    <span>SHU KAYFIYATDA STOL BAND QILISH</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Dish Pairings */}
              <div className="lg:col-span-5 bg-ivory/90 rounded-2xl p-6 sm:p-8 border border-sand/50 shadow-soft-card space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-sand/40">
                  <Utensils className="w-4 h-4 text-terracotta" />
                  <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                    {selectedMood.pairingTitle}
                  </p>
                </div>

                <ul className="space-y-3">
                  {selectedMood.suggestedDishes.map((dishName) => (
                    <li
                      key={dishName}
                      className="flex items-center gap-3 text-xs sm:text-sm text-charcoal font-serif tracking-wide p-2.5 rounded-xl bg-cream/30 border border-sand/20 hover:bg-cream transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                      <span>{dishName}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] text-charcoal-muted italic pt-2">
                  * Ushbu to‘plam bosh oshpazimiz tomonidan har bir kayfiyatga moslab mutanosiblashtirilgan.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
