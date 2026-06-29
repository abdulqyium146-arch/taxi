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
  title: "Taxi Service in Taif – Mountain City Transfers to Makkah & Jeddah",
  description:
    "Taxi service in Taif, Saudi Arabia. Rides from Taif to Makkah (SAR 130, 75km, ~1.5 hrs) and Jeddah (SAR 150, 90km). Al Shafa, Al Hada transfers. 24/7. Call +966573067785.",
  keywords:
    "taxi Taif, Taif taxi service, taxi Taif to Makkah, taxi Taif to Jeddah, Al Shafa taxi, Al Hada taxi, mountain taxi Taif Saudi Arabia",
};

const taifFaqs: FaqItem[] = [
  {
    question: "How far is Taif from Makkah by taxi?",
    answer:
      "Taif is approximately 75km from Makkah and takes about 1.5 hours by taxi via Route 40. The Taif-Makkah road descends from 1,800m elevation down to Makkah, passing through scenic mountain terrain.",
  },
  {
    question: "How long does it take to get from Jeddah to Taif?",
    answer:
      "Jeddah to Taif is approximately 90km and takes 1.5 hours via the Jeddah-Taif Expressway (Route 65). The route climbs from sea level to 1,800m elevation over the Hejaz Mountains.",
  },
  {
    question: "Is there a taxi service in Al Shafa and Al Hada Taif?",
    answer:
      "Yes. Taxi Bhai provides service throughout Taif including the mountain resort areas of Al Shafa and Al Hada. These are popular summer retreat destinations and we offer transfers to/from Makkah and Jeddah.",
  },
];

export default function TaifPage() {
  const taifRoutes = INTERCITY_ROUTES.filter((r) => r.from === "taif" || r.to === "taif");
  return (
    <>
      <JsonLd data={buildLocationSchema("taif")} />
      <div style={{ background: "linear-gradient(135deg, #0a1a0a 0%, #1a3320 50%, #2a4a30 100%)" }} className="text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Taif Taxi", href: "/taif" }]} />
          <div className="mt-4">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
              <MapPin className="w-4 h-4" /> Taif · 1,800m Elevation · Makkah Province
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Taxi Service in Taif, Saudi Arabia
            </h1>
            <p className="text-green-100/80 text-lg max-w-2xl">
              Taxi service in Taif — the mountain city of Saudi Arabia. Transfers to Makkah
              (75km), Jeddah (90km), Al Shafa, Al Hada, and all Taif attractions.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">About Taif</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Taif (الطائف — &quot;The City of Roses&quot;) sits at 1,800m elevation in the Hejaz Mountains and is known as Saudi Arabia&apos;s summer resort city. With a population of approximately 1.2 million and pleasant mountain climate year-round, Taif attracts visitors from across the region — particularly during summer months when Jeddah and Makkah temperatures exceed 40°C.</p>
                <p>Taif is famous for its rose farms (source of oud and rose water), Al Shafa and Al Hada mountain resorts, Shubra Palace, and the historic Taif Cable Car. The city is also Islamic history — it was visited by the Prophet Muhammad ﷺ and is referenced in early Islamic texts.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Taif Mountain Road – Route Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Taif → Makkah (Route 40)</h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li><strong>Distance:</strong> 75km</li>
                    <li><strong>Duration:</strong> ~1.5 hours</li>
                    <li><strong>Elevation change:</strong> 1,800m descent to 300m</li>
                    <li><strong>Road type:</strong> Expressway with mountain bends</li>
                    <li><strong>Economy price:</strong> SAR 130</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Taif → Jeddah (Route 65)</h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li><strong>Distance:</strong> 90km</li>
                    <li><strong>Duration:</strong> ~1.5 hours</li>
                    <li><strong>Elevation change:</strong> 1,800m descent to sea level</li>
                    <li><strong>Road type:</strong> Mountain expressway</li>
                    <li><strong>Economy price:</strong> SAR 150</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Taxi Routes From &amp; To Taif</h2>
              <div className="space-y-2.5">
                {taifRoutes.map((route) => (
                  <Link key={route.slug} href={`/taxi-${route.slug}`} className="flex items-center justify-between bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-xl p-4 transition-all group">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
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
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 ml-auto mt-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Key Taif Locations</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {CITIES.taif.landmarks.map((lm) => (
                  <div key={lm} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-700 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />{lm}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book Taif Taxi</h3>
              <p className="text-green-100 text-sm mb-5">Mountain transfers &amp; city rides.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%2C%20I%20need%20a%20taxi%20in%20Taif.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />{BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Taxi Bhai Taif" />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="21.2703" />
                <meta itemProp="longitude" content="40.4158" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Taif Facts</h3>
              <p><strong>Elevation:</strong> 1,800m above sea level</p>
              <p><strong>Known for:</strong> Roses, cool climate, resorts</p>
              <p><strong>To Makkah:</strong> 75km · ~1.5 hrs</p>
              <p><strong>To Jeddah:</strong> 90km · ~1.5 hrs</p>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={taifFaqs} title="Taif Taxi Service FAQ" subtitle="Questions about taxi service in Taif, Saudi Arabia." />
    </>
  );
}
