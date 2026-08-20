import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, Share2, Sparkles } from 'lucide-react';
import { journalArticles } from '@/data/journal';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) return { title: 'Maqola Topilmadi' };

  return {
    title: `${article.title} | CAFE 1991 Jurnali`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage, width: 1200, height: 630, alt: article.title }],
    },
  };
}

export default async function JournalDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = journalArticles.filter((a) => a.slug !== article.slug);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-6">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-sans text-charcoal-muted hover:text-charcoal transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Jurnalga qaytish</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 text-xs text-charcoal-muted font-sans">
            <span className="text-[10px] font-semibold text-terracotta uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-terracotta" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-center gap-3 pt-2 text-xs text-charcoal-muted font-sans">
            <span className="font-medium text-charcoal">{article.author.name}</span>
            <span>—</span>
            <span>{article.author.role}</span>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-soft-luxury border border-sand/50 bg-cream">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Lead paragraph */}
        <div className="p-6 rounded-2xl bg-cream/40 border border-sand/40 font-serif italic text-base sm:text-lg text-charcoal-muted leading-relaxed">
          {article.content.lead}
        </div>

        {/* Body Sections */}
        <div className="space-y-8 text-charcoal leading-relaxed font-sans text-sm sm:text-base">
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              {sec.heading && (
                <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-charcoal pt-4">
                  {sec.heading}
                </h2>
              )}

              <p className="text-charcoal/90 leading-relaxed font-sans">
                {sec.body}
              </p>

              {sec.image && (
                <div className="my-6 space-y-2">
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-soft-card border border-sand/40 bg-cream">
                    <Image
                      src={sec.image}
                      alt={sec.heading || article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {sec.imageCaption && (
                    <p className="text-xs text-charcoal-muted font-serif italic text-center">
                      — {sec.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {sec.quote && (
                <blockquote className="my-6 p-6 rounded-2xl bg-peach/20 border-l-4 border-terracotta font-serif italic text-base sm:text-lg text-charcoal">
                  {sec.quote}
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-sand/40 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-charcoal uppercase font-sans mr-2">
            Mavzular:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-cream border border-sand/40 text-xs text-charcoal-muted font-sans"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24 pt-16 border-t border-sand/40 space-y-8">
          <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium text-center">
            Boshqa Qiziqarli Maqolalar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.slice(0, 2).map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="group rounded-3xl bg-cream/30 border border-sand/50 overflow-hidden p-6 flex flex-col justify-between shadow-soft-card hover:border-terracotta transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-semibold text-terracotta uppercase font-sans">
                    {rel.category}
                  </span>
                  <h3 className="font-serif-display text-xl text-charcoal font-medium group-hover:text-terracotta transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted line-clamp-2 font-sans">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 text-xs font-medium text-terracotta font-sans flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>O‘qish</span>
                  <ArrowLeft className="w-3 h-3 rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
