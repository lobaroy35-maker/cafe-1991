import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Compass, History, Camera } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biz Haqimizda | CAFE 1991 Falsafasi va Madaniyati',
  description:
    '1991 — NOM EMAS. 1991 — XOTIRA. Toshkentning markazidagi an’anaviy mehmondo‘stlik va o‘zbek modern gastronomiyasi maskani.',
};

export default function AboutPage() {
  const collageImages = [
    {
      src: '/images/gallery/gallery-1.jpg',
      alt: 'CAFE 1991 Asosiy Restoran Zali',
      caption: 'Asosiy zal va zamonaviy o‘zbek interyeri'
    },
    {
      src: '/images/gallery/gallery-5.jpg',
      alt: 'Yozgi Veranda va Yashil Bog‘',
      caption: 'Yozgi sokin veranda va tabiat nafasi'
    },
    {
      src: '/images/about/about-interior.jpg',
      alt: 'Mize & Livan Gastronomiyasi',
      caption: 'Klassik va mualliflik sovuq zakuskalari'
    },
    {
      src: '/images/gallery/gallery-7.jpg',
      alt: 'Marokash Choy Marosimi',
      caption: 'Yalpizli sharqona choy marosimi'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Editorial Hero */}
      <section className="pt-16 pb-20 bg-cream/40 border-b border-sand/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          <div className="flex justify-center mb-2">
            <BrandLogo variant="seal" className="text-terracotta/40 scale-90" />
          </div>
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
            CAFE 1991 Ruhining Boshlanishi
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-medium text-charcoal leading-tight">
            1991 — Nom Emas. <br />
            <span className="italic font-light text-terracotta">1991 — Xotira.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            “Biz insonlarni faqat taom tanovul qilish uchun emas, balki qadrli lahzalarni birgalikda yodga olish uchun jamlaymiz.”
          </p>
        </div>
      </section>

      {/* The Story & Main Visual Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[450px] sm:h-[520px] rounded-3xl overflow-hidden shadow-soft-luxury border border-sand/50 group">
              <Image
                src="/images/gallery/gallery-1.jpg"
                alt="CAFE 1991 Toshkent Zali"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-ivory/90 backdrop-blur-md border border-sand/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-semibold text-charcoal">CAFE 1991 Markaziy Zali</p>
                  <p className="text-[10px] text-charcoal-muted font-sans">Mustaqillik shoh ko‘chasi, 7</p>
                </div>
                <span className="text-[10px] font-sans font-medium text-terracotta bg-cream px-3 py-1 rounded-full border border-sand/40">
                  Est. 1991
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
                Bizning Tariximiz
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
                Toshkent Yuragidagi Mehmondo‘stlik Makoni
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
                1991 yilda O‘zbekiston o‘z mustaqilligiga erishgan davrdan boshlab poytaxtimiz yangi madaniy yuksalish bosqichiga qadam qo‘ydi. CAFE 1991 ana shu davrning samimiy ruhini, xalqimizning mehmonga bo‘lgan cheksiz ehtiromini va boy oshxona an’analarini o‘zida mujassamlashtiradi.
              </p>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
                Bizning maqsadimiz — oddiy ovqatlanish maskani bo‘lish emas, balki har bir mehmon o‘zini qadrdon xonadondagidek his qiladigan, xushbo‘y choy nafasi va lazzatli taomlar uyg‘unlashgan gastronomik xotira yaratishdir.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sand/40 text-center font-sans">
                <div className="space-y-1">
                  <p className="font-serif-display text-3xl font-semibold text-terracotta">1991</p>
                  <p className="text-[11px] text-charcoal-muted uppercase">Tarixiy Boshlanish</p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif-display text-3xl font-semibold text-terracotta">138+</p>
                  <p className="text-[11px] text-charcoal-muted uppercase">Original Taomlar</p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif-display text-3xl font-semibold text-terracotta">4.8</p>
                  <p className="text-[11px] text-charcoal-muted uppercase">O‘rtacha Reyting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Photo Collage Section */}
      <section className="py-20 bg-cream/30 border-y border-sand/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
              Makon va Nafosat
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
              CAFE 1991 Muhitidan Lavhalar
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted font-sans">
              Har bir burchakda qalb harorati, tabiiy materiallar va mehmondo‘stlik ruhiyatini sezasiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collageImages.map((img, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-ivory border border-sand/50 shadow-soft-card flex flex-col justify-between"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4 bg-ivory border-t border-sand/30">
                  <p className="text-xs font-serif font-medium text-charcoal">{img.alt}</p>
                  <p className="text-[11px] text-charcoal-muted font-sans mt-0.5">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary & Craft Pillars */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
              Asosiy Qadriyatlarimiz
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
              Bizga Kuch Bag‘ishlovchi Tamoyillar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-cream/30 border border-sand/50 shadow-soft-card space-y-4">
              <div className="w-12 h-12 rounded-full bg-peach/30 text-terracotta flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl text-charcoal font-medium">
                O‘zbek Modern Gastronomiyasi
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                An’anaviy palov va shashliklarni yangicha zamonaviy estetikada, nozik porsiyalarda va nozik souslar bilan taqdim etish.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-cream/30 border border-sand/50 shadow-soft-card space-y-4">
              <div className="w-12 h-12 rounded-full bg-sage/30 text-sage-dark flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl text-charcoal font-medium">
                Haqiqiy Tabiiy Manbalar
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                Faqat mahalliy dehqonlar va fermerlar tomonidan yetishtirilgan tabiiy sabzavotlar, mevalar, go‘sht va tog‘ giyohlari.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-cream/30 border border-sand/50 shadow-soft-card space-y-4">
              <div className="w-12 h-12 rounded-full bg-sand/30 text-charcoal flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl text-charcoal font-medium">
                Madaniyat va San’at Uyg‘unligi
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                Rishton sopollari, qo‘lda to‘qilgan zig‘irpoya matolari va sokin jonli musiqiy oqshomlar orqali yaratilgan atmosfera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation CTA */}
      <section className="pt-12 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
            Bizning Dasturxonimizda Mehmon Bo‘ling
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed">
            Mustaqillik shoh ko‘chasidagi manzilimizda siz uchun har doim iliq qabul tayyor.
          </p>
          <div className="pt-2">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta text-milk text-xs font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-card transition-all"
            >
              <span>STOL BAND QILISH →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
