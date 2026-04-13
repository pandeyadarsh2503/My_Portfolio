import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16 text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white/90">
          <span className="inline-block mr-[0.3em]">About</span>
          <span className="inline-block mr-[0.3em] text-[#B19EEF]">Me</span>
        </h2>
        <div 
          className="h-[2px] w-24 mt-4 origin-left" 
          style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6)' }}
        ></div>
        <p className="mt-4 text-white/60 text-lg max-w-xl">
          A little insight into who I am and what drives me.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              I'm an AI/ML Engineer and Computer Science undergrad with a passion for building scalable, intelligent solutions and visually stunning web applications. From RAG architectures to modern mobile apps, I love bridging the gap between cutting-edge AI research and production-ready products.
            </p>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              I'm deeply involved in Data Science & Machine Learning, building systems with Next.js, FastAPI, Python, and scalable cloud infrastructure like AWS.
            </p>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              I thrive on solving real-world problems through technology—whether it's building NeerSense for ocean data insights, optimizing computer vision performance for SAHARA, or crafting seamless user experiences.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center w-full">
          <div className="relative w-full rounded-xl overflow-hidden border border-white/10 z-10 transition-all duration-300 shadow-xl glass">
            <div>
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a25] border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <span className="ml-3 text-xs text-white/40 font-mono">terminal</span>
              </div>
              <div className="p-5 bg-black/60 font-mono text-sm leading-relaxed overflow-y-auto overflow-x-hidden h-[350px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#10b981]">❯</span>
                  <span className="text-white">whoami</span>
                </div>
                <p className="text-white/60 mb-4">Adarsh Pandey - AI/ML Engineer & Full-Stack Dev</p>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#10b981]">❯</span>
                  <span className="text-white">cat interests.json</span>
                </div>
                <pre className="text-[#f59e0b]">
{`{
  "passions": [
    "Machine Learning & Deep Learning",
    "NLP / RAG Pipelines",
    "Computer Vision",
    "Scalable Web Architecure"
  ],
  "learning": "Always"
}`}
                </pre>
                
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-[#10b981]">❯</span>
                  <span className="text-white"></span>
                  <span className="animate-pulse text-[#00f0ff] ml-0.5">▌</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        <div className="text-center p-6 rounded-2xl glass border border-white/10">
          <div><span className="text-4xl md:text-5xl font-bold font-mono text-gradient-cyan">1+</span></div>
          <p className="text-sm text-white/60 mt-2 font-mono">Years of Experience</p>
        </div>
        <div className="text-center p-6 rounded-2xl glass border border-white/10">
          <div><span className="text-4xl md:text-5xl font-bold font-mono text-gradient-cyan">10+</span></div>
          <p className="text-sm text-white/60 mt-2 font-mono">Projects Built</p>
        </div>
        <div className="text-center p-6 rounded-2xl glass border border-white/10">
          <div><span className="text-4xl md:text-5xl font-bold font-mono text-gradient-cyan">3+</span></div>
          <p className="text-sm text-white/60 mt-2 font-mono">Hackathons Won</p>
        </div>
        <div className="text-center p-6 rounded-2xl glass border border-white/10">
          <div><span className="text-4xl md:text-5xl font-bold font-mono text-gradient-cyan">500+</span></div>
          <p className="text-sm text-white/60 mt-2 font-mono">Cups of Coffee</p>
        </div>
      </div>
    </section>
  );
}
