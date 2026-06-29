import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { BUSINESS, ROUTES, CITIES } from "@/lib/constants";

const serviceLinks = [
  { label: "Airport Transfer", href: ROUTES.services.airportTransfer },
  { label: "Umrah Taxi", href: ROUTES.services.umrahTaxi },
  { label: "Ziyarat Taxi", href: ROUTES.services.ziyaratTaxi },
  { label: "VIP Taxi", href: ROUTES.services.vipTaxi },
  { label: "Family Taxi", href: ROUTES.services.familyTaxi },
  { label: "Haram Transfer", href: ROUTES.services.haramTransfer },
  { label: "Intercity Taxi", href: ROUTES.services.intercityTaxi },
];

const routeLinks = [
  { label: "Jeddah to Makkah Taxi", href: "/taxi-jeddah-to-makkah" },
  { label: "Jeddah to Madinah Taxi", href: "/taxi-jeddah-to-madinah" },
  { label: "Makkah to Madinah Taxi", href: "/taxi-makkah-to-madinah" },
  { label: "Jeddah to Taif Taxi", href: "/taxi-jeddah-to-taif" },
  { label: "Madinah to Badr Taxi", href: "/taxi-madinah-to-badr" },
  { label: "Makkah to Taif Taxi", href: "/taxi-makkah-to-taif" },
  { label: "Taif to Jeddah Taxi", href: "/taxi-taif-to-jeddah" },
];

const companyLinks = [
  { label: "About Taxi Bhai", href: ROUTES.static.about },
  { label: "FAQ", href: ROUTES.static.faq },
  { label: "Contact Us", href: ROUTES.static.contact },
  { label: "Privacy Policy", href: ROUTES.static.privacy },
];

const cityLinks = [
  { label: "Taxi in Jeddah", href: ROUTES.locations.jeddah },
  { label: "Taxi in Makkah", href: ROUTES.locations.makkah },
  { label: "Taxi in Madinah", href: ROUTES.locations.madinah },
  { label: "Taxi in Taif", href: ROUTES.locations.taif },
  { label: "Taxi in Badr", href: ROUTES.locations.badr },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top CTA bar */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Ready to book your taxi?</p>
            <p className="text-green-100 text-sm">Available 24/7 across Saudi Arabia</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-white text-green-700 font-bold px-5 py-2.5 rounded-lg hover:bg-green-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-[#128C7E] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-green-700 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Taxi Bhai</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Saudi Arabia&apos;s most trusted taxi service. Professional drivers, fixed prices,
              and 24/7 availability across Jeddah, Makkah, Madinah, Taif, and Badr.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">Open 24 hours, 7 days a week</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" />
                <span className="text-gray-400">
                  {BUSINESS.rating.value}/5 rating — {BUSINESS.rating.count}+ happy customers
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Popular Routes</h3>
            <ul className="space-y-2">
              {routeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities + Company */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Cities</h3>
              <ul className="space-y-2">
                {cityLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} Taxi Bhai Saudi Arabia. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Serving Jeddah · Makkah · Madinah · Taif · Badr
          </p>
          <p className="text-gray-600 text-xs" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">Taxi Bhai</span> — Est. {BUSINESS.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
