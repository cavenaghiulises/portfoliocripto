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
    const mark = (msg: string) => console.log(`[miniapp] ${msg}`);

    const getSdk = () =>
      (window as any)?.sdk ||
      (window as any)?.miniApp?.sdk ||
      (window as any)?.miniapp?.sdk ||
      (window as any)?.basekit?.sdk ||
      (window as any)?.basekit;

    const tryReady = () => {
      const sdk = getSdk();
      if (sdk?.actions?.ready) {
        sdk.actions.ready();
        mark("actions.ready() called");
        return true;
      }
      return false;
    };

    // 1) intento inmediato
    if (tryReady()) return;

    // 2) reintentos hasta 15s (por si el SDK tarda en inyectarse)
    const t0 = Date.now();
    const id = setInterval(() => {
      if (tryReady() || Date.now() - t0 > 15000) clearInterval(id);
    }, 250);

    // 3) intento extra al load
    const onLoad = () => { tryReady(); };
    window.addEventListener("load", onLoad);

    return () => {
      clearInterval(id);
      window.removeEventListener("load", onLoad);
    };
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
