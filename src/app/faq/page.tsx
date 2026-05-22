import { Metadata } from "next";
import FAQAccordion from "../../components/FAQAccordion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Sun Track Taxi",
  description: "Find answers to common questions about booking outstation cabs from Tirupur, pricing, tolls, and safety.",
};

export default function FAQPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Page Hero Banner */}
      <div className="bg-[var(--premium-dark)] py-20 mb-16 border-b-4 border-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--premium-dark)] via-slate-700 to-slate-800" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase">
            Help Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked <span className="text-[var(--accent)]">Questions</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Got questions about our services, pricing, or booking process? Find your answers below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FAQAccordion />
        </div>

        {/* Still have questions CTA */}
        <div className="bg-gradient-to-br from-[var(--premium-dark)] to-slate-700 p-10 md:p-14 rounded-3xl border border-[var(--accent)]/20 text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-4">
            Still Confused?
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Still have questions?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            If you couldn't find the answer to your question, feel free to reach our customer support. We are always happy to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[var(--accent)] hover:brightness-110 text-slate-900 font-bold rounded-xl px-8 py-4 transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              <MessageCircle size={18} />
              Contact Support
            </Link>
            <a
              href="tel:+919962295259"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl px-8 py-4 transition-all"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
