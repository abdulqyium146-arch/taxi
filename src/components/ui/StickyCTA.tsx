"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gray-900 border-t border-gray-700 px-4 py-3 flex gap-3">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white font-bold py-2.5 rounded-lg text-sm"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>
      <a
        href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 rounded-lg text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
}
