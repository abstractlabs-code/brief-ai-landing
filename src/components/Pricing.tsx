import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
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

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 meetings per month",
        "Basic AI transcription",
        "Meeting summaries",
        "Email delivery",
        "7-day history"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per user/month",
      description: "For teams that need advanced features",
      features: [
        "Unlimited meetings",
        "Advanced AI analysis",
        "Action item detection",
        "Team collaboration tools",
        "Unlimited history",
        "Integrations (Slack, Teams)",
        "Priority support",
        "Custom branding"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 px-4 bg-accent/20 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-8">
            Simple,{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Choose the plan that's right for your team. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group animate-fade-in ${
                plan.popular ? 'border-primary/40 shadow-primary/10 lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 lg:pb-8">
                <CardTitle className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-3 lg:mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm lg:text-base">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm lg:text-base px-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-foreground text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToRegister}
                  variant={plan.buttonVariant}
                  className={`w-full rounded-full py-4 lg:py-6 text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25' 
                      : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-16">
          <p className="text-muted-foreground mb-4 text-sm lg:text-base">
            Need a custom plan for your enterprise? 
          </p>
          <Button 
            variant="outline" 
            className="rounded-full px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;