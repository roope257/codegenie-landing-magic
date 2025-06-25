
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/ui/SectionContainer";
import { useResponsive } from "@/hooks/useResponsive";
import { testimonials } from "@/constants/testimonials";
import { Testimonial } from "@/types";

const TestimonialCard = ({ content, name, title, rating }: Testimonial) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
    <div className="flex mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          size={20} 
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
        />
      ))}
    </div>
    <p className="text-gray-700 flex-grow mb-4">"{content}"</p>
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { itemsPerPage } = useResponsive();
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <SectionContainer id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="gradient-text">Users Say</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of developers who have already transformed their coding workflow with CodeGenie.
        </p>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              content={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              id={testimonial.id}
            />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= testimonials.length}
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
