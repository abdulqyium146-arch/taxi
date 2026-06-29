import Link from "next/link";
import { MapPin, ArrowRight, Users } from "lucide-react";
import { CITIES, ROUTES } from "@/lib/constants";

const cityRoutes: Record<string, string> = {
  jeddah: ROUTES.locations.jeddah,
  makkah: ROUTES.locations.makkah,
  madinah: ROUTES.locations.madinah,
  taif: ROUTES.locations.taif,
  badr: ROUTES.locations.badr,
};

const highlights: Record<string, string[]> = {
  jeddah: ["KAIA Airport Transfers", "Jeddah Corniche Hotels", "Business Districts"],
  makkah: ["Masjid al-Haram Shuttle", "Hotel Transfers", "Umrah Packages"],
  madinah: ["Masjid Nabawi Area", "Ziyarat Tours", "MED Airport"],
  taif: ["Mountain Resort Transfers", "Al Shafa & Al Hada", "City Tours"],
  badr: ["Ziyarat Day Trips", "Battlefield Site", "Madinah Connections"],
};

export function CoverageAreas() {
  const cities = Object.entries(CITIES) as [keyof typeof CITIES, (typeof CITIES)[keyof typeof CITIES]][];

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="coverage-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">
            Service Areas
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Saudi Arabia Coverage Areas
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Taxi Bhai operates across 5 major cities in western Saudi Arabia, covering
            all major landmarks, airports, and pilgrimage sites.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cities.map(([key, city]) => (
            <Link
              key={key}
              href={cityRoutes[key]}
              className="group bg-white border border-gray-200 hover:border-green-500 rounded-2xl p-5 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-50 group-hover:bg-green-700 rounded-xl flex items-center justify-center transition-colors">
                    <MapPin className="w-5 h-5 text-green-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-gray-400">{city.nameAr}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {(city.population / 1000000).toFixed(1)}M+
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">{city.description}</p>
              <ul className="space-y-1 mb-4">
                {highlights[key].map((item) => (
                  <li key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-green-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-green-700 text-sm font-semibold group-hover:gap-2 transition-all">
                View {city.name} taxis <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
