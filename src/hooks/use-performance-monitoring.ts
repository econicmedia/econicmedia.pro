import { useEffect } from 'react';

/**
 * Hook for monitoring and optimizing performance metrics
 * Helps improve Core Web Vitals and Vercel Speed Insights scores
 */
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Only run in production environment
    if (process.env.NODE_ENV !== 'production') return;
    
    // Report Web Vitals metrics for Speed Insights
    try {
      // Monitor First Input Delay (FID)
      new PerformanceObserver((entries) => {
        entries.getEntries().forEach((entry) => {
          // Report FID to console in development 
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', entry);
          }
        });
      }).observe({ type: 'first-input', buffered: true });
      
      // Monitor Largest Contentful Paint (LCP)
      new PerformanceObserver((entries) => {
        entries.getEntries().forEach((entry) => {
          // Report LCP to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', entry);
          }
        });
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Monitor Cumulative Layout Shift (CLS)
      new PerformanceObserver((entries) => {
        entries.getEntries().forEach((entry) => {
          // Report CLS to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log('CLS:', entry);
          }
        });
      }).observe({ type: 'layout-shift', buffered: true });
    } catch (error) {
      console.error('Error setting up performance monitoring:', error);
    }
  }, []);
}

export default usePerformanceMonitoring;
