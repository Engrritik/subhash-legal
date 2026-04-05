"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="py-24 px-4 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-4 tracking-wide">
            Core Expertise
          </h2>
          <div className="h-1 w-24 bg-legal-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group glass p-8 flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-legal-gold/40 hover:shadow-[0_0_20px_rgba(184,134,11,0.15)] border border-slate-800"
            >
              <div className="flex-shrink-0 w-2 h-full min-h-[60px] bg-slate-800 transition-colors duration-300 group-hover:bg-legal-gold rounded-full" />
              <div>
                <h3 className="text-2xl font-serif text-slate-100 mb-2 group-hover:text-legal-gold transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="font-sans text-slate-400 font-light leading-relaxed">
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
