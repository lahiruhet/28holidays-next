import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    image: "/img/gallery/gallery-1.jpg",
    title: "Exploring Sigiriya Rock Fortress",
    category: "SRI LANKAN ADVENTURE",
    date: "15th April, 2019",
  },
  {
    image: "/img/gallery/gallery-2.jpg",
    title: "Tea Plantation Experience in Nuwara Eliya",
    category: "NATURE RETREAT",
    date: "18th April, 2019",
  },
  {
    image: "/img/gallery/gallery-3.jpg",
    title: "Discovering Ancient Anuradhapura",
    category: "CULTURAL HERITAGE",
    date: "20th April, 2019",
  },
  {
    image: "/img/gallery/gallery-4.jpg",
    title: "Relaxing on the Beaches of Mirissa",
    category: "TROPICAL PARADISE",
    date: "22nd April, 2019",
  },
  {
    image: "/img/blog/blog-1.jpg",
    title: "Yala National Park Adventure",
    category: "WILDLIFE SAFARI",
    date: "25th April, 2019",
  },
  {
    image: "/img/blog/blog-2.jpg",
    title: "Hiking in Ella's Green Valley",
    category: "HILL COUNTRY BLISS",
    date: "28th April, 2019",
  },
  {
    image: "/img/blog/blog-4.jpg",
    title: "Galle Fort and Its History",
    category: "COLONIAL CHARM",
    date: "1st May, 2019",
  },
  {
    image: "/img/blog/blog-5.jpg",
    title: "Kandy's Temple of the Tooth Relic",
    category: "SACRED SITES",
    date: "5th April, 2019",
  },
  {
    image: "/img/blog/blog-6.jpg",
    title: "Discovering the Charms of Colombo",
    category: "URBAN EXPLORATION",
    date: "1st May, 2019",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Gallery</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0056D8] text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-lora font-semibold mb-2 group-hover:text-[#0056D8] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
