import { z } from 'zod';

export const reservationSchema = z.object({
  date: z.string().min(1, 'Iltimos, tashrif sanasini tanlang.'),
  time: z.string().min(1, 'Iltimos, tashrif vaqtini tanlang.'),
  guests: z.number().min(1, 'Kamida 1 nafar mehmon bo‘lishi kerak.').max(12, '12 nafardan ortiq mehmonlar uchun telefon orqali bog‘laning.'),
  tableZone: z.enum(['MAIN_HALL', 'WINDOW', 'GARDEN', 'PRIVATE', 'TERRACE'], {
    errorMap: () => ({ message: 'Iltimos, stol zonasini tanlang.' })
  }),
  name: z.string().min(2, 'Ismingiz kamida 2 ta belgidan iborat bo‘lishi kerak.'),
  phone: z.string().regex(/^\+?[0-9\s-]{9,15}$/, 'Iltimos, to‘g‘ri telefon raqamingizni kiriting (masalan: +998 90 123 45 67).'),
  email: z.string().email('Iltimos, to‘g‘ri email manzilini kiriting.').or(z.literal('')),
  notes: z.string().max(500, 'Izoh 500 belgidan oshmasligi kerak.').optional(),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Iltimos, ismingizni kiriting.'),
  phone: z.string().regex(/^\+?[0-9\s-]{9,15}$/, 'Telefon raqamingizni to‘g‘ri kiriting.'),
  email: z.string().email('Iltimos, to‘g‘ri email kiriting.'),
  subject: z.string().min(3, 'Mavzuni kiriting.').optional(),
  message: z.string().min(10, 'Xabaringiz kamida 10 ta belgidan iborat bo‘lishi kerak.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
