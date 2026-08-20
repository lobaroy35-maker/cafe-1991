import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Utensils, 
  Flame, 
  Leaf, 
  Clock, 
  Info 
} from 'lucide-react';
import { menuItems } from '@/data/menu';
import DishViewerWrapper from '@/components/three/DishViewerWrapper';
import type { Metadata } from 'next';

interface DishPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return menuItems.map((dish) => ({
    slug: dish.slug,
  }));
}

export async function generateMetadata({ params }: DishPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dish = menuItems.find((d) => d.slug === slug);
  if (!dish) return { title: 'Taom Topilmadi' };

  return {
    title: `${dish.name} | CAFE 1991 Menyusi`,
    description: dish.shortDescription,
    openGraph: {
      title: `${dish.name} — CAFE 1991`,
      description: dish.description,
      images: [{ url: dish.image, width: 1000, height: 600, alt: dish.name }],
    },
  };
}

export default async function DishDetailPage({ params }: DishPageProps) {
  const { slug } = await params;
  const dish = menuItems.find((d) => d.slug === slug);

  if (!dish) {
    notFound();
  }

  const relatedDishes = menuItems
    .filter((d) => d.category === dish.category && d.id !== dish.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-xs font-sans text-charcoal-muted hover:text-charcoal transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Barcha menyuga qaytish</span>
        </Link>
      </div>

      {/* Main Showcase Hero */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-soft-luxury border border-sand/50 bg-cream">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />

              <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-ivory/95 backdrop-blur-md text-sm font-sans font-semibold text-charcoal border border-sand/50 shadow-sm">
                {dish.price}
              </div>
              {dish.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-terracotta text-milk text-xs font-sans font-medium tracking-wider shadow-sm">
                  ★ SIGNATURE
                </div>
              )}

              {/* Official Brand Seal Badge */}
              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-charcoal/85 backdrop-blur-md text-milk text-xs font-sans font-medium tracking-widest flex items-center gap-2 border border-milk/20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                <span>CAFE 1991 • ASL RETSEPT</span>
              </div>
            </div>

            {/* Interactive 3D Viewer Element */}
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider text-charcoal uppercase font-sans">
                Interaktiv 3D Ko‘rinish
              </p>
              <DishViewerWrapper dishName={dish.name} />
            </div>
          </div>

          {/* Right Column: Culinary Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
                  {dish.category}
                </span>
                {dish.weight && (
                  <span className="text-xs text-charcoal-muted font-sans px-2.5 py-0.5 rounded-full bg-cream border border-sand/40">
                    {dish.weight}
                  </span>
                )}
              </div>

              <h1 className="font-serif-display text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
                {dish.name}
              </h1>

              {dish.originalName && (
                <p className="font-serif italic text-sm text-charcoal-muted">
                  {dish.originalName}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
              {dish.description}
            </p>

            {/* Taste Profile Metrics */}
            <div className="p-6 rounded-2xl bg-cream/40 border border-sand/40 space-y-3">
              <p className="text-xs font-semibold tracking-wider text-charcoal uppercase font-sans">
                Ta’m Profili Mutanosibligi
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-sans">
                <div className="space-y-1">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Shirinlik</span>
                    <span className="font-medium text-charcoal">{dish.tasteProfile.sweet}/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-sand/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: `${dish.tasteProfile.sweet * 10}%` }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Sho‘rlik / Tuz</span>
                    <span className="font-medium text-charcoal">{dish.tasteProfile.savory}/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-sand/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: `${dish.tasteProfile.savory * 10}%` }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Xushbo‘ylik</span>
                    <span className="font-medium text-charcoal">{dish.tasteProfile.fragrant}/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-sand/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: `${dish.tasteProfile.fragrant * 10}%` }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Tekstura</span>
                    <span className="font-medium text-charcoal">{dish.tasteProfile.texture}/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-sand/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: `${dish.tasteProfile.texture * 10}%` }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Umami</span>
                    <span className="font-medium text-charcoal">{dish.tasteProfile.umami}/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-sand/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: `${dish.tasteProfile.umami * 10}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients & Allergens */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider text-charcoal uppercase font-sans">
                  Masalliqlar va Tarkib:
                </p>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1 rounded-full bg-cream border border-sand/40 text-xs text-charcoal font-sans"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {dish.allergens.length > 0 && (
                <div className="p-3.5 rounded-xl bg-peach/20 border border-peach/40 text-xs text-charcoal space-y-1 font-sans">
                  <span className="font-semibold text-terracotta-dark">Diqqat (Allergenlar): </span>
                  <span>{dish.allergens.join(', ')}</span>
                </div>
              )}

              {dish.ceramicType && (
                <div className="text-xs text-charcoal-muted font-sans flex items-center gap-2 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span><strong>Idish turi:</strong> {dish.ceramicType}</span>
                </div>
              )}

              {dish.pairingSuggestion && (
                <div className="text-xs text-charcoal-muted font-sans flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span><strong>Tavsiya etiladigan ichimlik:</strong> {dish.pairingSuggestion}</span>
                </div>
              )}
            </div>

            {/* Chef's Note */}
            {dish.chefNote && (
              <div className="p-5 rounded-2xl bg-ivory border border-sand/60 shadow-soft-card space-y-1.5">
                <p className="text-xs font-semibold text-charcoal uppercase font-sans">
                  Bosh Oshpaz Qaydlari
                </p>
                <p className="font-serif italic text-sm text-charcoal-muted leading-relaxed">
                  “{dish.chefNote}”
                </p>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-sand/40 flex flex-wrap items-center gap-4">
              <Link
                href={`/reservation?dish=${encodeURIComponent(dish.name)}`}
                className="flex-1 text-center py-4 px-8 rounded-full bg-terracotta text-milk text-xs sm:text-sm font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-luxury transition-all"
              >
                USHBU TAOM UCHUN STOL BAND QILISH →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Dishes */}
        {relatedDishes.length > 0 && (
          <div className="mt-24 pt-16 border-t border-sand/40 space-y-8">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
              Shu Kategoriyadagi Boshqa Taomlar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedDishes.map((rDish) => (
                <Link
                  key={rDish.id}
                  href={`/menu/${rDish.slug}`}
                  className="group rounded-3xl bg-cream/30 border border-sand/40 overflow-hidden p-4 flex items-center gap-4 hover:border-terracotta transition-colors shadow-soft-card"
                >
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-cream">
                    <Image
                      src={rDish.image}
                      alt={rDish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif-display text-lg text-charcoal font-medium group-hover:text-terracotta transition-colors">
                      {rDish.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted font-sans">
                      {rDish.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
