'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const pathname = usePathname();

  // Handle body scroll lock & Escape key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm lg:hidden"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl p-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-sand/40">
              <div>
                <span className="font-serif-display text-2xl font-medium tracking-ultra-wide text-charcoal">
                  CAFE 1991
                </span>
                <p className="text-[10px] tracking-mega-wide text-charcoal-muted uppercase">
                  Toshkent
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-cream hover:bg-cream-dark text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
                aria-label="Menyuni yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-8 space-y-5" aria-label="Mobil navigatsiya">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block font-serif-display text-xl sm:text-2xl tracking-wider transition-colors ${
                        isActive
                          ? 'text-terracotta font-semibold'
                          : 'text-charcoal hover:text-terracotta'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions & Contact Details */}
            <div className="pt-6 border-t border-sand/40 space-y-4">
              <Link
                href="/reservation"
                onClick={onClose}
                className="w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-terracotta text-milk font-sans text-xs font-medium tracking-ultra-wide shadow-soft-card hover:bg-terracotta-dark transition-all"
              >
                <span>STOL BAND QILISH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="space-y-2 pt-2 text-xs text-charcoal-muted">
                <a
                  href={`tel:${restaurantInfo.phone.primary.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-charcoal transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-terracotta" />
                  <span>{restaurantInfo.phone.primary}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span className="truncate">{restaurantInfo.address.street}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-terracotta" />
                  <span>Har kuni 12:00 dan ochiq</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
