"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight: string;
  subtitle?: string;
  center?: boolean;
  delay?: number;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  center = true,
  delay = 0,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : "text-left"}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block px-4 py-1.5 mb-4 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase`}
        >
          {tag}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-slate-900"
      >
        {title} <span className="text-[var(--accent)]">{highlight}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[var(--muted)] max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
