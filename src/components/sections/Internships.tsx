"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Icons } from "@/components/ui/Icons";

const internships = [
  {
    location: "Palampur",
    rotations: "2 Rotations",
    focus: "Trial Procedures & Case Strategy",
    icon: Icons.Scale,
    number: "01",
  },
  {
    location: "Dharmpur",
    rotations: "2 Rotations",
    focus: "Case Filing & Documentation",
    icon: Icons.Gavel,
    number: "02",
  },
  {
    location: "Hamirpur",
    rotations: "2 Rotations",
    focus: "Evidence Examination & Argument",
    icon: Icons.Shield,
    number: "03",
  },
];

function BentoCard({ item, index }: { item: any; index: number }) {
  const IconComponent = item.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="group relative p-8 md:p-10 flex flex-col h-[400px] overflow-hidden rounded-md border border-slate-800 transition-colors bg-slate-950/40 backdrop-blur-sm"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(184, 134, 11, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div 
        className="absolute -right-8 -bottom-16 text-[200px] font-serif font-bold text-slate-800 opacity-[0.1] select-none pointer-events-none z-0"
        whileHover={{ scale: 1.05, x: -10, y: -10 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {item.number}
      </motion.div>
      
      <div className="relative z-10 flex flex-col h-full transition-transform duration-500 group-hover:-translate-y-2">
        <div className="p-5 bg-slate-900/60 backdrop-blur-md inline-flex self-start rounded-2xl mb-8 border border-slate-700/50 shadow-xl group-hover:border-legal-gold/50 group-hover:shadow-[0_0_20px_rgba(184,134,11,0.15)] transition-all duration-500">
          <IconComponent className="w-8 h-8 text-legal-gold" />
        </div>
        
        <h3 className="text-3xl font-serif text-slate-100 mb-3">{item.location}</h3>
        <div className="text-legal-gold font-sans tracking-widest text-xs font-bold uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
          {item.rotations}
        </div>
        <p className="font-sans text-slate-400 font-light mt-auto leading-relaxed text-sm md:text-base">
          {item.focus}
        </p>
      </div>
    </motion.div>
  );
}

export function Internships() {
  return (
    <section id="experience" className="py-32 px-4 bg-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-slate-100 mb-6 tracking-tight">
            Court Residencies
          </h2>
          <div className="h-[2px] w-32 bg-legal-gold mx-auto opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {internships.map((item, index) => (
            <BentoCard key={item.location} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
