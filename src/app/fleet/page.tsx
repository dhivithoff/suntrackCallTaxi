import { Metadata } from "next";
import FleetCard from "../../components/FleetCard";
import { fleet } from "../../data/fleet";

export const metadata: Metadata = {
  title: "Our Premium Fleet | Sun Track Taxi",
  description: "Explore our wide range of premium vehicles including Sedans, SUVs, and Innova Crystas for your outstation travel from Tirupur.",
};

export default function FleetPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Page Hero Banner */}
      <div className="bg-[var(--premium-dark)] py-20 mb-16 border-b-4 border-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--premium-dark)] via-slate-800 to-slate-900" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase">
            Premium Vehicles
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Premium <span className="text-[var(--accent)]">Fleet</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Choose from our well-maintained selection of premium vehicles designed for comfort and safety during your outstation trips.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleet.map(vehicle => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}
