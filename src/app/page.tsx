import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import HomeQuoteForm from "@/components/HomeQuoteForm";
import { getCountryCodeOptions } from "@/lib/countryCodeOptions";

type TripadvisorReview = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

const CUSTOMER_VIDEO_TESTIMONIAL = {
  href: "https://www.tripadvisor.co.uk/Attraction_Review-g293962-d27497643-Reviews-28holidays_com-Colombo_Western_Province.html",
  thumbnailSrc:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/de/ba/a0/caption.jpg?w=1100&h=-1&s=1",
  title: "Customer Video Testimonial",
  description:
    "Watch a guest share their Sri Lanka travel experience with 28holidays.",
};

const TESTIMONIAL_REVIEWS: TripadvisorReview[] = [
  {
    author: "Radzio M",
    rating: 5,
    text:
      "We had a 9 days round trip in Srilanka with 28hollidays. They very Profesjonał, helpful and easy to contact. The driver Faheem is very responsible, clean, and kind. He was knowledgeable, helpful, and familiar with the language and customs. We felt very safe and well-cared for throughout the trip. The car was clean and well-maintained. We definitely recommend him.",
    date: "2026-03-10",
  },
  {
    author: "Seaside06599966886",
    rating: 5,
    text:
      "We booked a driver for our 10-day Sri Lanka round trip with 28holidays. From the very beginning, the initial coordination and detailed planning with Ella were professional and smooth. Faheem, our young driver, was punctual every single day and safely took us to all the places we wanted to visit. With additional support in the background from Paslim, we were able to enjoy an unforgettable journey. Thank you very much for everything!",
    date: "2026-02-22",
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

function ReviewCard({ review }: { review: TripadvisorReview }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < Math.max(1, Math.min(5, Math.round(review.rating)))
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
  );
}

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
  const [featuredTestimonial, ...remainingTestimonials] = TESTIMONIAL_REVIEWS;
  const countryCodeOptions = getCountryCodeOptions();

  return (
    <main>
      <HomeHero />
      <HomeQuoteForm countryCodeOptions={countryCodeOptions} />

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
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">WHAT WE DO</p>
            <h2 className="section-title">Discover Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="section-label">TESTIMONIALS</p>
            <h2 className="section-title">What Customers Say?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredTestimonial ? (
              <ReviewCard
                key={`${featuredTestimonial.author}-${featuredTestimonial.date || featuredTestimonial.text.slice(0, 24)}`}
                review={featuredTestimonial}
              />
            ) : null}
            <a
              href={CUSTOMER_VIDEO_TESTIMONIAL.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the customer video testimonial"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={CUSTOMER_VIDEO_TESTIMONIAL.thumbnailSrc}
                  alt={CUSTOMER_VIDEO_TESTIMONIAL.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Video Testimonial
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-7 w-7 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l7.13-4.73a1 1 0 000-1.66L9.54 5.98A1 1 0 008 6.82z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Watch The Story
                </p>
                <h3 className="mb-3 text-xl font-lora font-semibold text-slate-900">
                  {CUSTOMER_VIDEO_TESTIMONIAL.title}
                </h3>
                <p className="mb-6 leading-7 text-gray-600">
                  {CUSTOMER_VIDEO_TESTIMONIAL.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-medium text-[#0056D8]">
                  Open video
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M11.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </div>
            </a>
            {remainingTestimonials.map((review) => (
              <ReviewCard
                key={`${review.author}-${review.date || review.text.slice(0, 24)}`}
                review={review}
              />
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
      </section>

      <section className="py-16 bg-white">
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
                  sizes="(min-width: 768px) 25vw, 50vw"
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
      </section>

      <section className="py-12 bg-white">
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
      </section>
    </main>
  );
}
