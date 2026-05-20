import { Metadata } from "next";
import FareCalculator from "../../components/FareCalculator";
import { fleet } from "../../data/fleet";
import { IndianRupee, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Fares | Sun Track Taxi",
  description: "Transparent and affordable pricing for our premium outstation taxi service from Tirupur. Calculate your exact fare online.",
};

export default function PricingPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Page Hero Banner */}
      <div className="bg-[var(--premium-dark)] py-20 mb-16 border-b-4 border-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--premium-dark)] via-slate-800 to-slate-900" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase">
            Clear & Honest
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Transparent <span className="text-[var(--accent)]">Pricing</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            No hidden fees, no surge pricing. Just fair, straightforward rates for premium outstation travel.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Standard <span className="text-[var(--accent)]">Rates</span></h2>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
              <table className="w-full text-left">
                <thead className="bg-[var(--premium-dark)] border-b-2 border-[var(--accent)]">
                  <tr>
                    <th className="p-4 font-semibold text-white">Vehicle</th>
                    <th className="p-4 font-semibold text-white">Rate / Km</th>
                    <th className="p-4 font-semibold text-white">Driver Bata</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {fleet.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-[var(--accent-light)] transition-colors">
                      <td className="p-4 text-slate-900 font-medium">{vehicle.name}</td>
                      <td className="p-4 text-[var(--accent)] font-bold flex items-center">
                        <IndianRupee size={14} />{vehicle.pricePerKm}
                      </td>
                      <td className="p-4 text-slate-600">
                        ₹{vehicle.driverBata} / day
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-slate-900">Important Notes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-[var(--muted)]">
                  <ShieldCheck size={16} className="mr-2 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Toll gates and parking charges are extra and to be paid directly by the customer.</span>
                </li>
                <li className="flex items-start text-sm text-[var(--muted)]">
                  <ShieldCheck size={16} className="mr-2 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Night driver bata (10 PM to 6 AM) may be charged extra depending on the route.</span>
                </li>
                <li className="flex items-start text-sm text-[var(--muted)]">
                  <ShieldCheck size={16} className="mr-2 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Hill station charges apply for specific destinations like Ooty and Kodaikanal.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <FareCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}
