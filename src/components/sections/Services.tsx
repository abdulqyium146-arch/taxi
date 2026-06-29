import Link from "next/link";
import { Plane, Moon, Landmark, Crown, Users, Home, MapPin, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  plane: Plane,
  moon: Moon,
  landmark: Landmark,
  crown: Crown,
  users: Users,
  home: Home,
  "map-pin": MapPin,
  building2: Plane,
};

export function Services() {
  const displayServices = SERVICES.filter(
    (s, index, arr) => arr.findIndex((x) => x.slug === s.slug) === index
  );

  return (
    <section className="py-16 md:py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Complete Saudi Arabia Taxi Services
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            From Jeddah Airport transfers to Umrah packages and Ziyarat tours — every journey
            handled with professional care.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayServices.map((service) => {
            const Icon = icons[service.icon] || MapPin;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-green-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {service.popular && (
                  <span className="absolute top-3 right-3 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">
                    Popular
                  </span>
                )}
                <div className="w-12 h-12 bg-green-50 group-hover:bg-green-700 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-green-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold text-sm">
                    From SAR {service.startingPrice}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
