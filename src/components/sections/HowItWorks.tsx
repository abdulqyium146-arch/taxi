import { MessageCircle, CheckCircle, Car, ThumbsUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Contact via WhatsApp or Call",
    desc: "Message or call us on +966573067785. Tell us your pickup location, destination, date, time, and number of passengers.",
    detail: "Available 24/7 — including during Hajj season, Ramadan, and public holidays.",
  },
  {
    step: "02",
    icon: CheckCircle,
    title: "Get Instant Price Confirmation",
    desc: "We confirm your trip price immediately. Fixed rate — no meters, no surge pricing. Agree on the price before booking.",
    detail: "We quote in Saudi Riyal (SAR). All prices include waiting time at pickup.",
  },
  {
    step: "03",
    icon: Car,
    title: "Driver Assigned & Confirmed",
    desc: "We assign a licensed driver and send you the driver name, car model, and plate number 1 hour before your pickup time.",
    detail: "Airport pickups include real-time flight tracking at no extra charge.",
  },
  {
    step: "04",
    icon: ThumbsUp,
    title: "Safe, On-Time Arrival",
    desc: "Your driver arrives on time, assists with luggage, and takes you to your destination via the fastest route.",
    detail: "Pay upon arrival — cash or bank transfer accepted.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">
            Simple Booking Process
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            How to Book Your Taxi Bhai
          </h2>
          <p className="text-gray-600">
            Book in 4 simple steps. No app required, no registration, no hassle.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, icon: Icon, title, desc, detail }) => (
            <div key={step} className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-green-100" />

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg shadow-green-700/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-white border-2 border-green-700 text-green-700 text-xs font-black rounded-full w-6 h-6 flex items-center justify-center">
                    {step.replace("0", "")}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{desc}</p>
                <p className="text-xs text-green-600 font-medium">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900 text-lg">Ready to book your taxi?</p>
            <p className="text-gray-600 text-sm">Most bookings confirmed within 5 minutes.</p>
          </div>
          <a
            href="https://wa.me/966573067785?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5" />
            Start WhatsApp Booking
          </a>
        </div>
      </div>
    </section>
  );
}
