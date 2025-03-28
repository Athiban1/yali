
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StartProject = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    description: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Start a Project | Yali";
    
    // Add entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendFormDataByEmail = async (data: typeof formData) => {
    // Simulate sending an email
    // In a real application, you would call an API endpoint here
    console.log("Sending email with form data:", data);
    
    // Dummy recipient email address
    const recipientEmail = "contact@yali-ai4sf.com";
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Return success for the demo
    return {
      success: true,
      message: `Form data successfully sent to ${recipientEmail}`
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.projectType || !formData.description) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSending(true);
    
    try {
      // Send email with form data
      const result = await sendFormDataByEmail(formData);
      
      if (result.success) {
        toast({
          title: "Project submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        
        // Navigate to home after successful submission
        setTimeout(() => navigate("/"), 2000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your project. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  const projectTypes = [
    "AI Sustainability Solution",
    "Carbon Footprint Reduction",
    "Sustainable Energy Optimization",
    "ESG Reporting & Analytics",
    "UN SDG-Focused Project",
    "Custom Solution"
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background Effects */}
      <AnimatedBackground className="opacity-70" />
      
      {/* Blue Sphere SVG in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" fill="none" viewBox="0 0 1883 1883" className="">
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

      {/* Main content */}
      <main className="flex-1 relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className={cn(
            "max-w-3xl mx-auto transform transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Start Your AI4SF Project
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                Let's collaborate to create AI-driven solutions that advance the UN Sustainable Development Goals and make a positive impact.
              </p>
            </div>
            
            <form 
              onSubmit={handleSubmit}
              className={cn(
                "neo-blur rounded-2xl p-8 md:p-10 backdrop-blur-xl",
                "border border-white/10 dark:border-white/5",
                "transition-all duration-500 hover:shadow-lg"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground/80">Organization (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="Company or Organization"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-foreground/80">Project Type <span className="text-red-400">*</span></label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                  >
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="description" className="text-sm font-medium text-foreground/80">Project Description <span className="text-red-400">*</span></label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none"
                    placeholder="Tell us about your project goals, SDGs you want to address, and requirements..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className={cn(
                    "interactive px-8 py-3 flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105",
                    isSending && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSending ? (
                    <>Submitting... <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span></>
                  ) : (
                    <>Submit Project <ArrowRight size={18} /></>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4 items-start neo-blur p-4 rounded-xl">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">SDG Alignment</h3>
                  <p className="text-sm text-foreground/70">All projects directly support UN Sustainable Development Goals.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start neo-blur p-4 rounded-xl">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Free Consultation</h3>
                  <p className="text-sm text-foreground/70">Initial consultation and project assessment at no cost.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start neo-blur p-4 rounded-xl">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Impact Reporting</h3>
                  <p className="text-sm text-foreground/70">Track and measure your project's environmental and social impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartProject;
