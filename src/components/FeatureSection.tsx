
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Leaf, Target, Globe, Users, Code, CheckCircle, ArrowRight } from "lucide-react";

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Define our objectives based on the new content
  const objectives = [
    {
      title: "Build Sustainable AI Products",
      description: "Develop innovative AI solutions that address critical sustainability challenges while minimizing environmental impact.",
      icon: <Code className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Cross-Organizational Collaboration",
      description: "Establish working groups across organizations to tackle complex sustainability challenges with diverse expertise.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Impact Evaluation",
      description: "Rigorously assess both positive and negative impacts of AI in scenarios related to Sustainable Development Goals.",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Knowledge Sharing",
      description: "Organize collaborative workshops and publish impact reports to share insights and best practices.",
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: "Accessible AI",
      description: "Make powerful AI solutions accessible to all, regardless of resources or technical capacity.",
      icon: <Target className="w-8 h-8 text-red-500" />,
    }
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background opacity-50"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center justify-center mb-4 gap-2 interactive",
              "px-4 py-1.5 rounded-full",
              "border border-purple-500/20",
              "transition-all duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <Leaf className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium uppercase tracking-wider text-purple-500/90">AI4SF Initiative</span>
          </div>
          
          <h2 
            className={cn(
              "text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-center",
              "bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",
              "transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            AI for a <span className="text-purple-500">Sustainable</span> Future
          </h2>
          
          <p 
            className={cn(
              "text-lg text-foreground/80 mb-8 text-center",
              "transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            YALI is dedicated to producing sustainable AI solutions that advance the United Nations' 
            Sustainable Development Goals (SDGs) and drive positive change through our AI4SF
            (AI for Sustainable Future) initiative.
          </p>
        </div>

        {/* Vision Section - Modern Card Design */}
        <div 
          className={cn(
            "rounded-3xl overflow-hidden mb-20 neo-blur",
            "transition-all duration-500 delay-300",
            "border border-white/10 shadow-xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column with image/gradient */}
            <div className="relative h-full min-h-[300px] bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-8 flex items-center justify-center">
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <path fill="#8B5CF6" d="M37.9,-64.8C47.7,-56.5,53.9,-43.2,59.5,-30.1C65.2,-17,70.3,-3.9,68.6,8.3C66.8,20.5,58.3,31.8,48.2,40.2C38.1,48.7,26.5,54.3,13.9,60.3C1.2,66.3,-12.6,72.8,-24.7,70.7C-36.8,68.7,-47.3,58.2,-57.4,46.7C-67.5,35.2,-77.2,22.9,-78.9,9.2C-80.6,-4.5,-74.2,-19.6,-65.2,-31.6C-56.2,-43.6,-44.4,-52.5,-32,-59.7C-19.6,-66.8,-6.6,-72.2,6.3,-71.9C19.2,-71.6,28.1,-73.1,37.9,-64.8Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-white/80">
                  Leveraging AI to solve complex global challenges defined in the UN's Sustainable Development Goals.
                </p>
              </div>
            </div>

            {/* Right column with content */}
            <div className="p-8 md:p-12">
              <p className="text-foreground/80 mb-6">
                The United Nations' SDGs aim to solve development issues across economic, social, and
                environmental dimensions, and realize sustainable development by 2030. The SDGs call for
                action by "all countries - poor, rich and middle-income - to promote prosperity while protecting
                the planet."
              </p>
              <p className="text-foreground/80 mb-6">
                At YALI, we recognize that AI has a great role to play in addressing these global challenges. As
                highlighted in the UN Secretary General's Digital Cooperation Roadmap: "additional
                understanding of how artificial intelligence can best be deployed to support the achievement of
                the Sustainable Development Goals would be beneficial."
              </p>
              <a href="#products" className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium">
                Explore our solutions <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* About AI4SF Section */}
        <div 
          className={cn(
            "max-w-4xl mx-auto text-center mb-20 bg-gradient-to-b from-background to-secondary/10 rounded-3xl p-10",
            "border border-white/5 neo-blur",
            "transition-all duration-500 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <h3 className="text-2xl font-display font-bold mb-6">About AI4SF</h3>
          <p className="text-foreground/80 text-lg mb-6">
            YALI's AI4SF (AI for Sustainable Future) initiative aims to advance UN Sustainable Development
            Goals through innovative AI solutions and collaborative partnerships with institutions,
            universities, and industries worldwide.
          </p>
          <p className="text-foreground/80 text-lg">
            We collectively promote the realization of SDGs through AI, advancing development across all 17 areas 
            while mitigating potential negative impacts.
          </p>
        </div>

        {/* Our Objectives Grid - Updated for better symmetry with 3x2 grid */}
        <h3 className={cn(
          "text-2xl font-display font-bold mb-10 text-center",
          "transition-all duration-500 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          Our Objectives
        </h3>
        
        {/* Using a flex container for mobile (1 column) and a grid container for larger screens (3x2) */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* First row */}
          {objectives.slice(0, 3).map((objective, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl overflow-hidden group interactive",
                "transition-all duration-500 cursor-pointer",
                "border border-white/10",
                "hover:shadow-lg hover:shadow-purple-500/5",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                { "delay-100": index % 3 === 0 },
                { "delay-200": index % 3 === 1 },
                { "delay-300": index % 3 === 2 }
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Card gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-sm"></div>
              
              {/* Floating gradient on hover */}
              <div 
                className={cn(
                  "absolute -inset-1 opacity-0 blur-xl rounded-xl transition-opacity duration-500",
                  activeIndex === index ? "opacity-20" : ""
                )}
                style={{
                  background: "linear-gradient(45deg, #8B5CF6, #EC4899)"
                }}
              />
              
              <div className="flex flex-col h-full relative z-10 p-8">
                <div className="mb-6 p-3 rounded-xl bg-white/5 backdrop-blur-md w-fit">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {objective.title}
                </h3>
                <p className="text-foreground/70 flex-grow">
                  {objective.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#products" className="inline-flex items-center text-purple-500 hover:text-purple-400 text-sm">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Second row - Only 2 cards for symmetry, centered */}
          <div></div> {/* Empty space for centering */}
          {objectives.slice(3, 5).map((objective, index) => (
            <div
              key={index + 3}
              className={cn(
                "relative rounded-2xl overflow-hidden group interactive",
                "transition-all duration-500 cursor-pointer",
                "border border-white/10",
                "hover:shadow-lg hover:shadow-purple-500/5",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                { "delay-400": index % 2 === 0 },
                { "delay-500": index % 2 === 1 }
              )}
              onMouseEnter={() => setActiveIndex(index + 3)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Card gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-sm"></div>
              
              {/* Floating gradient on hover */}
              <div 
                className={cn(
                  "absolute -inset-1 opacity-0 blur-xl rounded-xl transition-opacity duration-500",
                  activeIndex === index + 3 ? "opacity-20" : ""
                )}
                style={{
                  background: "linear-gradient(45deg, #8B5CF6, #EC4899)"
                }}
              />
              
              <div className="flex flex-col h-full relative z-10 p-8">
                <div className="mb-6 p-3 rounded-xl bg-white/5 backdrop-blur-md w-fit">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {objective.title}
                </h3>
                <p className="text-foreground/70 flex-grow">
                  {objective.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#products" className="inline-flex items-center text-purple-500 hover:text-purple-400 text-sm">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view for objectives - single column */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl overflow-hidden",
                "transition-all duration-500",
                "border border-white/10",
                "hover:shadow-lg hover:shadow-purple-500/5",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                { "delay-100": index === 0 },
                { "delay-200": index === 1 },
                { "delay-300": index === 2 },
                { "delay-400": index === 3 },
                { "delay-500": index === 4 }
              )}
            >
              {/* Card gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-sm"></div>
              
              <div className="flex flex-col h-full relative z-10 p-6">
                <div className="mb-4 p-3 rounded-xl bg-white/5 backdrop-blur-md w-fit">
                  {objective.icon}
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {objective.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
