/**
 * FAQ Graph
 * Organises every FAQ into named clusters with semantic link targets.
 * Each FAQ cluster knows which service/location/route pages it belongs to,
 * enabling bidirectional linking (FAQ page → service, service page → FAQ).
 */

import type { FaqItem } from "./types";
import { GLOBAL_FAQS, AIRPORT_FAQS, UMRAH_FAQS, ZIYARAT_FAQS, INTERCITY_FAQS } from "./faqs";

export interface FaqCluster {
  id: string;
  label: string;
  icon: string;
  faqs: FaqItem[];
  primaryServiceUrl: string;
  relatedUrls: string[];   // pages that should link to / be linked from this cluster
}

export const FAQ_CLUSTERS: FaqCluster[] = [
  {
    id: "general",
    label: "General Questions",
    icon: "help-circle",
    faqs: GLOBAL_FAQS,
    primaryServiceUrl: "/",
    relatedUrls: [
      "/",
      "/about",
      "/contact",
      "/services/intercity-taxi",
      "/locations/jeddah",
      "/locations/makkah",
    ],
  },
  {
    id: "airport",
    label: "Airport Transfer",
    icon: "plane",
    faqs: AIRPORT_FAQS,
    primaryServiceUrl: "/services/airport-transfer",
    relatedUrls: [
      "/services/airport-transfer",
      "/locations/jeddah",
      "/taxi-jeddah-airport-to-makkah",
      "/taxi-jeddah-airport-to-madinah",
      "/taxi-haram-to-airport",
      "/blog/jeddah-airport-to-makkah-guide",
      "/blog/best-umrah-taxi-service-jeddah",
    ],
  },
  {
    id: "umrah",
    label: "Umrah Taxi",
    icon: "moon",
    faqs: UMRAH_FAQS,
    primaryServiceUrl: "/services/umrah-taxi",
    relatedUrls: [
      "/services/umrah-taxi",
      "/locations/makkah",
      "/locations/madinah",
      "/taxi-jeddah-to-makkah",
      "/taxi-makkah-to-madinah",
      "/blog/best-umrah-taxi-service-jeddah",
    ],
  },
  {
    id: "ziyarat",
    label: "Ziyarat Tours",
    icon: "landmark",
    faqs: ZIYARAT_FAQS,
    primaryServiceUrl: "/services/ziyarat-taxi",
    relatedUrls: [
      "/services/ziyarat-taxi",
      "/locations/madinah",
      "/locations/badr",
      "/taxi-madinah-to-badr",
      "/blog/ziyarat-tour-madinah-guide",
    ],
  },
  {
    id: "intercity",
    label: "Intercity Routes",
    icon: "map-pin",
    faqs: INTERCITY_FAQS,
    primaryServiceUrl: "/services/intercity-taxi",
    relatedUrls: [
      "/services/intercity-taxi",
      "/services/city-to-city",
      "/taxi-jeddah-to-makkah",
      "/taxi-makkah-to-madinah",
      "/taxi-jeddah-to-madinah",
      "/blog/makkah-to-madinah-taxi-guide",
      "/blog/saudi-arabia-taxi-guide-pilgrims",
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Payment",
    icon: "dollar-sign",
    faqs: [
      GLOBAL_FAQS[2],   // KAIA to Makkah fare
      GLOBAL_FAQS[8],   // payment methods
      INTERCITY_FAQS[0], // cheapest Jeddah-Madinah
    ].filter(Boolean) as FaqItem[],
    primaryServiceUrl: "/services/intercity-taxi",
    relatedUrls: [
      "/services/intercity-taxi",
      "/faq",
      "/taxi-jeddah-to-makkah",
      "/taxi-makkah-to-madinah",
    ],
  },
  {
    id: "family",
    label: "Family & VIP Taxi",
    icon: "users",
    faqs: [
      GLOBAL_FAQS[7],  // female-friendly / family option
    ].filter(Boolean) as FaqItem[],
    primaryServiceUrl: "/services/family-taxi",
    relatedUrls: [
      "/services/family-taxi",
      "/services/vip-taxi",
      "/locations/jeddah",
      "/locations/makkah",
    ],
  },
];

export function getFaqCluster(id: string): FaqCluster | undefined {
  return FAQ_CLUSTERS.find((c) => c.id === id);
}

export function getFaqClustersForUrl(url: string): FaqCluster[] {
  return FAQ_CLUSTERS.filter((c) => c.relatedUrls.includes(url));
}

export function getAllFaqsFlat(): FaqItem[] {
  const seen = new Set<string>();
  return FAQ_CLUSTERS.flatMap((c) => c.faqs).filter((f) => {
    if (seen.has(f.question)) return false;
    seen.add(f.question);
    return true;
  });
}
