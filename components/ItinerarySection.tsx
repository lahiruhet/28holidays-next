import Link from "next/link";

const ItinerarySection = () => {
  const itineraries = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      title: "Ancient Ruins",
    },
    {
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=500",
      title: "Wildlife Safari",
    },
    {
      image: "https://images.unsplash.com/photo-1566402441483-c961eab5ad43?w=500",
      title: "Leopard Spotting",
    },
    {
      image: "https://images.unsplash.com/photo-1584725040970-c63e78cf12f5?w=500",
      title: "Train Journey",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            CHOOSE YOUR PACKAGE
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-900">
            Itinerary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {itineraries.map((item, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="font-lora text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/itinerary"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
