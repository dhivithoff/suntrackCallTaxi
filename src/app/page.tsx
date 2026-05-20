"use client";

import { motion, Variants } from "framer-motion";
import Hero from "../components/Hero";
import FleetCard from "../components/FleetCard";
import FareCalculator from "../components/FareCalculator";
import RouteCard from "../components/RouteCard";
import FAQAccordion from "../components/FAQAccordion";
import AnimatedSection from "../components/AnimatedSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import { fleet } from "../data/fleet";
import { routes } from "../data/routes";
import { ShieldCheck, Clock, ThumbsUp, CreditCard } from "lucide-react";

const CUBIC_BEZIER: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Reusable stagger container
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: CUBIC_BEZIER } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: CUBIC_BEZIER } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: CUBIC_BEZIER } },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats Section — animated counters */}
      <StatsSection />

      {/* Fleet Section */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6" id="fleet">
        <SectionHeading
          tag="Our Vehicles"
          title="Our Premium"
          highlight="Fleet"
          subtitle="Choose from our well-maintained selection of premium vehicles designed for comfort and safety."
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {fleet.map((vehicle) => (
            <motion.div key={vehicle.id} variants={fadeUp}>
              <FleetCard vehicle={vehicle} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fare Calculator Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-slate-50" direction="fade">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeLeft} className="inline-block px-3 py-1 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-semibold tracking-wide uppercase mb-6">
              Clear &amp; Honest
            </motion.div>
            <motion.h2 variants={fadeLeft} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Transparent <span className="text-[var(--accent)]">Pricing</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-[var(--muted)] text-lg mb-10 leading-relaxed">
              No hidden fees. Calculate your estimated fare instantly. Our pricing is completely transparent, ensuring you know what to expect before you book.
            </motion.p>
            <motion.ul className="space-y-5" variants={staggerContainer}>
              {[
                "Fixed per km rates for all districts",
                "Standardized driver bata",
                "No surge pricing during peak hours",
                "Clear communication on toll and parking",
              ].map((point, i) => (
                <motion.li key={i} variants={fadeLeft} className="flex items-start text-slate-700">
                  <div className="bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 border border-[var(--accent)]/20 text-[var(--accent)] p-2 rounded-xl mr-4 flex-shrink-0 mt-1">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FareCalculator />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-24 lg:py-32 bg-gradient-to-b from-white to-[var(--accent-light)]" direction="fade">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="Why Sun Track"
            title="Why Choose"
            highlight="Us"
            subtitle="We provide the highest quality taxi service in Tirupur with a focus on safety, reliability, and comfort."
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { icon: <ShieldCheck size={36} />, title: "Verified Drivers", desc: "Professional and background-checked drivers." },
              { icon: <CreditCard size={36} />, title: "Transparent Pricing", desc: "No hidden charges, exact fare estimates." },
              { icon: <Clock size={36} />, title: "On-time Pickup", desc: "Punctuality is our top priority for every trip." },
              { icon: <ThumbsUp size={36} />, title: "Clean Vehicles", desc: "Sanitized and well-maintained cars." },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 border-t-4 border-t-[var(--accent)] text-center hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-2 group shadow-sm hover:shadow-xl h-full flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-[var(--accent-light)] text-[var(--accent)] rounded-2xl mb-8 shadow-sm"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-[var(--muted)] text-base leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Popular Routes */}
      <AnimatedSection className="py-24 lg:py-32 bg-white" direction="fade">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeading
              tag="Travel Routes"
              title="Popular"
              highlight="Routes"
              subtitle="Frequent outstation destinations from Tirupur."
              center={false}
            />
            <motion.a
              href="/cab-from-tirupur-to-coimbatore"
              className="text-[var(--accent)] font-semibold hover:text-slate-900 transition-colors mt-0 mb-16 flex items-center space-x-2 text-lg"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span>View All Routes</span>
              <span>→</span>
            </motion.a>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {routes.slice(0, 6).map((route) => (
              <motion.div
                key={route.slug}
                variants={fadeUp}
              >
                <RouteCard route={route} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="py-24 lg:py-32 max-w-7xl mx-auto px-6" direction="up">
        <SectionHeading
          tag="Got Questions?"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Got questions? We've got answers."
        />
        <FAQAccordion />
      </AnimatedSection>
    </>
  );
}
