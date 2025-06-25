
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const GradientButton = ({ 
  children, 
  className, 
  size = "default",
  onClick,
  type = "button",
  disabled = false
}: GradientButtonProps) => {
  return (
    <Button 
      size={size}
      className={cn("gradient-bg", className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
