"use client";

import { motion } from "framer-motion";
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

export function Internships() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-4 tracking-wide">
            Court Residencies
          </h2>
          <div className="h-1 w-24 bg-legal-gold mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {internships.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.location}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative glass p-8 md:p-10 flex flex-col h-[350px] overflow-hidden transition-all duration-500 hover:gold-glow hover:-translate-y-2 border border-slate-800 hover:border-legal-gold/30"
              >
                {/* Huge Watermark Number */}
                <div className="absolute -right-8 -bottom-16 text-[180px] font-serif font-bold text-slate-800 opacity-20 select-none transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                  {item.number}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-4 bg-slate-900/80 backdrop-blur-md inline-block self-start rounded-xl mb-6 border border-slate-700 group-hover:border-legal-gold/50 transition-colors">
                    <IconComponent className="w-8 h-8 text-legal-gold" />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-slate-50 mb-2">{item.location}</h3>
                  <div className="text-legal-gold font-sans font-medium tracking-widest text-sm uppercase mb-4">
                    {item.rotations}
                  </div>
                  <p className="font-sans text-slate-400 font-light mt-auto leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
