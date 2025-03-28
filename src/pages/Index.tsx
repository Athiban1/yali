
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import SDGSection from "@/components/SDGSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = "Yali";
    
    // Add entrance animation
    setIsPageLoaded(true);
    
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload images
    preloadImage("/yali_icon.png");
    preloadImage("/yali.png");
    preloadImage("/yali-dark.png");
    preloadImage("/lovable-uploads/ab7e8756-d331-4718-b530-01a815e850aa.png");
    preloadImage("/lovable-uploads/b63924a1-623c-4ec0-8281-2abbb019e4e6.png");
    
    // Handle scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset the animation state after scrolling completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className={cn(
      "relative",
      "transition-opacity duration-500",
      isPageLoaded ? "opacity-100" : "opacity-0"
    )}>
      {/* Custom cursor effect */}
      <CustomCursor />

      {/* Main content */}
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <SDGSection />
        <Footer />
      </main>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50",
          "w-12 h-12 rounded-full",
          "flex items-center justify-center",
          "bg-primary text-primary-foreground",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-500 ease-in-out",
          "opacity-0 translate-y-10 scale-90",
          "interactive",
          showScrollTop ? "opacity-100 translate-y-0 scale-100" : ""
        )}
      >
        <ArrowUp 
          className={cn(
            "h-5 w-5",
            "transition-transform duration-300",
            isScrolling ? "animate-bounce" : ""
          )} 
        />
      </button>
    </div>
  );
};

export default Index;
