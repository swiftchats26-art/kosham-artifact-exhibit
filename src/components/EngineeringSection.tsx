const EngineeringSection = () => {
  const features = [
    {
      title: "Authentic Paithani Provenance",
      description: "Sourced directly from master weavers in Maharashtra. Each textile carries generations of craft lineage."
    },
    {
      title: "Automotive-Grade Suede Base",
      description: "Premium ≥300 GSM suede foundation. Engineered for daily resilience without compromise."
    },
    {
      title: "3M VHB Precision Adhesion",
      description: "Industrial-grade bonding system. Zero lift, zero degradation, absolute permanence."
    },
    {
      title: "Hydrophobic Nano-Coating",
      description: "Advanced molecular barrier protection. Heritage preserved against the elements."
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="animate-fade-in-delay-2">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-luxury-burgundy mb-6">
              Heirloom Engineering
            </h2>
            <div className="h-px w-24 bg-luxury-burgundy mb-8" />
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              The ₹8,999 is not a price. It is recognition of what converges here: 
              heritage textile art, materials science, and uncompromising craft standards.
            </p>
          </div>

          <div className="space-y-8 animate-fade-in-delay-2">
            {features.map((feature, index) => (
              <div key={index} className="border-l-2 border-luxury-cream pl-6">
                <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
