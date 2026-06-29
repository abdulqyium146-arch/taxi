/**
 * Related Content Engine
 * The central algorithm that determines which pages should link to each other.
 * Implements Koray Tugberk's Semantic SEO principles:
 *  - No traditional silos
 *  - Every page connects to related entities
 *  - Anchor text variation for topical richness
 *  - Hub pages link outward, leaf pages link upward and laterally
 */

import {
  SiteLink,
  HUB_LINKS,
  LOCATION_LINKS,
  ROUTE_LINKS,
  BLOG_LINKS,
  STATIC_LINKS,
  ALL_LINKS,
} from "./internalLinkMap";
import { ENTITY_GRAPH } from "./entityGraph";
import type { FaqItem } from "./types";
import {
  GLOBAL_FAQS,
  AIRPORT_FAQS,
  UMRAH_FAQS,
  ZIYARAT_FAQS,
  INTERCITY_FAQS,
} from "./faqs";

export interface RelatedContent {
  services: SiteLink[];
  cities: SiteLink[];
  routes: SiteLink[];
  blogs: SiteLink[];
  faqs: FaqItem[];
  popularRoutes: SiteLink[];     // subset used on high-traffic pages
  nearbyLocations: SiteLink[];   // geographically close cities
  allServiceLinks: SiteLink[];   // used for dense link grids on hub pages
}

export interface RelatedOptions {
  maxServices?: number;
  maxCities?: number;
  maxRoutes?: number;
  maxBlogs?: number;
  maxFaqs?: number;
  excludeUrl?: string;
}

const DEFAULT_OPTIONS: Required<RelatedOptions> = {
  maxServices: 6,
  maxCities: 5,
  maxRoutes: 6,
  maxBlogs: 4,
  maxFaqs: 4,
  excludeUrl: "",
};

// ── Page → entity relationship map ───────────────────────────────────────
// Defines which entities are central to each page, driving related content selection

const PAGE_ENTITY_MAP: Record<string, string[]> = {
  // Homepage
  "/": ["taxi-bhai", "saudi-taxi-service", "jeddah", "makkah", "madinah", "airport-transfer", "umrah-taxi", "ziyarat-taxi", "intercity-taxi"],

  // Services
  "/services/airport-transfer":  ["airport-transfer", "kaia-airport", "jeddah", "makkah", "madinah", "umrah-taxi"],
  "/services/umrah-taxi":        ["umrah-taxi", "umrah", "makkah", "madinah", "airport-transfer", "haram-transfer"],
  "/services/ziyarat-taxi":      ["ziyarat-taxi", "ziyarat", "madinah", "makkah", "badr", "umrah-taxi"],
  "/services/vip-taxi":          ["vip-taxi", "airport-transfer", "intercity-taxi", "jeddah", "makkah"],
  "/services/family-taxi":       ["family-taxi", "umrah-taxi", "intercity-taxi", "jeddah", "makkah"],
  "/services/haram-transfer":    ["haram-transfer", "masjid-al-haram", "makkah", "madinah", "umrah-taxi"],
  "/services/intercity-taxi":    ["intercity-taxi", "jeddah", "makkah", "madinah", "taif", "badr"],
  "/services/city-to-city":      ["intercity-taxi", "jeddah", "makkah", "madinah", "taif", "badr"],

  // Locations
  "/locations/jeddah":   ["jeddah", "kaia-airport", "airport-transfer", "umrah-taxi", "intercity-taxi", "makkah", "madinah", "taif"],
  "/locations/makkah":   ["makkah", "masjid-al-haram", "umrah-taxi", "haram-transfer", "ziyarat-taxi", "jeddah", "madinah", "taif"],
  "/locations/madinah":  ["madinah", "masjid-nabawi", "ziyarat-taxi", "haram-transfer", "umrah-taxi", "makkah", "badr", "jeddah"],
  "/locations/taif":     ["taif", "makkah", "jeddah", "intercity-taxi", "vip-taxi"],
  "/locations/badr":     ["badr", "madinah", "ziyarat-taxi", "intercity-taxi", "ziyarat"],

  // Routes – from/to city drives the related content
  "/taxi-jeddah-to-makkah":           ["jeddah", "makkah", "intercity-taxi", "umrah-taxi", "airport-transfer"],
  "/taxi-jeddah-to-madinah":          ["jeddah", "madinah", "intercity-taxi", "umrah-taxi", "airport-transfer"],
  "/taxi-jeddah-to-taif":             ["jeddah", "taif", "intercity-taxi", "vip-taxi"],
  "/taxi-jeddah-to-badr":             ["jeddah", "badr", "ziyarat-taxi", "intercity-taxi"],
  "/taxi-makkah-to-madinah":          ["makkah", "madinah", "intercity-taxi", "umrah-taxi", "haram-transfer"],
  "/taxi-makkah-to-taif":             ["makkah", "taif", "intercity-taxi", "vip-taxi"],
  "/taxi-makkah-to-jeddah":           ["makkah", "jeddah", "kaia-airport", "airport-transfer", "umrah-taxi"],
  "/taxi-madinah-to-makkah":          ["madinah", "makkah", "intercity-taxi", "umrah-taxi", "ziyarat-taxi"],
  "/taxi-madinah-to-jeddah":          ["madinah", "jeddah", "kaia-airport", "airport-transfer", "intercity-taxi"],
  "/taxi-madinah-to-badr":            ["madinah", "badr", "ziyarat-taxi", "intercity-taxi"],
  "/taxi-taif-to-makkah":             ["taif", "makkah", "intercity-taxi"],
  "/taxi-taif-to-jeddah":             ["taif", "jeddah", "intercity-taxi"],
  "/taxi-jeddah-airport-to-makkah":   ["kaia-airport", "makkah", "airport-transfer", "umrah-taxi", "jeddah"],
  "/taxi-jeddah-airport-to-madinah":  ["kaia-airport", "madinah", "airport-transfer", "umrah-taxi", "jeddah"],
  "/taxi-haram-to-airport":           ["makkah", "kaia-airport", "airport-transfer", "umrah-taxi", "haram-transfer"],

  // Blogs
  "/blog/best-umrah-taxi-service-jeddah":    ["umrah-taxi", "kaia-airport", "jeddah", "makkah", "airport-transfer"],
  "/blog/jeddah-airport-to-makkah-guide":    ["kaia-airport", "jeddah", "makkah", "airport-transfer", "umrah-taxi"],
  "/blog/ziyarat-tour-madinah-guide":        ["ziyarat-taxi", "madinah", "badr", "makkah", "umrah-taxi"],
  "/blog/makkah-to-madinah-taxi-guide":      ["makkah", "madinah", "intercity-taxi", "umrah-taxi"],
  "/blog/saudi-arabia-taxi-guide-pilgrims":  ["saudi-taxi-service", "umrah-taxi", "airport-transfer", "intercity-taxi"],

  // FAQ
  "/faq": ["taxi-bhai", "airport-transfer", "umrah-taxi", "intercity-taxi", "jeddah", "makkah"],
};

