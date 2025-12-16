import { Truck, Wrench, Store, Home, Building, Users } from "lucide-react";

const workerTypes = [
  { icon: Wrench, label: "Daily Wage Workers" },
  { icon: Truck, label: "Gig & Delivery Workers" },
  { icon: Store, label: "Street Vendors" },
  { icon: Home, label: "Domestic Helpers" },
  { icon: Building, label: "Construction Workers" },
  { icon: Users, label: "Agricultural Laborers" },
];

const WhoWeServeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-gold/70 font-sans text-sm tracking-widest uppercase">
                Our Community
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
                Who We Serve
              </h2>
              <p className="text-muted-foreground mt-6 font-sans text-lg leading-relaxed">
                We represent the backbone of our economy — the millions who work 
                without formal contracts, fixed wages, or social security benefits. 
                From city streets to rural fields, our association stands with every 
                worker seeking dignity and recognition.
              </p>
              
              <div className="mt-8 p-6 bg-background/50 border border-border rounded-lg">
                <p className="text-foreground font-serif text-lg italic">
                  "Every worker deserves to be seen, heard, and protected — regardless 
                  of the nature of their work."
                </p>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {workerTypes.map((worker, index) => (
                <div
                  key={worker.label}
                  className="group flex flex-col items-center p-6 bg-background border border-border rounded-lg hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                    <worker.icon className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-center text-muted-foreground font-sans group-hover:text-foreground transition-colors">
                    {worker.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
