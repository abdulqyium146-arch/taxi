import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { UMRAH_FAQS } from "@/lib/faqs";
import { BUSINESS } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { Moon, Clock, CheckCircle, MessageCircle, Phone, Star } from "lucide-react";

const related = getRelatedContent("/services/umrah-taxi");

export const metadata: Metadata = {
  title: "Umrah Taxi Service Saudi Arabia – Airport to Haram Packages",
  description:
    "Dedicated Umrah taxi service in Saudi Arabia. Airport pickup, Miqat stops, Haram transfers, Makkah & Madinah packages. 24/7. Fixed prices. Serving pilgrims since 2019. Book: +966573067785.",
  keywords:
    "Umrah taxi Saudi Arabia, Umrah transport Jeddah, taxi for Umrah, airport to Makkah Umrah, Miqat taxi stop, Umrah taxi package, taxi Umrah Jeddah Makkah Madinah",
};

const packages = [
  {
    name: "Airport → Makkah",
    duration: "1-way transfer",
    includes: ["KAIA pickup", "Miqat stop", "Makkah hotel drop"],
    price: 150,
    popular: true,
  },
  {
    name: "Makkah ↔ Madinah",
    duration: "Round trip",
    includes: ["Hotel pickup Makkah", "Transfer to Madinah", "Return trip"],
    price: 750,
    popular: false,
  },
  {
    name: "Full Umrah Package",
    duration: "Airport → Makkah → Madinah → Airport",
    includes: ["Airport pickup", "Miqat stop", "Makkah stays", "Madinah transfer", "Return to airport"],
    price: 1200,
    popular: true,
  },
  {
    name: "Haram Shuttle",
    duration: "Per trip",
    includes: ["Hotel to Haram", "Haram to hotel", "All times"],
    price: 30,
    popular: false,
  },
];

