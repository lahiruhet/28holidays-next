import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    image: "/img/room/room-1.jpg",
    title: "Cultural Triangle Tour",
    duration: "5 Days",
    description: "This tour focuses on the cultural highlights of Sri Lanka, including the ancient cities of Anuradhapura and Polonnaruwa, the Dambulla Cave Temples, and the Sigiriya Rock Fortress.",
  },
  {
    image: "/img/room/room-2.jpg",
    title: "Wildlife Safari Tour",
    duration: "5 Days",
    description: "This tour takes you on safari in Yala National Park and Wilpattu National Park, two of the best places in the world to see elephants, leopards, and other wildlife.",
  },
  {
    image: "/img/room/room-3.jpg",
    title: "Highlights of Sri Lanka",
    duration: "5 Days",
    description: "This tour takes you to the best of Sri Lanka, including the ancient cities of Anuradhapura and Polonnaruwa, the hilltop fortress of Sigiriya, and the beautiful beaches of Bentota.",
  },
  {
    image: "/img/room/room-4.jpg",
    title: "Beach Vacation",
    duration: "5 Days",
    description: "Relax and enjoy the sun and sand on Sri Lanka's beautiful beaches. This tour includes time in Bentota, Mirissa, or Tangalle.",
  },
  {
    image: "/img/room/room-5.jpg",
    title: "Active Adventure Tour",
    duration: "5 Days",
    description: "This tour is for travelers who want to experience the best of Sri Lanka's active adventures. You'll go surfing in Mirissa, hiking in Horton Plains National Park, and white water rafting in Kitulgala.",
  },
  {
    image: "/img/room/room-6.jpg",
    title: "Hill Country Tour",
    duration: "5 Days",
    description: "This tour takes you to the scenic hill country of Sri Lanka, where you can visit tea plantations, national parks, and temples.",
  },
];

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
            {tours.map((tour, index) => (
              <div key={index} className="group">
                <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-2 group-hover:text-[#0056D8] transition-colors">
                  {tour.title}
                </h3>
                <p className="text-[#0056D8] font-medium mb-3">{tour.duration}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {tour.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#0056D8] transition-colors uppercase tracking-wider"
                >
                  MORE DETAILS
                  <span className="border-b-2 border-current w-6"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0056D8] hover:text-white hover:border-[#0056D8] transition-colors font-medium">
              1
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0056D8] hover:text-white hover:border-[#0056D8] transition-colors font-medium">
              2
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-[#0056D8] hover:text-white hover:border-[#0056D8] transition-colors font-medium">
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
