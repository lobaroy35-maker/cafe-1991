import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowUpRight, Instagram, Send, Heart } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-cream/60 border-t border-sand/40 pt-16 pb-12 text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-sand/50 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="full" />
            <p className="font-serif italic text-charcoal-muted text-sm leading-relaxed max-w-sm">
              “1991 — NOM EMAS. 1991 — XOTIRA.”
            </p>
            <p className="text-xs text-charcoal-muted leading-relaxed font-sans max-w-sm">
              O‘zbekiston gastronomik madaniyati, samimiy mehmondo‘stlik va zamonaviy oshpazlik san’atini birlashtiruvchi premium restoran.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory border border-sand flex items-center justify-center text-charcoal hover:text-terracotta hover:border-terracotta transition-colors"
                aria-label="Instagram sahifasi"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory border border-sand flex items-center justify-center text-charcoal hover:text-terracotta hover:border-terracotta transition-colors"
                aria-label="Telegram kanali"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-ultra-wide text-charcoal uppercase">
              Navigatsiya
            </p>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li>
                <Link href="/menu" className="hover:text-terracotta transition-colors">
                  Restoran Menyusi
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-terracotta transition-colors">
                  Stol Band Qilish
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-terracotta transition-colors">
                  Biz Haqimizda
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-terracotta transition-colors">
                  Fotogalereya
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-terracotta transition-colors">
                  Gastronomik Jurnal
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-terracotta transition-colors">
                  Makon & Xarita
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-ultra-wide text-charcoal uppercase flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              <span>Ish Vaqtlari</span>
            </p>
            <div className="space-y-2 text-xs text-charcoal-muted font-sans">
              {restaurantInfo.openingHours.map((schedule) => (
                <div key={schedule.days} className="flex justify-between border-b border-sand/20 pb-1">
                  <span>{schedule.days}</span>
                  <span className="font-medium text-charcoal">{schedule.hours}</span>
                </div>
              ))}
              <p className="text-[11px] text-sage-dark italic pt-1">
                * Bayram va dam olish kunlarida oldindan rezervatsiya tavsiya etiladi.
              </p>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-ultra-wide text-charcoal uppercase flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              <span>Manzil & Bog‘lanish</span>
            </p>
            <div className="space-y-2 text-xs text-charcoal-muted">
              <p className="text-charcoal font-medium">{restaurantInfo.address.street}</p>
              <p className="text-[11px]">{restaurantInfo.address.landmark}</p>
              <div className="pt-2 space-y-1.5">
                <a
                  href={`tel:${restaurantInfo.phone.primary.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-terracotta font-medium hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{restaurantInfo.phone.primary}</span>
                </a>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="flex items-center gap-2 hover:text-charcoal transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{restaurantInfo.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-charcoal-muted gap-4">
          <div className="flex items-center gap-4">
            <BrandLogo variant="seal" className="text-terracotta/40 scale-75 -ml-3" />
            <p>© {new Date().getFullYear()} CAFE 1991. Barcha huquqlar himoyalangan.</p>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-charcoal transition-colors">
              Maxfiylik Siyosati
            </Link>
            <Link href="/terms" className="hover:text-charcoal transition-colors">
              Foydalanish Shartlari
            </Link>
            <Link href="/location" className="hover:text-charcoal transition-colors flex items-center gap-1">
              <span>Geolokatsiya</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
