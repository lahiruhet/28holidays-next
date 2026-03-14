import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItineraryBySlug, itineraries, parseItineraryContent } from "@/lib/itineraries";

type ItineraryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

export default async function ItineraryDetailPage({ params }: ItineraryDetailPageProps) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    notFound();
  }

  const heroImage =
    itinerary.listing_image_url || itinerary.detail_image_urls?.[0] || "/img/room/room-1.jpg";
  const content = parseItineraryContent(itinerary);
  const overview = content.intro.length > 0 ? content.intro : [itinerary.summary];

  return (
    <main>
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#0056D8]">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/itineraries" className="hover:text-[#0056D8]">
              Itineraries
            </Link>
            <span>&gt;</span>
            <span className="truncate max-w-[220px]">{itinerary.title}</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0056D8] mb-4">
                Tailored Sri Lanka Journey
              </p>
              <h1 className="text-4xl md:text-5xl font-lora leading-tight mb-5">{itinerary.title}</h1>
              <p className="text-gray-700 text-lg leading-8 mb-6">{itinerary.summary}</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-semibold text-[#0056D8]">
                  {itinerary.duration}
                </span>
                <Link
                  href={`/contact?tour=${encodeURIComponent(itinerary.title)}`}
                  className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-[#0056D8] rounded-full hover:bg-[#0047b3] transition-colors"
                >
                  Inquire About This Tour
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[320px] md:h-[420px] rounded-[28px] overflow-hidden shadow-lg">
              <Image src={heroImage} alt={itinerary.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[28px] bg-white border border-[#E6ECF5] p-6 md:p-8 mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0056D8] mb-4">
              Trip Overview
            </p>
            <div className="space-y-4">
              {overview.map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`} className="text-gray-700 leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {content.days.length > 0 && (
            <div className="space-y-8">
              {content.days.map((day, index) => (
                <article
                  key={`${day.label}-${day.title}`}
                  className="grid gap-6 lg:grid-cols-2 lg:items-stretch"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="h-full rounded-[28px] bg-white border border-[#E6ECF5] p-6 md:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0056D8] mb-3">
                        {day.label}
                      </p>
                      <h2 className="text-2xl font-lora font-semibold text-gray-950 mb-5">{day.title}</h2>
                      <div className="space-y-3">
                        {(day.items.length > 0 ? day.items : [day.content]).map((item, itemIndex) => (
                          <div
                            key={`${day.label}-item-${itemIndex}`}
                            className="flex gap-3 text-gray-700 leading-7"
                          >
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0056D8] shrink-0" />
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative h-[280px] md:h-[360px] rounded-[28px] overflow-hidden shadow-sm">
                      <Image src={day.imageUrl} alt={`${itinerary.title} ${day.label}`} fill className="object-cover" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {(content.highlights.length > 0 || content.tips.length > 0 || content.faqs.length > 0) && (
            <div className="grid gap-6 xl:grid-cols-3 mt-10">
              {content.highlights.length > 0 && (
                <section className="rounded-[28px] bg-white border border-[#E6ECF5] p-6 md:p-8">
                  <h2 className="text-2xl font-lora font-semibold mb-5">Highlights</h2>
                  <div className="space-y-3">
                    {content.highlights.map((item, index) => (
                      <div key={`highlight-${index}`} className="flex gap-3 text-gray-700 leading-7">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0056D8] shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {content.tips.length > 0 && (
                <section className="rounded-[28px] bg-white border border-[#E6ECF5] p-6 md:p-8">
                  <h2 className="text-2xl font-lora font-semibold mb-5">Tips</h2>
                  <div className="space-y-3">
                    {content.tips.map((item, index) => (
                      <div key={`tip-${index}`} className="flex gap-3 text-gray-700 leading-7">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0056D8] shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {content.faqs.length > 0 && (
                <section className="rounded-[28px] bg-white border border-[#E6ECF5] p-6 md:p-8">
                  <h2 className="text-2xl font-lora font-semibold mb-5">FAQ</h2>
                  <div className="space-y-5">
                    {content.faqs.map((faq, index) => (
                      <div key={`faq-${index}`}>
                        <h3 className="font-semibold text-gray-950 mb-2">{faq.question}</h3>
                        <p className="text-gray-700 leading-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
