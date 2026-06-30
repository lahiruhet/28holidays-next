"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/img/hero/private-transport.webp",
    alt: "Private transport service in Sri Lanka",
    title: "Private Transport",
    mainText: "Rent a Car with Driver",
    subtext:
      "Explore Sri Lanka in comfort with our professional, reliable drivers at your service.",
  },
  {
    src: "/img/hero/clear-pricing.webp",
    alt: "Clear and transparent daily pricing for car rental",
    title: "Clear Pricing",
    mainText: "$65 Per Day",
    subtext:
      "Enjoy a premium travel experience with transparent, flat-rate pricing and no hidden fees.",
  },
  {
    src: "/img/hero/personalized-travel.webp",
    alt: "Personalized travel itinerary with private vehicle",
    title: "Personalized Travel",
    mainText: "Plan Your Own Itinerary - We Provide the Vehicle",
    subtext:
      "You decide the route and the pace; we provide the ride to make your dream trip a reality.",
  },
];

export default function HomeHero() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const activeHeroSlide = HERO_SLIDES[activeHeroIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      <Image
        key={activeHeroSlide.src}
        src={activeHeroSlide.src}
        alt={activeHeroSlide.alt}
        fill
        priority={activeHeroIndex === 0}
        quality={72}
        sizes="100vw"
        className="object-cover hero-image"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="text-white md:max-w-lg lg:max-w-xl">
          <p className="text-sm md:text-base tracking-[0.15em] uppercase opacity-90 mb-3 text-left">
            {activeHeroSlide.title}
          </p>
          <h1 className="text-4xl md:text-5xl font-lora font-medium mb-4 text-left leading-tight">
            {activeHeroSlide.mainText}
          </h1>
          <p className="text-lg opacity-90 mb-6 text-left">
            {activeHeroSlide.subtext}
          </p>
          <Link href="/car-rental#quote-form" className="btn-primary inline-block mb-2">
            RENT A VEHICLE
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show hero slide ${index + 1}`}
              onClick={() => setActiveHeroIndex(index)}
              className={`transition-all duration-300 ${
                index === activeHeroIndex
                  ? "w-8 h-2 rounded-full bg-white"
                  : "w-2 h-2 rounded-full bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-8 bottom-8 hidden lg:block">
        <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs">
          <p className="text-sm text-gray-600 mb-2">
            simply fill the form for your vehicle requirement
          </p>
          <Link
            href="/car-rental#quote-form"
            className="bg-[#0056D8] text-white px-4 py-2 rounded text-sm font-medium w-full hover:bg-[#0044aa] inline-block text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
