import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
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

    if (tryReady()) return;

    const t0 = Date.now();
    const id = setInterval(() => {
      if (tryReady() || Date.now() - t0 > 15000) clearInterval(id);
    }, 250);

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
