"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const totalFrames = Math.round(duration * 60);
    const increment = target / totalFrames;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Routes" },
  { value: 20, suffix: "+", label: "Vehicles" },
  { value: 1000, suffix: "+", label: "Customers" },
  { value: 5, suffix: "+", label: "Years" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-[var(--premium-dark)] border-b-4 border-[var(--accent)]" id="stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center divide-x divide-slate-800/50">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center p-6 lg:p-8"
            >
              <span className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2 drop-shadow-sm tabular-nums">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-semibold text-slate-300 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
