
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
    {/* Combined number and icon container */}
    <div className="mx-auto mb-6 relative flex items-center justify-center">
      {/* Main gradient circle with number */}
      <div className="h-20 w-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10">
        {number}
      </div>
      
      {/* Icon positioned next to the circle with slight overlap */}
      <div className="absolute -right-2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-green-100 z-20">
        {icon}
      </div>
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
      icon: <Code size={20} className="text-green-600" />,
      title: "Write Your Code",
      description: "Start coding as usual in your favorite editor. CodeGenie works seamlessly with your existing workflow."
    },
    {
      number: "2", 
      icon: <Zap size={20} className="text-green-600" />,
      title: "AI Analysis",
      description: "Our AI analyzes your code in real-time, identifying potential improvements and optimization opportunities."
    },
    {
      number: "3",
      icon: <CheckCircle size={20} className="text-green-600" />,
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
        
        {/* Connecting lines between circles */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 pointer-events-none z-0">
          <div className="flex items-center h-full max-w-5xl mx-auto">
            {/* First line: from first circle to second circle */}
            <div className="flex-1 flex justify-end pr-10">
              <div className="w-24 h-0.5 bg-gradient-to-r from-green-600 via-green-300 to-green-600"></div>
            </div>
            {/* Space for second circle */}
            <div className="w-20"></div>
            {/* Second line: from second circle to third circle */}
            <div className="flex-1 flex justify-start pl-10">
              <div className="w-24 h-0.5 bg-gradient-to-r from-green-600 via-green-300 to-green-600"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Steps;
