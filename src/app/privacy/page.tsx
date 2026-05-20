import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sun Track Taxi",
  description: "Privacy policy for Sun Track Taxi outstation services.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy <span className="text-[var(--accent)]">Policy</span></h1>
        <div className="prose prose-invert max-w-none text-[var(--muted)] space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you request a booking, including your name, phone number, and pickup/drop locations.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information, including confirmations and receipts.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at +91 98765 43210.</p>
        </div>
      </div>
    </div>
  );
}
