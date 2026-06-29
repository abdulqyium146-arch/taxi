/**
 * Internal Link Map
 * Complete URL catalog for taxibhaisauditaxiservice.com with semantic metadata,
 * anchor text variants, and crawl depth annotations.
 *
 * Rules:
 *   Depth 0 = Homepage
 *   Depth 1 = Hub pages (services, locations, blog index)
 *   Depth 2 = Service and Location pages
 *   Depth 3 = Route, Blog, FAQ pages
 *
 * No page may exceed depth 3 from the homepage.
 */

export type PageType =
  | "home"
  | "service"
  | "location"
  | "route"
  | "blog"
  | "faq"
  | "hub"
  | "static";

export interface SiteLink {
  url: string;
  label: string;               // Primary anchor text
  title: string;               // Full page title (for title= attribute)
  pageType: PageType;
  depth: number;               // 0-3
  entityId: string;            // Matches ENTITY_GRAPH key
  parentUrl?: string;
  anchorVariants: string[];    // Semantic anchor text pool
  description: string;         // Short description for cards
  icon?: string;               // lucide icon name
  startingPrice?: number;      // SAR – shown in route/service cards
}

// ── Hub / Index pages (depth 1) ───────────────────────────────────────────

export const HUB_LINKS: SiteLink[] = [
  {
    url: "/services/airport-transfer",
    label: "Airport Transfer",
    title: "Airport Transfer Service Jeddah – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "airport-transfer",
    parentUrl: "/",
    anchorVariants: [
      "Airport Transfer",
      "Jeddah airport transfer",
      "KAIA airport taxi",
      "airport pickup Jeddah",
      "airport transportation Jeddah",
      "taxi from Jeddah airport",
    ],
    description: "24/7 flight-tracked pickup from all KAIA terminals",
    icon: "plane",
    startingPrice: 80,
  },
  {
    url: "/services/umrah-taxi",
    label: "Umrah Taxi",
    title: "Umrah Taxi Service Saudi Arabia – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "umrah-taxi",
    parentUrl: "/",
    anchorVariants: [
      "Umrah Taxi",
      "Umrah transport Saudi Arabia",
      "taxi for Umrah",
      "Miqat taxi service",
      "Umrah transportation from Jeddah",
      "pilgrimage taxi Saudi Arabia",
    ],
    description: "Complete Umrah transport: airport → Miqat → Haram",
    icon: "moon",
    startingPrice: 150,
  },
  {
    url: "/services/ziyarat-taxi",
    label: "Ziyarat Taxi",
    title: "Ziyarat Taxi Tours Madinah & Makkah – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "ziyarat-taxi",
    parentUrl: "/",
    anchorVariants: [
      "Ziyarat Taxi",
      "Ziyarat tour taxi",
      "Islamic site tours Madinah",
      "Madinah Ziyarat transport",
      "guided Ziyarat taxi",
    ],
    description: "Half-day and full-day Islamic site tours",
    icon: "landmark",
    startingPrice: 200,
  },
  {
    url: "/services/vip-taxi",
    label: "VIP Taxi",
    title: "VIP Luxury Taxi Saudi Arabia – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "vip-taxi",
    parentUrl: "/",
    anchorVariants: [
      "VIP Taxi",
      "luxury taxi Saudi Arabia",
      "chauffeur service Jeddah",
      "premium taxi service",
      "Lexus taxi Saudi Arabia",
    ],
    description: "Luxury vehicles with professional chauffeurs",
    icon: "crown",
    startingPrice: 200,
  },
  {
    url: "/services/family-taxi",
    label: "Family Taxi",
    title: "Family Taxi Service Saudi Arabia – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "family-taxi",
    parentUrl: "/",
    anchorVariants: [
      "Family Taxi",
      "family van Saudi Arabia",
      "group taxi Saudi Arabia",
      "safe family taxi",
      "spacious taxi for families",
    ],
    description: "Spacious vans for families and groups",
    icon: "users",
    startingPrice: 120,
  },
  {
    url: "/services/haram-transfer",
    label: "Haram Transfer",
    title: "Haram Transfer Service Makkah & Madinah – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "haram-transfer",
    parentUrl: "/",
    anchorVariants: [
      "Haram Transfer",
      "hotel to Haram taxi",
      "Makkah Haram shuttle",
      "Masjid Nabawi transfer",
      "taxi near Haram",
    ],
    description: "Hotel-to-Haram shuttle 24/7 in Makkah & Madinah",
    icon: "home",
    startingPrice: 30,
  },
  {
    url: "/services/intercity-taxi",
    label: "Intercity Taxi",
    title: "Saudi Intercity Taxi – Fixed Price City-to-City – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "intercity-taxi",
    parentUrl: "/",
    anchorVariants: [
      "Intercity Taxi",
      "city-to-city taxi Saudi Arabia",
      "intercity transport Saudi Arabia",
      "private taxi Jeddah Makkah Madinah",
      "Saudi intercity rides",
    ],
    description: "Fixed-price intercity routes across western Saudi Arabia",
    icon: "map-pin",
    startingPrice: 120,
  },
  {
    url: "/services/city-to-city",
    label: "City-to-City Taxi",
    title: "City-to-City Taxi Saudi Arabia – All Routes – Taxi Bhai",
    pageType: "service",
    depth: 2,
    entityId: "intercity-taxi",
    parentUrl: "/services/intercity-taxi",
    anchorVariants: [
      "City-to-City Taxi",
      "all intercity routes Saudi Arabia",
      "point-to-point taxi Saudi Arabia",
    ],
    description: "All city-to-city taxi routes with fixed prices",
    icon: "navigation",
    startingPrice: 120,
  },
];

