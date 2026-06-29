import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { Shield, Clock, Star, Users, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Taxi Bhai – Saudi Arabia's Professional Taxi Service Since 2019",
  description:
    "Learn about Taxi Bhai — Saudi Arabia's trusted taxi service founded in 2019. Licensed drivers, fixed prices, 24/7 availability. Serving pilgrims and residents across Jeddah, Makkah, Madinah, Taif & Badr.",
  keywords:
    "about Taxi Bhai, Saudi Arabia taxi company, professional taxi Saudi, who is Taxi Bhai, Taxi Bhai Jeddah",
};

const milestones = [
  { year: "2019", event: "Taxi Bhai founded in Jeddah. Initial fleet of 5 vehicles serving airport transfers." },
  { year: "2020", event: "Expanded Umrah taxi service covering Makkah hotel corridor. First Ziyarat packages launched." },
  { year: "2021", event: "Madinah operations launched. VIP fleet introduced with Lexus and Toyota Camry." },
  { year: "2022", event: "Reached 10,000 completed trips. Family taxi service and child-seat program introduced." },
  { year: "2023", event: "Taif and Badr routes added. Intercity network now covers all 5 major western Saudi cities." },
  { year: "2024", event: "50,000+ trips completed. 4.9/5 rating from 847+ verified passenger reviews." },
  { year: "2025", event: "Operating as Saudi Arabia's highest-rated independent taxi service for Umrah pilgrims." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />

      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "About", href: "/about" }]} />
          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black mb-4">About Taxi Bhai</h1>
            <p className="text-gray-300 text-lg">Saudi Arabia&apos;s professional taxi service, built for pilgrims, families, and travelers since 2019.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Taxi Bhai was founded in 2019 in Jeddah, Saudi Arabia, out of a simple observation: millions of Umrah pilgrims were arriving at King Abdulaziz International Airport with no reliable, fixed-price taxi option to take them safely to Makkah, Madinah, or their hotels.</p>
                <p>Ride-hailing apps were available but imposed surge pricing during peak religious seasons — exactly when pilgrims needed affordable transport most. Local taxi operators often lacked professional standards, English communication ability, or understanding of specific pilgrim needs like Miqat stops and Haram proximity.</p>
                <p>Taxi Bhai was built to fill this gap: a professional, licensed, multilingual taxi service with fixed prices, trained drivers who understand Islamic travel requirements, and a commitment to treating every passenger as a valued guest.</p>
                <p>Today, we operate across 5 cities — Jeddah, Makkah, Madinah, Taif, and Badr — with a fleet of economy and VIP vehicles, serving over 50,000 completed trips and maintaining a 4.9/5 passenger rating.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-5">Company Milestones</h2>
              <div className="relative">
                <div className="absolute left-[1.875rem] top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-5">
                  {milestones.map((m) => (
                    <div key={m.year} className="flex gap-5 relative">
                      <div className="w-15 flex-shrink-0 flex items-start pt-0.5">
                        <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center text-xs font-black z-10 relative flex-shrink-0">{m.year.slice(2)}</div>
                      </div>
                      <div className="flex-1 pb-2">
                        <p className="font-bold text-gray-900 text-sm">{m.year}</p>
                        <p className="text-gray-600 text-sm mt-0.5">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Safety First", desc: "Licensed, insured, background-checked drivers. Maintained vehicles with regular safety inspections." },
                  { icon: Clock, title: "Punctuality", desc: "We understand that pilgrims have prayer schedules, flight connections, and sacred commitments. We are always on time." },
                  { icon: Star, title: "Transparency", desc: "Fixed prices agreed upfront. No hidden fees, no meter surprises, no surge pricing during Hajj or Ramadan." },
                  { icon: Users, title: "Respect", desc: "We treat every passenger with dignity and respect Islamic customs. Our drivers understand the sanctity of pilgrimage travel." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section itemScope itemType="https://schema.org/Organization">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Business Information</h2>
              <meta itemProp="name" content="Taxi Bhai" />
              <meta itemProp="url" content={BUSINESS.website} />
              <meta itemProp="telephone" content={BUSINESS.phone} />
              <meta itemProp="foundingDate" content={BUSINESS.founded} />
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["Business Name", BUSINESS.name],
                    ["Founded", BUSINESS.founded],
                    ["Headquarters", "Jeddah, Saudi Arabia"],
                    ["Phone/WhatsApp", BUSINESS.phone],
                    ["Operating Hours", "24/7 – 365 days"],
                    ["Service Area", "Jeddah · Makkah · Madinah · Taif · Badr"],
                    ["Languages", "English, Arabic"],
                    ["Rating", `${BUSINESS.rating.value}/5 (${BUSINESS.rating.count}+ reviews)`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</span>
                      <span className="text-gray-800 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book with Taxi Bhai</h3>
              <p className="text-green-100 text-sm mb-5">Experience Saudi Arabia&apos;s most trusted taxi service.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%2C%20I%20want%20to%20book%20a%20Taxi%20Bhai.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />{BUSINESS.phone}
                </a>
              </div>
              <div className="mt-5 pt-4 border-t border-green-600 text-xs text-green-100 space-y-1.5">
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />Jeddah, Saudi Arabia</p>
                <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />Open 24/7</p>
                <p className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />4.9/5 from {BUSINESS.rating.count}+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
