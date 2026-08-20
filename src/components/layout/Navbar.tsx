'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import BrandLogo from '@/components/ui/BrandLogo';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MENYU', href: '/menu' },
    { name: 'MAKON', href: '/location' },
    { name: 'BIZ HAQIMIZDA', href: '/about' },
    { name: 'GALEREYA', href: '/gallery' },
    { name: 'JURNAL', href: '/journal' },
    { name: 'ALOQA', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-cream py-3.5 shadow-soft-luxury'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Official Brand Logo Wordmark */}
          <BrandLogo variant="full" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Asosiy menyu">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium tracking-ultra-wide transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-terracotta font-semibold'
                      : 'text-charcoal hover:text-terracotta'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-terracotta rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href={`tel:${restaurantInfo.phone.primary.replace(/\s+/g, '')}`}
              className="text-xs font-sans tracking-wider text-charcoal-muted hover:text-charcoal flex items-center gap-1.5 transition-colors"
              title="Telefon orqali bog‘lanish"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span className="hidden xl:inline">{restaurantInfo.phone.display}</span>
            </a>

            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border border-sand hover:bg-terracotta hover:text-milk hover:border-terracotta text-charcoal text-xs font-medium tracking-ultra-wide transition-all duration-300 shadow-soft-card group"
            >
              <Calendar className="w-3.5 h-3.5 text-terracotta group-hover:text-milk transition-colors" />
              <span>REZERVATSIYA →</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/reservation"
              className="sm:hidden px-3.5 py-2 rounded-full bg-terracotta text-milk text-[11px] font-medium tracking-wider"
              aria-label="Stol band qilish"
            >
              STOL →
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full bg-cream text-charcoal hover:bg-cream-dark transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
              aria-label="Menyuni ochish"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
