import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Flame, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

export default function KitchenPhilosophy() {
  const pillars = [
    {
      icon: Leaf,
      title: 'Mavsumiy & Tabiiy Mahsulotlar',
      desc: 'Faqat Farg‘ona vodiysi shaftolisi, Samarqand mayizi va Chotqol tog‘ giyohlari kabi tabiiy manbalar.',
    },
    {
      icon: Flame,
      title: 'O‘rik Ko‘mirida Olov Maromi',
      desc: 'Shashlik va go‘shtlar o‘rik daraxti ko‘mirida qovurilib, mevali mayin dud iforini o‘ziga singdiradi.',
    },
    {
      icon: Sparkles,
      title: 'Qo‘lda Yasalgan Rishton Keramikasi',
      desc: 'Har bir taom o‘ziga xos shakllangan, tabiiy sirlangan sopol laganlarda san’at asaridek tortiladi.',
    },
    {
      icon: HeartHandshake,
      title: 'Sharqona Mehmondo‘stlik Qoidasi',
      desc: 'Mehmon dasturxonga o‘tirgan ilk soniyadanoq ehtirom va samimiy oilaviy iliqlikni his etishi shart.',
    },
  ];

  return (
    <section className="py-24 bg-ivory relative overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
              Ta’m Ortida Ijod
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal leading-tight">
              Oshpazlik Falsafamiz: Oddiylikdagi Yuksak Mukammallik
            </h2>
            <p className="font-serif italic text-lg text-charcoal-muted leading-relaxed">
              “Haqiqiy mazali taom ko‘p sun’iy qo‘shimchalarga muhtoj emas — eng sara tabiiy mahsulot, olov va mehr yetarlidir.”
            </p>
            <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
              CAFE 1991 oshxonasida an’anaviy o‘zbek pazandaligi Yaqin Sharqning xushbo‘y ziravorlari va zamonaviy gastronomik texnologiyalar bilan boyitiladi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="space-y-2 p-4 rounded-2xl bg-cream/40 border border-sand/40">
                    <div className="w-8 h-8 rounded-full bg-peach/30 flex items-center justify-center text-terracotta">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                      {p.title}
                    </h3>
                    <p className="text-[11px] text-charcoal-muted font-sans leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-ultra-wide text-terracotta hover:text-terracotta-dark font-sans"
              >
                <span>BIZ HAQIMIZDA TO‘LIQ O‘QING</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-soft-luxury border border-sand/50">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="CAFE 1991 Oshpazlik San’ati"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-ivory/90 backdrop-blur-md border border-sand/40 space-y-1">
                <p className="text-xs font-serif font-semibold text-charcoal">
                  Har Bir Taom — Mustaqil Asar
                </p>
                <p className="text-[11px] text-charcoal-muted font-sans">
                  Issiq non xamiridan tortib, 28 kunlik steykgacha har bir jarayon nazoratda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
