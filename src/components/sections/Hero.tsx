import Link from "next/link";
import { Phone, MessageCircle, Shield, Clock, Star, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #001a0d 0%, #003318 45%, #005228 100%)" }}
      aria-label="Taxi Bhai – Saudi Arabia Taxi Service"
      id="hero"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-700/50 text-green-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            #1 Taxi Service in Western Saudi Arabia
          </div>

          {/* H1 */}
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6 tracking-tight">
            Saudi Arabia&apos;s{" "}
            <span style={{ color: "#C8A96E" }}>Most Trusted</span>
            <br />
            Taxi Service
          </h1>

          <p className="text-green-100/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl" id="hero-desc">
            Professional 24/7 taxi service across Jeddah, Makkah, Madinah, Taif &amp; Badr.
            Airport transfers, Umrah packages, Ziyarat tours, VIP rides, and intercity routes
            — fixed prices, no meters, no surprises.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: Star, text: "4.9/5 Rating (847+ reviews)", fill: true },
              { icon: Shield, text: "Licensed & Insured Drivers", fill: false },
              { icon: Clock, text: "Available 24/7", fill: false },
              { icon: MapPin, text: "Jeddah · Makkah · Madinah · Taif · Badr", fill: false },
            ].map(({ icon: Icon, text, fill }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-green-200/80">
                <Icon
                  className="w-4 h-4 text-green-400 flex-shrink-0"
                  fill={fill ? "currentColor" : "none"}
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats ribbon */}
      <div className="relative border-t border-green-800/50 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50,000+", label: "Trips Completed" },
              { value: "24/7", label: "Always Available" },
              { value: "5 Cities", label: "Service Coverage" },
              { value: "4.9★", label: "Customer Rating" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-2xl sm:text-3xl font-black text-white" style={{ color: "#C8A96E" }}>
                  {value}
                </dt>
                <dd className="text-green-200/60 text-xs sm:text-sm mt-0.5">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
