"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS, ROUTES } from "@/lib/constants";

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Airport Transfer", href: ROUTES.services.airportTransfer },
      { label: "Umrah Taxi", href: ROUTES.services.umrahTaxi },
      { label: "Ziyarat Taxi", href: ROUTES.services.ziyaratTaxi },
      { label: "VIP Taxi", href: ROUTES.services.vipTaxi },
      { label: "Family Taxi", href: ROUTES.services.familyTaxi },
      { label: "Haram Transfer", href: ROUTES.services.haramTransfer },
      { label: "Intercity Taxi", href: ROUTES.services.intercityTaxi },
    ],
  },
  {
    label: "Cities",
    href: "/cities",
    children: [
      { label: "Jeddah Taxi", href: ROUTES.locations.jeddah },
      { label: "Makkah Taxi", href: ROUTES.locations.makkah },
      { label: "Madinah Taxi", href: ROUTES.locations.madinah },
      { label: "Taif Taxi", href: ROUTES.locations.taif },
      { label: "Badr Taxi", href: ROUTES.locations.badr },
    ],
  },
  {
    label: "Routes",
    href: "/routes",
    children: [
      { label: "Jeddah → Makkah", href: "/taxi-jeddah-to-makkah" },
      { label: "Jeddah → Madinah", href: "/taxi-jeddah-to-madinah" },
      { label: "Makkah → Madinah", href: "/taxi-makkah-to-madinah" },
      { label: "Madinah → Badr", href: "/taxi-madinah-to-badr" },
      { label: "Jeddah → Taif", href: "/taxi-jeddah-to-taif" },
    ],
  },
  { label: "About", href: ROUTES.static.about },
  { label: "FAQ", href: ROUTES.static.faq },
  { label: "Contact", href: ROUTES.static.contact },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Taxi Bhai Logo"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <div>
              <span className="font-bold text-lg text-gray-900 leading-tight">Taxi Bhai</span>
              <p className="text-[10px] text-green-700 font-medium leading-tight hidden sm:block">Saudi Arabia</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{BUSINESS.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-3 mt-1 space-y-1 border-l-2 border-green-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-green-700"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 bg-gray-100 text-gray-800 font-semibold rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 bg-green-700 text-white font-bold rounded-lg text-sm"
              >
                WhatsApp – Book Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
