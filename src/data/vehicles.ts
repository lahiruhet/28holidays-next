export type VehicleType = "Sedan" | "SUV" | "Van" | "Bus";

export type Vehicle = {
  slug: string;
  name: string;
  type: VehicleType;
  capacity: number;
  description: string;
  image: string;
  priceFrom: string;
  luggage: string;
  features: string[];
};

export const vehicleTypes: VehicleType[] = ["Sedan", "SUV", "Van", "Bus"];

export const vehicles: Vehicle[] = [
  {
    slug: "comfort-sedan",
    name: "Comfort Sedan",
    type: "Sedan",
    capacity: 3,
    description:
      "A smooth, air-conditioned sedan for airport transfers, city rides, and couples touring Sri Lanka in comfort.",
    image: "/img/cars/car-1.jpg",
    priceFrom: "$50/day",
    luggage: "2 bags",
    features: [
      "Private driver available",
      "Air-conditioned interior",
      "Ideal for couples or solo travelers",
    ],
  },
  {
    slug: "family-suv",
    name: "Family SUV",
    type: "SUV",
    capacity: 5,
    description:
      "A roomy SUV with elevated comfort for family road trips, hill-country drives, and luggage-heavy itineraries.",
    image: "/img/cars/car-2.jpg",
    priceFrom: "$75/day",
    luggage: "4 bags",
    features: [
      "Raised seating for scenic drives",
      "Comfortable for long-distance travel",
      "Extra luggage flexibility",
    ],
  },
  {
    slug: "touring-van",
    name: "Touring Van",
    type: "Van",
    capacity: 8,
    description:
      "A spacious van for small groups who want reliable intercity transport, day tours, or multi-stop island journeys.",
    image: "/img/cars/car-6.jpg",
    priceFrom: "$100/day",
    luggage: "6 bags",
    features: [
      "Generous cabin space",
      "Well suited for family groups",
      "Comfortable for full-day itineraries",
    ],
  },
  {
    slug: "mini-bus",
    name: "Mini Bus",
    type: "Bus",
    capacity: 15,
    description:
      "A practical mini bus for larger groups, corporate outings, and coordinated tours that need dependable group transport.",
    image: "/img/cars/car-7.jpg",
    priceFrom: "$150/day",
    luggage: "10+ bags",
    features: [
      "Best for group travel",
      "Suitable for events and tours",
      "Ideal for coordinated airport or hotel transfers",
    ],
  },
];

export function getVehicleBySlug(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}
