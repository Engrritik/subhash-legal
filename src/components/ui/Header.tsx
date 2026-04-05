"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-legal-gold/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="font-serif text-3xl font-bold tracking-widest text-white cursor-pointer hover:text-legal-gold transition-colors">
          SC<span className="text-legal-gold">.</span>
        </div>
        <nav className="hidden md:flex gap-10 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-white/70">
          <a href="#expertise" className="hover:text-legal-gold transition-colors duration-300">Expertise</a>
          <a href="#insights" className="hover:text-legal-gold transition-colors duration-300">Insights</a>
          <a href="#experience" className="hover:text-legal-gold transition-colors duration-300">Experience</a>
        </nav>
        <a href="#contact" className="px-8 py-3 border border-legal-gold/50 text-legal-gold hover:bg-legal-gold hover:text-black transition-all duration-500 rounded-sm text-xs font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          Consultation
        </a>
      </div>
    </motion.header>
  );
}
