"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-slate-950">
      {/* Background Image - Full screen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-light.png"
          alt="Premium luxury cab driving in city daylight"
          fill
          priority
          className="object-cover object-[70%_center] opacity-85"
        />
        {/* Premium subtle dark gradient overlay - dark at bottom, transparent at top, and dark at left on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/20 lg:bg-gradient-to-r lg:from-slate-950/90 lg:via-slate-950/50 lg:to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center h-full min-h-[calc(100vh-80px)] py-12 lg:py-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full lg:max-w-xl xl:max-w-2xl mt-auto lg:mt-0"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase shadow-sm">
            Premium Taxi Service
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-[1.15] drop-shadow-md">
            Your Journey,<br />
            Our Priority.
          </h1>
          
          <p className="text-[15px] sm:text-lg text-slate-200 mb-8 max-w-[340px] lg:max-w-xl leading-relaxed font-medium drop-shadow-sm">
            Experience the finest district-to-district cab service from <span className="text-[var(--accent)] font-bold">Tirupur</span>. Safe, reliable, and perfectly transparent.
          </p>

          {/* Trust section */}
          <div className="flex items-center gap-4 mb-10 bg-slate-900/40 backdrop-blur-md p-3 rounded-2xl border border-slate-800/80 shadow-sm inline-flex">
            <div className="flex -space-x-3">
              {[11, 32, 12].map((id, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-[2px] border-slate-900 bg-slate-800 overflow-hidden relative shadow-sm">
                   <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col pr-3">
              <div className="flex gap-1 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#F3C757" className="text-[#F3C757]" />)}
              </div>
              <div className="text-[11px] text-slate-300 font-semibold tracking-wide">
                1000+ Happy Customers
              </div>
            </div>
          </div>

          <div className="flex-1 lg:hidden w-full min-h-[10vh]"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-auto lg:mt-0 z-20 pb-4 lg:pb-0">
            <a 
              href="https://wa.me/919962295259"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none flex items-center justify-center space-x-2 bg-[var(--accent)] text-slate-900 px-8 py-4 rounded-xl font-bold text-[15px] hover:brightness-110 transition-all shadow-lg shadow-[var(--accent)]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              <span>Book on WhatsApp</span>
            </a>
            <a 
              href="tel:+919962295259"
              className="flex-1 lg:flex-none flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-slate-100 transition-colors shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={18} className="text-[var(--accent)]" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
