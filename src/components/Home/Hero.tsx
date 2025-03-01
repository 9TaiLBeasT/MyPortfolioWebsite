
import { CustomButton } from "../ui/CustomButton";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Python Programmer";
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    // Trigger animations after component mount
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="flex flex-col md:flex-row gap-8 pt-36 md:min-h-screen md:items-center">
      <div className="w-full md:w-1/2">
        <div className={`flex flex-col text-base font-medium transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight staggered-fade-in">
            <span className="font-semibold block">Ganesh is a </span>
            <span className="font-semibold block gradient-text">CSE student</span>
            <span className="font-semibold block">and </span>
            <span className="font-semibold block gradient-text">
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-muted-foreground font-normal text-lg leading-relaxed mt-8 max-w-xl fade-in-up" style={{ animationDelay: "0.5s" }}>
          He is passionate about AI and machine learning, continuously exploring innovative solutions and building intelligent systems.
          </p>
          <div className="fade-in-up" style={{ animationDelay: "0.8s" }}>
            <CustomButton className="mt-8 w-fit" size="lg">
              Contact me!! <span className="ml-2">→</span>
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        <div 
          className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: "0.4s" }}
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-lg blur-lg animate-gradient"></div>
          
          <div className="relative overflow-hidden rounded-lg bg-card">
            {/* Inner frame with animated border */}
            <div className="absolute inset-[3px] border-2 border-primary/20 rounded-lg z-20"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-lg z-20"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary rounded-tr-lg z-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary rounded-bl-lg z-20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-lg z-20"></div>
            
            {/* Image container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-80 z-10 
                            group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/assets/profile1.jpg"
                className="aspect-auto object-cover w-full max-h-[500px] transition-transform duration-700 
                         group-hover:scale-102 filter brightness-95"
                alt="Ganesh's portrait"
              />
              
              {/* Animated light effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              <div className="absolute -inset-1/2 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 
                            group-hover:opacity-20 blur-2xl transition-opacity duration-700"></div>
            </div>
          </div>
          
          {/* Status indicator with improved design */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 border border-primary/20 
                        bg-card/95 rounded-xl shadow-lg flex items-center gap-3 p-4 w-max backdrop-blur-sm 
                        hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
            <div>
              <span className="text-muted-foreground">Currently working on </span>
              <span className="font-semibold text-white">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
