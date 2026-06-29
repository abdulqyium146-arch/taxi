import { BUSINESS, CITIES } from "./constants";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${BUSINESS.website}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.website,
    telephone: BUSINESS.phone,
    foundingDate: BUSINESS.founded,
    currenciesAccepted: BUSINESS.currency,
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    priceRange: "$$",
    openingHours: BUSINESS.openingHours,
    image: `${BUSINESS.website}/images/taxi-bhai-logo.png`,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.website}/images/taxi-bhai-logo.png`,
      width: 400,
      height: 400,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          opens: "00:00",
          closes: "23:59",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Jeddah",
        sameAs: "https://www.wikidata.org/wiki/Q127456",
      },
      {
        "@type": "City",
        name: "Makkah",
        sameAs: "https://www.wikidata.org/wiki/Q3947",
      },
      {
        "@type": "City",
        name: "Madinah",
        sameAs: "https://www.wikidata.org/wiki/Q5725",
      },
      { "@type": "City", name: "Taif" },
      { "@type": "City", name: "Badr" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi Bhai Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfer",
            description: "24/7 airport pickup and drop-off service from KAIA",
          },
          price: "80",
          priceCurrency: "SAR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Umrah Taxi Service",
            description: "Complete Umrah transport from airport to Haram",
          },
          price: "150",
          priceCurrency: "SAR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intercity Taxi",
            description: "Fixed-price city-to-city taxi across Saudi Arabia",
          },
          price: "120",
          priceCurrency: "SAR",
        },
      ],
    },
    sameAs: [BUSINESS.socialMedia.whatsapp],
    keywords:
      "taxi Saudi Arabia, airport transfer Jeddah, Umrah taxi, Makkah taxi, Madinah taxi, intercity taxi Saudi",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.website}/#website`,
    url: BUSINESS.website,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: {
      "@id": `${BUSINESS.website}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.website}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-SA", "ar-SA"],
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.website}${item.href}`,
    })),
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  price,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  price: number;
  areaServed: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BUSINESS.website}${url}`,
    provider: {
      "@id": `${BUSINESS.website}/#organization`,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: "SAR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: price.toString(),
        priceCurrency: "SAR",
        unitText: "trip",
      },
    },
    category: "Transportation",
    serviceType: "Taxi Service",
  };
}

export function buildRouteSchema({
  fromCity,
  toCity,
  distance,
  duration,
  price,
  routeSlug,
}: {
  fromCity: string;
  toCity: string;
  distance: number;
  duration: string;
  price: number;
  routeSlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TripAction",
    name: `Taxi from ${fromCity} to ${toCity}`,
    description: `Private taxi service from ${fromCity} to ${toCity} — ${distance}km, approximately ${duration}. Fixed price from SAR ${price}.`,
    provider: {
      "@id": `${BUSINESS.website}/#organization`,
    },
    fromLocation: {
      "@type": "Place",
      name: fromCity,
      address: {
        "@type": "PostalAddress",
        addressLocality: fromCity,
        addressCountry: "SA",
      },
    },
    toLocation: {
      "@type": "Place",
      name: toCity,
      address: {
        "@type": "PostalAddress",
        addressLocality: toCity,
        addressCountry: "SA",
      },
    },
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: "SAR",
    },
  };
}

export function buildReviewSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      author: { "@type": "Person", name: "Mohammed Al-Rashidi" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Excellent Umrah taxi service. Driver was punctual, the car was clean, and we reached Makkah safely. Highly recommend Taxi Bhai for all pilgrims.",
      itemReviewed: { "@id": `${BUSINESS.website}/#organization` },
      datePublished: "2024-11-15",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      author: { "@type": "Person", name: "Fatima Al-Zahra" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Best taxi from Jeddah airport to Makkah hotel. Fixed price, no haggling, very professional. Will book again for next Umrah.",
      itemReviewed: { "@id": `${BUSINESS.website}/#organization` },
      datePublished: "2024-12-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      author: { "@type": "Person", name: "Ibrahim Malik" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Booked a Ziyarat tour from Madinah to Badr. The driver was knowledgeable about the historical sites. Excellent service.",
      itemReviewed: { "@id": `${BUSINESS.website}/#organization` },
      datePublished: "2025-01-20",
    },
  ];
}

export function buildLocationSchema(cityKey: keyof typeof CITIES) {
  const city = CITIES[cityKey];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Taxi Bhai – ${city.name} Taxi Service`,
    description: `Professional taxi service in ${city.name}, Saudi Arabia. Airport transfers, Umrah transport, Ziyarat tours, and intercity routes.`,
    url: `${BUSINESS.website}/locations/${cityKey}`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.latitude,
      longitude: city.geo.longitude,
    },
    openingHours: BUSINESS.openingHours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: Math.floor(BUSINESS.rating.count * 0.4),
      bestRating: 5,
    },
  };
}

export function buildSpeakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: BUSINESS.website,
  };
}

export function buildArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName = "Taxi Bhai Team",
  imageUrl,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BUSINESS.website}/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: BUSINESS.website,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS.website}/images/taxi-bhai-logo.png`,
      },
    },
    image: imageUrl
      ? { "@type": "ImageObject", url: imageUrl }
      : `${BUSINESS.website}/images/og-default.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BUSINESS.website}/blog/${slug}`,
    },
    inLanguage: "en-SA",
    isPartOf: {
      "@type": "Blog",
      "@id": `${BUSINESS.website}/blog`,
      name: "Taxi Bhai – Saudi Arabia Travel & Taxi Guide",
    },
  };
}

export function buildItemListSchema(
  items: Array<{ name: string; url: string; description?: string }>,
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${BUSINESS.website}${item.url}`,
      description: item.description,
    })),
  };
}

export function buildWebPageSchema({
  title,
  description,
  url,
  breadcrumbs,
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; href: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BUSINESS.website}${url}`,
    url: `${BUSINESS.website}${url}`,
    name: title,
    description,
    isPartOf: { "@id": `${BUSINESS.website}/#website` },
    ...(breadcrumbs && {
      breadcrumb: buildBreadcrumbSchema(breadcrumbs),
    }),
    inLanguage: "en-SA",
    potentialAction: {
      "@type": "ReadAction",
      target: [`${BUSINESS.website}${url}`],
    },
  };
}
