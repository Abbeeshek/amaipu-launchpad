import heroImage from "@/assets/hero-workers.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Workers standing together in solidarity"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <span className="inline-block px-4 py-2 text-sm font-sans tracking-widest uppercase border border-gold/30 text-gold/80 rounded-full">
              Network Global Ecosystem
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold leading-tight tracking-tight opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
            <span className="block text-foreground">Unorganized Workers</span>
            <span className="block text-gradient-gold mt-2">Association</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light tracking-wide opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
            AMAIPU / SARA / AMAIPU
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-serif italic text-foreground/90 opacity-0 animate-[fadeUp_0.8s_ease-out_1s_forwards]">
            Representation. Welfare. Dignity of Work.
          </p>

          {/* CTA */}
          <div className="pt-8 opacity-0 animate-[fadeUp_0.8s_ease-out_1.2s_forwards]">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold/10 border border-gold/30 text-foreground font-sans text-sm tracking-widest uppercase hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 rounded-sm group"
            >
              Learn More
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-subtle">
        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
