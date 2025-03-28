import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Info, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const SDGSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

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

  // Automatically switch tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev === 0 ? 0 : 2)); // Only toggle between tab 0 and 2, removing tab 1
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // SDG goals with descriptions
  const sdgGoals = [
    { id: 1, name: "No Poverty", color: "bg-red-600" },
    { id: 2, name: "Zero Hunger", color: "bg-amber-500" },
    { id: 3, name: "Good Health & Well-being", color: "bg-green-600" },
    { id: 4, name: "Quality Education", color: "bg-red-700" },
    { id: 5, name: "Gender Equality", color: "bg-orange-600" },
    { id: 6, name: "Clean Water & Sanitation", color: "bg-blue-500" },
    { id: 7, name: "Affordable & Clean Energy", color: "bg-yellow-400" },
    { id: 8, name: "Decent Work & Economic Growth", color: "bg-red-500" },
    { id: 9, name: "Industry, Innovation & Infrastructure", color: "bg-orange-500" },
    { id: 10, name: "Reduced Inequalities", color: "bg-pink-600" },
    { id: 11, name: "Sustainable Cities", color: "bg-amber-600" },
    { id: 12, name: "Responsible Consumption", color: "bg-amber-700" },
    { id: 13, name: "Climate Action", color: "bg-green-500" },
    { id: 14, name: "Life Below Water", color: "bg-blue-600" },
    { id: 15, name: "Life On Land", color: "bg-green-700" },
    { id: 16, name: "Peace, Justice & Strong Institutions", color: "bg-blue-700" },
    { id: 17, name: "Partnerships For The Goals", color: "bg-blue-800" },
  ];

  // Focus areas where YALI is making impact with AI
  const focusAreas = [
    {
      title: "Climate Intelligence",
      description: "AI-powered analytics for predicting and mitigating climate change impacts across sectors.",
      goals: [13, 14, 15],
      icon: "🌍",
    },
    {
      title: "Healthcare Access",
      description: "Democratizing healthcare through AI diagnostics and treatment recommendations for underserved communities.",
      goals: [3, 10],
      icon: "🏥",
    },
    {
      title: "Smart Resource Management",
      description: "Optimizing water, energy, and food distribution using predictive AI modeling and intelligent allocation.",
      goals: [6, 7, 12, 2],
      icon: "💧",
    },
    {
      title: "Educational AI Tools",
      description: "Providing personalized learning experiences and expanding educational access through AI.",
      goals: [4, 5],
      icon: "📚",
    },
  ];

  // Content tabs for the SDG section - removed "Our Impact" tab
  const tabs = [
    { id: 0, name: "The Goals", icon: "🎯" },
    { id: 2, name: "Get Involved", icon: "🤝" }
  ];

  return (
    <section 
      id="sdgs" 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Creative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background"></div>
      <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-green-400/5 rounded-full blur-3xl animate-pulse opacity-70"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: "3s" }}></div>
      <div className="absolute top-1/3 left-10 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDuration: "5s", animationDelay: "0.5s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header with modern design */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div 
            className={cn(
              "inline-flex items-center justify-center mb-4 gap-2 px-4 py-1.5 rounded-full border border-purple-500/20",
              "bg-gradient-to-r from-purple-500/10 to-blue-500/10",
              "backdrop-blur-sm",
              "transition-all duration-500 transform hover:scale-105",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <Info className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium uppercase tracking-wider text-purple-500/90">UN SDGs</span>
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight",
              "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
              "transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Sustainable Development Goals
          </h2>
          
          <p 
            className={cn(
              "text-lg text-foreground/70 mx-auto",
              "transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            The United Nations' 17 Sustainable Development Goals are a universal call to action to end poverty, 
            protect the planet, and ensure prosperity for all by 2030.
          </p>
          
          {/* Added new CTA button to visit the dedicated SDG page */}
          <div className={cn(
            "mt-8 flex justify-center gap-4",
            "transition-all duration-500 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Link
              to="/sdgs"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              Explore SDGs in Detail
            </Link>
          </div>
        </div>

        <div className={cn(
          "flex justify-center mb-12 overflow-x-auto py-2 scrollbar-none",
          "transition-all duration-500 delay-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="inline-flex bg-background/50 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  activeTab === tab.id 
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                )}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic content based on active tab */}
        <div className="mb-16">
          {/* Tab 1: The Goals */}
          {activeTab === 0 && (
            <div className={cn(
              "transition-all duration-500 animate-fade-in",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              {/* Showcase SDG wheel image with modern 3D effect */}
              <div className="max-w-md mx-auto mb-16 relative">
                <div className="relative w-full aspect-square overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105 hover:rotate-12 group cursor-pointer neo-blur">
                  {/* Main SDG image */}
                  <img 
                    src="/lovable-uploads/b63924a1-623c-4ec0-8281-2abbb019e4e6.png" 
                    alt="UN Sustainable Development Goals" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* Info badge */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs py-1 px-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <Info className="w-3 h-3" />
                    <span>Explore all 17 goals</span>
                  </div>
                </div>
                
                {/* Decorative orbiting elements */}
                <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-full border border-purple-500/30 animate-spin-slow"></div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-full border border-blue-500/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Floating badges */}
                <div className="absolute top-0 -right-10 px-3 py-1 bg-green-500/80 text-white text-xs rounded-full animate-float">
                  Planet
                </div>
                <div className="absolute -left-8 top-1/3 px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full animate-float" style={{ animationDelay: "1s" }}>
                  People
                </div>
                <div className="absolute -bottom-2 left-1/3 px-3 py-1 bg-amber-500/80 text-white text-xs rounded-full animate-float" style={{ animationDelay: "2s" }}>
                  Prosperity
                </div>
              </div>

              <div className="md:hidden mb-12">
                <h3 className="text-xl font-display font-bold mb-4 text-center">The 17 Goals</h3>
                <div className="overflow-x-auto pb-6 scrollbar-none">
                  <div className="inline-flex gap-3 px-4 min-w-max">
                    {sdgGoals.map((goal) => (
                      <div
                        key={goal.id}
                        className={cn(
                          "flex-shrink-0 w-36 h-20 rounded-lg",
                          "flex flex-col items-center justify-center",
                          "transition-all duration-300 hover:scale-105 cursor-pointer",
                          "text-white font-medium text-center shadow-lg",
                          "border border-white/20",
                          goal.color
                        )}
                      >
                        <span className="text-xl font-bold">{goal.id}</span>
                        <span className="text-xs px-2">{goal.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block mb-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-center">The 17 Goals</h3>
                <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
                  {/* First row - 5 goals */}
                  {sdgGoals.slice(0, 5).map((goal) => (
                    <div
                      key={goal.id}
                      className={cn(
                        "h-24 rounded-lg shadow-md neo-blur",
                        "flex flex-col items-center justify-center",
                        "transition-all duration-300 hover:scale-105 cursor-pointer",
                        "text-white font-medium border border-white/20",
                        "group overflow-hidden relative",
                        goal.color
                      )}
                    >
                      <span className="text-2xl font-bold group-hover:scale-110 transition-transform">{goal.id}</span>
                      <span className="text-sm text-center px-2 group-hover:font-bold transition-all">{goal.name}</span>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                    </div>
                  ))}
                  
                  {/* Second row - 5 goals */}
                  {sdgGoals.slice(5, 10).map((goal) => (
                    <div
                      key={goal.id}
                      className={cn(
                        "h-24 rounded-lg shadow-md neo-blur",
                        "flex flex-col items-center justify-center",
                        "transition-all duration-300 hover:scale-105 cursor-pointer",
                        "text-white font-medium border border-white/20",
                        "group overflow-hidden relative",
                        goal.color
                      )}
                    >
                      <span className="text-2xl font-bold group-hover:scale-110 transition-transform">{goal.id}</span>
                      <span className="text-sm text-center px-2 group-hover:font-bold transition-all">{goal.name}</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                    </div>
                  ))}
                  
                  {/* Third row - 5 goals */}
                  {sdgGoals.slice(10, 15).map((goal) => (
                    <div
                      key={goal.id}
                      className={cn(
                        "h-24 rounded-lg shadow-md neo-blur",
                        "flex flex-col items-center justify-center",
                        "transition-all duration-300 hover:scale-105 cursor-pointer",
                        "text-white font-medium border border-white/20",
                        "group overflow-hidden relative",
                        goal.color
                      )}
                    >
                      <span className="text-2xl font-bold group-hover:scale-110 transition-transform">{goal.id}</span>
                      <span className="text-sm text-center px-2 group-hover:font-bold transition-all">{goal.name}</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                    </div>
                  ))}
                  
                  {/* Fourth row - 2 goals centered */}
                  <div className="col-span-2"></div>
                  {sdgGoals.slice(15, 17).map((goal) => (
                    <div
                      key={goal.id}
                      className={cn(
                        "h-24 rounded-lg shadow-md neo-blur",
                        "flex flex-col items-center justify-center",
                        "transition-all duration-300 hover:scale-105 cursor-pointer",
                        "text-white font-medium border border-white/20",
                        "group overflow-hidden relative",
                        goal.color
                      )}
                    >
                      <span className="text-2xl font-bold group-hover:scale-110 transition-transform">{goal.id}</span>
                      <span className="text-sm text-center px-2 group-hover:font-bold transition-all">{goal.name}</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                    </div>
                  ))}
                  <div className="col-span-2"></div>
                </div>
              </div>
              
              {/* Updated Learn more link to point to the new SDG page */}
              <div className="text-center mt-8">
                <Link 
                  to="/sdgs" 
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-medium transition-colors"
                >
                  Learn more about the UN SDGs 
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
          
          {/* Tab 3: Get Involved (now Tab 2) */}
          {activeTab === 2 && (
            <div className={cn(
              "transition-all duration-500 animate-fade-in max-w-4xl mx-auto",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              <div className="bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-center">Join Our Mission</h3>
                <p className="text-center text-foreground/80 mb-8">
                  Be part of the global movement to leverage AI for sustainable development.
                  There are multiple ways to get involved with YALI's AI4SF initiative.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🤝</span> Partner With Us
                    </h4>
                    <p className="text-foreground/70 text-sm mb-4">
                      Collaborate on sustainable AI projects that align with your organization's goals and the SDGs.
                    </p>
                    <a href="/start-project" className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center gap-1">
                      Start a conversation <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔬</span> Research Collaboration
                    </h4>
                    <p className="text-foreground/70 text-sm mb-4">
                      Join our research initiatives to advance the field of sustainable AI and measure impact.
                    </p>
                    <a href="/start-project" className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center gap-1">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌱</span> Implement Solutions
                    </h4>
                    <p className="text-foreground/70 text-sm mb-4">
                      Deploy our sustainable AI solutions in your organization or community to drive impact.
                    </p>
                    <a href="/start-project" className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center gap-1">
                      Get started <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <a 
                    href="/start-project" 
                    className="interactive inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/20"
                  >
                    Start a Sustainable AI Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
