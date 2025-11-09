import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  onOpenWaitlist: () => void;
}

const CtaSection = ({ onOpenWaitlist }: CtaSectionProps) => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-luxury-burgundy text-primary-foreground">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
          Allocation Is Controlled
        </h2>
        <p className="text-lg lg:text-xl font-light mb-10 text-luxury-cream">
          Submit your details. We review. We invite. Only then may you reserve your piece.
        </p>
        <Button 
          onClick={onOpenWaitlist}
          size="lg"
          className="bg-luxury-cream hover:bg-luxury-cream/90 text-luxury-dark font-sans font-medium tracking-wide px-12 py-6 text-lg transition-all duration-300"
        >
          Reserve My Allocation
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
