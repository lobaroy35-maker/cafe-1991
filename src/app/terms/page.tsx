import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foydalanish Shartlari | CAFE 1991',
  description: 'CAFE 1991 xizmatlaridan va veb-saytidan foydalanish shartlari.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-8 font-sans">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-charcoal-muted hover:text-charcoal transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Bosh sahifaga qaytish</span>
        </Link>

        <div className="space-y-3">
          <span className="text-[10px] font-semibold text-terracotta tracking-mega-wide uppercase">
            Huquqiy Shartnoma
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
            Foydalanish Shartlari
          </h1>
          <p className="text-xs text-charcoal-muted">
            Oxirgi yangilanish: 2026-yil 20-avgust
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-charcoal leading-relaxed p-8 rounded-3xl bg-cream/40 border border-sand/50">
          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              1. Qabul Qilish
            </h2>
            <p className="text-charcoal-muted">
              Ushbu veb-saytga kirish va undan foydalanish orqali siz mazkur Foydalanish shartlariga to‘liq rozilik bildirasiz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              2. Rezervatsiya va Bekor Qilish Tartibi
            </h2>
            <p className="text-charcoal-muted">
              Rezervatsiya qilingan vaqtdan 20 daqiqa o‘tib mehmon tashrif buyurmasa yoki ogohlantirmasa, stol boshqa mehmonlarga taqdim etilishi mumkin.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              3. Intellektual Mulk
            </h2>
            <p className="text-charcoal-muted">
              CAFE 1991 logotipi, fotosuratlari, matnlari va mualliflik menyusi qonun bilan himoyalangan va ruxsatsiz ko‘chirilishi taqiqlanadi.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
