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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300", scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-medium">
            <span className={cn("font-semibold", scrolled ? "text-black" : "text-primary")}>PortfolioCripto</span>
          </h1>
        </div>
      </div>
    </header>;
};
export default Header;