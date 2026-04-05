"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Hero } from "@/components/sections/Hero";
import { Internships } from "@/components/sections/Internships";
import { Expertise } from "@/components/sections/Expertise";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="flex min-h-[100dvh] flex-col bg-slate-950 font-sans text-slate-200">
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? "h-screen overflow-hidden opacity-0" : "opacity-100"}`}>
        <Hero />
        <Internships />
        <Expertise />
      </div>
    </main>
  );
}
