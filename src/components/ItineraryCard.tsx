import Image from "next/image";
import Link from "next/link";
import type { Itinerary } from "@/lib/itineraries";

type ItineraryCardProps = {
  itinerary: Itinerary;
};

export default function ItineraryCard({ itinerary }: ItineraryCardProps) {
  const imageUrl =
    itinerary.listing_image_url || itinerary.detail_image_urls?.[0] || "/img/room/room-1.jpg";

  return (
    <div className="group">
      <div className="relative h-56 rounded-xl overflow-hidden mb-4">
        <Image
          src={imageUrl}
          alt={itinerary.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-lora font-semibold mb-2 group-hover:text-[#0056D8] transition-colors">
        {itinerary.title}
      </h3>
      <div className="mb-3">
        <p className="text-[#0056D8] font-medium">{itinerary.duration}</p>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{itinerary.summary}</p>
      <div className="flex items-center justify-between gap-3">
        <Link
          href={`/itineraries/${itinerary.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#0056D8] transition-colors uppercase tracking-wider"
        >
          VIEW ITINERARY
          <span className="border-b-2 border-current w-6" />
        </Link>
        <Link
          href={`/contact?tour=${encodeURIComponent(itinerary.title)}`}
          className="text-xs font-semibold text-[#0056D8] hover:underline uppercase tracking-wider"
        >
          Inquire
        </Link>
      </div>
    </div>
  );
}

