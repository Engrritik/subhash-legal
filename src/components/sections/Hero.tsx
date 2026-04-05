"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-4 overflow-hidden pt-20">
      {/* Abstract Blueprint Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center mix-blend-screen">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="blueprint" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="transparent" stroke="#B8860B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-100 mb-8 leading-[1.1] tracking-tight">
            Subhash Chand<br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-gradient block mt-4">Strategic Criminal Defense & Advocacy</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-balance text-lg md:text-2xl font-sans text-slate-400 mb-12 tracking-wide font-light max-w-3xl mx-auto">
            7th Semester BALLB | 6+ Court Residencies | Criminal Litigation Specialist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#experience"
            className="inline-flex items-center justify-center relative px-8 py-4 font-sans font-medium tracking-[0.2em] text-slate-950 bg-legal-gold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] gold-glow overflow-hidden"
          >
            <span className="relative z-10">EXPLORE EXPERIENCE</span>
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity z-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
