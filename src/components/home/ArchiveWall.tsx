'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Bookmark } from 'lucide-react';
import { ArchiveFragment } from '@/types';

const fragments: ArchiveFragment[] = [
  {
    id: 'f-1',
    year: '1991',
    title: 'Mustaqillik Tongi va Birinchi Dasturxon',
    snippet: 'Yangi O‘zbekiston tarixi boshlangan yil va o‘zgarmas mehmondo‘stlik ildizlari.',
    story: '1991 yilning kuzida Toshkent ko‘chalarida yangi davr shabadasi esardi. Odamlar bir dasturxon atrofida jam bo‘lib, kelajak rejalari va yangi orzularni muhokama qilishardi. Bizning nomimiz ana shu musaffo umid va xotiradan boshlanadi.',
    type: 'XOTIRA',
    pattern: '✦'
  },
  {
    id: 'f-2',
    year: '1991',
    title: 'Qadimiy Zira va Lazer Guruchi Sirlari',
    snippet: 'Samarqand va Toshkent oshpazlarining qadimiy qozon sirlari.',
    story: 'Haqiqiy bayramona palovning siri qadimdan o‘zgarmagan: quyoshda pishgan sariq sabzi, tog‘ etaklarida terilgan xushbo‘y qora zira va saralangan qo‘zichoq go‘shti. Bu lazzat vaqt sinovidan o‘tgan.',
    type: 'MADANIYAT',
    pattern: '❖'
  },
  {
    id: 'f-3',
    year: '1991',
    title: 'Rishton Loyi va Moviy Sirlar',
    snippet: 'Farg‘ona vodiysi ustalarining loydan yaratgan mo‘jizasi.',
    story: 'Keramika shunchaki idish emas, u o‘zbek tuprog‘ining iforidir. Har bir laganga tushirilgan mayin chiziq mehmonga omonlik va qut-baraka tilaydi.',
    type: 'KERAMIKA',
    pattern: '✺'
  },
  {
    id: 'f-4',
    year: '1991',
    title: 'Marokash Yalpizi va Ipak Yo‘li Choyi',
    snippet: 'Sharq bo‘ylab sayohat qilgan xushbo‘y giyohlar.',
    story: 'Choy — bu uchrashuvning boshlanishi. Kumush choynakdan balanddan quyiladigan ko‘pikli yalpizli choy mehmonga bo‘lgan cheksiz samimiyat ifodasidir.',
    type: 'CHOY',
    pattern: '✿'
  }
];

export default function ArchiveWall() {
  const [activeModal, setActiveModal] = useState<ArchiveFragment | null>(null);

  return (
    <section className="py-24 bg-cream/40 border-t border-sand/30 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
            Xotira Devori
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal">
            1991 Xotira Fragmentlari
          </h2>
          <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
            Har bir fragment zamirida qadimiy an’ana, oshpazlik siri yoki unutilmas suhbat yotadi. Kartani bosing va hikoyani oching.
          </p>
        </div>

        {/* Fragment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fragments.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveModal(f)}
              className="text-left p-6 sm:p-8 rounded-3xl bg-ivory border border-sand/50 shadow-soft-card hover:border-terracotta hover:shadow-soft-luxury transition-all duration-300 group flex flex-col justify-between h-72"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-semibold text-terracotta">
                  {f.year}
                </span>
                <span className="text-xl text-charcoal-muted group-hover:scale-125 group-hover:text-terracotta transition-all">
                  {f.pattern}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] tracking-mega-wide text-charcoal-muted uppercase font-sans">
                  {f.type}
                </p>
                <h3 className="font-serif-display text-lg text-charcoal font-medium leading-snug group-hover:text-terracotta transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-charcoal-muted line-clamp-2 font-sans">
                  {f.snippet}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-sans font-medium text-terracotta group-hover:translate-x-1 transition-transform">
                <span>Hikoyani o‘qish →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Lightbox for Story */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-ivory rounded-3xl p-8 sm:p-10 shadow-2xl border border-sand/60 space-y-6 relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-cream hover:bg-cream-dark text-charcoal transition-colors"
                aria-label="Yopish"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif font-bold text-terracotta px-2.5 py-0.5 rounded-full bg-peach/30">
                    {activeModal.year}
                  </span>
                  <span className="text-[10px] tracking-widest text-charcoal-muted uppercase">
                    {activeModal.type}
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                  {activeModal.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-serif italic">
                “{activeModal.story}”
              </p>

              <div className="pt-4 border-t border-sand/40 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 rounded-full bg-charcoal text-milk text-xs font-sans font-medium hover:bg-terracotta transition-colors"
                >
                  Tushunarli
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
