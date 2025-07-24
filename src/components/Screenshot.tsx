import dashboardMockup from '@/assets/dashboard-mockup.jpg';

const Screenshot = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-accent/20 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-8">
            See Briefly in{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Experience the power of AI-driven meeting analysis with our intuitive dashboard
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-2 lg:p-4 group hover:shadow-3xl transition-all duration-500">
            <img 
              src={dashboardMockup}
              alt="Briefly Dashboard Interface"
              className="w-full h-auto rounded-lg lg:rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-xl lg:rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mt-12 lg:mt-20">
          {[
            {
              number: "1",
              title: "Upload or Connect",
              description: "Connect your video conferencing tool or upload meeting recordings"
            },
            {
              number: "2", 
              title: "AI Processing",
              description: "Our AI transcribes, analyzes, and extracts key insights automatically"
            },
            {
              number: "3",
              title: "Get Insights", 
              description: "Receive detailed summaries, action items, and meeting analytics"
            }
          ].map((step, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-primary font-bold text-lg lg:text-xl">{step.number}</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2 lg:mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-base px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshot;