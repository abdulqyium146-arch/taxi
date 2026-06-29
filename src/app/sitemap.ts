import { MetadataRoute } from "next";
import { BUSINESS, CITIES, INTERCITY_ROUTES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

const BASE = BUSINESS.website;
const NOW = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,              lastModified: NOW, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/about`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`,     lastModified: NOW, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog`,    lastModified: NOW, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/locations`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "/services/airport-transfer",
    "/services/umrah-taxi",
    "/services/ziyarat-taxi",
    "/services/vip-taxi",
    "/services/family-taxi",
    "/services/haram-transfer",
    "/services/intercity-taxi",
    "/services/city-to-city",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // New canonical location pages at /locations/[city]
  const locationPages: MetadataRoute.Sitemap = (
    Object.keys(CITIES) as (keyof typeof CITIES)[]
  ).map((city) => ({
    url: `${BASE}/locations/${city}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  const routePages: MetadataRoute.Sitemap = INTERCITY_ROUTES.map((route) => ({
    url: `${BASE}/taxi-${route.slug}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.82,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...routePages,
    ...blogPages,
  ];
}
