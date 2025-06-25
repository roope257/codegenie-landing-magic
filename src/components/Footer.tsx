import { Mail } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gray-700">
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold">CG</span>
              </div>
              <span className="font-bold text-xl">CodeGenie</span>
            </div>
            <p className="text-gray-400 mb-4">
              The AI-powered coding assistant that helps developers write better code faster.
            </p>
            <SocialLinks />
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Licenses</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:info@codegenie.ai" className="text-gray-400 hover:text-white transition-colors">info@codegenie.ai</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CodeGenie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
