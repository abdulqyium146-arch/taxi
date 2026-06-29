import { Metadata } from "next";
import { BUSINESS } from "./constants";

interface BuildMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  ogImage = "/images/og-default.jpg",
  noIndex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const canonicalUrl = `${BUSINESS.website}${path}`;
  const fullTitle = title.includes("Taxi Bhai")
    ? title
    : `${title} | Taxi Bhai Saudi Arabia`;

  const defaultKeywords = [
    "taxi Saudi Arabia",
    "Saudi taxi service",
    "Jeddah taxi",
    "Makkah taxi",
    "Madinah taxi",
    "Umrah taxi",
    "airport transfer Jeddah",
    "intercity taxi Saudi",
    "taxi bhai",
    "24/7 taxi Saudi Arabia",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    authors: [{ name: BUSINESS.name, url: BUSINESS.website }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    category: "Transportation",
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: BUSINESS.name,
      locale: "en_SA",
      alternateLocale: "ar_SA",
      type: "website",
      images: [
        {
          url: `${BUSINESS.website}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${BUSINESS.website}${ogImage}`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-SA": canonicalUrl,
        "ar-SA": `${BUSINESS.website}/ar${path}`,
      },
    },
    verification: {
      google: "taxi-bhai-google-verification-code",
    },
    other: {
      "geo.region": "SA",
      "geo.placename": "Jeddah, Saudi Arabia",
      "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
      "ICBM": `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
      "og:phone_number": BUSINESS.phone,
    },
  };
}
