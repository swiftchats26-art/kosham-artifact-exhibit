import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Submission Received",
      description: "Your request for exclusive allocation has been recorded. We will review and contact you.",
    });

    setFormData({ name: "", email: "", city: "" });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-luxury-burgundy/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-luxury-burgundy">
            Request Exclusive Invitation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-light">
            Submit your details for consideration. Allocation is selective.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border/60 focus:border-luxury-burgundy"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-border/60 focus:border-luxury-burgundy"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">
              City
            </Label>
            <Input
              id="city"
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="border-border/60 focus:border-luxury-burgundy"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-luxury-burgundy hover:bg-luxury-burgundy/90 text-primary-foreground font-medium tracking-wide"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
