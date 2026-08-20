'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const ritualSteps = [
  {
    step: '01',
    title: 'BO‘SH STOL',
    subtitle: 'Yangi boshlanish va sokin kutish',
    description: 'Eman yog‘ochidan yasalgan toza stol. Har bir yangi kecha shu bo‘sh maydonda o‘z hikoyasini yoza boshlaydi.',
    layerColor: 'bg-ivory',
    icon: '🪑'
  },
  {
    step: '02',
    title: 'TABIIY ZIG‘IRPOYA',
    subtitle: 'Linen matosi mayin yoyiladi',
    description: 'Qo‘lda to‘qilgan tabiiy zig‘irpoya matosi to‘shalib, stolga uy iliqligi va nozik qulaylik baxsh etadi.',
    layerColor: 'bg-cream',
    icon: '🧵'
  },
  {
    step: '03',
    title: 'RISHTON KERAMIKASI',
    subtitle: 'Usta qo‘li bilan shakllangan sopol lagan',
    description: 'Tabiiy qum va loydan tayyorlangan, mot sirlangan laganlar o‘z o‘rnini topadi. Loy va mehmondo‘stlik birlashuvi.',
    layerColor: 'bg-sand/30',
    icon: '🏺'
  },
  {
    step: '04',
    title: 'SHARQONA QADAH VA CHOYNAK',
    subtitle: 'Xushbo‘y marokash yalpizi nafasi',
    description: 'Iliq qadahlar va yalpiz, dolchin hamda badyan iforiga to‘la damlama choynak stol markaziga qo‘yiladi.',
    layerColor: 'bg-peach/20',
    icon: '🫖'
  },
  {
    step: '05',
    title: '2D BOTANIKA VA CHIZGILAR',
    subtitle: 'San’atkorona chizilgan naqshlar',
    description: 'Zaytun va anor barglarining nozik chiziqlari dasturxon ustida virtual uyg‘onadi.',
    layerColor: 'bg-sage/20',
    icon: '🌿'
  },
  {
    step: '06',
    title: 'TAOMNING PAYDO BO‘LISHI',
    subtitle: 'Oshxona shoh asari — 1991 Bayramona Palovi',
    description: 'Oltinrang sabzi, nozik qo‘zichoq go‘shti, qazi va xushbo‘y zira bilan sayqallangan mualliflik palovi.',
    layerColor: 'bg-terracotta/20',
    icon: '🍲'
  },
  {
    step: '07',
    title: 'ILIQ QUYOSH VA SHAM NURI',
    subtitle: 'Oqshom shabadasi va mayin yorug‘lik',
    description: 'Derazadan kirayotgan oqshom quyoshi va stol ustidagi miltillovchi sham nuri butun zalni iliqlik bilan qoplaydi.',
    layerColor: 'bg-cream-dark/40',
    icon: '🕯️'
  },
  {
    step: '08',
    title: '1991 XOTIRASI VA SUHBAT',
    subtitle: 'Bir stol. Bir suhbat. Bir ta’m. Bir xotira.',
    description: 'Do‘stlar jam bo‘ladi, tabassumlar yangraydi. Bu endi oddiy kechki ovqat emas — bu umrboqiy xotiraga aylanadi.',
    layerColor: 'bg-peach-light/40',
    icon: '✨'
  }
];

export default function TableMemoryRitual() {
  const [activeStep, setActiveStep] = useState(0);

  const current = ritualSteps[activeStep];

  return (
    <section className="py-24 bg-cream/40 border-y border-sand/30 relative overflow-hidden" id="table-ritual">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory border border-sand/60 text-xs tracking-mega-wide text-charcoal-muted uppercase">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Signature Experience</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal">
            Stol Atrofida — 1991 Xotirasi
          </h2>
          <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
            Bo‘sh stoldan unutilmas onlargacha bo‘lgan 8 bosqichli marosim. Bosqichlarni bosing va stol qanday jonlanishini his qiling.
          </p>
        </div>

        {/* Interactive Visual Experience Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Step Navigator */}
          <div className="lg:col-span-5 space-y-2.5 order-2 lg:order-1">
            {ritualSteps.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-ivory border-terracotta shadow-soft-luxury translate-x-1.5'
                      : 'bg-ivory/60 border-sand/30 hover:bg-ivory hover:border-sand'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-serif text-sm font-semibold w-7 h-7 rounded-full flex items-center justify-center ${
                        isSelected
                          ? 'bg-terracotta text-milk'
                          : 'bg-cream text-charcoal-muted'
                      }`}
                    >
                      {s.step}
                    </span>
                    <div>
                      <p className={`text-xs font-semibold tracking-wider ${isSelected ? 'text-charcoal' : 'text-charcoal-muted'}`}>
                        {s.title}
                      </p>
                      <p className="text-[11px] text-charcoal-muted truncate max-w-[200px] sm:max-w-xs">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg">{s.icon}</span>
                </button>
              );
            })}
          </div>

          {/* Right Visual Stage */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl p-8 sm:p-12 min-h-[440px] flex flex-col justify-between border border-sand/60 shadow-soft-luxury transition-all duration-500 overflow-hidden bg-ivory">
              {/* Dynamic Animated Background Aura */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 ${current.layerColor} opacity-50 pointer-events-none`}
                />
              </AnimatePresence>

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-serif italic text-charcoal-muted">
                  Marosim Bosqichi • {current.step} / 08
                </span>
                <span className="text-3xl">{current.icon}</span>
              </div>

              {/* Center Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 my-8 space-y-4"
                >
                  <p className="text-xs font-sans font-semibold tracking-ultra-wide text-terracotta uppercase">
                    {current.subtitle}
                  </p>
                  <h3 className="font-serif-display text-2xl sm:text-4xl text-charcoal font-medium leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-lg font-sans">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Actions */}
              <div className="relative z-10 pt-6 border-t border-sand/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-full text-xs font-sans bg-cream text-charcoal hover:bg-cream-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Oldingi
                  </button>
                  <button
                    onClick={() =>
                      setActiveStep((prev) =>
                        prev < ritualSteps.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="px-4 py-2 rounded-full text-xs font-sans bg-cream text-charcoal hover:bg-cream-dark transition-colors"
                  >
                    {activeStep === ritualSteps.length - 1 ? 'Boshiga qaytish ↺' : 'Keyingi bosqich →'}
                  </button>
                </div>

                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider hover:bg-terracotta-dark shadow-soft-card transition-all"
                >
                  <span>STOLINGIZNI TANLANG</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
