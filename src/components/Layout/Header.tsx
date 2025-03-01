
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine which section is currently active based on scroll position
      const sections = ["home", "about-me", "skills", "works", "contacts"];
      const scrollPosition = window.scrollY + 200; // Add offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-8"
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white font-bold">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white neon-border">
            G
          </div>
          <div className="text-xl">Ganesh</div>
        </div>
        
        <nav className="flex gap-8 font-medium">
          <a 
            href="#home" 
            className={`nav-link flex items-center group ${activeSection === "home" ? "text-white" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1 group-hover:text-primary">#</span>
            <span className="group-hover:text-white transition-colors duration-300">home</span>
          </a>
          <a 
            href="#about-me" 
            className={`nav-link flex items-center group ${activeSection === "about-me" ? "text-white" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1 group-hover:text-primary">#</span>
            <span className="group-hover:text-white transition-colors duration-300">about-me</span>
          </a>
          <a 
            href="#skills" 
            className={`nav-link flex items-center group ${activeSection === "skills" ? "text-white" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1 group-hover:text-primary">#</span>
            <span className="group-hover:text-white transition-colors duration-300">skills</span>
          </a>
          <a 
            href="#works" 
            className={`nav-link flex items-center group ${activeSection === "works" ? "text-white" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1 group-hover:text-primary">#</span>
            <span className="group-hover:text-white transition-colors duration-300">projects</span>
          </a>
          <a 
            href="#contacts" 
            className={`nav-link flex items-center group ${activeSection === "contacts" ? "text-white" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1 group-hover:text-primary">#</span>
            <span className="group-hover:text-white transition-colors duration-300">contacts</span>
          </a>
        </nav>
      </div>
      
      {!scrolled && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <a 
            href="#about-me" 
            className="flex flex-col items-center text-muted-foreground hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown className="animate-bounce text-primary" size={20} />
          </a>
        </div>
      )}
    </header>
  );
};
