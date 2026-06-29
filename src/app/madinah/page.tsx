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
  title: "Taxi Service in Madinah – Masjid Nabawi, Ziyarat & Airport Rides",
  description:
    "24/7 taxi service in Madinah. Masjid Nabawi transfers, Ziyarat tours (Uhud, Quba, Badr), MED airport pickup. Taxi to Makkah SAR 380, Jeddah SAR 350. Book: +966573067785.",
  keywords:
    "taxi Madinah, Madinah taxi service, Masjid Nabawi taxi, Ziyarat taxi Madinah, taxi Madinah to Makkah, Madinah airport taxi, MED airport taxi",
};

const madinahFaqs: FaqItem[] = [
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
];

export default function MacdinahPage() {
  const madinahRoutes = INTERCITY_ROUTES.filter((r) => r.from === "madinah" || r.to === "madinah");
  return (
    <>
      <JsonLd data={buildLocationSchema("madinah")} />
      <div style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0d1f33 50%, #112840 100%)" }} className="text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Madinah Taxi", href: "/madinah" }]} />
          <div className="mt-4">
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
              <MapPin className="w-4 h-4" /> Madinah Al-Munawwarah · City of the Prophet ﷺ
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Taxi Service in Madinah, Saudi Arabia
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl">
              24/7 taxi service in Madinah. Masjid Nabawi transfers, Ziyarat tours to all
              Islamic sites, MED airport pickup, and intercity taxi to Makkah &amp; Jeddah.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">About Madinah</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Madinah Al-Munawwarah (المدينة المنورة — &quot;The Radiant City&quot;) is the second holiest city in Islam and the burial place of the Prophet Muhammad ﷺ. Located in the Madinah Province, the city has a population of approximately 1.5 million but receives millions of pilgrims annually for Ziyarat and Umrah.</p>
                <p>The city is centered around Masjid al-Nabawi (the Prophet&apos;s Mosque) — the second largest mosque in the world. Prince Mohammad bin Abdulaziz International Airport (MED) connects Madinah to over 100 international destinations.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Madinah Ziyarat Sites Map</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CITIES.madinah.landmarks.map((lm, i) => (
                  <div key={lm} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="w-6 h-6 bg-blue-700 text-white rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{lm}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Badr Special Note:</strong> The Battle of Badr site is 155km from Madinah (1.5–2 hrs drive) and requires a dedicated day trip. Taxi Bhai offers round-trip Badr Ziyarat tours — <Link href="/taxi-madinah-to-badr" className="text-blue-700 underline">see Madinah to Badr taxi</Link>.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Taxi Routes From &amp; To Madinah</h2>
              <div className="space-y-2.5">
                {madinahRoutes.map((route) => (
                  <Link key={route.slug} href={`/taxi-${route.slug}`} className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-400 rounded-xl p-4 transition-all group">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
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
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto mt-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl p-5 text-white sticky top-20" style={{ background: "linear-gradient(135deg, #0d1f33 0%, #1a3d5e 100%)" }}>
              <h3 className="font-black text-lg mb-1">Book Madinah Taxi</h3>
              <p className="text-blue-100 text-sm mb-5">Ziyarat tours &amp; hotel transfers.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Madinah.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />{BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Taxi Bhai Madinah" />
              <meta itemProp="telephone" content={BUSINESS.phone} />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="24.4539" />
                <meta itemProp="longitude" content="39.6142" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Madinah Facts</h3>
              <p><strong>Population:</strong> 1.5 million</p>
              <p><strong>Airport:</strong> MED (Prince Mohammad b. Abdulaziz)</p>
              <p><strong>To Makkah:</strong> 450km · ~4.5 hrs</p>
              <p><strong>To Jeddah:</strong> 420km · ~4 hrs</p>
              <p><strong>To Badr:</strong> 155km · ~1.5 hrs</p>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={madinahFaqs} title="Madinah Taxi Service FAQ" subtitle="Questions about taxis, Ziyarat tours, and transport in Madinah." />
    </>
  );
}
