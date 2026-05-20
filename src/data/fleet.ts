export interface FleetVehicle {
  id: string;
  name: string;
  image: string;
  passengers: number;
  luggage: number;
  pricePerKm: number;
  driverBata: number;
  tollNote: string;
}

export const fleet: FleetVehicle[] = [
  {
    id: "sedan",
    name: "Sedan (Etios/Dzire)",
    image: "/images/front_sedan.png",
    passengers: 4,
    luggage: 2,
    pricePerKm: 14,
    driverBata: 400,
    tollNote: "Toll & Parking extra",
  },
  {
    id: "suv",
    name: "SUV (Ertiga/Tavera)",
    image: "/images/front_suv.png",
    passengers: 6,
    luggage: 4,
    pricePerKm: 18,
    driverBata: 400,
    tollNote: "Toll & Parking extra",
  },
  {
    id: "innova",
    name: "Innova",
    image: "/images/front_innova.png",
    passengers: 7,
    luggage: 4,
    pricePerKm: 20,
    driverBata: 500,
    tollNote: "Toll & Parking extra",
  },
  {
    id: "crysta",
    name: "Innova Crysta",
    image: "/images/front_crysta.png",
    passengers: 7,
    luggage: 4,
    pricePerKm: 24,
    driverBata: 500,
    tollNote: "Toll & Parking extra",
  },
];
