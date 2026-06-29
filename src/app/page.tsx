import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CoverageAreas } from "@/components/sections/CoverageAreas";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildReviewSchema, buildSpeakableSchema } from "@/lib/schema";
import { GLOBAL_FAQS } from "@/lib/faqs";
import { BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Bhai – Saudi Arabia's Most Trusted Taxi Service | 24/7 Booking",
  description:
    "Taxi Bhai: Professional 24/7 taxi service in Saudi Arabia. Airport transfers from KAIA Jeddah, Umrah taxi packages, Ziyarat tours, VIP rides, and intercity taxi between Jeddah, Makkah, Madinah, Taif & Badr. Call +966573067785.",
  keywords:
    "taxi Saudi Arabia, Saudi taxi service, airport transfer Jeddah, Umrah taxi Saudi Arabia, Makkah taxi, Madinah taxi, Jeddah to Makkah taxi, intercity taxi Saudi Arabia, taxi near Haram, best taxi Jeddah, taxi bhai",
  openGraph: {
    title: "Taxi Bhai – Saudi Arabia's Most Trusted Taxi Service",
    description:
      "24/7 professional taxi service. Airport transfers, Umrah packages, Ziyarat tours, VIP rides. Serving Jeddah, Makkah, Madinah, Taif & Badr. Book: +966573067785",
    url: BUSINESS.website,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildReviewSchema()} />
      <JsonLd data={buildSpeakableSchema(["#hero-desc", "#about-taxi-bhai", "h1"])} />

      <Hero />

      <article className="bg-white border-b border-gray-100" id="about-taxi-bhai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              About Taxi Bhai – Saudi Arabia Taxi Service
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                <strong className="text-gray-900">Taxi Bhai</strong> is a professional taxi service
                operating across western Saudi Arabia, with headquarters in Jeddah and coverage
                spanning Makkah, Madinah, Taif, and Badr. Founded in 2019, we specialize in
                airport transfers, Umrah taxi packages, Ziyarat tours, VIP transport, family
                travel, Haram shuttle services, and intercity taxi routes.
              </p>
              <p>
                Our service was built around Saudi Arabia&apos;s unique travel needs — millions of
                pilgrims arriving annually for Umrah and Hajj, families needing safe spacious
                transport, and professionals requiring reliable point-to-point intercity mobility.
              </p>
              <p>
                Unlike ride-hailing apps, Taxi Bhai operates on a{" "}
                <strong className="text-gray-900">fixed-price, pre-booked model</strong>. Fare
                agreed before travel — no meters, no surge pricing, no surprises. Our drivers are
                licensed, background-checked, and commercially insured.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Services />
      <WhyChooseUs />
      <PopularRoutes />
      <HowItWorks />
      <CoverageAreas />

      <section className="py-16 md:py-20 bg-white" id="saudi-taxi-guide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Umrah Taxi Service in Saudi Arabia
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Performing Umrah requires transport at multiple stages: airport arrival,
                  Miqat stop for Ihram, travel to Makkah, hotel-to-Haram runs, and optionally
                  onward to Madinah for Ziyarat. Taxi Bhai handles all stages seamlessly.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Miqat Points for Umrah Pilgrims</h3>
                  <ul className="space-y-2.5 text-xs">
                    {[
                      { miqat: "Masjid Aisha (Tan'im)", note: "For Jeddah residents & same-city pilgrims" },
                      { miqat: "Dhu'l-Hulayfah (Abyar Ali)", note: "Pilgrims from Madinah direction" },
                      { miqat: "Al-Juhfah (near Rabigh)", note: "International arrivals via Jeddah Airport" },
                      { miqat: "Qarn al-Manazil (Al-Sail)", note: "Pilgrims from Taif & eastern direction" },
                    ].map((item) => (
                      <li key={item.miqat} className="flex flex-col gap-0.5">
                        <span className="font-semibold text-gray-800">{item.miqat}</span>
                        <span className="text-gray-500">{item.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Our drivers know all Miqat locations and can stop on the way to Makkah.
                  Communicate your requirements at the time of booking.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Ziyarat Taxi – Madinah &amp; Makkah Sites
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Ziyarat (Islamic heritage site visits) is a core part of the Saudi pilgrimage
                  experience. Taxi Bhai provides dedicated Ziyarat transport covering all major
                  historical sites in both cities.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Key Madinah Ziyarat Locations</h3>
                  <ul className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      "Masjid al-Nabawi",
                      "Masjid Quba",
                      "Mount Uhud Battlefield",
                      "Al-Baqi Cemetery",
                      "Masjid al-Qiblatayn",
                      "Badr Site (155km)",
                      "Seven Mosques Area",
                      "Masjid al-Ghamama",
                    ].map((site) => (
                      <li key={site} className="flex items-center gap-1.5 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                        {site}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Full-day Madinah Ziyarat tours (6–8 hours) cover all sites. Badr day
                  trips (155km, approx 5–6 hrs total) include waiting time at the site.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Taxi Bhai vs Other Saudi Transport Options
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="bg-gray-900 text-white px-4 py-3 text-left">Feature</th>
                    <th className="bg-green-700 text-white px-4 py-3 text-center">Taxi Bhai</th>
                    <th className="bg-gray-600 text-white px-4 py-3 text-center">Ride Apps</th>
                    <th className="bg-gray-600 text-white px-4 py-3 text-center">Haramain Train</th>
                    <th className="bg-gray-600 text-white px-4 py-3 text-center">Local Bus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Fixed price pre-booking", "✓", "✗ (surge)", "✓", "✓"],
                    ["24/7 availability", "✓", "Varies", "Limited", "Limited"],
                    ["Airport flight tracking", "✓", "✓", "✗", "✗"],
                    ["Door-to-door service", "✓", "✓", "✗", "✗"],
                    ["Family/group capacity", "✓ up to 7", "Limited", "✓", "✓"],
                    ["Miqat stops for Umrah", "✓", "Depends", "✗", "✗"],
                    ["Jeddah→Makkah price", "SAR 120", "SAR 80–200+", "N/A", "SAR 8"],
                    ["Luggage assistance", "✓", "Limited", "✗", "✗"],
                  ].map(([feature, ...vals], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2.5 font-medium text-gray-700">{feature}</td>
                      <td className="px-4 py-2.5 text-center text-green-700 font-semibold">{vals[0]}</td>
                      <td className="px-4 py-2.5 text-center text-gray-500">{vals[1]}</td>
                      <td className="px-4 py-2.5 text-center text-gray-500">{vals[2]}</td>
                      <td className="px-4 py-2.5 text-center text-gray-500">{vals[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection
        faqs={GLOBAL_FAQS}
        title="Frequently Asked Questions About Taxi Bhai"
        subtitle="Common questions from passengers about booking, pricing, routes, and services."
      />

      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #001a0d 0%, #003318 45%, #005228 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Book Your Saudi Taxi Now
          </h2>
          <p className="text-green-200/80 text-lg mb-8">
            Available 24/7 across Jeddah, Makkah, Madinah, Taif &amp; Badr.
            Fixed prices — no surprises.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/966573067785?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Booking
            </a>
            <a
              href="tel:+966573067785"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-4 rounded-xl text-base transition-all"
            >
              <Phone className="w-5 h-5" />
              +966573067785
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center text-green-200/60 text-sm">
            {["Jeddah", "Makkah", "Madinah", "Taif", "Badr"].map((city) => (
              <span key={city} className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
