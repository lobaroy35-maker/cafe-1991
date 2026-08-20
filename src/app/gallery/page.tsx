'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import { GalleryItem } from '@/types';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('BARCHASI');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'BARCHASI' || item.category === selectedCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Header */}
      <section className="pt-12 pb-16 bg-cream/40 border-b border-sand/40 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
            Vizual Ko‘rgazma
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal">
            Restoran Galereyasi
          </h1>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto font-sans leading-relaxed">
            CAFE 1991 muhiti, taomlari, qadimiy keramika idishlari va Toshkent osmoni ostidagi samimiy lahzalar.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-sand/40 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
            {galleryCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? 'bg-charcoal text-milk shadow-sm'
                      : 'bg-cream/60 text-charcoal hover:bg-cream border border-sand/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exhibition Grid */}
      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-3xl overflow-hidden bg-cream shadow-soft-card hover:shadow-soft-luxury cursor-pointer border border-sand/50 h-80 transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-milk">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-peach">
                    {item.category}
                  </span>
                  <h3 className="font-serif-display text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-milk/80 font-sans line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-charcoal/60 text-milk hover:bg-charcoal transition-colors z-20"
            aria-label="Yopish (ESC)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/60 text-milk hover:bg-charcoal transition-colors z-20 hidden sm:block"
            aria-label="Oldingi rasm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/60 text-milk hover:bg-charcoal transition-colors z-20 hidden sm:block"
            aria-label="Keyingi rasm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="pt-4 text-center text-milk space-y-1 max-w-lg">
              <h3 className="font-serif-display text-2xl font-medium">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-milk/80 font-sans">
                {filteredItems[lightboxIndex].caption}
              </p>
              <p className="text-[10px] text-peach tracking-widest uppercase pt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Reservation CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24">
        <div className="rounded-3xl bg-cream/70 border border-sand/60 p-8 sm:p-14 text-center space-y-4 shadow-soft-card">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
            Ushbu Muhitni O‘z Ko‘zingiz Bilan Ko‘ring
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto font-sans leading-relaxed">
            Mustaqillik shoh ko‘chasidagi restoran stolini o‘zingiz uchun qulay vaqtda band qiling.
          </p>
          <div className="pt-2">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta text-milk text-xs sm:text-sm font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-card transition-all"
            >
              <span>STOL BAND QILISH →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
