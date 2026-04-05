"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo, Suspense } from "react";

const LiquidShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uHoverValue: 0.0,
    uMouse: new THREE.Vector2(0.5, 0.5),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uHoverValue;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Floating continuous distortion
      float wave = sin(uv.y * 10.0 + uTime * 1.5) * 0.02 * uHoverValue;
      float waveX = cos(uv.x * 8.0 + uTime * 2.0) * 0.015 * uHoverValue;
      
      vec2 distortedUv = uv + vec2(waveX, wave);
      
      vec4 texColor = texture2D(uTexture, distortedUv);
      
      // Desaturate and blend into the dark theme
      float luminance = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
      // Slate-950 tone #020617 rgb(2,6,23)
      vec3 slate = vec3(0.007, 0.023, 0.09); 
      
      // Blend texture with dark theme, keeping it premium and subtle
      vec3 finalColor = mix(texColor.rgb, slate, 0.6);
      
      // Add a subtle gold tint to highlights
      vec3 gold = vec3(0.72, 0.525, 0.043); // #B8860B
      finalColor = mix(finalColor, gold, luminance * 0.15);
      
      // Soft edge mask
      float mask = smoothstep(0.0, 0.2, uv.x) * smoothstep(1.0, 0.8, uv.x) * 
                   smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.8, uv.y);
                   
      gl_FragColor = vec4(finalColor, texColor.a * mask * 0.8);
    }
  `
);

extend({ LiquidShaderMaterial });

const ImageMesh = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<any>(null);
  const texture = useTexture("/modi.jpeg");
  
  const { viewport } = useThree();
  
  // Calculate aspect ratio. Assuming image is roughly 3:4 portrait or standard landscape.
  // We'll scale to fit half viewport width.
  const scaleX = viewport.width * 0.6;
  const scaleY = scaleX * 1.2;

  useFrame((state) => {
    if (material.current) {
      material.current.uTime = state.clock.elapsedTime;
      // Auto animate the distortion gently
      material.current.uHoverValue = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 + 0.8;
      
      // Slow float movement
      if (mesh.current) {
        mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      }
    }
  });

  return (
    <mesh ref={mesh} position={[viewport.width > 5 ? viewport.width * 0.2 : 0, 0, 0]} scale={[scaleX, scaleY, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      {/* @ts-ignore */}
      <liquidShaderMaterial ref={material} uTexture={texture} transparent={true} />
    </mesh>
  );
};

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ImageMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