// ── FAQ cluster routing ───────────────────────────────────────────────────

const PAGE_FAQ_CLUSTERS: Record<string, FaqItem[][]> = {
  "/services/airport-transfer":  [AIRPORT_FAQS, GLOBAL_FAQS],
  "/services/umrah-taxi":        [UMRAH_FAQS, AIRPORT_FAQS, GLOBAL_FAQS],
  "/services/ziyarat-taxi":      [ZIYARAT_FAQS, GLOBAL_FAQS],
  "/services/haram-transfer":    [UMRAH_FAQS, ZIYARAT_FAQS],
  "/services/intercity-taxi":    [INTERCITY_FAQS, GLOBAL_FAQS],
  "/services/city-to-city":      [INTERCITY_FAQS],
  "/services/vip-taxi":          [GLOBAL_FAQS, INTERCITY_FAQS],
  "/services/family-taxi":       [GLOBAL_FAQS, UMRAH_FAQS],
  "/locations/jeddah":           [AIRPORT_FAQS, GLOBAL_FAQS],
  "/locations/makkah":           [UMRAH_FAQS, GLOBAL_FAQS],
  "/locations/madinah":          [ZIYARAT_FAQS, UMRAH_FAQS],
  "/locations/taif":             [INTERCITY_FAQS],
  "/locations/badr":             [ZIYARAT_FAQS],
  "/faq":                        [GLOBAL_FAQS, AIRPORT_FAQS, UMRAH_FAQS, ZIYARAT_FAQS, INTERCITY_FAQS],
};

// ── Nearby city graph ─────────────────────────────────────────────────────

const NEARBY_CITIES: Record<string, string[]> = {
  "/locations/jeddah":  ["/locations/makkah", "/locations/taif", "/locations/madinah"],
  "/locations/makkah":  ["/locations/jeddah", "/locations/taif", "/locations/madinah"],
  "/locations/madinah": ["/locations/badr", "/locations/jeddah", "/locations/makkah"],
  "/locations/taif":    ["/locations/makkah", "/locations/jeddah"],
  "/locations/badr":    ["/locations/madinah"],
};

