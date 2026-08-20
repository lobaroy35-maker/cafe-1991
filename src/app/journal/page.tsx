import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';
import { journalArticles } from '@/data/journal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gastronomik Jurnal | CAFE 1991',
  description:
    'Ta’m, madaniyat, qadimiy choy marosimlari va mehmondo‘stlik an’analari haqida mualliflik maqolalari.',
};

export default function JournalPage() {
  const featuredArticle = journalArticles[0];
  const otherArticles = journalArticles.slice(1);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Header */}
      <section className="pt-12 pb-16 bg-cream/40 border-b border-sand/40 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
            Editorial Magazine
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal">
            Gastronomik Jurnal
          </h1>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto font-sans leading-relaxed">
            Ta’m, xotira, hunarmandchilik va o‘zbek madaniyatining nozik qirralari haqida chuqur maqolalar to‘plami.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 space-y-16">
        {/* Featured Article Banner */}
        {featuredArticle && (
          <Link
            href={`/journal/${featuredArticle.slug}`}
            className="group block rounded-3xl overflow-hidden bg-cream/40 border border-sand/50 shadow-soft-luxury hover:border-terracotta transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 w-full bg-cream">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-charcoal-muted font-sans">
                  <span className="text-[10px] font-semibold text-terracotta uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-terracotta" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium group-hover:text-terracotta transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs font-medium text-terracotta font-sans group-hover:translate-x-1 transition-transform">
                  <span>Maqolani o‘qish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Articles Grid */}
        <div className="space-y-6">
          <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
            Barcha Maqolalar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group rounded-3xl bg-cream/30 border border-sand/50 overflow-hidden shadow-soft-card hover:shadow-soft-luxury hover:border-terracotta transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-cream">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-charcoal-muted font-sans">
                      <span className="font-semibold text-terracotta uppercase">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-terracotta" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xl text-charcoal font-medium group-hover:text-terracotta transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-charcoal-muted line-clamp-3 leading-relaxed font-sans">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-sand/30 mt-4 flex items-center justify-between text-xs text-charcoal-muted font-sans">
                  <span>{article.author.name}</span>
                  <span className="text-terracotta font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    O‘qish <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
