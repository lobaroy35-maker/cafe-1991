import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map(err => err.message);
      return NextResponse.json(
        { success: false, errors: errorMessages },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    return NextResponse.json({
      success: true,
      message: 'Xabaringiz CAFE 1991 ma’muriyatiga muvaffaqiyatli yetkazildi. Tez orada siz bilan bog‘lanamiz.',
      receivedData: {
        name: data.name,
        phone: data.phone,
        email: data.email
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Xabarni yuborishda xatolik yuz berdi.' },
      { status: 500 }
    );
  }
}
