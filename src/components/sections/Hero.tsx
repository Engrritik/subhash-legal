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

      {/* Extreme Premium Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[40vh] z-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl text-left"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden mb-[-20px] md:mb-[-40px]">
            <motion.h1 
              initial={{ y: "100%", skewY: 5 }}
              animate={{ y: "0%", skewY: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[6rem] md:text-[9rem] lg:text-[13rem] font-serif text-white leading-[0.85] tracking-tighter mix-blend-difference"
            >
              SUBHASH
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1 
              initial={{ y: "100%", skewY: 5 }}
              animate={{ y: "0%", skewY: 0 }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[6rem] md:text-[9rem] lg:text-[13rem] font-serif text-white/40 leading-[0.85] tracking-tighter"
            >
              CHAND<span className="text-legal-gold">.</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end"
        >
          <p className="text-xl md:text-2xl font-sans text-neutral-300 tracking-wide font-light max-w-2xl border-l-[3px] border-legal-gold pl-6 leading-relaxed">
            7th Semester BALLB at <span className="text-white font-medium">Sant Baba Bhag Singh University, Punjab.</span> <br/>
            Strategic Criminal Defense & Advocacy. <br/>
            <span className="text-legal-gold italic font-serif text-2xl md:text-3xl mt-2 inline-block">6+ Court Residencies.</span>
          </p>

          <a
            href="#experience"
            className="inline-flex items-center justify-center relative px-12 py-5 font-sans font-medium tracking-[0.3em] text-white border border-white/20 hover:border-legal-gold transition-all duration-700 hover:scale-[1.03] active:scale-[0.98] rounded-full overflow-hidden group"
          >
            <span className="relative z-10 text-xs md:text-sm group-hover:text-black transition-colors duration-500">EXPLORE DISCOVERY</span>
            
            <motion.div 
              className="absolute inset-0 bg-legal-gold"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
