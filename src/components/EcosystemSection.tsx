import { ArrowRight } from "lucide-react";

const integrations = [
  {
    title: "PM Welfare Schemes",
    description: "Direct linkage to government programs including PM-SYM, PM-KISAN, and e-Shram registration.",
  },
  {
    title: "Skill Certifications",
    description: "Access to recognized certifications that validate skills and improve employability.",
  },
  {
    title: "MSME Services",
    description: "Support for transitioning to micro-entrepreneurship with Udyam registration assistance.",
  },
  {
    title: "Job Opportunities",
    description: "Connection to formal and informal employment opportunities through our network.",
  },
  {
    title: "Banking Inclusion",
    description: "Facilitation of banking services, micro-loans, and financial products for the unbanked.",
  },
  {
    title: "Insurance Coverage",
    description: "Access to affordable health and life insurance schemes designed for informal workers.",
  },
];

const EcosystemSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gold/70 font-sans text-sm tracking-widest uppercase">
            Integrated Support
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
            Ecosystem Integration
          </h2>
          <p className="text-muted-foreground mt-6 font-sans text-lg">
            Connecting workers to a comprehensive network of services and opportunities
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 bg-card/50 border border-border rounded-lg hover:bg-card hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-sans mb-6">
            Part of the Network Global ecosystem
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 rounded-full text-gold/80 font-sans text-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-subtle" />
            Connected & Active
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
