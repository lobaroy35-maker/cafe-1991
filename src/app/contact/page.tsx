'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormValues } from '@/lib/validation';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        reset();
      }
    } catch {
      alert('Xabarni yuborishda xatolik yuz berdi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'Restoranda stolni oldindan band qilish shartmi?',
      a: 'Ayniqsa dam olish kunlari va oqshom paytlarida oldindan rezervatsiya qilishni tavsiya etamiz.',
    },
    {
      q: 'Bolalar va oilaviy tashriflar uchun qulayliklar bormi?',
      a: 'Ha, maxsus bolalar stullari, oilaviy katta stollar va xavfsiz bog‘ hududi mavjud.',
    },
    {
      q: 'Katta tadbirlar yoki banketlarni o‘tkazish mumkinmi?',
      a: 'Ha, VIP Private Dining zali va Asosiy zalimiz 80 nafargacha mehmonlar uchun xizmat ko‘rsatadi.',
    },
  ];

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Header */}
      <section className="pt-12 pb-16 bg-cream/40 border-b border-sand/40 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase font-sans">
            Aloqa & Murojaat
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal">
            Biz Bilan Bog‘laning
          </h1>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto font-sans leading-relaxed">
            Savollaringiz, takliflaringiz yoki maxsus tadbirlar bo‘yicha bizga xabar qoldiring.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            <div className="p-8 rounded-3xl bg-cream/40 border border-sand/60 shadow-soft-card space-y-6">
              <h2 className="font-serif-display text-2xl text-charcoal font-medium">
                To‘g‘ridan-to‘g‘ri Aloqa
              </h2>

              <div className="space-y-4 text-xs text-charcoal-muted">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-peach/30 text-terracotta flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Telefon Raqami:</p>
                    <a
                      href={`tel:${restaurantInfo.phone.primary.replace(/\s+/g, '')}`}
                      className="text-sm text-terracotta font-medium hover:underline"
                    >
                      {restaurantInfo.phone.primary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-sage/30 text-sage-dark flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Elektron Pochta:</p>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-sm text-charcoal hover:text-terracotta"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-sand/30 text-charcoal flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Manzil:</p>
                    <p className="text-charcoal">{restaurantInfo.address.street}</p>
                    <p className="text-[11px]">{restaurantInfo.address.landmark}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="p-8 rounded-3xl bg-ivory border border-sand/60 shadow-soft-card space-y-4">
              <h3 className="font-serif-display text-xl text-charcoal font-medium">
                Ko‘p Beriladigan Savollar
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-sand/30 pb-3 space-y-1">
                    <p className="text-xs font-semibold text-charcoal">
                      {faq.q}
                    </p>
                    <p className="text-[11px] text-charcoal-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-cream/40 border border-sand/60 shadow-soft-luxury">
              {submitted ? (
                <div className="text-center py-12 space-y-4 font-sans">
                  <div className="w-16 h-16 rounded-full bg-sage/30 text-sage-dark mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-display text-3xl text-charcoal">
                    Xabaringiz Qabul Qilindi
                  </h3>
                  <p className="text-xs text-charcoal-muted max-w-sm mx-auto leading-relaxed">
                    Biz bilan bog‘langaningiz uchun tashakkur. Tez orada ma’muriyatimiz siz bilan aloqaga chiqadi.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-terracotta text-milk text-xs font-medium"
                  >
                    Yangi xabar yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans">
                  <div className="space-y-1">
                    <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                      Xabar Yuborish
                    </h2>
                    <p className="text-xs text-charcoal-muted">
                      Barcha maydonlarni to‘ldiring va biz tezda javob qaytaramiz
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-charcoal">
                        Ismingiz <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ismingizni kiriting"
                        {...register('name')}
                        className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-terracotta">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-charcoal">
                        Telefon <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        {...register('phone')}
                        className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-terracotta">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-charcoal">
                      Email Manzili <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="namuna@domain.uz"
                      {...register('email')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-terracotta">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-charcoal">
                      Mavzu (Ixtiyoriy)
                    </label>
                    <input
                      type="text"
                      placeholder="Tadbir, maxsus menyu yoki taklif..."
                      {...register('subject')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-charcoal">
                      Xabaringiz <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Xabaringizni bu yerga yozing..."
                      {...register('message')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-terracotta">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-terracotta text-milk text-xs font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-luxury transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? 'Yuborilmoqda...' : 'XABARNI YUBORISH'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
