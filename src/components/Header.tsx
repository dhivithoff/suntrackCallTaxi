"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";


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
        isScrolled 
          ? "bg-[var(--premium-dark)] text-slate-100 shadow-lg shadow-slate-900/20 py-2.5 border-b border-slate-800" 
          : "bg-white/80 text-slate-800 backdrop-blur-md py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
          <Image
            src="/images/logo.png"
            alt="Sun Track Logo"
            width={180}
            height={56}
            className={`transition-all duration-300 w-auto object-contain ${
              isScrolled ? "h-11 md:h-12" : "h-15 md:h-17"
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[15px] font-semibold hover:text-[var(--accent)] transition-colors">
            Home
          </Link>
          <Link href="/fleet" className="text-[15px] font-semibold hover:text-[var(--accent)] transition-colors">
            Fleet
          </Link>
          <Link href="/pricing" className="text-[15px] font-semibold hover:text-[var(--accent)] transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-[15px] font-semibold hover:text-[var(--accent)] transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-[15px] font-semibold hover:text-[var(--accent)] transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-[15px] font-semibold hover:text-[var(--accent)] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-2 bg-[var(--accent)] text-slate-900 px-5 py-2.5 rounded-xl font-bold hover:brightness-105 transition-all shadow-sm animate-pulse-subtle"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-slate-100" : "text-slate-800"}`}
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
          <Link href="/fleet" className="text-lg font-medium text-slate-200 hover:text-[var(--accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Fleet
          </Link>
          <Link href="/pricing" className="text-lg font-medium text-slate-200 hover:text-[var(--accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="text-lg font-medium text-slate-200 hover:text-[var(--accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/faq" className="text-lg font-medium text-slate-200 hover:text-[var(--accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="/contact" className="text-lg font-medium text-slate-200 hover:text-[var(--accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center space-x-2 bg-[var(--accent)] text-slate-900 px-5 py-3 rounded-xl font-bold mt-4 shadow-sm"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </header>
  );
}
