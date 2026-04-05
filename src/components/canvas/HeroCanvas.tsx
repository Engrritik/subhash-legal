"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Float, useTexture, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AnimatedBgImage() {
  const texture = useTexture("/bgside.jpg");
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[4, 0, -3]} scale={[6, 8, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial 
        map={texture} 
        distort={0.4} 
        speed={2} 
        roughness={0.8}
        radius={1}
      />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <AnimatedBgImage />
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
