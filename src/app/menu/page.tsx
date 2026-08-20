'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Sparkles, Filter, ArrowRight, X, Eye, Check } from 'lucide-react';
import { menuItems, menuCategories } from '@/data/menu';
import { MenuCategory, MenuItem } from '@/types';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('BARCHASI');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('ALL');
  const [activeModalDish, setActiveModalDish] = useState<MenuItem | null>(null);

  const filteredDishes = useMemo(() => {
    return menuItems.filter((dish) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'BARCHASI' ||
        dish.category === selectedCategory ||
        (selectedCategory === 'VEGETARIAN' && dish.dietaryTags.includes('VEGETARIAN')) ||
        (selectedCategory === 'SIGNATURE' && dish.featured);

      // Dietary filter match
      const dietaryMatch =
        selectedDietary === 'ALL' ||
        dish.dietaryTags.some((tag) => tag.toLowerCase() === selectedDietary.toLowerCase());

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.nameUz.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.ingredients.some((ing) => ing.toLowerCase().includes(query));

      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Header Section */}
      <section className="pt-12 pb-16 bg-cream/40 border-b border-sand/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
            Gastronomik Katalog
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal">
            Restoran Menyusi
          </h1>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto font-sans leading-relaxed">
            O‘zbekistonning eng sara go‘sht va sabzavotlari, nozik Livan mezzelari va ochiq olovda pishirilgan taomlar to‘plami.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-charcoal-muted absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Taom nomi, masalliq yoki kategoriya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 rounded-full bg-ivory border border-sand shadow-soft-card text-xs sm:text-sm text-charcoal placeholder-charcoal-muted/60 focus:outline-none focus:border-terracotta transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 text-charcoal-muted hover:text-charcoal"
                  aria-label="Qidiruvni tozalash"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Filters */}
      <section className="sticky top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-sand/40 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {menuCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider whitespace-nowrap transition-all duration-300 ${
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

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-3 pt-3 text-xs text-charcoal-muted font-sans">
            <span className="text-[11px] font-semibold uppercase text-charcoal">Filtr:</span>
            {['ALL', 'VEGETARIAN', 'HALAL', 'GLUTEN_FREE'].map((diet) => {
              const isSelected = selectedDietary === diet;
              const labels: Record<string, string> = {
                ALL: 'Barchasi',
                VEGETARIAN: '🌱 Vegetarian',
                HALAL: '✓ Halol',
                GLUTEN_FREE: 'Glutensiz',
              };
              return (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
                    isSelected
                      ? 'bg-terracotta text-milk'
                      : 'bg-cream text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  {labels[diet] || diet}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dishes Catalog Grid */}
      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {filteredDishes.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-cream mx-auto flex items-center justify-center text-terracotta text-2xl">
                🍲
              </div>
              <h3 className="font-serif-display text-2xl text-charcoal">
                Bu qidiruv bo‘yicha taom topilmadi
              </h3>
              <p className="text-xs text-charcoal-muted font-sans leading-relaxed">
                Iltimos, qidiruv so‘zini o‘zgartiring yoki filtrlarni qayta o‘rnating.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('BARCHASI');
                  setSearchQuery('');
                  setSelectedDietary('ALL');
                }}
                className="px-6 py-2.5 rounded-full bg-cream text-charcoal text-xs font-medium hover:bg-terracotta hover:text-milk transition-colors"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="group rounded-3xl bg-cream/30 border border-sand/50 overflow-hidden shadow-soft-card hover:shadow-soft-luxury hover:border-terracotta transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-64 w-full overflow-hidden bg-cream">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-xs text-xs font-sans font-semibold text-charcoal border border-sand/50 shadow-sm">
                        {dish.price}
                      </div>

                      {dish.featured ? (
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-terracotta text-milk text-[10px] font-sans font-medium tracking-widest uppercase shadow-sm flex items-center gap-1">
                          <span>★</span> SIGNATURE
                        </div>
                      ) : (
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-ivory/90 backdrop-blur-xs text-charcoal text-[9px] font-sans font-medium tracking-wider border border-sand/40">
                          {dish.category}
                        </div>
                      )}

                      {/* Official Brand Watermark Badge */}
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-milk text-[9px] font-sans font-medium tracking-widest flex items-center gap-1.5 border border-milk/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                        <span>CAFE 1991 • ASL RETSEPT</span>
                      </div>
                    </div>

                    {/* Dish Info */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-mega-wide text-terracotta font-sans uppercase font-semibold">
                          {dish.category}
                        </span>
                        {dish.weight && (
                          <span className="text-[11px] text-charcoal-muted font-sans">
                            {dish.weight}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif-display text-2xl text-charcoal font-medium group-hover:text-terracotta transition-colors">
                        {dish.name}
                      </h3>

                      <p className="text-xs text-charcoal-muted leading-relaxed font-sans line-clamp-3">
                        {dish.description}
                      </p>

                      {/* Ingredients tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {dish.ingredients.slice(0, 4).map((ing) => (
                          <span
                            key={ing}
                            className="px-2 py-0.5 rounded-md bg-ivory text-[10px] text-charcoal-muted border border-sand/30 font-sans"
                          >
                            {ing}
                          </span>
                        ))}
                        {dish.ingredients.length > 4 && (
                          <span className="text-[10px] text-charcoal-muted pt-0.5">
                            +{dish.ingredients.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 border-t border-sand/30 flex items-center justify-between mt-4">
                    <button
                      onClick={() => setActiveModalDish(dish)}
                      className="text-xs text-charcoal-muted hover:text-charcoal flex items-center gap-1.5 transition-colors font-sans"
                    >
                      <Eye className="w-3.5 h-3.5 text-terracotta" />
                      <span>Tezkor ko‘rish</span>
                    </button>

                    <Link
                      href={`/menu/${dish.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream hover:bg-terracotta hover:text-milk text-charcoal text-xs font-medium tracking-wider transition-all"
                    >
                      <span>BATAFSIL</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick View Dish Modal */}
      {activeModalDish && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActiveModalDish(null)}
        >
          <div
            className="w-full max-w-2xl bg-ivory rounded-3xl overflow-hidden shadow-2xl border border-sand/60 relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-ivory/80 hover:bg-ivory text-charcoal transition-colors"
              aria-label="Yopish"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto bg-cream">
              <Image
                src={activeModalDish.image}
                alt={activeModalDish.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Info */}
            <div className="md:w-1/2 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-mega-wide text-terracotta uppercase font-sans font-semibold">
                    {activeModalDish.category}
                  </span>
                  <span className="text-xs font-semibold text-charcoal">
                    {activeModalDish.price}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl text-charcoal font-medium">
                  {activeModalDish.name}
                </h3>

                <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                  {activeModalDish.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <p className="text-[11px] font-semibold text-charcoal uppercase font-sans">
                    Asosiy masalliqlar:
                  </p>
                  <p className="text-xs text-charcoal-muted font-sans">
                    {activeModalDish.ingredients.join(', ')}
                  </p>
                </div>

                {activeModalDish.allergens.length > 0 && (
                  <div className="text-[11px] text-terracotta bg-peach/20 p-2 rounded-lg font-sans">
                    Allergenlar: {activeModalDish.allergens.join(', ')}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-sand/40 flex items-center justify-between gap-3">
                <Link
                  href={`/menu/${activeModalDish.slug}`}
                  className="text-xs font-medium text-charcoal hover:text-terracotta underline font-sans"
                >
                  To‘liq sahifasi →
                </Link>

                <Link
                  href="/reservation"
                  className="px-5 py-2.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider hover:bg-terracotta-dark transition-colors"
                >
                  Stol band qilish
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Invitation CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24">
        <div className="rounded-3xl bg-cream/70 border border-sand/60 p-8 sm:p-14 text-center space-y-4 shadow-soft-card">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
            Ushbu Taomlarni Restoranda Tatib Ko‘ring
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto font-sans leading-relaxed">
            Mustaqillik shoh ko‘chasidagi maskanimizda o‘zingiz yoqtirgan stolni oldindan band qiling.
          </p>
          <div className="pt-2">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta text-milk text-xs sm:text-sm font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-luxury transition-all"
            >
              <span>STOL BAND QILISH →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
