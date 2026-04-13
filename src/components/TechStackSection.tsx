import React from "react";
import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
  invert?: boolean;
};

const languages: Skill[] = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const webDev: Skill[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
];

const aiMl: Skill[] = [
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
];

const dbCloud: Skill[] = [
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
];

const TechGridItem = ({ skill, accentColor }: { skill: Skill, accentColor: string }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-2.5 rounded-2xl cursor-default overflow-hidden bg-[#0f0f17] p-4 border border-white/5 hover:border-white/20 transition-all duration-300">
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
        style={{ background: \`radial-gradient(ellipse at 50% 0%, \${accentColor}12 0%, transparent 60%)\` }}
      ></div>
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-10 h-10 object-contain relative z-10 transition-all duration-300 group-hover:scale-110 drop-shadow-sm" 
        style={skill.invert ? { filter: 'brightness(0) invert(1)' } : {}}
      />
      <span className="text-xs font-mono text-white/50 group-hover:text-white transition-colors duration-300 relative z-10 text-center">
        {skill.name}
      </span>
    </div>
  );
};

export default function TechStackSection() {
  return (
    <section id="skills" className="py-32 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white/90">
          <span className="inline-block mr-[0.3em]">Tech</span>
          <span className="inline-block mr-[0.3em] text-[#B19EEF]">Stack</span>
        </h2>
        <div 
          className="h-[2px] w-24 mt-4 origin-center mx-auto" 
          style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6)' }}
        ></div>
        <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
          Technologies and tools I work with on a daily basis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category 1 */}
        <div className="glass p-6 rounded-2xl flex flex-col transition-all duration-300 hover:border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b80]"></div>
            <h3 className="text-lg font-bold font-mono tracking-wider opacity-90 text-[#f59e0b]">Languages</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {languages.map((skill) => (
              <TechGridItem key={skill.name} skill={skill} accentColor="#f59e0b" />
            ))}
          </div>
        </div>

        {/* Category 2 */}
        <div className="glass p-6 rounded-2xl flex flex-col transition-all duration-300 hover:border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff80]"></div>
            <h3 className="text-lg font-bold font-mono tracking-wider opacity-90 text-[#00f0ff]">Web Engineering</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {webDev.map((skill) => (
              <TechGridItem key={skill.name} skill={skill} accentColor="#00f0ff" />
            ))}
          </div>
        </div>

        {/* Category 3 */}
        <div className="glass p-6 rounded-2xl flex flex-col transition-all duration-300 hover:border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf680]"></div>
            <h3 className="text-lg font-bold font-mono tracking-wider opacity-90 text-[#8b5cf6]">AI / ML</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {aiMl.map((skill) => (
              <TechGridItem key={skill.name} skill={skill} accentColor="#8b5cf6" />
            ))}
          </div>
        </div>

        {/* Category 4 */}
        <div className="glass p-6 rounded-2xl flex flex-col transition-all duration-300 hover:border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b98180]"></div>
            <h3 className="text-lg font-bold font-mono tracking-wider opacity-90 text-[#10b981]">Databases & Cloud</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {dbCloud.map((skill) => (
              <TechGridItem key={skill.name} skill={skill} accentColor="#10b981" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
