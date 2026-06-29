import { MetadataRoute } from "next";
import { BUSINESS, INTERCITY_ROUTES } from "@/lib/constants";

const BASE = BUSINESS.website;
const NOW = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: NOW, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
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

  const locationPages: MetadataRoute.Sitemap = [
    "/jeddah",
    "/makkah",
    "/madinah",
    "/taif",
    "/badr",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const routePages: MetadataRoute.Sitemap = INTERCITY_ROUTES.map((route) => ({
    url: `${BASE}/taxi-${route.slug}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...routePages];
}
