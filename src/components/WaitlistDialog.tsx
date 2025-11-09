import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Validation schema with input sanitization
const waitlistSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(255, "Name must be less than 255 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
  phone: z.string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  city: z.string()
    .trim()
    .min(1, "City is required")
    .max(100, "City must be less than 100 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "City contains invalid characters"),
  pinCode: z.string()
    .trim()
    .min(4, "Pin code must be at least 4 characters")
    .max(10, "Pin code must be less than 10 characters")
    .regex(/^[0-9]+$/, "Pin code must contain only numbers")
});

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pinCode: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate and sanitize input
      const validatedData = waitlistSchema.parse(formData);

      // Insert into database
      const { error } = await supabase
        .from('kosham_waitlist_leads')
        .insert({
          full_name: validatedData.name,
          email: validatedData.email,
          phone_number: validatedData.phone,
          city: validatedData.city,
          pin_code: validatedData.pinCode
        });

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          toast({
            title: "Already Registered",
            description: "This email is already on our waitlist.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Submission Received",
          description: "Your request for exclusive allocation has been recorded. We will review and contact you.",
        });

        setFormData({ name: "", email: "", phone: "", city: "", pinCode: "" });
        onOpenChange(false);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation errors
        const firstError = error.errors[0];
        toast({
          title: "Invalid Input",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "An error occurred. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-border/60 focus:border-luxury-burgundy"
              placeholder="+91 XXXXX XXXXX"
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

          <div className="space-y-2">
            <Label htmlFor="pinCode" className="text-sm font-medium">
              Pin Code
            </Label>
            <Input
              id="pinCode"
              type="text"
              required
              value={formData.pinCode}
              onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
              className="border-border/60 focus:border-luxury-burgundy"
              placeholder="Enter your pin code"
            />
            <p className="text-xs text-muted-foreground">
              Helps us assess regional demand and shipping viability
            </p>
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
