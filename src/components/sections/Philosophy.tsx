"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-40 px-4 bg-[#0A0A0A] relative z-10 flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#111111]/50 pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-legal-gold font-sans tracking-[0.3em] text-xs font-bold uppercase mb-12">
            Legal Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-12 italic border-l-4 border-r-4 border-legal-gold/30 px-8">
            "Justice is not a destination, but a meticulous process of procedural integrity."
          </h2>
          <div className="h-[1px] w-24 bg-legal-gold mx-auto opacity-70" />
        </motion.div>
      </div>
    </section>
  );
}
