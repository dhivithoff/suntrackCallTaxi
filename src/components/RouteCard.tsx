"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { RouteData } from "../data/routes";
import { motion } from "framer-motion";

export default function RouteCard({ route }: { route: RouteData }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-200 rounded-2xl p-6 group transition-all duration-300 shadow-md hover:border-[var(--accent)]/50 hover:shadow-xl hover:-translate-y-1"
    >
      <Link href={`/cab-from-tirupur-to-${route.slug}`} className="block h-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center text-[var(--muted)] text-sm mb-2">
              <MapPin size={14} className="mr-1" />
              From Tirupur
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--accent)] transition-colors">
              To {route.destination}
            </h3>
          </div>
          <div className="bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded-full group-hover:bg-[var(--accent)] group-hover:text-slate-900 transition-colors">
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-4">
          <div className="text-[var(--muted)]">
            <span className="text-slate-900 font-medium">{route.distanceKm} km</span>
          </div>
          <div className="flex items-center text-[var(--muted)]">
            <Clock size={14} className="mr-1" />
            <span>{route.travelTimeHours}h {route.travelTimeMinutes > 0 ? `${route.travelTimeMinutes}m` : ''}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
