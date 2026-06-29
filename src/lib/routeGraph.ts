/**
 * Route Graph
 * Semantic relationships between intercity routes.
 * Drives "Related Routes" widgets and ensures every route page
 * links to its complementary routes (reverse, parallel, adjacent).
 */

import { ROUTE_LINKS, SiteLink } from "./internalLinkMap";

export interface RouteNode {
  slug: string;           // matches INTERCITY_ROUTES slug
  url: string;
  fromCity: string;       // city key
  toCity: string;
  reverseSlug?: string;   // reverse direction route slug
  parallelSlugs: string[];// routes sharing same endpoint (e.g. jeddah-to-taif ↔ jeddah-to-makkah)
  complementSlugs: string[];// routes that logically complete a journey
  serviceLinks: string[]; // service page URLs this route promotes
  blogSlugs: string[];    // blog URLs relevant to this route
}

export const ROUTE_GRAPH: RouteNode[] = [
  {
    slug: "jeddah-to-makkah",
    url: "/taxi-jeddah-to-makkah",
    fromCity: "jeddah",
    toCity: "makkah",
    reverseSlug: "makkah-to-jeddah",
    parallelSlugs: ["jeddah-to-madinah", "jeddah-to-taif", "jeddah-airport-to-makkah"],
    complementSlugs: ["makkah-to-madinah", "taxi-haram-to-airport"],
    serviceLinks: ["/services/airport-transfer", "/services/umrah-taxi", "/services/intercity-taxi"],
    blogSlugs: ["/blog/best-umrah-taxi-service-jeddah", "/blog/jeddah-airport-to-makkah-guide"],
  },
  {
    slug: "jeddah-to-madinah",
    url: "/taxi-jeddah-to-madinah",
    fromCity: "jeddah",
    toCity: "madinah",
    reverseSlug: "madinah-to-jeddah",
    parallelSlugs: ["jeddah-to-makkah", "jeddah-to-taif", "jeddah-airport-to-madinah"],
    complementSlugs: ["madinah-to-makkah", "madinah-to-badr"],
    serviceLinks: ["/services/airport-transfer", "/services/intercity-taxi", "/services/umrah-taxi"],
    blogSlugs: ["/blog/best-umrah-taxi-service-jeddah", "/blog/makkah-to-madinah-taxi-guide"],
  },
  {
    slug: "jeddah-to-taif",
    url: "/taxi-jeddah-to-taif",
    fromCity: "jeddah",
    toCity: "taif",
    reverseSlug: "taif-to-jeddah",
    parallelSlugs: ["jeddah-to-makkah", "makkah-to-taif"],
    complementSlugs: ["taif-to-makkah"],
    serviceLinks: ["/services/intercity-taxi", "/services/vip-taxi"],
    blogSlugs: ["/blog/saudi-arabia-taxi-guide-pilgrims"],
  },
  {
    slug: "jeddah-to-badr",
    url: "/taxi-jeddah-to-badr",
    fromCity: "jeddah",
    toCity: "badr",
    reverseSlug: undefined,
    parallelSlugs: ["jeddah-to-madinah", "madinah-to-badr"],
    complementSlugs: ["madinah-to-badr"],
    serviceLinks: ["/services/ziyarat-taxi", "/services/intercity-taxi"],
    blogSlugs: ["/blog/ziyarat-tour-madinah-guide"],
  },
  {
    slug: "makkah-to-madinah",
    url: "/taxi-makkah-to-madinah",
    fromCity: "makkah",
    toCity: "madinah",
    reverseSlug: "madinah-to-makkah",
    parallelSlugs: ["jeddah-to-madinah", "makkah-to-jeddah"],
    complementSlugs: ["madinah-to-badr", "jeddah-to-makkah"],
    serviceLinks: ["/services/umrah-taxi", "/services/intercity-taxi", "/services/haram-transfer"],
    blogSlugs: ["/blog/makkah-to-madinah-taxi-guide", "/blog/ziyarat-tour-madinah-guide"],
  },
  {
    slug: "makkah-to-taif",
    url: "/taxi-makkah-to-taif",
    fromCity: "makkah",
    toCity: "taif",
    reverseSlug: "taif-to-makkah",
    parallelSlugs: ["makkah-to-madinah", "jeddah-to-taif"],
    complementSlugs: ["taif-to-jeddah"],
    serviceLinks: ["/services/intercity-taxi", "/services/vip-taxi"],
    blogSlugs: ["/blog/saudi-arabia-taxi-guide-pilgrims"],
  },
  {
    slug: "makkah-to-jeddah",
    url: "/taxi-makkah-to-jeddah",
    fromCity: "makkah",
    toCity: "jeddah",
    reverseSlug: "jeddah-to-makkah",
    parallelSlugs: ["haram-to-airport", "makkah-to-madinah"],
    complementSlugs: ["jeddah-airport-to-makkah"],
    serviceLinks: ["/services/airport-transfer", "/services/umrah-taxi", "/services/intercity-taxi"],
    blogSlugs: ["/blog/jeddah-airport-to-makkah-guide", "/blog/best-umrah-taxi-service-jeddah"],
  },
  {
    slug: "madinah-to-makkah",
    url: "/taxi-madinah-to-makkah",
    fromCity: "madinah",
    toCity: "makkah",
    reverseSlug: "makkah-to-madinah",
    parallelSlugs: ["madinah-to-jeddah", "madinah-to-badr"],
    complementSlugs: ["makkah-to-jeddah", "haram-to-airport"],
    serviceLinks: ["/services/umrah-taxi", "/services/intercity-taxi", "/services/ziyarat-taxi"],
    blogSlugs: ["/blog/makkah-to-madinah-taxi-guide"],
  },
  {
    slug: "madinah-to-jeddah",
    url: "/taxi-madinah-to-jeddah",
    fromCity: "madinah",
    toCity: "jeddah",
    reverseSlug: "jeddah-to-madinah",
    parallelSlugs: ["madinah-to-makkah", "jeddah-airport-to-madinah"],
    complementSlugs: ["jeddah-airport-to-madinah"],
    serviceLinks: ["/services/airport-transfer", "/services/intercity-taxi"],
    blogSlugs: ["/blog/saudi-arabia-taxi-guide-pilgrims"],
  },
  {
    slug: "madinah-to-badr",
    url: "/taxi-madinah-to-badr",
    fromCity: "madinah",
    toCity: "badr",
    reverseSlug: undefined,
    parallelSlugs: ["jeddah-to-badr", "madinah-to-makkah"],
    complementSlugs: ["madinah-to-makkah"],
    serviceLinks: ["/services/ziyarat-taxi", "/services/intercity-taxi"],
    blogSlugs: ["/blog/ziyarat-tour-madinah-guide"],
  },
  {
    slug: "taif-to-makkah",
    url: "/taxi-taif-to-makkah",
    fromCity: "taif",
    toCity: "makkah",
    reverseSlug: "makkah-to-taif",
    parallelSlugs: ["taif-to-jeddah", "jeddah-to-makkah"],
    complementSlugs: ["makkah-to-madinah"],
    serviceLinks: ["/services/intercity-taxi", "/services/umrah-taxi"],
    blogSlugs: ["/blog/saudi-arabia-taxi-guide-pilgrims"],
  },
  {
    slug: "taif-to-jeddah",
    url: "/taxi-taif-to-jeddah",
    fromCity: "taif",
    toCity: "jeddah",
    reverseSlug: "jeddah-to-taif",
    parallelSlugs: ["taif-to-makkah", "jeddah-to-taif"],
    complementSlugs: ["jeddah-to-makkah"],
    serviceLinks: ["/services/intercity-taxi", "/services/airport-transfer"],
    blogSlugs: ["/blog/saudi-arabia-taxi-guide-pilgrims"],
  },
  {
    slug: "jeddah-airport-to-makkah",
    url: "/taxi-jeddah-airport-to-makkah",
    fromCity: "jeddah",
    toCity: "makkah",
    reverseSlug: "haram-to-airport",
    parallelSlugs: ["jeddah-to-makkah", "jeddah-airport-to-madinah"],
    complementSlugs: ["makkah-to-madinah", "haram-to-airport"],
    serviceLinks: ["/services/airport-transfer", "/services/umrah-taxi"],
    blogSlugs: ["/blog/best-umrah-taxi-service-jeddah", "/blog/jeddah-airport-to-makkah-guide"],
  },
  {
    slug: "jeddah-airport-to-madinah",
    url: "/taxi-jeddah-airport-to-madinah",
    fromCity: "jeddah",
    toCity: "madinah",
    reverseSlug: "madinah-to-jeddah",
    parallelSlugs: ["jeddah-to-madinah", "jeddah-airport-to-makkah"],
    complementSlugs: ["madinah-to-makkah", "madinah-to-badr"],
    serviceLinks: ["/services/airport-transfer", "/services/umrah-taxi", "/services/ziyarat-taxi"],
    blogSlugs: ["/blog/best-umrah-taxi-service-jeddah", "/blog/ziyarat-tour-madinah-guide"],
  },
  {
    slug: "haram-to-airport",
    url: "/taxi-haram-to-airport",
    fromCity: "makkah",
    toCity: "jeddah",
    reverseSlug: "jeddah-airport-to-makkah",
    parallelSlugs: ["makkah-to-jeddah", "jeddah-airport-to-makkah"],
    complementSlugs: ["jeddah-airport-to-makkah", "jeddah-airport-to-madinah"],
    serviceLinks: ["/services/airport-transfer", "/services/haram-transfer", "/services/umrah-taxi"],
    blogSlugs: ["/blog/jeddah-airport-to-makkah-guide", "/blog/best-umrah-taxi-service-jeddah"],
  },
];

export function getRouteNode(slug: string): RouteNode | undefined {
  return ROUTE_GRAPH.find((r) => r.slug === slug);
}

export function getRelatedRouteLinks(slug: string, max = 6): SiteLink[] {
  const node = getRouteNode(slug);
  if (!node) return [];
  const candidates = [
    node.reverseSlug,
    ...node.parallelSlugs,
    ...node.complementSlugs,
  ]
    .filter((s): s is string => !!s)
    .slice(0, max);

  return candidates
    .map((s) => ROUTE_LINKS.find((l) => l.url === `/taxi-${s}`))
    .filter((l): l is SiteLink => !!l);
}

export function getRoutesByCity(cityKey: string): SiteLink[] {
  const cityNodes = ROUTE_GRAPH.filter(
    (r) => r.fromCity === cityKey || r.toCity === cityKey
  );
  return cityNodes
    .map((n) => ROUTE_LINKS.find((l) => l.url === n.url))
    .filter((l): l is SiteLink => !!l);
}
