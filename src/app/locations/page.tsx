import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { CITIES } from "@/lib/constants";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Service Locations – Jeddah, Makkah, Madinah, Taif, Badr",
  description:
    "Taxi Bhai operates across Saudi Arabia's western region: Jeddah, Makkah, Madinah, Taif, and Badr. Click your city for routes, prices, and booking.",
};

const CITY_COLORS: Record<string, string> = {
  jeddah:  "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
  makkah:  "bg-amber-50  border-amber-200  hover:border-amber-400",
  madinah: "bg-blue-50   border-blue-200   hover:border-blue-400",
  taif:    "bg-purple-50 border-purple-200 hover:border-purple-400",
  badr:    "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
};

export default function LocationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ name: "Locations", href: "/locations" }]} />
      <h1 className="text-3xl font-black text-gray-900 mt-4 mb-2">
        Our Service Locations in Saudi Arabia
      </h1>
      <p className="text-gray-500 text-sm mb-10">
        Professional taxi service across the western region — airport transfers, Umrah transport,
        Ziyarat tours, and intercity routes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {(Object.keys(CITIES) as (keyof typeof CITIES)[]).map((key) => {
          const city = CITIES[key];
          return (
            <Link
              key={key}
              href={`/locations/${key}`}
              className={`border rounded-2xl p-5 transition-all group ${CITY_COLORS[key] ?? "bg-gray-50 border-gray-200 hover:border-gray-400"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="font-black text-gray-900 text-lg">{city.name}</span>
                <span className="text-gray-500 text-sm">{city.nameAr}</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">{city.description}</p>
              <p className="text-xs text-gray-400">{city.region}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
