import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    "Tailored Tours and Itineraries.",
    "Expert Local Guides.",
    "Cultural Immersion Experiences.",
    "Hassle-Free Travel Planning.",
    "Memorable Adventures.",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-lora font-medium mb-6">
                Welcome To 28Holidays.
              </h2>
              <p className="text-gray-600 mb-6">
                Established to provide exceptional tour guide services in Sri Lanka,
                28Holidays is your gateway to a unique travel experience. Our journey
                began with a passion for exploring the wonders of this beautiful country.
              </p>
            </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#0056D8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tour Guide Services */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-p1.webp"
                alt="Tour Guide Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-lora font-semibold">Tour Guide Services</h3>
              </div>
            </div>

            {/* Cultural Exploration */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-p2.jpg"
                alt="Cultural Exploration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-lora font-semibold">Cultural Exploration</h3>
              </div>
            </div>

            {/* Customized Itineraries */}
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-p3.jpg"
                alt="Customized Itineraries"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-lora font-semibold">Customized Itineraries</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Banner Section */}
      <section className="relative h-[400px] my-16">
        <div className="absolute inset-0">
          <Image
            src="/img/video-bg.jpg"
            alt="Sri Lanka Landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
          <p className="text-sm uppercase tracking-widest mb-4">Discover the Beauty of</p>
          <h2 className="text-4xl md:text-5xl font-lora font-medium mb-6">Sri Lanka</h2>
          <p className="text-sm opacity-80 mb-8 max-w-lg px-4">
            Did you know that Sri Lanka was ranked as the #1 destination by Lonely Planet in 2019?
          </p>
          <button className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-colors">
            <Image
              src="/img/play.png"
              alt="Play"
              width={32}
              height={32}
              className="ml-1"
            />
          </button>
        </div>
      </section>

      {/* Our Experiences Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">OUR ADVENTURES</p>
            <h2 className="section-title">Discover Our Experiences</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Image */}
            <div className="relative h-80 rounded-xl overflow-hidden group col-span-1 row-span-2">
              <Image
                src="/img/about/about-5.jpg"
                alt="Beach Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Fire Dance */}
            <div className="relative h-36 rounded-xl overflow-hidden group col-span-2">
              <Image
                src="/img/about/about-10.jpg"
                alt="Fire Dance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Small Images */}
            <div className="relative h-36 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-11.jpg"
                alt="Safari"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative h-36 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-12.jpg"
                alt="Adventure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative h-36 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-13.jpg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative h-36 rounded-xl overflow-hidden group">
              <Image
                src="/img/about/about-14.jpg"
                alt="Nature"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
