import React from "react";
import SkillGlobe from "./SkillGlobe";
import { FaGlobe } from "react-icons/fa";

export default function TechStackSection() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 lg:px-12 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
      
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 lg:mb-12 animate-on-scroll">
          <h2 className="font-mono text-3xl lg:text-4xl font-bold text-white">
            <span className="text-[#B19EEF]">#</span> Skills.json
          </h2>
        </div>
        
        <div className="relative w-full flex flex-col items-center justify-center mt-8">
          {/* Skill Globe 3D Output */}
          <div className="w-full h-full min-h-[400px] flex items-center justify-center">
             <SkillGlobe />
          </div>
          
          <div className="absolute -bottom-10 lg:-bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-center z-10">
            <div className="flex items-center gap-2 text-white/60 bg-[#050505] px-5 py-2.5 rounded-full border border-white/5 shadow-2xl backdrop-blur-md">
              <FaGlobe className="w-4 h-4 text-[#B19EEF] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest font-medium">Drag to explore skills universe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
