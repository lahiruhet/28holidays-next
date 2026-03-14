"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CountryCodePicker from "@/components/CountryCodePicker";
import { useCountryCodes } from "@/hooks/useCountryCodes";

const WHATSAPP_NUMBER = "94788888761";
const QUOTE_EMAIL = "info@28holidays.com";
const HERO_SLIDES = [
  {
    src: "/img/hero/Private Transport.jpg",
    alt: "Private transport service in Sri Lanka",
    title: "Private Transport",
    mainText: "Rent a Car with Driver",
    subtext:
      "Explore Sri Lanka in comfort with our professional, reliable drivers at your service.",
  },
  {
    src: "/img/hero/Clear Pricing.jpg",
    alt: "Clear and transparent daily pricing for car rental",
    title: "Clear Pricing",
    mainText: "$65 Per Day",
    subtext:
      "Enjoy a premium travel experience with transparent, flat-rate pricing and no hidden fees.",
  },
  {
    src: "/img/hero/Personalized Travel.jpg",
    alt: "Personalized travel itinerary with private vehicle",
    title: "Personalized Travel",
    mainText: "Plan Your Own Itinerary - We Provide the Vehicle",
    subtext:
      "You decide the route and the pace; we provide the ride to make your dream trip a reality.",
  },
];
type TripadvisorReview = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

const FALLBACK_TESTIMONIALS: TripadvisorReview[] = [
  {
    author: "Nicholas",
    rating: 5,
    text:
      "28holidays allowed me to live a memorable experience in Sri Lanka. Well organized itinerary, guides always on point and truly satisfying overnight stays. Among other things, we explored ancient ruins, tea plantations and lots of beaches. Transportation was always on time and comfortable. Recommended!",
    date: "",
  },
];

const ITINERARY_PREVIEW = [
  {
    src: "/img/itinerary/itinerary-1.webp",
    name: "Ancient Ruins Tour",
    description: "Walk through timeless kingdoms and sacred heritage sites across the island.",
  },
  {
    src: "/img/itinerary/itinerary-2.webp",
    name: "Local Culture Escape",
    description: "Experience village life, traditional food, and authentic Sri Lankan hospitality.",
  },
  {
    src: "/img/itinerary/itinerary-3.webp",
    name: "Elephant Safari Trail",
    description: "Track wildlife in national parks with unforgettable elephant sightings.",
  },
  {
    src: "/img/itinerary/itinerary-4.webp",
    name: "Beach Paradise Journey",
    description: "Unwind along tropical shores with sunsets, surf, and oceanfront stays.",
  },
];

