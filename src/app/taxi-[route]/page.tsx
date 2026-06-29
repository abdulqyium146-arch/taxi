import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildRouteSchema, buildFaqSchema } from "@/lib/schema";
import { INTERCITY_ROUTES, BUSINESS } from "@/lib/constants";
import { MapPin, Clock, DollarSign, Navigation, CheckCircle, MessageCircle, Phone, ArrowRight } from "lucide-react";
import type { FaqItem } from "@/lib/types";

interface RoutePageProps {
  params: Promise<{ route: string }>;
}

export async function generateStaticParams() {
  return INTERCITY_ROUTES.map((route) => ({
    route: route.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { route } = await params;
  const routeData = INTERCITY_ROUTES.find((r) => r.slug === route);
  if (!routeData) return {};

  return {
    title: `Taxi ${routeData.fromName} to ${routeData.toName} – SAR ${routeData.priceRange.economy} | Fixed Price`,
    description: `Private taxi from ${routeData.fromName} to ${routeData.toName}. ${routeData.distance}km, ${routeData.duration}. Economy SAR ${routeData.priceRange.economy}, VIP SAR ${routeData.priceRange.vip}. Book Taxi Bhai: +966573067785.`,
    keywords: `taxi ${routeData.fromName} to ${routeData.toName}, ${routeData.fromName} ${routeData.toName} taxi, taxi from ${routeData.fromName} to ${routeData.toName} price, ${routeData.fromName.toLowerCase()} ${routeData.toName.toLowerCase()} private taxi Saudi Arabia`,
    openGraph: {
      title: `Taxi ${routeData.fromName} to ${routeData.toName} – Fixed SAR ${routeData.priceRange.economy}`,
      description: routeData.description,
    },
  };
}

export default async function RouteDetailPage({ params }: RoutePageProps) {
  const { route } = await params;
  const routeData = INTERCITY_ROUTES.find((r) => r.slug === route);
  if (!routeData) notFound();

  const faqs: FaqItem[] = [
    {
      question: `How much is a taxi from ${routeData.fromName} to ${routeData.toName}?`,
      answer: `A private taxi from ${routeData.fromName} to ${routeData.toName} costs SAR ${routeData.priceRange.economy} (economy class) or SAR ${routeData.priceRange.vip} (VIP/luxury vehicle). Price is fixed and confirmed before travel — no meters, no surge charges.`,
    },
    {
      question: `How long does it take to drive from ${routeData.fromName} to ${routeData.toName}?`,
      answer: `The drive from ${routeData.fromName} to ${routeData.toName} takes approximately ${routeData.duration} under normal traffic conditions. The total distance is ${routeData.distance}km via ${routeData.highway}.`,
    },
    {
      question: `Which highway connects ${routeData.fromName} and ${routeData.toName}?`,
      answer: `The primary highway connecting ${routeData.fromName} and ${routeData.toName} is ${routeData.highway}. It is a well-maintained, multi-lane road that forms part of Saudi Arabia's western highway network.`,
    },
    {
      question: `Is it safe to take a taxi from ${routeData.fromName} to ${routeData.toName}?`,
      answer: `Yes. Taxi Bhai drivers are licensed, background-checked, and commercially insured. Our vehicles are regularly maintained and air-conditioned. All routes are on major Saudi highways with good road conditions.`,
    },
    {
      question: `Can I book a round-trip taxi from ${routeData.fromName} to ${routeData.toName}?`,
      answer: `Yes. Taxi Bhai offers both one-way and round-trip bookings. For round trips, we can arrange the return journey with the same driver (waiting) or a separate booking for a different day.`,
    },
  ];

  const relatedRoutes = INTERCITY_ROUTES.filter(
    (r) => r.slug !== route && (r.from === routeData.from || r.to === routeData.to || r.from === routeData.to || r.to === routeData.from)
  ).slice(0, 4);

  return (
    <>
      <JsonLd
        data={buildRouteSchema({
          fromCity: routeData.fromName,
          toCity: routeData.toName,
          distance: routeData.distance,
          duration: routeData.duration,
          price: routeData.priceRange.economy,
          routeSlug: route,
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />

      {/* Hero */}
      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Intercity Taxi", href: "/services/intercity-taxi" },
              { name: `${routeData.fromName} to ${routeData.toName}`, href: `/taxi-${route}` },
            ]}
          />
          <div className="mt-4">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
              <Navigation className="w-4 h-4" />
              {routeData.highway}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Taxi {routeData.fromName} to {routeData.toName}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-6">
              {routeData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-white font-semibold text-sm">{routeData.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-white font-semibold text-sm">{routeData.distance}km</span>
              </div>
              <div className="flex items-center gap-2 bg-green-700 rounded-xl px-4 py-2.5">
                <DollarSign className="w-4 h-4 text-white" />
                <span className="text-white font-bold text-sm">From SAR {routeData.priceRange.economy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Route Details */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Route Details – {routeData.fromName} to {routeData.toName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Distance", value: `${routeData.distance}km` },
                  { label: "Duration", value: routeData.duration },
                  { label: "Economy", value: `SAR ${routeData.priceRange.economy}` },
                  { label: "VIP", value: `SAR ${routeData.priceRange.vip}` },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
                    <p className="font-black text-gray-900">{value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <strong>Highway:</strong> {routeData.highway}
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing breakdown */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Taxi Fare: {routeData.fromName} to {routeData.toName}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Vehicle Class</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Example Cars</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Passengers</th>
                      <th className="bg-green-700 text-white px-4 py-3 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-semibold text-gray-900">Economy</td>
                      <td className="px-4 py-3 text-gray-600">Toyota Corolla, Hyundai Sonata</td>
                      <td className="px-4 py-3 text-gray-600">1–4 passengers</td>
                      <td className="px-4 py-3 font-bold text-green-700">SAR {routeData.priceRange.economy}</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">VIP / Luxury</td>
                      <td className="px-4 py-3 text-gray-600">Toyota Camry, Lexus ES, GMC Yukon</td>
                      <td className="px-4 py-3 text-gray-600">1–4 (or up to 7 SUV)</td>
                      <td className="px-4 py-3 font-bold text-gray-700">SAR {routeData.priceRange.vip}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                * Prices are per vehicle, not per person. Final price confirmed at booking.
                Group travel (4+ people) makes private taxi very cost-competitive.
              </p>
            </section>

            {/* What&apos;s included */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Fixed price — no meter, no surprises",
                  "Professional licensed driver",
                  "Air-conditioned, clean vehicle",
                  "Door-to-door service",
                  "Luggage assistance",
                  "Direct route — no unnecessary stops",
                  "WhatsApp communication with driver",
                  "On-time departure guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Related routes */}
            {relatedRoutes.length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Related Routes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedRoutes.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/taxi-${r.slug}`}
                      className="flex items-center justify-between bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-xl p-4 transition-all group"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{r.fromName} → {r.toName}</p>
                        <p className="text-xs text-gray-500">{r.distance}km · {r.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-700 font-bold text-sm">SAR {r.priceRange.economy}</p>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 ml-auto mt-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">
                Book {routeData.fromName} to {routeData.toName}
              </h3>
              <p className="text-green-100 text-sm mb-5">
                Fixed price SAR {routeData.priceRange.economy}. Confirm in minutes.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%2C%20I%20need%20a%20taxi%20from%20${encodeURIComponent(routeData.fromName)}%20to%20${encodeURIComponent(routeData.toName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="mt-5 pt-4 border-t border-green-600 space-y-1.5 text-xs text-green-100">
                <p>✓ Price confirmed before travel</p>
                <p>✓ No cancellation fee (12+ hrs notice)</p>
                <p>✓ Payment on arrival</p>
                <p>✓ 24/7 support</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Route Summary</h3>
              <div className="space-y-1.5">
                <p className="flex items-center justify-between">
                  <span>From</span>
                  <strong className="text-gray-800">{routeData.fromName}</strong>
                </p>
                <p className="flex items-center justify-between">
                  <span>To</span>
                  <strong className="text-gray-800">{routeData.toName}</strong>
                </p>
                <p className="flex items-center justify-between">
                  <span>Distance</span>
                  <strong className="text-gray-800">{routeData.distance} km</strong>
                </p>
                <p className="flex items-center justify-between">
                  <span>Duration</span>
                  <strong className="text-gray-800">{routeData.duration}</strong>
                </p>
                <p className="flex items-center justify-between">
                  <span>Economy</span>
                  <strong className="text-green-700">SAR {routeData.priceRange.economy}</strong>
                </p>
                <p className="flex items-center justify-between">
                  <span>VIP</span>
                  <strong className="text-gray-800">SAR {routeData.priceRange.vip}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection
        faqs={faqs}
        title={`${routeData.fromName} to ${routeData.toName} Taxi FAQ`}
        subtitle={`Common questions about the ${routeData.fromName}–${routeData.toName} taxi route.`}
      />
    </>
  );
}
