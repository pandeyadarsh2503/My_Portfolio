"use client";

import React, { useEffect, useState } from "react";
import { Cloud, ICloud } from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 0.8,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.08, -0.05],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.045,
    minSpeed: 0.02,
    dragControl: true,
    // Fading logic
    minOpacity: 0.05, // Slightly visible at back for "disappearing" effect
    opacityOut: 0.1,
    // Add text formatting for TagCanvas
    textFont: 'Monospace',
    textColour: '#ffffffaa',
    textHeight: 10,
  },
};

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  
  // Web Technologies
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  
  // App Development
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  
  // Machine Learning & AI
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "LangChain", icon: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png" },
  
  // Database
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  
  // Version Control & Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  
  // Cloud & DevOps
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

export default function SkillGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center text-white/20 font-mono text-sm tracking-widest animate-pulse">
        CALIBRATING TECH UNIVERSE...
      </div>
    );
  }

  const icons = skills.map((skill, index) => {
    const isDarkIcon = ["AWS", "GitHub"].includes(skill.name);
    
    return (
      <a key={index} href="#" onClick={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          height="50"
          width="50"
          src={skill.icon}
          alt={skill.name}
          crossOrigin="anonymous"
          style={{
            filter: isDarkIcon ? "brightness(0) invert(1)" : "none",
            display: 'block',
            margin: '0 auto'
          }}
        />
        <span style={{ 
          color: 'rgba(255,255,255,0.7)', 
          fontSize: '11px', 
          fontFamily: 'monospace',
          display: 'block',
          marginTop: '4px',
          textAlign: 'center'
        }}>
          {skill.name}
        </span>
      </a>
    );
  });

  return (
    <div className="relative flex items-center justify-center cursor-grab active:cursor-grabbing pb-12 w-full max-w-4xl mx-auto overflow-hidden min-h-[600px]">
      {/* Central Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-[#B19EEF]/5 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Detailed Rotating Wireframe Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none p-10">
        <div className="relative w-[550px] h-[550px] animate-[spin_60s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#B19EEF]/20 fill-none">
            {/* Latitude lines */}
            <circle cx="50" cy="50" r="48" strokeWidth="0.2" />
            <ellipse cx="50" cy="50" rx="48" ry="20" strokeWidth="0.1" />
            <ellipse cx="50" cy="50" rx="48" ry="35" strokeWidth="0.1" />
            
            {/* Longitude lines */}
            <ellipse cx="50" cy="50" rx="20" ry="48" strokeWidth="0.1" />
            <ellipse cx="50" cy="50" rx="35" ry="48" strokeWidth="0.1" />
            <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.1" />
            <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.1" />
          </svg>
        </div>
      </div>
      
      <Cloud {...cloudProps}>{icons}</Cloud>
    </div>
  );
}
