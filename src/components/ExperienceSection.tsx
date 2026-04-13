import React from "react";

type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  desc: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    id: "mirai",
    period: "Jul 2025 — Aug 2025",
    role: "AI/ML Intern",
    company: "Mirai School of Technology",
    desc: "Collaborated remotely on building intelligent systems.",
    bullets: [
      "Model development & large-scale dataset handling.",
      "Applied NLP techniques, Data Science & n8n automations for process improvements.",
    ],
  },
  {
    id: "vaishali",
    period: "Jul 2025 — Oct 2025",
    role: "Android Developer",
    company: "Vaishali Tech",
    desc: "Worked closely with a cross-functional team to develop and maintain Android applications.",
    bullets: [
      "Flutter application development & maintenance ensuring high performance.",
      "API integrations handling remote backend data efficiently.",
    ],
  },
  {
    id: "bennett",
    period: "Aug 2023 — 2027",
    role: "B.Tech Computer Science & Engineering (AI/ML)",
    company: "Bennett University",
    desc: "Pursuing Bachelor of Technology with a strong CGPA of 8.2 and deep focus on AI and ML systems.",
    bullets: [
      "Dedicated coursework in advanced Data Structures & Algorithms, and System Design.",
      "Active participant in tech hackathons like Smart India Hackathon.",
    ],
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 relative max-w-5xl mx-auto">
      <div className="mb-16 text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white/90">
          <span className="inline-block mr-[0.3em]">Experience</span>
        </h2>
        <div 
          className="h-[2px] w-24 mt-4 origin-left" 
          style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6)' }}
        ></div>
        <p className="mt-4 text-white/60 text-lg max-w-xl">
          My professional journey and academic background.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
          <div 
            className="w-full h-full origin-top" 
            style={{ background: 'linear-gradient(180deg, #00f0ff, #8b5cf6, #10b981)' }}
          ></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex items-start gap-8 md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ml-16 md:ml-0 md:text-left ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-xl md:text-2xl font-bold font-display mt-1 text-white">{exp.role}</h3>
                <p className="text-white/60 mt-1 font-medium">{exp.company}</p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">
                  {exp.desc}
                </p>
                <ul className={`mt-4 space-y-2 inline-block w-full ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} className={`text-sm text-white/50 flex items-start gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <span className={`text-[#10b981] mt-0.5 shrink-0 ${index % 2 === 0 ? 'md:hidden' : ''}`}>▸</span>
                      <span>{b}</span>
                      <span className={`text-[#10b981] mt-0.5 shrink-0 hidden ${index % 2 === 0 ? 'md:inline-block' : ''}`}>◂</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div 
                className="absolute left-6 md:left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00f0ff]" 
                style={{ boxShadow: '0 0 20px rgba(0,240,255,0.4)' }}
              ></div>
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
