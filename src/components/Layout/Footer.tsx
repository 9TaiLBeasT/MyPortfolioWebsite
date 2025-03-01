
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Check if we're near the bottom of the page
      const isNearBottom = scrollTop + windowHeight > documentHeight - 300;
      
      if (isNearBottom) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="border-t border-muted py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold neon-border animate-pulse-glow">
                G
              </div>
              <div className="text-xl font-bold text-white">Ganesh</div>
            </div>
            
            <p className="text-muted-foreground">
            Computer Science and Engineering student passionate about AI and Python, creating innovative solutions.
            </p>
            
            <p className="text-muted-foreground flex items-center group cursor-pointer">
              <span className="text-primary mr-2 group-hover:rotate-12 transition-transform duration-300"></span>
              <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
            </p>
          </div>
          
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-primary mr-2">#</span>Media
            </h3>
            <div className="flex gap-4">
              <a href="https://github.com/9TaiLBeasT" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gtsganesh/" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/GGanesh192349" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/ganesh_tx/" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-primary mr-2">#</span>Navigation
            </h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-white hover:translate-x-1 transition-all group">
                <span className="text-primary mr-2 group-hover:animate-pulse">#</span>Home
              </a>
              <a href="#about-me" className="block text-muted-foreground hover:text-white hover:translate-x-1 transition-all group">
                <span className="text-primary mr-2 group-hover:animate-pulse">#</span>About Me
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-white hover:translate-x-1 transition-all group">
                <span className="text-primary mr-2 group-hover:animate-pulse">#</span>Skills
              </a>
              <a href="#works" className="block text-muted-foreground hover:text-white hover:translate-x-1 transition-all group">
                <span className="text-primary mr-2 group-hover:animate-pulse">#</span>Projects
              </a>
              <a href="#contacts" className="block text-muted-foreground hover:text-white hover:translate-x-1 transition-all group">
                <span className="text-primary mr-2 group-hover:animate-pulse">#</span>Contacts
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block border-t border-muted px-8 pt-6">
            <p className="text-muted-foreground">
              © Copyright {year}. Made with 
              <span className="text-primary animate-pulse inline-block mx-1">💜</span> 
              by Ganesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
