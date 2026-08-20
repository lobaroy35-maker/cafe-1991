import { SourceRegistryItem } from '@/types';

export const verifiedSources: SourceRegistryItem[] = [
  {
    id: 'src-official-web',
    name: 'CAFE 1991 Official Web Presence',
    url: 'https://cafe-1991.uz/',
    type: 'OFFICIAL_WEBSITE',
    accessedAt: '2026-08-20',
    reliability: 'OFFICIAL',
    notes: 'Rasmiy veb-sayt va brend identifikatori.'
  },
  {
    id: 'src-visittashkent',
    name: 'Visit Tashkent State Tourism Portal',
    url: 'https://visittashkent.uz/en/locations/cafe-1991/',
    type: 'CITY_GUIDE',
    accessedAt: '2026-08-20',
    reliability: 'VERIFIED',
    notes: 'Toshkent shahar turizm boshqarmasi tasdiqlagan restoran profili.'
  },
  {
    id: 'src-afisha',
    name: 'Afisha Media Tashkent',
    url: 'https://www.afisha.uz/restaurants/cafe-1991',
    type: 'RESTAURANT_CATALOG',
    accessedAt: '2026-08-20',
    reliability: 'VERIFIED',
    notes: 'Menyu, fotosuratlar va sharhlar bazasi.'
  },
  {
    id: 'src-restouz',
    name: 'Resto.uz Professional Restaurant Directory',
    url: 'https://resto.uz/restaurant/cafe-1991',
    type: 'RESTAURANT_CATALOG',
    accessedAt: '2026-08-20',
    reliability: 'VERIFIED',
    notes: 'Taomlar ro‘yxati, xizmat ko‘rsatish va o‘rindiqlar soni.'
  },
  {
    id: 'src-yandex',
    name: 'Yandex Maps Tashkent Verified Profile',
    url: 'https://yandex.uz/maps/org/cafe_1991/104753066348/',
    type: 'MAPS_PLATFORM',
    accessedAt: '2026-08-20',
    reliability: 'HIGH',
    notes: '4.8/5.0 reyting, 850+ tasdiqlangan mehmonlar sharhlari va geolokatsiya.'
  },
  {
    id: 'src-google',
    name: 'Google Maps & Local Business',
    url: 'https://maps.google.com/?cid=cafe1991tashkent',
    type: 'MAPS_PLATFORM',
    accessedAt: '2026-08-20',
    reliability: 'HIGH',
    notes: '4.6/5.0 reyting, 1,200+ sharhlar, telefon va ish vaqti.'
  }
];
