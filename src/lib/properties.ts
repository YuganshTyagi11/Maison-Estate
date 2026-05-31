import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  country: string;
  price: number;
  beds: number;
  baths: number;
  area: number; // sqft
  type: "Villa" | "Penthouse" | "Estate" | "Chalet";
  image: string;
  gallery: string[];
  lat: number;
  lng: number;
  featured?: boolean;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "obsidian-villa",
    title: "Obsidian Villa",
    location: "Bel Air, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    price: 14_800_000,
    beds: 6,
    baths: 8,
    area: 11200,
    type: "Villa",
    image: p1,
    gallery: [p1, p2, p6, p4],
    lat: 34.0901,
    lng: -118.4065,
    featured: true,
    description:
      "A sculptural retreat carved from black stone and glass, suspended above the Los Angeles canyons. A masterclass in restraint, light, and silence.",
    features: ["Infinity Pool", "Private Cinema", "Wine Cellar", "Smart Home", "Heated Floors", "5-car Garage"],
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Tribeca, New York",
    city: "New York",
    country: "USA",
    price: 22_500_000,
    beds: 5,
    baths: 6,
    area: 8400,
    type: "Penthouse",
    image: p2,
    gallery: [p2, p6, p1, p4],
    lat: 40.7195,
    lng: -74.0089,
    featured: true,
    description:
      "Floor-to-ceiling glass wraps three exposures of Manhattan. Hand-laid marble, custom millwork, and a private rooftop terrace 1,200 feet above the city.",
    features: ["Private Elevator", "Rooftop Terrace", "Concierge", "Wine Vault", "Gym & Spa", "Helipad Access"],
  },
  {
    id: "villa-aurelia",
    title: "Villa Aurelia",
    location: "Lake Como, Italy",
    city: "Como",
    country: "Italy",
    price: 9_750_000,
    beds: 7,
    baths: 9,
    area: 14000,
    type: "Estate",
    image: p3,
    gallery: [p3, p6, p4, p1],
    lat: 45.9852,
    lng: 9.2581,
    featured: true,
    description:
      "A 19th-century estate restored with reverence — frescoed ceilings, cypress-lined drive, and 4 acres of formal gardens descending to the lake.",
    features: ["Lake Frontage", "Boat House", "Vineyard", "Chapel", "Guest House", "Olive Grove"],
  },
  {
    id: "azure-bay",
    title: "Azure Bay Residence",
    location: "Saint-Tropez, France",
    city: "Saint-Tropez",
    country: "France",
    price: 18_900_000,
    beds: 6,
    baths: 7,
    area: 9800,
    type: "Villa",
    image: p4,
    gallery: [p4, p1, p2, p3],
    lat: 43.2677,
    lng: 6.6407,
    description:
      "Direct beachfront with private cove access. Indoor-outdoor living designed by a Pritzker laureate, with seamless transitions to a 25-meter infinity pool.",
    features: ["Private Beach", "Infinity Pool", "Yacht Mooring", "Staff Quarters", "Hammam", "Outdoor Kitchen"],
  },
  {
    id: "alpine-reserve",
    title: "Alpine Reserve",
    location: "Aspen, Colorado",
    city: "Aspen",
    country: "USA",
    price: 12_300_000,
    beds: 5,
    baths: 6,
    area: 8600,
    type: "Chalet",
    image: p5,
    gallery: [p5, p6, p1, p3],
    lat: 39.1911,
    lng: -106.8175,
    description:
      "Hand-hewn timber and Colorado fieldstone frame this mountain estate. Ski-in, ski-out access with panoramic views of the Maroon Bells.",
    features: ["Ski-in / Ski-out", "Heated Driveway", "Indoor Pool", "Sauna & Steam", "Ski Lounge", "Bourbon Bar"],
  },
  {
    id: "chateau-leclair",
    title: "Château Leclair",
    location: "Loire Valley, France",
    city: "Loire",
    country: "France",
    price: 28_400_000,
    beds: 12,
    baths: 14,
    area: 22000,
    type: "Estate",
    image: p6,
    gallery: [p6, p3, p1, p2],
    lat: 47.3941,
    lng: 0.6848,
    description:
      "A storied 17th-century château set on 90 hectares. Grand ballroom, working vineyard, equestrian facilities, and meticulously restored period details throughout.",
    features: ["Working Vineyard", "Equestrian Center", "Ballroom", "Private Lake", "Helipad", "11-staff Quarters"],
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
