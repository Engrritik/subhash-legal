"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  {
    title: "Criminal Law",
    description: "Comprehensive understanding of defense strategies and criminal proceedings in substantive and procedural law.",
  },
  {
    title: "IPC Specialist",
    description: "Deep knowledge of the Indian Penal Code, focusing on precise interpretation and strategic enforcement.",
  },
  {
    title: "CrPC Practitioner",
    description: "Thorough expertise in the Code of Criminal Procedure, ensuring meticulous adherence to due process.",
  },
  {
    title: "Trial Preparation",
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
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="py-32 px-4 bg-slate-950 relative border-t border-slate-900/50 overflow-hidden z-10">
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-800/10 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           style={{ y: y1 }}
           className="mb-24 flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-slate-100 mb-6 tracking-tight text-center">
            Core Expertise
          </h2>
          <div className="h-[2px] w-32 bg-legal-gold opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 lg:px-12">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 flex flex-col items-start gap-6 border-l border-slate-800/50 hover:border-legal-gold transition-colors duration-700 hover:bg-slate-900/30 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-legal-gold transition-all duration-700 group-hover:h-full opacity-50 shadow-[0_0_10px_#B8860B]" />
              
              <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-legal-gold group-hover:border-legal-gold/50 transition-all duration-500 bg-slate-950/80">
                <span className="font-serif 0">{`0${index + 1}`}</span>
              </div>
              
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif text-slate-100 mb-4 tracking-wide group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="font-sans text-slate-400 font-light leading-relaxed text-lg lg:text-xl">
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
