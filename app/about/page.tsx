import { FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-lora text-5xl font-bold text-gray-900 text-center mb-4">
            About Us
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>&gt;</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome To 28Holidays.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                28holidays is your personalized travel services in Sri Lanka.
                We know that your journey should be full of experiences to
                remember, and bigger still with a passion for exploring the
                wonders of this beautiful country.
              </p>
            </div>

            {/* Right Content - Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700">Tailored Tours and Itineraries</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700">Expert Local Guides</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700">Cultural Immersion Experiences</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700">Hassle-Free Travel Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700">Memorable Adventures</span>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500"
                alt="Your Guide Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-lora text-2xl font-semibold text-white">
                  Your Guide Services
                </h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=500"
                alt="Cultural Exploration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-lora text-2xl font-semibold text-white">
                  Cultural Exploration
                </h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500"
                alt="Customized Itineraries"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-lora text-2xl font-semibold text-white">
                  Customized Itineraries
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-white mb-4">
            Discover the Beauty of Sri Lanka
          </h2>
          <p className="text-white text-lg mb-8">
            Did you know that Sri Lanka was ranked the #1 destination to travel
            (Lonely Planet in 2019)
          </p>
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6 text-primary ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
              OUR EXPERIENCE
            </p>
            <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-900">
              Discover Our Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Image */}
            <div className="row-span-2">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700"
                alt="Sigiriya Rock"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Small Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1566402441483-c961eab5ad43?w=400"
                alt="Traditional Dance"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400"
                alt="Elephants"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Large Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700"
                alt="Fire Dance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
