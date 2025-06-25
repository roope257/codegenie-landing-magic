
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
