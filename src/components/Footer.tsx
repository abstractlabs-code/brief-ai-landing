import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on the homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="py-16 px-4 bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">Briefly</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Transform your remote team meetings with AI-powered transcription, 
              smart summaries, and automated action items.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('register')}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 Briefly. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Made with ❤️ for remote teams everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;