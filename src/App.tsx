import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import ContactSales from "./pages/ContactSales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageLoader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/kaip-tai-veikia" element={<HowItWorks />} />
          <Route path="/naudojimo-atvejai" element={<UseCases />} />
          <Route path="/duk" element={<FAQ />} />
          <Route path="/apie-mus" element={<About />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
