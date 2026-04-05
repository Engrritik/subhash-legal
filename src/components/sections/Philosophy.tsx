"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-40 px-4 bg-transparent relative z-10 flex items-center justify-center -mt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#050505]/80 pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="group cursor-default tech-bracket p-16 bg-[#111111]/30 backdrop-blur-sm border border-transparent hover:border-[#D4AF37]/20 transition-all duration-700 glitch-hover w-full"
        >
          <div className="text-legal-gold font-sans tracking-[0.5em] text-[10px] font-bold uppercase mb-12">
            [ INTERNAL DIRECTIVE ]
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-12 uppercase border-l-4 border-r-4 border-[#E63946]/50 px-8 group-hover:text-legal-gold transition-colors duration-500">
            "Justice is not a destination, but a meticulous process of procedural integrity."
          </h2>
          <div className="h-[2px] w-24 bg-legal-gold mx-auto opacity-70 group-hover:w-40 transition-all duration-500 shadow-[0_0_10px_#D4AF37]" />
        </motion.div>
      </div>
    </section>
  );
}
