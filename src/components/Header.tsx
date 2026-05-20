"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--premium-dark)] shadow-lg shadow-slate-900/20 py-4 border-b border-slate-800" : "bg-white/80 backdrop-blur-md py-6 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[var(--accent)] drop-shadow-sm">
          SUN TRACK
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">
            Home
          </Link>
          <Link href="/fleet" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">
            Fleet
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-2 bg-[var(--accent)] text-slate-900 px-5 py-2.5 rounded-full font-semibold hover:brightness-105 transition-all shadow-sm"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--foreground)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          suppressHydrationWarning
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--premium-dark)] border-t-2 border-[var(--accent)] py-6 px-6 flex flex-col space-y-4 md:hidden shadow-xl">
          <Link href="/" className="text-lg font-medium text-slate-200 hover:text-[var(--accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/fleet" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Fleet
          </Link>
          <Link href="/pricing" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center space-x-2 bg-[var(--accent)] text-slate-900 px-5 py-3 rounded-full font-semibold mt-4 shadow-sm"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </header>
  );
}
