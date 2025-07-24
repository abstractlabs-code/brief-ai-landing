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
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make your meetings more productive and actionable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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