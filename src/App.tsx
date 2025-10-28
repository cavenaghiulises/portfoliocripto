import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Intenta llamar a sdk.actions.ready() cuando el SDK esté disponible
    const tryReady = () => {
      const sdk = (window as any)?.sdk || (window as any)?.miniApp?.sdk;
      if (sdk?.actions?.ready) {
        sdk.actions.ready();
        return true;
      }
      return false;
    };

    // Llama de inmediato y reintenta un par de veces si el SDK aún no cargó
    if (!tryReady()) {
      const id = setInterval(() => {
        if (tryReady()) clearInterval(id);
      }, 200);
      setTimeout(() => clearInterval(id), 5000);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
