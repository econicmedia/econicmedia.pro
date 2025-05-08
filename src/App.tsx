import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResourceHints from './components/ResourceHints';
import usePerformanceMonitoring from './hooks/use-performance-monitoring';
import './lib/custom-properties.css';

// Use React.lazy for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin"></div>
  </div>
);

function App() {
  // Initialize Query Client
  const queryClient = new QueryClient();
  
  // Use performance monitoring hook
  usePerformanceMonitoring();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ResourceHints />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
