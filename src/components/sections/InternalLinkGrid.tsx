/**
 * InternalLinkGrid
 * Dense semantic link grid used on the homepage and hub pages.
 * Renders ALL site URLs in a structured, crawlable grid — maximising
 * crawl efficiency (Googlebot hits every page in one hop from home).
 *
 * Link density target: 100+ on homepage, 50+ on hub pages.
 */

import Link from "next/link";
import { HUB_LINKS, LOCATION_LINKS, ROUTE_LINKS, BLOG_LINKS, STATIC_LINKS, type SiteLink } from "@/lib/internalLinkMap";
import { pickAnchor } from "@/lib/relatedContent";
import { MapPin, Plane, Navigation, BookOpen, HelpCircle, ChevronRight } from "lucide-react";

type SiteLinkItem = SiteLink;

function LinkSection({
  title,
  icon,
  links,
  anchorOffset = 0,
  cols = 2,
}: {
  title: string;
  icon: React.ReactNode;
  links: SiteLinkItem[];
  anchorOffset?: number;
  cols?: 2 | 3;
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-200">
        {icon}
        {title}
      </h3>
      <ul className={`grid grid-cols-1 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-x-4 gap-y-1.5`}>
        {links.map((link, i) => (
          <li key={link.url}>
            <Link
              href={link.url}
              title={link.title}
              className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-green-700 transition-colors group"
            >
              <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              <span>{pickAnchor(link, anchorOffset + i)}</span>
              {link.startingPrice && (
                <span className="text-xs text-green-700 font-semibold ml-auto">SAR {link.startingPrice}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InternalLinkGrid({ variant = "home" }: { variant?: "home" | "hub" }) {
  const routesToShow = variant === "home" ? ROUTE_LINKS : ROUTE_LINKS.slice(0, 9);

  return (
    <section className="bg-white border-t border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-1">
            Complete Service Directory
          </h2>
          <p className="text-gray-500 text-sm">
            Every route, service, city, and guide — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services column */}
          <LinkSection
            title="Services"
            icon={<Plane className="w-3.5 h-3.5" />}
            links={HUB_LINKS}
            anchorOffset={1}
            cols={2}
          />

          {/* Cities column */}
          <div className="space-y-6">
            <LinkSection
              title="Destinations"
              icon={<MapPin className="w-3.5 h-3.5" />}
              links={LOCATION_LINKS}
              anchorOffset={2}
              cols={2}
            />
            <LinkSection
              title="Guides & Resources"
              icon={<BookOpen className="w-3.5 h-3.5" />}
              links={[...BLOG_LINKS, ...STATIC_LINKS.filter((l) => ["faq", "hub"].includes(l.pageType))]}
              anchorOffset={0}
              cols={2}
            />
          </div>

          {/* Routes column – spans 2 on large screens */}
          <div className="lg:col-span-2">
            <LinkSection
              title="All Intercity Routes"
              icon={<Navigation className="w-3.5 h-3.5" />}
              links={routesToShow}
              anchorOffset={0}
              cols={3}
            />
          </div>
        </div>

        {/* Bottom strip – entity links for semantic richness */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-3">
            Serving · Jeddah · Makkah · Madinah · Taif · Badr · Saudi Arabia
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {[
              { url: "/services/airport-transfer",  label: "Jeddah Airport Transfer" },
              { url: "/services/umrah-taxi",         label: "Umrah Transportation" },
              { url: "/services/ziyarat-taxi",       label: "Ziyarat Tours" },
              { url: "/services/haram-transfer",     label: "Haram Shuttle Service" },
              { url: "/services/vip-taxi",           label: "VIP Chauffeur Service" },
              { url: "/services/family-taxi",        label: "Family Group Taxi" },
              { url: "/taxi-jeddah-to-makkah",       label: "Taxi Jeddah to Makkah" },
              { url: "/taxi-makkah-to-madinah",      label: "Taxi Makkah to Madinah" },
              { url: "/taxi-jeddah-airport-to-makkah", label: "KAIA to Makkah Taxi" },
              { url: "/taxi-madinah-to-badr",        label: "Madinah to Badr Taxi" },
              { url: "/locations/jeddah",            label: "Taxi Service Jeddah" },
              { url: "/locations/makkah",            label: "Taxi Service Makkah" },
              { url: "/locations/madinah",           label: "Taxi Service Madinah" },
              { url: "/faq",                         label: "Taxi FAQ" },
              { url: "/about",                       label: "About Taxi Bhai" },
              { url: "/blog",                        label: "Travel Guides" },
            ].map(({ url, label }) => (
              <Link
                key={url}
                href={url}
                className="text-xs text-gray-500 hover:text-green-700 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