// ── Location pages (depth 2) ──────────────────────────────────────────────

export const LOCATION_LINKS: SiteLink[] = [
  {
    url: "/locations/jeddah",
    label: "Jeddah Taxi",
    title: "Taxi Service in Jeddah – Taxi Bhai",
    pageType: "location",
    depth: 2,
    entityId: "jeddah",
    parentUrl: "/locations",
    anchorVariants: [
      "Jeddah Taxi",
      "taxi in Jeddah",
      "best taxi Jeddah",
      "Jeddah taxi service",
      "taxi near Jeddah airport",
      "professional taxi Jeddah",
    ],
    description: "24/7 taxi across Jeddah — airport, city, intercity",
    icon: "map-pin",
  },
  {
    url: "/locations/makkah",
    label: "Makkah Taxi",
    title: "Taxi Service in Makkah – Taxi Bhai",
    pageType: "location",
    depth: 2,
    entityId: "makkah",
    parentUrl: "/locations",
    anchorVariants: [
      "Makkah Taxi",
      "taxi in Makkah",
      "Makkah taxi service",
      "taxi near Haram Makkah",
      "Makkah hotel taxi",
    ],
    description: "Haram transfers, hotel pickups & intercity from Makkah",
    icon: "map-pin",
  },
  {
    url: "/locations/madinah",
    label: "Madinah Taxi",
    title: "Taxi Service in Madinah – Taxi Bhai",
    pageType: "location",
    depth: 2,
    entityId: "madinah",
    parentUrl: "/locations",
    anchorVariants: [
      "Madinah Taxi",
      "taxi in Madinah",
      "Madinah taxi service",
      "Masjid Nabawi taxi",
      "MED airport taxi",
    ],
    description: "Masjid Nabawi transfers, Ziyarat & MED airport taxi",
    icon: "map-pin",
  },
  {
    url: "/locations/taif",
    label: "Taif Taxi",
    title: "Taxi Service in Taif – Taxi Bhai",
    pageType: "location",
    depth: 2,
    entityId: "taif",
    parentUrl: "/locations",
    anchorVariants: [
      "Taif Taxi",
      "taxi in Taif",
      "Taif taxi service",
      "mountain city taxi",
      "taxi Taif to Makkah",
    ],
    description: "Intercity rides from Taif to Makkah & Jeddah",
    icon: "map-pin",
  },
  {
    url: "/locations/badr",
    label: "Badr Taxi",
    title: "Taxi to Badr – Ziyarat Day Trips – Taxi Bhai",
    pageType: "location",
    depth: 2,
    entityId: "badr",
    parentUrl: "/locations",
    anchorVariants: [
      "Badr Taxi",
      "taxi to Badr",
      "Badr Ziyarat taxi",
      "Battle of Badr visit",
      "Madinah to Badr taxi",
    ],
    description: "Ziyarat day trips to the Battle of Badr site",
    icon: "map-pin",
  },
];

