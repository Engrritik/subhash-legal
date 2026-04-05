"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // 2.5s delay
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
    >
      <div className="relative flex flex-col items-center">
        {/* Abstract path draw animation */}
        <motion.svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          className="text-legal-gold"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 50 10 L 90 90 L 10 90 Z"
            fill="transparent"
            strokeWidth="1.5"
            stroke="currentColor"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { pathLength: { duration: 1.5, ease: "easeInOut" } }
              }
            }}
          />
        </motion.svg>
        
        {/* Gold progress bar */}
        <div className="h-[2px] mt-8 bg-slate-800 rounded-full w-[200px] overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.2, duration: 2, ease: "circOut" }}
            className="h-full bg-legal-gold shadow-[0_0_10px_#B8860B]"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 font-serif text-xl tracking-[0.3em] text-legal-gold text-center uppercase"
        >
          Subhash Chand
        </motion.p>
      </div>
    </motion.div>
  );
}
