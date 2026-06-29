import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { Home, Clock, MessageCircle, Phone } from "lucide-react";
import type { FaqItem } from "@/lib/types";

const related = getRelatedContent("/services/haram-transfer");

export const metadata: Metadata = {
  title: "Haram Transfer Service – Makkah & Madinah Hotel to Mosque Shuttle",
  description:
    "Dedicated hotel-to-Haram shuttle service in Makkah and Madinah. Available for all prayer times including Fajr and Tahajjud. From SAR 30 per trip. Book: +966573067785.",
  keywords:
    "Haram transfer Makkah, hotel to Haram taxi, taxi near Masjid al-Haram, Masjid Nabawi transfer, hotel shuttle Makkah, Haram taxi service, taxi near Haram",
};

const haramFaqs: FaqItem[] = [
  {
    question: "How do I get from my hotel to Masjid al-Haram in Makkah?",
    answer:
      "Contact Taxi Bhai via WhatsApp (+966573067785) with your hotel name. We operate dedicated hotel-to-Haram transfer runs starting from SAR 30 per trip, available 24/7 including all prayer times.",
  },
  {
    question: "Is there a taxi service near Masjid Nabawi in Madinah?",
    answer:
      "Yes. Taxi Bhai provides hotel-to-Masjid Nabawi transfers in Madinah, available for all daily prayer times including Fajr (pre-dawn) and Isha (night). Runs start from SAR 25 within the Madinah Haram zone.",
  },
  {
    question: "How far is it from typical hotels to Masjid al-Haram?",
    answer:
      "Hotels vary significantly in distance. Abraj Al-Bait (Clock Tower) hotels are attached to the Haram. Most 4–5 star hotels in the Ajyad area are 200m–1km. Budget hotels may be 2–5km. In heavy traffic, a short 1km trip can take 15–20 minutes during prayer time.",
  },
  {
    question: "Do you provide Haram transfers during Ramadan late nights?",
    answer:
      "Yes. This is one of our busiest services. We operate full 24/7 during Ramadan including Tarawih prayer time (post-Isha), Tahajjud (pre-Fajr), and all other prayer congregations.",
  },
];

export default function HaramTransferPage() {
  return (
    <>
      <JsonLd data={buildServiceSchema({ name: "Haram Transfer Service Makkah & Madinah", description: "Dedicated hotel-to-Haram shuttle transfer service in Makkah (Masjid al-Haram) and Madinah (Masjid al-Nabawi). Available 24/7 for all prayer times.", url: "/services/haram-transfer", price: 30, areaServed: ["Makkah", "Madinah"] })} />
      <div style={{ background: "linear-gradient(135deg, #001a0d 0%, #003318 50%, #004d22 100%)" }} className="text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Services", href: "/services" }, { name: "Haram Transfer", href: "/services/haram-transfer" }]} />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center flex-shrink-0"><Home className="w-7 h-7 text-white" /></div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">Haram Transfer Service – Makkah &amp; Madinah</h1>
              <p className="text-green-100/80 text-lg max-w-2xl">Dedicated hotel-to-Haram shuttle service. Available 24/7 for all prayer times. Serving pilgrims at Masjid al-Haram (Makkah) and Masjid al-Nabawi (Madinah).</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Makkah Haram Transfer</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Masjid al-Haram in Makkah is the world&apos;s largest mosque and receives over 10 million pilgrims during Umrah season. While many pilgrims stay in nearby hotels within the Haram boundary, traffic congestion during prayer times means even short distances require reliable transport.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[{ zone: "Haram Zone (0–500m)", price: "SAR 25–30", time: "5–10 min" }, { zone: "Near Hotels (500m–2km)", price: "SAR 30–50", time: "10–20 min" }, { zone: "Outer Hotels (2km–5km)", price: "SAR 50–80", time: "15–30 min" }].map((z) => (
                    <div key={z.zone} className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                      <p className="font-bold text-gray-900 text-xs mb-1">{z.zone}</p>
                      <p className="text-green-700 font-black">{z.price}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{z.time} drive</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Madinah Haram Transfer</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Masjid al-Nabawi (Prophet&apos;s Mosque) in Madinah is the second largest mosque in the world and receives millions of pilgrims daily. Taxi Bhai operates dedicated hotel-to-Nabawi transfers throughout the day and night.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-700" />Prayer Time Transfers (Madinah)</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[["Fajr (pre-dawn)", "Highest demand"], ["Dhuhr (noon)", "Standard demand"], ["Asr (afternoon)", "Standard demand"], ["Maghrib (sunset)", "High demand"], ["Isha (night)", "High demand"], ["Tahajjud (late night)", "Ramadan peak"]].map(([time, demand]) => (
                      <div key={time} className="flex items-center justify-between py-1 border-b border-blue-100 last:border-0">
                        <span className="text-gray-700">{time}</span>
                        <span className={`text-xs font-medium ${demand.includes("Highest") || demand.includes("peak") ? "text-red-600" : demand.includes("High") ? "text-orange-600" : "text-green-600"}`}>{demand}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Why Use Haram Transfer Instead of Walking?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">For Elderly Pilgrims</h3>
                  <p>Long walking distances in extreme heat (40°C+) can be dangerous for older pilgrims. Taxi transfer ensures safe arrival at the Haram without physical strain.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">During Peak Prayer Times</h3>
                  <p>Pedestrian crowds around the Haram during Fajr and Jumu&apos;ah can be extremely dense. A taxi drops you off at a designated point for easier access.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Families with Children</h3>
                  <p>Managing children in large crowds near the Haram is challenging. A taxi provides a safer, more controlled travel environment for families.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">After Night Prayers</h3>
                  <p>Late-night return journeys from the Haram are easily arranged. Simply WhatsApp us when you&apos;re ready to return to your hotel.</p>
                </div>
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book Haram Transfer</h3>
              <p className="text-green-100 text-sm mb-5">Share your hotel name &amp; prayer time.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Haram%20transfer.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors"><MessageCircle className="w-5 h-5" />WhatsApp Now</a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors"><Phone className="w-5 h-5" />{BUSINESS.phone}</a>
              </div>
              <div className="mt-5 pt-4 border-t border-green-600 text-xs text-green-100 space-y-1">
                <p>✓ Available all prayer times</p>
                <p>✓ Makkah &amp; Madinah coverage</p>
                <p>✓ From SAR 25 per trip</p>
                <p>✓ Book via WhatsApp instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={haramFaqs} title="Haram Transfer FAQ" subtitle="Questions about hotel-to-Haram taxi service in Makkah and Madinah." />
      <RelatedContent
        services={related.services}
        cities={related.cities}
        routes={related.routes}
        blogs={related.blogs}
        faqs={related.faqs}
        heading="Related Haram & Pilgrimage Services"
      />
    </>
  );
}
