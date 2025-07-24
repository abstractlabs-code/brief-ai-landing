import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="register" className="py-16 lg:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5 scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-8">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Meeting Experience?
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-16 max-w-3xl mx-auto px-4 sm:px-0">
            Join thousands of teams already using Briefly to make their meetings more productive. 
            Be the first to know when we launch new features.
          </p>

          <Card className="max-w-lg mx-auto border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center animate-scale-in">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 lg:mb-3">Thanks!</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    You'll be the first to know when we have updates to share.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">Register Interest</h3>
                  <p className="text-muted-foreground mb-6 lg:mb-8 text-sm lg:text-base">
                    Get early access and exclusive updates
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 lg:h-14 text-base lg:text-lg border-border/50 focus:border-primary transition-all duration-300 rounded-xl"
                    />
                    <Button 
                      type="submit"
                      className="w-full h-12 lg:h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-base lg:text-lg font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      Notify Me
                    </Button>
                  </form>
                  
                  <p className="text-xs lg:text-sm text-muted-foreground mt-4 lg:mt-6">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;