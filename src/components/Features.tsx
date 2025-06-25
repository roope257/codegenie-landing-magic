
import SectionContainer from "@/components/ui/SectionContainer";
import { featuresData, iconMap } from "@/constants/features";
import { Feature } from "@/types";

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: Feature) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
    <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = featuresData.map(feature => {
    const IconComponent = iconMap[feature.iconName as keyof typeof iconMap];
    return {
      icon: <IconComponent size={24} className="text-white" />,
      title: feature.title,
      description: feature.description,
    };
  });

  return (
    <SectionContainer id="features" className="bg-gray-50">
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
    </SectionContainer>
  );
};

export default Features;
