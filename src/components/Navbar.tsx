
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md gradient-bg flex items-center justify-center">
              <span className="text-white font-bold">CG</span>
            </div>
            <span className="font-bold text-xl">CodeGenie</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#join" className="text-gray-600 hover:text-blue-600 transition-colors">Join Waitlist</a>
        </div>

        <div className="hidden md:block">
          <GradientButton>Try for Free</GradientButton>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4 px-4 shadow-md z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#join" 
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
            <GradientButton className="w-full">Try for Free</GradientButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
