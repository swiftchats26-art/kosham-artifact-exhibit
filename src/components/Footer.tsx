const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground font-light">
            © 2025 KOSHAM. All artifacts reserved.
          </div>
          
          <div className="flex gap-8">
            <a 
              href="#provenance" 
              className="text-sm text-muted-foreground hover:text-luxury-burgundy transition-colors duration-300 font-light"
            >
              Artisan Provenance
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-luxury-burgundy transition-colors duration-300 font-light"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
