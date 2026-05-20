"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Using a fake formspree/web3forms submission for demo purposes.
    // Replace the action URL with actual endpoint.
    const formData = new FormData(e.currentTarget);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
      
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
          Message sent successfully! We will get back to you soon.
        </div>
      )}
      
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-2" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--accent)] transition-colors"
              required
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--muted)] mb-2" htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--accent)] transition-colors"
              required
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-2" htmlFor="pickup">Pickup Location</label>
            <input 
              type="text" 
              id="pickup"
              name="pickup"
              defaultValue="Tirupur"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--accent)] transition-colors"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--muted)] mb-2" htmlFor="drop">Drop Location</label>
            <input 
              type="text" 
              id="drop"
              name="drop"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--accent)] transition-colors"
              suppressHydrationWarning
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-[var(--muted)] mb-2" htmlFor="message">Message / Special Requirements</label>
          <textarea 
            id="message"
            name="message"
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            suppressHydrationWarning
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center space-x-2 bg-[var(--accent)] text-slate-900 font-bold rounded-xl px-4 py-4 hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          suppressHydrationWarning
        >
          <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
          {!status && <Send size={18} />}
        </button>
      </form>
    </div>
  );
}
