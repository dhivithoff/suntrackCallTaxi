export interface RouteData {
  slug: string;
  destination: string;
  distanceKm: number;
  travelTimeHours: number;
  travelTimeMinutes: number;
  baseFare: number;
}

export const routes: RouteData[] = [
  { slug: "coimbatore", destination: "Coimbatore", distanceKm: 55, travelTimeHours: 1, travelTimeMinutes: 15, baseFare: 1100 },
  { slug: "chennai", destination: "Chennai", distanceKm: 460, travelTimeHours: 8, travelTimeMinutes: 30, baseFare: 6500 },
  { slug: "salem", destination: "Salem", distanceKm: 115, travelTimeHours: 2, travelTimeMinutes: 15, baseFare: 2000 },
  { slug: "erode", destination: "Erode", distanceKm: 55, travelTimeHours: 1, travelTimeMinutes: 10, baseFare: 1000 },
  { slug: "bangalore", destination: "Bangalore", distanceKm: 310, travelTimeHours: 6, travelTimeMinutes: 0, baseFare: 4500 },
  { slug: "madurai", destination: "Madurai", distanceKm: 210, travelTimeHours: 4, travelTimeMinutes: 0, baseFare: 3200 },
  { slug: "trichy", destination: "Trichy", distanceKm: 180, travelTimeHours: 3, travelTimeMinutes: 30, baseFare: 2800 },
  { slug: "kodaikanal", destination: "Kodaikanal", distanceKm: 175, travelTimeHours: 4, travelTimeMinutes: 30, baseFare: 3500 },
  { slug: "ooty", destination: "Ooty", distanceKm: 100, travelTimeHours: 3, travelTimeMinutes: 0, baseFare: 2500 },
  { slug: "mysore", destination: "Mysore", distanceKm: 220, travelTimeHours: 5, travelTimeMinutes: 0, baseFare: 3500 },
  { slug: "cochin", destination: "Cochin", distanceKm: 230, travelTimeHours: 5, travelTimeMinutes: 0, baseFare: 3800 },
  { slug: "pondicherry", destination: "Pondicherry", distanceKm: 340, travelTimeHours: 6, travelTimeMinutes: 30, baseFare: 5000 },
  { slug: "velankanni", destination: "Velankanni", distanceKm: 310, travelTimeHours: 6, travelTimeMinutes: 15, baseFare: 4800 },
  { slug: "rameswaram", destination: "Rameswaram", distanceKm: 370, travelTimeHours: 7, travelTimeMinutes: 0, baseFare: 5500 },
  { slug: "kanyakumari", destination: "Kanyakumari", distanceKm: 450, travelTimeHours: 8, travelTimeMinutes: 0, baseFare: 6500 },
];