function formatReviewDate(date: string) {
  if (!date) {
    return "TripAdvisor review";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
}

export default function Home() {
  const quoteFormRef = useRef<HTMLFormElement>(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [tripadvisorReviews, setTripadvisorReviews] = useState<TripadvisorReview[]>([]);
  const countryCodes = useCountryCodes();
  const activeHeroSlide = HERO_SLIDES[activeHeroIndex];
<<<<<<< HEAD
  const testimonialReviews = tripadvisorReviews.length > 0 ? tripadvisorReviews : FALLBACK_TESTIMONIALS;
=======
>>>>>>> 0c63875 (changed hero text and images)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadTripadvisorReviews = async () => {
      try {
        const response = await fetch("/api/tripadvisor-reviews");

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as TripadvisorReview[];

        if (!isCancelled && Array.isArray(data) && data.length > 0) {
          setTripadvisorReviews(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Unable to load TripAdvisor reviews", error);
      }
    };

    void loadTripadvisorReviews();

    return () => {
      isCancelled = true;
    };
  }, []);

  const submitQuote = (channel: "whatsapp" | "email") => {
    const form = quoteFormRef.current;
    if (!form || !form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const vehicleType = (data.get("vehicleType") as string) || "";
    const adults = (data.get("adults") as string) || "";
    const children = (data.get("children") as string) || "";
    const fromDate = (data.get("fromDate") as string) || "";
    const toDate = (data.get("toDate") as string) || "";
    const countryCode = (data.get("countryCode") as string) || "+94";
    const phone = (data.get("phone") as string) || "";
    const email = (data.get("email") as string) || "";
    const notes = (data.get("notes") as string) || "";

    const message = [
      "Vehicle Quote Request (Home Page)",
      "",
      `Name: ${name}`,
      `Vehicle Type: ${vehicleType}`,
      `Adults: ${adults}`,
      `Children: ${children}`,
      `From: ${fromDate}`,
      `To: ${toDate}`,
      `Phone: ${countryCode} ${phone}`,
      `Email: ${email}`,
      `Additional Notes: ${notes || "-"}`,
    ].join("\n");

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
        "Vehicle Quote Request - 28Holidays",
      )}&body=${encodeURIComponent(message)}`;
    }

    form.reset();
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${index === activeHeroIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="text-white md:max-w-lg lg:max-w-xl">
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-lora font-medium mb-4 text-left">
              {activeHeroSlide.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-lg opacity-90 mb-6 text-left">{activeHeroSlide.body}</p>
            <Link href={activeHeroSlide.ctaHref} className="btn-primary inline-block mb-2">
              {activeHeroSlide.ctaLabel}
=======
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
>>>>>>> 0c63875 (changed hero text and images)
      </Link>
    </div>
        </div >
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
      <div className="flex items-center gap-2">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show hero slide ${index + 1}`}
            onClick={() => setActiveHeroIndex(index)}
            className={`transition-all duration-300 ${index === activeHeroIndex
              ? "w-8 h-2 rounded-full bg-white"
              : "w-2 h-2 rounded-full bg-white/60 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </div>
  {/* Quote Form Button */ }
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
      </section >

    {/* Vehicle Quote Request Section */ }
    < section id = "vehicle-quote" className = "py-16 bg-white" >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="section-label">RENT A VEHICLE</p>
          <h2 className="section-title">Vehicle Quote Request</h2>
        </div>
        <form ref={quoteFormRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name *" className="form-control" required />
          <select name="vehicleType" defaultValue="" className="form-control" required>
            <option value="">Vehicle Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
            <option value="bus">Bus</option>
          </select>
          <select name="adults" defaultValue="" className="form-control" required>
            <option value="">Select number of adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
          <select name="children" defaultValue="" className="form-control" required>
            <option value="">Select number of children</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label className="form-field">
            <span className="form-label">Travel start date *</span>
            <input id="fromDate" type="date" name="fromDate" className="form-control" required />
          </label>
          <label className="form-field">
            <span className="form-label">Travel end date *</span>
            <input id="toDate" type="date" name="toDate" className="form-control" required />
          </label>
          <div className="form-phone-grid">
            <CountryCodePicker name="countryCode" options={countryCodes} defaultValue="+94" ariaLabel="Country code" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              className="form-control min-w-0"
              required
            />
          </div>
          <input type="email" name="email" placeholder="Email Address *" className="form-control" required />
          <div className="md:col-span-2">
            <textarea name="notes" placeholder="Additional Notes" className="form-control" rows={4}></textarea>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="btn-whatsapp justify-center sm:min-w-[220px]"
              onClick={() => submitQuote("whatsapp")}
            >
              SEND VIA WHATSAPP
            </button>
            <button
              type="button"
              className="btn-primary sm:min-w-[220px]"
              onClick={() => submitQuote("email")}
            >
              SEND VIA EMAIL
            </button>
          </div>
        </form>
      </div>
      </section >

    {/* About Section */ }
    < section className = "py-16 bg-gray-50" >
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
          <div className="about-collage" aria-label="Sri Lanka adventure collage">
            <div className="about-collage-item about-collage-item1" />
            <div className="about-collage-item about-collage-item2" />
            <div className="about-collage-item about-collage-item3" />
            <div className="about-collage-item about-collage-item4" />
            <div className="about-collage-item about-collage-item5" />
            <div className="about-collage-item about-collage-item6" />
            <div className="about-collage-item about-collage-item7" />
            <div className="about-collage-item about-collage-item8" />
          </div>
        </div>
      </div>
      </section >

    {/* Services Section */ }
    < section className = "py-16 bg-white" >
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
      </section >

    {/* Testimonials Section */ }
    < section className = "py-16 bg-gray-50" >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="section-title">What Customers Say?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonialReviews.map((review) => (
            <article
              key={`${review.author}-${review.date || review.text.slice(0, 24)}`}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < Math.max(1, Math.min(5, Math.round(review.rating)))
                        ? "text-yellow-400"
                        : "text-gray-200"
                        }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">
                  {formatReviewDate(review.date)}
                </p>
              </div>
              <blockquote className="text-gray-600 italic leading-7 mb-6">
                &quot;{review.text}&quot;
              </blockquote>
              <p className="font-medium text-slate-900">- {review.author}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Image
            src="/img/testimonial-logo.png"
            alt="TripAdvisor"
            width={120}
            height={30}
            className="opacity-70"
          />
        </div>
      </div>
      </section >

    {/* Itinerary Preview Section */ }
    < section className = "py-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-label">CHOOSE YOUR PACKAGE</p>
          <h2 className="section-title">Itinerary</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ITINERARY_PREVIEW.map((item) => (
            <div key={item.src} className="relative aspect-[1/2] rounded-lg overflow-hidden group">
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056D8]/20 to-transparent transition-all duration-500 group-hover:from-[#0056D8]/55" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-xl md:text-2xl font-lora font-semibold leading-tight">{item.name}</p>
                <p className="mt-2 text-sm md:text-base opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-20">
                  {item.description}
                </p>
                <p className="mt-3 text-xs md:text-sm tracking-[0.18em] uppercase font-semibold">
                  View Itinerary
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/itineraries" className="btn-primary inline-block">
            VIEW MORE
          </Link>
        </div>
      </div>
      </section >

    {/* Partners Section */ }
    < section className = "py-12 bg-white" >
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
          <a href="https://www.nictic.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://www.nictic.com/uploads/2025/03/nictic-logo-1024x325.png"
              alt="NICTIC"
              width={180}
              height={57}
              className="opacity-70 grayscale hover:grayscale-0 transition-all object-contain"
            />
          </a>
        </div>
      </div>
      </section >
    </main >
  );
}
