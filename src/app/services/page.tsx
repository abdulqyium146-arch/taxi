import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildItemListSchema } from "@/lib/schema";
import { ROUTES } from "@/lib/constants";
import { Plane, Moon, Landmark, Home, Users, Crown, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Bhai Services – Airport Transfer, Umrah Taxi, Ziyarat & More",
  description:
    "All Taxi Bhai services in Saudi Arabia: airport transfers from KAIA Jeddah, Umrah taxi packages, Ziyarat tours, Haram shuttle, VIP chauffeur, family taxi, and intercity routes. Book 24/7.",
  keywords:
    "taxi services Saudi Arabia, airport taxi Jeddah, Umrah taxi service, Ziyarat tour taxi, Haram transfer, VIP taxi Saudi Arabia, family taxi Saudi, intercity taxi",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: Plane,
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    iconColor: "text-blue-600",
    badge: "bg-blue-600",
    name: "Airport Transfer",
    nameDetail: "KAIA Jeddah – All Terminals",
    desc: "Professional pickup and drop-off from King Abdulaziz International Airport. Flight tracking, meet & greet, fixed prices to Makkah, Madinah, Taif, and Jeddah city.",
    href: ROUTES.services.airportTransfer,
    price: "From SAR 60",
    tags: ["24/7", "T1 · T2 · T3", "Flight tracked"],
  },
  {
    icon: Moon,
    color: "bg-green-50 border-green-200 hover:border-green-400",
    iconColor: "text-green-700",
    badge: "bg-green-700",
    name: "Umrah Taxi",
    nameDetail: "Airport · Miqat · Makkah · Madinah",
    desc: "Dedicated transport for Umrah pilgrims. We cover the full journey: KAIA arrival, Miqat stop for Ihram, hotel to Haram runs, and onward travel to Madinah.",
    href: ROUTES.services.umrahTaxi,
    price: "From SAR 120",
    tags: ["Miqat stops", "Pilgrim-friendly", "Fixed price"],
  },
  {
    icon: Landmark,
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
    iconColor: "text-amber-700",
    badge: "bg-amber-700",
    name: "Ziyarat Taxi",
    nameDetail: "Makkah & Madinah Heritage Sites",
    desc: "Full-day guided Ziyarat tours covering all major Islamic heritage sites in Makkah and Madinah. Includes Masjid al-Nabawi area, Mount Uhud, Masjid Quba, Al-Baqi, and Badr.",
    href: ROUTES.services.ziyaratTaxi,
    price: "From SAR 150",
    tags: ["Full-day tours", "All ziyarat sites", "Madinah & Makkah"],
  },
  {
    icon: Home,
    color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    iconColor: "text-emerald-700",
    badge: "bg-emerald-700",
    name: "Haram Transfer",
    nameDetail: "Hotel ↔ Masjid al-Haram & Nabawi",
    desc: "Frequent hotel-to-Haram shuttle service in Makkah and Madinah. Ideal for pilgrims making multiple daily visits to the Haram. All prayer times covered.",
    href: ROUTES.services.haramTransfer,
    price: "From SAR 25",
    tags: ["All prayer times", "Makkah & Madinah", "Short notice OK"],
  },
  {
    icon: Crown,
    color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
    iconColor: "text-yellow-700",
    badge: "bg-yellow-700",
    name: "VIP Taxi",
    nameDetail: "Luxury Chauffeur Service",
    desc: "Premium chauffeur service in luxury vehicles. Ideal for business travel, VIP guests, and those who prefer a first-class experience. Uniformed drivers, immaculate vehicles.",
    href: ROUTES.services.vipTaxi,
    price: "From SAR 200",
    tags: ["Luxury vehicles", "Uniformed driver", "Business class"],
  },
  {
    icon: Users,
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
    iconColor: "text-purple-700",
    badge: "bg-purple-700",
    name: "Family Taxi",
    nameDetail: "Groups up to 7 Passengers",
    desc: "Spacious family vehicles for groups traveling together. Child-safe, women-friendly, and large enough for families with luggage. Perfect for Umrah family groups.",
    href: ROUTES.services.familyTaxi,
    price: "From SAR 130",
    tags: ["Up to 7 seats", "Child safe", "Group luggage OK"],
  },
  {
    icon: MapPin,
    color: "bg-rose-50 border-rose-200 hover:border-rose-400",
    iconColor: "text-rose-700",
    badge: "bg-rose-700",
    name: "Intercity Taxi",
    nameDetail: "Jeddah · Makkah · Madinah · Taif · Badr",
    desc: "Fixed-price private taxi between Saudi Arabia's western cities. No stops, no detours. Jeddah to Makkah, Makkah to Madinah, Madinah to Badr, and all other intercity routes.",
    href: ROUTES.services.intercityTaxi,
    price: "From SAR 120",
    tags: ["15+ routes", "Fixed price", "Door-to-door"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildItemListSchema(
          services.map((s) => ({ name: s.name, url: s.href, description: s.desc })),
          "Taxi Bhai Saudi Arabia – All Services"
        )}
      />

      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Services", href: "/services" }]} />
          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              All Taxi Bhai Services
            </h1>
            <p className="text-gray-300 text-lg">
              Airport transfers, Umrah packages, Ziyarat tours, Haram shuttles, VIP rides,
              family travel, and intercity taxi — all with fixed prices and 24/7 availability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.href}
                href={svc.href}
                className={`border rounded-2xl p-6 transition-all group flex flex-col ${svc.color}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${svc.badge} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-black text-gray-900 text-lg leading-tight">{svc.name}</h2>
                    <p className="text-xs text-gray-500 mt-0.5">{svc.nameDetail}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/70 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-green-700">{svc.price}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-gray-600 group-hover:text-green-700 transition-colors">
                    View details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Not sure which service fits?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            WhatsApp us — our team will recommend the right service for your journey in minutes.
          </p>
          <a
            href="https://wa.me/966573067785?text=Hi%20Taxi%20Bhai%2C%20I%20need%20help%20choosing%20the%20right%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
