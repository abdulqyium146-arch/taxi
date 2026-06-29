import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { ZIYARAT_FAQS } from "@/lib/faqs";
import { BUSINESS } from "@/lib/constants";
import { Landmark, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Ziyarat Taxi Service – Madinah & Makkah Islamic Site Tours",
  description:
    "Professional Ziyarat taxi tours in Madinah and Makkah. Visit Masjid Nabawi, Mount Uhud, Masjid Quba, Al-Baqi, Badr (155km), and all major Islamic sites. Fixed prices. Book: +966573067785.",
  keywords:
    "Ziyarat taxi Madinah, Ziyarat taxi Makkah, Islamic sites tour Saudi Arabia, Madinah historical places taxi, Badr taxi from Madinah, Uhud taxi tour, taxi for Ziyarat Saudi",
};

const madinahSites = [
  { name: "Masjid al-Nabawi", desc: "Prophet's Mosque — the heart of Madinah Ziyarat", distance: "Central Madinah" },
  { name: "Masjid Quba", desc: "First mosque built in Islam (7 Hijri). Salah here = reward of Umrah", distance: "3km from Haram" },
  { name: "Mount Uhud", desc: "Site of the Battle of Uhud (625 CE). Martyrs buried here including Hamza ibn Abd al-Muttalib", distance: "5km north" },
  { name: "Al-Baqi Cemetery", desc: "Historic Islamic cemetery adjacent to Masjid Nabawi", distance: "Adjacent to Haram" },
  { name: "Masjid al-Qiblatayn", desc: "Mosque of Two Qiblas — where the Qibla was changed from Jerusalem to Makkah", distance: "4km from Haram" },
  { name: "Seven Mosques (Sab'ah Masajid)", desc: "Six small mosques at the site of the Battle of the Trench", distance: "5km from Haram" },
  { name: "Masjid al-Ghamama", desc: "Site where the first Eid prayer was performed by the Prophet ﷺ", distance: "1km from Haram" },
  { name: "Badr Battlefield", desc: "Site of the first major battle in Islamic history (624 CE)", distance: "155km from Madinah" },
];

const makkaahSites = [
  { name: "Cave of Hira (Jabal al-Nour)", desc: "Mountain cave where the first Quran revelation occurred", distance: "4km from Haram" },
  { name: "Cave of Thawr", desc: "Cave where the Prophet ﷺ took refuge during the Hijra to Madinah", distance: "6km south" },
  { name: "Mount Arafat (Jabal al-Rahmah)", desc: "Essential Hajj standing site. Visited for Ziyarat all year", distance: "22km from Haram" },
  { name: "Mina", desc: "Site of Jamarat stoning during Hajj. Historical location year-round", distance: "8km from Haram" },
  { name: "Muzdalifah", desc: "Open plain between Mina and Arafat — Hajj gathering site", distance: "15km from Haram" },
  { name: "Al-Hudaybiyyah Mosque", desc: "Site of the famous Treaty of Hudaybiyyah", distance: "22km west of Haram" },
];

