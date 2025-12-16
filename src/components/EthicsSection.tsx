import { Shield, Eye, UserCheck, Scale } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Open processes, clear communication, and accountable operations at every level.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Adherence to all applicable laws, regulations, and government guidelines.",
  },
  {
    icon: UserCheck,
    title: "People-First",
    description: "Every decision prioritizes the welfare and dignity of the workers we serve.",
  },
  {
    icon: Scale,
    title: "Equity",
    description: "Fair treatment and equal access to services regardless of background.",
  },
];

const EthicsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold/70 font-sans text-sm tracking-widest uppercase">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
              Ethical Framework
            </h2>
            <p className="text-muted-foreground mt-6 font-sans text-lg max-w-2xl mx-auto">
              Built on principles that ensure trust, integrity, and genuine impact
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex gap-5 p-6 bg-background/50 border border-border rounded-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <principle.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center p-8 bg-background border border-gold/20 rounded-lg glow-gold">
              <Shield className="w-10 h-10 text-gold mb-4" strokeWidth={1} />
              <p className="text-foreground font-serif text-lg">
                Trusted by Workers. Recognized by Institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