// ── Popular routes (shown on high-traffic pages) ─────────────────────────

export const POPULAR_ROUTES: SiteLink[] = [
  ...ROUTE_LINKS.filter((r) =>
    [
      "/taxi-jeddah-to-makkah",
      "/taxi-makkah-to-madinah",
      "/taxi-jeddah-to-madinah",
      "/taxi-jeddah-airport-to-makkah",
      "/taxi-madinah-to-badr",
      "/taxi-makkah-to-jeddah",
    ].includes(r.url)
  ),
];

// ── Core engine ───────────────────────────────────────────────────────────

function scoreLink(link: SiteLink, entityIds: string[]): number {
  let score = 0;
  // Primary entity match = highest weight
  if (entityIds.includes(link.entityId)) score += 10;
  // Related entity match
  const entity = ENTITY_GRAPH[link.entityId];
  if (entity) {
    for (const related of entity.relatedEntities) {
      if (entityIds.includes(related)) score += 3;
    }
  }
  return score;
}

function dedupe(links: SiteLink[], excludeUrl: string): SiteLink[] {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (l.url === excludeUrl || seen.has(l.url)) return false;
    seen.add(l.url);
    return true;
  });
}

export function getRelatedContent(
  currentUrl: string,
  options: RelatedOptions = {}
): RelatedContent {
  const opts = { ...DEFAULT_OPTIONS, ...options, excludeUrl: currentUrl };

  const entityIds = PAGE_ENTITY_MAP[currentUrl] ?? ["taxi-bhai"];

  const score = (l: SiteLink) => scoreLink(l, entityIds);
  const sorted = <T extends SiteLink>(arr: T[]) =>
    dedupe([...arr].sort((a, b) => score(b) - score(a)), currentUrl);

  // Services (hub links)
  const services = sorted(HUB_LINKS).slice(0, opts.maxServices);

  // Cities (location links)
  const cities = sorted(LOCATION_LINKS).slice(0, opts.maxCities);

  // Routes (route links)
  const routes = sorted(ROUTE_LINKS).slice(0, opts.maxRoutes);

  // Blogs
  const blogs = sorted(BLOG_LINKS).slice(0, opts.maxBlogs);

  // FAQs
  const faqPool = (PAGE_FAQ_CLUSTERS[currentUrl] ?? [GLOBAL_FAQS]).flat();
  const seenFaqs = new Set<string>();
  const faqs = faqPool
    .filter((f) => {
      if (seenFaqs.has(f.question)) return false;
      seenFaqs.add(f.question);
      return true;
    })
    .slice(0, opts.maxFaqs)
    .map(({ question, answer }) => ({ question, answer }));

  // Popular routes (for homepage / hub pages)
  const popularRoutes = POPULAR_ROUTES.filter((r) => r.url !== currentUrl).slice(0, 6);

  // Nearby locations
  const nearbyUrls = NEARBY_CITIES[currentUrl] ?? [];
  const nearbyLocations = nearbyUrls
    .map((u) => LOCATION_LINKS.find((l) => l.url === u))
    .filter((l): l is SiteLink => !!l);

  return { services, cities, routes, blogs, faqs, popularRoutes, nearbyLocations, allServiceLinks: HUB_LINKS };
}

// ── Anchor text picker (rotate through variants) ──────────────────────────
// Use index-based selection so SSG renders deterministically

export function pickAnchor(link: SiteLink, index: number = 0): string {
  const variants = link.anchorVariants;
  return variants[index % variants.length] ?? link.label;
}

// ── Breadcrumb builder ────────────────────────────────────────────────────

export interface BreadcrumbStep {
  name: string;
  href: string;
}

export function buildBreadcrumbs(currentUrl: string, pageTitle: string): BreadcrumbStep[] {
  const base: BreadcrumbStep[] = [{ name: "Home", href: "/" }];

  if (currentUrl.startsWith("/services/")) {
    return [...base, { name: "Services", href: "/services/intercity-taxi" }, { name: pageTitle, href: currentUrl }];
  }
  if (currentUrl.startsWith("/locations/")) {
    return [...base, { name: "Locations", href: "/locations" }, { name: pageTitle, href: currentUrl }];
  }
  if (currentUrl.startsWith("/taxi-")) {
    return [...base, { name: "Routes", href: "/services/intercity-taxi" }, { name: pageTitle, href: currentUrl }];
  }
  if (currentUrl.startsWith("/blog/")) {
    return [...base, { name: "Blog", href: "/blog" }, { name: pageTitle, href: currentUrl }];
  }
  return [...base, { name: pageTitle, href: currentUrl }];
}
