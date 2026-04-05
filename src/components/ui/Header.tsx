"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 h-28 flex items-center justify-between pointer-events-none"
      >
        <div className="font-serif text-3xl font-bold tracking-widest text-white pointer-events-auto">
          SC<span className="text-legal-gold">.</span>
        </div>
        <button 
          onClick={() => setMenuOpen(true)}
          className="font-sans text-xs tracking-[0.3em] text-white/50 hover:text-white transition-colors uppercase pointer-events-auto flex items-center gap-2 tech-bracket p-2"
        >
          [MENU]
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-center items-center"
          >
            <div className="grid-overlay" />
            <div className="scan-line" />
            
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-10 right-6 font-sans text-xs tracking-[0.3em] text-white/50 hover:text-white uppercase z-50 hover:text-[#E63946] transition-colors tech-bracket p-2"
            >
              [CLOSE]
            </button>
            
            <nav className="flex flex-col gap-10 text-center font-serif text-4xl md:text-6xl uppercase tracking-wide z-10 font-bold">
              <a href="#expertise" onClick={() => setMenuOpen(false)} className="hover:text-legal-gold glitch-hover transition-colors">Expertise</a>
              <a href="#insights" onClick={() => setMenuOpen(false)} className="hover:text-legal-gold glitch-hover transition-colors">Strategic Dossier</a>
              <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-legal-gold glitch-hover transition-colors">Experience / Logs</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#E63946] glitch-hover transition-colors mt-8 text-2xl font-sans tracking-[0.2em]">[ INIT INQUIRY ]</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