export default function UmrahTaxiPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Umrah Taxi Service Saudi Arabia",
          description:
            "Specialized Umrah taxi packages covering airport arrival, Miqat stops, Haram transfers, and full Makkah-Madinah itineraries for pilgrims performing Umrah.",
          url: "/services/umrah-taxi",
          price: 150,
          areaServed: ["Jeddah", "Makkah", "Madinah"],
        })}
      />

      <div
        className="text-white py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #4a0082 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "Umrah Taxi", href: "/services/umrah-taxi" },
            ]}
          />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 bg-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Moon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Umrah Taxi Service – Saudi Arabia
              </h1>
              <p className="text-purple-100 text-lg max-w-2xl">
                Specialized taxi service for Umrah pilgrims. Airport arrival, Miqat stops,
                Makkah Haram transfers, and Madinah packages. Trusted by thousands of pilgrims.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Why Umrah Pilgrims Choose Taxi Bhai
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Performing Umrah is a deeply spiritual journey that requires careful, reliable
                  transport at every stage. Unlike general taxi apps, Taxi Bhai is specifically
                  built around Umrah pilgrim needs — we understand the Miqat requirements, Ihram
                  obligations, and the importance of punctuality when approaching the Haram.
                </p>
                <p>
                  Since 2019, we have transported thousands of pilgrims from Jeddah&apos;s King
                  Abdulaziz International Airport through all stages of their Umrah journey.
                  Our drivers are trained in Islamic etiquette, multilingual communication, and
                  the specific routes required for Umrah.
                </p>
              </div>
            </section>

            {/* Miqat Guide */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Miqat Points &amp; Ihram Entry for Umrah
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Miqat is the boundary point beyond which a pilgrim must be in the state of Ihram
                before entering Makkah. Taxi Bhai can stop at the correct Miqat for your route.
              </p>
              <div className="space-y-3">
                {[
                  {
                    name: "Masjid Aisha (Tan'im)",
                    location: "5km from Haram, Makkah",
                    for: "Pilgrims already in Jeddah/Makkah area who need to exit and re-enter Ihram",
                    note: "Most common for airport arrivals going directly to Makkah",
                  },
                  {
                    name: "Dhu'l-Hulayfah (Abyar Ali)",
                    location: "450km from Makkah, near Madinah",
                    for: "Pilgrims traveling from Madinah towards Makkah",
                    note: "Farthest Miqat — pilgrims from Madinah enter Ihram here",
                  },
                  {
                    name: "Al-Juhfah (near Rabigh)",
                    location: "187km from Makkah",
                    for: "International pilgrims arriving from North Africa, Europe, or West",
                    note: "Passed on the Jeddah-Madinah highway (Route 60)",
                  },
                  {
                    name: "Qarn al-Manazil (Al-Sail al-Kabir)",
                    location: "94km from Makkah",
                    for: "Pilgrims traveling from Taif or eastern direction",
                    note: "Passed on the Taif-Makkah road",
                  },
                ].map((miqat) => (
                  <div key={miqat.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{miqat.name}</h3>
                        <p className="text-purple-700 text-xs font-medium">{miqat.location}</p>
                        <p className="text-gray-600 text-xs mt-1">{miqat.for}</p>
                        <p className="text-green-700 text-xs font-medium mt-1">{miqat.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> Inform your Taxi Bhai driver of your Miqat
                  requirement at the time of booking. We will plan the route to ensure you
                  pass through your correct Miqat before entering Makkah.
                </p>
              </div>
            </section>

            {/* Packages */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Umrah Transport Packages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`relative rounded-2xl p-5 border ${
                      pkg.popular
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute top-3 right-3 bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    <h3 className="font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-gray-500 text-xs mb-3">{pkg.duration}</p>
                    <ul className="space-y-1.5 mb-4">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-black text-green-700 text-lg">
                      From SAR {pkg.price}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                * Prices are indicative starting rates. Final price depends on vehicle type and
                specific itinerary. Confirm via WhatsApp or phone.
              </p>
            </section>

            {/* Seasonal Note */}
            <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h2 className="text-lg font-black text-gray-900 mb-2">
                Umrah Taxi During Ramadan – Important Notes
              </h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  Ramadan is the peak season for Umrah, with demand for taxis 3–4× higher than
                  normal months. Taxi Bhai operates full service throughout Ramadan, including
                  Laylat al-Qadr nights and Eid celebrations.
                </p>
                <p>
                  <strong className="text-gray-900">We strongly recommend booking 48–72 hours in advance</strong> during
                  Ramadan to guarantee driver availability. Late-night bookings (Tarawih time)
                  are particularly high-demand.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div
              className="rounded-2xl p-5 text-white sticky top-20"
              style={{ background: "linear-gradient(135deg, #2d0052 0%, #4a0082 100%)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              </div>
              <h3 className="font-black text-lg mb-1">Book Umrah Taxi</h3>
              <p className="text-purple-100 text-sm mb-5">
                Mention: flight number, arrival date, Miqat requirement, and destination.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Assalamu%20Alaikum%2C%20I%20need%20an%20Umrah%20taxi.`}
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
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Umrah Booking Checklist</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                {[
                  "Flight number and arrival terminal",
                  "Number of passengers",
                  "Amount of luggage",
                  "Miqat requirement (yes/no)",
                  "Hotel name in Makkah",
                  "Onward to Madinah (yes/no)",
                  "Return trip needed?",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 border border-green-600 rounded-sm flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-green-700" />
                Service Hours
              </h3>
              <p className="text-xs text-gray-600">
                Available 24/7 — including Fajr and Isha prayer time pickups near the Haram.
                We understand the timing of Salah and work around your prayer schedule.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FAQSection
        faqs={UMRAH_FAQS}
        title="Umrah Taxi FAQ"
        subtitle="Common questions about Taxi Bhai's Umrah transport service."
      />
      <RelatedContent
        services={related.services}
        cities={related.cities}
        routes={related.routes}
        blogs={related.blogs}
        faqs={related.faqs}
        heading="Related Umrah Transport Services"
      />
    </>
  );
}
