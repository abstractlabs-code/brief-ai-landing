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
    <section id="register" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Meeting Experience?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of teams already using Briefly to make their meetings more productive. 
            Be the first to know when we launch new features.
          </p>

          <Card className="max-w-lg mx-auto border-border/50 shadow-lg">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Thanks!</h3>
                  <p className="text-muted-foreground">
                    You'll be the first to know when we have updates to share.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Register Interest</h3>
                  <p className="text-muted-foreground mb-6">
                    Get early access and exclusive updates
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 text-lg border-border/50 focus:border-primary"
                    />
                    <Button 
                      type="submit"
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                      Notify Me
                    </Button>
                  </form>
                  
                  <p className="text-sm text-muted-foreground mt-4">
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