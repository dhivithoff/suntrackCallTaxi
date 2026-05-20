import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Sun Track Taxi",
  description: "Get in touch with Sun Track Taxi for booking outstation cabs from Tirupur. We are available 24/7.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Page Hero Banner */}
      <div className="bg-[var(--premium-dark)] py-20 mb-16 border-b-4 border-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--premium-dark)] via-slate-800 to-slate-900" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase">
            24/7 Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact <span className="text-[var(--accent)]">Us</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Ready to book your premium ride? Get in touch with us today. Our support team is available 24/7.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8 text-slate-900">Get in Touch</h2>
            
            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--accent)]/40 transition-all group">
              <div className="bg-[var(--accent-light)] p-4 rounded-xl text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-slate-900 transition-colors flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">Call Us</h3>
                <p className="text-[var(--muted)] mb-2 text-sm">Available 24/7 for instant bookings.</p>
                <a href="tel:+919876543210" className="text-[var(--accent)] hover:text-slate-900 font-bold text-lg transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--accent)]/40 transition-all group">
              <div className="bg-[var(--accent-light)] p-4 rounded-xl text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-slate-900 transition-colors flex-shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">WhatsApp Us</h3>
                <p className="text-[var(--muted)] mb-2 text-sm">Send us your requirements instantly.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-slate-900 font-bold text-lg transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--accent)]/40 transition-all group">
              <div className="bg-[var(--accent-light)] p-4 rounded-xl text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-slate-900 transition-colors flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">Location</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Sun Track Taxi Service<br />
                  Main Road, Tirupur<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
