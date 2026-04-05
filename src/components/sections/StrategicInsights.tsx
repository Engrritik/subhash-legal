"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Strategic Quashing of an FIR under Section 482 CrPC",
    category: "Procedural Safeguards",
    insight: "Analyzing the transition from civil disputes to 'criminalized' complaints.",
    strategy: "Developed a framework for identifying 'Abuse of Process' leveraging the State of Haryana v. Bhajan Lal guidelines to protect clients from malicious prosecution."
  },
  {
    title: "Digital Admissibility (The WhatsApp Defense)",
    category: "Section 65B Indian Evidence Act",
    insight: "In the modern era, digital evidence is often the 'make or break' factor in criminal trials.",
    strategy: "Mastered certification requirements for electronic records ensuring crucial digital alibis are admissible and bypass technical strikes."
  },
  {
    title: "Trial Strategy (The 'Last Seen' Theory)",
    category: "Circumstantial Evidence",
    insight: "Criminal cases often hinge on a weak chain of circumstantial evidence.",
    strategy: "Analyzed how to break the 'Last Seen' theory by highlighting time-gap inconsistencies, creating reasonable doubt in the timeline."
  },
  {
    title: "Custodial Rights & Arrest Ethics",
    category: "D.K. Basu Guidelines & Cons. Law",
    insight: "Procedural errors during the arrest phase can jeopardize an entire case.",
    strategy: "Created a compliance checklist based on Supreme Court mandates ensuring 'Rights of the Accused' are upheld from the moment of detention."
  },
  {
    title: "Bail Advocacy (Liberty vs. Detention)",
    category: "Sections 437/439 CrPC",
    insight: "Bail is the rule; Jail is the exception.",
    strategy: "Drafting bail applications moving beyond generic pleas by focusing on the 'Triple Test': Flight Risk, Evidence Tampering, and Witness Influence."
  }
];

export function StrategicInsights() {
  return (
    <section id="insights" className="py-32 px-4 bg-[#0A0A0A] relative border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="mb-24 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight text-center">
            Strategic Dossier
          </h2>
          <div className="h-[1px] w-32 bg-legal-gold" />
        </motion.div>

        <div className="flex flex-col gap-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 md:p-12 bg-[#111111]/30 backdrop-blur-md rounded-md border border-white/5 hover:border-legal-gold hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <div className="lg:w-1/3 shrink-0">
                <div className="text-legal-gold font-sans tracking-[0.2em] text-xs font-bold uppercase mb-4">
                  {study.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-legal-gold transition-colors duration-500 leading-tight">
                  {study.title}
                </h3>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-8">
                <div>
                  <div className="text-white/40 font-sans tracking-widest text-xs uppercase mb-2">The Insight</div>
                  <p className="font-sans text-neutral-300 font-light leading-relaxed text-lg border-l border-white/10 pl-6 group-hover:border-legal-gold/50 transition-colors duration-500">
                    {study.insight}
                  </p>
                </div>
                <div>
                  <div className="text-white/40 font-sans tracking-widest text-xs uppercase mb-2">The Strategy</div>
                  <p className="font-sans text-neutral-300 font-light leading-relaxed text-lg border-l border-white/10 pl-6 group-hover:border-legal-gold transition-colors duration-500">
                    {study.strategy}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
