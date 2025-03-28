
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isActive) setIsActive(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]);

  // Track click states
  useEffect(() => {
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    // Handle hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLButtonElement || 
        e.target instanceof HTMLAnchorElement ||
        (e.target instanceof HTMLElement && 
          (e.target.classList.contains("interactive") || 
           e.target.closest(".interactive")))
      ) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLButtonElement || 
        e.target instanceof HTMLAnchorElement ||
        (e.target instanceof HTMLElement && 
          (e.target.classList.contains("interactive") || 
           e.target.closest(".interactive")))
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Update cursor position with smooth animation
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    }
    
    if (cursorOutlineRef.current) {
      // Add slight delay to outline for trailing effect
      setTimeout(() => {
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
        }
      }, 50);
    }
  }, [position]);
  
  // Don't render custom cursor on mobile devices
  if (isMobile || typeof window === "undefined") return null;
  
  return (
    <>
      {/* Main cursor dot with animated effects */}
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[100]",
          "transform -translate-x-1/2 -translate-y-1/2",
          "mix-blend-difference",
          "transition-all duration-150 ease-out",
          isActive ? "opacity-100" : "opacity-0",
          isClicked ? "scale-75" : "scale-100"
        )}
      >
        <div className="relative">
          <img 
            src="/lovable-uploads/ab7e8756-d331-4718-b530-01a815e850aa.png" 
            alt="Cursor" 
            className="w-6 h-6 animate-pulse"
          />
          {/* Dynamic glow effect */}
          <div className={cn(
            "absolute inset-0 rounded-full blur-md",
            "bg-purple-500/30 dark:bg-purple-400/40",
            "animate-pulse opacity-75"
          )} />
        </div>
      </div>
      
      {/* Enhanced cursor outline/trail with pulse effect */}
      <div
        ref={cursorOutlineRef}
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[99]",
          "rounded-full border border-primary/40",
          "transform -translate-x-1/2 -translate-y-1/2",
          "transition-all duration-300 ease-out",
          isActive ? "opacity-70" : "opacity-0",
          isHovering ? "w-14 h-14 border-2 scale-110" : "w-8 h-8",
          isHovering ? "bg-primary/5" : ""
        )}
      >
        {/* Interactive element indicator */}
        {isHovering && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-primary/70 font-light">
            interact
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
