import Link from "next/link";
import ItineraryCard from "@/components/ItineraryCard";
import { itineraries } from "@/lib/itineraries";

export default function ItinerariesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Tour itineraries</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Itineraries</span>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
