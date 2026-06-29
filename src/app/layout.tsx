import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: "Taxi Bhai – Saudi Arabia's Most Trusted Taxi Service",
    template: "%s | Taxi Bhai Saudi Arabia",
  },
  description:
    "Taxi Bhai offers 24/7 professional taxi service across Saudi Arabia. Airport transfers, Umrah taxi, Ziyarat tours, VIP service, and intercity routes between Jeddah, Makkah, Madinah, Taif & Badr. Call +966573067785.",
  keywords:
    "taxi Saudi Arabia, Saudi taxi service, airport transfer Jeddah, Umrah taxi, Makkah taxi, Madinah taxi, intercity taxi Saudi Arabia, taxi bhai, Jeddah airport taxi, Ziyarat taxi",
  authors: [{ name: "Taxi Bhai", url: BUSINESS.website }],
  creator: "Taxi Bhai",
  publisher: "Taxi Bhai",
  robots: {
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
    type: "website",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    title: "Taxi Bhai – Saudi Arabia's Most Trusted Taxi Service",
    description:
      "24/7 professional taxi service across Saudi Arabia. Airport transfers, Umrah taxi, Ziyarat tours, and intercity routes. Book now: +966573067785",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Taxi Bhai – Saudi Arabia Taxi Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Bhai – Saudi Arabia's Most Trusted Taxi Service",
    description:
      "24/7 professional taxi service. Airport transfers, Umrah, Ziyarat. Book: +966573067785",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: BUSINESS.website,
    languages: {
      "en-SA": BUSINESS.website,
      "ar-SA": `${BUSINESS.website}/ar`,
    },
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": "Jeddah, Saudi Arabia",
    "geo.position": "21.4858;39.1925",
    "ICBM": "21.4858, 39.1925",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="theme-color" content="#006C35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 font-[var(--font-inter)]">
        <JsonLd data={buildLocalBusinessSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  );
}
