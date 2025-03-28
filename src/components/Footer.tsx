
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-24 pb-12 bg-secondary/50 dark:bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top section with grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
          {/* Company info and newsletter */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <Link to="/">
              <img
                src="/yali.png"
                alt="Logo"
                className="h-12 w-auto mb-6"
              />
            </Link>

            <p className="text-foreground/70 mb-6 max-w-md font-modern">
              Building a sustainable future through intelligent AI solutions that meaningfully reduce environmental impact.
            </p>

            {/* Newsletter subscription */}
            <div className="mt-8">
              <h5 className="text-sm font-modern font-semibold uppercase tracking-wider mb-4">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-modern px-4 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 flex-grow"
                />
                <button className="font-modern px-5 py-2.5 rounded-lg bg-[#8353a5] text-white hover:bg-[#744698] transition-all flex items-center justify-center group">
                  Subscribe
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-modern font-semibold uppercase tracking-wider mb-5">Solutions</h4>
              <ul className="space-y-3 font-modern">
                {['EcoIntelligence', 'CarbonInsight', 'SustainAI Ecosystem', 'Energy Optimization'].map((item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="text-foreground/70 hover:text-foreground flex items-center group"
                    >
                      <span className="mr-2 h-px w-0 bg-primary group-hover:w-4 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-modern font-semibold uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-3 font-modern">
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Sustainability Report', href: '#about' },
                  { name: 'Research', href: '#products' },
                  { name: 'Press Kit', href: '#contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-foreground/70 hover:text-foreground flex items-center group"
                    >
                      <span className="mr-2 h-px w-0 bg-primary group-hover:w-4 transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-modern font-semibold uppercase tracking-wider mb-5">Resources</h4>
              <ul className="space-y-3 font-modern">
                {[
                  { name: 'Help Center', href: '#contact' },
                  { name: 'Contact Us', href: '#contact' },
                  { name: 'Blog', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-foreground/70 hover:text-foreground flex items-center group"
                    >
                      <span className="mr-2 h-px w-0 bg-primary group-hover:w-4 transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact and Social */}
          <div>
            <h4 className="text-sm font-modern font-semibold uppercase tracking-wider mb-5">Connect</h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center backdrop-blur-md hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-foreground/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center backdrop-blur-md hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-foreground/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center backdrop-blur-md hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-foreground/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center backdrop-blur-md hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-foreground/80" />
              </a>
            </div>

            <div className="font-modern">
              <p className="text-foreground/70 mb-1">hello@yali.com</p>
              <p className="text-foreground/70">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Divider with vertical lines */}
        <div className="relative h-px w-full bg-foreground/10 my-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 h-full w-px bg-foreground/20"></div>
          <div className="absolute top-0 left-2/4 h-full w-px bg-foreground/20"></div>
          <div className="absolute top-0 left-3/4 h-full w-px bg-foreground/20"></div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center font-modern">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Yali. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-medium text-green-800 dark:text-green-300">
              Carbon Neutral
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
