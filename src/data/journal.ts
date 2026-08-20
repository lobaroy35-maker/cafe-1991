import { JournalArticle } from '@/types';

export const journalArticles: JournalArticle[] = [
  {
    slug: 'tam-va-xotira-1991-falsafasi',
    title: 'Ta’m va Xotira: Nega 1991 Raqami Restoran Uchun Shunchaki Yil Emas?',
    category: 'GASTRONOMIYA & FALSAFA',
    publishedAt: '2026-01-15',
    readTime: '4 daqiqa',
    excerpt: 'Biz insonlar faqat taom yemaymiz — biz taom orqali xotiralarni, uchrashuvlarni va o‘tmishning samimiy iliqligini qayta yashaymiz.',
    coverImage: '/images/journal/journal-1-cover.jpg',
    author: {
      name: 'CAFE 1991 Jamoasi',
      role: 'Gastronomik tadqiqotlar bo‘limi'
    },
    content: {
      lead: 'Inson xotirasi qiziq: ba’zida bitta xushbo‘y zira ifori, tandir nonining issiq tafti yoki choynakdagi yalpiz nafasi bizni yillar ortidagi eng qadrli onlarga qaytarishi mumkin.',
      sections: [
        {
          heading: 'Dasturxon — bu birlashish va mehr maskani',
          body: 'O‘zbek mehmondo‘stligining zamirida bir stol atrofida jam bo‘lish madaniyati yotadi. 1991 yilda poytaxtimiz hayotida yangi davr boshlangan bo‘lsa, ushbu sananing ramziy ma’nosi — o‘zlikni, madaniyatni va milliy mehmondo‘stlikni yangicha yuksaklikda namoyon etishdir.',
          quote: '“1991 — bu shunchaki taqvimdagi sana emas. Bu do‘stlar bilan birga o‘tkazilgan eng samimiy daqiqalarning abadiy xotirasidir.”',
          image: '/images/gallery/gallery-2.jpg',
          imageCaption: '1991 Bayramona Palovi — bir stol atrofidagi birlik timsoli.'
        },
        {
          heading: 'O‘tmish samimiyati va zamonaviy gastronomik talqin',
          body: 'Biz CAFE 1991 da qadimiy retseptlarni ko‘r-ko‘rona nusxalamaymiz. Aksincha, an’anaviy palov, somsa yoki shashlikni zamonaviy dunyo standartlaridagi estetik yondashuv, eng sara mahsulotlar va nozik teksturalar orqali qayta ochib beramiz.',
          image: '/images/gallery/gallery-6.jpg',
          imageCaption: 'Ochiq ko‘mir olovida pishiriladigan sara go‘sht mahsulotlari.'
        }
      ]
    },
    tags: ['Gastronomiya', 'Tarix', 'Xotira', 'Toshkent']
  },
  {
    slug: 'keramika-va-dasturxon-madaniyati',
    title: 'Loydan San’atgacha: Nega Biz Qo‘lda Yasalgan Keramikani Tanladik?',
    category: 'MADANIYAT & HUNARMANDCHILIK',
    publishedAt: '2026-02-02',
    readTime: '5 daqiqa',
    excerpt: 'Har bir lagan, piyola va likopcha usta qo‘llari bilan shakllantirilgan. Taomning ta’mi uni qanday idishda tortilishi bilan bevosita bog‘liq.',
    coverImage: '/images/journal/journal-2-cover.jpg',
    author: {
      name: 'Aziza Rahimova',
      role: 'Madaniyatshunos va dizayner'
    },
    content: {
      lead: 'Keramika — bu yer, suv, olov va inson qalbining birlashuvidir. Bizning dasturxonimizdagi idishlar shunchaki ovqatlanish vositasi emas, balki san’at asaridir.',
      sections: [
        {
          heading: 'Rishton va G‘ijduvon an’analarining zamonaviy aksi',
          body: 'Restoranimizdagi har bir sopol idish mahalliy ustalar tomonidan maxsus loyihalangan. Tabiiy ranglar: oq qum, xira shaftoli, zaytun barglari va issiq terakota ohanglari taomning tabiiy go‘zalligini namoyish etadi.',
          quote: '“Idish taomdan ustun turmasligi, balki uning nafosatini ta’kidlab turishi kerak.”',
          image: '/images/gallery/gallery-11.jpg',
          imageCaption: 'Rishton sopol ustalari tomonidan CAFE 1991 uchun yasalgan maxsus to‘plam.'
        },
        {
          heading: 'Tabiiy matolar va loy uyg‘unligi',
          body: 'Stollarimizga to‘shalgan tabiiy zig‘irpoya (linen) matolari va qo‘l mehnati bilan sayqallangan sopol idishlar mehmonga uy iliqligi va yuksak nafosatni his qildiradi.'
        }
      ]
    },
    tags: ['Keramika', 'Dizayn', 'Hunarmandchilik', 'San’at']
  },
  {
    slug: 'marokash-va-ipak-yoli-choy-marosimlari',
    title: 'Ipak Yo‘li va Marokash: Bir Choynak Choy Ortidagi Hikoyalar',
    category: 'CHOY MADANIYATI',
    publishedAt: '2026-02-18',
    readTime: '3 daqiqa',
    excerpt: 'Nega CAFE 1991 ning mashhur timsoli aynan yangi yalpiz va badyanli choy bo‘ldi? Choy marosimining sirli olamiga nazar.',
    coverImage: '/images/journal/journal-3-cover.jpg',
    author: {
      name: 'CAFE 1991 Choy Ustasi',
      role: 'Choy sommelier'
    },
    content: {
      lead: 'Sharqda har qanday samimiy suhbat choydan boshlanadi. Choy quyish — bu mehmonga bo‘lgan ehtirom va do‘stona munosabat ramzidir.',
      sections: [
        {
          heading: 'Yalpiz, dolchin va tog‘ giyohlari',
          body: 'Bizning Marokash yalpizli choyimizda yangi yalpiz barglari oliy sifatli ko‘k choy, badyan yulduzlari va dolchin bilan birga damlanadi. Kumush choynakdan balanddan quyilganda hosil bo‘ladigan mayin ko‘pik barcha efir moylarini xushbo‘y havoga taratadi.',
          quote: '“Choy qanchalik balanddan quyilsa, suhbat shunchalik samimiy bo‘ladi.”',
          image: '/images/gallery/gallery-7.jpg',
          imageCaption: 'Chotqol tog‘ giyohlari va Marokash yalpizi bilan damlangan xushbo‘y choy.'
        }
      ]
    },
    tags: ['Choy', 'Mehmondo‘stlik', 'An’ana', 'Suhbat']
  }
];
