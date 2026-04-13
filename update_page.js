const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

const importsToAdd = `
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
`;

content = content.replace(
  'import { FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaServer, FaDatabase } from "react-icons/fa";',
  'import { FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaServer, FaDatabase } from "react-icons/fa";' + importsToAdd
);

const startIndex = content.indexOf('{/* Projects Grid Section */}');
const endIndex = content.indexOf('{/* Footer */}');

if (startIndex !== -1 && endIndex !== -1) {
  const newSections = `
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      `;
  
  content = content.substring(0, startIndex) + newSections + content.substring(endIndex);
  fs.writeFileSync('src/app/page.tsx', content, 'utf-8');
  console.log("Updated page.tsx successfully.");
} else {
  console.log("Could not find start or end index.");
}
