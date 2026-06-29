import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Al-Rashidi",
    location: "Riyadh",
    rating: 5,
    text: "Excellent Umrah taxi service. Driver was punctual, the car was clean and comfortable, and we reached Makkah safely from Jeddah airport. Highly recommend Taxi Bhai for all pilgrims visiting the holy cities.",
    service: "Umrah Taxi Package",
    date: "Nov 2024",
    initial: "M",
  },
  {
    name: "Fatima Al-Zahra",
    location: "Dubai, UAE",
    rating: 5,
    text: "Best taxi from Jeddah airport to Makkah hotel. Fixed price, no haggling, very professional service. Driver waited at arrivals with a name board. Will definitely book again for our next Umrah trip.",
    service: "Airport Transfer",
    date: "Dec 2024",
    initial: "F",
  },
  {
    name: "Ibrahim Malik",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "Booked a Ziyarat tour from Madinah to Badr and back. The driver was knowledgeable about the historical sites, patient, and very professional. Amazing experience for our family during this spiritual journey.",
    service: "Ziyarat Tour",
    date: "Jan 2025",
    initial: "I",
  },
  {
    name: "Khalid bin Ahmed",
    location: "Jeddah",
    rating: 5,
    text: "Used Taxi Bhai for Jeddah to Madinah intercity route. Clean Hyundai Sonata, air-conditioned, driver was on time, and the price was exactly what was quoted on WhatsApp. 5 stars without question.",
    service: "Jeddah–Madinah Taxi",
    date: "Feb 2025",
    initial: "K",
  },
  {
    name: "Amina Hassan",
    location: "Kuala Lumpur, Malaysia",
    rating: 5,
    text: "As a female traveler, I was worried about transport safety. Taxi Bhai arranged a professional driver and the whole team was courteous. They even helped me with my heavy luggage. Highly trusted service.",
    service: "VIP Taxi",
    date: "Mar 2025",
    initial: "A",
  },
  {
    name: "Dr. Yusuf Naqvi",
    location: "Karachi, Pakistan",
    rating: 5,
    text: "Brought our family of 7 for Umrah. Taxi Bhai provided a spacious minivan, perfectly suited for our group. All transfers — airport, Makkah hotels, Madinah, and back — were handled flawlessly.",
    service: "Family Taxi Package",
    date: "Apr 2025",
    initial: "Y",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">
            Customer Reviews
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Trusted by Pilgrims Worldwide
            </h2>
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg leading-none">4.9/5</p>
                <p className="text-gray-400 text-xs">847+ reviews</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article key={t.name} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-green-200 flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
              <span className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                {t.service}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
