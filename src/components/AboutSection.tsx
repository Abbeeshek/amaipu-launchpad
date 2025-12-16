const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold/70 font-sans text-sm tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
              About the Association
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
              The Unorganized Workers Association is a structured, mission-driven body 
              established to represent, protect, and empower workers in the unorganized sector. 
              Operating within the <span className="text-gold">Network Global ecosystem</span>, 
              we serve as a bridge between informal workers and formal systems of welfare, 
              recognition, and opportunity.
            </p>

            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              Our association provides a unified platform for millions of workers who have 
              historically operated without institutional support, ensuring their voices are 
              heard and their rights protected.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 mt-12 border-t border-border">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-gradient-gold">93%</div>
                <p className="text-sm text-muted-foreground mt-2 font-sans uppercase tracking-wide">
                  Workforce Unorganized
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-gradient-gold">450M+</div>
                <p className="text-sm text-muted-foreground mt-2 font-sans uppercase tracking-wide">
                  Workers in India
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-gradient-gold">∞</div>
                <p className="text-sm text-muted-foreground mt-2 font-sans uppercase tracking-wide">
                  Potential Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