// ── Route pages (depth 3) ─────────────────────────────────────────────────

export const ROUTE_LINKS: SiteLink[] = [
  {
    url: "/taxi-jeddah-to-makkah",
    label: "Jeddah to Makkah Taxi",
    title: "Taxi Jeddah to Makkah – SAR 120 Fixed Price",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Jeddah to Makkah Taxi",
      "taxi from Jeddah to Makkah",
      "Jeddah Makkah taxi fare",
      "how much is taxi Jeddah to Makkah",
      "private taxi Jeddah Makkah",
    ],
    description: "80km · 1 hr · From SAR 120",
    startingPrice: 120,
  },
  {
    url: "/taxi-jeddah-to-madinah",
    label: "Jeddah to Madinah Taxi",
    title: "Taxi Jeddah to Madinah – SAR 350 Fixed Price",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Jeddah to Madinah Taxi",
      "taxi from Jeddah to Madinah",
      "Jeddah Madinah fare",
      "how long is Jeddah to Madinah taxi",
    ],
    description: "420km · 4–4.5 hrs · From SAR 350",
    startingPrice: 350,
  },
  {
    url: "/taxi-jeddah-to-taif",
    label: "Jeddah to Taif Taxi",
    title: "Taxi Jeddah to Taif – SAR 150 Fixed Price",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Jeddah to Taif Taxi",
      "taxi from Jeddah to Taif",
      "mountain route Jeddah Taif",
    ],
    description: "90km · 1.5 hrs · From SAR 150",
    startingPrice: 150,
  },
  {
    url: "/taxi-jeddah-to-badr",
    label: "Jeddah to Badr Taxi",
    title: "Taxi Jeddah to Badr – SAR 280",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Jeddah to Badr Taxi",
      "taxi from Jeddah to Badr",
      "Badr Ziyarat from Jeddah",
    ],
    description: "310km · 3.5 hrs · From SAR 280",
    startingPrice: 280,
  },
  {
    url: "/taxi-makkah-to-madinah",
    label: "Makkah to Madinah Taxi",
    title: "Taxi Makkah to Madinah – SAR 380 Fixed Price",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Makkah to Madinah Taxi",
      "taxi from Makkah to Madinah",
      "Haramain taxi route",
      "how much is taxi Makkah to Madinah",
    ],
    description: "450km · 4.5–5 hrs · From SAR 380",
    startingPrice: 380,
  },
  {
    url: "/taxi-makkah-to-taif",
    label: "Makkah to Taif Taxi",
    title: "Taxi Makkah to Taif – SAR 130",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Makkah to Taif Taxi",
      "taxi from Makkah to Taif",
      "mountain drive Makkah Taif",
    ],
    description: "75km · 1.5 hrs · From SAR 130",
    startingPrice: 130,
  },
  {
    url: "/taxi-makkah-to-jeddah",
    label: "Makkah to Jeddah Taxi",
    title: "Taxi Makkah to Jeddah – SAR 120",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Makkah to Jeddah Taxi",
      "post-Umrah airport taxi",
      "taxi Makkah to KAIA",
    ],
    description: "80km · 1 hr · From SAR 120",
    startingPrice: 120,
  },
  {
    url: "/taxi-madinah-to-makkah",
    label: "Madinah to Makkah Taxi",
    title: "Taxi Madinah to Makkah – SAR 380",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Madinah to Makkah Taxi",
      "taxi from Madinah to Makkah",
      "Umrah completion taxi",
    ],
    description: "450km · 4.5–5 hrs · From SAR 380",
    startingPrice: 380,
  },
  {
    url: "/taxi-madinah-to-jeddah",
    label: "Madinah to Jeddah Taxi",
    title: "Taxi Madinah to Jeddah – SAR 350",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Madinah to Jeddah Taxi",
      "taxi Madinah to Jeddah airport",
      "pilgrim departure taxi Madinah",
    ],
    description: "420km · 4–4.5 hrs · From SAR 350",
    startingPrice: 350,
  },
  {
    url: "/taxi-madinah-to-badr",
    label: "Madinah to Badr Taxi",
    title: "Taxi Madinah to Badr – SAR 200",
    pageType: "route",
    depth: 3,
    entityId: "ziyarat-taxi",
    anchorVariants: [
      "Madinah to Badr Taxi",
      "Badr day trip from Madinah",
      "Ziyarat Badr taxi",
    ],
    description: "155km · 1.5–2 hrs · From SAR 200",
    startingPrice: 200,
  },
  {
    url: "/taxi-taif-to-makkah",
    label: "Taif to Makkah Taxi",
    title: "Taxi Taif to Makkah – SAR 130",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Taif to Makkah Taxi",
      "mountain descent Taif Makkah",
    ],
    description: "75km · 1.5 hrs · From SAR 130",
    startingPrice: 130,
  },
  {
    url: "/taxi-taif-to-jeddah",
    label: "Taif to Jeddah Taxi",
    title: "Taxi Taif to Jeddah – SAR 150",
    pageType: "route",
    depth: 3,
    entityId: "intercity-taxi",
    anchorVariants: [
      "Taif to Jeddah Taxi",
      "Taif Jeddah expressway taxi",
    ],
    description: "90km · 1.5 hrs · From SAR 150",
    startingPrice: 150,
  },
  {
    url: "/taxi-jeddah-airport-to-makkah",
    label: "Jeddah Airport to Makkah Taxi",
    title: "Jeddah Airport to Makkah Taxi – KAIA to Makkah",
    pageType: "route",
    depth: 3,
    entityId: "airport-transfer",
    anchorVariants: [
      "Jeddah Airport to Makkah Taxi",
      "KAIA to Makkah taxi",
      "taxi from Jeddah airport to Makkah",
      "airport transfer to Makkah",
    ],
    description: "KAIA → Makkah · 80km · 1 hr · SAR 120",
    startingPrice: 120,
  },
  {
    url: "/taxi-jeddah-airport-to-madinah",
    label: "Jeddah Airport to Madinah Taxi",
    title: "Jeddah Airport to Madinah Taxi – KAIA to Madinah",
    pageType: "route",
    depth: 3,
    entityId: "airport-transfer",
    anchorVariants: [
      "Jeddah Airport to Madinah Taxi",
      "KAIA to Madinah taxi",
      "taxi from Jeddah airport to Madinah",
    ],
    description: "KAIA → Madinah · 420km · 4 hrs · SAR 350",
    startingPrice: 350,
  },
  {
    url: "/taxi-haram-to-airport",
    label: "Haram to Jeddah Airport Taxi",
    title: "Makkah Haram to Jeddah Airport Taxi",
    pageType: "route",
    depth: 3,
    entityId: "airport-transfer",
    anchorVariants: [
      "Haram to Airport Taxi",
      "Makkah to KAIA taxi",
      "post-Umrah airport transfer",
      "taxi from Makkah to Jeddah airport",
    ],
    description: "Makkah Haram → KAIA · 80km · 1 hr · SAR 120",
    startingPrice: 120,
  },
];

