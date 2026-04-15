"use client";

import { useState, useEffect } from "react";
import RotatingCube from "@/components/RotatingCube";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaServer, FaDatabase } from "react-icons/fa";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505] overflow-y-auto hidden-scrollbar scroll-smooth">
      {/* Header Navigation */}
      <header className="fixed flex top-0 left-0 w-full h-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 z-50 items-center justify-center">
        <nav className="w-full max-w-7xl px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#B19EEF]"></div>
            <span className="font-display font-bold text-xl tracking-tight">ADARSH</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#projects" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Projects</a>
            <a href="#experience" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Experience</a>
            <a href="#skills" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Skills</a>
          </div>

          <a href="mailto:pandeyadarsh2503@gmail.com" className="px-6 py-2 rounded-full border border-white/10 hover:border-[#B19EEF]/40 transition-all duration-300 text-sm font-medium btn-glow">
            Contact Me
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-8 py-12 overflow-hidden gap-20 lg:gap-12">
          {/* Glow Sphere */}
          <div className="glow-overlay top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Hero Content */}
          <div className="relative z-20 w-full lg:w-[60%] text-center lg:text-left space-y-8">
            <div className="inline-flex flex-col gap-1 items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 shadow-[0_0_15px_rgba(177,158,239,0.1)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B19EEF] animate-pulse"></div>
                <span className="text-[10px] tracking-[0.6em] font-mono text-[#B19EEF] font-bold uppercase">AI/ML Engineer &amp; Developer</span>
              </div>
            </div>

            <div className="relative flex flex-col items-center lg:items-start select-none group">
              <h1 className="font-impact text-7xl md:text-[8rem] xl:text-[11rem] leading-[0.8] text-white drop-shadow-2xl">
                ADARSH
              </h1>
              <h1 className="font-impact text-7xl md:text-[8rem] xl:text-[11rem] leading-[0.8] text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>
                PANDEY
              </h1>
            </div>

            <p className="text-white/60 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              Passionate about building scalable Full Stack solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <a href="#projects" className="px-10 py-4 bg-[#B19EEF] text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(177,158,239,0.4)]">
                View Work
              </a>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 hover:border-[#B19EEF]/50 transition-all duration-300 group">
                  <FiGithub className="text-2xl text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 hover:border-[#B19EEF]/50 transition-all duration-300 group text-white/60 font-medium">
                  in
                </a>
              </div>
            </div>
          </div>

          <RotatingCube />
        </section>

        
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative px-8 py-10 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded border border-white/50 bg-white/5"></div>
            <span className="font-display font-medium text-sm tracking-widest text-white/80">ADARSH PANDEY</span>
          </div>

          <div className="flex items-center gap-8 text-white/40 text-xs font-medium">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:pandeyadarsh2503@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>

          <div className="text-white/20 text-xs">
            © {new Date().getFullYear()} Adarsh Pandey. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
