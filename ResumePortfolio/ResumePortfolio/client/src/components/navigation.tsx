import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="font-bold text-xl text-primary cursor-pointer"
            onClick={() => scrollToSection('hero')}
            data-testid="logo-text"
          >
            Aman Deep Yadav
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
