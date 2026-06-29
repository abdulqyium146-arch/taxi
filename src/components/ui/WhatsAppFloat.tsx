"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-105 group"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="w-5 h-5" fill="white" />
      <span className="text-sm font-bold hidden group-hover:inline md:inline">Book on WhatsApp</span>
    </a>
  );
}
