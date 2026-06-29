import type { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy – Taxi Bhai Saudi Arabia",
  description: "Privacy policy for Taxi Bhai Saudi Arabia taxi service.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <h1 className="text-3xl font-black text-gray-900 mt-4 mb-6">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-4">
        <p><strong>Last updated:</strong> June 2025</p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Information We Collect</h2>
        <p>When you book a taxi with Taxi Bhai, we collect: your name, phone number, WhatsApp number, pickup and drop-off locations, travel date and time, and number of passengers. This information is used solely to arrange and complete your taxi booking.</p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">How We Use Your Information</h2>
        <p>Your personal information is used to: confirm your booking, assign a driver, send trip updates, and communicate any changes. We do not sell, share, or distribute your personal data to third parties.</p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Data Retention</h2>
        <p>Booking records are retained for 12 months for operational purposes. WhatsApp conversations may be stored for up to 12 months for service quality review.</p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Contact</h2>
        <p>For privacy-related questions, contact us at taxibhai.sa@gmail.com or WhatsApp +966573067785.</p>
      </div>
    </div>
  );
}
