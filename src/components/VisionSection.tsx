const VisionSection = () => {
  return (
    <section className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gold/5 blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <span className="text-gold/70 font-sans text-sm tracking-widest uppercase">
            Our Vision
          </span>

          {/* Quote */}
          <blockquote className="mt-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-foreground">
              "A future where every worker — 
              <span className="text-gradient-gold"> organized or not </span>
              — stands equal in dignity, opportunity, and protection."
            </p>
          </blockquote>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-3 h-3 rotate-45 border border-gold/50" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* Supporting Text */}
          <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            We envision a nation where the informal workforce is fully integrated 
            into the formal economy — with access to rights, resources, and recognition 
            that empowers them to build better lives.
          </p>

          {/* Values */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["Dignity", "Inclusion", "Empowerment", "Justice"].map((value) => (
              <span
                key={value}
                className="px-5 py-2 border border-gold/30 text-gold/80 font-sans text-sm tracking-wide rounded-full"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
