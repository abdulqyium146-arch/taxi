import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocationSchema } from "@/lib/schema";
import { BUSINESS, CITIES, INTERCITY_ROUTES } from "@/lib/constants";
import { MapPin, Clock, ArrowRight, MessageCircle, Phone, Plane } from "lucide-react";
import type { FaqItem } from "@/lib/types";

type CityKey = keyof typeof CITIES;
const CITY_KEYS = Object.keys(CITIES) as CityKey[];

// ── Per-city configuration ──────────────────────────────────────────────────

const CITY_CONFIG: Record<CityKey, {
  accentColor: string;
  bgGradient: string;
  sidebarGradient: string;
  taglineColor: string;
  tagline: string;
  heroDesc: string;
  metaTitle: string;
  metaDesc: string;
  metaKeywords: string;
  waText: string;
  faqs: FaqItem[];
  faqTitle: string;
  faqSub: string;
  extraSection?: React.ReactNode;
}> = {
  jeddah: {
    accentColor: "green",
    bgGradient: "bg-gray-900",
    sidebarGradient: "linear-gradient(135deg, #14532d 0%, #006C35 100%)",
    taglineColor: "text-green-400",
    tagline: "Jeddah · Makkah Province · Saudi Arabia",
    heroDesc:
      "24/7 professional taxi in Jeddah. Airport transfers from KAIA, intercity rides to Makkah & Madinah, and local city transport. Fixed prices, licensed drivers.",
    metaTitle: "Taxi Service in Jeddah – Airport Transfers & Intercity Rides",
    metaDesc:
      "Professional taxi service in Jeddah. KAIA airport transfers, Jeddah to Makkah SAR 120, Madinah SAR 350. 24/7. Fixed prices. Book: +966573067785.",
    metaKeywords:
      "taxi Jeddah, Jeddah taxi service, airport taxi Jeddah, taxi Jeddah to Makkah, KAIA taxi, best taxi Jeddah",
    waText: "Hi%2C%20I%20need%20a%20taxi%20in%20Jeddah.",
    faqTitle: "Jeddah Taxi Service FAQ",
    faqSub: "Common questions about taxis in Jeddah, Saudi Arabia.",
    faqs: [
      {
        question: "What is the best taxi service in Jeddah?",
        answer:
          "Taxi Bhai is rated 4.9/5 by 847+ passengers and is Jeddah's most trusted professional taxi service. We offer fixed prices, licensed drivers, 24/7 availability, and specialist Umrah services from Jeddah Airport (KAIA).",
      },
      {
        question: "How much does a taxi from Jeddah Airport to Makkah cost?",
        answer:
          "A private taxi from KAIA to Makkah costs SAR 120 (economy) to SAR 200 (VIP). Journey is 80km, approximately 60 minutes under normal traffic.",
      },
      {
        question: "Is Uber available in Jeddah?",
        answer:
          "Uber operates in Jeddah but uses surge pricing during peak Umrah and Hajj seasons. Taxi Bhai offers guaranteed fixed prices with no surges, and we wait for flight delays at no extra charge.",
      },
      {
        question: "How long is the drive from Jeddah to Makkah?",
        answer:
          "Approximately 80km via Route 40 (Jeddah-Makkah Expressway), taking about 60 minutes normally. During Hajj season expect 1.5–2.5 hours due to traffic.",
      },
    ],
  },
  makkah: {
    accentColor: "amber",
    bgGradient: "",
    sidebarGradient: "linear-gradient(135deg, #3d1a00 0%, #7a3500 100%)",
    taglineColor: "text-amber-400",
    tagline: "Makkah Al-Mukarramah · Holiest City in Islam",
    heroDesc:
      "Professional 24/7 taxi in Makkah. Haram transfers, hotel pickups, Umrah transport, Ziyarat tours, and intercity routes to Jeddah & Madinah.",
    metaTitle: "Taxi Service in Makkah – Haram Transfer, Umrah & Hotel Rides",
    metaDesc:
      "24/7 taxi service in Makkah. Haram transfers, hotel pickups, Umrah transport, Ziyarat tours, and intercity taxi to Jeddah & Madinah. Call +966573067785.",
    metaKeywords:
      "taxi Makkah, Makkah taxi service, Haram taxi, taxi near Haram Makkah, Makkah hotel taxi, Umrah taxi Makkah, taxi Makkah to Jeddah, taxi Makkah to Madinah",
    waText: "Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Makkah.",
    faqTitle: "Makkah Taxi Service FAQ",
    faqSub: "Common questions about taxi service in Makkah.",
    faqs: [
      {
        question: "How do I get a taxi near Masjid al-Haram in Makkah?",
        answer:
          "Contact Taxi Bhai via WhatsApp (+966573067785) with your hotel name and desired pickup time. We operate dedicated Haram shuttle runs from all major Makkah hotels to Masjid al-Haram, starting from SAR 30 per trip.",
      },
      {
        question: "What is the taxi fare from Makkah to Jeddah Airport?",
        answer:
          "A private taxi from Makkah to KAIA Jeddah costs SAR 120–200 depending on vehicle type. The journey is 80km and takes approximately 60 minutes. Book in advance for guaranteed availability.",
      },
      {
        question: "What is the taxi fare from Makkah to Madinah?",
        answer:
          "A private taxi from Makkah to Madinah costs SAR 380 (economy) to SAR 580 (VIP). The journey is approximately 450km and takes 4.5–5 hours via Route 60.",
      },
      {
        question: "Is taxi service available near Haram in Makkah at night?",
        answer:
          "Yes. Taxi Bhai operates 24/7 including late-night Tarawih and Tahajjud prayer times. Many pilgrims require transport after Fajr and Isha prayers, and we are always available.",
      },
    ],
  },
  madinah: {
    accentColor: "blue",
    bgGradient: "",
    sidebarGradient: "linear-gradient(135deg, #0c2340 0%, #1e40af 100%)",
    taglineColor: "text-blue-300",
    tagline: "Al-Madinah Al-Munawwarah · City of the Prophet",
    heroDesc:
      "24/7 professional taxi in Madinah. Masjid Nabawi transfers, Ziyarat tours, MED airport taxi, and intercity routes to Makkah & Jeddah.",
    metaTitle: "Taxi Service in Madinah – Masjid Nabawi, Ziyarat & Airport Rides",
    metaDesc:
      "24/7 taxi service in Madinah. Masjid Nabawi transfers, Ziyarat tours (Uhud, Quba, Badr), MED airport pickup. Taxi to Makkah SAR 380, Jeddah SAR 350. Book: +966573067785.",
    metaKeywords:
      "taxi Madinah, Madinah taxi service, Masjid Nabawi taxi, Ziyarat taxi Madinah, taxi Madinah to Makkah, Madinah airport taxi, MED airport taxi",
    waText: "Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Madinah.",
    faqTitle: "Madinah Taxi Service FAQ",
    faqSub: "Common questions about taxi service in Madinah.",
    faqs: [
      {
        question: "What taxi service operates near Masjid Nabawi in Madinah?",
        answer:
          "Taxi Bhai operates 24/7 in Madinah including the Masjid Nabawi area. We provide hotel pickups, airport transfers from Prince Mohammad bin Abdulaziz Airport (MED), and Ziyarat tours to all major Islamic sites.",
      },
      {
        question: "How much is a taxi from Madinah to Makkah?",
        answer:
          "A private taxi from Madinah to Makkah costs SAR 380 (economy) to SAR 580 (VIP). The journey is approximately 450km and takes 4.5–5 hours via Route 60 (Haramain Highway).",
      },
      {
        question: "Can I book a Ziyarat taxi tour from Madinah?",
        answer:
          "Yes. Taxi Bhai offers half-day (4–5 hrs, SAR 200) and full-day (6–8 hrs, SAR 350) Ziyarat tours from Madinah covering Masjid Quba, Mount Uhud, Al-Baqi, Masjid al-Qiblatayn, and more.",
      },
      {
        question: "How far is Badr from Madinah and how long does it take?",
        answer:
          "Badr is 155km from Madinah and takes approximately 1.5–2 hours by taxi via Madinah-Badr Road (Route 340). Round-trip Badr Ziyarat tours start from SAR 200.",
      },
    ],
  },
  taif: {
    accentColor: "purple",
    bgGradient: "",
    sidebarGradient: "linear-gradient(135deg, #2d1b69 0%, #5b21b6 100%)",
    taglineColor: "text-purple-300",
    tagline: "Taif · City of Roses · 1,800m Elevation",
    heroDesc:
      "Professional taxi service to and from Taif. Mountain routes to Makkah & Jeddah via scenic expressways. Fixed prices, experienced drivers.",
    metaTitle: "Taxi Service in Taif – Rides to Makkah, Jeddah & Airport",
    metaDesc:
      "Taxi service in Taif, Saudi Arabia. Taif to Makkah SAR 130, Taif to Jeddah SAR 150. Mountain routes, fixed prices. 24/7. Call +966573067785.",
    metaKeywords:
      "taxi Taif, Taif taxi service, taxi Taif to Makkah, taxi Taif to Jeddah, Taif mountain taxi, best taxi Taif Saudi Arabia",
    waText: "Hi%2C%20I%20need%20a%20taxi%20in%20Taif.",
    faqTitle: "Taif Taxi Service FAQ",
    faqSub: "Common questions about taxi service in Taif.",
    faqs: [
      {
        question: "How do I get from Taif to Makkah by taxi?",
        answer:
          "Taxi Bhai operates direct Taif to Makkah taxi. The route is 75km via Route 40 (Taif-Makkah Road), taking approximately 1.5 hours. Prices start from SAR 130.",
      },
      {
        question: "How far is Taif from Jeddah by road?",
        answer:
          "Taif is approximately 90km from Jeddah via the Jeddah-Taif Expressway (Route 65), taking about 1.5 hours. A private taxi from Taif to Jeddah starts from SAR 150.",
      },
      {
        question: "Is Taif accessible by taxi from Makkah for a day trip?",
        answer:
          "Yes. Many Umrah pilgrims visit Taif as a day trip from Makkah. The 75km journey takes about 1.5 hours and Taxi Bhai offers round-trip Taif day trips from Makkah.",
      },
      {
        question: "What is Taif known for?",
        answer:
          "Taif (الطائف) is known as the City of Roses and sits at 1,800m elevation in the Hejaz Mountains. Famous for its cool climate, Al Shafa resort area, Taif Rose Festival, and proximity to Makkah.",
      },
    ],
  },
  badr: {
    accentColor: "yellow",
    bgGradient: "",
    sidebarGradient: "linear-gradient(135deg, #332200 0%, #5c3d00 100%)",
    taglineColor: "text-yellow-400",
    tagline: "Badr · Site of the First Battle in Islamic History",
    heroDesc:
      "Visit the historic Battle of Badr site with a professional Ziyarat taxi. Day trips from Madinah (155km) and Jeddah (310km). Fixed prices, experienced drivers.",
    metaTitle: "Taxi to Badr – Ziyarat Day Trips from Madinah & Jeddah",
    metaDesc:
      "Taxi service to Badr — historic Battle of Badr site. Day trips from Madinah (155km, ~1.5 hrs, SAR 200 round trip) and Jeddah (310km). Professional Ziyarat transport. +966573067785.",
    metaKeywords:
      "taxi to Badr, Badr Ziyarat taxi, taxi Madinah to Badr, Badr battlefield taxi, Battle of Badr visit, Badr day trip from Madinah, Ziyarat Badr Saudi Arabia",
    waText: "Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Badr.",
    faqTitle: "Badr Taxi FAQ",
    faqSub: "Questions about visiting Badr and Ziyarat day trips.",
    faqs: [
      {
        question: "How do I get to Badr from Madinah?",
        answer:
          "The best way to visit Badr from Madinah is by private taxi. The journey is 155km (1.5–2 hours) via Route 340. Taxi Bhai offers round-trip Badr day trips from Madinah starting from SAR 200.",
      },
      {
        question: "What is the significance of Badr in Islamic history?",
        answer:
          "The Battle of Badr (غزوة بدر) was fought on 13 March 624 CE (17 Ramadan, 2 Hijri) and was the first major military engagement of the early Muslim community. It is referenced in the Quran (Surah Al-Imran, 3:123).",
      },
      {
        question: "How long should I spend at Badr for Ziyarat?",
        answer:
          "Most visitors spend 2–4 hours at Badr visiting the main sites: Battle Memorial, Martyrs Cemetery, Badr Mosque, and the surrounding landscape. Total trip time from Madinah including driving is 5–6 hours.",
      },
      {
        question: "Can I book a taxi from Jeddah directly to Badr?",
        answer:
          "Yes. Jeddah to Badr is approximately 310km (3.5 hours). We offer direct Jeddah to Badr service starting from SAR 280 one-way.",
      },
    ],
  },
};

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  if (!CITY_KEYS.includes(city as CityKey)) return {};
  const cfg = CITY_CONFIG[city as CityKey];
  return {
    title: cfg.metaTitle,
    description: cfg.metaDesc,
    keywords: cfg.metaKeywords,
    alternates: {
      canonical: `${BUSINESS.website}/locations/${city}`,
    },
  };
}

