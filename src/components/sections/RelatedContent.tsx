/**
 * RelatedContent
 * Universal related-content widget injected on every page.
 * Renders up to 5 sections (Services · Cities · Routes · Articles · FAQ links)
 * using the semantic link data from relatedContent.ts.
 *
 * Anchor text is varied across links using pickAnchor() to avoid over-optimisation.
 */

import Link from "next/link";
import { ArrowRight, MapPin, Plane, Moon, Landmark, Navigation, BookOpen, HelpCircle } from "lucide-react";
import type { SiteLink } from "@/lib/internalLinkMap";
import { pickAnchor } from "@/lib/relatedContent";
import type { FaqItem } from "@/lib/types";

interface RelatedContentProps {
  services?: SiteLink[];
  cities?: SiteLink[];
  routes?: SiteLink[];
  blogs?: SiteLink[];
  faqs?: FaqItem[];
  nearbyLocations?: SiteLink[];
  heading?: string;
  className?: string;
}

const SERVICE_ICON_MAP: Record<string, string> = {
  "airport-transfer": "✈",
  "umrah-taxi": "🌙",
  "ziyarat-taxi": "🕌",
  "vip-taxi": "👑",
  "family-taxi": "👨‍👩‍👧",
  "haram-transfer": "🏠",
  "intercity-taxi": "📍",
};

function SectionHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-green-600">{icon}</span>
      <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide">{title}</h3>
    </div>
  );
}

function LinkCard({ link, anchorIndex = 0, variant = "default" }: {
  link: SiteLink;
  anchorIndex?: number;
  variant?: "default" | "route" | "city";
}) {
  const anchor = pickAnchor(link, anchorIndex);
  if (variant === "route") {
    return (
      <Link
        href={link.url}
        className="flex items-center justify-between bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-xl px-4 py-3 transition-all group text-sm"
        title={link.title}
      >
        <div className="flex items-center gap-2 min-w-0">
          <Navigation className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800 truncate">{anchor}</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {link.startingPrice && (
            <span className="text-xs font-bold text-green-700">SAR {link.startingPrice}</span>
          )}
          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-600 transition-colors" />
        </div>
      </Link>
    );
  }
  if (variant === "city") {
    return (
      <Link
        href={link.url}
        className="flex items-center gap-2 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg px-3 py-2.5 transition-all text-sm font-semibold text-gray-800 hover:text-green-700 group"
        title={link.title}
      >
        <MapPin className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
        {anchor}
        <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-green-500 ml-auto transition-colors" />
      </Link>
    );
  }
  // default – service card
  return (
    <Link
      href={link.url}
      className="flex flex-col bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-xl p-3.5 transition-all group"
      title={link.title}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base">{SERVICE_ICON_MAP[link.entityId] ?? "🚕"}</span>
        <span className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">{anchor}</span>
      </div>
      <p className="text-xs text-gray-500 leading-snug">{link.description}</p>
      {link.startingPrice && (
        <p className="text-xs font-bold text-green-700 mt-1.5">From SAR {link.startingPrice}</p>
      )}
    </Link>
  );
}

export function RelatedContent({
  services = [],
  cities = [],
  routes = [],
  blogs = [],
  faqs = [],
  nearbyLocations = [],
  heading = "Related Services & Destinations",
  className = "",
}: RelatedContentProps) {
  const hasContent =
    services.length > 0 ||
    cities.length > 0 ||
    routes.length > 0 ||
    blogs.length > 0 ||
    faqs.length > 0;

  if (!hasContent) return null;

  return (
    <section className={`border-t border-gray-100 bg-gray-50 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-gray-900 mb-8">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Services */}
          {services.length > 0 && (
            <div>
              <SectionHeading icon={<Plane className="w-4 h-4" />} title="Our Services" />
              <div className="grid grid-cols-1 gap-2">
                {services.map((link, i) => (
                  <LinkCard key={link.url} link={link} anchorIndex={i} variant="default" />
                ))}
              </div>
            </div>
          )}

          {/* Routes */}
          {routes.length > 0 && (
            <div>
              <SectionHeading icon={<Navigation className="w-4 h-4" />} title="Popular Routes" />
              <div className="space-y-2">
                {routes.map((link, i) => (
                  <LinkCard key={link.url} link={link} anchorIndex={i} variant="route" />
                ))}
              </div>
            </div>
          )}

          {/* Cities + Nearby + Blogs + FAQs stacked */}
          <div className="space-y-6">
            {/* Cities */}
            {cities.length > 0 && (
              <div>
                <SectionHeading icon={<MapPin className="w-4 h-4" />} title="Destinations" />
                <div className="grid grid-cols-1 gap-2">
                  {cities.map((link, i) => (
                    <LinkCard key={link.url} link={link} anchorIndex={i} variant="city" />
                  ))}
                </div>
              </div>
            )}

            {/* Nearby */}
            {nearbyLocations.length > 0 && cities.length === 0 && (
              <div>
                <SectionHeading icon={<MapPin className="w-4 h-4" />} title="Nearby Cities" />
                <div className="grid grid-cols-1 gap-2">
                  {nearbyLocations.map((link, i) => (
                    <LinkCard key={link.url} link={link} anchorIndex={i} variant="city" />
                  ))}
                </div>
              </div>
            )}

            {/* Blog links */}
            {blogs.length > 0 && (
              <div>
                <SectionHeading icon={<BookOpen className="w-4 h-4" />} title="Travel Guides" />
                <div className="space-y-2">
                  {blogs.map((link, i) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className="flex items-start gap-2 group"
                      title={link.title}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm text-gray-700 group-hover:text-green-700 leading-snug transition-colors">
                        {pickAnchor(link, i)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ links */}
            {faqs.length > 0 && (
              <div>
                <SectionHeading icon={<HelpCircle className="w-4 h-4" />} title="Quick Answers" />
                <div className="space-y-2">
                  {faqs.map((faq) => (
                    <Link
                      key={faq.question}
                      href="/faq"
                      className="flex items-start gap-2 group"
                      title={faq.question}
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600 group-hover:text-green-700 leading-snug transition-colors">
                        {faq.question}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 hover:text-green-800 mt-1 transition-colors"
                  >
                    View all FAQs <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
