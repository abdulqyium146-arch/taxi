import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "City to City Taxi Saudi Arabia",
  description: "Fixed-price city-to-city taxi service across Saudi Arabia.",
};

export default function CityToCityPage() {
  redirect("/services/intercity-taxi");
}
