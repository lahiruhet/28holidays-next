import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            TESTIMONIALS
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Customers Say?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            28Holidays allowed me to have a tremendously positive trip to Sri Lanka. Well organized
            and very guides always on point and firm while keeping their sense of humor. Arriving after long
            travels and with the troubles of Covid, they were able to accommodate and rearrange the
            diverse and comfortable. Recommended!
          </p>

          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl" />
            ))}
          </div>

          <p className="font-semibold text-gray-900">- Nicholas</p>

          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=100"
              alt="TripAdvisor"
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
