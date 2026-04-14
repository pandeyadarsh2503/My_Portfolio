"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import * as THREE from "three";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" },
];

function SkillIcon({ position, skill }: { position: [number, number, number]; skill: Skill }) {
  const isDarkIcon = ["Next.js", "Express.js", "AWS", "GitHub"].includes(skill.name);
  
  return (
    <Html position={position} center distanceFactor={10} transition style={{ pointerEvents: "none" }}>
      <div className="flex flex-col items-center group select-none">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/50 backdrop-blur-sm rounded-lg border border-white/5 p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-[#B19EEF]/30">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            style={{ filter: isDarkIcon ? "brightness(0) invert(1)" : "" }}
          />
        </div>
        <span className="mt-2 text-[10px] font-mono text-white/50 bg-[#050505]/80 px-2 py-0.5 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
          {skill.name}
        </span>
      </div>
    </Html>
  );
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Calculate positions on a sphere
  const skillPositions = useMemo(() => {
    const count = skills.length;
    const pos: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      // Scale to sphere radius
      pos.push([x * 5, y * 5, z * 5]);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15; // Controlled slow rotation
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Geodesic Wireframe Sphere */}
      <mesh>
        <icosahedronGeometry args={[4.8, 2]} />
        <meshBasicMaterial 
          color="#3d2b1f" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      
      {/* Inner faint glow sphere */}
      <mesh>
        <sphereGeometry args={[4.7, 32, 32]} />
        <meshBasicMaterial 
          color="#1a0f08" 
          transparent 
          opacity={0.2} 
        />
      </mesh>

      {skills.map((skill, i) => (
        <SkillIcon key={skill.name} position={skillPositions[i]} skill={skill} />
      ))}
    </group>
  );
}

export default function SkillGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center text-white/20 font-mono text-sm tracking-widest animate-pulse">
        INITIALIZING TECH UNIVERSE...
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Globe />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false} // We handle rotation in useFrame for more control
          rotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Gradient overlays to fade the globe into the background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-60"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-60"></div>
    </div>
  );
}
