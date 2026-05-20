"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const variants = {
  up:    { hidden: { opacity: 0, y: 60 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  id,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1], // custom spring-like cubic bezier
      }}
    >
      {children}
    </motion.section>
  );
}
