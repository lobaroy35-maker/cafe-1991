'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema, type ReservationFormValues } from '@/lib/validation';
import { 
  Calendar as CalendarIcon, 
  Users, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { spaceZones, restaurantInfo } from '@/data/restaurant';
import { TableZone } from '@/types';

export default function ReservationPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    date: string;
    time: string;
    guests: number;
    tableZone: string;
    name: string;
    phone: string;
  } | null>(null);

  // Time slots
  const timeSlots = [
    '12:00', '13:00', '14:00', '15:00', '17:00', 
    '18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '22:00'
  ];

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      time: '19:00',
      guests: 2,
      tableZone: 'MAIN_HALL',
      name: '',
      phone: '',
      email: '',
      notes: '',
    },
  });

  const selectedDate = watch('date');
  const selectedTime = watch('time');
  const selectedGuests = watch('guests');
  const selectedZone = watch('tableZone');

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmittedBooking({
          id: json.reservation.id,
          date: data.date,
          time: data.time,
          guests: data.guests,
          tableZone: data.tableZone,
          name: data.name,
          phone: data.phone,
        });
        setCurrentStep(6);
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E4C7B8', '#C89276', '#B6C2AF', '#D7C3A7'],
        });
      }
    } catch {
      alert('Rezervatsiya yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { num: 1, label: 'Sana' },
    { num: 2, label: 'Mehmonlar' },
    { num: 3, label: 'Vaqt' },
    { num: 4, label: 'Stol Zonasi' },
    { num: 5, label: 'Ma’lumotlar' },
    { num: 6, label: 'Tasdiqlash' },
  ];

  const zoneNames: Record<TableZone, string> = {
    MAIN_HALL: 'Asosiy Zal',
    WINDOW: 'Deraza Yoni',
    GARDEN: 'Ichki Bog‘',
    PRIVATE: 'Private Dining',
    TERRACE: 'Yozgi Terrasa',
  };

  return (
    <div className="min-h-screen bg-ivory pb-24">
      {/* Header */}
      <section className="pt-12 pb-12 bg-cream/40 border-b border-sand/40 text-center space-y-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="text-xs font-semibold tracking-mega-wide text-terracotta uppercase">
            Onlayn Band Qilish
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-medium text-charcoal">
            Stol Band Qilish
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto font-sans leading-relaxed">
            CAFE 1991 da o‘zingizga ma’qul stol va qulay vaqtni tanlang. Biz har bir mehmonga alohida ehtirom bilan xizmat ko‘rsatamiz.
          </p>
        </div>
      </section>

      {/* Wizard Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-12">
        {/* Progress Bar Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-sand/40 -translate-y-1/2 z-0" />
            {steps.map((s) => {
              const isDone = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              return (
                <div key={s.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-xs font-semibold transition-all duration-300 ${
                      isDone
                        ? 'bg-terracotta text-milk shadow-sm'
                        : isCurrent
                        ? 'bg-charcoal text-milk ring-4 ring-cream shadow-sm'
                        : 'bg-ivory text-charcoal-muted border border-sand/60'
                    }`}
                  >
                    {isDone ? '✓' : s.num}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-sans mt-2 tracking-wider ${
                      isCurrent ? 'font-semibold text-charcoal' : 'text-charcoal-muted'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Contents */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-cream/40 rounded-3xl p-6 sm:p-12 border border-sand/60 shadow-soft-luxury">
            {/* STEP 1: DATE */}
            {currentStep === 1 && (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                    Tashrif Sanasini Tanlang
                  </h2>
                  <p className="text-xs text-charcoal-muted font-sans">
                    Qaysi kuni bizning dasturxonimizda mehmon bo‘lasiz?
                  </p>
                </div>

                <div className="max-w-xs mx-auto space-y-4 pt-4">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    {...register('date')}
                    className="w-full p-4 rounded-2xl bg-ivory border border-sand text-charcoal font-sans text-sm shadow-soft-card text-center focus:outline-none focus:border-terracotta"
                  />
                  {errors.date && (
                    <p className="text-xs text-terracotta font-sans">{errors.date.message}</p>
                  )}
                </div>

                <div className="pt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-8 py-3.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider hover:bg-terracotta-dark shadow-soft-card transition-all"
                  >
                    Keyingi Bosqich: Mehmonlar →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: GUESTS */}
            {currentStep === 2 && (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                    Mehmonlar Soni
                  </h2>
                  <p className="text-xs text-charcoal-muted font-sans">
                    Siz bilan necha kishi bir dasturxonda jam bo‘ladi?
                  </p>
                </div>

                <div className="flex items-center justify-center gap-6 py-6">
                  <button
                    type="button"
                    onClick={() => setValue('guests', Math.max(1, selectedGuests - 1))}
                    className="w-12 h-12 rounded-full bg-ivory border border-sand text-lg font-serif hover:bg-cream transition-colors text-charcoal shadow-sm"
                  >
                    -
                  </button>
                  <div className="space-y-1">
                    <span className="font-serif-display text-5xl font-medium text-charcoal">
                      {selectedGuests}
                    </span>
                    <p className="text-[11px] text-charcoal-muted font-sans uppercase tracking-widest">
                      Mehmon
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setValue('guests', Math.min(12, selectedGuests + 1))}
                    className="w-12 h-12 rounded-full bg-ivory border border-sand text-lg font-serif hover:bg-cream transition-colors text-charcoal shadow-sm"
                  >
                    +
                  </button>
                </div>

                {selectedGuests > 8 && (
                  <p className="text-xs text-charcoal-muted italic font-sans max-w-sm mx-auto">
                    * Katta guruhlar uchun VIP Private Dining zali yoki maxsus birlashtirilgan stol tavsiya etiladi.
                  </p>
                )}

                <div className="pt-6 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 rounded-full bg-cream border border-sand text-xs font-sans text-charcoal hover:bg-ivory transition-colors"
                  >
                    ← Ortga
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-8 py-3.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider hover:bg-terracotta-dark shadow-soft-card transition-all"
                  >
                    Keyingi Bosqich: Vaqt →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: TIME */}
            {currentStep === 3 && (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                    Tashrif Vaqtini Tanlang
                  </h2>
                  <p className="text-xs text-charcoal-muted font-sans">
                    Siz uchun eng qulay soatni belgilang
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-4">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setValue('time', slot)}
                        className={`py-3 px-2 rounded-2xl text-xs font-medium font-sans transition-all duration-300 ${
                          isSelected
                            ? 'bg-charcoal text-milk shadow-md scale-105'
                            : 'bg-ivory text-charcoal hover:bg-cream border border-sand/50'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-full bg-cream border border-sand text-xs font-sans text-charcoal hover:bg-ivory transition-colors"
                  >
                    ← Ortga
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-8 py-3.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider hover:bg-terracotta-dark shadow-soft-card transition-all"
                  >
                    Keyingi Bosqich: Stol Zonasi →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: TABLE ZONE */}
            {currentStep === 4 && (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                    Stol Zonasini Tanlang
                  </h2>
                  <p className="text-xs text-charcoal-muted font-sans">
                    Restoranimizning qaysi burchagida o‘tirishni xohlaysiz?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-left">
                  {spaceZones.map((zone) => {
                    const isSelected = selectedZone === zone.id;
                    return (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setValue('tableZone', zone.id)}
                        className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-3 ${
                          isSelected
                            ? 'bg-ivory border-terracotta shadow-soft-luxury ring-2 ring-terracotta/20'
                            : 'bg-ivory/60 border-sand/50 hover:bg-ivory hover:border-sand'
                        }`}
                      >
                        <div className="space-y-1">
                          <p className="text-xs font-serif font-semibold text-charcoal">
                            {zone.name}
                          </p>
                          <p className="text-[11px] text-charcoal-muted font-sans">
                            {zone.tagline}
                          </p>
                        </div>
                        <span className="text-[10px] text-terracotta uppercase font-sans font-medium">
                          {zone.capacity}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 rounded-full bg-cream border border-sand text-xs font-sans text-charcoal hover:bg-ivory transition-colors"
                  >
                    ← Ortga
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="px-8 py-3.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-wider hover:bg-terracotta-dark shadow-soft-card transition-all"
                  >
                    Keyingi Bosqich: Ma’lumotlar →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: GUEST DETAILS & CONFIRM */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="font-serif-display text-2xl sm:text-3xl text-charcoal font-medium">
                    Mehmon Ma’lumotlari
                  </h2>
                  <p className="text-xs text-charcoal-muted font-sans">
                    Rezervatsiyani rasmiylashtirish uchun aloqa ma’lumotlaringizni kiriting
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-charcoal font-sans">
                      Ismingiz <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masalan: Sardor"
                      {...register('name')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-terracotta font-sans">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-charcoal font-sans">
                      Telefon Raqamingiz <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      {...register('phone')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-terracotta font-sans">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-charcoal font-sans">
                      Email Manzilingiz (Ixtiyoriy)
                    </label>
                    <input
                      type="email"
                      placeholder="namuna@domain.uz"
                      {...register('email')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-terracotta font-sans">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-charcoal font-sans">
                      Qo‘shimcha Tilak yoki Izoh
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tug‘ilgan kun, maxsus menyu talabi yoki alohida xizmat..."
                      {...register('notes')}
                      className="w-full p-3.5 rounded-xl bg-ivory border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
                    />
                  </div>
                </div>

                {/* Summary Box */}
                <div className="p-5 rounded-2xl bg-ivory border border-sand/50 space-y-2 text-xs font-sans text-charcoal-muted">
                  <p className="font-semibold text-charcoal uppercase tracking-wider text-[10px]">
                    Rezervatsiya Qisqacha Xulosasi:
                  </p>
                  <div className="flex flex-wrap gap-4 text-charcoal">
                    <span><strong>Sana:</strong> {selectedDate}</span>
                    <span><strong>Vaqt:</strong> {selectedTime}</span>
                    <span><strong>Mehmonlar:</strong> {selectedGuests} kishi</span>
                    <span><strong>Zona:</strong> {zoneNames[selectedZone] || selectedZone}</span>
                  </div>
                </div>

                <div className="pt-6 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 rounded-full bg-cream border border-sand text-xs font-sans text-charcoal hover:bg-ivory transition-colors"
                  >
                    ← Ortga
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3.5 rounded-full bg-terracotta text-milk text-xs font-medium tracking-ultra-wide hover:bg-terracotta-dark shadow-soft-luxury transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Rasmiylashtirilmoqda...' : 'REZERVATSIYANI TASDIQLASH →'}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 6: SUCCESS CONFIRMATION PASS */}
            {currentStep === 6 && submittedBooking && (
              <div className="space-y-8 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-sage/30 text-sage-dark mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-sage-dark" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-serif font-bold text-terracotta uppercase tracking-mega-wide">
                    Muvaffaqiyatli Qabul Qilindi
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl text-charcoal font-medium">
                    Stolingiz Band Qilindi
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto font-sans leading-relaxed">
                    Hurmatli {submittedBooking.name}, sizning so‘rovingiz qabul qilindi. CAFE 1991 ma’muriyati sizni ko‘rishdan mamnun bo‘ladi.
                  </p>
                </div>

                {/* Concept Invitation Ticket Card */}
                <div className="max-w-md mx-auto bg-ivory rounded-3xl p-6 sm:p-8 border-2 border-dashed border-sand shadow-soft-card text-left space-y-4 font-sans">
                  <div className="flex items-center justify-between border-b border-sand/40 pb-3">
                    <span className="font-serif text-lg font-medium text-charcoal">CAFE 1991 TICKET</span>
                    <span className="text-xs font-bold text-terracotta bg-peach/30 px-3 py-1 rounded-full">
                      ID: {submittedBooking.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-charcoal-muted text-[10px] uppercase">Sana</p>
                      <p className="font-medium text-charcoal">{submittedBooking.date}</p>
                    </div>
                    <div>
                      <p className="text-charcoal-muted text-[10px] uppercase">Vaqt</p>
                      <p className="font-medium text-charcoal">{submittedBooking.time}</p>
                    </div>
                    <div>
                      <p className="text-charcoal-muted text-[10px] uppercase">Mehmonlar</p>
                      <p className="font-medium text-charcoal">{submittedBooking.guests} nafar</p>
                    </div>
                    <div>
                      <p className="text-charcoal-muted text-[10px] uppercase">Stol Zonasi</p>
                      <p className="font-medium text-charcoal">{zoneNames[submittedBooking.tableZone as TableZone] || submittedBooking.tableZone}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-sand/40 text-[11px] text-charcoal-muted">
                    <p><strong>Manzil:</strong> Mustaqillik shoh ko‘chasi, 7 (Yunus Rajabiy metro bekati)</p>
                    <p><strong>Aloqa:</strong> {restaurantInfo.phone.primary}</p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-6 py-2.5 rounded-full bg-cream border border-sand text-xs font-sans text-charcoal hover:bg-ivory transition-colors"
                  >
                    Chiptani chop etish 🖨️
                  </button>
                  <a
                    href="/menu"
                    className="px-6 py-2.5 rounded-full bg-charcoal text-milk text-xs font-sans font-medium hover:bg-terracotta transition-colors"
                  >
                    Menyuni ko‘rish
                  </a>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
