import { SpaceZone, PlatformRating, DiningMood } from '@/types';

export const restaurantInfo = {
  name: 'CAFE 1991',
  tagline: 'Ta’m. Xotira. Bir Stol.',
  subheading: 'O‘zbek modern gastronomiyasi va Yaqin Sharq ta’mlari uyg‘unligi.',
  brandConcept: '1991 — NOM EMAS. 1991 — XOTIRA.',
  description: 'CAFE 1991 — Toshkent markazida joylashgan, an’anaviy o‘zbek mehmondo‘stligi va zamonaviy gastronomik madaniyatni o‘zida mujassam etgan premium restoran. Biz o‘tmishning samimiy iliqligini zamonaviy nafislik bilan qayta kashf etamiz.',
  
  // Verified Contact Data
  address: {
    street: 'Mustaqillik shoh ko‘chasi, 7-uy',
    city: 'Toshkent',
    country: 'O‘zbekiston',
    postalCode: '100000',
    landmark: 'Yunus Rajabiy metro bekati, 50-sonli maktab-gimnaziya yoni',
    coordinates: {
      lat: 41.3148,
      lng: 69.2797
    }
  },
  
  phone: {
    primary: '+998 90 919 91 00',
    secondary: '+998 71 200 91 00',
    display: '+998 90 919 91 00'
  },
  
  email: '1991cafe@gmail.com',
  
  openingHours: [
    { days: 'Dushanba – Payshanba', hours: '12:00 – 01:00' },
    { days: 'Juma – Shanba', hours: '12:00 – 02:00' },
    { days: 'Yakshanba', hours: '12:00 – 01:00' }
  ],
  
  social: {
    instagram: 'https://instagram.com/cafe_1991',
    telegram: 'https://t.me/cafe_1991',
    facebook: 'https://facebook.com/cafe1991tashkent'
  },
  
  features: {
    cuisine: ['O‘zbek Modern', 'Yaqin Sharq & Livan', 'Mualliflik Taomlari', 'Vegetarian & Vegan'],
    capacity: '180+ o‘rin',
    wifi: 'Yuqori tezlikdagi bepul Wi-Fi',
    parking: 'Xususiy avtoturargoh mavjud',
    outdoorSeating: 'Yozgi ochiq veranda va shinam bog‘',
    privateDining: 'Alohida VIP xonalar va uchrashuv zallari',
    liveMusic: 'Jonli akustik musiqa kechalari',
    paymentMethods: ['Naqd pul', 'UzCard', 'Humo', 'Visa', 'MasterCard']
  },
  
  stats: {
    yearEstablished: '1991',
    dishesCount: '45+',
    satisfiedGuests: '120,000+',
    averageRating: '4.8'
  }
};

