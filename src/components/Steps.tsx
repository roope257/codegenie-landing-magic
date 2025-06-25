
import { Code, Zap, CheckCircle } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description 
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative text-center">
    {/* Step number with gradient background */}
    <div className="mx-auto mb-6 h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
      {number}
    </div>
    
    {/* Icon */}
    <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center">
      {icon}
    </div>
    
    {/* Content */}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Steps = () => {
  const steps = [
    {
      number: "1",
      icon: <Code size={24} className="text-green-600" />,
      title: "Write Your Code",
      description: "Start coding as usual in your favorite editor. CodeGenie works seamlessly with your existing workflow."
    },
    {
      number: "2", 
      icon: <Zap size={24} className="text-green-600" />,
      title: "AI Analysis",
      description: "Our AI analyzes your code in real-time, identifying potential improvements and optimization opportunities."
    },
    {
      number: "3",
      icon: <CheckCircle size={24} className="text-green-600" />,
      title: "Get Suggestions",
      description: "Receive intelligent suggestions to improve performance, fix bugs, and enhance code quality instantly."
    }
  ];

  return (
    <SectionContainer className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How <span className="gradient-text">CodeGenie</span> Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get started with CodeGenie in just three simple steps and transform your coding experience.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <StepCard 
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
        
        {/* Connecting lines - positioned behind the circles */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 pointer-events-none z-0">
          <div className="flex justify-between items-center h-full max-w-5xl mx-auto px-8">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-green-200 to-emerald-200 mx-8"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-green-200 to-emerald-200 mx-8"></div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Steps;
