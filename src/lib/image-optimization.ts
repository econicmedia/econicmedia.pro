/**
 * Image optimization utilities to improve web performance
 */

import { useState, useEffect } from 'react';

/**
 * Creates a low-quality image placeholder URL
 * @param src The original image source
 * @param width Width of the LQIP
 * @param quality Quality of the LQIP (1-100)
 * @returns A data URL for the low-quality image
 */
export async function createLQIP(src: string, width = 20, quality = 20): Promise<string> {
  // This function would normally use server-side processing
  // For client-side, we'll return a simpler placeholder
  return src;
}

/**
 * Hook to lazy load images with IntersectionObserver
 * @param elementRef Reference to the element to observe
 * @param options IntersectionObserver options
 * @returns Whether the element is visible
 */
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '100px' }
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    // Store a reference to the current element to avoid closure issues
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [elementRef, options]);

  return isVisible;
}

/**
 * Optimized image component with lazy loading, LQIP and proper sizing
 */
type ImageLoaderProps = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  priority?: boolean; 
  className?: string;
  onLoad?: () => void;
};

export function generateSrcSet(src: string): string {
  // For local images, generate responsive sizes
  // For simplicity, we're returning the same src for all sizes
  return `${src} 1x, ${src} 2x`;
}

/**
 * Preloads critical images to improve LCP
 * @param imagePaths Array of image paths to preload
 */
export function preloadCriticalImages(imagePaths: string[]): void {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}
