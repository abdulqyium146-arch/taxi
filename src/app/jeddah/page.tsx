import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocationSchema } from "@/lib/schema";
import { BUSINESS, CITIES, INTERCITY_ROUTES } from "@/lib/constants";
import { MapPin, Clock, Plane, ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Taxi Service in Jeddah – Airport Transfers & Intercity Rides",
  description:
    "Professional taxi service in Jeddah. KAIA airport transfers, Jeddah to Makkah SAR 120, Madinah SAR 350. 24/7. Fixed prices. Book: +966573067785.",
  keywords:
    "taxi Jeddah, Jeddah taxi service, airport taxi Jeddah, taxi Jeddah to Makkah, KAIA taxi, best taxi Jeddah",
};

const jeddahFaqs: FaqItem[] = [
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
];

export default function JeddahPage() {
  const jeddahRoutes = INTERCITY_ROUTES.filter((r) => r.from === "jeddah" || r.to === "jeddah");
  return (
    <>
      <JsonLd data={buildLocationSchema("jeddah")} />
      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Jeddah Taxi", href: "/jeddah" }]} />
          <div className="mt-4">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
              <MapPin className="w-4 h-4" /> Jeddah · Makkah Province · Saudi Arabia
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Taxi Service in Jeddah, Saudi Arabia
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              24/7 professional taxi in Jeddah. Airport transfers from KAIA, intercity rides to
              Makkah &amp; Madinah, and local city transport. Fixed prices, licensed drivers.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">About Jeddah</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Jeddah (جدة) is the second-largest city in Saudi Arabia with a population of approximately 4.7 million. Located on the Red Sea coast in the Makkah Province, it is Saudi Arabia&apos;s commercial capital and primary gateway for international pilgrims traveling to Makkah and Madinah.</p>
                <p>King Abdulaziz International Airport (KAIA/JED) handles 40M+ passengers annually. Jeddah is 80km from Makkah, making it the strategic hub for all Umrah and Hajj travel in the region.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">KAIA Airport Taxi Service</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
                <div className="grid grid-cols-4 gap-3 text-center text-sm mb-4">
                  {[["JED","IATA Code"],["40M+","Passengers/yr"],["3","Terminals"],["19km","From City Center"]].map(([v,l])=>(
                    <div key={l}><p className="font-black text-blue-700 text-xl">{v}</p><p className="text-gray-500 text-xs">{l}</p></div>
                  ))}
                </div>
                <div className="flex items-start gap-2">
                  <Plane className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-xs">Taxi Bhai serves T1 (International), T2 (Domestic), T3 (Hajj). Flight tracking included. Driver waits 60 min after landing.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Taxi Routes From &amp; To Jeddah</h2>
              <div className="space-y-2.5">
                {jeddahRoutes.map((route) => (
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
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 ml-auto mt-0.5 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Key Jeddah Locations We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {CITIES.jeddah.landmarks.map((lm) => (
                  <div key={lm} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />{lm}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book Jeddah Taxi</h3>
              <p className="text-green-100 text-sm mb-5">24/7 across all of Jeddah.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%2C%20I%20need%20a%20taxi%20in%20Jeddah.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />{BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Taxi Bhai Jeddah" />
              <meta itemProp="telephone" content={BUSINESS.phone} />
              <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="addressLocality" content="Jeddah" />
                <meta itemProp="addressCountry" content="SA" />
              </div>
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="21.4858" />
                <meta itemProp="longitude" content="39.1925" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Jeddah Facts</h3>
              <p><strong>Population:</strong> 4.7 million</p>
              <p><strong>Airport:</strong> KAIA (JED)</p>
              <p><strong>To Makkah:</strong> 80km · ~60 min</p>
              <p><strong>To Madinah:</strong> 420km · ~4 hrs</p>
              <p><strong>To Taif:</strong> 90km · ~1.5 hrs</p>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={jeddahFaqs} title="Jeddah Taxi Service FAQ" subtitle="Common questions about taxis in Jeddah, Saudi Arabia." />
    </>
  );
}
