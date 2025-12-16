import { Users, Heart, BookOpen } from "lucide-react";

const objectives = [
  {
    icon: Users,
    title: "Worker Representation",
    description:
      "Providing a collective voice to workers who lack formal representation. We advocate for their rights at local, state, and national levels.",
  },
  {
    icon: Heart,
    title: "Welfare & Support",
    description:
      "Facilitating access to government welfare schemes, healthcare, insurance, and financial services designed for the informal workforce.",
  },
  {
    icon: BookOpen,
    title: "Awareness & Education",
    description:
      "Conducting programs to educate workers about their rights, available schemes, skill development opportunities, and financial literacy.",
  },
];

const ObjectivesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gold/70 font-sans text-sm tracking-widest uppercase">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
            Core Objectives
          </h2>
          <p className="text-muted-foreground mt-6 font-sans text-lg">
            Three pillars that guide our commitment to the unorganized workforce
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={objective.title}
              className="group relative p-8 bg-card border border-border rounded-lg hover:border-gold/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/15 transition-colors duration-300">
                  <objective.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {objective.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
