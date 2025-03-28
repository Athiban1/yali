
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart, Shield, Zap, Globe, HeartPulse, Droplets } from "lucide-react";

interface SDGSolution {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  sdgsFocused: string[];
}

const sdgSolutions: SDGSolution[] = [
  {
    id: 1,
    name: "Climate Intelligence",
    description: "AI-powered analytics platform for monitoring, predicting, and managing climate change impacts across sectors.",
    imageUrl: "/placeholder.svg",
    icon: <Globe className="h-6 w-6 text-green-500" />,
    sdgsFocused: [
      "Climate Action",
      "Life Below Water",
      "Life On Land",
      "Sustainable Cities"
    ]
  },
  {
    id: 2,
    name: "HealthAI Access",
    description: "Making healthcare accessible through AI diagnostics, patient monitoring, and treatment recommendations for underserved communities.",
    imageUrl: "/placeholder.svg",
    icon: <HeartPulse className="h-6 w-6 text-red-500" />,
    sdgsFocused: [
      "Good Health & Well-being",
      "Reduced Inequalities",
      "Gender Equality",
      "Quality Education"
    ]
  },
  {
    id: 3,
    name: "ResourceOptimize",
    description: "Intelligent resource management system for water, energy, and food sustainability utilizing predictive modeling.",
    imageUrl: "/placeholder.svg",
    icon: <Droplets className="h-6 w-6 text-blue-500" />,
    sdgsFocused: [
      "Clean Water & Sanitation",
      "Affordable & Clean Energy",
      "Responsible Consumption",
      "Zero Hunger"
    ]
  },
];

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  // Auto-change the active product
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % sdgSolutions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStartProject = () => {
    navigate("/start-project");
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30 dark:to-secondary/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 gap-2 px-4 py-1.5 rounded-full border border-purple-500/20">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium uppercase tracking-wider text-purple-500/90">SDG Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Our AI4SF Solutions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative AI solutions designed to advance the UN Sustainable Development Goals
            and create measurable positive impact for our planet.
          </p>
        </div>

        {/* Solution cards - modern design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sdgSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl transition-all duration-500",
                "neo-blur border border-white/10 dark:border-white/5",
                "hover:shadow-lg transform-gpu",
                "flex flex-col h-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""
              )}
              onClick={() => setActiveSolution(index)}
            >
              {/* Solution icon and active indicator */}
              <div className="flex justify-between items-center p-6 border-b border-white/10 dark:border-white/5">
                <div className="p-3 rounded-full bg-foreground/5">{solution.icon}</div>
                <div className={cn(
                  "h-2 w-2 rounded-full transition-colors duration-300",
                  index === activeSolution ? "bg-primary" : "bg-foreground/20"
                )} />
              </div>

              {/* Solution content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-foreground/70 mb-6 text-sm">
                  {solution.description}
                </p>

                {/* SDGs list */}
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-3 text-foreground/60">SDGs Addressed:</h4>
                  <ul className="space-y-2">
                    {solution.sdgsFocused.map((sdg, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="rounded-full bg-purple-500/10 p-0.5 mt-0.5 min-w-[18px] min-h-[18px] flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground/80">{sdg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action footer */}
              <div className="px-6 pb-6">
                <button
                  className={cn(
                    "w-full py-2.5 px-4 rounded-lg text-sm font-medium",
                    "flex items-center justify-center gap-2",
                    "transition-all duration-300",
                    index === activeSolution
                      ? "bg-purple-500 text-white"
                      : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
                  )}
                  onClick={() => setActiveSolution(index)}
                >
                  {index === activeSolution ? "Active Selection" : "Select Solution"}
                  <ArrowRight size={16} className={index === activeSolution ? "opacity-100" : "opacity-0"} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Solution details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Solution Image */}
          <div
            className={cn(
              "order-2 lg:order-1",
              "transform transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl neo-blur p-4">
              {sdgSolutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    "flex items-center justify-center p-6",
                    index === activeSolution 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95"
                  )}
                >
                  <img
                    src={solution.imageUrl}
                    alt={solution.name}
                    className="object-contain w-full h-full rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Modern 3D-like slanted display stand */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-foreground/10 to-transparent rounded-full blur-xl transform perspective-800 rotateX-60 scale-y-20 opacity-70"></div>
            </div>
          </div>

          {/* Solution Info */}
          <div
            className={cn(
              "order-1 lg:order-2",
              "transform transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="max-w-lg">
              <div className="inline-flex items-center mb-6 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium">
                Featured SDG Solution
              </div>
              
              {sdgSolutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={cn(
                    "transition-all duration-500",
                    index === activeSolution ? "block" : "hidden"
                  )}
                >
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    {solution.name}
                  </h2>
                  <p className="text-xl text-foreground/80 mb-8">
                    {solution.description}
                  </p>
                </div>
              ))}

              <h3 className="text-xl font-bold mb-4">Impact Areas</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-500/10 p-1 mt-0.5">
                    <svg
                      className="w-4 h-4 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground/80">
                    Advancing multiple UN Sustainable Development Goals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-500/10 p-1 mt-0.5">
                    <svg
                      className="w-4 h-4 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground/80">
                    Accessible AI solutions for organizations of all sizes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-500/10 p-1 mt-0.5">
                    <svg
                      className="w-4 h-4 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground/80">
                    Measurable environmental and social impact tracking
                  </span>
                </li>
              </ul>

              <button 
                onClick={handleStartProject}
                className="interactive px-6 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-all hover:scale-105 flex items-center gap-2"
              >
                Start with {sdgSolutions[activeSolution].name}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