// ── Blog links (depth 3) ───────────────────────────────────────────────────

export const BLOG_LINKS: SiteLink[] = [
  {
    url: "/blog/best-umrah-taxi-service-jeddah",
    label: "Best Umrah Taxi from Jeddah",
    title: "Best Umrah Taxi Service from Jeddah Airport (2025 Guide)",
    pageType: "blog",
    depth: 3,
    entityId: "umrah-taxi",
    parentUrl: "/blog",
    anchorVariants: [
      "Best Umrah Taxi from Jeddah",
      "Umrah taxi guide Jeddah",
      "how to book Umrah taxi Jeddah",
    ],
    description: "Complete guide for Umrah transport from Jeddah Airport",
  },
  {
    url: "/blog/jeddah-airport-to-makkah-guide",
    label: "Jeddah Airport to Makkah Guide",
    title: "Jeddah Airport to Makkah: Complete Transport Guide",
    pageType: "blog",
    depth: 3,
    entityId: "airport-transfer",
    parentUrl: "/blog",
    anchorVariants: [
      "Jeddah Airport to Makkah Guide",
      "how to get from KAIA to Makkah",
      "KAIA Makkah transport options",
    ],
    description: "Full guide: KAIA to Makkah routes, prices, tips",
  },
  {
    url: "/blog/ziyarat-tour-madinah-guide",
    label: "Ziyarat Tour Guide Madinah",
    title: "Complete Ziyarat Tour Guide: Islamic Sites in Madinah",
    pageType: "blog",
    depth: 3,
    entityId: "ziyarat-taxi",
    parentUrl: "/blog",
    anchorVariants: [
      "Ziyarat Tour Guide Madinah",
      "Islamic sites in Madinah",
      "Madinah Ziyarat tour guide",
    ],
    description: "All Ziyarat sites in Madinah with taxi prices",
  },
  {
    url: "/blog/makkah-to-madinah-taxi-guide",
    label: "Makkah to Madinah Taxi Guide",
    title: "Makkah to Madinah Taxi: Prices, Route & Tips",
    pageType: "blog",
    depth: 3,
    entityId: "intercity-taxi",
    parentUrl: "/blog",
    anchorVariants: [
      "Makkah to Madinah Taxi Guide",
      "how to travel Makkah to Madinah",
      "Haramain taxi route guide",
    ],
    description: "450km Haramain route: taxi vs train comparison",
  },
  {
    url: "/blog/saudi-arabia-taxi-guide-pilgrims",
    label: "Saudi Taxi Guide for Pilgrims",
    title: "Saudi Arabia Taxi Guide for Pilgrims",
    pageType: "blog",
    depth: 3,
    entityId: "pilgrim-transport",
    parentUrl: "/blog",
    anchorVariants: [
      "Saudi Arabia Taxi Guide for Pilgrims",
      "pilgrim transport guide Saudi Arabia",
      "Umrah Hajj taxi tips",
    ],
    description: "Essential taxi guide for Umrah and Hajj pilgrims",
  },
];

