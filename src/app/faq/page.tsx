import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import { GLOBAL_FAQS, AIRPORT_FAQS, UMRAH_FAQS, ZIYARAT_FAQS, INTERCITY_FAQS } from "@/lib/faqs";
import { BUSINESS } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { MessageCircle, Phone } from "lucide-react";

const related = getRelatedContent("/faq");

export const metadata: Metadata = {
  title: "Taxi FAQ – Book a Cab Near Me in Saudi Arabia | Taxi Bhai",
  description:
    "Answers to common questions: taxi near me Saudi Arabia, airport taxi booking, long distance cab prices, 24/7 cab service, Umrah transport, outstation taxi. WhatsApp or call +966573067785.",
  keywords:
    "taxi near me FAQ, cab booking Saudi Arabia, taxi prices Saudi Arabia, airport taxi questions, long distance taxi FAQ, 24 hour taxi near me, taxi service near me, how to book taxi Saudi Arabia, taxi phone number Saudi Arabia",
};

const allFaqSections = [
  { title: "General Questions", faqs: GLOBAL_FAQS },
  { title: "Airport Transfer Questions", faqs: AIRPORT_FAQS },
  { title: "Umrah Taxi Questions", faqs: UMRAH_FAQS },
  { title: "Ziyarat Taxi Questions", faqs: ZIYARAT_FAQS },
  { title: "Intercity Taxi Questions", faqs: INTERCITY_FAQS },
];

export default function FaqPage() {
  const allFaqs = allFaqSections.flatMap((s) => s.faqs);

  return (
    <>
      <JsonLd data={buildFaqSchema(allFaqs)} />

      <div className="bg-gray-900 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "FAQ", href: "/faq" }]} />
          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-300 text-lg">Everything you need to know about booking Taxi Bhai across Saudi Arabia.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {allFaqSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-black text-gray-900 mb-5 pb-3 border-b border-gray-200">{section.title}</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {section.faqs.map((faq) => (
                <details key={faq.question} className="border border-gray-200 rounded-xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none select-none bg-white" itemProp="name">
                    {faq.question}
                    <span className="text-2xl font-light text-green-700 leading-none flex-shrink-0 ml-4">+</span>
                  </summary>
                  <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="font-black text-gray-900 text-xl mb-2">Still have a question?</h2>
          <p className="text-gray-600 text-sm mb-5">Our team responds on WhatsApp within minutes, 24/7.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`https://wa.me/${BUSINESS.whatsapp.replace("+","")}?text=Hi%2C%20I%20have%20a%20question%20about%20Taxi%20Bhai.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              <MessageCircle className="w-4 h-4" />WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              <Phone className="w-4 h-4" />Call Now
            </a>
          </div>
        </div>
      </div>
      <RelatedContent
        services={related.services}
        routes={related.routes}
        cities={related.cities}
        heading="Explore Our Services"
      />
    </>
  );
}
