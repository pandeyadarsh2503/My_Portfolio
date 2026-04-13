"use client";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";

type CommandHistory = {
  command: string;
  output: React.ReactNode | null;
};

export default function AboutSection() {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "help",
      output: (
        <div className="mt-1 mb-4">
          <p className="text-[#00f0ff] mb-2 font-bold">Available commands:</p>
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
            <span className="text-[#00f0ff]">about</span> <span className="text-white/60">— Who am I</span>
            <span className="text-[#00f0ff]">education</span> <span className="text-white/60">— Academic background</span>
            <span className="text-[#00f0ff]">contact</span> <span className="text-white/60">— Get in touch</span>
            <span className="text-[#00f0ff]">achievements</span> <span className="text-white/60">— Awards & milestones</span>
            <span className="text-[#00f0ff]">whoami --photo</span> <span className="text-white/60">— Reveal my face 👀</span>
            <span className="text-[#00f0ff]">clear</span> <span className="text-white/60">— Clear terminal</span>
            <span className="text-[#00f0ff]">sudo hire me</span> <span className="text-white/60">— ???</span>
          </div>
          <p className="text-white/40 mt-3">Type a command to explore.</p>
        </div>
      )
    }
  ]);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="mt-1 mb-4">
            <p className="text-[#00f0ff] mb-2 font-bold">Available commands:</p>
            <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <span className="text-[#00f0ff]">about</span> <span className="text-white/60">— Who am I</span>
              <span className="text-[#00f0ff]">education</span> <span className="text-white/60">— Academic background</span>
              <span className="text-[#00f0ff]">contact</span> <span className="text-white/60">— Get in touch</span>
              <span className="text-[#00f0ff]">achievements</span> <span className="text-white/60">— Awards & milestones</span>
              <span className="text-[#00f0ff]">whoami --photo</span> <span className="text-white/60">— Reveal my face 👀</span>
              <span className="text-[#00f0ff]">clear</span> <span className="text-white/60">— Clear terminal</span>
              <span className="text-[#00f0ff]">sudo hire me</span> <span className="text-white/60">— ???</span>
            </div>
          </div>
        );
        break;
      case "about":
        output = <p className="mt-1 mb-3 text-white/80">Hi, I'm Adarsh Pandey. I'm an AI/ML Engineer and Full-Stack Developer passionate about building intelligent systems and creating beautiful web applications.</p>;
        break;
      case "education":
        output = <p className="mt-1 mb-3 text-white/80">B.Tech in Computer Science & Engineering (AI/ML) at Bennett University. Expected graduation: 2027.</p>;
        break;
      case "contact":
        output = (
          <div className="mt-1 mb-3">
            <p className="text-white/80">Email: <a href="mailto:pandeyadarsh2503@gmail.com" className="text-[#00f0ff] hover:underline">pandeyadarsh2503@gmail.com</a></p>
            <p className="text-white/80">GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline">github.com</a></p>
            <p className="text-white/80">LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline">linkedin.com</a></p>
          </div>
        );
        break;
      case "achievements":
        output = (
          <ul className="mt-1 mb-3 list-disc list-inside text-white/80 space-y-1">
            <li>Smart India Hackathon (SIH) Participant</li>
            <li>Built 10+ major scalable projects</li>
            <li>Won 3+ overall tech Hackathons</li>
          </ul>
        );
        break;
      case "whoami --photo":
        output = (
          <div className="mt-1 mb-3 text-white/60 font-mono whitespace-pre text-[10px] leading-tight">
{`   .-"'"-.
  /       \\
 |   o   o |
 |    >    |
  \\  '-'  /
   '-...-'
Here's my virtual self!`}
          </div>
        );
        break;
      case "sudo hire me":
        output = <p className="mt-1 mb-3 text-[#10b981]">Access Granted! 🎉 Feel free to reach out to pandeyadarsh2503@gmail.com to discuss the role!</p>;
        break;
      case "":
        output = null;
        break;
      default:
        output = <p className="mt-1 mb-3 text-[#ff5f56]">Command not found: {trimmedCmd}. Type 'help' to see available commands.</p>;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

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

        {/* INTERACTIVE TERMINAL */}
        <div className="relative flex justify-center w-full">
          <div 
            className="relative w-full rounded-xl overflow-hidden border border-white/10 z-10 transition-all duration-300 shadow-xl glass cursor-text group"
            onClick={handleContainerClick}
          >
            <div>
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a25] border-b border-white/10 relative">
                <div className="flex gap-1.5 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs text-white/40 font-mono">terminal</span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-white/30 hidden sm:block pointer-events-none">
                  type "help" for commands
                </div>
              </div>

              {/* Terminal Body */}
              <div 
                ref={scrollRef}
                className="p-5 bg-black/60 font-mono text-sm leading-relaxed overflow-y-auto overflow-x-hidden h-[350px] custom-scrollbar relative"
              >
                {history.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2">
                      <span className="text-[#10b981]">❯</span>
                      <span className="text-white whitespace-pre-wrap word-break">{item.command}</span>
                    </div>
                    {item.output}
                  </div>
                ))}
                
                {/* Active Input Line */}
                <div className="flex items-center gap-2 relative">
                  <span className="text-[#10b981]">❯</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono min-w-0"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                
                {/* Click to interact overlay/indicator */}
                {!isFocused && input.length === 0 && history.length <= 1 && (
                  <div className="absolute bottom-6 w-full flex justify-center pointer-events-none fade-in">
                    <span className="text-[#00f0ff] opacity-50 px-4 py-1 rounded border border-[#00f0ff]/20 bg-[#00f0ff]/5 animate-pulse">
                      [ click terminal to interact ]
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
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
