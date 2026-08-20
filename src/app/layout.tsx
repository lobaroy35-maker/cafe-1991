import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import AmbientSoundscape from '@/components/audio/AmbientSoundscape';
import { restaurantInfo, platformRatings } from '@/data/restaurant';

export const metadata: Metadata = {
  metadataBase: new URL('https://cafe-1991.uz'),
  title: {
    default: 'CAFE 1991 — Ta’m, Xotira va Zamonaviy Gastronomiya | Toshkent',
    template: '%s | CAFE 1991',
  },
  description:
    'CAFE 1991 — Toshkent markazidagi premium restoran. O‘zbek modern gastronomiyasi, Livan va Yaqin Sharq lazzatlari, mualliflik menyusi hamda mehmondo‘stlik san’ati.',
  keywords: [
    'CAFE 1991',
    'Cafe 1991 Tashkent',
    'Toshkent restorani',
    'Mustaqillik shoh ko‘chasi restoran',
    'Uzbek Modern cuisine',
    'Palov 1991',
    'Toshkentda stol band qilish',
    'Fine dining Tashkent',
    'Mezze Tashkent'
  ],
  authors: [{ name: 'CAFE 1991', url: 'https://cafe-1991.uz' }],
  creator: 'CAFE 1991',
  publisher: 'CAFE 1991',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CAFE 1991 — Ta’m, Xotira va Zamonaviy Gastronomiya',
    description:
      'O‘zbekiston gastronomik madaniyati va zamonaviy oshpazlik uyg‘unligi. Mustaqillik shoh ko‘chasi, 7.',
    url: 'https://cafe-1991.uz',
    siteName: 'CAFE 1991',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'CAFE 1991 Toshkent Restorani',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAFE 1991 — Toshkent Premium Restorani',
    description: '1991 — NOM EMAS. 1991 — XOTIRA.',
    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified JSON-LD structured data for Restaurant / LocalBusiness
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    image: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80'
    ],
    '@id': 'https://cafe-1991.uz',
    url: 'https://cafe-1991.uz',
    telephone: restaurantInfo.phone.primary,
    menu: 'https://cafe-1991.uz/menu',
    servesCuisine: ['Uzbek', 'Middle Eastern', 'Lebanese', 'Vegetarian'],
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantInfo.address.street,
      addressLocality: restaurantInfo.address.city,
      postalCode: restaurantInfo.address.postalCode,
      addressCountry: 'UZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurantInfo.address.coordinates.lat,
      longitude: restaurantInfo.address.coordinates.lng
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
        opens: '12:00',
        closes: '01:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '12:00',
        closes: '02:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
      bestRating: '5.0',
      worstRating: '1.0'
    }
  };

  return (
    <html lang="uz">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="bg-ivory text-charcoal antialiased selection:bg-peach selection:text-charcoal bg-grain relative">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <AmbientSoundscape />
        <Footer />
      </body>
    </html>
  );
}
