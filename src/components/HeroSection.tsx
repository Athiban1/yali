
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import CTAButton from "./CTAButton";
import AnimatedBackground from "./AnimatedBackground";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);
  const navigate = useNavigate();

  // Staggered animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleStartProject = () => {
    // Start exit animation
    setExitAnimation(true);
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate("/start-project");
    }, 600); // Match this with your exit animation duration
  };

  return (
    <section className={cn(
      "relative min-h-screen flex items-center pt-24 overflow-hidden",
      exitAnimation ? "animate-fade-out" : ""
    )}>
      {/* Background Effects */}
      <AnimatedBackground className="opacity-70" />

      {/* Blue Sphere SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" fill="none" viewBox="0 0 1883 1883" className="">
          <g filter="url(#a)">
            <g clipPath="url(#b)">
              <ellipse cx="117" cy="461.05" fill="url(#c)" rx="726.04" ry="1194.33" transform="rotate(63.4 117 461.05)" />
              <ellipse cx="1346.18" cy="413.707" fill="url(#d)" rx="546.775" ry="583.787" transform="rotate(63.4 1346.18 413.707)" />
              <ellipse cx="525.603" cy="-150.93" fill="url(#e)" rx="965.818" ry="491.32" transform="rotate(2.254 525.603 -150.93)" />
            </g>
            <rect width="1713" height="1713" x="1798" y="1798" stroke="#fff" strokeWidth="10" rx="856.5" transform="rotate(-180 1798 1798)" />
          </g>
          <defs>
            <radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(0 1194.33 -726.04 0 117 461.05)" gradientUnits="userSpaceOnUse">
              <stop offset=".51" stopColor="#A070E4" stopOpacity=".62" />
              <stop offset="1" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="matrix(120.12499 923.0695 -864.54598 112.50894 1226.06 74.425)" gradientUnits="userSpaceOnUse">
              <stop offset=".401" stopColor="#A070E4" stopOpacity=".62" />
              <stop offset=".96" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="matrix(12.61821 320.54174 -630.10997 24.80445 525.603 -150.93)" gradientUnits="userSpaceOnUse">
              <stop offset=".51" stopColor="#A070E4" stopOpacity=".62" />
              <stop offset="1" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <clipPath id="b">
              <rect width="1723" height="1723" x="1803" y="1803" fill="#fff" rx="861.5" transform="rotate(-180 1803 1803)" />
            </clipPath>
            <filter id="a" width="1883" height="1883" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_21572_1242" stdDeviation="40" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Chip label */}
          <div
            className={cn(
              "inline-block px-4 py-1.5 mb-6 neo-blur rounded-full",
              "text-sm font-medium text-foreground/80",
              "hover:scale-105 transition-all duration-500",
              "border border-white/10 dark:border-white/5",
              "backdrop-blur-md bg-white/5 dark:bg-black/5",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              AI with a sustainable future
            </span>
          </div>

          {/* Main Headline - removed text scrambling effect */}
          <h1
            className={cn(
              "text-5xl md:text-7xl font-display font-bold tracking-tight uppercase",
              "mb-6 md:mb-8",
              "bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent",
              "transform transition-all duration-700 delay-100 interactive",
              isHoveringTitle ? "scale-105" : "",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            onMouseEnter={() => setIsHoveringTitle(true)}
            onMouseLeave={() => setIsHoveringTitle(false)}
          >
            SUSTAINABLE INTELLIGENCE
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10",
              "transform transition-all duration-700 delay-200",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Harnessing the power of artificial intelligence to create a more sustainable future.
            Our solutions help organizations reduce their environmental impact while driving innovation.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6",
              "transform transition-all duration-700 delay-300",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <button 
              onClick={handleStartProject}
              className="interactive px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start a Project
            </button>

            <a
              href="#about"
              className={cn(
                "text-foreground/80 hover:text-foreground",
                "custom-link px-2 py-1 interactive",
                "transition-colors duration-300"
              )}
            >
              Our Mission
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2",
          "flex flex-col items-center gap-2",
          "transform transition-all duration-700 delay-500",
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <span className="text-sm text-foreground/60">Scroll to discover</span>
        <div className="w-0.5 h-16 bg-foreground/10 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-foreground/40 to-transparent animate-[pulse_2s_ease-in-out_infinite]"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
