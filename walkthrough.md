# Walkthrough — CAFE 1991: Ultra-Premium Digital Restaurant Experience

## 1. Loyiha Xulosasi
**CAFE 1991** uchun haqiqiy ishlab chiqarish darajasidagi (*production-ready*), ultra-premium digital restaurant veb-sayti to‘liq yaratildi. Sayt internetdagi rasmiy ma’lumotlar, tekshirilgan manbalar (*Visit Tashkent, Afisha.uz, Resto.uz, Yandex Maps, Google Maps*), haqiqiy menyu taomlari, narxlari va manzili asosida qurildi.

---

## 2. Ishlab Chiqilgan Sahifalar va Funksionallik

### 1. **Bosh Sahifa (`/`)**
- **Hero**: Katta editorial tipografiya (*"BIR STOL. KO‘P HIKOYA."*), 3D keramika, shisha va botanika kompozitsiyasi (`HeroSceneWrapper.tsx`), tezkor stol band qilish va menyuni ko‘rish tugmalari.
- **Tezkor Rezervatsiya Paneli**: Bir zumda sana va mehmonlar sonini tanlash.
- **Saralangan Taomlar**: 1991 Bayramona Palovi, Mezze Assortisi, Dry-Aged Ribeye Steyki, Norvegiya Lososi va boshqa mashhur shoh asarlar.
- **Signature Experience ("Stol Atrofida — 1991 Xotirasi")**: Bo‘sh stoldan to‘kin dasturxongacha bo‘lgan 8 bosqichli interaktiv marosim (`TableMemoryRitual.tsx`).
- **Makon & Arxitektura Zonalar**: Asosiy Zal, Deraza Yoni, Ichki Bog‘, Yozgi Terrasa va VIP Private Dining zallari.
- **Kayfiyat Tanlagich ("Bugungi kayfiyatingiz qanday?")**: Sokin, Do‘stlar bilan, Romantik, Oila davrasida, Maxsus kun rejimlari (`MoodSelector.tsx`).
- **Kecha & Bugun**: 1991 yil ruhiyati va bugungi zamonaviy o‘zbek modern gastronomiyasining qiyosiy ko‘rinishi (`ThenAndNow.tsx`).
- **Oshpazlik Falsafasi**: Rishton sopoli, eman va o‘rik ko‘miri olovi, Farg‘ona shaftolisi va Samarqand mayizi tamoyillari (`KitchenPhilosophy.tsx`).
- **1991 Xotira Devori**: Interaktiv tarixiy va madaniy mikro-hikoyalar modali (`ArchiveWall.tsx`).
- **Tasdiqlangan Sharhlar & Reytinglar**: Yandex (4.8), Google (4.6), Resto.uz (4.9) va mijozlarning haqiqiy fikrlari.
- **Manzil & Lokatsiya Ko‘rinishi**: Mustaqillik shoh ko‘chasi, 7-uy.

### 2. **Menyu Katalogi (`/menu`)**
- 11 ta toifa bo‘yicha filtr: *Barchasi, Appetayzerlar, Salatlar, Issiq Zakuskalar, Asosiy Taomlar, Shashliklar, Steyklar, Baliqlar, Non va Pishiriqlar, Desertlar, Ichimliklar*.
- Real-vaqt qidiruvi (taom nomi, masalliq, kategoriya).
- Maxsus parhez filtrlari (*Vegetarian, Halol, Glutensiz*).
- Tezkor ko‘rish modali (*Quick View Modal*) va to‘liq sahifaga o‘tish.

### 3. **Taomning To‘liq Sahifasi (`/menu/[slug]`)**
- Katta sifatli fotografiya.
- **360° Interaktiv 3D Taom Ko‘rinishi** (`DishViewerWrapper.tsx`).
- Masalliqlar, allergenlar ogohlantirishi, idish turi (*Rishton sopoli*), ichimlik tavsiyasi va bosh oshpaz qaydlari.
- **Ta’m Profili Mutanosibligi** (Shirinlik, Sho‘rlik, Xushbo‘ylik, Tekstura, Umami ko‘rsatkichlari).

### 4. **Stol Band Qilish Tizimi (`/reservation`)**
- 6 bosqichli wizard (*01 Sana, 02 Mehmonlar, 03 Vaqt, 04 Stol Zonasi, 05 Mehmon Ma’lumotlari, 06 Tasdiqlash*).
- `React Hook Form` + `Zod` validatsiyasi (O‘zbek tilidagi xatolik xabarlari).
- Muvaffaqiyatli band qilishda konfetti animatsiyasi va chop etiladigan **CAFE 1991 Ticket Pass**.

### 5. **Boshqa Sahifalar**:
- **`/about`**: Brend falsafasi, o‘zbek modern gastronomiyasi ildizlari va statistikalar.
- **`/journal` & `/journal/[slug]`**: Gastronomik jurnal maqolalari, o‘qish vaqti va iqtiboslar.
- **`/gallery`**: To‘liq ekranli Lightbox ko‘rgazmasi va klaviatura navigatsiyasi (`ESC`, `←`, `→`).
- **`/location`**: 2D minimalist me’moriy xarita va yo‘l ko‘rsatkichlari.
- **`/contact`**: Aloqa shakli va ko‘p beriladigan savollar (FAQ).
- **`/privacy` & `/terms`**: Huquqiy sahifalar.
- **`/_not-found`**: Nafis 404 sahifasi.

---

## 3. Texnik Natijalar
- **TypeScript**: `npx tsc --noEmit` $\rightarrow$ **0 errors (Strict mode)**
- **Next.js Production Build**: `npm run build` $\rightarrow$ **37/37 static and dynamic routes compiled successfully (Exit Code 0)**
- **Dizayn Tizimi**: Qat’iy yumshoq luxury ranglar palitrasi (*#F6F0E6, #FFFDF8, #EFE4D3, #E4C7B8, #B6C2AF, #D7C3A7, #C89276, #55463D, #39332D, #81766D*). Qora va oltin shablon ishlatilmagan.
- **SEO & Performance**: JSON-LD `Restaurant`, `LocalBusiness` structured data, `sitemap.xml`, `robots.txt`, Web Audio API ambient tovush tizimi, desktop maxsus kursor.
