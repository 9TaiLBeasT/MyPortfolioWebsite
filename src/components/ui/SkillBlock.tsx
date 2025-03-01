
import { useState } from "react";

interface SkillBlockProps {
  title: string;
  skills: string[];
}

export const SkillBlock = ({ title, skills }: SkillBlockProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <div className="border border-muted bg-card rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 glow-effect transform hover:-translate-y-2">
      <div className="w-full text-white font-bold text-lg px-4 py-3 bg-card/80 backdrop-blur-sm flex items-center">
        <span className="text-primary mr-2 animate-pulse">#</span>{title}
      </div>
      <div className="border-t border-muted w-full" />
      <div className="flex flex-wrap gap-2 p-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className={`skill-item ${hoveredSkill === skill ? 'border-primary text-white scale-110' : ''}`}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: "fadeIn 0.5s ease-in-out forwards"
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
