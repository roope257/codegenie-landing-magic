
import { Check, Code, Cpu, PuzzleIcon, ShieldCheck, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
    <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-white" />,
      title: "AI-Powered Code Optimization",
      description: "Our advanced AI analyzes your code to suggest optimizations that improve performance and readability.",
    },
    {
      icon: <ShieldCheck size={24} className="text-white" />,
      title: "Error Detection",
      description: "Catch bugs before they happen with real-time error detection and intelligent fix suggestions.",
    },
    {
      icon: <PuzzleIcon size={24} className="text-white" />,
      title: "Smart Integrations",
      description: "Seamlessly connect with your favorite IDEs, code repositories, and collaboration tools.",
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: "Language Support",
      description: "Works with all popular programming languages including JavaScript, Python, Java, and many more.",
    },
    {
      icon: <Check size={24} className="text-white" />,
      title: "Code Completion",
      description: "Context-aware code suggestions that understand your project's structure and coding style.",
    },
    {
      icon: <Cpu size={24} className="text-white" />,
      title: "Performance Analysis",
      description: "Get insights into potential performance bottlenecks and optimization opportunities.",
    },
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to <span className="gradient-text">Supercharge</span> Your Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CodeGenie offers a suite of tools designed to help you code more efficiently and with fewer errors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
