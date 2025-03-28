
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const CTAButton = ({ 
  children, 
  className, 
  href, 
  onClick 
}: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });

  // Handle hover effect tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Position for glow effect
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    
    // Calculate magnetic effect (following cursor slightly)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxDistance = 10; // maximum pixels to move
    
    const moveX = ((x - centerX) / centerX) * maxDistance;
    const moveY = ((y - centerY) / centerY) * maxDistance;
    
    setMagneticPosition({ x: moveX, y: moveY });
  };
  
  // Reset position when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMagneticPosition({ x: 0, y: 0 });
  };

  // Component as either a button or a link
  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={buttonRef as any}
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-full px-6 py-3",
        "flex items-center justify-center gap-2",
        "bg-gradient-to-r from-primary to-primary",
        "text-primary-foreground",
        "text-base font-medium tracking-wide",
        "transition-all duration-300",
        "shadow-[0_0_20px_rgba(0,0,0,0.05)]",
        "hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]",
        "group",
        className
      )}
      style={{
        transform: isHovered ? `translate(${magneticPosition.x}px, ${magneticPosition.y}px)` : '',
        transition: isHovered ? 'transform 0.2s ease-out' : 'transform 0.3s ease-out'
      }}
    >
      {/* Glow effect background */}
      {isHovered && (
        <span 
          className="absolute inset-0 bg-primary-foreground/20"
          style={{
            background: `radial-gradient(circle 80px at ${position.x}px ${position.y}px, rgba(255,255,255,0.3), transparent)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        />
      )}
      
      {/* Border glow effect */}
      <span 
        className={cn(
          "absolute inset-0 -z-10 rounded-full",
          "opacity-0 transition-opacity duration-500",
          isHovered ? "opacity-100" : "",
        )}
        style={{
          background: "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(16, 185, 129, 0.5))",
          filter: "blur(12px)",
          transform: "scale(1.05)",
        }}
      />
      
      <span className="relative z-10">{children}</span>
      
      <ArrowRight 
        className={cn(
          "h-4 w-4 relative z-10",
          "transition-all duration-300 group-hover:translate-x-1"
        )} 
        aria-hidden="true" 
      />
    </Component>
  );
};

export default CTAButton;
