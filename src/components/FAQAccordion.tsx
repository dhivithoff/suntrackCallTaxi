"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className={`border rounded-2xl overflow-hidden bg-white transition-all duration-300 shadow-sm ${
            openIndex === index 
              ? "border-[var(--accent)] shadow-md shadow-[var(--accent)]/10" 
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
            aria-expanded={openIndex === index}
            suppressHydrationWarning
          >
            <span className={`font-semibold text-base lg:text-lg pr-8 transition-colors ${openIndex === index ? "text-[var(--accent)]" : "text-slate-900"}`}>
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-shrink-0 ${openIndex === index ? "text-[var(--accent)]" : "text-slate-400"}`}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
