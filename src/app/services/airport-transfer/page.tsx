import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { AIRPORT_FAQS } from "@/lib/faqs";
import { BUSINESS } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { Plane, Clock, Shield, Navigation, CheckCircle, MessageCircle, Phone, MapPin } from "lucide-react";

const related = getRelatedContent("/services/airport-transfer");

export const metadata: Metadata = {
  title: "Airport Taxi Service Near Me – Jeddah Airport Transfer | KAIA T1 T2 T3",
  description:
    "Book airport taxi service near you from King Abdulaziz International Airport (KAIA) Jeddah. 24/7 airport cab, flight tracking, cheap airport transfers — Makkah SAR 120, Madinah SAR 350. Pre-book: +966573067785.",
  keywords:
    "airport taxi near me, airport taxi service, airport cab service, airport pickup service, cheap airport transfers, book airport transfer, airport taxi booking, Jeddah airport taxi, KAIA taxi, airport transfer Jeddah, car service to airport, taxi to airport near me, airport taxi service near me, airport transfer service, airport transfers near me, cheap airport taxi",
};

const terminals = [
  {
    name: "Terminal 1",
    desc: "International Departures & Arrivals",
    detail: "Serves Saudia, Gulf Air, Emirates, Turkish Airlines, and other international carriers.",
  },
  {
    name: "Terminal 2",
    desc: "Domestic Flights",
    detail: "Domestic routes within Saudi Arabia. Pickup from domestic arrivals zone.",
  },
  {
    name: "Terminal 3",
    desc: "Hajj Terminal",
    detail: "Dedicated Hajj season terminal serving pilgrim charter flights. Seasonal operation.",
  },
];

const destinations = [
  { to: "Makkah", distance: "80 km", time: "~60 min", economy: 120, vip: 200 },
  { to: "Madinah", distance: "420 km", time: "~4 hrs", economy: 350, vip: 550 },
  { to: "Taif", distance: "90 km", time: "~1.5 hrs", economy: 150, vip: 250 },
  { to: "Badr", distance: "310 km", time: "~3.5 hrs", economy: 280, vip: 450 },
  { to: "Jeddah City Center", distance: "15 km", time: "~20 min", economy: 60, vip: 100 },
  { to: "Jeddah Corniche Hotels", distance: "20 km", time: "~25 min", economy: 70, vip: 110 },
];

export default function AirportTransferPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Jeddah Airport Taxi & Transfer Service",
          description:
            "Professional airport transfer service from King Abdulaziz International Airport (KAIA) Jeddah. 24/7 availability, flight tracking, meet & greet. Fixed prices to Makkah, Madinah, Taif, and Jeddah city.",
          url: "/services/airport-transfer",
          price: 80,
          areaServed: ["Jeddah", "Makkah", "Madinah", "Taif"],
        })}
      />

      {/* Hero */}
      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "Airport Transfer", href: "/services/airport-transfer" },
            ]}
          />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Plane className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Jeddah Airport Taxi &amp; Transfer Service
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Professional pickup &amp; drop-off from King Abdulaziz International Airport (KAIA).
                All three terminals served. Flight tracking included. Fixed prices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Clock, label: "Available", value: "24/7" },
            { icon: Navigation, label: "Flight Tracking", value: "Included" },
            { icon: Shield, label: "Meet & Greet", value: "Available" },
            { icon: Plane, label: "Terminals", value: "T1, T2, T3" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-green-700" />
              </div>
              <p className="font-black text-gray-900 text-lg">{value}</p>
              <p className="text-gray-500 text-xs">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About KAIA */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                King Abdulaziz International Airport (KAIA) – Jeddah
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  King Abdulaziz International Airport (IATA: JED) is Saudi Arabia&apos;s second
                  busiest airport and the primary gateway for international pilgrims performing Umrah
                  and Hajj. Located approximately 19km north of Jeddah city center, the airport
                  serves over 40 million passengers annually and connects to 90+ international
                  destinations.
                </p>
                <p>
                  KAIA has three terminals — Terminal 1 (International), Terminal 2 (Domestic), and
                  the Hajj Terminal (Terminal 3). Taxi Bhai provides pickup and drop-off service
                  at all three terminals, with designated waiting areas for arriving passengers.
                </p>
              </div>
            </section>

            {/* Terminals */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">KAIA Terminal Guide</h2>
              <div className="space-y-3">
                {terminals.map((t) => (
                  <div key={t.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                        {t.name}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">{t.desc}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{t.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                * Always specify your terminal when booking. Confirm with your airline which terminal
                your flight operates from.
              </p>
            </section>

            {/* Fares Table */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Jeddah Airport Taxi Fares – 2025 Price Guide
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                All fares below are fixed prices per vehicle (not per person). Confirmed at booking.
                No extra charges for luggage, late night, or standard waiting time.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Destination</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Distance</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Duration</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Economy</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">VIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {destinations.map((d, i) => (
                      <tr key={d.to} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-gray-900">{d.to}</td>
                        <td className="px-4 py-3 text-gray-600">{d.distance}</td>
                        <td className="px-4 py-3 text-gray-600">{d.time}</td>
                        <td className="px-4 py-3 font-bold text-green-700">SAR {d.economy}</td>
                        <td className="px-4 py-3 text-gray-700">SAR {d.vip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Service Features */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Airport Transfer Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Real-time flight tracking — driver adjusts to delays",
                  "Meet & greet at arrivals with name board",
                  "All KAIA terminals covered (T1, T2, T3)",
                  "Free waiting — up to 60 min after landing",
                  "Assistance with luggage to vehicle",
                  "Fixed price confirmed before travel",
                  "Air-conditioned, clean vehicles",
                  "Available for early morning & late night flights",
                  "Direct route — no detours or stops",
                  "Professional uniformed drivers",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book Airport Taxi</h3>
              <p className="text-green-100 text-sm mb-5">
                Tell us your flight number, terminal, and destination.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%2C%20I%20need%20an%20airport%20taxi%20from%20KAIA%20Jeddah.`}
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
              <div className="mt-5 pt-4 border-t border-green-600 space-y-2 text-xs text-green-100">
                <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Available 24/7</p>
                <p className="flex items-center gap-1.5"><Navigation className="w-3.5 h-3.5" /> Flight tracking included</p>
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> All KAIA terminals</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">KAIA Airport Fast Facts</h3>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li><strong>IATA Code:</strong> JED</li>
                <li><strong>Location:</strong> 19km north of Jeddah</li>
                <li><strong>Annual Passengers:</strong> 40M+</li>
                <li><strong>Terminals:</strong> 3 (International, Domestic, Hajj)</li>
                <li><strong>To Makkah:</strong> ~80km (~60 min)</li>
                <li><strong>To Madinah:</strong> ~420km (~4 hrs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FAQSection
        faqs={AIRPORT_FAQS}
        title="Jeddah Airport Taxi FAQ"
        subtitle="Common questions about Taxi Bhai's airport transfer service."
      />
      <RelatedContent
        services={related.services}
        cities={related.cities}
        routes={related.routes}
        blogs={related.blogs}
        faqs={related.faqs}
        heading="Related Airport Transfer Services"
      />
    </>
  );
}
