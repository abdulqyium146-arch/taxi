import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { INTERCITY_FAQS } from "@/lib/faqs";
import { BUSINESS, INTERCITY_ROUTES } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { MapPin, Clock, DollarSign, MessageCircle, Phone, ArrowRight } from "lucide-react";

const related = getRelatedContent("/services/intercity-taxi");

export const metadata: Metadata = {
  title: "Saudi Intercity Taxi Service – Fixed Price City-to-City Routes",
  description:
    "Fixed-price intercity taxi between Jeddah, Makkah, Madinah, Taif & Badr. Professional private cars, 24/7 availability. Jeddah→Makkah SAR 120, Jeddah→Madinah SAR 350. Book: +966573067785.",
  keywords:
    "intercity taxi Saudi Arabia, Jeddah to Makkah taxi, Jeddah to Madinah taxi, Makkah to Madinah taxi, Saudi city to city taxi, fixed price taxi Saudi Arabia, private taxi Saudi Arabia",
};

export default function IntercityTaxiPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Saudi Arabia Intercity Taxi Service",
          description:
            "Fixed-price private taxi service connecting Jeddah, Makkah, Madinah, Taif, and Badr. Pre-booked, professional drivers, 24/7 availability.",
          url: "/services/intercity-taxi",
          price: 120,
          areaServed: ["Jeddah", "Makkah", "Madinah", "Taif", "Badr"],
        })}
      />

      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "Intercity Taxi", href: "/services/intercity-taxi" },
            ]}
          />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Saudi Arabia Intercity Taxi Service
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Fixed-price private taxi between Jeddah, Makkah, Madinah, Taif, and Badr.
                Pre-booked, licensed drivers, comfortable vehicles, no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* All Routes Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">All Intercity Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERCITY_ROUTES.map((route) => (
              <Link
                key={route.slug}
                href={`/taxi-${route.slug}`}
                className="group bg-white border border-gray-200 hover:border-blue-500 rounded-2xl p-5 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="font-bold text-gray-900">
                    {route.fromName} → {route.toName}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{route.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-3 h-3 text-blue-500" />
                    {route.duration}
                  </div>
                  <div className="text-gray-600">{route.distance} km</div>
                  <div className="text-gray-400 text-xs col-span-2">{route.highway}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-green-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    SAR {route.priceRange.economy} – {route.priceRange.vip}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Full Fare Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Saudi Intercity Taxi Price Guide 2025</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-blue-700 text-white px-4 py-3 text-left">Route</th>
                  <th className="bg-blue-700 text-white px-4 py-3 text-left">Distance</th>
                  <th className="bg-blue-700 text-white px-4 py-3 text-left">Drive Time</th>
                  <th className="bg-blue-700 text-white px-4 py-3 text-left">Highway Used</th>
                  <th className="bg-blue-700 text-white px-4 py-3 text-left">Economy</th>
                  <th className="bg-blue-700 text-white px-4 py-3 text-left">VIP</th>
                </tr>
              </thead>
              <tbody>
                {INTERCITY_ROUTES.map((route, i) => (
                  <tr key={route.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold">
                      <Link href={`/taxi-${route.slug}`} className="text-blue-700 hover:underline">
                        {route.fromName} → {route.toName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{route.distance} km</td>
                    <td className="px-4 py-3 text-gray-600">{route.duration}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{route.highway}</td>
                    <td className="px-4 py-3 font-bold text-green-700">SAR {route.priceRange.economy}</td>
                    <td className="px-4 py-3 text-gray-700">SAR {route.priceRange.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * All fares are per vehicle, not per person. Final price confirmed at booking.
            Economy = Toyota Corolla/Hyundai Sonata. VIP = Toyota Camry/Lexus/GMC Yukon.
          </p>
        </section>

        {/* Why private taxi */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Why Private Taxi for Saudi Intercity Travel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Saudi Arabia&apos;s western region — covering Jeddah, Makkah, Madinah, Taif, and
                Badr — has well-developed highway infrastructure with multi-lane expressways.
                The Jeddah–Makkah Expressway (Route 40) handles over 2 million vehicles monthly
                during peak Umrah season.
              </p>
              <p>
                Private intercity taxi provides door-to-door convenience that buses and the
                Haramain High Speed Railway cannot match — especially for pilgrims with heavy
                luggage, families with children, or travelers visiting multiple locations.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Saudi Arabia Road Network – Key Facts</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><strong>Route 40 (Jeddah–Makkah):</strong> 80km, 4-6 lane expressway</li>
                <li><strong>Route 60 (Jeddah–Madinah):</strong> 420km, major divided highway</li>
                <li><strong>Route 65 (Jeddah–Taif):</strong> 90km, mountain expressway</li>
                <li><strong>Route 340 (Madinah–Badr):</strong> 155km, desert highway</li>
                <li><strong>Speed limits:</strong> 120–140 km/h on major highways</li>
                <li><strong>Toll roads:</strong> Most intercity routes are toll-free</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-blue-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-black text-xl mb-1">Book Your Intercity Taxi</h2>
              <p className="text-blue-100 text-sm">Fixed prices. Licensed drivers. 24/7 service.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%2C%20I%20need%20an%20intercity%20taxi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <FAQSection
        faqs={INTERCITY_FAQS}
        title="Intercity Taxi FAQ"
        subtitle="Questions about Saudi Arabia intercity taxi routes, pricing, and booking."
      />
      <RelatedContent
        services={related.services}
        cities={related.cities}
        routes={related.routes}
        blogs={related.blogs}
        faqs={related.faqs}
        heading="Related Intercity Routes & Services"
      />
    </>
  );
}
