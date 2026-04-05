"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";
import { Suspense } from "react";

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            {/* Golden luxury particles drifting slowly */}
            <Sparkles count={150} scale={18} size={2.5} speed={0.2} opacity={0.4} color="#D4AF37" noise={1} />
            {/* Subtle white ambient particles */}
            <Sparkles count={80} scale={12} size={1.5} speed={0.1} opacity={0.1} color="#ffffff" noise={2} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
