
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Hero } from "@/components/Home/Hero";
import { Quote } from "@/components/Home/Quote";
import { Projects } from "@/components/Home/Projects";
import { Skills } from "@/components/Home/Skills";
import { About } from "@/components/Home/About";
import { Contact } from "@/components/Home/Contact";
import { useEffect } from "react";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add padding to body to account for fixed header
    document.body.style.paddingTop = '0';
    
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="max-w-[1200px] mx-auto px-4 pt-16">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
