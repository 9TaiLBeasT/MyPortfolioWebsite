
import { SectionTitle } from "../ui/SectionTitle";
import { CustomButton } from "../ui/CustomButton";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-me');
      if (element) {
        const position = element.getBoundingClientRect();
        const isVisible = position.top < window.innerHeight - 200;
        if (isVisible) {
          setIsVisible(true);
        }
      }
      
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Social media links
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/9TaiLBeasT", label: "GitHub", color: "#333" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/gtsganesh/", label: "LinkedIn", color: "#0077B5" },
    { icon: <Twitter size={20} />, url: "https://x.com/GGanesh192349", label: "Twitter", color: "#1DA1F2" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/ganesh_tx/", label: "Instagram", color: "#E1306C" },
  ];

  return (
    <section id="about-me" className="mt-32 relative">
      {/* Floating Social Icons */}
      <div 
        className="fixed left-5 z-40 hidden lg:flex flex-col gap-4 transition-all duration-700 opacity-80 hover:opacity-100"
        style={{ 
          top: "50%", 
          transform: "translateY(-50%)",
          display: scrollY > 300 ? "flex" : "none"
        }}
      >
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(134,67,245,0.5)]"
            style={{ 
              backgroundColor: social.color,
              transform: `translateY(${Math.sin((scrollY + index * 100) / 200) * 5}px)` 
            }}
            aria-label={social.label}
            data-tooltip={social.label}
          >
            {social.icon}
            <span className="absolute left-full ml-2 px-2 py-1 bg-card text-xs rounded opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      <SectionTitle title="about-me" />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="text-muted-foreground font-normal leading-relaxed space-y-4 staggered-fade-in">
            <p className="text-lg relative pl-4 border-l-2 border-primary">
              Hello, I'm <span className="text-white font-medium text-glow">Ganesh</span>!
            </p>
            
            <p className="relative">
              I'm a <span className="text-white font-medium">Computer Science and Engineering student</span> with a strong foundation in Python and a keen interest in AI and machine learning.
              <span className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </p>
            
            <p className="group relative hover:pl-1 transition-all duration-300">
              <span className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Exploring innovative solutions and developing intelligent systems has been my passion.
               I am constantly learning and applying my knowledge to real-world problems, 
               striving to build impactful and efficient applications. 
               My journey involves continuous growth, staying updated with emerging technologies, and refining my problem-solving skills.
            </p>
            
            <div className="pt-2">
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border border-muted rounded-lg p-4 hover:border-primary transition-colors duration-300 hover:-translate-y-1 transform transition-transform">
                  <h4 className="text-white font-semibold mb-1">Still learning</h4>
                  <p className="text-muted-foreground text-sm">Years of experience</p>
                </div>
                <div className="border border-muted rounded-lg p-4 hover:border-primary transition-colors duration-300 hover:-translate-y-1 transform transition-transform">
                  <h4 className="text-white font-semibold mb-1">2+</h4>
                  <p className="text-muted-foreground text-sm">Completed projects</p>
                </div>
              </div>
              
              <CustomButton className="mt-6" variant="outline">
                Read more <span className="ml-2">→</span>
              </CustomButton>
            </div>
          </div>
        </div>
        
        <div className={`relative transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: "0.3s" }}>
          <div className="absolute -top-20 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative border border-muted bg-card rounded-lg overflow-hidden glow-effect">
            <div className="w-full p-4 border-b border-muted">
              <h3 className="text-white font-bold flex items-center">
                <span className="text-primary mr-2">#</span>Education
              </h3>
            </div>
            <div className="p-6 space-y-4 staggered-fade-in">
              <div className="transform transition-transform hover:translate-x-2 hover:text-white p-3 rounded-md hover:bg-muted/10">
                <h4 className="text-white font-semibold flex items-center">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full mr-2"></span>
                  Kendriya Vidyalaya No.1 Uppal 
                </h4>
                <p className="text-muted-foreground ml-5">Secondary & Senior Secondary education</p>
                <p className="text-muted-foreground ml-5">2011 - 2022</p>
              </div>
              <div className="transform transition-transform hover:translate-x-2 hover:text-white p-3 rounded-md hover:bg-muted/10">
                <h4 className="text-white font-semibold flex items-center">
                  <span className="inline-block w-3 h-3 bg-secondary rounded-full mr-2"></span>
                  Aurora Deemed to be University
                </h4>
                <p className="text-muted-foreground ml-5">Higher education</p>
                <p className="text-muted-foreground ml-5">2023 - Present</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 relative border border-muted bg-card rounded-lg overflow-hidden glow-effect">
            <div className="w-full p-4 border-b border-muted">
              <h3 className="text-white font-bold flex items-center">
                <span className="text-primary mr-2">#</span>Languages
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white">English</span>
                  <span className="text-muted-foreground">Fluent</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full w-[90%]"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white">Telugu</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full w-full"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white">Hindi</span>
                  <span className="text-muted-foreground">fluent</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full w-[90%]"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white">German</span>
                  <span className="text-muted-foreground">Basic</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
