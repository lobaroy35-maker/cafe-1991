import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maxfiylik Siyosati | CAFE 1991',
  description: 'CAFE 1991 restorani maxfiylik siyosati va shaxsiy ma’lumotlarni himoya qilish tartibi.',
};

export default function PrivacyPage() {
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
            Huquqiy Ma’lumot
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
            Maxfiylik Siyosati
          </h1>
          <p className="text-xs text-charcoal-muted">
            Oxirgi yangilanish: 2026-yil 20-avgust
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-charcoal leading-relaxed p-8 rounded-3xl bg-cream/40 border border-sand/50">
          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              1. Umumiy Qoidalar
            </h2>
            <p className="text-charcoal-muted">
              Ushbu Maxfiylik siyosati CAFE 1991 restoranining veb-sayti orqali foydalanuvchilardan olinadigan ma’lumotlarni yig‘ish, saqlash va ulardan foydalanish tartibini belgilaydi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              2. Qanday Ma’lumotlar Yig‘iladi?
            </h2>
            <p className="text-charcoal-muted">
              Stol band qilish (rezervatsiya) yoki aloqa formasini to‘ldirish chog‘ida ismingiz, telefon raqamingiz, elektron pochta manzilingiz va tashrifga oid maxsus tilaklaringiz so‘ralishi mumkin.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              3. Ma’lumotlardan Foydalanish Maqsadi
            </h2>
            <p className="text-charcoal-muted">
              Yig‘ilgan ma’lumotlar faqat rezervatsiyani tasdiqlash, mijoz bilan aloqa o‘rnatish va xizmat ko‘rsatish sifatini yaxshilash maqsadida ishlatiladi. Ma’lumotlar uchinchi shaxslarga berilmaydi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-display text-xl text-charcoal font-semibold">
              4. Xavfsizlik
            </h2>
            <p className="text-charcoal-muted">
              Biz foydalanuvchilarimizning shaxsiy ma’lumotlari xavfsizligini ta’minlash uchun zamonaviy shifrlash va xavfsizlik standartlaridan foydalanamiz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
