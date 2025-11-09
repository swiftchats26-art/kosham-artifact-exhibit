const RaritySection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="animate-fade-in-delay-1">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-luxury-burgundy mb-8 text-center">
            The Paithani Series
          </h2>
          <div className="h-px w-24 bg-luxury-burgundy mx-auto mb-8" />
          <p className="text-xl lg:text-2xl text-center font-light leading-relaxed text-foreground">
            Only 50 Will Ever Be Created.
          </p>
          <p className="text-base lg:text-lg text-center mt-8 text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Each piece is a convergence of centuries-old Paithani weaving tradition and precision engineering. 
            This is not mass production. This is controlled scarcity—by design, by intention, by heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RaritySection;
