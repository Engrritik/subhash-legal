"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const residencies = [
  {
    location: "Shimla High Court",
    rotations: "2 Rotations | Procedural Focus",
    description: "Immersive engagement in trial procedures, structural case strategy formulation, and primary evidence assessment methodologies. Shadowed senior advocates during cross-examinations."
  },
  {
    location: "Delhi Supreme Court",
    rotations: "2 Rotations | Documentation Focus",
    description: "Specialized in precise case filing operations, meticulous drafting of pre-trial motions, and ensuring strict adherence to procedural timelines in civil and criminal litigation."
  },
  {
    location: "Hamirpur Court",
    rotations: "2 Rotations | Trial Strategy",
    description: "Conducted deep analysis of circumstantial evidence chains, actively mapping out 'last seen' timeline vulnerabilities, and assisting in high-stakes argument preparation."
  }
];

export function Internships() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-32 px-4 bg-[#0A0A0A] relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="text-white/40 font-sans tracking-[0.2em] text-xs font-bold uppercase mb-4">
            Professional Trajectory
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">
            Court Residencies
          </h2>
        </motion.div>

        <div className="relative pl-10 md:pl-24">
          {/* Timeline background track */}
          <div className="absolute left-0 md:left-8 top-4 bottom-0 w-[1px] bg-white/10" />
          
          {/* Animated fill track */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 md:left-[31px] top-4 bottom-0 w-[3px] bg-legal-gold shadow-[0_0_15px_#D4AF37] z-10" 
          />

          <div className="flex flex-col gap-24">
            {residencies.map((residency, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-12 md:-left-[5.35rem] top-8 w-5 h-5 rounded-none border border-legal-gold bg-[#0A0A0A] z-20 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.4)] glitch-hover" />
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="p-8 md:p-10 bg-[#111111]/40 backdrop-blur-md rounded-none tech-bracket border-transparent hover:border-[#E63946]/30 transition-all duration-500 flex flex-col items-start glitch-hover"
                >
                  <div className="text-[#E63946] font-sans tracking-[0.2em] text-xs font-bold uppercase mb-3">
                    [ {residency.rotations} ]
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 group-hover:text-legal-gold transition-colors duration-500 uppercase tracking-tight">
                    {residency.location}
                  </h3>
                  <p className="font-sans text-white/50 font-light leading-relaxed text-sm md:text-md max-w-2xl tracking-wide">
                    {residency.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