// ── FAQ / Static links ────────────────────────────────────────────────────

export const STATIC_LINKS: SiteLink[] = [
  {
    url: "/faq",
    label: "FAQ",
    title: "Frequently Asked Questions – Taxi Bhai Saudi Arabia",
    pageType: "faq",
    depth: 3,
    entityId: "taxi-bhai",
    anchorVariants: [
      "FAQ",
      "Taxi Bhai FAQ",
      "common taxi questions Saudi Arabia",
      "how to book a Saudi taxi",
    ],
    description: "Common questions about booking, pricing and routes",
  },
  {
    url: "/about",
    label: "About Taxi Bhai",
    title: "About Taxi Bhai – Saudi Arabia Taxi Service",
    pageType: "static",
    depth: 2,
    entityId: "taxi-bhai",
    anchorVariants: ["About Taxi Bhai", "about us", "who is Taxi Bhai"],
    description: "Founded 2019 — trusted by 847+ pilgrims and travelers",
  },
  {
    url: "/contact",
    label: "Contact",
    title: "Contact Taxi Bhai – Book Your Taxi Today",
    pageType: "static",
    depth: 2,
    entityId: "taxi-bhai",
    anchorVariants: ["Contact", "Contact Taxi Bhai", "book a taxi"],
    description: "WhatsApp, call, or email us 24/7",
  },
  {
    url: "/blog",
    label: "Travel Guide Blog",
    title: "Taxi Bhai Blog – Saudi Arabia Travel & Taxi Guide",
    pageType: "hub",
    depth: 1,
    entityId: "taxi-bhai",
    anchorVariants: [
      "Travel Guide Blog",
      "Saudi Arabia taxi guide",
      "pilgrim travel tips",
    ],
    description: "Expert guides for Umrah pilgrims and travelers",
  },
  {
    url: "/locations",
    label: "Service Locations",
    title: "Taxi Service Locations – Jeddah, Makkah, Madinah",
    pageType: "hub",
    depth: 1,
    entityId: "saudi-taxi-service",
    anchorVariants: [
      "Service Locations",
      "cities we serve",
      "Saudi Arabia taxi coverage",
    ],
    description: "All 5 cities covered by Taxi Bhai",
  },
];

// ── Flat master list ──────────────────────────────────────────────────────

export const ALL_LINKS: SiteLink[] = [
  ...HUB_LINKS,
  ...LOCATION_LINKS,
  ...ROUTE_LINKS,
  ...BLOG_LINKS,
  ...STATIC_LINKS,
];

export function getLinkByUrl(url: string): SiteLink | undefined {
  return ALL_LINKS.find((l) => l.url === url);
}

export function getLinksByPageType(type: PageType): SiteLink[] {
  return ALL_LINKS.filter((l) => l.pageType === type);
}

export function getLinksByEntityId(entityId: string): SiteLink[] {
  return ALL_LINKS.filter((l) => l.entityId === entityId);
}
