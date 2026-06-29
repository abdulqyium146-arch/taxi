import Link from "next/link";
import { ArrowRight, Clock, MapPin, DollarSign } from "lucide-react";
import { INTERCITY_ROUTES } from "@/lib/constants";

export function PopularRoutes() {
  const featured = INTERCITY_ROUTES.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-white" id="popular-routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">
              Intercity Routes
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Popular Taxi Routes in Saudi Arabia
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Fixed-price private taxi between major Saudi cities. Book in advance for guaranteed availability.
            </p>
          </div>
          <Link
            href="/services/intercity-taxi"
            className="flex items-center gap-1.5 text-green-700 font-semibold text-sm whitespace-nowrap hover:gap-2.5 transition-all"
          >
            View all routes <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((route) => (
            <Link
              key={route.slug}
              href={`/taxi-${route.slug}`}
              className="group bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-2xl p-5 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                  <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{route.fromName}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span>{route.toName}</span>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-green-600" />
                  {route.duration}
                </span>
                <span>{route.distance} km</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-green-700 font-bold">
                  <DollarSign className="w-4 h-4" />
                  From SAR {route.priceRange.economy}
                </div>
                <span className="text-xs text-gray-400 group-hover:text-green-600 flex items-center gap-1 transition-colors">
                  Book now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Saudi Arabia Intercity Taxi Fare Guide</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-green-700 text-white px-4 py-3 text-left font-semibold">Route</th>
                  <th className="bg-green-700 text-white px-4 py-3 text-left font-semibold">Distance</th>
                  <th className="bg-green-700 text-white px-4 py-3 text-left font-semibold">Duration</th>
                  <th className="bg-green-700 text-white px-4 py-3 text-left font-semibold">Economy</th>
                  <th className="bg-green-700 text-white px-4 py-3 text-left font-semibold">VIP</th>
                </tr>
              </thead>
              <tbody>
                {INTERCITY_ROUTES.map((route, i) => (
                  <tr key={route.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <Link href={`/taxi-${route.slug}`} className="text-green-700 hover:underline">
                        {route.fromName} → {route.toName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{route.distance} km</td>
                    <td className="px-4 py-3 text-gray-600">{route.duration}</td>
                    <td className="px-4 py-3 font-semibold text-green-700">SAR {route.priceRange.economy}</td>
                    <td className="px-4 py-3 font-semibold text-gray-700">SAR {route.priceRange.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* Prices are starting rates for private vehicle. All prices confirmed before travel. No hidden charges.</p>
        </div>
      </div>
    </section>
  );
}
