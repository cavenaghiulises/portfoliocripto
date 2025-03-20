
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-medium">
            <span className="text-primary font-semibold">Investopia</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Acerca de
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Portafolio
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contacto
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 text-sm font-medium text-primary border border-primary/20 rounded-full hover:bg-primary/5 transition-colors">
            Ingresar
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
            Comenzar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
