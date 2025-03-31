
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "CodeGenie has transformed how I write code. The AI suggestions are spot-on, and I've cut my development time in half.",
    name: "Alex Johnson",
    title: "Senior Developer, TechCorp",
    rating: 5,
  },
  {
    id: 2,
    content: "As a team lead, I was skeptical about AI coding assistants, but CodeGenie proved me wrong. It's like having an expert pair programmer always available.",
    name: "Sarah Chen",
    title: "Engineering Manager, StartupX",
    rating: 5,
  },
  {
    id: 3,
    content: "The error detection feature alone has saved my team countless hours of debugging. CodeGenie pays for itself within the first week of use.",
    name: "Michael Rodriguez",
    title: "Full Stack Developer, DevShop",
    rating: 4,
  },
];

const TestimonialCard = ({ content, name, title, rating }: { content: string; name: string; title: string; rating: number }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
    <div className="flex mb-4">
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
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
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
    <section id="testimonials" className="section">
      <div className="container-custom">
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
              >
                <ChevronLeft size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                disabled={currentIndex + itemsPerPage >= testimonials.length}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
