"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  {
    title: "Criminal Law",
    sysCode: "SYS.CRIM.01",
    description: "Comprehensive understanding of defense strategies and criminal proceedings in substantive and procedural law.",
  },
  {
    title: "IPC Specialist",
    sysCode: "SYS.IPC.02",
    description: "Deep knowledge of the Indian Penal Code, focusing on precise interpretation and strategic enforcement.",
  },
  {
    title: "CrPC Practitioner",
    sysCode: "SYS.CRPC.03",
    description: "Thorough expertise in the Code of Criminal Procedure, ensuring meticulous adherence to due process.",
  },
  {
    title: "Trial Preparation",
    sysCode: "SYS.TRL.04",
    description: "Strategic case building, evidence assessment, and courtroom advocacy strategies for high-stakes litigation.",
  },
];

export function Expertise() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="expertise" ref={containerRef} className="py-32 px-4 bg-transparent relative border-t border-white/5 z-10 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           style={{ y: y1 }}
           className="mb-24 flex flex-col items-center"
        >
          <div className="text-[#E63946] font-sans tracking-[0.3em] text-xs font-bold uppercase mb-4 glitch-hover cursor-default">
            [ CORE EXPERTISE DATABASE ]
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 uppercase tracking-tight text-center">
            Strategic Matrix
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 lg:px-12 w-full">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group tech-bracket relative p-12 flex flex-col items-start gap-8 bg-[#111111]/60 backdrop-blur-md rounded-none border border-transparent hover:border-[#D4AF37]/40 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] glitch-hover cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 font-sans text-[10px] text-white/30 tracking-widest uppercase group-hover:text-[#E63946] transition-colors duration-300">
                {area.sysCode}
              </div>
              
              <div className="w-16 h-16 rounded-none border border-white/20 flex items-center justify-center text-white/50 group-hover:text-[#050505] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] overflow-hidden relative">
                <motion.div 
                  className="absolute inset-0 bg-[#E63946] origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                />
                <span className="font-sans font-bold text-lg relative z-10">{`0${index + 1}`}</span>
              </div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-3xl lg:text-4xl font-serif text-white mb-4 tracking-wide group-hover:text-legal-gold transition-colors uppercase">
                  {area.title}
                </h3>
                <p className="font-sans text-white/60 font-light leading-relaxed text-sm md:text-base border-l-2 border-white/10 group-hover:border-[#E63946] pl-4 transition-colors duration-500">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
