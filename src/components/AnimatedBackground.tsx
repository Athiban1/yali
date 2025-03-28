
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    const updateSize = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    let mouseX = 0;
    let mouseY = 0;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Create particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      maxDistance: number;
      originalX: number;
      originalY: number;

      constructor(isLight: boolean) {
        this.originalX = Math.random() * canvas.width;
        this.originalY = Math.random() * canvas.height;
        this.x = this.originalX;
        this.y = this.originalY;
        // Reduced particle size
        this.size = Math.random() * 1.8 + 0.8;
        this.speedX = 0;
        this.speedY = 0;
        this.maxDistance = Math.random() * 180 + 180;

        // Colors based on theme
        const colorOptions = isLight
          ? ['#d8b4fe', '#c084fc', '#a855f7', '#7e22ce'] // Light mode (pastel to vibrant purples)
          : ['#6d28d9', '#5b21b6', '#4c1d95', '#3b0764']; // Dark mode (rich and deep purples)
          
        this.color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
      }

      update(mouseX: number, mouseY: number) {
        // Calculate distance from original position
        const dx = mouseX - this.originalX;
        const dy = mouseY - this.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If mouse is close enough, move away from original position
        if (distance < this.maxDistance) {
          // Calculate how much to move (more distance = less movement)
          const force = (1 - distance / this.maxDistance) * 0.4;

          // Calculate target position (away from mouse)
          const targetX = this.originalX - dx * force;
          const targetY = this.originalY - dy * force;

          // Smoothly move towards target
          this.x += (targetX - this.x) * 0.15;
          this.y += (targetY - this.y) * 0.15;
        } else {
          // Return to original position
          this.x += (this.originalX - this.x) * 0.05;
          this.y += (this.originalY - this.y) * 0.05;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    // Generate particles
    const isLight = !document.documentElement.classList.contains("dark");
    const particleCount = Math.min(Math.max(window.innerWidth * window.innerHeight / 5500, 60), 200);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(isLight));
    }

    // Animation loop
    const animate = () => {
      if (!context) return;

      // Smooth mouse position
      lastX += (mouseX - lastX) * 0.1;
      lastY += (mouseY - lastY) * 0.1;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(lastX, lastY);
        particle.draw(context);
      });

      // Draw connections between nearby particles - increased visibility
      context.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Connection distance
            // Increased opacity for better visibility
            context.globalAlpha = (100 - distance) / 250; 
            context.strokeStyle = isLight ? "#3b82f6" : "#60a5fa";
            context.lineWidth = 0.6; // Slightly thinner lines
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      context.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};

export default AnimatedBackground;