export const spaceZones: SpaceZone[] = [
  {
    id: 'MAIN_HALL',
    name: 'Asosiy Zal',
    nameUz: 'Asosiy Mehmonxona Zali',
    tagline: 'Keng, havodor va iliq arxitektura',
    description: 'Yumshoq gips devorlar, tabiiy eman yog‘ochi va qo‘lda yasalgan keramika bilan bezatilgan markaziy zal. Katta oilaviy va do‘stona yig‘inlar uchun mo‘ljallangan.',
    atmosphere: 'Jonli, samimiy va nafis',
    capacity: '80 kishigacha',
    lightingMood: 'Iliq tonggi va quyosh botishi nurlari',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    features: ['Akustik qulaylik', 'Baland shiftlar', 'Qulay yumshoq mebellar', 'Jonli musiqa sahnasi']
  },
  {
    id: 'WINDOW',
    name: 'Deraza Yoni',
    nameUz: 'Mustaqillik Shoh Ko‘chasi Ko‘rinishi',
    tagline: 'Shahar manzarasi va sokinlik',
    description: 'Panoramik derazalar orqali qadimiy daraxtlar va poytaxt ritmini kuzatish imkoniyati. Suhbatlar va romantik uchrashuvlar uchun ideal makon.',
    atmosphere: 'Sokin, ilhomlantiruvchi va yorug‘',
    capacity: '32 kishigacha',
    lightingMood: 'Tabiiy kunduzgi yorug‘lik',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    features: ['Panoramik derazalar', 'Maxsus ikki kishilik stollar', 'Yumshoq yostiqlar', 'Shahar manzarasi']
  },
  {
    id: 'GARDEN',
    name: 'Bog‘ Zonasi',
    nameUz: 'Ichki Yashil Bog‘',
    tagline: 'Zaytun daraxtlari va sukunat',
    description: 'Toshkent shovqinidan xoli, tirik o‘simliklar va tabiiy tosh elementlari bilan uyg‘unlashgan yashil bog‘ ichidagi maxsus orolcha.',
    atmosphere: 'Tabiiy, toza va xotirjam',
    capacity: '40 kishigacha',
    lightingMood: 'Yumshoq soyali bog‘ nuri',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1200&q=80',
    features: ['Tirik zaytun va dafna daraxtlari', 'Ochiq osmon ostidagi soyabonlar', 'Favvora suvi shildirashi', 'Tabiiy havo']
  },
  {
    id: 'TERRACE',
    name: 'Yozgi Terrasa',
    nameUz: 'Ochiq Yozgi Veranda',
    tagline: 'Salqin oqshom shabadasi va ta’mlar',
    description: 'Bahor va yoz oylari uchun maxsus tayyorlangan, shahar osmoni ostida oqshom taomlaridan bahramand bo‘lish uchun mo‘ljallangan ochiq hudud.',
    atmosphere: 'Yengil, bayramona va erkin',
    capacity: '50 kishigacha',
    lightingMood: 'Kechki iliq shamchiroqlar',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    features: ['Salqin mikroiqlim tizimi', 'Kechki kamin va shamlar', 'Cocktail & bar hududiga yaqinlik', 'Yulduzli osmon']
  },
  {
    id: 'PRIVATE',
    name: 'Private Dining',
    nameUz: 'Alohida Mehmonxona Xonasi',
    tagline: 'Mutlaq maxfiylik va yuqori darajadagi xizmat',
    description: 'Muhim ishbilarmonlik uchrashuvlari, oilaviy marosimlar va tor doiradagi maxsus kechalar uchun ajratilgan eksklyuziv zal.',
    atmosphere: 'Eksklyuziv, sokin va tantanavor',
    capacity: '14 kishigacha',
    lightingMood: 'Nazorat qilinuvchi iliq qandil nuri',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
    features: ['Shaxsiy ofitsiant xizmati', 'Alohida audio-tizim', 'Maxsus tayyorlangan keramika to‘plami', 'To‘liq ovoz izolyatsiyasi']
  }
];

export const platformRatings: PlatformRating[] = [
  {
    platform: 'Yandex Maps',
    score: 4.8,
    maxScore: 5.0,
    reviewCount: 850,
    badgeText: 'Eng Yuqori Baholangan Restoran',
    checkedAt: '2026-08-20',
    url: 'https://yandex.uz/maps/org/cafe_1991/104753066348/'
  },
  {
    platform: 'Google Maps',
    score: 4.6,
    maxScore: 5.0,
    reviewCount: 1240,
    badgeText: 'Toshkentning Tanlangan Maskani',
    checkedAt: '2026-08-20',
    url: 'https://maps.google.com/?cid=cafe1991tashkent'
  },
  {
    platform: 'Tripadvisor',
    score: 4.5,
    maxScore: 5.0,
    reviewCount: 320,
    badgeText: 'Travellers’ Choice & Recommended',
    checkedAt: '2026-08-20',
    url: 'https://www.tripadvisor.com'
  },
  {
    platform: 'Resto.uz',
    score: 4.9,
    maxScore: 5.0,
    reviewCount: 410,
    badgeText: 'Top Gastronomiya 2025/2026',
    checkedAt: '2026-08-20',
    url: 'https://resto.uz/restaurant/cafe-1991'
  }
];

