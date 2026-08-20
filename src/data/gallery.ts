import { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  {
    "id": "yandex-gal-1",
    "title": "CAFE 1991 Asosiy Restoran Zali",
    "category": "INTERYER",
    "image": "/images/gallery/gallery-1.jpg",
    "caption": "O‘zbek modern arxitekturasi, yog‘och, jez va ipak elementlari bilan boyitilgan keng markaziy zal.",
    "qualityScore": 99,
    "aspectRatio": "landscape",
    "zone": "Asosiy Zal"
  },
  {
    "id": "yandex-gal-2",
    "title": "1991 Bayramona Qo‘zichoq Palovi",
    "category": "TAOMLAR",
    "image": "/images/gallery/gallery-2.jpg",
    "caption": "Lazer guruch, nozik qo‘zi go‘shti, Samarqand qazisi va bedana tuxumlari bilan mualliflik Rishton laganida.",
    "qualityScore": 99,
    "aspectRatio": "square",
    "zone": "Oshpazlik"
  },
  {
    "id": "yandex-gal-3",
    "title": "Mustaqillik Shoh Ko‘chasiga Qaragan Deraza Yoni",
    "category": "MAKON",
    "image": "/images/gallery/gallery-3.jpg",
    "caption": "Panoramik derazalar orqali Toshkentning qadimiy chinorlari va oqshom chiroqlari manzarasi.",
    "qualityScore": 96,
    "aspectRatio": "landscape",
    "zone": "Deraza Yoni"
  },
  {
    "id": "yandex-gal-4",
    "title": "Mize & Livan Hummus Assortisi",
    "category": "TAOMLAR",
    "image": "/images/gallery/gallery-4.jpg",
    "caption": "Klassik humus, pesto sousli humus, yogurtli pishirilgan qovoq va issiq tandir pitasi.",
    "qualityScore": 98,
    "aspectRatio": "landscape",
    "zone": "Sovuq Gazaklar"
  },
  {
    "id": "yandex-gal-5",
    "title": "Yashil Yozgi Terrasa & Veranda",
    "category": "MAKON",
    "image": "/images/gallery/gallery-5.jpg",
    "caption": "Tirik o‘simliklar va yozgi shabada og‘ushidagi ochiq havo zonasi.",
    "qualityScore": 97,
    "aspectRatio": "landscape",
    "zone": "Yozgi Terrasa"
  },
  {
    "id": "yandex-gal-6",
    "title": "O‘rik Ko‘mirida Pishgan Milliy Shashliklar",
    "category": "TAOMLAR",
    "image": "/images/gallery/gallery-6.jpg",
    "caption": "Uchpanja qo‘zi qovurg‘asi, G‘ijduvon qiymasi va sumaxli shirin qizil piyoz.",
    "qualityScore": 99,
    "aspectRatio": "portrait",
    "zone": "Mangal"
  },
  {
    "id": "yandex-gal-7",
    "title": "Marokash Yalpizli Choy Marosimi",
    "category": "DETALLAR",
    "image": "/images/gallery/gallery-7.jpg",
    "caption": "Kumushsimon sharqona choynakda yangi yalpiz barglari va badyan bilan damlanadigan mashhur choy.",
    "qualityScore": 98,
    "aspectRatio": "square",
    "zone": "Bar & Choyxona"
  },
  {
    "id": "yandex-gal-8",
    "title": "VIP Private Dining Xonasi",
    "category": "INTERYER",
    "image": "/images/gallery/gallery-8.jpg",
    "caption": "Alohida uchrashuvlar, oilaviy tantanalar va biznes suhbatlar uchun eksklyuziv maxfiy xona.",
    "qualityScore": 95,
    "aspectRatio": "landscape",
    "zone": "VIP Xona"
  },
  {
    "id": "yandex-gal-9",
    "title": "Qatlama Tandir Somsasi",
    "category": "TAOMLAR",
    "image": "/images/gallery/gallery-9.jpg",
    "caption": "Tandir loy devorida qizdirilgan qarsildoq xamir, qo‘zi go‘shti va tog‘ zirasi.",
    "qualityScore": 97,
    "aspectRatio": "landscape",
    "zone": "Tandir"
  },
  {
    "id": "yandex-gal-10",
    "title": "San Sebastian & Fistashkali Paxlava",
    "category": "TAOMLAR",
    "image": "/images/gallery/gallery-10.jpg",
    "caption": "Karamellangan yumshoq Bask chizkeyki va iliq pista sousi.",
    "qualityScore": 96,
    "aspectRatio": "square",
    "zone": "Qandolatxona"
  },
  {
    "id": "yandex-gal-11",
    "title": "Rishton Milliy Keramikasi & Dasturxon Estetikasi",
    "category": "DETALLAR",
    "image": "/images/gallery/gallery-11.jpg",
    "caption": "Qo‘lda ishlangan sopol laganlar, tabiiy zig‘ir matolar va nafis qadahlar.",
    "qualityScore": 98,
    "aspectRatio": "landscape",
    "zone": "Dasturxon"
  },
  {
    "id": "yandex-gal-12",
    "title": "Kechki Restoran Atmosferasi & Jonli Chiroqlar",
    "category": "ATMOSFERA",
    "image": "/images/gallery/gallery-12.jpg",
    "caption": "Iliq sham yorug‘i, sokin akustika va samimiy mehmondo‘stlik ruhi.",
    "qualityScore": 99,
    "aspectRatio": "landscape",
    "zone": "Atmosfera"
  }
];

export const galleryCategories = [
  'BARCHASI',
  'TAOMLAR',
  'INTERYER',
  'MAKON',
  'DETALLAR',
  'ATMOSFERA'
] as const;
