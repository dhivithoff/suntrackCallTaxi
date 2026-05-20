import { Metadata } from "next";
import { ShieldCheck, Target, Award, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Sun Track Taxi",
  description: "Learn about Sun Track Taxi, the premium outstation taxi service from Tirupur focused on safety, reliability, and customer satisfaction.",
};

const values = [
  {
    icon: <Target size={24} />,
    title: "Our Mission",
    desc: "To deliver safe, reliable, and comfortable transportation solutions with complete pricing transparency.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Safety First",
    desc: "Every driver is thoroughly verified, and every vehicle undergoes regular maintenance to ensure your safety.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <Award size={24} />,
    title: "Premium Experience",
    desc: "From the moment you book until you reach your destination, expect nothing but the best service.",
    color: "text-[var(--accent)]",
    bg: "bg-[var(--accent-light)]",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Page Hero Banner */}
      <div className="bg-[var(--premium-dark)] py-20 mb-16 border-b-4 border-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--premium-dark)] via-slate-700 to-slate-800" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About <span className="text-[var(--accent)]">Sun Track</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Redefining outstation travel from Tirupur with a commitment to luxury, safety, and reliability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-6">
              Who We Are
            </div>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Our Story</h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed text-[15px]">
              <p>
                Sun Track Taxi was founded with a simple mission: to provide a premium, hassle-free outstation travel experience for the people of Tirupur. We noticed a gap in the market for reliable, transparent, and comfortable taxi services for district-to-district travel.
              </p>
              <p>
                What started as a small fleet of vehicles has now grown into one of the most trusted taxi services in the region, known for our punctuality, professional drivers, and pristine vehicles.
              </p>
              <p>
                We don't just drive — we ensure your journey is as comfortable and memorable as your destination.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[var(--accent)] hover:brightness-110 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-[var(--accent)]/20 text-sm"
              >
                <MessageCircle size={16} />
                Book Now
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 hover:bg-white text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                <Phone size={16} className="text-[var(--accent)]" />
                Call Us
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {values.map((val, i) => (
              <div key={i} className="flex items-start space-x-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--accent)]/30 transition-all group">
                <div className={`${val.bg} ${val.color} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5 text-slate-900">{val.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
