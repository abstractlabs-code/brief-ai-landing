import { Mic, Brain, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "AI Transcription",
      description: "Real-time speech-to-text conversion with 99% accuracy. Support for multiple languages and accents.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Key Point Extraction",
      description: "Intelligent AI identifies and highlights the most important discussion points and decisions made.",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: CheckCircle,
      title: "Action Item Detection",
      description: "Automatically detects tasks, assignments, and deadlines mentioned during meetings.",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 px-4 bg-background scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-8">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Everything you need to make your meetings more productive and actionable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow text-sm lg:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;