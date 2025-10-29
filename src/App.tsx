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
    const getSdk = () =>
      (window as any)?.sdk ||
      (window as any)?.miniApp?.sdk ||
      (window as any)?.basekit?.sdk ||
      (window as any)?.basekit;

    const tryReady = () => {
      const sdk = getSdk();
      if (sdk?.actions?.ready) {
        sdk.actions.ready(); // 👈 avisa al visor de Base que la UI está lista
        return true;
      }
      return false;
    };

    if (!tryReady()) {
      const started = Date.now();
      const id = setInterval(() => {
        if (tryReady() || Date.now() - started > 15000) clearInterval(id);
      }, 250);
      const onLoad = () => { tryReady(); };
      window.addEventListener("load", onLoad);
      return () => {
        clearInterval(id);
        window.removeEventListener("load", onLoad);
      };
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
