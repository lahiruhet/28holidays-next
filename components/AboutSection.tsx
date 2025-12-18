import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide">
            ABOUT 28HOLIDAYS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Local Expert in
              <br />
              Sri Lanka Adventure
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              28Holidays is a licensed and experienced tour guide company in Sri
              Lanka. We have been leading tourists for over 10 years and
              specialize in offering personalized vacations with an emphasis
              on cultural immersion with various tours of your choice based
              on local experiences, nature, wildlife and adventure activities
              with expertise in offering personalized vacations with an
              emphasis on helping you plan the perfect trip.
            </p>
            <Link
              href="/about"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              READ MORE
            </Link>
          </div>

          {/* Right Image Collage */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2">
              <img
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600"
                alt="Sigiriya Rock"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
                alt="Cultural Dance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400"
                alt="Tea Plantation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 h-32">
              <img
                src="https://images.unsplash.com/photo-1568632234147-f6a6fa72a5d4?w=600"
                alt="Beach"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <img
                src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400"
                alt="Elephants"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1584725040970-c63e78cf12f5?w=400"
                alt="Temple"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
