import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicleBySlug, vehicles } from "@/data/vehicles";

type VehicleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export default async function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">{vehicle.name}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/car-rental" className="hover:text-[#0056D8]">
              Car Rental
            </Link>
            <span>&gt;</span>
            <span>{vehicle.name}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl shadow-lg">
            <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" priority />
          </div>

          <div>
            <p className="section-label">{vehicle.type}</p>
            <h2 className="section-title mb-4">{vehicle.name}</h2>
            <p className="text-gray-600 mb-6">{vehicle.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-2">
                  Capacity
                </p>
                <p className="text-lg font-semibold text-slate-900">Up to {vehicle.capacity}</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-2">
                  Luggage
                </p>
                <p className="text-lg font-semibold text-slate-900">{vehicle.luggage}</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-2">
                  Price
                </p>
                <p className="text-lg font-semibold text-[#0056D8]">{vehicle.priceFrom}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-lora font-semibold mb-4">Included Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                {vehicle.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0056D8]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/car-rental#quote-form" className="btn-primary text-center">
                Request This Vehicle
              </Link>
              <Link
                href="/car-rental"
                className="border border-gray-300 rounded-md px-6 py-3 font-medium text-slate-900 text-center hover:border-[#0056D8] hover:text-[#0056D8] transition-colors"
              >
                Back to Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
