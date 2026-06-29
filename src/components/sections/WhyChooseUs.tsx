import { Shield, Clock, DollarSign, Smile, Navigation, Globe, Star, Users } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "We operate around the clock — including during Hajj, Ramadan, Eid, and public holidays. Your journey never has to wait.",
  },
  {
    icon: DollarSign,
    title: "Fixed Prices — No Meters",
    desc: "Every trip price is agreed before you travel. No surge pricing, no hidden fees, no meter anxiety. What you're quoted is what you pay.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "All Taxi Bhai drivers are Saudi transport authority licensed, background-checked, and covered by full commercial insurance.",
  },
  {
    icon: Navigation,
    title: "Flight Tracking",
    desc: "For airport pickups, we track your flight in real-time. If your flight is delayed, your driver waits — at no extra charge (up to 2 hours).",
  },
  {
    icon: Globe,
    title: "Multilingual Service",
    desc: "Our team communicates in English and Arabic. We serve pilgrims from across the world — communication is never a barrier.",
  },
  {
    icon: Users,
    title: "Family & Female Friendly",
    desc: "Spacious family vehicles, child seats on request, and female-friendly arrangements for women traveling with mahrams or in groups.",
  },
  {
    icon: Star,
    title: "Umrah & Hajj Specialists",
    desc: "We understand pilgrimage needs — Miqat stops, Ihram requirements, Haram proximity. Built for pilgrims, trusted by pilgrims.",
  },
  {
    icon: Smile,
    title: "Professional Drivers",
    desc: "Uniformed, courteous, punctual. Our drivers know every route, landmark, and shortcut across Jeddah, Makkah, Madinah, Taif, and Badr.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-gray-50" id="why-taxi-bhai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">
            Why Taxi Bhai
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Why Thousands Choose Taxi Bhai
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            We built Taxi Bhai specifically for Saudi Arabia&apos;s unique travel needs — pilgrims,
            families, business travelers, and residents.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
