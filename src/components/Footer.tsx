import { cn } from "@/lib/utils";
const Footer = () => {
  return <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PortafolioCripto</h3>
            <p className="text-sm text-muted-foreground">Asesoramiento de inversión personalizado para cada nivel de riesgo.</p>
          </div>
          
          
          
          
          
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2025 PortafolioCripto. Creado por Ulises Cavenaghi. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="https://x.com/cavenaghiulises" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/cavenaghiulises/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;