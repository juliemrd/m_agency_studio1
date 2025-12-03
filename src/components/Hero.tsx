import { useEffect, useRef, useState } from "react";
import masLogo from "@/assets/mas-logo.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(36 30% 76% / 0.15) 0%, hsl(39 38% 96%) 40%, hsl(0 0% 100%) 100%)`,
      }}
    >
      {/* Subtle animated geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating line 1 */}
        <div
          className="absolute w-px h-40 bg-gradient-to-b from-transparent via-foreground/10 to-transparent"
          style={{
            left: `${20 + mousePosition.x * 10}%`,
            top: `${10 + mousePosition.y * 5}%`,
            transform: `rotate(${mousePosition.x * 15}deg)`,
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        {/* Floating line 2 */}
        <div
          className="absolute w-px h-60 bg-gradient-to-b from-transparent via-foreground/8 to-transparent"
          style={{
            right: `${15 + mousePosition.x * 8}%`,
            bottom: `${20 + mousePosition.y * 10}%`,
            transform: `rotate(${-mousePosition.y * 20}deg)`,
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        {/* Subtle circle */}
        <div
          className="absolute w-96 h-96 rounded-full border border-foreground/5"
          style={{
            right: `-${10 - mousePosition.x * 5}%`,
            top: `${20 + mousePosition.y * 10}%`,
            transform: `scale(${1 + mousePosition.x * 0.1})`,
            transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        {/* Small accent dot */}
        <div
          className="absolute w-2 h-2 rounded-full bg-foreground/20"
          style={{
            left: `${30 + mousePosition.x * 20}%`,
            bottom: `${30 + mousePosition.y * 15}%`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center px-6 md:px-8">
        {/* Logo */}
        <div className="mb-6 md:mb-8 animate-fade-up">
          <img
            src={masLogo}
            alt="M Agency Studio"
            className="w-48 h-auto sm:w-56 md:w-64 lg:w-72 xl:w-80 mx-auto object-contain"
          />
        </div>

        <p className="text-caption text-muted-foreground mb-6 md:mb-8 animate-fade-up-delay-1">
          Creative Consultancy
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-8 md:mb-10 animate-fade-up-delay-2">
          Contemporary Art
          <br />
          <span className="text-foreground/70">Meets Luxury Brands</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-3">
          We connect visionary artists with world-class brands, hotels, and iconic spaces to create extraordinary collaborations, installations, and limited-edition collections.
        </p>
      </div>
    </section>
  );
};

export default Hero;
