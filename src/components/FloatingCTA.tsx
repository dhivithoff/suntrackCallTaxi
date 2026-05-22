"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user scrolls past 300px (past the main hero height)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* WhatsApp Floating Button - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -30, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -30, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <motion.a
              href="https://wa.me/919962295259"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-[#25D366]/30 transition-all border border-green-400/20 cursor-pointer"
              aria-label="Chat on WhatsApp"
            >
              {/* Hover Label on the Right */}
              <span className="absolute left-16 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md border border-slate-800">
                Chat on WhatsApp
              </span>
              <MessageCircle size={26} className="fill-white/10" />
            </motion.a>
          </motion.div>

          {/* Phone Call Floating Button - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 30, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.a
              href="tel:+919962295259"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#e5b82f] text-slate-900 flex items-center justify-center shadow-xl hover:shadow-[var(--accent)]/30 transition-all border border-white/15 animate-pulse-subtle cursor-pointer"
              aria-label="Call Us"
            >
              {/* Hover Label on the Left */}
              <span className="absolute right-16 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md border border-slate-800">
                Call Support (99622 95259)
              </span>
              <Phone size={24} className="fill-slate-900/10" />
            </motion.a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
