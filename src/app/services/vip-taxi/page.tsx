import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { Crown, CheckCircle, MessageCircle, Phone, Star } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "VIP Taxi Saudi Arabia – Luxury Chauffeur Service Jeddah, Makkah, Madinah",
  description:
    "VIP luxury taxi service in Saudi Arabia. Toyota Camry, Lexus ES, GMC Yukon with professional chauffeurs. Airport transfers, intercity routes, Umrah VIP packages. Book: +966573067785.",
  keywords:
    "VIP taxi Saudi Arabia, luxury taxi Jeddah, chauffeur service Makkah, VIP transfer Saudi Arabia, Lexus taxi Saudi Arabia, luxury airport transfer Jeddah",
};

const vipFaqs: FaqItem[] = [
  {
    question: "What vehicles are available in Taxi Bhai VIP service?",
    answer:
      "Our VIP fleet includes: Toyota Camry (executive sedan), Lexus ES 350 (luxury sedan), Toyota Land Cruiser (premium SUV), and GMC Yukon (large luxury SUV for families/groups). All vehicles are 2022 or newer, fully air-conditioned, and immaculately maintained.",
  },
  {
    question: "How much more does VIP taxi cost compared to economy?",
    answer:
      "VIP service is approximately 60–70% more than economy pricing. For example, Jeddah Airport to Makkah is SAR 120 economy vs SAR 200 VIP. The premium includes a newer/larger vehicle, a senior professional chauffeur, and water/refreshments.",
  },
  {
    question: "Is the VIP taxi driver the same as economy?",
    answer:
      "VIP bookings are assigned to our most senior, experienced chauffeurs — typically those with 5+ years of professional driving experience, formal chauffeur training, and English proficiency.",
  },
  {
    question: "Can I book a VIP taxi for corporate use in Saudi Arabia?",
    answer:
      "Yes. Taxi Bhai provides VIP taxi for corporate clients, business executives, government delegations, and diplomatic travel across Saudi Arabia. We offer monthly billing and corporate accounts for regular business travelers.",
  },
];

const vipFleet = [
  { model: "Toyota Camry (Executive)", passengers: 4, luggage: "4 bags", type: "Executive Sedan" },
  { model: "Lexus ES 350", passengers: 4, luggage: "4 bags", type: "Luxury Sedan" },
  { model: "Toyota Land Cruiser", passengers: 6, luggage: "6 bags", type: "Premium SUV" },
  { model: "GMC Yukon Denali", passengers: 7, luggage: "8 bags", type: "Large Luxury SUV" },
];

export default function VipTaxiPage() {
  return (
    <>
      <JsonLd data={buildServiceSchema({ name: "VIP Luxury Taxi Service Saudi Arabia", description: "Premium chauffeur-driven taxi service in Saudi Arabia with luxury vehicles including Lexus, Toyota Camry, and GMC Yukon. Professional uniformed chauffeurs for airport transfers and intercity travel.", url: "/services/vip-taxi", price: 200, areaServed: ["Jeddah", "Makkah", "Madinah", "Taif"] })} />
      <div style={{ background: "linear-gradient(135deg, #1a1200 0%, #2a1e00 50%, #3d2a00 100%)" }} className="text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Services", href: "/services" }, { name: "VIP Taxi", href: "/services/vip-taxi" }]} />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#C8A96E" }}>
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">VIP Taxi &amp; Luxury Chauffeur – Saudi Arabia</h1>
              <p className="text-amber-100/80 text-lg max-w-2xl">Premium chauffeur service with luxury vehicles. Lexus, Toyota Camry, GMC Yukon. Professional uniformed drivers. For executives, VIP guests, and discerning travelers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">VIP Fleet</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vipFleet.map((v) => (
                  <div key={v.model} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#fef3c7", color: "#92400e" }}>{v.type}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">{v.model}</h3>
                    <div className="flex gap-4 text-xs text-gray-600">
                      <span>👤 {v.passengers} passengers</span>
                      <span>🧳 {v.luggage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">VIP Service Inclusions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Senior uniformed chauffeur (5+ years experience)", "2022+ model luxury vehicle", "Complimentary water &amp; refreshments", "Meet &amp; greet with name board", "Newspaper / magazine (on request)", "Phone charging cable (USB-C &amp; Lightning)", "Free waiting — 90 min at airports", "Privacy partition on request (Land Cruiser)", "Dedicated WhatsApp line for VIP clients", "Corporate invoicing available"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C8A96E" }} />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">VIP Pricing</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead><tr><th className="px-4 py-3 text-left text-white" style={{ background: "#1a1200" }}>Route</th><th className="px-4 py-3 text-left text-white" style={{ background: "#1a1200" }}>Economy</th><th className="px-4 py-3 text-left text-white" style={{ background: "#C8A96E", color: "#1a1200" }}>VIP</th></tr></thead>
                  <tbody>
                    {[["Jeddah Airport → Makkah", "SAR 120", "SAR 200"], ["Jeddah Airport → Madinah", "SAR 350", "SAR 550"], ["Jeddah Airport → Taif", "SAR 150", "SAR 250"], ["Makkah → Madinah", "SAR 380", "SAR 580"], ["Makkah → Taif", "SAR 130", "SAR 220"], ["Madinah → Badr (Round Trip)", "SAR 200", "SAR 320"]].map(([route, eco, vip], i) => (
                      <tr key={route} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{route}</td>
                        <td className="px-4 py-2.5 text-gray-600">{eco}</td>
                        <td className="px-4 py-2.5 font-bold" style={{ color: "#92400e" }}>{vip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl p-5 text-white sticky top-20" style={{ background: "linear-gradient(135deg, #1a1200 0%, #3d2a00 100%)" }}>
              <div className="flex mb-2">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />)}</div>
              <h3 className="font-black text-lg mb-1">Book VIP Taxi</h3>
              <p className="text-amber-100 text-sm mb-5">Premium chauffeur service, confirmed in minutes.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%2C%20I%20need%20a%20VIP%20taxi%20booking.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors"><MessageCircle className="w-5 h-5" />WhatsApp Now</a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors"><Phone className="w-5 h-5" />{BUSINESS.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={vipFaqs} title="VIP Taxi FAQ" subtitle="Questions about Taxi Bhai's luxury chauffeur service." />
    </>
  );
}
