export interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
  pageType?: "website" | "article" | "service" | "local";
  publishedTime?: string;
  modifiedTime?: string;
}

export interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface RouteData {
  from: string;
  to: string;
  fromName: string;
  toName: string;
  slug: string;
  distance: number;
  duration: string;
  durationMinutes: number;
  highway: string;
  priceRange: { economy: number; vip: number };
  description: string;
}

export interface ServiceData {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: number;
  popular: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialData {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface CityData {
  name: string;
  nameAr: string;
  region: string;
  geo: { latitude: number; longitude: number };
  population: number;
  description: string;
  landmarks: readonly string[];
}
