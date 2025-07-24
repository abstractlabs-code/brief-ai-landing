import dashboardMockup from '@/assets/dashboard-mockup.jpg';

const Screenshot = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See Briefly in{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven meeting analysis with our intuitive dashboard
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4">
            <img 
              src={dashboardMockup}
              alt="Briefly Dashboard Interface"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Upload or Connect</h3>
            <p className="text-muted-foreground">Connect your video conferencing tool or upload meeting recordings</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">AI Processing</h3>
            <p className="text-muted-foreground">Our AI transcribes, analyzes, and extracts key insights automatically</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Get Insights</h3>
            <p className="text-muted-foreground">Receive detailed summaries, action items, and meeting analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshot;