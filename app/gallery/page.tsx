export default function GalleryPage() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      category: "NATURAL ADVENTURE",
      title: "Exploring Sigiriya Rock",
      date: "MAY 15TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600",
      category: "SCENIC BEAUTY",
      title: "Tea Plantation Experience",
      date: "JUNE 3RD, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=600",
      category: "SCENIC BEAUTY",
      title: "Discovering Ancient Temples",
      date: "APRIL 20TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1568632234147-f6a6fa72a5d4?w=600",
      category: "SCENIC BEAUTY",
      title: "Relaxing on the Beaches of Mirissa",
      date: "JULY 8TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1566402441483-c961eab5ad43?w=600",
      category: "WILDLIFE",
      title: "Yala National Park Adventure",
      date: "MAY 25TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1584725040970-c63e78cf12f5?w=600",
      category: "SCENIC BEAUTY",
      title: "Hiking in Ella's Green Beauty",
      date: "AUGUST 12TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600",
      category: "SCENIC BEAUTY",
      title: "Galle Fort and Its History",
      date: "MARCH 14TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600",
      category: "WILDLIFE",
      title: "Elephant Safari: Up Close and Personal",
      date: "JUNE 18TH, 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      category: "SCENIC BEAUTY",
      title: "Exploring the Charms of Colombo",
      date: "APRIL 5TH, 2023",
    },
  ];

  return (
    <main className="w-full">
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-lora text-5xl font-bold text-gray-900 text-center mb-4">
            Gallery
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>&gt;</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-3 w-fit">
                    {item.category}
                  </span>
                  <h3 className="font-lora text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
