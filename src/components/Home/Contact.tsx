
import { SectionTitle } from "../ui/SectionTitle";
import { CustomButton } from "../ui/CustomButton";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "" // success or error
  });
  const [isVisible, setIsVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contacts');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setFormStatus({
        message: "Thank you! Your message has been sent successfully.",
        type: "success"
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          message: "",
          type: ""
        });
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        message: "Oops! Something went wrong. Please try again later.",
        type: "error"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="mt-32 mb-20">
      <SectionTitle title="contacts" />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm interested in freelance opportunities. However, if you have other
            requests or questions, don't hesitate to contact me using the form
            or through social media channels.
          </p>
          
          <div className="mt-8 border border-muted bg-card rounded-lg overflow-hidden glow-effect">
            <h3 className="text-white font-bold p-4 border-b border-muted flex items-center">
              <span className="text-primary mr-2 animate-pulse">#</span>
              Message me here
            </h3>
            <div className="p-6 space-y-4">
              <a href="https://wa.me/7842329947" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                <div className="bg-muted/30 p-2 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">!Ganesh</span>
              </a>
              
              <a href="mailto:gtsganesh2005@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                <div className="bg-muted/30 p-2 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7-10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">gtsganesh2005@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`border border-muted bg-card rounded-lg overflow-hidden glow-effect transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <h3 className="text-white font-bold p-4 border-b border-muted flex items-center">
            <span className="text-primary mr-2 animate-pulse">#</span>
            Contact Form
          </h3>
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-muted-foreground mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-muted/20 border border-muted rounded-md p-3 text-white focus:border-primary focus:outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(134,67,245,0.3)]" 
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-muted-foreground mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-muted/20 border border-muted rounded-md p-3 text-white focus:border-primary focus:outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(134,67,245,0.3)]" 
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-muted-foreground mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full bg-muted/20 border border-muted rounded-md p-3 text-white focus:border-primary focus:outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(134,67,245,0.3)]" 
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            {formStatus.message && (
              <div className={`p-3 rounded-md ${formStatus.type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-red-900/30 text-red-400 border border-red-800'}`}>
                {formStatus.message}
              </div>
            )}
            
            <CustomButton 
              type="submit" 
              className="w-full relative overflow-hidden group"
              disabled={submitting}
            >
              {submitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  Send Message
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </>
              )}
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};
