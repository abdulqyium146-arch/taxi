import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Taxi Bhai – Book Your Saudi Taxi Now",
  description:
    "Contact Taxi Bhai 24/7. WhatsApp or call +966573067785 to book airport transfers, Umrah taxi, Ziyarat tours, and intercity rides across Saudi Arabia.",
  keywords:
    "contact Taxi Bhai, book Saudi taxi, Taxi Bhai phone number, Taxi Bhai WhatsApp, Jeddah taxi booking",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />

      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black mb-4">Contact Taxi Bhai</h1>
            <p className="text-gray-300 text-lg">Available 24/7. Most WhatsApp bookings confirmed within 5 minutes.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact methods */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black text-gray-900 mb-5">Get in Touch</h2>

            <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-green-50 border border-green-200 hover:border-green-500 rounded-2xl p-5 transition-all group">
              <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0"><MessageCircle className="w-7 h-7 text-white" /></div>
              <div>
                <p className="font-black text-gray-900 text-base">WhatsApp – Fastest Response</p>
                <p className="text-green-700 font-bold">{BUSINESS.whatsapp}</p>
                <p className="text-gray-500 text-xs mt-0.5">Typically responds within 5 minutes. 24/7.</p>
              </div>
            </a>

            <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-4 bg-gray-50 border border-gray-200 hover:border-green-400 rounded-2xl p-5 transition-all">
              <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-7 h-7 text-white" /></div>
              <div>
                <p className="font-black text-gray-900 text-base">Call Us Directly</p>
                <p className="text-green-700 font-bold">{BUSINESS.phone}</p>
                <p className="text-gray-500 text-xs mt-0.5">Available 24/7. Speak to our team directly.</p>
              </div>
            </a>

            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 bg-gray-50 border border-gray-200 hover:border-green-400 rounded-2xl p-5 transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-7 h-7 text-white" /></div>
              <div>
                <p className="font-black text-gray-900 text-base">Email Us</p>
                <p className="text-blue-700 font-bold">{BUSINESS.email}</p>
                <p className="text-gray-500 text-xs mt-0.5">For corporate inquiries. Response within 24 hours.</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-7 h-7 text-gray-600" /></div>
              <div>
                <p className="font-black text-gray-900 text-base">Service Headquarters</p>
                <p className="text-gray-700 font-medium">{BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}</p>
                <p className="text-gray-500 text-xs mt-0.5">Serving Jeddah · Makkah · Madinah · Taif · Badr</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl p-5">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0"><Clock className="w-7 h-7 text-green-700" /></div>
              <div>
                <p className="font-black text-gray-900 text-base">Operating Hours</p>
                <p className="text-green-700 font-bold">24 hours, 7 days a week</p>
                <p className="text-gray-500 text-xs mt-0.5">Including Ramadan, Hajj season, Eid, and public holidays.</p>
              </div>
            </div>
          </div>

          {/* Booking info */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-5">What to Include When Booking</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              {[
                { step: "1", title: "Your Pickup Location", desc: "Hotel name, airport terminal, or specific address in the city." },
                { step: "2", title: "Your Destination", desc: "City and specific address or hotel name at the destination." },
                { step: "3", title: "Date & Time", desc: "Exact date and time for pickup. For airport pickups, include your flight number." },
                { step: "4", title: "Number of Passengers", desc: "Total adults and children. Helps us assign the right vehicle size." },
                { step: "5", title: "Luggage Amount", desc: "Number of suitcases/bags. Important for vehicle selection." },
                { step: "6", title: "Special Requirements", desc: "Child seat, Miqat stop for Umrah, VIP vehicle, female-friendly driver, etc." },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="w-8 h-8 bg-green-700 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-green-700 rounded-2xl p-5 text-white">
              <h3 className="font-black text-lg mb-2">Ready to Book?</h3>
              <p className="text-green-100 text-sm mb-4">Send us your booking details on WhatsApp for the fastest response.</p>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.%0A%0APickup%3A%20%0ADestination%3A%20%0ADate%20%26%20Time%3A%20%0APassengers%3A%20%0ALuggage%3A%20`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Open WhatsApp Booking Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
