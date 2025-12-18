import Hero from "@/components/Hero";
import VehicleQuoteForm from "@/components/VehicleQuoteForm";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ItinerarySection from "@/components/ItinerarySection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <VehicleQuoteForm />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ItinerarySection />
      <PartnersSection />
    </main>
  );
}
