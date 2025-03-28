import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes"; 
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [isMobile, isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/", hash: "" },
    { name: "Products", href: "/#products", hash: "#products" },
    { name: "About", href: "/#about", hash: "#about" },
    { name: "Contact", href: "/#contact", hash: "#contact" },
    { name: "Start Project", href: "/start-project", hash: "" },
  ];

  // Helper to determine the right link for each nav item
  const getNavLink = (item: { name: string; href: string; hash: string }) => {
    // If we're on the home page already, use hash links
    if (location.pathname === "/") {
      return item.hash;
    }
    // Otherwise use full href
    return item.href;
  };

  // Choose logo based on the theme
  const logoSrc = resolvedTheme === "dark" 
    ? "/yali-dark.png" 
    : "/yali.png";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 neo-blur" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoSrc} 
            alt="Logo" 
            className="h-12 w-auto transition-opacity duration-300" 
          />
        </Link>

        {!isMobile ? (
          <nav className="flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      to={item.href}
                      className={cn(
                        "text-sm font-medium custom-link",
                        "transition-colors duration-300",
                        "text-foreground/80 hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={getNavLink(item)} 
                      className={cn(
                        "text-sm font-medium custom-link",
                        "transition-colors duration-300",
                        "text-foreground/80 hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
        ) : (
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-1 neo-blur rounded-lg hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-transform duration-500",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-8 pb-20">
              {navItems.map((item) => (
                item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link 
                    key={item.name}
                    to={item.href}
                    onClick={toggleMenu}
                    className={cn(
                      "text-3xl font-display font-medium tracking-tight",
                      "transition-colors duration-300 animate-fade-in",
                      "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    key={item.name}
                    href={getNavLink(item)}
                    onClick={toggleMenu}
                    className={cn(
                      "text-3xl font-display font-medium tracking-tight",
                      "transition-colors duration-300 animate-fade-in",
                      "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
