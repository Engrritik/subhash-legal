"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex flex-col items-start justify-center min-h-[100dvh] px-4 md:px-12 lg:px-24 overflow-hidden pt-20">
      <HeroCanvas />

      {/* Marquee Ticker */}
      <div className="absolute top-[80px] left-0 w-full overflow-hidden whitespace-nowrap opacity-30 pointer-events-none z-10 border-b border-white/5 pb-2">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="inline-block font-sans text-[10px] tracking-[0.6em] uppercase text-[#D4AF37]"
        >
          {Array(20).fill("JUSTICE IS A METICULOUS PROCESS OF PROCEDURAL INTEGRITY. /// ").join("")}
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl text-left"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden mb-[-10px] md:mb-[-20px]">
            <motion.h1 
              initial={{ y: "100%", skewY: 5 }}
              animate={{ y: "0%", skewY: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-serif text-white leading-[0.85] tracking-tighter uppercase font-bold"
            >
              SUBHASH
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-16">
            <motion.h1 
              initial={{ y: "100%", skewY: 5 }}
              animate={{ y: "0%", skewY: 0 }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-serif text-[#D4AF37] leading-[0.85] tracking-tighter uppercase font-bold glitch-hover"
            >
              CHAND.
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-14 items-start md:items-center mt-6"
        >
          {/* Profile Picture Focal Point - Technical Noir Edition */}
          <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 p-2 group tech-bracket bg-[#111] z-20">
             <img 
               src="/profile-icon.png" 
               alt="Subhash Chand Portrait" 
               className="w-full h-full object-cover filter grayscale contrast-[1.4] opacity-70 group-hover:opacity-100 group-hover:grayscale-[0.5] transition-all duration-500 mix-blend-lighten" 
             />
             <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none" />
          </div>

          <div className="flex flex-col gap-6 z-20">
            <p className="text-sm md:text-md font-sans text-neutral-300 tracking-[0.1em] font-light max-w-2xl border-l-2 border-[#E63946] pl-6 leading-relaxed">
              [ ROLE: Criminal Defense Strategist & Legal Consultant ] <br/>
              [ LOC:  Sant Baba Bhag Singh University, Punjab ] <br/>
              Specializing in Strategic Litigation and Procedural Integrity. <br/>
              <span className="text-white mt-4 inline-block font-bold">&gt;&gt; Final Year Candidate. 6+ Court Residencies.</span>
            </p>

            <a
              href="/Subhash_Chand_CV.pdf"
              download="Subhash_Chand_CV.pdf"
              className="inline-flex max-w-max items-center justify-center relative px-8 py-4 font-sans font-bold tracking-[0.2em] text-white border border-white/20 hover:border-legal-gold tech-bracket transition-all duration-300 rounded-none bg-[#0a0a0a]/50 glitch-hover"
            >
              <span className="relative z-10 text-xs md:text-[10px] group-hover:text-legal-gold transition-colors duration-300">[ DOWNLOAD STRATEGIC DOSSIER ]</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