export default function ZiyaratTaxiPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Ziyarat Taxi Service Madinah & Makkah",
          description:
            "Guided Ziyarat taxi tours covering all major Islamic historical sites in Madinah (Masjid Quba, Mount Uhud, Badr) and Makkah (Cave of Hira, Mount Arafat, Cave of Thawr).",
          url: "/services/ziyarat-taxi",
          price: 200,
          areaServed: ["Madinah", "Makkah"],
        })}
      />

      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Services", href: "/services" },
              { name: "Ziyarat Taxi", href: "/services/ziyarat-taxi" },
            ]}
          />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Landmark className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Ziyarat Taxi Service – Madinah &amp; Makkah
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Visit all major Islamic historical sites in Madinah and Makkah with a
                professional, patient driver who understands the spiritual significance of each location.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                What is Ziyarat?
              </h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  Ziyarat (زيارة) means &quot;visit&quot; in Arabic and refers to the Islamic practice of
                  visiting sacred places and historical sites associated with the Prophet Muhammad ﷺ,
                  the Companions, and early Islamic history. Ziyarat is considered a highly
                  recommended act in Islamic tradition and forms an important part of most pilgrims&apos;
                  itinerary when visiting Madinah and Makkah.
                </p>
                <p>
                  Taxi Bhai provides dedicated Ziyarat transport with drivers who are knowledgeable
                  about each site&apos;s significance and location, ensuring efficient coverage
                  of all key locations within your available time.
                </p>
              </div>
            </section>

            {/* Madinah Sites */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Madinah Ziyarat Sites – Complete Guide
              </h2>
              <div className="space-y-3">
                {madinahSites.map((site, i) => (
                  <div key={site.name} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="w-7 h-7 bg-green-700 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{site.name}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{site.desc}</p>
                      <p className="text-green-700 text-xs font-medium mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {site.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2">Madinah Ziyarat Tour Duration</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-semibold text-gray-800">Half-Day Tour (4–5 hrs)</p>
                    <p className="text-gray-500">Masjid Quba, Mount Uhud, Masjid al-Qiblatayn, Al-Baqi</p>
                    <p className="text-green-700 font-bold mt-1">From SAR 200</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Full-Day Tour (6–8 hrs)</p>
                    <p className="text-gray-500">All major sites including Seven Mosques & Ghamama</p>
                    <p className="text-green-700 font-bold mt-1">From SAR 350</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Badr Tour */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Badr Day Trip from Madinah (155km)
              </h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  Badr (غزوة بدر) is the site of the first major battle in Islamic history, fought
                  in 624 CE (2 Hijri). Located 155km southwest of Madinah, it is one of the most
                  important Ziyarat destinations for Muslim visitors to the region.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Badr Ziyarat Sites</h3>
                  <ul className="space-y-1.5 text-xs">
                    {[
                      "Battle of Badr Memorial Site",
                      "Martyrs of Badr Cemetery (70 companions buried here)",
                      "Badr Mosque (Masjid Badr al-Kabir)",
                      "Badr Mountain (Jabal Badr)",
                      "Wells of Badr",
                    ].map((site) => (
                      <li key={site} className="flex items-center gap-1.5 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        {site}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-3 text-xs text-center">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">155 km</p>
                      <p className="text-gray-500">Distance from Madinah</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">~1.5 hrs</p>
                      <p className="text-gray-500">Each way</p>
                    </div>
                    <div>
                      <p className="font-bold text-green-700 text-sm">SAR 200+</p>
                      <p className="text-gray-500">Round trip</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Makkah Sites */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Makkah Ziyarat Sites Guide
              </h2>
              <div className="space-y-3">
                {makkaahSites.map((site, i) => (
                  <div key={site.name} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="w-7 h-7 bg-amber-600 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{site.name}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{site.desc}</p>
                      <p className="text-amber-700 text-xs font-medium mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {site.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-amber-600 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book Ziyarat Taxi</h3>
              <p className="text-amber-100 text-sm mb-5">
                Tell us: city, sites to visit, date, and group size.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Ziyarat%20taxi%20tour.`}
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
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-green-700" />
                Ziyarat Tour Packages
              </h3>
              <div className="space-y-3 text-xs">
                {[
                  { name: "Madinah Half-Day", hours: "4–5 hrs", price: "SAR 200" },
                  { name: "Madinah Full-Day", hours: "6–8 hrs", price: "SAR 350" },
                  { name: "Badr Day Trip", hours: "5–6 hrs total", price: "SAR 200+" },
                  { name: "Makkah Ziyarat", hours: "4–5 hrs", price: "SAR 200" },
                  { name: "Makkah + Mina + Arafat", hours: "6–7 hrs", price: "SAR 300" },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-gray-800">{pkg.name}</p>
                      <p className="text-gray-400">{pkg.hours}</p>
                    </div>
                    <span className="font-bold text-green-700">{pkg.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection
        faqs={ZIYARAT_FAQS}
        title="Ziyarat Taxi FAQ"
        subtitle="Questions about Islamic site visits and Ziyarat tours in Saudi Arabia."
      />
    </>
  );
}