export function generateStaticParams() {
  return CITY_KEYS.map((city) => ({ city }));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  if (!CITY_KEYS.includes(city as CityKey)) notFound();

  const cityKey = city as CityKey;
  const cityData = CITIES[cityKey];
  const cfg = CITY_CONFIG[cityKey];

  const cityRoutes = INTERCITY_ROUTES.filter(
    (r) => (r.from as string) === city || (r.to as string) === city
  );

  const HERO_GRADIENTS: Record<string, string> = {
    makkah: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #5c2800 100%)",
    madinah: "linear-gradient(135deg, #0a1628 0%, #0c2340 50%, #1e3a5f 100%)",
    taif: "linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #4c1d95 100%)",
    badr: "linear-gradient(135deg, #1a1200 0%, #332200 50%, #4a3300 100%)",
  };
  const heroBg = cfg.bgGradient || HERO_GRADIENTS[city];

  return (
    <>
      <JsonLd data={buildLocationSchema(cityKey)} />

      {/* Hero */}
      <div
        className={cfg.bgGradient ? cfg.bgGradient : ""}
        style={heroBg ? { background: heroBg } : undefined}
      >
        <div className="text-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { name: "Locations", href: "/locations" },
                { name: `${cityData.name} Taxi`, href: `/locations/${city}` },
              ]}
            />
            <div className="mt-4">
              <div className={`flex items-center gap-2 ${cfg.taglineColor} text-sm font-medium mb-3`}>
                <MapPin className="w-4 h-4" /> {cfg.tagline}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Taxi Service in {cityData.name}, Saudi Arabia
              </h1>
              <p className="text-white/80 text-lg max-w-2xl">{cfg.heroDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* About section */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">About {cityData.name}</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  {cityData.name} ({cityData.nameAr}) is located in {cityData.region}, Saudi Arabia
                  with a population of approximately {cityData.population.toLocaleString()}.{" "}
                  {cityData.description}.
                </p>
                {"airport" in cityData && cityData.airport && (
                  <p>
                    {cityData.airport.name} (
                    {"iata" in cityData.airport ? cityData.airport.iata : ""}) serves the city
                    with regular domestic and international flights.
                  </p>
                )}
              </div>
            </section>

            {/* Airport section for cities with airports */}
            {"airport" in cityData && cityData.airport && (
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  {cityData.airport.name} – Taxi Service
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-2 mb-3">
                    <Plane className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">
                      Taxi Bhai provides meet-and-greet airport pickup from{" "}
                      {cityData.airport.name}. Drivers track your flight in real-time and wait at
                      arrivals at no extra charge.
                    </p>
                  </div>
                  {"terminals" in cityData.airport && cityData.airport.terminals && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cityData.airport.terminals.map((t) => (
                        <span
                          key={t}
                          className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Routes */}
            {cityRoutes.length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  Taxi Routes From &amp; To {cityData.name}
                </h2>
                <div className="space-y-2.5">
                  {cityRoutes.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/taxi-${route.slug}`}
                      className="flex items-center justify-between bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-xl p-4 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">
                            {route.fromName} → {route.toName}
                          </p>
                          <div className="flex gap-3 text-xs text-gray-500 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {route.duration}
                            </span>
                            <span>{route.distance}km</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-700 text-sm">
                          From SAR {route.priceRange.economy}
                        </p>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 ml-auto mt-0.5 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Landmarks */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Key {cityData.name} Locations We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cityData.landmarks.map((lm) => (
                  <div
                    key={lm}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    {lm}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div
              className="rounded-2xl p-5 text-white sticky top-20"
              style={{ background: cfg.sidebarGradient }}
            >
              <h3 className="font-black text-lg mb-1">Book {cityData.name} Taxi</h3>
              <p className="text-white/70 text-sm mb-5">24/7 service across {cityData.name}.</p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=${cfg.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Microdata facts card */}
            <div
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content={`Taxi Bhai ${cityData.name}`} />
              <meta itemProp="telephone" content={BUSINESS.phone} />
              <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="addressLocality" content={cityData.name} />
                <meta itemProp="addressCountry" content="SA" />
              </div>
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content={String(cityData.geo.latitude)} />
                <meta itemProp="longitude" content={String(cityData.geo.longitude)} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{cityData.name} Facts</h3>
              <p>
                <strong>Population:</strong> {cityData.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {cityData.region}
              </p>
              <p>
                <strong>Coordinates:</strong> {cityData.geo.latitude}°N, {cityData.geo.longitude}°E
              </p>
              {"airport" in cityData && cityData.airport && (
                <p>
                  <strong>Airport:</strong>{" "}
                  {"iata" in cityData.airport ? cityData.airport.iata : ""}
                </p>
              )}
              {cityRoutes.slice(0, 3).map((r) => (
                <p key={r.slug}>
                  <strong>To {r.toName === cityData.name ? r.fromName : r.toName}:</strong>{" "}
                  {r.distance}km · {r.duration}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FAQSection faqs={cfg.faqs} title={cfg.faqTitle} subtitle={cfg.faqSub} />
    </>
  );
}
