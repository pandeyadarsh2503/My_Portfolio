"use client";

import { useState, useEffect } from "react";
import RotatingCube from "@/components/RotatingCube";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaServer, FaDatabase } from "react-icons/fa";

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
              Passionate about building scalable AI/ML solutions.
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

        {/* Projects Grid Section */}
        <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group card-hover p-8 rounded-[24px] bg-white/[0.02] border border-white/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B19EEF]/10 flex items-center justify-center shadow-[0_0_15px_rgba(177,158,239,0.2)]">
                    <FaBrain className="text-2xl text-[#B19EEF]" />
                  </div>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <FiGithub className="text-white"> </FiGithub>
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">NeerSense (SIH)</h3>
                <p className="text-white/40 text-sm mb-4 font-mono">Next.js • FastAPI • RAG • LLMs • ChromaDB</p>
                <p className="text-white/60 leading-relaxed mb-6">
                  AI-powered ocean data platform using FastAPI-based RAG architecture. Integrated semantic search and automated insight generation over large-scale Argo float datasets.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group card-hover p-8 rounded-[24px] bg-white/[0.02] border border-white/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                    <FaGraduationCap className="text-2xl text-[#00D9FF]" />
                  </div>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <FiGithub className="text-white" />
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">SAHARA - Elderly Care</h3>
                <p className="text-white/40 text-sm mb-4 font-mono">React • MongoDB • Python • MediaPipe</p>
                <p className="text-white/60 leading-relaxed mb-6">
                  Full-stack companion app with fall detection, emergency alerts, and prescription scanning. Includes Google Calendar API sync for schedule management.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group card-hover p-8 rounded-[24px] bg-white/[0.02] border border-white/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#ff5722]/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,87,34,0.2)]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-[#ff5722]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                  </div>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <FiGithub className="text-white" />
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">MediCare AI</h3>
                <p className="text-white/40 text-sm mb-4 font-mono">Flask • RAG • LangChain • Pinecone • AWS</p>
                <p className="text-white/60 leading-relaxed mb-6">
                  RAG-enabled medical chatbot delivering context-aware health information orchestrating interactions through LangChain prompt engineering and pinecone retrieval pipelines.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group card-hover p-8 rounded-[24px] bg-white/[0.02] border border-white/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center shadow-[0_0_15px_rgba(76,175,80,0.2)]">
                    <FaCode className="text-2xl text-[#4CAF50]" />
                  </div>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <FiGithub className="text-white" />
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Shoplifting Detection</h3>
                <p className="text-white/40 text-sm mb-4 font-mono">PyTorch • TensorFlow • OpenCV</p>
                <p className="text-white/60 leading-relaxed mb-6">
                  Computer vision system utilizing deep learning to automatically identify suspicious behaviors in retail surveillance footage to minimize theft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="relative py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience Panel */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <FaBriefcase className="text-3xl text-[#B19EEF]" />
                <h2 className="font-display text-3xl font-bold">Experience</h2>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/10 before:via-white/10 before:to-transparent">
                
                {/* Mirai School */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050505] group-[.is-active]:bg-[#B19EEF]/20 group-[.is-active]:border-[#B19EEF]/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(177,158,239,0.2)]">
                    <div className="w-2 h-2 rounded-full bg-[#B19EEF]"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#B19EEF] font-mono text-sm">Jul 2025 - Aug 2025</span>
                      <span className="text-white/40 text-xs px-2 py-1 rounded-md bg-white/5">Remote</span>
                    </div>
                    <h3 className="font-bold text-xl mb-1">AI/ML Intern</h3>
                    <h4 className="text-white/60 mb-4">Mirai School of Technology</h4>
                    <ul className="text-white/50 text-sm space-y-2 list-disc list-inside">
                      <li>Model development & dataset handling.</li>
                      <li>NLP, Data Science & n8n automations.</li>
                    </ul>
                  </div>
                </div>

                {/* Vaishali Tech */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60 font-mono text-sm">Jul 2025 - Oct 2025</span>
                      <span className="text-white/40 text-xs px-2 py-1 rounded-md bg-white/5">Remote</span>
                    </div>
                    <h3 className="font-bold text-xl mb-1">Android Developer</h3>
                    <h4 className="text-white/60 mb-4">Vaishali Tech</h4>
                    <ul className="text-white/50 text-sm space-y-2 list-disc list-inside">
                      <li>Flutter application development & maintenance.</li>
                      <li>API integrations and cross-functional team collab.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Education Panel */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <FaGraduationCap className="text-3xl text-[#00D9FF]" />
                <h2 className="font-display text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">B.Tech Computer Science & Engineering (AI/ML)</h3>
                    <span className="text-[#00D9FF] font-mono text-sm whitespace-nowrap ml-4">Expected 2027</span>
                  </div>
                  <h4 className="text-white/60 mb-2">Bennett University (The Times Group)</h4>
                  <p className="text-white/40 text-sm font-mono bg-white/5 inline-block px-2 py-1 rounded">CGPA: 8.2</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Class 12 - Intermediate (PCM)</h3>
                    <span className="text-white/60 font-mono text-sm whitespace-nowrap ml-4">2023</span>
                  </div>
                  <h4 className="text-white/60">Shiv Vani Model Sr. Sec. School, Delhi</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="flex items-center gap-4 mb-16 justify-end">
            <div className="h-[1px] flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
              <FaBrain className="text-3xl text-[#B19EEF] mb-4" />
              <h3 className="font-bold text-lg mb-4">Machine Learning & AI</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'Keras', 'NLP', 'RAG', 'LangChain', 'LLMs', 'Computer Vision'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
              <FaCode className="text-3xl text-[#00D9FF] mb-4" />
              <h3 className="font-bold text-lg mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'C', 'Java', 'JavaScript', 'HTML5/CSS3'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
              <FaServer className="text-3xl text-[#ff5722] mb-4" />
              <h3 className="font-bold text-lg mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'FastAPI', 'Flutter', 'Express.js', 'Docker', 'Git'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
              <FaDatabase className="text-3xl text-[#4CAF50] mb-4" />
              <h3 className="font-bold text-lg mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Pinecone', 'ChromaDB'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent md:col-span-2">
              <FiExternalLink className="text-3xl text-white/60 mb-4" />
              <h3 className="font-bold text-lg mb-4">Cloud & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS RDS', 'AWS ELB', 'DynamoDB', 'AWS Amplify', 'AWS Sagemaker'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B19EEF]/10 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="font-display text-4xl md:text-[56px] font-bold tracking-tighter max-w-2xl mx-auto leading-tight">
              Ready to innovate <br /> together?
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Actively seeking Software Engineer or AI/ML Intern roles to apply ML models and build scalable solutions.
            </p>
            <div className="group relative inline-block">
              <div className="absolute -inset-4 bg-[#B19EEF]/20 blur-2xl rounded-full transition-all duration-500 group-hover:bg-[#B19EEF]/40">
              </div>
              <a href="mailto:pandeyadarsh2503@gmail.com" className="relative px-12 py-5 bg-white text-black font-bold rounded-full text-lg transition-transform hover:scale-105 block shadow-xl">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
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
