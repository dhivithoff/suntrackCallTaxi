"use client";

import { useState } from "react";
import { IndianRupee, MapPin, Navigation, Car, Calculator } from "lucide-react";
import { fleet } from "../data/fleet";
import { motion, AnimatePresence } from "framer-motion";

export default function FareCalculator() {
  const [pickup, setPickup] = useState("Tirupur");
  const [drop, setDrop] = useState("");
  const [distance, setDistance] = useState<number | "">("");
  const [vehicle, setVehicle] = useState(fleet[0].id);
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

  const calculateFare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!distance) return;
    const selectedVehicle = fleet.find(v => v.id === vehicle);
    if (!selectedVehicle) return;
    const fare = (Number(distance) * selectedVehicle.pricePerKm) + selectedVehicle.driverBata;
    setEstimatedFare(fare);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 focus:border-[var(--accent)] transition-all text-sm";
  const labelClass = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2";

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-[var(--accent-light)] text-[var(--accent)] rounded-xl flex items-center justify-center">
          <Calculator size={20} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Estimate Your Fare</h3>
          <p className="text-xs text-slate-500">Instant, no-hidden-fee quote</p>
        </div>
      </div>
      
      <form onSubmit={calculateFare} className="space-y-5" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1.5"><MapPin size={11} /> Pickup</span>
            </label>
            <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputClass} required suppressHydrationWarning />
          </div>
          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1.5"><Navigation size={11} /> Drop</span>
            </label>
            <input type="text" value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="e.g. Coimbatore" className={inputClass} required suppressHydrationWarning />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Distance (km)</label>
            <input type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} placeholder="e.g. 55" className={inputClass} required min="1" suppressHydrationWarning />
          </div>
          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1.5"><Car size={11} /> Vehicle</span>
            </label>
            <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className={inputClass} suppressHydrationWarning>
              {fleet.map(v => (<option key={v.id} value={v.id}>{v.name}</option>))}
            </select>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[var(--accent)] hover:brightness-110 text-slate-900 font-bold rounded-xl px-4 py-4 transition-all shadow-md shadow-[var(--accent)]/20 hover:shadow-lg hover:shadow-[var(--accent)]/30 flex items-center justify-center gap-2 text-[15px]"
          suppressHydrationWarning
        >
          <Calculator size={18} />
          Calculate Fare
        </button>
      </form>

      <AnimatePresence>
        {estimatedFare !== null && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 p-6 bg-gradient-to-r from-[var(--accent-light)] to-white border-2 border-[var(--accent)]/30 rounded-2xl flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-0.5">Estimated Base Fare</p>
              <p className="text-xs text-slate-400">*Toll &amp; parking extra</p>
            </div>
            <div className="text-4xl font-extrabold text-[var(--accent)] flex items-center gap-1">
              <IndianRupee size={28} strokeWidth={2.5} />
              {estimatedFare.toLocaleString("en-IN")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
