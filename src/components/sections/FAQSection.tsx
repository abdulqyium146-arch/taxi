import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/types";

interface FAQSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  includeSchema?: boolean;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Taxi Bhai.",
  includeSchema = true,
}: FAQSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-white" id="faq">
      {includeSchema && <JsonLd data={buildFaqSchema(faqs)} />}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </header>
        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="border border-gray-200 rounded-xl overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary
                className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none select-none"
                itemProp="name"
              >
                {faq.question}
                <span className="text-2xl font-light text-green-700 leading-none flex-shrink-0 ml-4 open:rotate-45 transition-transform">+</span>
              </summary>
              <div
                className="px-5 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
