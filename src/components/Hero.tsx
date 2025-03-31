import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 mb-2">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Introducing CodeGenie</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Cod <span className="gradient-text">Faster and Smarter</span> with CodeGenie
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              The AI-powered coding assistant that helps you write better code, find bugs before they happen, and complete projects in half the time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/signup" className="inline-block">
                <Button size="lg" className="gradient-bg text-base">
                  Try for Free
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
              <a href="/demo" className="inline-block">
                <Button size="lg" variant="outline" className="text-base">
                  View Demo <Code size={16} className="ml-2" />
                </Button>
              </a>
            </div>
            
            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-medium text-gray-900">1,000+</span> developers already using CodeGenie
              </p>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="w-full md:w-1/2 relative animate-float">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 p-2 flex">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-gray-500">code-editor.js</div>
                </div>
                <div className="bg-gray-900 p-6 text-gray-300 text-sm font-mono overflow-hidden">
                  <p>
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-yellow-300">optimizeCode</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-blue-300">input</span>
                    <span className="text-gray-400">) {"{}"}</span>
                  </p>
                  <p className="pl-4 text-gray-500">// CodeGenie suggestion:</p>
                  <p className="pl-4">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">result</span> ={" "}
                    <span className="text-yellow-300">analyze</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-blue-300">input</span>
                    <span className="text-gray-400">)</span>;
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">if</span>{" "}
                    <span className="text-gray-400">(</span>
                    <span className="text-blue-300">result.complexity</span> {">"}{" "}
                    <span className="text-orange-300">5</span>
                    <span className="text-gray-400">) {"{}"}</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-yellow-300">simplifyLogic</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-blue-300">input</span>
                    <span className="text-gray-400">)</span>;
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">{"}"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-blue-300">input</span>;
                  </p>
                  <p>
                    <span className="text-gray-400">{"}"}</span>
                  </p>
                  <div className="inline-flex items-center rounded-md bg-blue-500/20 text-blue-500 px-2 py-1 mt-2">
                    <span className="text-xs">✅ AI improved code efficiency by 40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
