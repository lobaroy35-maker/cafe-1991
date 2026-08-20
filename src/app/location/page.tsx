import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Car, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Makon & Manzil | CAFE 1991 Toshkent',
  description:
    'Mustaqillik shoh ko‘chasi, 7-uy. Yunus Rajabiy metro bekati va 50-maktab yoni. Avtoturargoh, ish vaqti va xarita.',
};

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Header */}
      <section className="pt-12 pb-16 bg-cream/40 border-b border-sand/40 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
            Toshkent Markazida
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal">
            Makon va Geolokatsiya
          </h1>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto font-sans leading-relaxed">
            Mustaqillik shoh ko‘chasi, 7-uy. Qadimiy chinorlar soyasi ostidagi shinam va sokin manzil.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 space-y-16">
        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-cream/40 border border-sand/60 shadow-soft-card space-y-4">
              <div className="w-10 h-10 rounded-full bg-peach/30 text-terracotta flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                  Restoran Manzili
                </p>
                <p className="text-base font-medium text-charcoal">
                  {restaurantInfo.address.street}
                </p>
                <p className="text-xs text-charcoal-muted">
                  Mo‘ljal: {restaurantInfo.address.landmark}
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-8 rounded-3xl bg-cream/40 border border-sand/60 shadow-soft-card space-y-4">
              <div className="w-10 h-10 rounded-full bg-sage/30 text-sage-dark flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2 font-sans text-xs">
                <p className="font-semibold uppercase tracking-wider text-charcoal">
                  Ish Vaqti Jadvali
                </p>
                {restaurantInfo.openingHours.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-sand/20 pb-1.5 text-charcoal-muted">
                    <span>{h.days}</span>
                    <span className="font-semibold text-charcoal">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking & Transport */}
            <div className="p-8 rounded-3xl bg-cream/40 border border-sand/60 shadow-soft-card space-y-4">
              <div className="w-10 h-10 rounded-full bg-sand/30 text-charcoal flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans text-xs text-charcoal-muted">
                <p className="font-semibold uppercase tracking-wider text-charcoal">
                  Avtoturargoh va Qulayliklar
                </p>
                <p>• Restoran hududida xususiy xavfsiz avtoturargoh mavjud.</p>
                <p>• Yunus Rajabiy va Amir Temur Xiyoboni metro bekatlaridan 5 daqiqalik piyoda yo‘l.</p>
              </div>
            </div>

            {/* Direct Calls */}
            <div className="p-6 rounded-2xl bg-ivory border border-sand shadow-soft-card flex items-center justify-between font-sans">
              <div>
                <p className="text-xs font-semibold text-charcoal">To‘g‘ridan-to‘g‘ri qo‘ng‘iroq:</p>
                <a
                  href={`tel:${restaurantInfo.phone.primary.replace(/\s+/g, '')}`}
                  className="text-sm font-semibold text-terracotta hover:underline"
                >
                  {restaurantInfo.phone.primary}
                </a>
              </div>
              <Link
                href="/reservation"
                className="px-5 py-2.5 rounded-full bg-terracotta text-milk text-xs font-medium"
              >
                Stol band qilish
              </Link>
            </div>
          </div>

          {/* Right Artistic & Map View */}
          <div className="lg:col-span-7 space-y-6">
            {/* 2D Minimalist Architectural Map Representation */}
            <div className="relative rounded-3xl overflow-hidden bg-cream/70 border border-sand/60 shadow-soft-luxury p-8 sm:p-12 min-h-[480px] flex flex-col justify-between">
              {/* Map stylized background lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#55463D" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Top Map Banner */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-serif italic text-charcoal-muted">
                  Toshkent Shahar Xaritasi • Yunus Rajabiy
                </span>
                <span className="text-xs font-sans font-medium text-terracotta bg-ivory px-3 py-1 rounded-full border border-sand/40 shadow-xs">
                  Markaziy Hudud
                </span>
              </div>

              {/* Center Restaurant Marker */}
              <div className="relative z-10 my-auto text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-terracotta text-milk mx-auto flex items-center justify-center shadow-soft-luxury ring-8 ring-peach/40 animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-display text-3xl font-medium text-charcoal">
                    CAFE 1991
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans">
                    Mustaqillik shoh ko‘chasi, 7-uy, Toshkent
                  </p>
                </div>
              </div>

              {/* Bottom External Maps Redirection Actions */}
              <div className="relative z-10 pt-6 border-t border-sand/40 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
                <div className="flex items-center gap-3">
                  <a
                    href="https://yandex.uz/maps/org/cafe_1991/104753066348/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-ivory border border-sand text-charcoal hover:bg-terracotta hover:text-milk hover:border-terracotta transition-colors shadow-xs"
                  >
                    Yandex Xaritada Ochish ↗
                  </a>
                  <a
                    href="https://maps.google.com/?cid=cafe1991tashkent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-ivory border border-sand text-charcoal hover:bg-terracotta hover:text-milk hover:border-terracotta transition-colors shadow-xs"
                  >
                    Google Maps ↗
                  </a>
                </div>

                <Link
                  href="/reservation"
                  className="px-6 py-2.5 rounded-full bg-terracotta text-milk font-medium hover:bg-terracotta-dark transition-colors shadow-soft-card"
                >
                  Stol Band Qilish →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
