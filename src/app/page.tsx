"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { StrategicInsights } from "@/components/sections/StrategicInsights";
import { Internships } from "@/components/sections/Internships";
import { Expertise } from "@/components/sections/Expertise";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const markerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="flex min-h-[100dvh] flex-col bg-[#050505] font-sans text-white relative">
      <div className="grid-overlay" />
      <div className="scan-line" />
      
      {/* Coordinate HUD */}
      <div className="fixed top-6 left-6 font-sans text-[10px] text-white/30 tracking-[0.2em] pointer-events-none z-50 hidden md:block">
        [X: 0807 - Y: 0807] <br/> SYS.ON
      </div>
      <div className="fixed bottom-6 right-6 font-sans text-[10px] text-white/30 tracking-[0.2em] pointer-events-none z-50 hidden md:block">
        [REC: ACTIVE]
      </div>

      {/* Global Scroll Progress */}
      <div className="fixed top-0 bottom-0 right-10 w-[1px] bg-white/5 z-40 hidden lg:block pointer-events-none">
         <motion.div 
           className="w-[3px] bg-[#E63946] absolute -left-[1px] shadow-[0_0_15px_rgba(230,57,70,0.6)]"
           style={{ height: "40px", top: markerTop }}
         />
      </div>

      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? "h-screen overflow-hidden opacity-0" : "opacity-100"}`}>
        <Header />
        <Hero />
        <Philosophy />
        <StrategicInsights />
        <Internships />
        <Expertise />
        <Footer />
      </div>
    </main>
  );
}
