import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { Users, CheckCircle, MessageCircle, Phone, Shield } from "lucide-react";
import type { FaqItem } from "@/lib/types";

const related = getRelatedContent("/services/family-taxi");

export const metadata: Metadata = {
  title: "Family Taxi & Maxi Cab Saudi Arabia – 7-Seater Taxi Van Hire",
  description:
    "Family-friendly maxi cab and taxi van service in Saudi Arabia for groups up to 7. Child seats, female-friendly options, Umrah family packages. Book a spacious cab: +966573067785.",
  keywords:
    "family taxi Saudi Arabia, maxi cab Saudi Arabia, taxi van Saudi Arabia, 7 seater taxi, group taxi Jeddah, minivan taxi Makkah, family transport Umrah, child seat taxi Saudi Arabia, female friendly taxi Saudi Arabia, cab for large group",
};

const familyFaqs: FaqItem[] = [
  {
    question: "What size vehicle can Taxi Bhai provide for a family of 6?",
    answer:
      "For a family of 6 with luggage, we recommend our 7-seater Toyota Hiace van or GMC Yukon SUV. Both comfortably seat 6–7 passengers with full luggage capacity. Specify group size and luggage count at booking.",
  },
  {
    question: "Are child car seats available in Taxi Bhai family taxis?",
    answer:
      "Yes. We provide child seats for infants and toddlers on request at no extra charge. Please specify the child's age and weight when booking so we can fit the correct seat size.",
  },
  {
    question: "Can a woman book a taxi without a male guardian in Saudi Arabia?",
    answer:
      "Yes. Saudi Arabia lifted the male guardian requirement for travel in 2018. Women can travel independently in Saudi Arabia. Taxi Bhai provides professional, respectful service for women traveling alone or in groups.",
  },
  {
    question: "Does Taxi Bhai offer Umrah packages for families?",
    answer:
      "Yes. Our family Umrah packages cover airport pickup, Miqat stop, Makkah hotel, Haram transfers, Madinah transfer, Ziyarat tours, and return to the airport — all in spacious family vehicles with child-friendly arrangements.",
  },
];

export default function FamilyTaxiPage() {
  return (
    <>
      <JsonLd data={buildServiceSchema({ name: "Family Taxi Service Saudi Arabia", description: "Spacious family taxi service in Saudi Arabia with minivans and SUVs for groups, child seats on request, and female-friendly travel arrangements for Umrah and Hajj families.", url: "/services/family-taxi", price: 120, areaServed: ["Jeddah", "Makkah", "Madinah", "Taif", "Badr"] })} />
      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Services", href: "/services" }, { name: "Family Taxi", href: "/services/family-taxi" }]} />
          <div className="flex items-start gap-4 mt-4">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0"><Users className="w-7 h-7 text-white" /></div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">Family Taxi Service – Saudi Arabia</h1>
              <p className="text-gray-300 text-lg max-w-2xl">Spacious, safe, family-friendly taxis for groups traveling across Saudi Arabia. Minivans up to 7 passengers, child seats available, female-friendly options for Umrah families.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Family Vehicle Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{ name: "Toyota Corolla/Hyundai", seats: "1–4 passengers", luggage: "3 bags", ideal: "Small family", price: "Economy" }, { name: "Toyota Camry/Lexus", seats: "1–4 passengers", luggage: "4 bags", ideal: "Couple/small family", price: "VIP" }, { name: "Toyota Hiace Van", seats: "Up to 12 passengers", luggage: "8–10 bags", ideal: "Large family/group", price: "Group rate" }].map((v) => (
                  <div key={v.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                    <p className="text-green-700 text-xs font-medium mb-2">{v.price}</p>
                    <div className="space-y-1 text-xs text-gray-600">
                      <p>👤 {v.seats}</p>
                      <p>🧳 {v.luggage}</p>
                      <p>✓ Ideal: {v.ideal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Family Travel Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Spacious vehicles — no cramped rides", "Child seats for infants and toddlers", "Child-friendly, patient drivers", "Female-friendly travel arrangements", "Extra luggage capacity for large groups", "Umrah family packages with all transfers", "Flexible stops for families with children", "Air-conditioned and well-maintained vans", "WhatsApp updates throughout journey", "Group pricing — more people = better value"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Safe Travel for Families in Saudi Arabia</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Saudi Arabia is one of the safest countries in the world for family travel, with very low crime rates and strict public order laws. Taxi Bhai prioritizes family safety with licensed drivers, maintained vehicles, and a 24/7 support team.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-2"><Shield className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" /><div className="text-xs text-gray-700"><strong>Family Safety Policy:</strong> All Taxi Bhai drivers are background-verified. For Umrah families, we can provide female-friendly driver arrangements. Child seats are fitted and checked before travel.</div></div>
                </div>
              </div>
            </section>
          </div>
          <div className="space-y-5">
            <div className="bg-blue-600 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-lg mb-1">Book Family Taxi</h3>
              <p className="text-blue-100 text-sm mb-5">Tell us: number of adults, children, and luggage.</p>
              <div className="space-y-3">
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%2C%20I%20need%20a%20family%20taxi%20booking.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-3 rounded-xl transition-colors"><MessageCircle className="w-5 h-5" />WhatsApp Now</a>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold w-full py-3 rounded-xl transition-colors"><Phone className="w-5 h-5" />{BUSINESS.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={familyFaqs} title="Family Taxi FAQ" subtitle="Questions about family and group taxi service in Saudi Arabia." />
      <RelatedContent
        services={related.services}
        cities={related.cities}
        routes={related.routes}
        blogs={related.blogs}
        faqs={related.faqs}
        heading="Related Family & Group Travel Services"
      />
    </>
  );
}
