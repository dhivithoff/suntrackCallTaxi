"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, IndianRupee } from "lucide-react";
import Image from "next/image";
import { FleetVehicle } from "../data/fleet";

export default function FleetCard({ vehicle }: { vehicle: FleetVehicle }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white border border-slate-100 rounded-2xl overflow-hidden group transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-[var(--accent)]/10 hover:-translate-y-2"
    >
      <div className="relative h-48 w-full bg-gradient-to-b from-slate-50 to-white p-4 flex items-center justify-center border-b border-slate-100">
        {/* Placeholder image structure */}
        <div className="relative w-[90%] h-[90%]">
          <Image 
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">{vehicle.name}</h3>
        
        <div className="flex space-x-4 mb-6">
          <div className="flex items-center text-[var(--muted)] text-sm">
            <Users size={16} className="mr-2 text-[var(--accent)]" />
            {vehicle.passengers}
          </div>
          <div className="flex items-center text-[var(--muted)] text-sm">
            <Briefcase size={16} className="mr-2 text-[var(--accent)]" />
            {vehicle.luggage}
          </div>
        </div>
        
        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[var(--muted)]">Price per Km</span>
            <span className="font-semibold text-slate-900 flex items-center">
              <IndianRupee size={14} />{vehicle.pricePerKm}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[var(--muted)]">Driver Bata</span>
            <span className="font-semibold text-slate-900 flex items-center">
              <IndianRupee size={14} />{vehicle.driverBata}/day
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[var(--muted)]">Toll & Parking</span>
            <span className="font-semibold text-slate-900">{vehicle.tollNote}</span>
          </div>
        </div>
        
        <a 
          href={`https://wa.me/919876543210?text=I want to book ${vehicle.name} from Tirupur`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] hover:brightness-110 text-slate-900 font-bold py-3.5 rounded-xl transition-all shadow-md shadow-[var(--accent)]/20 group-hover:shadow-lg group-hover:shadow-[var(--accent)]/30 text-[15px]"
        >
          Book Now →
        </a>
      </div>
    </motion.div>
  );
}
