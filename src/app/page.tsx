import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/img/hero/hero-1.jpg"
            alt="Sri Lanka Stilt Fishermen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-lora font-medium mb-4">
            Explore<br />
            Sri Lanka<br />
            with us.
          </h1>
          <p className="text-lg max-w-md opacity-90 mb-6">
            Journey through Sri Lanka&apos;s ancient cities, lush tea plantations, and
            pristine beaches. Embrace an unforgettable Sri Lankan adventure today!
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
          </div>
        </div>
        {/* Quote Form Button */}
        <div className="absolute right-8 bottom-8 hidden lg:block">
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs">
            <p className="text-sm text-gray-600 mb-2">
              simply fill the form for your vehicle requirement
            </p>
            <button className="bg-[#0056D8] text-white px-4 py-2 rounded text-sm font-medium w-full hover:bg-[#0044aa]">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Vehicle Quote Request Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="section-label">RENT A VEHICLE</p>
            <h2 className="section-title">Vehicle Quote Request</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" required />
            <select>
              <option value="">Vehicle Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="van">Van</option>
              <option value="bus">Bus</option>
            </select>
            <select>
              <option value="">Select number of adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
            <select>
              <option value="">Select number of children</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="date" placeholder="From *" />
            <input type="date" placeholder="To *" />
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">+94</span>
              <input type="tel" placeholder="Phone Number *" className="flex-1" />
            </div>
            <input type="email" placeholder="Email Address *" />
            <div className="md:col-span-2">
              <textarea placeholder="Additional Notes" rows={4}></textarea>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-4">
              <button type="submit" className="btn-primary">
                SUBMIT NOW
              </button>
              <a
                href="https://wa.me/94788888761"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP US
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">ABOUT 28HOLIDAYS</p>
              <h2 className="section-title mb-6">
                Your Local Expert in<br />
                Sri Lankan Adventure
              </h2>
              <p className="text-gray-600 mb-4">
                28Holidays is a licensed and experienced tour guide company in Sri
                Lanka. We have been leading tours in this beautiful country for over 10
                years, and we are passionate about sharing its rich culture, history, and
                natural wonders with visitors from all over the world.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in creating customized tours that cater to your interests
                and budget. Whether you&apos;re looking for a cultural immersion
                experience, a thrilling adventure, or a relaxing beach vacation, our team
                can help you plan the perfect trip.
              </p>
              <Link
                href="/about"
                className="text-[#0056D8] font-medium hover:underline inline-flex items-center gap-2"
              >
                READ MORE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/img/about/about-1.jpg"
                alt="Sri Lanka Temple"
                width={300}
                height={250}
                className="rounded-lg object-cover w-full h-48"
              />
              <Image
                src="/img/about/about-2.jpg"
                alt="Sri Lanka Wildlife"
                width={300}
                height={250}
                className="rounded-lg object-cover w-full h-48"
              />
              <Image
                src="/img/about/about-4.jpg"
                alt="Sri Lanka Beach"
                width={300}
                height={250}
                className="rounded-lg object-cover w-full h-48 col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">WHAT WE DO</p>
            <h2 className="section-title">Discover Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-[#0056D8]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-lora font-semibold mb-2">Custom Tour Planning</h3>
              <p className="text-gray-600 text-sm">
                We can help you create the perfect Sri Lankan tour itinerary, tailored to
                your interests, budget, and time constraints.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-[#0056D8]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-lora font-semibold mb-2">Transportation Services</h3>
              <p className="text-gray-600 text-sm">
                We provide reliable and affordable transportation throughout Sri Lanka,
                including private car and driver, minibus, and train transfers.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-[#0056D8]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-lora font-semibold mb-2">Activity Reservations</h3>
              <p className="text-gray-600 text-sm">
                We can book all of your activities in advance, including safaris, cooking
                classes, cultural performances, and more.
              </p>
            </div>

            {/* Service 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-[#0056D8]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-lora font-semibold mb-2">Expert Tour Guiding</h3>
              <p className="text-gray-600 text-sm">
                We are an experienced and knowledgeable tour guides who will lead
                you on an unforgettable journey through Sri Lanka, sharing my insights
                and stories along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="section-title mb-8">What Customers Say?</h2>
          <blockquote className="text-gray-600 text-lg italic mb-6">
            &quot;28holidays allowed me to live a memorable experience in Sri Lanka. Well organized
            itinerary, guides always on point and truly satisfying overnight stays. Among other things,
            we explored ancient ruins, tea plantations and lots of beaches. Transportation was always
            on time and comfortable. Recommended!&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-medium">- Nicholas</p>
          <div className="mt-4 flex items-center justify-center">
            <Image
              src="/img/testimonial-logo.png"
              alt="TripAdvisor"
              width={120}
              height={30}
              className="opacity-70"
            />
          </div>
        </div>
      </section>

      {/* Itinerary Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">CHOOSE YOUR PACKAGE</p>
            <h2 className="section-title">Itinerary</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/img/itinerary/itinerary-1.webp"
                alt="Ancient Ruins"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/img/itinerary/itinerary-2.webp"
                alt="Local Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/img/itinerary/itinerary-3.webp"
                alt="Elephant Safari"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/img/itinerary/itinerary-4.webp"
                alt="Beach Paradise"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/itineraries" className="btn-primary inline-block">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4">
          <p className="section-label text-center">OUR PARTNER</p>
          <div className="flex items-center justify-center gap-12 mt-6">
            <Image
              src="/img/vitanova.webp"
              alt="VitaNova"
              width={120}
              height={40}
              className="opacity-70 grayscale hover:grayscale-0 transition-all"
            />
            <div className="text-gray-400 text-2xl font-bold">nidic</div>
          </div>
        </div>
      </section>
    </main>
  );
}
