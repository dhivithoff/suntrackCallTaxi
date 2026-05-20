import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sun Track Taxi",
  description: "Terms and conditions for Sun Track Taxi outstation services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of <span className="text-[var(--accent)]">Service</span></h1>
        <div className="prose prose-invert max-w-none text-[var(--muted)] space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using our taxi booking services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Bookings & Fares</h2>
          <p>All bookings are subject to availability. Estimated fares provided on the website do not include toll charges, parking fees, or state permits unless explicitly mentioned.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellation Policy</h2>
          <p>Cancellations made within 2 hours of the scheduled pickup time may be subject to a cancellation fee.</p>
        </div>
      </div>
    </div>
  );
}
