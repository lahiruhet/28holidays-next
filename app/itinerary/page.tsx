export default function ItineraryPage() {
  const tours = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      title: "Cultural Triangle Tour",
      days: "5 Days",
      description:
        "This tour focuses on the cultural highlights of Sri Lanka, including the ancient cities of Anuradhapura and Polonnaruwa, the Dambulla Cave Temples, and the Sigiriya Rock Fortress.",
    },
    {
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600",
      title: "Wildlife Safari Tour",
      days: "5 Days",
      description:
        "This tour takes you on safari in Yala National Park and Wilpattu National Park, two of the best places in the world to see elephants, leopards, and other wildlife.",
    },
    {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600",
      title: "Highlights of Sri Lanka",
      days: "5 Days",
      description:
        "This tour takes you to the best of Sri Lanka, including the ancient cities of Anuradhapura and Polonnaruwa, the hilltop fortress of Sigiriya, and the beautiful beaches of Bentota.",
    },
    {
      image: "https://images.unsplash.com/photo-1566402441483-c961eab5ad43?w=600",
      title: "Beach Vacation",
      days: "5 Days",
      description:
        "Relax and enjoy the sun and sand on Sri Lanka's beautiful beaches. This tour includes time in Bentota, Mirissa, or Tangalle.",
    },
    {
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600",
      title: "Active Adventure Tour",
      days: "5 Days",
      description:
        "This tour is for travelers who want to experience the best of Sri Lanka's active adventures. You'll go surfing in Mirissa, hiking in Horton Plains National Park, and white water rafting in Kitulgala.",
    },
    {
      image: "https://images.unsplash.com/photo-1584725040970-c63e78cf12f5?w=600",
      title: "Hill Country Tour",
      days: "5 Days",
      description:
        "This tour takes you to the scenic hill country of Sri Lanka, where you can visit tea plantations, national parks, and temples.",
    },
  ];

  return (
    <main className="w-full">
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-lora text-5xl font-bold text-gray-900 text-center mb-4">
            Tour itineraries
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>&gt;</span>
            <span>Itineraries</span>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-lora text-2xl font-semibold text-gray-900 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{tour.days}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {tour.description}
                  </p>
                  <button className="w-full border-2 border-gray-900 text-gray-900 py-2 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                    MORE DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              1
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              2
            </button>
            <button className="px-4 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              Next →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
