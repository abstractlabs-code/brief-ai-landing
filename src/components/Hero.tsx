import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-20 lg:pt-28 pb-12 lg:pb-20 px-4 bg-gradient-to-br from-background via-accent/20 to-background min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 lg:mb-8 leading-tight">
            Meet Smarter.{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Summarize Faster.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Transform your remote team meetings with AI-powered transcription, 
            smart summaries, and automated action items. Never miss a detail again.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-8 lg:mb-16 px-4 sm:px-0">
            <Button 
              onClick={scrollToRegister}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-xl font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-xl font-semibold border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm lg:text-base text-muted-foreground px-4 sm:px-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;