export const diningMoods: DiningMood[] = [
  {
    id: 'sokin',
    title: 'Sokin Kecha',
    subtitle: 'Charchoqni unutib, ta’m va sukunatga sho‘ng‘ing',
    bgClass: 'bg-sage-light/20',
    accentColor: '#B6C2AF',
    themeColor: 'sage',
    description: 'Yumshoq yoritilgan zal, tinchlantiruvchi yalpizli choy va yengil Livan mezze taomlari bilan oqshomingizni sokinlikda o‘tkazing.',
    pairingTitle: 'Tavsiya etiladigan taomlar to‘plami',
    suggestedDishes: ['Klassik Hummus & Tarator', 'Tog‘ Giplari Damlamasi', 'Zaytun Yog‘ida Pishirilgan Dorada'],
    vibeText: 'Kichik shivirlar, iliq choy bug‘i va sokin musiqa.'
  },
  {
    id: 'dostlar',
    title: 'Do‘stlar Bilan',
    subtitle: 'Qizg‘in suhbatlar va umumiy dasturxon quvonchi',
    bgClass: 'bg-terracotta/10',
    accentColor: '#C89276',
    themeColor: 'terracotta',
    description: 'Katta keramika laganlarda tortiladigan go‘shtli shashliklar, xushbo‘y tandir noni va yangi salatlar bilan to‘la dasturxon.',
    pairingTitle: 'Umumiy dasturxon tavsiyasi',
    suggestedDishes: ['Katta Go‘shtli Mezze Assortisi', 'Uchpanja & G‘ijduvon Shashlik', 'Anor va Bodringli Achichuk'],
    vibeText: 'Kulgular, qarsillagan non va bo‘lishish zavqi.'
  },
  {
    id: 'romantik',
    title: 'Romantik Kecha',
    subtitle: 'Ikki qalb uchun yaratilgan nafis muhit',
    bgClass: 'bg-peach-light/30',
    accentColor: '#E4C7B8',
    themeColor: 'peach',
    description: 'Deraza yonidagi shinam stol, xira sham yorug‘i, nozik Norvegiya lososi va pista bilan bezatilgan nozik desertlar.',
    pairingTitle: 'Romantik kechki ovqat menyusi',
    suggestedDishes: ['Grilda Pishirilgan Losos', 'Issiq Burrata & Shaftoli Salati', 'San Sebastian & Pista Sousi'],
    vibeText: 'Sham miltillashi, nozik qadahlar va samimiy nigohlar.'
  },
  {
    id: 'oila',
    title: 'Oila Davrasida',
    subtitle: 'Kattalar va bolalar uchun birdek sevimli ta’mlar',
    bgClass: 'bg-sand/20',
    accentColor: '#D7C3A7',
    themeColor: 'sand',
    description: 'An’anaviy bayramona 1991 palovi, qarsildoq tandir somsalari va butun oila a’zolariga ma’qul keluvchi shirinliklar.',
    pairingTitle: 'Oilaviy bayram to‘plami',
    suggestedDishes: ['1991 Bayramona Qo‘zichoq Palovi', 'Qisqichbaqasimon Tandir Somsa', 'Oshxona Medovigi 1991'],
    vibeText: 'Qadrdon chehralar, to‘kin dasturxon va mehr.'
  },
  {
    id: 'maxsus',
    title: 'Maxsus Kun & Tantana',
    subtitle: 'Hayotingizdagi muhim sanalarni unutilmas qiling',
    bgClass: 'bg-cream-dark/30',
    accentColor: '#55463D',
    themeColor: 'cocoa',
    description: 'Shaxsiy xizmat ko‘rsatish, premium ribeye steyklari va bosh oshpazning maxsus eksklyuziv taqdimotlari.',
    pairingTitle: 'Eksklyuziv tantanali menyu',
    suggestedDishes: ['Dry-Aged Ribeye Steyki', 'Dengiz Mahsulotlari Platteri', 'Qizil Ikra & Krem-Fraiche'],
    vibeText: 'Tantanavor kayfiyat, yuksak ehtirom va unutilmas xotira.'
  }
];
