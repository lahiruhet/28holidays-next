import type { MetadataRoute } from "next";
import { vehicles } from "@/data/vehicles";
import { itineraries } from "@/lib/itineraries";

const siteUrl = "https://www.28holidays.com";
const lastModified = new Date("2026-06-24");

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/itineraries", changeFrequency: "weekly", priority: 0.9 },
  { path: "/car-rental", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/shop", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cancellation-policy", changeFrequency: "yearly", priority: 0.3 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const itineraryEntries = itineraries.map((itinerary) => ({
    url: `${siteUrl}/itineraries/${itinerary.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const vehicleEntries = vehicles.map((vehicle) => ({
    url: `${siteUrl}/car-rental/${vehicle.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...itineraryEntries, ...vehicleEntries];
}
