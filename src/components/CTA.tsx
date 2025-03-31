
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you soon!",
      });
    }, 1000);
  };

  return (
    <section id="join" className="section relative overflow-hidden">
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container-custom max-w-5xl relative">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Waitlist Today
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the future of coding with CodeGenie. Early users get exclusive benefits and discounted pricing.
            </p>
            
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail 
                  size={16} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white border-0 text-gray-800 focus:ring-2 focus:ring-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-white text-blue-600 hover:bg-blue-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
            
            <p className="text-sm opacity-80 mt-4">
              No spam, ever. We'll email you about CodeGenie updates only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
