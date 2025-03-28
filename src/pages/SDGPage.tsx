
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Info, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SDGPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Sustainable Development Goals | YALI";
    setIsVisible(true);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // SDG goals with descriptions
  const sdgGoals = [
    { id: 1, name: "No Poverty", color: "bg-red-600", description: "End poverty in all its forms everywhere" },
    { id: 2, name: "Zero Hunger", color: "bg-amber-500", description: "End hunger, achieve food security and improved nutrition" },
    { id: 3, name: "Good Health & Well-being", color: "bg-green-600", description: "Ensure healthy lives and promote well-being for all" },
    { id: 4, name: "Quality Education", color: "bg-red-700", description: "Ensure inclusive and equitable quality education" },
    { id: 5, name: "Gender Equality", color: "bg-orange-600", description: "Achieve gender equality and empower all women and girls" },
    { id: 6, name: "Clean Water & Sanitation", color: "bg-blue-500", description: "Ensure availability and sustainable management of water" },
    { id: 7, name: "Affordable & Clean Energy", color: "bg-yellow-400", description: "Ensure access to affordable, reliable, sustainable energy" },
    { id: 8, name: "Decent Work & Economic Growth", color: "bg-red-500", description: "Promote sustained, inclusive economic growth" },
    { id: 9, name: "Industry, Innovation & Infrastructure", color: "bg-orange-500", description: "Build resilient infrastructure, promote inclusive industrialization" },
    { id: 10, name: "Reduced Inequalities", color: "bg-pink-600", description: "Reduce inequality within and among countries" },
    { id: 11, name: "Sustainable Cities", color: "bg-amber-600", description: "Make cities inclusive, safe, resilient and sustainable" },
    { id: 12, name: "Responsible Consumption", color: "bg-amber-700", description: "Ensure sustainable consumption and production patterns" },
    { id: 13, name: "Climate Action", color: "bg-green-500", description: "Take urgent action to combat climate change and its impacts" },
    { id: 14, name: "Life Below Water", color: "bg-blue-600", description: "Conserve and sustainably use the oceans, seas and marine resources" },
    { id: 15, name: "Life On Land", color: "bg-green-700", description: "Protect, restore and promote sustainable use of terrestrial ecosystems" },
    { id: 16, name: "Peace, Justice & Strong Institutions", color: "bg-blue-700", description: "Promote peaceful and inclusive societies for sustainable development" },
    { id: 17, name: "Partnerships For The Goals", color: "bg-blue-800", description: "Strengthen the means of implementation and revitalize partnerships" },
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: "3s" }}></div>
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDuration: "5s", animationDelay: "0.5s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div 
              className={cn(
                "inline-flex items-center justify-center mb-4 gap-2 px-4 py-1.5 rounded-full",
                "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20",
                "backdrop-blur-sm transition-all duration-500",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <Info className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-purple-500/90">UN SDGs</span>
            </div>
            
            <h1 
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight",
                "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
                "transition-all duration-500 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Sustainable Development Goals
            </h1>
            
            <p 
              className={cn(
                "text-lg text-foreground/70 mx-auto mb-8",
                "transition-all duration-500 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              The United Nations' 17 Sustainable Development Goals (SDGs) are a universal call to action to end poverty, 
              protect the planet, and ensure prosperity for all by 2030.
            </p>
            
            <div className={cn(
              "flex flex-wrap justify-center gap-4",
              "transition-all duration-500 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <a 
                href="#goals" 
                className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors shadow-lg shadow-purple-500/20"
              >
                Explore the Goals
              </a>
              <a 
                href="https://sdgs.un.org/goals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-foreground rounded-lg transition-colors border border-white/10 flex items-center gap-2"
              >
                Official UN SDGs <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Wheel section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* SDG Wheel Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
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
                    <span>Unified global goals</span>
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
            </div>
            
            {/* SDG Description */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Global Goals for Sustainable Development
              </h2>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Sustainable Development Goals (SDGs) are at the heart of the 2030 Agenda for Sustainable Development, 
                  adopted by all United Nations Member States in 2015.
                </p>
                <p>
                  These 17 interconnected goals recognize that ending poverty must go hand-in-hand with strategies that 
                  build economic growth and address a range of social needs including education, health, equality, 
                  and job opportunities, while tackling climate change and preserving our oceans and forests.
                </p>
                <p>
                  At YALI, we're aligning our AI innovations with these global objectives, focusing on where 
                  technology can make the most significant contributions to sustainable development.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#focus-areas" 
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-medium transition-colors"
                >
                  See our focus areas <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The 17 Goals Section */}
      <section id="goals" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">The 17 Goals</h2>
            <p className="text-foreground/70">
              Each of the 17 Sustainable Development Goals has specific targets to be achieved by 2030. 
              Click on each goal to learn more about its objectives and progress.
            </p>
          </div>
          
          {/* Mobile-friendly SDG goals carousel */}
          <div className="md:hidden mb-12">
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
                    onMouseEnter={() => setHoveredGoal(goal.id)}
                    onMouseLeave={() => setHoveredGoal(null)}
                  >
                    <span className="text-xl font-bold">{goal.id}</span>
                    <span className="text-xs px-2">{goal.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop SDG goals grid - Updated for better symmetry */}
          <div className="hidden md:block mb-12">
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
                  onMouseEnter={() => setHoveredGoal(goal.id)}
                  onMouseLeave={() => setHoveredGoal(null)}
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
                  onMouseEnter={() => setHoveredGoal(goal.id)}
                  onMouseLeave={() => setHoveredGoal(null)}
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
                  onMouseEnter={() => setHoveredGoal(goal.id)}
                  onMouseLeave={() => setHoveredGoal(null)}
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
                  onMouseEnter={() => setHoveredGoal(goal.id)}
                  onMouseLeave={() => setHoveredGoal(null)}
                >
                  <span className="text-2xl font-bold group-hover:scale-110 transition-transform">{goal.id}</span>
                  <span className="text-sm text-center px-2 group-hover:font-bold transition-all">{goal.name}</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                </div>
              ))}
              <div className="col-span-2"></div>
            </div>
          </div>
          
          {/* Goal detail card - appears when hovering over a goal */}
          {hoveredGoal && (
            <div className="mt-8 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm border border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white",
                      sdgGoals.find(g => g.id === hoveredGoal)?.color
                    )}>
                      {hoveredGoal}
                    </span>
                    {sdgGoals.find(g => g.id === hoveredGoal)?.name}
                  </CardTitle>
                  <CardDescription>
                    {sdgGoals.find(g => g.id === hoveredGoal)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`https://sdgs.un.org/goals/goal${hoveredGoal}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 text-sm font-medium transition-colors"
                  >
                    Learn more about Goal {hoveredGoal} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="text-center mt-12">
            <a 
              href="https://sdgs.un.org/goals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Visit the UN SDGs Official Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Focus Areas */}
      <section id="focus-areas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Focus Areas</h2>
            <p className="text-foreground/70">
              At YALI, we're focusing our AI capabilities on these key areas aligned with the UN SDGs,
              where we believe technology can have the most significant impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm border border-white/10 overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl -mr-12 -mt-12 opacity-70"></div>
                <CardHeader>
                  <div className="text-4xl mb-2">{area.icon}</div>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/60 mb-4">Related SDGs:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.goals.map(goalId => {
                      const goal = sdgGoals.find(g => g.id === goalId);
                      return (
                        <div 
                          key={goalId} 
                          className={cn(
                            "text-xs text-white px-2 py-1 rounded-full",
                            goal?.color
                          )}
                        >
                          Goal {goalId}: {goal?.name}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/start-project" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all hover:shadow-lg"
            >
              Start a Sustainable AI Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Join Our Mission</h2>
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
      </section>
      
      <Footer />
    </div>
  );
};

export default SDGPage;
