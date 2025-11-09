import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenWaitlist: () => void;
}

const Header = ({ onOpenWaitlist }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-semibold tracking-tight text-luxury-burgundy">
          KOSHAM
        </div>
        <Button 
          onClick={onOpenWaitlist}
          className="bg-luxury-burgundy hover:bg-luxury-burgundy/90 text-primary-foreground font-sans font-medium tracking-wide transition-all duration-300"
        >
          Request Exclusive Invitation
        </Button>
      </div>
    </header>
  );
};

export default Header;
