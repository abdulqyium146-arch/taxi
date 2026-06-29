import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocationSchema } from "@/lib/schema";
import { BUSINESS, CITIES, INTERCITY_ROUTES } from "@/lib/constants";
import { MapPin, Clock, Landmark, ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Taxi to Badr – Ziyarat Day Trips from Madinah & Jeddah",
  description:
    "Taxi service to Badr — historic Battle of Badr site. Day trips from Madinah (155km, ~1.5 hrs, SAR 200 round trip) and Jeddah (310km). Professional Ziyarat transport. +966573067785.",
  keywords:
    "taxi to Badr, Badr Ziyarat taxi, taxi Madinah to Badr, Badr battlefield taxi, Battle of Badr visit, Badr day trip from Madinah, Ziyarat Badr Saudi Arabia",
  alternates: { canonical: "/locations/badr" },
};

const badrFaqs: FaqItem[] = [
  {
    question: "How do I get to Badr from Madinah?",
    answer:
      "The best way to visit Badr from Madinah is by private taxi. The journey is 155km (1.5–2 hours) via Route 340. Taxi Bhai offers round-trip Badr day trips from Madinah starting from SAR 200.",
  },
  {
    question: "What is the significance of Badr in Islamic history?",
    answer:
      "The Battle of Badr (غزوة بدر) was fought on 13 March 624 CE (17 Ramadan, 2 Hijri) and was the first major military engagement of the early Muslim community. It is referenced in the Quran (Surah Al-Imran, 3:123) and is one of the most significant events in Islamic history.",
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
];

export default function BadrPage() {
  const badrRoutes = INTERCITY_ROUTES.filter((r) => (r.from as string) === "badr" || r.to === "badr");
  return (
    <>
      <JsonLd data={buildLocationSchema("badr")} />
      <div style={{ background: "linear-gradient(135deg, #1a1200 0%, #332200 50%, #4a3300 100%)" }} className="text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Badr Taxi", href: "/badr" }]} />
          <div className="mt-4">
            <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-3">
              <Landmark className="w-4 h-4" /> Badr · Site of the First Battle in Islamic History
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Taxi to Badr – Ziyarat Day Trips
            </h1>
            <p className="text-yellow-100/80 text-lg max-w-2xl">
              Visit the historic Battle of Badr site with a professional Ziyarat taxi. Day
              trips from Madinah (155km) and Jeddah (310km). Fixed prices, experienced drivers.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">The Battle of Badr – Historical Context</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>The Battle of Badr (غزوة بدر الكبرى) is one of the most significant events in Islamic history. Fought on 13 March 624 CE (17 Ramadan, 2 AH), it was the first major military engagement between the early Muslim community of Madinah and the Quraysh of Makkah.</p>
                <p>The Muslim force of approximately 313 men under the Prophet Muhammad ﷺ defeated a Quraysh army of approximately 1,000. The battle resulted in the capture of several Quraysh leaders and is directly referenced in the Quran in Surah Al-Imran (3:123): &quot;Allah had already given you victory at Badr, when you were few in number.&quot;</p>
                <p>Today, Badr is a major Ziyarat destination for Muslims worldwide, particularly during Ramadan — as the battle was fought in the month of Ramadan — and for Umrah pilgrims who extend their journey from Madinah.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Badr Ziyarat Sites</h2>
              <div className="space-y-3">
                {CITIES.badr.landmarks.map((lm, i) => (
                  <div key={lm} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="w-7 h-7 bg-yellow-700 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{lm}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">How to Get to Badr</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">From Madinah (Recommended)</h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li><strong>Distance:</strong> 155km</li>
                    <li><strong>Drive time:</strong> 1.5–2 hours (Route 340)</li>
                    <li><strong>Total trip time:</strong> 5–6 hours (inc. site visit)</li>
                    <li><strong>Price:</strong> From SAR 200 round trip</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">From Jeddah</h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li><strong>Distance:</strong> 310km</li>
                    <li><strong>Drive time:</strong> ~3.5 hours (Route 60)</li>
                    <li><strong>Total trip time:</strong> 9–10 hours (full day)</li>
                    <li><strong>Price:</strong> From SAR 280 one-way</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Badr Taxi Routes</h2>
              <div className="space-y-2.5">
                {badrRoutes.map((route) => (
                  <Link key={route.slug} href={`/taxi-${route.slug}`} className="flex items-center justify-between bg-gray-50 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-400 rounded-xl p-4 transition-all group">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-yellow-600 flex-shrink-0" />
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
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 ml-auto mt-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl p-5 text-white sticky top-20" style={{ background: "linear-gradient(135deg, #332200 0%, #5c3d00 100%)" }}>
              <h3 className="font-black text-lg mb-1">Book Badr Taxi</h3>
              <p className="text-yellow-100 text-sm mb-5">Day trips from Madinah or Jeddah.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Badr.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />{BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Taxi Bhai Badr" />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="23.7833" />
                <meta itemProp="longitude" content="38.7833" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Badr Facts</h3>
              <p><strong>Significance:</strong> Battle of Badr (624 CE)</p>
              <p><strong>From Madinah:</strong> 155km · ~1.5 hrs</p>
              <p><strong>From Jeddah:</strong> 310km · ~3.5 hrs</p>
              <p><strong>Coordinates:</strong> 23.7833°N, 38.7833°E</p>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={badrFaqs} title="Badr Taxi FAQ" subtitle="Questions about visiting Badr and Ziyarat day trips." />
    </>
  );
}
