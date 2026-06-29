import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocationSchema } from "@/lib/schema";
import { BUSINESS, CITIES, INTERCITY_ROUTES } from "@/lib/constants";
import { MapPin, Clock, ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Taxi Service in Makkah – Haram Transfer, Umrah & Hotel Rides",
  description:
    "24/7 taxi service in Makkah, Saudi Arabia. Haram transfers, hotel pickups, Umrah transport, Ziyarat tours, and intercity taxi to Jeddah & Madinah. Call +966573067785.",
  keywords:
    "taxi Makkah, Makkah taxi service, Haram taxi, taxi near Haram Makkah, Makkah hotel taxi, Umrah taxi Makkah, taxi Makkah to Jeddah, taxi Makkah to Madinah",
  alternates: { canonical: "/locations/makkah" },
};

const makkahFaqs: FaqItem[] = [
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
];

export default function MakkahPage() {
  const makkahRoutes = INTERCITY_ROUTES.filter((r) => r.from === "makkah" || r.to === "makkah");
  return (
    <>
      <JsonLd data={buildLocationSchema("makkah")} />
      <div style={{ background: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #5c2800 100%)" }} className="text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Makkah Taxi", href: "/makkah" }]} />
          <div className="mt-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-3">
              <MapPin className="w-4 h-4" /> Makkah Al-Mukarramah · Holiest City in Islam
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Taxi Service in Makkah, Saudi Arabia
            </h1>
            <p className="text-amber-100/80 text-lg max-w-2xl">
              Professional 24/7 taxi in Makkah. Haram transfers, hotel pickups, Umrah transport,
              Ziyarat tours, and intercity routes to Jeddah &amp; Madinah.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">About Makkah</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Makkah Al-Mukarramah (مكة المكرمة) is the holiest city in Islam and birthplace of the Prophet Muhammad ﷺ. Located in the Makkah Province of western Saudi Arabia, the city receives over 10 million pilgrims annually for Umrah and approximately 2.5 million for Hajj.</p>
                <p>The city is centered around Masjid al-Haram — the Grand Mosque containing the Kaaba — and is surrounded by sacred landmarks including Mount Arafat, Mina, Muzdalifah, and the Abraj Al-Bait Clock Tower complex. Entry to Makkah is restricted to Muslims only.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Haram Transfer Service – Makkah</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-gray-700 text-sm mb-3">Taxi Bhai operates dedicated hotel-to-Haram shuttle runs in Makkah. Most major hotels are within 1–3km of Masjid al-Haram but traffic congestion means walking is not always practical, especially for elderly pilgrims.</p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="bg-white rounded-lg p-2.5">
                    <p className="font-black text-amber-700 text-sm">SAR 30</p>
                    <p className="text-gray-500">Per Haram run</p>
                  </div>
                  <div className="bg-white rounded-lg p-2.5">
                    <p className="font-black text-amber-700 text-sm">24/7</p>
                    <p className="text-gray-500">All prayer times</p>
                  </div>
                  <div className="bg-white rounded-lg p-2.5">
                    <p className="font-black text-amber-700 text-sm">All Hotels</p>
                    <p className="text-gray-500">Covered</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Taxi Routes From &amp; To Makkah</h2>
              <div className="space-y-2.5">
                {makkahRoutes.map((route) => (
                  <Link key={route.slug} href={`/taxi-${route.slug}`} className="flex items-center justify-between bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-400 rounded-xl p-4 transition-all group">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{route.fromName} → {route.toName}</p>
                        <div className="flex gap-3 text-xs text-gray-500 mt-0.5">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{route.duration}</span>
                          <span>{route.distance}km</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-700 text-sm">From SAR {route.priceRange.economy}</p>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 ml-auto mt-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Key Makkah Landmarks</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {CITIES.makkah.landmarks.map((lm) => (
                  <div key={lm} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-700 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />{lm}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl p-5 text-white sticky top-20" style={{ background: "linear-gradient(135deg, #3d1a00 0%, #7a3500 100%)" }}>
              <h3 className="font-black text-lg mb-1">Book Makkah Taxi</h3>
              <p className="text-amber-100 text-sm mb-5">24/7 Haram transfers &amp; city rides.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Makkah.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />{BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Taxi Bhai Makkah" />
              <meta itemProp="telephone" content={BUSINESS.phone} />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="21.4225" />
                <meta itemProp="longitude" content="39.8262" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Makkah Facts</h3>
              <p><strong>Population:</strong> 2.4 million</p>
              <p><strong>To Jeddah:</strong> 80km · ~60 min</p>
              <p><strong>To Madinah:</strong> 450km · ~4.5 hrs</p>
              <p><strong>To Taif:</strong> 75km · ~1.5 hrs</p>
              <p><strong>Coordinates:</strong> 21.4225°N, 39.8262°E</p>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={makkahFaqs} title="Makkah Taxi Service FAQ" subtitle="Common questions about taxi service in Makkah." />
    </>
  );
}
