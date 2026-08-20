export type MenuCategory = 
  | 'BARCHASI'
  | 'APPETAYZERLAR'
  | 'SALATLAR'
  | 'ISSIQ ZAKUSKALAR'
  | 'SHO‘RVALAR'
  | 'ASOSIY TAOMLAR'
  | 'SHASHLIKLAR'
  | 'STEYKLAR'
  | 'BALIQLAR'
  | 'NON VA PISHIRIQLAR'
  | 'GARNIRLAR'
  | 'DESERTLAR'
  | 'ICHIMLIKLAR'
  | 'VEGETARIAN'
  | 'SIGNATURE';

export type DietaryTag = 'VEGETARIAN' | 'VEGAN' | 'GLUTEN_FREE' | 'ORGANIC' | 'SIGNATURE' | 'HALAL' | 'SEASONAL' | 'SPICY';

export interface TasteProfile {
  sweet: number; // 0-10
  savory: number;
  fragrant: number;
  texture: number;
  umami: number;
}

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  nameUz: string;
  originalName: string;
  category: MenuCategory;
  price: string;
  priceValue: number;
  weight?: string;
  description: string;
  shortDescription: string;
  ingredients: string[];
  allergens: string[];
  tasteProfile: TasteProfile;
  dietaryTags: DietaryTag[];
  image: string;
  secondaryImage?: string;
  ceramicType: string;
  pairingSuggestion?: string;
  chefNote?: string;
  featured?: boolean;
  availability: boolean;
  source: string;
  sourceUrl: string;
  lastUpdated: string;
}

export type TableZone = 'MAIN_HALL' | 'WINDOW' | 'GARDEN' | 'PRIVATE' | 'TERRACE';

export type ReservationStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

export interface ReservationRequest {
  id?: string;
  date: string;
  time: string;
  guests: number;
  tableZone: TableZone;
  name: string;
  phone: string;
  email: string;
  notes?: string;
  status?: ReservationStatus;
  createdAt?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  platform: 'Google Maps' | 'Yandex Maps' | 'Tripadvisor' | 'Resto.uz';
  text: string;
  avatar?: string;
  verified: boolean;
}

export interface PlatformRating {
  platform: string;
  score: number;
  maxScore: number;
  reviewCount: number;
  badgeText: string;
  checkedAt: string;
  url: string;
}

export interface DiningMood {
  id: string;
  title: string;
  subtitle: string;
  bgClass: string;
  accentColor: string;
  themeColor: string;
  description: string;
  pairingTitle: string;
  suggestedDishes: string[];
  vibeText: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    lead: string;
    sections: {
      heading?: string;
      body: string;
      quote?: string;
      image?: string;
      imageCaption?: string;
    }[];
  };
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'TAOMLAR' | 'INTERYER' | 'MAKON' | 'STOLLAR' | 'DETALLAR' | 'ATMOSFERA';
  image: string;
  caption: string;
  qualityScore: number;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  zone?: string;
}

export interface SpaceZone {
  id: TableZone;
  name: string;
  nameUz: string;
  tagline: string;
  description: string;
  atmosphere: string;
  capacity: string;
  lightingMood: string;
  image: string;
  features: string[];
}

export interface ArchiveFragment {
  id: string;
  year: string;
  title: string;
  snippet: string;
  story: string;
  type: 'XOTIRA' | 'KERAMIKA' | 'CHOY' | 'MEHMON' | 'MADANIYAT';
  pattern: string;
}

export interface SourceRegistryItem {
  id: string;
  name: string;
  url: string;
  type: 'OFFICIAL_WEBSITE' | 'MAPS_PLATFORM' | 'CITY_GUIDE' | 'RESTAURANT_CATALOG' | 'OFFICIAL_SOCIAL';
  accessedAt: string;
  reliability: 'HIGH' | 'VERIFIED' | 'OFFICIAL';
  notes: string;
}

