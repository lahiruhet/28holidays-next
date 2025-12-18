import Image from "next/image";
import Link from "next/link";

const vehicles = [
  {
    image: "/img/cars/car-1.jpg",
    name: "Sedan",
    passengers: "1-3",
    luggage: "2 bags",
    price: "From $50/day",
  },
  {
    image: "/img/cars/car-2.jpg",
    name: "SUV",
    passengers: "1-5",
    luggage: "4 bags",
    price: "From $75/day",
  },
  {
    image: "/img/cars/car-6.jpg",
    name: "Van",
    passengers: "1-8",
    luggage: "6 bags",
    price: "From $100/day",
  },
  {
    image: "/img/cars/car-7.jpg",
    name: "Mini Bus",
    passengers: "1-15",
    luggage: "10+ bags",
    price: "From $150/day",
  },
];

export default function CarRentalPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Car Rental</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Car Rental</span>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">OUR FLEET</p>
            <h2 className="section-title">Choose Your Vehicle</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a range of well-maintained vehicles with experienced drivers to make your Sri Lankan journey comfortable and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-lora font-semibold mb-3">{vehicle.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0056D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {vehicle.passengers} passengers
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0056D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      {vehicle.luggage}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0056D8] font-semibold">{vehicle.price}</span>
                    <button className="btn-primary text-sm py-2 px-4">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="section-label">GET A QUOTE</p>
            <h2 className="section-title">Request Vehicle Quote</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" required />
            <select>
              <option value="">Vehicle Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="van">Van</option>
              <option value="bus">Mini Bus</option>
            </select>
            <input type="date" placeholder="Pick-up Date *" />
            <input type="date" placeholder="Drop-off Date *" />
            <input type="text" placeholder="Pick-up Location" />
            <input type="text" placeholder="Drop-off Location" />
            <input type="tel" placeholder="Phone Number *" />
            <input type="email" placeholder="Email Address *" />
            <div className="md:col-span-2">
              <textarea placeholder="Additional Requirements" rows={4}></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary">
                REQUEST QUOTE
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
