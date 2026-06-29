import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taxi Bhai – Saudi Arabia Taxi Service",
    short_name: "Taxi Bhai",
    description: "24/7 professional taxi service across Saudi Arabia. Airport transfers, Umrah taxi, Ziyarat tours, intercity routes.",
    start_url: "/",
    display: "standalone",
    background_color: "#006C35",
    theme_color: "#006C35",
    orientation: "portrait",
    categories: ["travel", "transportation"],
    lang: "en",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      {
        name: "Book on WhatsApp",
        url: "https://wa.me/966573067785?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.",
        description: "Book your taxi via WhatsApp",
      },
      {
        name: "Airport Transfer",
        url: "/services/airport-transfer",
        description: "Book airport transfer from KAIA Jeddah",
      },
    ],
  };
}
