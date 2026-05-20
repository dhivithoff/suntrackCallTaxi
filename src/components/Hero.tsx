"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-white">
      {/* Background Image - Full screen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-light.png"
          alt="Premium luxury cab driving in city daylight"
          fill
          priority
          className="object-cover object-[70%_center]"
        />
        {/* Soft gradient overlay to reduce brightness while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white/75 via-white/40 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center h-full min-h-[calc(100vh-80px)] py-12 lg:py-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full lg:max-w-xl xl:max-w-2xl mt-auto lg:mt-0"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-50 border border-slate-200 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase shadow-sm">
            Premium Taxi Service
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 leading-[1.15]">
            Your Journey,<br />
            Our Priority.
          </h1>
          
          <p className="text-[15px] sm:text-lg text-slate-700 mb-8 max-w-[340px] lg:max-w-xl leading-relaxed font-medium">
            Experience the finest district-to-district cab service from <span className="text-[var(--accent)] font-bold">Tirupur</span>. Safe, reliable, and perfectly transparent.
          </p>

          {/* Trust section */}
          <div className="flex items-center gap-4 mb-10 bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white shadow-sm inline-flex">
            <div className="flex -space-x-3">
              {[11, 32, 12].map((id, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-[2px] border-white bg-slate-200 overflow-hidden relative shadow-sm">
                   <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col pr-3">
              <div className="flex gap-1 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#F3C757" className="text-[#F3C757]" />)}
              </div>
              <div className="text-[11px] text-slate-700 font-semibold tracking-wide">
                1000+ Happy Customers
              </div>
            </div>
          </div>

          <div className="flex-1 lg:hidden w-full min-h-[10vh]"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-auto lg:mt-0 z-20 pb-4 lg:pb-0">
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none flex items-center justify-center space-x-2 bg-[var(--accent)] text-slate-900 px-8 py-4 rounded-xl font-bold text-[15px] hover:brightness-110 transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              <MessageCircle size={18} />
              <span>Book on WhatsApp</span>
            </a>
            <a 
              href="tel:+919876543210"
              className="flex-1 lg:flex-none flex items-center justify-center space-x-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-white transition-colors shadow-sm"
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
