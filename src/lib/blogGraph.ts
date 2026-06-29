/**
 * Blog Graph
 * Defines semantic relationships between blog posts and all other page types.
 * Drives "Related Articles" widgets and cross-linking from service/location pages.
 */

import { BLOG_LINKS, ROUTE_LINKS, HUB_LINKS, LOCATION_LINKS, SiteLink } from "./internalLinkMap";

export interface BlogNode {
  slug: string;
  url: string;
  category: string;
  primaryEntityId: string;
  relatedServiceUrls: string[];
  relatedLocationUrls: string[];
  relatedRouteUrls: string[];
  relatedBlogSlugs: string[];   // sibling blog posts
}

export const BLOG_GRAPH: BlogNode[] = [
  {
    slug: "best-umrah-taxi-service-jeddah",
    url: "/blog/best-umrah-taxi-service-jeddah",
    category: "Umrah Guide",
    primaryEntityId: "umrah-taxi",
    relatedServiceUrls: [
      "/services/umrah-taxi",
      "/services/airport-transfer",
      "/services/haram-transfer",
    ],
    relatedLocationUrls: ["/locations/jeddah", "/locations/makkah"],
    relatedRouteUrls: [
      "/taxi-jeddah-airport-to-makkah",
      "/taxi-jeddah-to-makkah",
      "/taxi-makkah-to-madinah",
    ],
    relatedBlogSlugs: [
      "jeddah-airport-to-makkah-guide",
      "saudi-arabia-taxi-guide-pilgrims",
    ],
  },
  {
    slug: "jeddah-airport-to-makkah-guide",
    url: "/blog/jeddah-airport-to-makkah-guide",
    category: "Airport Guide",
    primaryEntityId: "airport-transfer",
    relatedServiceUrls: [
      "/services/airport-transfer",
      "/services/umrah-taxi",
      "/services/vip-taxi",
    ],
    relatedLocationUrls: ["/locations/jeddah", "/locations/makkah"],
    relatedRouteUrls: [
      "/taxi-jeddah-airport-to-makkah",
      "/taxi-jeddah-to-makkah",
      "/taxi-haram-to-airport",
    ],
    relatedBlogSlugs: [
      "best-umrah-taxi-service-jeddah",
      "makkah-to-madinah-taxi-guide",
    ],
  },
  {
    slug: "ziyarat-tour-madinah-guide",
    url: "/blog/ziyarat-tour-madinah-guide",
    category: "Ziyarat Guide",
    primaryEntityId: "ziyarat-taxi",
    relatedServiceUrls: [
      "/services/ziyarat-taxi",
      "/services/umrah-taxi",
      "/services/haram-transfer",
    ],
    relatedLocationUrls: ["/locations/madinah", "/locations/badr", "/locations/makkah"],
    relatedRouteUrls: [
      "/taxi-madinah-to-badr",
      "/taxi-makkah-to-madinah",
      "/taxi-jeddah-to-madinah",
    ],
    relatedBlogSlugs: [
      "makkah-to-madinah-taxi-guide",
      "saudi-arabia-taxi-guide-pilgrims",
    ],
  },
  {
    slug: "makkah-to-madinah-taxi-guide",
    url: "/blog/makkah-to-madinah-taxi-guide",
    category: "Intercity Routes",
    primaryEntityId: "intercity-taxi",
    relatedServiceUrls: [
      "/services/intercity-taxi",
      "/services/umrah-taxi",
      "/services/vip-taxi",
    ],
    relatedLocationUrls: ["/locations/makkah", "/locations/madinah", "/locations/jeddah"],
    relatedRouteUrls: [
      "/taxi-makkah-to-madinah",
      "/taxi-jeddah-to-madinah",
      "/taxi-madinah-to-makkah",
      "/taxi-jeddah-to-makkah",
    ],
    relatedBlogSlugs: [
      "ziyarat-tour-madinah-guide",
      "best-umrah-taxi-service-jeddah",
    ],
  },
  {
    slug: "saudi-arabia-taxi-guide-pilgrims",
    url: "/blog/saudi-arabia-taxi-guide-pilgrims",
    category: "Pilgrim Guide",
    primaryEntityId: "pilgrim-transport",
    relatedServiceUrls: [
      "/services/umrah-taxi",
      "/services/airport-transfer",
      "/services/intercity-taxi",
      "/services/haram-transfer",
    ],
    relatedLocationUrls: [
      "/locations/jeddah",
      "/locations/makkah",
      "/locations/madinah",
    ],
    relatedRouteUrls: [
      "/taxi-jeddah-to-makkah",
      "/taxi-makkah-to-madinah",
      "/taxi-jeddah-airport-to-makkah",
    ],
    relatedBlogSlugs: [
      "best-umrah-taxi-service-jeddah",
      "jeddah-airport-to-makkah-guide",
      "makkah-to-madinah-taxi-guide",
    ],
  },
];

export function getBlogNode(slug: string): BlogNode | undefined {
  return BLOG_GRAPH.find((n) => n.slug === slug);
}

export function getRelatedBlogLinks(slug: string, max = 3): SiteLink[] {
  const node = getBlogNode(slug);
  if (!node) return [];
  return node.relatedBlogSlugs
    .slice(0, max)
    .map((s) => BLOG_LINKS.find((l) => l.url === `/blog/${s}`))
    .filter((l): l is SiteLink => !!l);
}

export function getBlogLinksForService(serviceUrl: string, max = 3): SiteLink[] {
  return BLOG_GRAPH.filter((n) => n.relatedServiceUrls.includes(serviceUrl))
    .slice(0, max)
    .map((n) => BLOG_LINKS.find((l) => l.url === n.url))
    .filter((l): l is SiteLink => !!l);
}

export function getBlogLinksForLocation(locationUrl: string, max = 3): SiteLink[] {
  return BLOG_GRAPH.filter((n) => n.relatedLocationUrls.includes(locationUrl))
    .slice(0, max)
    .map((n) => BLOG_LINKS.find((l) => l.url === n.url))
    .filter((l): l is SiteLink => !!l);
}

export function getBlogLinksForRoute(routeUrl: string, max = 2): SiteLink[] {
  return BLOG_GRAPH.filter((n) => n.relatedRouteUrls.includes(routeUrl))
    .slice(0, max)
    .map((n) => BLOG_LINKS.find((l) => l.url === n.url))
    .filter((l): l is SiteLink => !!l);
}
