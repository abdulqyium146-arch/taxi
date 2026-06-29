import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-green-700 mb-4">404</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. But your taxi is still available 24/7!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-xl transition-colors">
            <MapPin className="w-4 h-4" />Back to Home
          </Link>
          <a href="https://wa.me/966573067785?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-5 py-3 rounded-xl transition-colors">
            <MessageCircle className="w-4 h-4" />Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
