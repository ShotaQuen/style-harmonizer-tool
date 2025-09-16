import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PKSLoader from "./components/PKSLoader";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Perekrutan from "./pages/Perekrutan";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Galeri from "./pages/Galeri";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading if it hasn't been shown in this session
    return !sessionStorage.getItem('pks-loading-shown');
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('pks-loading-shown', 'true');
  };

  if (isLoading) {
    return <PKSLoader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/perekrutan" element={<Perekrutan />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/galeri" element={<Galeri />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
