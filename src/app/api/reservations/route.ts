import { NextRequest, NextResponse } from 'next/server';
import { reservationSchema } from '@/lib/validation';
import { generateBookingId } from '@/lib/utils';
import { ReservationRequest } from '@/types';

// In-memory persistent array for active runtime sessions
const reservationsStore: ReservationRequest[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = reservationSchema.safeParse(body);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map(err => err.message);
      return NextResponse.json(
        { success: false, errors: errorMessages },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    const reservationId = generateBookingId();

    const newReservation: ReservationRequest = {
      id: reservationId,
      date: data.date,
      time: data.time,
      guests: data.guests,
      tableZone: data.tableZone,
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      notes: data.notes || '',
      status: 'CONFIRMED',
      createdAt: new Date().toISOString()
    };

    reservationsStore.unshift(newReservation);

    return NextResponse.json({
      success: true,
      message: 'Stolingiz uchun so‘rov qabul qilindi va tasdiqlandi.',
      reservation: newReservation
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Serverda kutilmagan xatolik yuz berdi.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: reservationsStore.length,
    reservations: reservationsStore
  });
}
