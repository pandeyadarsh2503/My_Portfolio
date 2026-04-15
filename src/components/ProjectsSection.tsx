import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  id: string;
  number: string;
  title: string;
  href: string;
  descTitle: string;
  description: string;
  stack: string[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
};

const projects: Project[] = [
  {
    id: "neersense",
    number: "01",
    title: "NeerHigh (SIH)",
    href: "https://github.com",
    descTitle: "AI Ocean Data Platform",
    description: "AI-powered ocean data platform using FastAPI-based RAG architecture. Integrated semantic search and automated insight generation over large-scale Argo float datasets.",
    stack: ["Next.js", "FastAPI", "RAG", "LLMs", "ChromaDB"],
    color: "#B19EEF",
    gradientFrom: "rgba(177,158,239,0.15)",
    gradientTo: "rgba(177,158,239,0.06)",
  },
  {
    id: "sahara",
    number: "02",
    title: "SAHARA",
    href: "https://github.com",
    descTitle: "Elderly Care Companion",
    description: "Full-stack companion app with fall detection, emergency alerts, and prescription scanning. Includes Google Calendar API sync for schedule management.",
    stack: ["React", "MongoDB", "Python", "MediaPipe"],
    color: "#00D9FF",
    gradientFrom: "rgba(0,217,255,0.15)",
    gradientTo: "rgba(0,217,255,0.06)",
  },
  {
    id: "medicare",
    number: "03",
    title: "MediCare AI",
    href: "https://github.com",
    descTitle: "RAG-enabled Medical Chatbot",
    description: "Medical chatbot delivering context-aware health information orchestrating interactions through LangChain prompt engineering and pinecone retrieval pipelines.",
    stack: ["Flask", "RAG", "LangChain", "Pinecone", "AWS"],
    color: "#ff5722",
    gradientFrom: "rgba(255,87,34,0.15)",
    gradientTo: "rgba(255,87,34,0.06)",
  },
  {
    id: "shoplifting",
    number: "04",
    title: "Shoplifting Detection",
    href: "https://github.com",
    descTitle: "Computer Vision Security",
    description: "Computer vision system utilizing deep learning to automatically identify suspicious behaviors in retail surveillance footage to minimize theft.",
    stack: ["PyTorch", "TensorFlow", "OpenCV"],
    color: "#4CAF50",
    gradientFrom: "rgba(76,175,80,0.15)",
    gradientTo: "rgba(76,175,80,0.06)",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16 text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white/90">
          <span className="inline-block mr-[0.3em]">Featured</span>
          <span className="inline-block mr-[0.3em] text-[#B19EEF]">Work</span>
        </h2>
        <div 
          className="h-[2px] w-24 mt-4 origin-left" 
          style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6)' }}
        ></div>
        <p className="mt-4 text-white/60 text-lg max-w-xl">
          Selected projects that showcase my passion for building exceptional digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((p) => (
          <div key={p.id} className="group relative w-full h-full">
            <div 
              className="relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col"
              style={{
                background: 'linear-gradient(145deg, rgba(17, 17, 24, 0.9) 0%, rgba(13, 13, 18, 0.95) 100%)',
                border: `1px solid ${p.gradientFrom}`,
                boxShadow: `0 4px 30px ${p.gradientTo}`
              }}
            >
              {/* Window Header */}
              <div 
                className="flex items-center gap-2 px-4 py-3 shrink-0" 
                style={{ background: 'rgba(0, 0, 0, 0.3)', borderBottom: `1px solid ${p.gradientFrom}` }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                </div>
                <div 
                  className="flex-1 mx-3 px-3 py-1 rounded-md text-xs font-mono truncate"
                  style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.35)' }}
                >
                  {p.id}.dev
                </div>
              </div>

              {/* Placeholder Image/Visual */}
              <div className="relative aspect-video w-full overflow-hidden shrink-0 bg-[#0a0a0f] flex items-center justify-center">
                <div 
                  className="absolute inset-0 opacity-20" 
                  style={{ background: `radial-gradient(circle at center, ${p.color}, transparent 70%)` }}
                ></div>
                <h2 className="text-3xl font-display font-bold text-white/20 tracking-widest">{p.title.toUpperCase()}</h2>
                <div 
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" 
                  style={{ background: 'linear-gradient(to top, rgba(13, 13, 18, 0.8) 0%, transparent 100%)' }}
                ></div>
              </div>

              {/* Details */}
              <div className="relative px-5 pt-4 pb-5 sm:px-6 sm:pb-6 flex-1 flex flex-col">
                <div 
                  className="absolute top-2 right-5 text-5xl font-bold font-mono opacity-[0.04] pointer-events-none select-none" 
                  style={{ color: p.color }}
                >
                  {p.number}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold font-display mb-1" style={{ color: p.color }}>{p.title}</h3>
                <p className="text-white/80 text-sm mb-2 font-medium">{p.descTitle}</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {p.stack.map(s => (
                    <span 
                      key={s} 
                      className="font-mono text-[10px] px-2 py-0.5 border border-white/10 bg-white/5 text-white/70 rounded-full shrink-0"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="inline-block">
                    <a 
                      href={p.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg text-xs font-mono font-medium gap-1.5 border border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                    >
                      <FiGithub /> Source
                    </a>
                  </div>
                </div>

                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                  style={{ background: `radial-gradient(ellipse at bottom, ${p.gradientFrom} 0%, transparent 70%)` }}
                ></div>
              </div>

              <div 
                className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-80 transition-opacity duration-500" 
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
