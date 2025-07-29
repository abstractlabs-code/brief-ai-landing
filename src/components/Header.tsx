import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm border-b border-border/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg lg:text-xl">B</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground">Briefly</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a 
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button 
              onClick={() => scrollToSection('register')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('register')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              Get Started Free
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/10 bg-background/95 backdrop-blur-lg animate-fade-in">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 rounded-lg"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 rounded-lg"
              >
                Pricing
              </button>
              <a 
                href="/blog"
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 rounded-lg"
              >
                Blog
              </a>
              <button 
                onClick={() => scrollToSection('register')}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 rounded-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;