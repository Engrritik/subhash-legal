"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-4 bg-[#050505] relative z-20 border-t border-legal-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-2"
          >
            <div>
              <div className="font-serif text-5xl md:text-7xl text-white mb-6">Let's Talk Strategy.</div>
              <p className="text-neutral-400 font-sans tracking-wide text-lg mb-10 max-w-md">
                Practice Focus: Himachal Pradesh & Punjab High Courts.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <a href="https://www.linkedin.com/in/subhi-7-3609393a2/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-legal-gold uppercase tracking-[0.2em] text-sm font-bold hover:text-white transition-colors duration-300">
                <span className="w-8 h-[1px] bg-legal-gold" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/itz_shubhi_7.04/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-legal-gold uppercase tracking-[0.2em] text-sm font-bold hover:text-white transition-colors duration-300">
                <span className="w-8 h-[1px] bg-legal-gold" />
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=100037769225777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-legal-gold uppercase tracking-[0.2em] text-sm font-bold hover:text-white transition-colors duration-300">
                <span className="w-8 h-[1px] bg-legal-gold" />
                Facebook
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 glass p-8 md:p-12 lg:p-16 rounded-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-3">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg outline-none focus:border-legal-gold transition-colors" />
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-3">Legal Issue</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg outline-none focus:border-legal-gold transition-colors" />
            </div>
            <a href="mailto:subhi6853@gmail.com?subject=Strategic%20Defense%20Inquiry" className="self-start mt-6 inline-flex items-center justify-center px-10 py-5 bg-legal-gold text-[#0A0A0A] font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300 rounded-none shadow-[0_0_20px_rgba(212,175,55,0.2)] tech-bracket glitch-hover">
              [ TRANSMIT INQUIRY ]
            </a>
          </motion.div>
        </div>
      </div>
      <div className="mt-32 text-center text-white/30 font-sans text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Subhash Chand. All Rights Reserved.
      </div>
    </footer>
  );
}
