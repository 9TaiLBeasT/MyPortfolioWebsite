
import { SectionTitle } from "../ui/SectionTitle";
import { SkillBlock } from "../ui/SkillBlock";
import { useState, useEffect } from "react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        const isVisible = position.top < window.innerHeight - 200;
        if (isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "Dart"],
    },
    {
      title: "Databases",
      skills: ["MySQl",],
    },
    {
      title: "Tools",
      skills: [
        "VSCode",
        "Git",
        "Github",
        "Microsoft office Suite",
        "Windsurf",
        "Cursor"
      ],
    },
    {
      title: "Other",
      skills: ["HTML", "CSS",],
    },
    {
      title: "Frameworks",
      skills: ["Tensorflow", "Keras", "Streamlit", "Scikit-learn", "Flutter",],
    },
  ];

  return (
    <section id="skills" className="mt-32">
      <SectionTitle title="skills" className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <SkillBlock
              title={category.title}
              skills={category.skills}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16 relative overflow-hidden rounded-lg border border-muted">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative bg-card/50 backdrop-blur-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want to work together?</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(134,67,245,0.4)] px-6 py-2"
          >
            Contact Me <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
