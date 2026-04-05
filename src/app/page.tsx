"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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

  return (
    <main className="flex min-h-[100dvh] flex-col bg-[#0A0A0A] font-sans text-slate-200">
      <div className="grain-overlay" />
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
