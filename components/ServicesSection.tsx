import { FaPlane, FaCar, FaHiking, FaCompass } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaPlane className="text-4xl text-primary" />,
      title: "Custom Tour Planning",
      description: "We can provide favorable Car, Hotel, tour itinerary, tailored to your interests, budget, and time constraints.",
    },
    {
      icon: <FaCar className="text-4xl text-primary" />,
      title: "Transportation Services",
      description: "We provide reliable and efficient transportation services in Sri Lanka, including private and deluxe vehicles, and train transfers.",
    },
    {
      icon: <FaHiking className="text-4xl text-primary" />,
      title: "Activity Reservations",
      description: "We can book all of your activities in advance, including diving, surfing, elephant safaris, cultural performances, and white water rafting.",
    },
    {
      icon: <FaCompass className="text-4xl text-primary" />,
      title: "Expert Tour Guiding",
      description: "We are an experienced and knowledgeable tour guides who will lead you on an unforgettable journey through Sri Lanka, sharing insights and stories.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            DISCOVER ALL WE DO
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-900">
            Discover Servikan Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="font-lora text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
