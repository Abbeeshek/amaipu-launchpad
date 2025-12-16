const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-border">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Unorganized Workers Association
              </h3>
              <p className="text-sm text-muted-foreground mt-1 font-sans">
                AMAIPU / SARA / AMAIPU
              </p>
            </div>

            {/* Network Badge */}
            <div className="flex items-center gap-3 px-5 py-3 bg-background border border-border rounded-lg">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse-subtle" />
              <span className="text-sm text-muted-foreground font-sans">
                Network Global Ecosystem
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-sm font-sans text-foreground uppercase tracking-wider mb-4">
                Mission
              </h4>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Empowering unorganized workers through representation, welfare access, 
                and dignity in work.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-sans text-foreground uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li>Worker Registration</li>
                <li>Scheme Assistance</li>
                <li>Skill Development</li>
                <li>Legal Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-sans text-foreground uppercase tracking-wider mb-4">
                Contact
              </h4>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Reach out to learn more about membership and services available in your region.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-sans">
              © {new Date().getFullYear()} Unorganized Workers Association. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors font-sans">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors font-sans">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
