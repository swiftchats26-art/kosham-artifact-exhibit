import heroImage from "@/assets/hero-paithani.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative h-full flex flex-col justify-end pb-20 lg:pb-32 px-6 lg:px-12 container mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-4 tracking-tight">
            KOSHAM: The Artifact Layer
          </h1>
          <p className="text-xl lg:text-2xl text-luxury-cream font-light tracking-wider">
            Heritage Wielded. Status Defined.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
