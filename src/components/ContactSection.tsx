import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse-glow" 
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 23) % 100}%`,
              width: `${Math.max(1, (i % 3))}px`,
              height: `${Math.max(1, (i % 3))}px`,
              animationDelay: `${(i % 5)}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none" style={{ background: 'radial-gradient(circle, #00f0ff, transparent)' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight text-gradient-hero">
          <span className="inline-block mr-[0.3em] text-white">Let's</span>
          <span className="inline-block mr-[0.3em] text-[#B19EEF]">Build</span>
          <span className="inline-block mr-[0.3em] text-[#00f0ff]">Something</span>
          <span className="inline-block mr-[0.3em] text-[#10b981]">Epic</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/50 max-w-xl mx-auto">
          Have a project in mind or just want to chat? I'm always open to discussing new opportunities. Actively seeking Software Engineering roles!
        </p>

        <div className="mt-10">
          <a 
            href="mailto:pandeyadarsh2503@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300 group"
          >
            <span className="text-[#10b981] font-mono text-sm">❯</span>
            <span className="font-mono text-sm text-white/60">
              echo "hello" | mail <span className="text-[#00f0ff] group-hover:text-white transition-colors">pandeyadarsh2503@gmail.com</span>
            </span>
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center cursor-pointer transition-all duration-300 w-12 h-12 rounded-xl glass border border-white/10 text-white/50 hover:text-white hover:border-[#00f0ff]/30">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center cursor-pointer transition-all duration-300 w-12 h-12 rounded-xl glass border border-white/10 text-white/50 hover:text-white hover:border-[#8b5cf6]/30">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:pandeyadarsh2503@gmail.com" className="inline-flex items-center justify-center cursor-pointer transition-all duration-300 w-12 h-12 rounded-xl glass border border-white/10 text-white/50 hover:text-white hover:border-[#f59e0b]/30">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
