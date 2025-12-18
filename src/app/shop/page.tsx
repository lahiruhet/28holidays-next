import Image from "next/image";
import Link from "next/link";

const products = [
  {
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
    name: "Ceylon Tea Collection",
    price: "$25.00",
    category: "Tea & Spices",
  },
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    name: "Sri Lankan Spice Box",
    price: "$35.00",
    category: "Tea & Spices",
  },
  {
    image: "https://images.unsplash.com/photo-1602532305019-3dbbd482dae9?w=600&q=80",
    name: "Handcrafted Wooden Elephant",
    price: "$45.00",
    category: "Handicrafts",
  },
  {
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=600&q=80",
    name: "Traditional Batik Fabric",
    price: "$30.00",
    category: "Textiles",
  },
  {
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=600&q=80",
    name: "Ceylon Cinnamon Sticks",
    price: "$15.00",
    category: "Tea & Spices",
  },
  {
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80",
    name: "Handwoven Basket Set",
    price: "$40.00",
    category: "Handicrafts",
  },
];

export default function ShopPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Shop</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">AUTHENTIC SRI LANKAN</p>
            <h2 className="section-title">Souvenirs & Products</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Take a piece of Sri Lanka home with you. Browse our collection of authentic local products, handcrafted souvenirs, and traditional items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#0056D8] text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-lora font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0056D8] text-xl font-semibold">{product.price}</span>
                    <button className="bg-gray-100 hover:bg-[#0056D8] hover:text-white text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium text-sm">
                      Add to Cart
                    </button>
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
