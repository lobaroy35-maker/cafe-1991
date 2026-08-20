import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Utensils, 
  Eye 
} from 'lucide-react';
import TableMemoryRitual from '@/components/home/TableMemoryRitual';
import MoodSelector from '@/components/home/MoodSelector';
import ThenAndNow from '@/components/home/ThenAndNow';
import KitchenPhilosophy from '@/components/home/KitchenPhilosophy';
import ArchiveWall from '@/components/home/ArchiveWall';
import HeroSceneWrapper from '@/components/three/HeroSceneWrapper';
import BrandLogo from '@/components/ui/BrandLogo';
import { restaurantInfo, spaceZones, platformRatings } from '@/data/restaurant';
import { menuItems } from '@/data/menu';
import { verifiedReviews } from '@/data/reviews';

export default function HomePage() {
  const featuredDishes = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 01 HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-ivory">
        {/* Soft background glow circles */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-peach/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Typography & Hero Copy */}
            <div className="lg:col-span-7 space-y-8 text-left relative">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream border border-sand/60 text-xs font-medium tracking-ultra-wide text-charcoal shadow-soft-card">
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                  <span>TOSHKENT • MUSTAQILLIK SHOH KO‘CHASI 7</span>
                </div>
                <BrandLogo variant="seal" className="text-terracotta/50 scale-75 hidden sm:inline-flex -my-6" />
              </div>

              <div className="space-y-2">
                <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.08]">
                  BIR STOL. <br />
                  <span className="italic font-light text-terracotta">KO‘P HIKOYA.</span>
                </h1>
                <p className="text-xs sm:text-sm tracking-mega-wide text-charcoal-muted uppercase font-sans pt-2">
                  Ta’m. Xotira. 1991.
                </p>
              </div>

              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-xl">
                CAFE 1991 — an’anaviy o‘zbek mehmondo‘stligi va zamonaviy gastronomiyaning nafis uyg‘unligi. O‘tmish iliqligini bir piyola xushbo‘y choy va saralangan taomlar bilan his eting.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/reservation"
                  className="px-8 py-4 rounded-full bg-terracotta text-milk text-xs sm:text-sm font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-luxury transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>STOL BAND QILISH</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/menu"
                  className="px-8 py-4 rounded-full bg-cream border border-sand text-charcoal text-xs sm:text-sm font-medium tracking-ultra-wide hover:bg-cream-dark transition-all duration-300"
                >
                  <span>MENYUNI KO‘RISH →</span>
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-sand/40 flex flex-wrap items-center gap-6 text-xs text-charcoal-muted font-sans">
                <div className="flex items-center gap-2">
                  <div className="flex text-terracotta">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-charcoal">4.8 / 5.0</span>
                  <span className="text-[11px]">(850+ Yandex sharhlari)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sage-dark" />
                  <span>Tasdiqlangan Original Retseptlar</span>
                </div>
              </div>
            </div>

            {/* Right 3D Interactive Composition */}
            <div className="lg:col-span-5 relative">
              <HeroSceneWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* 02 QUICK RESERVATION BAR */}
      <section className="bg-cream/70 border-y border-sand/40 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-ivory rounded-2xl p-6 border border-sand shadow-soft-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-terracotta" />
              <div>
                <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                  Oqshom Uchun Joy Band Qiling
                </p>
                <p className="text-[11px] text-charcoal-muted">
                  Bir daqiqada o‘zingiz yoqtirgan stolni tanlang
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                href="/reservation"
                className="w-full md:w-auto px-6 py-3 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider text-center hover:bg-terracotta-dark shadow-soft-card transition-all"
              >
                STOL BAND QILISHNI BOSHLASH →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 SIGNATURE FOOD / FEATURED MENU HIGHLIGHTS */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
                Oshpazlik Shoh Asarlari
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
                Saralangan Taomlar
              </h2>
              <p className="text-sm text-charcoal-muted max-w-lg font-sans">
                CAFE 1991 tashrif buyuruvchilari tomonidan eng ko‘p sevilgan va baholangan mualliflik durdonalari.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-ultra-wide text-terracotta hover:text-terracotta-dark font-sans"
            >
              <span>TO‘LIQ MENYUNI KO‘RISH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish) => (
              <Link
                key={dish.id}
                href={`/menu/${dish.slug}`}
                className="group rounded-3xl bg-cream/40 border border-sand/50 overflow-hidden shadow-soft-card hover:shadow-soft-luxury hover:border-terracotta transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-cream">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ivory/90 backdrop-blur-xs text-[10px] font-sans font-medium text-charcoal border border-sand/40">
                      {dish.price}
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <p className="text-[10px] tracking-mega-wide text-terracotta font-sans uppercase font-semibold">
                      {dish.category}
                    </p>
                    <h3 className="font-serif-display text-xl text-charcoal font-medium group-hover:text-terracotta transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed font-sans">
                      {dish.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-sand/30 mt-4 text-[11px] text-charcoal-muted font-sans">
                  <span>{dish.weight || 'Porsiya'}</span>
                  <span className="text-terracotta font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Batafsil <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 SIGNATURE TABLE MEMORY EXPERIENCE */}
      <TableMemoryRitual />

      {/* 05 THE SPACE (MAKON) */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
              Arxitektura va Muhit
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
              Restoran Zonalarimiz
            </h2>
            <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
              Shahar manzarasi, sokin yashil bog‘ yoki tantanali asosiy zal — oqshomingiz uchun eng munosib atmosferani tanlang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaceZones.slice(0, 3).map((zone) => (
              <div
                key={zone.id}
                className="group rounded-3xl bg-cream/30 border border-sand/50 overflow-hidden shadow-soft-card hover:shadow-soft-luxury transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={zone.image}
                      alt={zone.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs font-sans tracking-wider text-milk bg-charcoal/60 px-3 py-1 rounded-full backdrop-blur-xs">
                      {zone.capacity}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-display text-2xl text-charcoal font-medium">
                      {zone.name}
                    </h3>
                    <p className="font-serif italic text-xs text-charcoal-muted">
                      “{zone.tagline}”
                    </p>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                      {zone.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/reservation?zone=${zone.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-cream hover:bg-terracotta hover:text-milk text-charcoal text-xs font-medium tracking-wider transition-all"
                  >
                    <span>SHU ZONANI TANLASH</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 MOOD SELECTOR */}
      <MoodSelector />

      {/* 07 THEN & NOW */}
      <ThenAndNow />

      {/* 08 KITCHEN PHILOSOPHY */}
      <KitchenPhilosophy />

      {/* 09 1991 ARCHIVE WALL */}
      <ArchiveWall />

      {/* 10 VERIFIED REVIEWS & RATINGS */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
              Mehmonlarimiz Fikrlari
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
              Tasdiqlangan Sharhlar
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs text-charcoal-muted font-sans pt-2">
              {platformRatings.map((p) => (
                <div key={p.platform} className="px-3 py-1 rounded-full bg-cream border border-sand/40">
                  <span className="font-semibold text-charcoal">{p.platform}:</span> {p.score} / {p.maxScore}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 sm:p-8 rounded-3xl bg-cream/30 border border-sand/50 shadow-soft-card flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-terracotta">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-charcoal font-serif italic leading-relaxed">
                    “{rev.text}”
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/30 flex items-center justify-between text-[11px] text-charcoal-muted font-sans">
                  <div>
                    <p className="font-medium text-charcoal">{rev.author}</p>
                    <p className="text-[10px]">{rev.platform}</p>
                  </div>
                  <span className="text-sage-dark font-medium">✓ Tasdiqlangan</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 LOCATION & MAP SUMMARY */}
      <section className="py-20 bg-cream/50 border-t border-sand/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
                Toshkent Markazida
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
                CAFE 1991 Manzili & Tashrif
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-charcoal-muted font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">{restaurantInfo.address.street}</p>
                    <p className="text-xs">{restaurantInfo.address.landmark}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-terracotta shrink-0" />
                  <a href={`tel:${restaurantInfo.phone.primary.replace(/\s+/g, '')}`} className="hover:underline font-medium text-charcoal">
                    {restaurantInfo.phone.primary}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Har kuni 12:00 dan kechki 01:00 / 02:00 gacha</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ivory border border-sand text-charcoal text-xs font-medium tracking-wider hover:bg-terracotta hover:text-milk hover:border-terracotta transition-all"
                >
                  <span>XARITADA KO‘RISH VA YO‘L KO‘RSATGICH →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 rounded-3xl overflow-hidden shadow-soft-luxury border border-sand/50">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                alt="CAFE 1991 Manzili"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-ivory/90 backdrop-blur-md border border-sand/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-semibold text-charcoal">Mustaqillik shoh ko‘chasi, 7</p>
                  <p className="text-[10px] text-charcoal-muted font-sans">Yunus Rajabiy metro bekati yoni</p>
                </div>
                <Link
                  href="/reservation"
                  className="px-4 py-2 rounded-full bg-terracotta text-milk text-xs font-sans font-medium"
                >
                  Stol band qilish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 FINAL LUXURY INVITATION */}
      <section className="py-24 bg-ivory text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
            Samimiy Taklif
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-charcoal font-medium leading-tight">
            Dasturxonimiz Sizni Kutmoqda
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            Do‘stlaringiz yoki oilangiz bilan unutilmas kechani rejalashtiring. Har bir stol — yangi hikoyaning boshlanishi.
          </p>
          <div className="pt-4">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-terracotta text-milk text-xs sm:text-sm font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-luxury transition-all duration-300 group"
            >
              <span>STOL BAND QILISH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
