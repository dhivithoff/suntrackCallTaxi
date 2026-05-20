import { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "../../data/routes";
import { fleet } from "../../data/fleet";
import RouteCard from "../../components/RouteCard";
import FleetCard from "../../components/FleetCard";
import FAQAccordion from "../../components/FAQAccordion";
import ContactForm from "../../components/ContactForm";

export async function generateStaticParams() {
  return routes.map((route) => ({
    slug: `cab-from-tirupur-to-${route.slug}`,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const routePrefix = "cab-from-tirupur-to-";
  
  if (!resolvedParams.slug.startsWith(routePrefix)) {
    return { title: "Page Not Found | Sun Track Taxi" };
  }
  
  const destinationSlug = resolvedParams.slug.substring(routePrefix.length);
  const route = routes.find((r) => r.slug === destinationSlug);
  
  if (!route) {
    return { title: "Route Not Found | Sun Track Taxi" };
  }

  return {
    title: `Cab from Tirupur to ${route.destination} | One Way Taxi Booking`,
    description: `Book affordable cab from Tirupur to ${route.destination}. Safe travel, transparent pricing, Sedan, SUV, Innova available. Distance: ${route.distanceKm} km.`,
    alternates: {
      canonical: `/${resolvedParams.slug}`,
    }
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const routePrefix = "cab-from-tirupur-to-";
  
  if (!resolvedParams.slug.startsWith(routePrefix)) {
    notFound();
  }
  
  const destinationSlug = resolvedParams.slug.substring(routePrefix.length);
  const route = routes.find((r) => r.slug === destinationSlug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = routes.filter(r => r.slug !== route.slug).slice(0, 3);

  // Generate JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sun Track Taxi",
        "description": "Premium outstation taxi service from Tirupur.",
        "telephone": "+919876543210",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tirupur",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "TaxiService",
        "name": `Taxi from Tirupur to ${route.destination}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Sun Track Taxi"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Route Hero */}
      <section className="bg-[var(--premium-dark)] pt-36 pb-20 border-b-4 border-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--premium-dark)] via-slate-700 to-slate-800" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-5">
            Route Details
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Cab from Tirupur to <span className="text-[var(--accent)]">{route.destination}</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a premium, safe, and reliable taxi from Tirupur to {route.destination}. We offer one-way drops, round trips, and airport transfers.
          </p>
        </div>
      </section>

      {/* Route Overview */}
      <section className="py-0 bg-[var(--premium-dark)] border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700">
          <div className="p-6 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Distance</p>
            <p className="text-3xl font-bold text-white">{route.distanceKm} <span className="text-lg font-medium text-slate-300">km</span></p>
          </div>
          <div className="p-6 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Travel Time</p>
            <p className="text-3xl font-bold text-white">{route.travelTimeHours}h <span className="text-lg font-medium text-slate-300">{route.travelTimeMinutes ? `${route.travelTimeMinutes}m` : ""}</span></p>
          </div>
          <div className="p-6 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Starting Fare</p>
            <p className="text-3xl font-bold text-[var(--accent)]">₹{route.baseFare}</p>
          </div>
          <div className="p-6 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Availability</p>
            <p className="text-3xl font-bold text-green-400">24/7</p>
          </div>
        </div>
      </section>

      {/* Available Vehicles for this route */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Available <span className="text-[var(--accent)]">Vehicles</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map(vehicle => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* Booking / Contact */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your <span className="text-[var(--accent)]">Ride</span></h2>
            <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
              Need a cab from Tirupur to {route.destination}? Fill out the form or reach us directly via WhatsApp or Phone. Our team is available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href={`https://wa.me/919876543210?text=I want to book a cab from Tirupur to ${route.destination}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[var(--accent)] hover:brightness-110 text-slate-900 px-8 py-4 rounded-xl font-bold text-[15px] transition-all shadow-md shadow-[var(--accent)]/20"
              >
                <span>WhatsApp Now</span>
              </a>
              <a 
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span>Call Us</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Route FAQs */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Route <span className="text-[var(--accent)]">FAQs</span></h2>
        <FAQAccordion />
      </section>

      {/* Related Routes */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Other <span className="text-[var(--accent)]">Popular Routes</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRoutes.map(related => (
              <RouteCard key={related.slug} route={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
