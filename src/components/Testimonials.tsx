import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Product Manager at TechFlow",
      quote: "Briefly has transformed how our remote team handles meetings. The AI summaries are incredibly accurate, and we never miss important action items anymore. It's like having a dedicated note-taker in every meeting.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      title: "Engineering Lead at DataSync",
      quote: "The time we save with Briefly is incredible. What used to take us 30 minutes of post-meeting cleanup now happens automatically. The action item detection is spot-on and keeps our team accountable.",
      avatar: "MR"
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-4 bg-background scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-8">
            Loved by{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Remote Teams
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            See what teams are saying about their experience with Briefly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-4 lg:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-base lg:text-lg text-foreground mb-6 lg:mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-semibold mr-3 lg:mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm lg:text-base">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs lg:text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;