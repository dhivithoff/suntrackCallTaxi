import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--premium-dark)] pt-16 pb-8 border-t-4 border-[var(--accent)] mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Contact */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[var(--accent)]">
            SUN TRACK
          </Link>
          <p className="text-slate-300 text-sm leading-relaxed">
            Premium outstation taxi service from Tirupur. Safe, reliable, and transparent pricing for district-to-district travel.
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <a href="tel:+919962295259" className="flex items-center text-sm text-slate-300 hover:text-[var(--accent)] transition-colors">
                <Phone size={16} className="mr-3 text-[var(--accent)] flex-shrink-0" />
                +91 99622 95259
              </a>
              <a href="tel:+917010360941" className="flex items-center text-sm text-slate-300 hover:text-[var(--accent)] transition-colors">
                <Phone size={16} className="mr-3 text-[var(--accent)] flex-shrink-0" />
                +91 70103 60941
              </a>
            </div>
            <div className="space-y-2">
              <a href="https://wa.me/919962295259" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-300 hover:text-[var(--accent)] transition-colors">
                <MessageCircle size={16} className="mr-3 text-[var(--accent)] flex-shrink-0" />
                WhatsApp: 99622 95259
              </a>
              <a href="https://wa.me/917010360941" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-300 hover:text-[var(--accent)] transition-colors">
                <MessageCircle size={16} className="mr-3 text-[var(--accent)] flex-shrink-0" />
                WhatsApp: 70103 60941
              </a>
            </div>
            <div className="flex items-start text-sm text-slate-300 pt-1">
              <MapPin size={16} className="mr-3 text-[var(--accent)] flex-shrink-0 mt-0.5" />
              <span>Ramasamy, 20/57, Ramamoorthy Nagar, Tirupur - 641602</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">About Us</Link></li>
            <li><Link href="/fleet" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Our Fleet</Link></li>
            <li><Link href="/pricing" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Pricing & Fares</Link></li>
            <li><Link href="/contact" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Top Routes */}
        <div>
          <h3 className="text-white font-semibold mb-6">Top Routes</h3>
          <ul className="space-y-3">
            <li><Link href="/cab-from-tirupur-to-coimbatore" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Tirupur to Coimbatore</Link></li>
            <li><Link href="/cab-from-tirupur-to-chennai" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Tirupur to Chennai</Link></li>
            <li><Link href="/cab-from-tirupur-to-bangalore" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Tirupur to Bangalore</Link></li>
            <li><Link href="/cab-from-tirupur-to-salem" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Tirupur to Salem</Link></li>
            <li><Link href="/cab-from-tirupur-to-madurai" className="text-slate-300 hover:text-[var(--accent)] text-sm transition-colors">Tirupur to Madurai</Link></li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-semibold mb-6">Service Areas</h3>
          <ul className="space-y-3">
            <li className="text-slate-300 text-sm">Airport Transfers</li>
            <li className="text-slate-300 text-sm">One Way Drops</li>
            <li className="text-slate-300 text-sm">Round Trips</li>
            <li className="text-slate-300 text-sm">Outstation Cabs</li>
            <li className="text-slate-300 text-sm">Corporate Travel</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Sun Track Taxi Service. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
